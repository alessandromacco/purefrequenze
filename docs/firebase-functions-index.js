const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");

admin.initializeApp();

// ─── Secrets ──────────────────────────────────────────────────────────────────
const stripeSecretKey    = defineSecret("STRIPE_SECRET_KEY");
const stripeWebhookSecret = defineSecret("STRIPE_WEBHOOK_SECRET");

// ─── Price IDs Stripe (devono corrispondere a quelli in index.html) ────────────
const STRIPE_PRICES = {
  monthly: "price_1SudFEHbuezRUYTXf62voXdo",
  annual:  "price_1TQFuNHbuezRUYTX2cBvjPx2",
};

// ─── 1. createCheckoutSession ─────────────────────────────────────────────────
// FIX: era "createCheckout" → rinominata "createCheckoutSession" per match col frontend
// FIX: gestisce i due piani (monthly/annual) invece del price hardcoded
exports.createCheckoutSession = onCall(
  { secrets: [stripeSecretKey], region: "us-central1" },
  async (request) => {
    // Auth — l'utente può essere anonimo (signin anonimo fatto dal frontend)
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Autenticazione richiesta.");
    }

    const { plan } = request.data;
    if (!plan || !STRIPE_PRICES[plan]) {
      throw new HttpsError("invalid-argument", "Piano non valido. Usa 'monthly' o 'annual'.");
    }

    const stripe = require("stripe")(stripeSecretKey.value());
    const uid    = request.auth.uid;

    try {
      const session = await stripe.checkout.sessions.create({
        mode:                 "subscription",
        payment_method_types: ["card"],
        line_items: [{
          price:    STRIPE_PRICES[plan],
          quantity: 1,
        }],
        success_url: `https://purefrequenze.com/?premium=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:  "https://purefrequenze.com/?premium=cancelled",
        metadata: {
          userId: uid,
          plan:   plan,
        },
        // Associa il customer a Firebase UID per il webhook
        client_reference_id: uid,
      });

      return { url: session.url };

    } catch (err) {
      console.error("Stripe checkout error:", err);
      throw new HttpsError("internal", "Errore creazione checkout: " + err.message);
    }
  }
);

// ─── 2. stripeWebhook ─────────────────────────────────────────────────────────
// NUOVO: aggiorna isPremium su Firestore dopo pagamento confermato da Stripe
// Richiede configurazione webhook su dashboard Stripe →
//   Endpoint: https://us-central1-purefrequenze-35ff7.cloudfunctions.net/stripeWebhook
//   Events: checkout.session.completed, customer.subscription.deleted
exports.stripeWebhook = onRequest(
  { secrets: [stripeSecretKey, stripeWebhookSecret], region: "us-central1" },
  async (req, res) => {
    const stripe    = require("stripe")(stripeSecretKey.value());
    const sig       = req.headers["stripe-signature"];
    const endpointSecret = stripeWebhookSecret.value();

    let event;
    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (err) {
      console.error("Webhook signature error:", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    const db = admin.firestore();

    switch (event.type) {

      // Pagamento completato → attiva premium
      case "checkout.session.completed": {
        const session = event.data.object;
        const uid     = session.client_reference_id;
        if (!uid) { console.warn("Nessun UID nel metadata"); break; }

        await db.collection("users").doc(uid).set({
          isPremium:          true,
          subscriptionId:     session.subscription,
          stripeCustomerId:   session.customer,
          plan:               session.metadata?.plan || "monthly",
          premiumSince:       admin.firestore.FieldValue.serverTimestamp(),
          premiumUpdatedAt:   admin.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });

        console.log(`✅ Premium attivato per UID: ${uid}`);
        break;
      }

      // Abbonamento cancellato → rimuovi premium
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const customerId   = subscription.customer;

        // Cerca l'utente per stripeCustomerId
        const snap = await db.collection("users")
          .where("stripeCustomerId", "==", customerId)
          .limit(1)
          .get();

        if (!snap.empty) {
          const uid = snap.docs[0].id;
          await db.collection("users").doc(uid).update({
            isPremium:        false,
            premiumUpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          console.log(`❌ Premium rimosso per UID: ${uid}`);
        }
        break;
      }

      default:
        console.log(`Evento ignorato: ${event.type}`);
    }

    res.status(200).json({ received: true });
  }
);

// ─── 3. checkPremium ──────────────────────────────────────────────────────────
// Verifica lo stato premium di un utente (usato come fallback lato client)
exports.checkPremium = onCall(
  { region: "us-central1" },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Autenticazione richiesta.");
    }
    const doc = await admin.firestore()
      .collection("users")
      .doc(request.auth.uid)
      .get();

    return {
      isPremium: doc.exists && doc.data().isPremium === true,
    };
  }
);
