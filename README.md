# PureFrequenze

Frequenze Solfeggio & Battimenti Binaurali per Benessere, Meditazione e Relax.

**Sito:** [purefrequenze.com](https://purefrequenze.com)

---

## Cos'è PureFrequenze

App web che genera frequenze Solfeggio (396–963 Hz) e battimenti binaurali tramite Web Audio API. Sistema freemium con trial guidato di 7 giorni e piano Premium (€5/mese o €42/anno).

### Piani
- **FREE** — 432 Hz × Deep Contemplation (7 combinazioni permanenti)
- **TRIAL 7gg** — 10–12 combinazioni personalizzate
- **PREMIUM** — Accesso completo, €5/mese o €42/anno

---

## File principali

| File | Descrizione |
|------|-------------|
| `index.html` | Hub Page v3.0 — app completa con React + Firebase (88KB) |
| `app.html` | App v1 — player frequenze standalone (66KB) |
| `CNAME` | Dominio custom: purefrequenze.com |

---

## Stack tecnico

- **Frontend:** React 18 + Web Audio API
- **Auth & DB:** Firebase (purefrequenze-35ff7)
- **Pagamenti:** Stripe via Firebase Functions
- **Audio CDN:** BunnyCDN (tunein.b-cdn.net)
- **Deploy:** GitHub Pages → purefrequenze.com

Dettagli in [`docs/TECH_STACK.md`](docs/TECH_STACK.md)

---

## Sviluppo

```bash
# Nessun build step necessario — modifica index.html e push
git add .
git commit -m "descrizione modifica"
git push origin main
# GitHub Pages fa il deploy automatico in ~2 min
```

> **Prima di modificare:** salva un backup in `../NUOVI_BACKUP/` con la data nel nome.

---

## Documentazione

- [`docs/STATUS.md`](docs/STATUS.md) — Stato funzionalità e changelog
- [`docs/NOTES.md`](docs/NOTES.md) — Note tecniche, URL, debug
- [`docs/TECH_STACK.md`](docs/TECH_STACK.md) — Stack e dipendenze
