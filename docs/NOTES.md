# Note Tecniche — PureFrequenze

**Ultimo aggiornamento:** 08 maggio 2026

---

## 🔗 URL & Endpoint

### Produzione
- **Web App:** https://purefrequenze.com
- **GitHub Pages fallback:** https://alessandromacco.github.io/purefrequenze/
- **Audio CDN:** https://tunein.b-cdn.net/
- **Traccia principale:** https://tunein.b-cdn.net/Track.01.mp3

### Sviluppo
- **GitHub Repository:** https://github.com/alessandromacco/purefrequenze
- **BunnyCDN Dashboard:** https://dash.bunny.net/
- **Firebase Console:** https://console.firebase.google.com/project/purefrequenze-35ff7
- **Storage Manager:** https://dash.bunny.net/storage/1277768/file-manager

---

## 🔑 Configurazione BunnyCDN

```
Storage Zone:  tunein (ID: 1277768)
Pull Zone:     tunein.b-cdn.net
CORS:          Abilitato su eot, ttf, woff, woff2, css, js, jpg, jpeg, png, mp3
SSL:           Attivo
```

---

## 🧮 Formule audio

### Conversione frequenza
```javascript
playbackRate = targetFrequency / STANDARD_FREQ  // STANDARD_FREQ = 440 Hz
```

### Esempi
```
Target: 396 Hz → playbackRate = 396/440 = 0.900
Target: 432 Hz → playbackRate = 432/440 = 0.982
Target: 528 Hz → playbackRate = 528/440 = 1.200
Target: 963 Hz → playbackRate = 963/440 = 2.189
```

---

## 📂 Struttura file (PRODUZIONE)

```
PRODUZIONE/
├── index.html      (Hub Page v3.0 — 88KB)
├── app.html        (App v1 — 66KB)
├── CNAME           (purefrequenze.com)
├── .gitignore
├── docs/
│   ├── STATUS.md
│   ├── NOTES.md    (questo file)
│   └── TECH_STACK.md
└── README.md
```

---

## 💻 Architettura React

### Componenti principali (index.html)
```
PureFrequenze (main)
├── State: isPremium, trialDaysLeft, selectedFreq, isPlaying, volume...
├── Refs: audioContextRef, sourceNodeRef, gainNodeRef, audioElementRef
└── Effects: setup audio, aggiornamento volume, conversione frequenza
```

### Codice chiave

**Setup audio (CORS critico):**
```javascript
const audio = new Audio(AUDIO_URL);
audio.crossOrigin = "anonymous";  // OBBLIGATORIO per Web Audio API + CDN
const AudioContext = window.AudioContext || window.webkitAudioContext;
audioContextRef.current = new AudioContext();
const source = audioContextRef.current.createMediaElementSource(audio);
source.connect(gainNode);
gainNode.connect(audioContextRef.current.destination);
```

**Conversione frequenza:**
```javascript
const ratio = targetFreq / STANDARD_FREQ;
audioElementRef.current.playbackRate = ratio;
```

---

## 🎨 Palette colori frequenze (Chakra)

```
396 Hz (Muladhara):    #ef4444  rosso
417 Hz (Svadhisthana): #f59e0b  arancione
432 Hz (Universale):   #10b981  verde
440 Hz (Standard):     #3b82f6  blu
528 Hz (Manipura):     #8b5cf6  viola
639 Hz (Anahata):      #ec4899  rosa
741 Hz (Vishuddha):    #f97316  arancione-rosso
852 Hz (Ajna):         #06b6d4  ciano
963 Hz (Sahasrara):    #a855f7  violetto
```

---

## ⚠️ Debito tecnico

### Babel standalone in produzione
L'app usa `@babel/standalone` per transpilare JSX nel browser (~800KB).
**Impatto:** lentezza su mobile, nessuna ottimizzazione bundle.
**Soluzione futura:** migrare a Vite + build step.

### track.mp3 nella git history
Il file audio (281MB) è presente nella history del repo git.
**Non impatta PRODUZIONE** (non è nel working tree).
**Pulizia futura:** usare BFG Repo Cleaner per rimuoverlo dalla history.

---

## 🔧 Workflow sviluppo

1. Modifica `PRODUZIONE/index.html` o `app.html`
2. Salva un backup in `../NUOVI_BACKUP/` con data nel nome
3. Testa nel browser
4. `git add . && git commit -m "descrizione"`
5. `git push origin main` → GitHub Pages fa deploy automatico in ~2 min

### Aggiungere audio su BunnyCDN
1. Vai su BunnyCDN Dashboard → Storage Zone "tunein"
2. Carica file via web interface
3. Disponibile su: `https://tunein.b-cdn.net/nomeFile.mp3`
4. Aggiorna `AUDIO_URL` nel codice

---

## 🌐 Compatibilità browser

| Browser | Web Audio API | Note |
|---------|--------------|-------|
| Chrome  | ✅ | Pieno supporto |
| Safari  | ✅ | Usa webkit prefix (già gestito) |
| Firefox | ✅ | Pieno supporto |
| Edge    | ✅ | Pieno supporto |
| iOS Safari | ⚠️ | Richiede interazione utente per AudioContext |

---

## 🆘 Problemi comuni

| Problema | Causa | Soluzione |
|----------|-------|-----------|
| Audio non parte | CORS non configurato | Verifica BunnyCDN CORS + `crossOrigin = "anonymous"` |
| Frequenza non cambia | playbackRate non aggiornato | Controlla targetHz / 440 |
| GitHub Pages non aggiorna | Cache browser | Ctrl+Shift+R oppure attendi 2-3 min |
| AudioContext suspended | Politica autoplay browser | Assicurarsi che play() sia chiamato dopo gesto utente |

---

## 📞 Riferimenti

- **Repository:** https://github.com/alessandromacco/purefrequenze
- **Maintainer:** Alessandro Macco (@alessandromacco)
- **BunnyCDN Support:** support@bunny.net
