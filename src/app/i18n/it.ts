import { Translations } from './translation.interface';

export const it: Translations = {
  nav: {
    home: 'Home',
    products: 'Prodotti',
    technicalArea: 'Area Tecnica',
    certifications: 'Certificazioni',
    catalogs: 'Cataloghi',
    projects: 'Progetti',
    about: 'Chi siamo',
    contacts: 'Contatti',
    quoteCta: 'Richiedi preventivo'
  },
  home: {
    badge: 'SISTEMA DI RIVESTIMENTO PER FACCIATE VENTILATE · FOAM WPC',
    title: 'La calma del legno,\nla forza del composito.',
    subtitle: 'Quattro profili, sette finiture e un sistema di posa a scomparsa brevettato. Progettato e prodotto in Italia da Forte Srl, dal 1968.',
    ctaProfiles: 'Scopri i profili',
    ctaTechnical: "Vai all'Area Tecnica",
    quickLinks: {
      technical: {
        title: 'Area Tecnica',
        desc: 'Schede tecniche, istruzioni di posa, voci di capitolato e disegni per progettisti e posatori.',
        cta: 'Accesso riservato →'
      },
      certifications: {
        title: 'Certificazioni',
        desc: 'Reazione al fuoco B-s2,d0, marcatura CE EN 13245, sistema qualità ISO 9001 e 14001.',
        cta: 'Prestazioni dichiarate →'
      },
      catalogs: {
        title: 'Cataloghi',
        desc: 'Catalogo AIRWOOD 2026, cartella colori e documenti scaricabili in PDF.',
        cta: 'Scarica →'
      },
      products: {
        title: 'Prodotti',
        desc: 'I quattro profili a confronto: dati dimensionali, peso, trasmittanza e finiture.',
        cta: 'Confronta i profili →'
      }
    },
    profilesHeader: {
      badge: 'I PROFILI',
      title: 'Un solo sistema, quattro disegni di superficie',
      subtitle: 'Stessa posa, stessa sottostruttura, stessa gamma colori: cambiano il ritmo e la profondità della facciata.'
    },
    technology: {
      badge: 'LA TECNOLOGIA · FOAM WPC',
      title: 'Anima espansa, film coestruso, posa a scomparsa',
      statWeight: '0,75 m²',
      statWeightLabel: 'Leggerezza',
      statWeightDesc: 'Anima espansa a celle chiuse: meno peso e posa più semplice. Pannello da 3000 mm, larghezza utile 250 mm.',
      statU: '2,72–2,87',
      statULabel: 'Isolamento · W/m²K',
      statUDesc: 'Trasmittanza termica calcolata secondo EN ISO 6946 sulla sezione di ciascun profilo.',
      statFire: 'B-s2,d0',
      statFireLabel: 'Protezione',
      statFireDesc: 'Film coestruso con protezione UV a difesa di colore e superficie. Reazione al fuoco EN 13501-1.',
      statPatent: 'Brevetto',
      statPatentLabel: 'Sistema AIR',
      statPatentDesc: 'Ganci e profili a scomparsa: nessun foro né fissaggio a vista, pannelli rimovibili in qualsiasi momento.'
    },
    applications: {
      badge: 'APPLICAZIONI',
      title: 'Dove vive AIRWOOD',
      interior: 'Pareti interne',
      exterior: 'Pareti esterne',
      ceilings: 'Soffitti',
      ventilatedFacades: 'Facciate ventilate'
    },
    finishes: {
      badge: 'FINITURE',
      title: 'Sette tonalità su tutti i profili',
      catalogBtn: 'Cartella colori',
      disclaimer: 'AIRWOOD 25-4 è disponibile anche con pellicolati RENOLIT EXOFOL per esterni (collezione Colour Road 26/27). Le tonalità riprodotte sono indicative: fa fede il campione fisico.',
      colors: [
        { name: 'Bianco', code: 'COD. 244' },
        { name: 'Sabbia', code: 'COD. 400' },
        { name: 'Grigio perla', code: 'COD. 401' },
        { name: 'Miele', code: 'COD. 402' },
        { name: 'Avorio', code: 'COD. 403' },
        { name: 'Carbone', code: 'COD. 405' },
        { name: 'Caffè', code: 'COD. 406' }
      ]
    },
    projectsBanner: {
      badge: 'REALIZZAZIONI',
      title: 'Facciate e ambienti'
    },
    technicalBanner: {
      badge: 'AREA TECNICA · ACCESSO RISERVATO',
      title: 'Tutto ciò che serve per progettare e posare',
      desc: 'Schede tecniche, istruzioni di montaggio, voci di capitolato, dichiarazioni di prestazione, disegni e scheda materiali. Registrati gratuitamente come progettista, posatore o rivenditore.',
      loginBtn: 'Accedi',
      registerBtn: 'Registrati'
    },
    contactsPreview: {
      badge: 'CONTATTI E PREVENTIVI',
      title: 'Parliamo del tuo progetto',
      desc: 'Richiedi un preventivo, un campione fisico o la consulenza di un tecnico specializzato.'
    }
  },
  products: {
    badge: 'PRODOTTI · SISTEMA AIRWOOD',
    title: 'Quattro profili, un solo sistema di posa.',
    intro: 'Tutti i profili condividono larghezza utile (250 mm), lunghezza standard (3000 mm), sistema di aggancio AIR a scomparsa e gamma colori. Cambiano ritmo della superficie, spessore e peso.',
    compareTitle: 'Confronto dei profili',
    headers: {
      feature: 'Caratteristica',
      p25_4: '25-4',
      p25_7: '25-7',
      p25_10: '25-10',
      p25_mix: '25-MIX'
    },
    features: {
      design: 'Disegno',
      thickness: 'Spessore',
      usefulWidth: 'Larghezza utile di posa',
      standardLength: 'Lunghezza standard',
      yieldPerPanel: 'Resa per pannello',
      linearWeight: 'Peso lineare',
      sqmWeight: 'Peso al m²',
      uValue: 'Trasmittanza U (EN ISO 6946)',
      fireReaction: 'Reazione al fuoco',
      finishes: 'Finiture'
    },
    profiles: [
      {
        id: '25-4',
        badge: 'PROFILO 01 · 4 DOGHE AMPIE',
        name: 'AIRWOOD 25-4',
        desc: 'Quattro doghe larghe scandite da gole sottili. Il giunto tra i pannelli si legge come una delle gole e rende la facciata continua: la soluzione più adatta a progetti minimali e a rivestimenti di grandi dimensioni. Disponibile anche con pellicolati RENOLIT EXOFOL per esterni.',
        thickness: '25 mm spessore',
        uValue: 'U 2,72 W/m²K',
        sqmWeight: '8,00 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Campi di impiego: facciate ventilate, pareti esterne e interne protette, controsoffitti esterni, frangisole.',
        ctaTech: 'Scheda tecnica e posa',
        ctaCatalog: 'Colori e catalogo',
        image: '/assets/images/profiles/AIRWOOD_25-4_1.png',
        ambientImage: '/assets/images/ambient/Esterno_villa_due_piani.jpg'
      },
      {
        id: '25-7',
        badge: 'PROFILO 02 · 7 DOGHE',
        name: 'AIRWOOD 25-7',
        desc: 'Sette doghe di larghezza media separate da gole profonde. L’ombra netta disegna la facciata anche a grande distanza: è il profilo più scenografico della gamma.',
        thickness: '25 mm spessore',
        uValue: 'U 2,76 W/m²K',
        sqmWeight: '10,40 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Campi di impiego: facciate ventilate, fronti commerciali e ricettivi, pareti esterne, elementi di schermatura.',
        ctaTech: 'Scheda tecnica e posa',
        ctaCatalog: 'Colori e catalogo',
        image: '/assets/images/profiles/AIRWOOD_25-7_1.png',
        ambientImage: '/assets/images/ambient/Esterno_volume_piscina.png'
      },
      {
        id: '25-10',
        badge: 'PROFILO 03 · 10 DOGHE STRETTE',
        name: 'AIRWOOD 25-10',
        desc: 'Il disegno più minuto della linea: dieci nervature ravvicinate che restituiscono una superficie vibrante e uniforme. La scelta per volumi compatti e facciate viste da breve distanza.',
        thickness: '25 mm spessore',
        uValue: 'U 2,87 W/m²K',
        sqmWeight: '10,00 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Campi di impiego: facciate ventilate, pareti esterne e interne protette, controsoffitti esterni, schermature.',
        ctaTech: 'Scheda tecnica e posa',
        ctaCatalog: 'Colori e catalogo',
        image: '/assets/images/profiles/AIRWOOD_25-10_1.png',
        ambientImage: '/assets/images/ambient/Interno_soggiorno_parete_chiara.png'
      },
      {
        id: '25-mix',
        badge: 'PROFILO 04 · LISCIO + RIGATO',
        name: 'AIRWOOD 25-MIX',
        desc: 'Un disegno composito che alterna doghe piane a fasce di rigatura sottile: la superficie cambia grana al variare della luce nel corso della giornata. Molto efficace sulle grandi superfici cieche.',
        thickness: '19 mm spessore',
        uValue: 'U 2,82 W/m²K',
        sqmWeight: '7,00 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Campi di impiego: facciate ventilate, grandi superfici cieche, recinzioni e delimitazioni, pareti esterne.',
        ctaTech: 'Scheda tecnica e posa',
        ctaCatalog: 'Colori e catalogo',
        image: '/assets/images/profiles/AIRWOOD_25-MIX_1.png',
        ambientImage: '/assets/images/ambient/Interno_parete_libreria.jpg'
      }
    ],
    accessoriesTitle: 'Ganci AIR, basi e finiture in tinta',
    accessoriesSubtitle: 'Il fissaggio avviene tramite ganci AIR (PVC per interni, alluminio per esterni e facciate ventilate). Basi, terminali e angolari completano i bordi del rivestimento.',
    accessories: [
      { code: 'RA210', element: 'Gancio AIR in PVC', usage: 'Applicazioni interne', format: '63 × 7,35 × 100 mm' },
      { code: 'RA210L', element: 'Gancio AIR in PVC, barra', usage: 'Applicazioni interne', format: '63 × 7,35 × 3000 mm' },
      { code: 'RA211', element: 'Gancio AIR in alluminio', usage: 'Esterni e facciate ventilate', format: '63 × 8,4 × 100 mm' },
      { code: 'RA211L', element: 'Gancio AIR in alluminio, barra', usage: 'Esterni e facciate ventilate', format: '63 × 8,4 × 3000 mm' },
      { code: 'RA220F', element: 'Base universale', usage: 'Riceve terminale e angolare', format: '28,4 × 16,9 × 3000 mm' },
      { code: 'RA221M', element: 'Terminale', usage: 'Chiusura laterale, superiore, aperture', format: '71 × 29 × 3000 mm' },
      { code: 'RA222M', element: 'Angolare esterno', usage: 'Spigolo esterno a 90°', format: '100 × 29 × 3000 mm' }
    ],
    ctaBox: {
      title: 'Serve il dettaglio tecnico?',
      desc: 'Schede tecniche complete, istruzioni di montaggio, voci di capitolato e disegni sono nell’Area Tecnica riservata.',
      btn: "Vai all'Area Tecnica"
    }
  },
  technicalArea: {
    badge: 'AREA TECNICA · ACCESSO RISERVATO',
    title: 'Documentazione per progettisti, posatori e rivenditori.',
    subtitle: 'Accedi per scaricare schede tecniche, istruzioni di montaggio, voci di capitolato, dichiarazioni di prestazione e disegni.',
    loginTitle: 'Accedi',
    loginDesc: 'Inserisci le tue credenziali di accesso per consultare i documenti protetti.',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    loginBtn: 'Accedi',
    forgotPasswordBtn: 'Password dimenticata?',
    registerTitle: 'Registrati',
    registerDesc: 'Crea il tuo account in pochi secondi per consultare e scaricare subito tutta la documentazione tecnica e le istruzioni di posa.',
    fullNameLabel: 'Nome e cognome',
    companyLabel: 'Azienda / studio',
    roleLabel: 'Ruolo professionale',
    registerBtn: 'Registrati e accedi',
    roles: {
      architect: 'Progettista / Architetto',
      installer: 'Posatore / Installatore',
      dealer: 'Rivenditore',
      contractor: 'Impresa edile',
      other: 'Altro professionista'
    },
    overviewTitle: "Cosa trovi nell'area riservata",
    overviewItems: [
      { title: 'Schede tecniche', desc: 'Dati dimensionali, prestazioni e calcolo della trasmittanza.' },
      { title: 'Istruzioni di posa', desc: 'Guida illustrata passo per passo, con modalità di fissaggio.' },
      { title: 'Capitolati', desc: 'Voci di capitolato pronte da inserire nel computo metrico.' },
      { title: 'Dichiarazioni', desc: 'DoP e marcatura CE, sistema VVCP 4.' },
      { title: 'Disegni', desc: 'Dettagli costruttivi di facciata ventilata in DWG e PDF.' }
    ],
    dashboard: {
      welcome: 'Benvenuto nell’Area Tecnica AIRWOOD',
      profileInfo: 'Sei collegato con profilo professionale verificato.',
      logoutBtn: 'Disconnetti',
      searchPlaceholder: 'Cerca tra i documenti (es. posa, 25-4, capitolato)...',
      filterAll: 'Tutti i prodotti',
      filterProfile: 'Filtra per profilo',
      filterType: 'Filtra per tipologia',
      types: {
        datasheet: 'Schede tecniche',
        installation: 'Istruzioni di posa',
        specs: 'Voci di capitolato',
        declaration: 'Dichiarazioni',
        cad: 'Disegni DWG / PDF'
      },
      statusDraft: 'Bozza in revisione',
      statusAvailable: 'Disponibile al download',
      statusComingSoon: 'In arrivo',
      downloadBtn: 'Scarica documento',
      noResults: 'Nessun documento trovato con i filtri selezionati.'
    }
  },
  certifications: {
    badge: 'CERTIFICAZIONI · PRESTAZIONI DICHIARATE',
    title: 'Prestazioni dichiarate, documentate e verificabili.',
    subtitle: 'AIRWOOD è marcato CE secondo EN 13245, con reazione al fuoco B-s2,d0. Prodotto in regime di qualità certificato ISO 9001 e ISO 14001.',
    cards: {
      fire: {
        code: 'B-s2,d0',
        title: 'Reazione al fuoco',
        desc: 'Classificazione secondo EN 13501-1:2019, con condizioni di montaggio verificate in prova SBI (EN 13823:2020).'
      },
      ce: {
        code: 'CE',
        title: 'Marcatura EN 13245',
        desc: 'Norma armonizzata EN 13245-1 / -2, Reg. UE 305/2011, sistema di valutazione e verifica della costanza della prestazione 4.'
      },
      iso: {
        code: 'ISO 9001 · 14001',
        title: 'Qualità e Ambiente',
        desc: "Sistema di gestione integrato per la qualità e per l'ambiente dello stabilimento di produzione ad Altamura (BA)."
      }
    },
    tableTitle: 'Tabella delle prestazioni',
    tableHeaders: {
      char: 'Caratteristica',
      norm: 'Norma',
      val: 'Valore'
    },
    tableRows: [
      { char: 'Reazione al fuoco', norm: 'EN 13501-1:2019', val: 'B-s2, d0' },
      { char: 'Condizioni di montaggio (prova SBI)', norm: 'EN 13823:2020', val: 'DVM, DHM, AVM, AHM' },
      { char: 'Durabilità interno', norm: 'EN 13245-1 App. B', val: '23,10' },
      { char: 'Durabilità esterno', norm: 'EN 13245-1 App. C', val: '8,25' },
      { char: 'Resistenza meccanica', norm: 'EN 13245-1 App. B', val: '23,10' },
      { char: 'Sistema VVCP', norm: 'Reg. UE 305/2011', val: 'Sistema 4' },
      { char: 'Marcatura', norm: 'EN 13245-1 / -2', val: 'CE' },
      { char: 'Dichiarazione di prestazione', norm: 'Reg. UE 305/2011', val: 'DoP FORTE 2021/01 Rev. 1' }
    ],
    footnote: 'Valori della mescola base comune a tutti i profili della linea AIRWOOD.',
    documentsTitle: 'Certificati e rapporti di prova',
    documents: [
      {
        title: 'Dichiarazione di prestazione DoP FORTE 2021/01 Rev. 1',
        subtitle: 'PDF · Reg. UE 305/2011 · EN 13245-2:2009',
        status: 'In arrivo'
      },
      {
        title: 'Certificato ISO 9001 · Sistema di gestione per la qualità',
        subtitle: 'PDF · Certificazione stabilimento di Altamura',
        status: 'In arrivo'
      },
      {
        title: 'Certificato ISO 14001 · Sistema di gestione ambientale',
        subtitle: 'PDF · Conformità ambientale e sostenibilità',
        status: 'In arrivo'
      },
      {
        title: 'Rapporto di classificazione al fuoco EN 13501-1',
        subtitle: 'PDF · B-s2, d0 · Rapporto di prova ufficiale',
        status: 'In arrivo'
      },
      {
        title: 'Rapporto di prova SBI EN 13823:2020',
        subtitle: 'PDF · Condizioni di montaggio DVM, DHM, AVM, AHM',
        status: 'In arrivo'
      }
    ],
    disclaimer: 'Le dichiarazioni di prestazione sono pubbliche e non richiedono login.',
    ctaTitle: 'Ti serve una DoP o un rapporto di prova per un progetto?',
    ctaDesc: 'Indica prodotto, finitura e cantiere: ti rispondiamo con la documentazione corretta.',
    ctaBtn: 'Richiedi la documentazione'
  },
  catalogs: {
    badge: 'CATALOGHI',
    title: 'Catalogo, cartella colori e documenti scaricabili.',
    subtitle: 'I documenti commerciali sono liberi. Schede tecniche, istruzioni di posa e capitolati sono nell’Area Tecnica.',
    generalCatalog: {
      badge: 'CATALOGO GENERALE',
      title: 'Catalogo AIRWOOD 2026',
      desc: 'Il sistema, la tecnologia FOAM WPC, i quattro profili con dati tecnici, finiture e certificazioni.',
      specs: 'PDF · 18 pagine · IT / EN · 31 MB',
      btn: 'Scarica il catalogo'
    },
    colorFolder: {
      badge: 'FINITURE',
      title: 'Cartella colori',
      desc: 'Sette tonalità standard su tutti i profili e pellicolati RENOLIT EXOFOL per AIRWOOD 25-4. Fa fede il campione fisico.',
      specs: 'PDF · IT / EN · Scheda colori completa',
      btn: 'Scarica la cartella colori',
      sampleBtn: 'Richiedi un campione'
    },
    technicalSection: {
      title: 'Documentazione tecnica',
      subtitle: 'Disponibile dopo il login nell’Area Tecnica.',
      items: [
        { title: 'Schede tecniche', desc: 'Una scheda per ciascun profilo: dati dimensionali, prestazioni, calcolo U.', cta: 'Accedi per scaricare →' },
        { title: 'Istruzioni di montaggio', desc: 'Guida illustrata alla posa, con le quattro modalità di fissaggio.', cta: 'Accedi per scaricare →' },
        { title: 'Voci di capitolato', desc: 'Testi pronti per computi e specifiche di progetto.', cta: 'Accedi per scaricare →' },
        { title: 'Disegni e dettagli', desc: 'Dettagli di facciata ventilata in DWG e PDF.', cta: 'Accedi per scaricare →' }
      ]
    },
    indexTitle: 'Cosa contiene il catalogo 2026',
    indexItems: [
      { title: 'Il brand AIRWOOD', page: 'pag. 3' },
      { title: 'La tecnologia FOAM WPC', page: 'pag. 4' },
      { title: 'Campi di applicazione', page: 'pag. 5' },
      { title: 'Sistema di posa brevettato a scomparsa', page: 'pag. 6' },
      { title: 'Profili AIRWOOD 25-4, 25-7, 25-10, 25-MIX con dati tecnici', page: 'pag. 7–14' },
      { title: 'Gamma colori e finiture RENOLIT EXOFOL', page: 'pag. 15–16' },
      { title: 'Certificazioni e prestazioni dichiarate', page: 'pag. 17' }
    ],
    sampleBox: {
      title: 'Vuoi vedere e toccare le finiture?',
      desc: 'Richiedi un campione fisico dei profili e dei colori, oppure una visita di un nostro consulente tecnico.',
      btn: 'Richiedi un campione'
    },
    modal: {
      title: 'Scarica la documentazione',
      desc: 'Inserisci la tua email professionale per avviare il download del documento.',
      emailLabel: 'Email professionale',
      emailPlaceholder: 'nome@studio.it',
      privacyText: 'Accetto la Privacy Policy e il trattamento dei dati ai fini del download.',
      submitBtn: 'Conferma e scarica',
      cancelBtn: 'Annulla',
      success: 'Grazie! Il download è iniziato.'
    }
  },
  projects: {
    badge: 'PROGETTI · REALIZZAZIONI',
    title: 'Facciate e ambienti d’autore',
    subtitle: 'I profili AIRWOOD in contesti residenziali, commerciali e ricettivi di alto profilo architettonico.',
    items: [
      {
        name: 'Villa Unifamiliare Privata',
        location: 'Bari',
        profile: 'AIRWOOD 25-4',
        color: 'Finitura Miele (COD. 402)',
        image: '/assets/images/ambient/Esterno_villa_due_piani.jpg',
        desc: 'Rivestimento per facciata ventilata a 4 doghe ampie, con fuga ridotta e giunto continuo per un impatto minimale ed elegante.'
      },
      {
        name: 'Residenza Contemporanea Notturna',
        location: 'Lecce',
        profile: 'AIRWOOD 25-10',
        color: 'Finitura Sabbia (COD. 400)',
        image: '/assets/images/ambient/Esterno_villa_notte.png',
        desc: 'Dieci nervature fitte che offrono una vibrazione di luce unica, risaltata dall’illuminazione architetturale radente in facciata ventilata.'
      },
      {
        name: 'Padiglione Wellness & Piscina',
        location: 'Monopoli',
        profile: 'AIRWOOD 25-7',
        color: 'Finitura Carbone (COD. 405)',
        image: '/assets/images/ambient/Esterno_volume_piscina.png',
        desc: 'Gole profonde che donano forte chiaroscuro e resistenza totale all’umidità e alle condizioni esterne saline bordo piscina.'
      },
      {
        name: 'Spazio Direzionale & Parete Interna',
        location: 'Matera',
        profile: 'AIRWOOD 25-MIX',
        color: 'Finitura Miele / Avorio',
        image: '/assets/images/ambient/Interno_parete_libreria.jpg',
        desc: 'Alternanza studiata di campiture lisce e scanalate, perfetta per arricchire pareti d’accento, librerie e grandi superfici interne.'
      },
      {
        name: 'Soggiorno di Pregio con Controsoffitto',
        location: 'Altamura',
        profile: 'AIRWOOD 25-10',
        color: 'Finitura Rovere Naturale',
        image: '/assets/images/ambient/Interno_soggiorno_soffitto_e_parete.jpg',
        desc: 'Continuità materica tra parete e soffitto con aggancio AIR a scomparsa e comfort acustico ottimizzato.'
      },
      {
        name: 'Residenza Minimalista Parete Chiara',
        location: 'Polignano a Mare',
        profile: 'AIRWOOD 25-10',
        color: 'Finitura Sabbia (COD. 400)',
        image: '/assets/images/ambient/Interno_soggiorno_parete_chiara.png',
        desc: 'Doghe verticali a passo regolare che amplificano la luminosità naturale degli spazi residenziali.'
      }
    ],
    ctaTitle: 'Hai un progetto in fase di sviluppo?',
    ctaDesc: 'Supportiamo architetti e progettisti nella stesura del computo metrico e nei dettagli di fissaggio.',
    ctaBtn: 'Contatta il nostro ufficio tecnico'
  },
  about: {
    badge: 'CHI SIAMO · LA NOSTRA STORIA',
    title: 'Cinquant’anni di innovazione nella materia.',
    lead: 'AIRWOOD è un marchio di Forte Srl dedicato ai sistemi di rivestimento avanzati in FOAM WPC per facciate ventilate e interior design.',
    storyTitle: 'Dal 1968, maestria industriale Forte Srl',
    storyP1: 'Forte Srl vanta una storia industriale lunga oltre cinquant’anni, avviata nel 1968 ad Altamura (BA) e costantemente incentrata sull’eccellenza nella lavorazione dei polimeri e dei compositi avanzati ad alte prestazioni.',
    storyP2: 'Attraverso investimenti costanti in ricerca e sviluppo, abbiamo brevettato il sistema di aggancio a scomparsa AIR, capace di eliminare qualsiasi foro a vista e semplificare radicalmente le operazioni di posa e manutenzione in facciata.',
    facilityTitle: 'Stabilimento e standard qualitativi',
    facilityP1: 'Il nostro stabilimento produttivo ad Altamura opera nel pieno rispetto dei più rigorosi protocolli europei, con certificazione di qualità ISO 9001 e certificazione di gestione ambientale ISO 14001.',
    facilityP2: 'Ogni profilo AIRWOOD è realizzato con mescole a basso impatto, stabilizzatori UV di ultima generazione e finiture coestruse progettate per resistere inalterate alle intemperie senza necessità di verniciature periodiche.',
    stats: {
      experience: { value: '1968', label: 'Anno di fondazione Forte Srl' },
      facility: { value: '100%', label: 'Made in Italy ad Altamura' },
      profiles: { value: '4', label: 'Disegni di superficie brevettati' },
      patents: { value: 'B-s2,d0', label: 'Classe di reazione al fuoco' }
    },
    valuesTitle: 'I pilastri della nostra ingegneria',
    values: [
      {
        title: 'Precisione Industriale',
        desc: 'Tolleranze dimensionali millimetriche e costanza di prestazione garantite dalla marcatura CE EN 13245.'
      },
      {
        title: 'Sostenibilità Circolare',
        desc: 'Materiali compositi ad alta durabilità, riciclabili al 100% a fine vita e privi di emissioni nocive.'
      },
      {
        title: 'Estetica Architettonica',
        desc: 'La calda matericità del legno unita alla stabilità termica e meccanica del polimero espanso ad alta densità.'
      }
    ]
  },
  contacts: {
    badge: 'CONTATTI E PREVENTIVI',
    title: 'Parliamo del tuo progetto.',
    subtitle: 'Richiedi un preventivo dettagliato, un campione fisico o l’assistenza del nostro team tecnico per la posa.',
    form: {
      nameLabel: 'Nome e cognome',
      companyLabel: 'Azienda / Studio professionale',
      emailLabel: 'Email professionale',
      roleLabel: 'Sono un',
      messageLabel: 'Messaggio / Dettagli del progetto',
      privacyText: 'Dichiaro di aver letto e accettato la Privacy Policy (Regolamento UE 2016/679 - GDPR).',
      submitBtn: 'Invia richiesta preventivo',
      submitting: 'Invio in corso...',
      success: 'Grazie! La tua richiesta è stata registrata con successo. Ti ricontatteremo a breve.',
      error: 'Si è verificato un errore durante l’invio. Ti invitiamo a scriverci direttamente a info@fortesrl.it.'
    },
    info: {
      companyName: 'Forte Srl · Marchio AIRWOOD',
      addressTitle: 'Sede e stabilimento',
      addressVal: 'C.da Parco del Vecchio Bovio · 70022 Altamura (BA) · Italia',
      phoneTitle: 'Telefono',
      phoneVal: '+39 080 3101237',
      emailTitle: 'Email',
      emailVal: 'info@fortesrl.it',
      hoursTitle: 'Orari uffici',
      hoursVal: 'Lun–Gio: 8:00–13:00 / 15:00–18:00 | Ven: 8:00–13:00 / 15:00–17:00'
    }
  },
  footer: {
    tagline: 'La calma del legno, la forza del composito. AIRWOOD è un marchio di Forte Srl. Made in Italy dal 1968. Sistemi avanzati di rivestimento per facciate ventilate in FOAM WPC. Sistema qualità certificato ISO 9001 e ISO 14001.',
    linksTitle: 'Navigazione',
    techTitle: 'Area Professionisti',
    contactsTitle: 'Contatti',
    allRights: 'Tutti i diritti riservati. Forte Srl',
    vat: 'Forte Srl · Marchio AIRWOOD · C.da Parco del Vecchio Bovio, 70022 Altamura (BA)',
    privacy: 'Privacy Policy',
    terms: 'Termini e condizioni',
    developedBy: 'Sviluppato da'
  },
  privacy: {
    badge: 'Trasparenza e Sicurezza',
    title: 'Informativa sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: 28 Ottobre 2026',
    intro: 'In Forte Srl (titolare del marchio AIRWOOD), la tutela dei tuoi dati personali è una priorità assoluta. Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati quando visiti il nostro sito o accedi all’Area Tecnica.',
    sections: [
      {
        title: '1. Titolare del Trattamento dei Dati',
        content: 'Il Titolare del trattamento dei dati personali è Forte Srl (titolare del marchio AIRWOOD), con sede e stabilimento in C.da Parco del Vecchio Bovio, 70022 Altamura (BA), Italia. Per qualsiasi richiesta relativa alla privacy, puoi contattarci all\'indirizzo email: privacy@fortesrl.it o info@fortesrl.it.'
      },
      {
        title: '2. Tipologie di Dati Raccolti',
        content: 'Raccogliamo dati forniti volontariamente dall\'utente tramite i moduli di contatto, la registrazione all’Area Tecnica o il download dei cataloghi (quali nome, cognome, azienda, qualifica professionale, indirizzo email e dettagli del progetto) e dati tecnici di navigazione anonimizzati per garantire la sicurezza del portale.'
      },
      {
        title: '3. Finalità del Trattamento',
        content: 'I tuoi dati sono trattati esclusivamente per: consentire l’accesso all’Area Tecnica riservata previa approvazione manuale, inviare il catalogo generale o i campioni richiesti, rispondere a richieste di preventivo e consulenza su profili e facciate ventilate, e adempiere agli obblighi di legge.'
      },
      {
        title: '4. Base Giuridica del Trattamento',
        content: 'Il trattamento dei tuoi dati si fonda sull\'esecuzione di misure contrattuali o precontrattuali richieste dall’utente, sull’adempimento di obblighi legali e sul legittimo interesse di Forte Srl a fornire documentazione tecnica a professionisti del settore.'
      },
      {
        title: '5. Conservazione dei Dati',
        content: 'I dati personali raccolti saranno conservati per il tempo strettamente necessario a gestire l’account professionale o la richiesta commerciale, e successivamente per i termini stabiliti dalla legislazione vigente.'
      },
      {
        title: '6. Diritti dell\'Interessato',
        content: 'Ai sensi del Regolamento UE 2016/679 (GDPR), hai il diritto in qualunque momento di chiedere l’accesso, la rettifica, la cancellazione o la limitazione del trattamento dei tuoi dati scrivendo a privacy@fortesrl.it.'
      }
    ]
  },
  terms: {
    badge: 'Condizioni d\'Uso',
    title: 'Termini e Condizioni',
    lastUpdated: 'Ultimo aggiornamento: 28 Ottobre 2026',
    intro: 'Benvenuto sul portale di AIRWOOD, marchio di Forte Srl. L\'accesso e l\'uso di questo sito e dell’Area Tecnica sono regolati dai seguenti Termini e Condizioni.',
    sections: [
      {
        title: '1. Proprietà Intellettuale',
        content: 'Tutti i contenuti visivi, tecnici, grafici e informativi presenti su questo sito — inclusi i loghi AIRWOOD e Forte Srl, le schede tecniche, le istruzioni di montaggio del sistema brevettato AIR, le voci di capitolato e i dettagli costruttivi — sono di proprietà esclusiva di Forte Srl e tutelati dalle leggi sul diritto d\'autore e sui brevetti industriali.'
      },
      {
        title: '2. Condizioni di Accesso all’Area Tecnica',
        content: 'L’accesso all’Area Tecnica è riservato a professionisti abilitati previa approvazione manuale di Forte Srl (progettisti, posatori, rivenditori, imprese). L’utente si impegna a custodire le credenziali di accesso e a non cederle a terzi.'
      },
      {
        title: '3. Utilizzo dei Documenti e delle Bozze',
        content: 'Le schede tecniche contrassegnate come "Bozza in revisione" hanno scopo preliminare di consultazione. Per la redazione di progetti esecutivi e computi definitivi, fa fede la documentazione finale confermata o richiesta direttamente all’ufficio tecnico di Forte Srl.'
      },
      {
        title: '4. Campioni e Resa dei Colori',
        content: 'Le campionature di colore digitali e i render presenti sul sito hanno scopo illustrativo. Le finiture effettive possono variare in base alla produzione industriale e alle condizioni di luce naturale; si raccomanda sempre la richiesta di un campione fisico.'
      },
      {
        title: '5. Legge Applicabile e Foro Competente',
        content: 'I presenti termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente in via esclusiva il Foro di Bari, Italia.'
      }
    ]
  }
};

export const itTranslations = it;

