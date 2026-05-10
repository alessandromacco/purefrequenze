# Tech Stack — PureFrequenze

**Ultimo aggiornamento:** 08 maggio 2026

---

## Frontend

- **React 18** (via CDN unpkg)
- **Babel Standalone** (transpiling JSX in-browser — da migrare a Vite)
- **Web Audio API** (conversione frequenza, controllo audio)
- **Firebase SDK 10.8.0** (auth, firestore, functions)

---

## Hosting & CDN

### GitHub Pages
- **URL:** https://purefrequenze.com (via CNAME)
- **Fallback:** https://alessandromacco.github.io/purefrequenze/
- **Deploy:** Automatico su push al branch main

### BunnyCDN
- **Storage Zone:** tunein (ID: 1277768)
- **Pull Zone:** tunein.b-cdn.net
- **CDN URL:** https://tunein.b-cdn.net/
- **CORS:** Abilitato su mp3, wav, js, css e altri

---

## Backend

### Firebase (purefrequenze-35ff7)
- **Auth:** Email/password + Google OAuth
- **Firestore:** Gestione utenti, abbonamenti, stato trial
- **Functions:** Webhook Stripe, logica freemium

### Cloudflare Workers
- **Config:** wrangler.jsonc (branch cloudflare/workers-autoconfig)
- **Scopo:** Audio processing / edge routing

### Stripe
- **Piano:** Freemium con Trial 7 giorni
- **PREMIUM:** €5/mese o €42/anno
- **Webhook:** gestito da Firebase Functions

---

## Repository

- **Piattaforma:** GitHub
- **Owner:** alessandromacco
- **Repo:** purefrequenze *(nome legacy — considera rinominare in "purefrequenze")*
- **Branch principale:** main
- **URL:** https://github.com/alessandromacco/purefrequenze

---

## Struttura file (PRODUZIONE)

```
PRODUZIONE/
├── index.html          (Hub Page v3.0 — 88KB)
├── app.html            (App v1 — 66KB)
├── CNAME               (purefrequenze.com)
├── .gitignore
├── docs/
│   ├── TECH_STACK.md   (questo file)
│   ├── STATUS.md
│   └── NOTES.md
└── README.md
```

---

## Dipendenze CDN (index.html)

```html
<!-- React 18 -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Babel Standalone (debito tecnico: ~800KB, valutare Vite) -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- Firebase 10.8.0 -->
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-functions-compat.js"></script>

<!-- Font -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## API Browser utilizzate

- **Web Audio API** — AudioContext, MediaElementSource, GainNode, playbackRate
- **HTML5 Audio Element** — Playback, seeking, time tracking
- **Firebase Auth** — Autenticazione utenti
- **Firebase Firestore** — Persistenza dati

---

## Formule audio

```javascript
// Conversione frequenza
playbackRate = targetFrequency / 440  // 440 Hz = standard internazionale

// Esempi:
// 432 Hz → 0.982 (più lento/basso)
// 528 Hz → 1.200 (più veloce/alto)
// 963 Hz → 2.189
```

### Frequenze Solfeggio disponibili
| Hz | Nome | Chakra |
|----|------|--------|
| 396 | Liberazione paura | Muladhara |
| 417 | Cambiamento | Svadhisthana |
| 432 | Armonia universale | — |
| 440 | Standard occidentale | — |
| 528 | Frequenza dell'amore | Manipura |
| 639 | Connessione | Anahata |
| 741 | Espressione | Vishuddha |
| 852 | Intuizione | Ajna |
| 963 | Unità | Sahasrara |

---

## Compatibilità browser

| Browser | Testato | Note |
|---------|---------|------|
| Chrome Desktop | ✅ | Funzionante |
| Safari Desktop | ⬜ | Da testare |
| Firefox Desktop | ⬜ | Da testare |
| Edge Desktop | ⬜ | Da testare |
| iOS Safari | ⬜ | AudioContext richiede gesto utente |
| Chrome Mobile | ⬜ | Da testare |

---

## Debiti tecnici

| Problema | Impatto | Soluzione |
|----------|---------|-----------|
| Babel standalone in produzione | ~800KB extra, lento su mobile | Migrare a Vite |
| track.mp3 nella git history | Repo pesante | BFG Repo Cleaner |
| Repo nominata `purefrequenze` | Confonde il branding | Rinominare su GitHub |
