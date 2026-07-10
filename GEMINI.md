# Aerwood - Specifiche Sito Vetrina

Questo file contiene le linee guida fondamentali, i token di design e le specifiche dell'architettura tecnica per il sito vetrina di Aerwood.

## 1. Sistema di Design & Identità del Brand


Aerwood si posiziona come un brand B2B di lusso e premium industriale, specializzato in pannelli in legno di alta gamma, soluzioni fonoassorbenti per l'acustica e rivestimenti architettonici personalizzati (cladding).

### 1.1 Tavolozza dei Colori (Proprietà Personalizzate CSS)
```css
:root {
  --primary-dark: #1A1A1A;       /* Grigio antracite scuro / Nero fumo per testi, intestazioni e sfondi scuri */
  --primary-wood: #C29B38;       /* Ocra Calda/Bronzo-Oro per elementi UI attivi premium ed evidenziazioni */
  --primary-accent: #8A6546;     /* Marrone Noce caldo per richiamare la finitura del legno */
  --bg-light: #FAFAFA;           /* Sfondo grigio/beige caldissimo per sezioni prodotto ad alto contrasto */
  --bg-dark: #111111;            /* Antracite ancora più scuro per hero, footer e blocchi scuri */
  --text-dark: #222222;          /* Testo standard su sfondi chiari */
  --text-light: #F5F5F5;         /* Testo standard su sfondi scuri */
  --border-color: #E0E0E0;       /* Bordi grigi chiari */
  --eco-green: #2E7D32;          /* Verde foresta per le caratteristiche di sostenibilità ed eco */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### 1.2 Filosofia di Design
- **Precisione & Struttura:** Margini puliti, strutture a griglia rigida e bordi netti che rappresentano l'eccellenza tecnica e architettonica.
- **Artigianalità & Materia:** Texture ricche (simulate tramite SVG & CSS) incentrate sulle venature naturali del legno, stili rovere, noce e frassino scuro.
- **Interattività:** Transizioni fluide al passaggio del mouse, evidenziazioni degli stati attivi e una simulazione interattiva di render in tempo reale nella galleria configuratore.

---

## 2. Architettura Tecnica & Routing

L'applicazione è sviluppata in Angular 19+ con Server-Side Rendering (SSR) abilitato.

### 2.1 Struttura dei File
- `src/styles.scss` - Reset globali, font, proprietà CSS personalizzate e classi di utilità.
- `src/app/services/language.service.ts` - Servizio Singleton per la gestione dello stato e delle traduzioni.
- `src/app/i18n/` - Sottocartella contenente:
  - `translation.interface.ts` - Interfaccia TypeScript rigorosa per le traduzioni.
  - `it.ts` - Dizionario in lingua italiana.
  - `en.ts` - Dizionario in lingua inglese.
- `src/app/app.ts` - Componente principale con lo stato dei render interattivi e del form contatti.
- `src/app/app.html` - Struttura HTML semantica della pagina vetrina.
- `src/app/app.scss` - Stili scopi del componente principale per le varie sezioni.

---

## 3. Internazionalizzazione (i18n)

Per evitare complesse configurazioni di compilazione o pesanti dipendenze a runtime, Aerwood utilizza un motore **i18n basato su Angular Signals**:
- Stato: Gestito in `LanguageService` tramite un segnale `language` (`'it' | 'en'`).
- Sicurezza SSR: Lato server (durante l'SSR), la lingua predefinita è `'it'`. Lato client, l'applicazione carica e memorizza automaticamente la scelta dell'utente in `localStorage`.
- Dizionario di Traduzione: Dizionari TypeScript tipizzati che implementano una comune interfaccia `Translations`, garantendo l'allineamento perfetto delle chiavi tra le lingue.

---

## 4. Galleria Render Interattiva (Configuratore)

La galleria presenta un mockup vettoriale interattivo avanzato (in formato SVG) che rappresenta un ambiente architettonico reale.
- Path specifici dell'SVG sono mappati alle aree dei pannelli (es. parete d'accento, boiserie).
- Un segnale di Angular tiene traccia della finitura attualmente selezionata (`'walnut' | 'oak' | 'charcoal'`).
- L'SVG riempie dinamicamente questi path caricando definizioni di `<pattern>` che riproducono listelli verticali in legno moderni di varie essenze. Quando l'utente preme un pulsante di selezione, il segnale cambia, provocando il ridisegno istantaneo e fluido dell'ambiente senza alcun lag di caricamento immagini.

---

## 5. Distribuzione e Deploy su Netlify

Il sito è configurato per essere distribuito su **Netlify** come sito statico prerenderizzato ad altissime prestazioni (SSG).

### 5.1 File di Configurazione `netlify.toml`
Abbiamo incluso un file `netlify.toml` nella radice del progetto che imposta automaticamente:
1.  **Command di Build**: `npm run build` (che genera la build ottimizzata e prerenderizza il sito).
2.  **Publish Directory**: `dist/aerwood/browser` (la cartella contenente i file statici finali).
3.  **Regole di Redirect**: Redirige tutto il traffico a `/index.html` per evitare errori 404 in caso di routing SPA su link interni.

### 5.2 Istruzioni per il Deploy
Se colleghi il repository Git a Netlify:
- Netlify leggerà automaticamente il file `netlify.toml` configurando la build in un click.
- Ad ogni commit sul ramo principale (es. `main` o `master`), Netlify effettuerà il deploy automatico (Continuous Deployment).

---

## 6. Ottimizzazione Responsive & Supporto Mobile

La bozza del sito vetrina di Aerwood è progettata con un approccio **Mobile-First** e un layout completamente fluido per garantire un'esperienza d'uso impeccabile su schermi di qualsiasi dimensione (dagli smartphone più compatti ai display desktop ultrawide).

### 6.1 Strategie di Adattamento Mobile
- **Navigazione Sincronizzata**: Il menu della testata (`HeaderComponent`) si trasforma su schermi inferiori a `768px` in un cassetto di navigazione a schermo intero animato in CSS. La transizione della barra hamburger a forma di "X" e la chiusura automatica dei link al click offrono un feedback d'uso istantaneo e naturale.
- **Griglie Responsive Fluide**: Le sezioni di catalogo (`Products`), i vantaggi (`WhyWpc`), la cartella colori (`Colors`) e l'area tecnica (`Technical`) utilizzano griglie CSS (`CSS Grid`) con raggruppamento e scalabilità automatica a seconda della larghezza del viewport (es. da 5 colonne su desktop a 1 colonna su piccoli smartphone).
- **Elementi di Testo Line-Clamping**: Le descrizioni dei prodotti sono bloccate rigidamente a 2 righe tramite CSS `-webkit-line-clamp` per impedire asimmetrie estetiche o overflow testuali disordinati su mobile.
- **Grafica SVG Scalabile**: Sia il dettagliato schema tecnico della *Facciata Ventilata* sia il *Configuratore Interattivo* in SVG utilizzano un sistema di coordinate responsive `viewBox` che permette loro di rimpicciolirsi senza perdere definizione, mantenendo leggibili testi, staffe e frecce del moto d'aria su tutti i telefoni.

