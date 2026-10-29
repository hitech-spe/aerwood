import { Translations } from './translation.interface';

export const en: Translations = {
  nav: {
    home: 'Home',
    products: 'Products',
    technicalArea: 'Technical Area',
    certifications: 'Certifications',
    catalogs: 'Catalogs',
    projects: 'Projects',
    about: 'About Us',
    contacts: 'Contact',
    quoteCta: 'Request a Quote'
  },
  home: {
    badge: 'CLADDING SYSTEM FOR VENTILATED FACADES · FOAM WPC',
    title: 'The warmth of wood,\nthe strength of composite.',
    subtitle: 'Four profiles, seven finishes and a patented concealed fastening system. Designed and manufactured in Italy by Forte Srl, since 1968.',
    ctaProfiles: 'Explore Profiles',
    ctaTechnical: 'Go to Technical Area',
    quickLinks: {
      technical: {
        title: 'Technical Area',
        desc: 'Technical datasheets, installation guides, specifications and drawings for architects and installers.',
        cta: 'Restricted Access →'
      },
      certifications: {
        title: 'Certifications',
        desc: 'Reaction to fire B-s2,d0, CE marking EN 13245, ISO 9001 and ISO 14001 quality systems.',
        cta: 'Declared Performance →'
      },
      catalogs: {
        title: 'Catalogs',
        desc: 'AIRWOOD 2026 Catalog, color chart and downloadable PDF documentation.',
        cta: 'Download →'
      },
      products: {
        title: 'Products',
        desc: 'Compare the four profiles: dimensional data, weight, thermal transmittance and finishes.',
        cta: 'Compare Profiles →'
      }
    },
    profilesHeader: {
      badge: 'PROFILES',
      title: 'One system, four surface designs',
      subtitle: 'Same installation, same substructure, same color palette: only the rhythm and shadow depth change.'
    },
    technology: {
      badge: 'THE TECHNOLOGY · FOAM WPC',
      title: 'Expanded core, co-extruded film, concealed fastening',
      statWeight: '0.75 m²',
      statWeightLabel: 'Lightweight',
      statWeightDesc: 'Closed-cell expanded core: reduced weight and simplified handling. 3000 mm panel, 250 mm useful width.',
      statU: '2.72–2.87',
      statULabel: 'Insulation · W/m²K',
      statUDesc: 'Thermal transmittance calculated according to EN ISO 6946 on the cross-section of each profile.',
      statFire: 'B-s2,d0',
      statFireLabel: 'Fire Safety',
      statFireDesc: 'Co-extruded shield with UV protection guarding surface and color. Reaction to fire EN 13501-1.',
      statPatent: 'Patented',
      statPatentLabel: 'AIR System',
      statPatentDesc: 'Concealed clips and profiles: no visible holes or fasteners, panels individually demountable at any time.'
    },
    applications: {
      badge: 'APPLICATIONS',
      title: 'Where AIRWOOD lives',
      interior: 'Interior walls',
      exterior: 'Exterior facades',
      ceilings: 'Ceilings & Soffits',
      ventilatedFacades: 'Ventilated facades'
    },
    finishes: {
      badge: 'FINISHES',
      title: 'Seven colors across all profiles',
      catalogBtn: 'Color Chart',
      disclaimer: 'AIRWOOD 25-4 is also available with RENOLIT EXOFOL exterior films (Colour Road 26/27 collection). Rendered shades are indicative: physical sample prevails.',
      colors: [
        { name: 'White', code: 'COD. 244' },
        { name: 'Sand', code: 'COD. 400' },
        { name: 'Pearl Grey', code: 'COD. 401' },
        { name: 'Honey', code: 'COD. 402' },
        { name: 'Ivory', code: 'COD. 403' },
        { name: 'Charcoal', code: 'COD. 405' },
        { name: 'Coffee', code: 'COD. 406' }
      ]
    },
    projectsBanner: {
      badge: 'PROJECTS',
      title: 'Facades & Architecture'
    },
    technicalBanner: {
      badge: 'TECHNICAL AREA · RESTRICTED ACCESS',
      title: 'Everything you need to specify and install',
      desc: 'Datasheets, assembly manuals, specification texts, declarations of performance, DWG drawings and bill of materials. Register free as an architect, installer or dealer.',
      loginBtn: 'Sign In',
      registerBtn: 'Register'
    },
    contactsPreview: {
      badge: 'CONTACT & INQUIRIES',
      title: 'Let’s discuss your project',
      desc: 'Request a project quote, a physical material sample, or specialist technical advice.'
    }
  },
  products: {
    badge: 'PRODUCTS · AIRWOOD SYSTEM',
    title: 'Four profiles, one single installation system.',
    intro: 'All profiles share the same useful width (250 mm), standard length (3000 mm), concealed AIR fastening system and color palette. Surface rhythm, thickness, and weight vary.',
    compareTitle: 'Profile Comparison',
    headers: {
      feature: 'Specification',
      p25_4: '25-4',
      p25_7: '25-7',
      p25_10: '25-10',
      p25_mix: '25-MIX'
    },
    features: {
      design: 'Pattern',
      thickness: 'Thickness',
      usefulWidth: 'Useful width',
      standardLength: 'Standard length',
      yieldPerPanel: 'Area per panel',
      linearWeight: 'Linear weight',
      sqmWeight: 'Weight per m²',
      uValue: 'U-Value (EN ISO 6946)',
      fireReaction: 'Fire reaction',
      finishes: 'Finishes'
    },
    profiles: [
      {
        id: '25-4',
        badge: 'PROFILE 01 · 4 WIDE SLATS',
        name: 'AIRWOOD 25-4',
        desc: 'Four broad slats articulated by delicate shadow gaps. The panel joint blends harmoniously as one of the grooves for a continuous, monolithic plane: ideal for minimalist aesthetics and extensive surfaces. Also available with RENOLIT EXOFOL exterior films.',
        thickness: '25 mm thickness',
        uValue: 'U 2.72 W/m²K',
        sqmWeight: '8.00 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Applications: ventilated facades, protected exterior/interior walls, exterior soffits, sunscreens.',
        ctaTech: 'Datasheet & Assembly',
        ctaCatalog: 'Colors & Catalog',
        image: '/assets/images/profiles/AIRWOOD_25-4_1.png',
        ambientImage: '/assets/images/ambient/Esterno_villa_due_piani.jpg'
      },
      {
        id: '25-7',
        badge: 'PROFILE 02 · 7 SLATS',
        name: 'AIRWOOD 25-7',
        desc: 'Seven medium-width slats separated by deep shadow reveals. Strong chiaroscuro definition even from a distance: the most scenic profile in the line.',
        thickness: '25 mm thickness',
        uValue: 'U 2.76 W/m²K',
        sqmWeight: '10.40 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Applications: ventilated facades, commercial & hospitality envelopes, external claddings, brise-soleil.',
        ctaTech: 'Datasheet & Assembly',
        ctaCatalog: 'Colors & Catalog',
        image: '/assets/images/profiles/AIRWOOD_25-7_1.png',
        ambientImage: '/assets/images/ambient/Esterno_volume_piscina.png'
      },
      {
        id: '25-10',
        badge: 'PROFILE 03 · 10 NARROW RIBS',
        name: 'AIRWOOD 25-10',
        desc: 'The most refined, tight-gauge texture of the series: ten slender ribs creating a vibrant, tactile rhythm. Perfect for compact volumes and buildings perceived from close range.',
        thickness: '25 mm thickness',
        uValue: 'U 2.87 W/m²K',
        sqmWeight: '10.00 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Applications: ventilated facades, exterior and interior linings, architectural soffits, screening elements.',
        ctaTech: 'Datasheet & Assembly',
        ctaCatalog: 'Colors & Catalog',
        image: '/assets/images/profiles/AIRWOOD_25-10_1.png',
        ambientImage: '/assets/images/ambient/Interno_soggiorno_parete_chiara.png'
      },
      {
        id: '25-mix',
        badge: 'PROFILE 04 · SMOOTH + FLUTED',
        name: 'AIRWOOD 25-MIX',
        desc: 'A composite design alternating plane bands with fluted accents: the facade subtly transforms as daylight angles shift. Exceptional on large blind walls.',
        thickness: '19 mm thickness',
        uValue: 'U 2.82 W/m²K',
        sqmWeight: '7.00 kg/m²',
        fire: 'B-s2,d0',
        applications: 'Applications: ventilated facades, blind walls, decorative partitions, outdoor boundary claddings.',
        ctaTech: 'Datasheet & Assembly',
        ctaCatalog: 'Colors & Catalog',
        image: '/assets/images/profiles/AIRWOOD_25-MIX_1.png',
        ambientImage: '/assets/images/ambient/Interno_parete_libreria.jpg'
      }
    ],
    accessoriesTitle: 'AIR clips, bases and color-matched trims',
    accessoriesSubtitle: 'Fastening is achieved via AIR clips (PVC for interior, aluminum for exterior and ventilated facades). Bases, perimeter trims and external corner profiles ensure pristine edging.',
    accessories: [
      { code: 'RA210', element: 'AIR clip in PVC', usage: 'Interior wall applications', format: '63 × 7.35 × 100 mm' },
      { code: 'RA210L', element: 'AIR clip in PVC, continuous bar', usage: 'Interior wall applications', format: '63 × 7.35 × 3000 mm' },
      { code: 'RA211', element: 'AIR clip in aluminum', usage: 'Exterior & ventilated facades', format: '63 × 8.4 × 100 mm' },
      { code: 'RA211L', element: 'AIR clip in aluminum, bar', usage: 'Exterior & ventilated facades', format: '63 × 8.4 × 3000 mm' },
      { code: 'RA220F', element: 'Universal base profile', usage: 'Receives trim and corner cap', format: '28.4 × 16.9 × 3000 mm' },
      { code: 'RA221M', element: 'End-trim profile', usage: 'Lateral, top closures and reveals', format: '71 × 29 × 3000 mm' },
      { code: 'RA222M', element: 'External 90° corner trim', usage: '90° external corner edge', format: '100 × 29 × 3000 mm' }
    ],
    ctaBox: {
      title: 'Need full technical specs?',
      desc: 'Complete datasheets, assembly instructions, specification clauses and CAD drawings are available in our Technical Area.',
      btn: 'Go to Technical Area'
    }
  },
  technicalArea: {
    badge: 'TECHNICAL AREA · RESTRICTED ACCESS',
    title: 'Documentation for Architects, Installers and Dealers.',
    subtitle: 'Sign in to download datasheets, assembly guidelines, specification texts, declarations of performance and CAD details.',
    loginTitle: 'Sign In',
    loginDesc: 'Enter your credentials to access protected technical assets.',
    emailLabel: 'Email address',
    passwordLabel: 'Password',
    loginBtn: 'Sign In',
    forgotPasswordBtn: 'Forgot Password?',
    registerTitle: 'Create Account',
    registerDesc: 'Create an account in seconds to instantly view and download all technical documentation and installation guides.',
    fullNameLabel: 'Full Name',
    companyLabel: 'Company / Architectural Studio',
    roleLabel: 'Professional Role',
    registerBtn: 'Register & Access',
    roles: {
      architect: 'Architect / Specifier',
      installer: 'Façade Installer / Carpenter',
      dealer: 'Materials Dealer / Distributor',
      contractor: 'General Contractor',
      other: 'Other Industry Professional'
    },
    overviewTitle: 'What is inside the reserved area',
    overviewItems: [
      { title: 'Technical Datasheets', desc: 'Dimensional measurements, mechanical performance and U-value calculations.' },
      { title: 'Installation Guides', desc: 'Illustrated step-by-step guides with 4 fixing methodologies.' },
      { title: 'Specification Clauses', desc: 'Ready-to-use tender specification texts.' },
      { title: 'Declarations (DoP)', desc: 'DoP and CE conformity declarations under AVCP 4.' },
      { title: 'CAD Drawings', desc: 'Ventilated facade construction details in DWG and PDF.' }
    ],
    dashboard: {
      welcome: 'Welcome to the AIRWOOD Technical Portal',
      profileInfo: 'You are signed in as a verified professional.',
      logoutBtn: 'Log Out',
      searchPlaceholder: 'Search documents (e.g. installation, 25-4, DWG)...',
      filterAll: 'All Products',
      filterProfile: 'Filter by profile',
      filterType: 'Filter by type',
      types: {
        datasheet: 'Datasheets',
        installation: 'Installation Guides',
        specs: 'Specifications',
        declaration: 'Declarations',
        cad: 'CAD Drawings (DWG / PDF)'
      },
      statusDraft: 'Draft under review',
      statusAvailable: 'Available for download',
      statusComingSoon: 'Coming soon',
      downloadBtn: 'Download Document',
      noResults: 'No documents match the chosen filters.'
    }
  },
  certifications: {
    badge: 'CERTIFICATIONS · DECLARED PERFORMANCE',
    title: 'Declared, documented, and verifiable performance.',
    subtitle: 'AIRWOOD is CE marked according to EN 13245, with reaction to fire B-s2,d0. Manufactured under ISO 9001 and ISO 14001 quality systems.',
    cards: {
      fire: {
        code: 'B-s2,d0',
        title: 'Reaction to Fire',
        desc: 'Classification according to EN 13501-1:2019, with mounting conditions verified under SBI test (EN 13823:2020).'
      },
      ce: {
        code: 'CE',
        title: 'EN 13245 Marking',
        desc: 'Harmonized standard EN 13245-1 / -2, EU Reg. 305/2011, system for assessment and verification of constancy of performance 4.'
      },
      iso: {
        code: 'ISO 9001 · 14001',
        title: 'Quality & Environment',
        desc: 'Integrated management system for quality and environmental stewardship at our Altamura (BA) production facility.'
      }
    },
    tableTitle: 'Performance Data Table',
    tableHeaders: {
      char: 'Property',
      norm: 'Test Standard',
      val: 'Declared Value'
    },
    tableRows: [
      { char: 'Reaction to fire', norm: 'EN 13501-1:2019', val: 'B-s2, d0' },
      { char: 'Mounting conditions (SBI test)', norm: 'EN 13823:2020', val: 'DVM, DHM, AVM, AHM' },
      { char: 'Internal durability', norm: 'EN 13245-1 App. B', val: '23.10' },
      { char: 'External durability', norm: 'EN 13245-1 App. C', val: '8.25' },
      { char: 'Mechanical resistance', norm: 'EN 13245-1 App. B', val: '23.10' },
      { char: 'AVCP System', norm: 'EU Reg. 305/2011', val: 'System 4' },
      { char: 'CE Marking', norm: 'EN 13245-1 / -2', val: 'CE' },
      { char: 'Declaration of Performance', norm: 'EU Reg. 305/2011', val: 'DoP FORTE 2021/01 Rev. 1' }
    ],
    footnote: 'Base compound values common to all profiles in the AIRWOOD product lineup.',
    documentsTitle: 'Certificates & Test Reports',
    documents: [
      {
        title: 'Declaration of Performance DoP FORTE 2021/01 Rev. 1',
        subtitle: 'PDF · EU Reg. 305/2011 · EN 13245-2:2009',
        status: 'Coming soon'
      },
      {
        title: 'ISO 9001 Certificate · Quality Management System',
        subtitle: 'PDF · Altamura Facility Certification',
        status: 'Coming soon'
      },
      {
        title: 'ISO 14001 Certificate · Environmental Management',
        subtitle: 'PDF · Eco-compliance and sustainability standard',
        status: 'Coming soon'
      },
      {
        title: 'Reaction to Fire Classification Report EN 13501-1',
        subtitle: 'PDF · B-s2, d0 · Official test report',
        status: 'Coming soon'
      },
      {
        title: 'SBI Test Report EN 13823:2020',
        subtitle: 'PDF · Mounting conditions DVM, DHM, AVM, AHM',
        status: 'Coming soon'
      }
    ],
    disclaimer: 'Declarations of performance are public records and do not require user login.',
    ctaTitle: 'Do you need a DoP or specific test report for a project?',
    ctaDesc: 'Specify the profile, finish, and project site: our engineering team will provide the appropriate certification package.',
    ctaBtn: 'Request Certification Dossier'
  },
  catalogs: {
    badge: 'CATALOGS & BROCHURES',
    title: 'Catalog, color chart, and downloadable documents.',
    subtitle: 'Commercial literature is open. Technical datasheets, assembly instructions and specifications are in the Technical Area.',
    generalCatalog: {
      badge: 'GENERAL CATALOG',
      title: 'AIRWOOD 2026 Catalog',
      desc: 'The complete system, FOAM WPC technology, four profiles with architectural data, finishes and certifications.',
      specs: 'PDF · 18 pages · IT / EN · 31 MB',
      btn: 'Download Catalog'
    },
    colorFolder: {
      badge: 'FINISHES',
      title: 'Color Chart',
      desc: 'Seven standard shades across all profiles plus RENOLIT EXOFOL films for AIRWOOD 25-4. Physical sample prevails.',
      specs: 'PDF · IT / EN · Complete Palette',
      btn: 'Download Color Chart',
      sampleBtn: 'Order a Sample'
    },
    technicalSection: {
      title: 'Technical Documentation',
      subtitle: 'Available after login in the Technical Area.',
      items: [
        { title: 'Datasheets', desc: 'A dedicated sheet per profile: dimensions, thermal U-values, weights.', cta: 'Log in to download →' },
        { title: 'Installation Manuals', desc: 'Illustrated assembly guide detailing the 4 fixing configurations.', cta: 'Log in to download →' },
        { title: 'Tender Specifications', desc: 'Turnkey text clauses ready for quantity surveyors and project specs.', cta: 'Log in to download →' },
        { title: 'CAD & BIM Details', desc: 'Ventilated facade construction details in DWG and PDF formats.', cta: 'Log in to download →' }
      ]
    },
    indexTitle: 'What is inside the 2026 Catalog',
    indexItems: [
      { title: 'The AIRWOOD brand & vision', page: 'p. 3' },
      { title: 'FOAM WPC Material Science', page: 'p. 4' },
      { title: 'Fields of Application', page: 'p. 5' },
      { title: 'Patented Concealed AIR System', page: 'p. 6' },
      { title: 'Profiles AIRWOOD 25-4, 25-7, 25-10, 25-MIX specifications', page: 'p. 7–14' },
      { title: 'Color Spectrum & RENOLIT EXOFOL Finishes', page: 'p. 15–16' },
      { title: 'Certifications and Declared Performance', page: 'p. 17' }
    ],
    sampleBox: {
      title: 'Would you like to touch and feel our finishes?',
      desc: 'Request physical material samples of profiles and colors, or arrange a consultation with our architectural advisors.',
      btn: 'Order Physical Sample'
    },
    modal: {
      title: 'Download Literature',
      desc: 'Please provide your professional email address to begin downloading the file.',
      emailLabel: 'Professional Email',
      emailPlaceholder: 'name@studio.com',
      privacyText: 'I agree to the Privacy Policy and processing of my contact information.',
      submitBtn: 'Confirm & Download',
      cancelBtn: 'Cancel',
      success: 'Thank you! Your download has started.'
    }
  },
  projects: {
    badge: 'PROJECTS & CASE STUDIES',
    title: 'Signature facades and interiors',
    subtitle: 'AIRWOOD architectural cladding in premium residential, commercial and hospitality developments.',
    items: [
      {
        name: 'Private Detached Villa',
        location: 'Bari, Italy',
        profile: 'AIRWOOD 25-4',
        color: 'Honey Finish (COD. 402)',
        image: '/assets/images/ambient/Esterno_villa_due_piani.jpg',
        desc: 'Wide 4-slat ventilated facade cladding with refined joint continuity for a clean, minimalist monolithic aesthetic.'
      },
      {
        name: 'Contemporary Nighttime Residence',
        location: 'Lecce, Italy',
        profile: 'AIRWOOD 25-10',
        color: 'Sand Finish (COD. 400)',
        image: '/assets/images/ambient/Esterno_villa_notte.png',
        desc: 'Ten dense ribs generating fine shadows and light play, accentuated by integrated architectural grazing light.'
      },
      {
        name: 'Wellness Pavilion & Poolside',
        location: 'Monopoli, Italy',
        profile: 'AIRWOOD 25-7',
        color: 'Charcoal Finish (COD. 405)',
        image: '/assets/images/ambient/Esterno_volume_piscina.png',
        desc: 'Deep shadow channels offering bold chiaroscuro contrast and total resistance against saline outdoor air and humidity.'
      },
      {
        name: 'Executive Workspace & Accent Wall',
        location: 'Matera, Italy',
        profile: 'AIRWOOD 25-MIX',
        color: 'Honey / Ivory Duo',
        image: '/assets/images/ambient/Interno_parete_libreria.jpg',
        desc: 'Alternating smooth planes and fluted ribs creating a dynamic visual rhythm on expansive interior feature walls.'
      },
      {
        name: 'Luxury Living Room with Slatted Ceiling',
        location: 'Altamura, Italy',
        profile: 'AIRWOOD 25-10',
        color: 'Natural Oak Finish',
        image: '/assets/images/ambient/Interno_soggiorno_soffitto_e_parete.jpg',
        desc: 'Material continuity spanning walls and architectural ceiling with concealed AIR clips and enhanced acoustic control.'
      },
      {
        name: 'Minimalist Residence Light Wall',
        location: 'Polignano a Mare, Italy',
        profile: 'AIRWOOD 25-10',
        color: 'Sand Finish (COD. 400)',
        image: '/assets/images/ambient/Interno_soggiorno_parete_chiara.png',
        desc: 'Subtle vertical ribs harmonizing with expansive glazing to maximize natural illumination.'
      }
    ],
    ctaTitle: 'Are you working on a new design?',
    ctaDesc: 'Our technical team assists specifiers with bill of quantities, substructure engineering, and detail joints.',
    ctaBtn: 'Contact Engineering Team'
  },
  about: {
    badge: 'ABOUT US · OUR HERITAGE',
    title: 'Over five decades of material engineering.',
    lead: 'AIRWOOD is a brand of Forte Srl dedicated to advanced FOAM WPC cladding systems for ventilated facades and architectural interiors.',
    storyTitle: 'Since 1968, Industrial Mastery Forte Srl',
    storyP1: 'Forte Srl carries a distinguished industrial heritage of more than 50 years, founded in 1968 in Altamura (Bari, Italy) and consistently focused on precision polymer compounding and high-performance architectural composites.',
    storyP2: 'Through sustained R&D investments, we patented the concealed AIR fastening system, eliminating visible drill holes and significantly easing facade installation and maintenance.',
    facilityTitle: 'Production Facility & Quality Framework',
    facilityP1: 'Our manufacturing plant in Altamura complies strictly with the most demanding European benchmarks, holding ISO 9001 quality certification and ISO 14001 environmental management certification.',
    facilityP2: 'Every AIRWOOD profile is formulated with low-impact compounds, high-grade UV stabilizers, and co-extruded outer shells engineered to endure extreme weathering without requiring periodic staining or paint.',
    stats: {
      experience: { value: '1968', label: 'Founded by Forte Srl' },
      facility: { value: '100%', label: 'Made in Italy (Altamura)' },
      profiles: { value: '4', label: 'Patented Surface Profiles' },
      patents: { value: 'B-s2,d0', label: 'Fire Reaction Rating' }
    },
    valuesTitle: 'Foundations of Our Engineering',
    values: [
      {
        title: 'Industrial Precision',
        desc: 'Millimetric tolerances and consistent performance guaranteed by CE EN 13245 certification.'
      },
      {
        title: 'Circular Sustainability',
        desc: 'High-durability composite materials that are 100% recyclable at end of life with zero harmful emissions.'
      },
      {
        title: 'Architectural Aesthetics',
        desc: 'The rich organic feel of timber paired with the thermal and mechanical stability of high-density expanded polymer.'
      }
    ]
  },
  contacts: {
    badge: 'CONTACT & INQUIRIES',
    title: 'Let’s talk about your project.',
    subtitle: 'Request a detailed quotation, an engineering consultation, or physical material samples from Forte Srl.',
    form: {
      nameLabel: 'Full Name',
      companyLabel: 'Company / Studio',
      emailLabel: 'Professional Email',
      roleLabel: 'I am an',
      messageLabel: 'Project Specifications / Message',
      privacyText: 'I confirm that I have read and accepted the Privacy Policy (EU Reg. 2016/679 - GDPR).',
      submitBtn: 'Send Request',
      submitting: 'Submitting...',
      success: 'Thank you! Your inquiry has been submitted to Forte Srl. Our engineering team will contact you shortly.',
      error: 'An error occurred. Please contact us directly at info@fortesrl.it.'
    },
    info: {
      companyName: 'Forte Srl · AIRWOOD Brand',
      addressTitle: 'Headquarters & Manufacturing',
      addressVal: 'C.da Parco del Vecchio Bovio · 70022 Altamura (BA) · Italy',
      phoneTitle: 'Telephone',
      phoneVal: '+39 080 3101237',
      emailTitle: 'Email',
      emailVal: 'info@fortesrl.it',
      hoursTitle: 'Office Hours',
      hoursVal: 'Mon–Thu: 8:00–13:00 / 15:00–18:00 | Fri: 8:00–13:00 / 15:00–17:00'
    }
  },
  footer: {
    tagline: 'The warmth of wood, the strength of composite. AIRWOOD is a brand of Forte Srl. Made in Italy since 1968. Advanced FOAM WPC cladding systems for ventilated facades. ISO 9001 & ISO 14001 certified quality management.',
    linksTitle: 'Navigation',
    techTitle: 'Professionals Area',
    contactsTitle: 'Contacts',
    allRights: 'All rights reserved. Forte Srl',
    vat: 'Forte Srl · AIRWOOD Brand · C.da Parco del Vecchio Bovio, 70022 Altamura (BA)',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    developedBy: 'Developed by'
  },
  privacy: {
    badge: 'Transparency & Trust',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: October 28, 2026',
    intro: 'At Forte Srl (owner of the AIRWOOD brand), safeguarding your personal data is a foundational priority. This policy outlines how we collect, handle and protect your information when navigating our platform or accessing the Technical Area.',
    sections: [
      {
        title: '1. Data Controller',
        content: 'The Data Controller is Forte Srl (owner of the AIRWOOD brand), headquartered at C.da Parco del Vecchio Bovio, 70022 Altamura (BA), Italy. For privacy matters, reach us at: privacy@fortesrl.it or info@fortesrl.it.'
      },
      {
        title: '2. Information We Collect',
        content: 'We process personal details voluntarily supplied through inquiry forms, registration for the Technical Area, or catalog downloads (such as full name, company, professional role, email address and project specifications), alongside anonymized technical analytics.'
      },
      {
        title: '3. Purposes of Processing',
        content: 'Your data is utilized solely to provide access to restricted technical dossiers upon manual approval, dispatch requested catalogs and material samples, process quotations, and fulfill regulatory compliance requirements.'
      },
      {
        title: '4. Legal Basis',
        content: 'Processing is grounded in pre-contractual and contractual obligations initiated by the user, adherence to European and Italian statutory requirements, and our legitimate commercial interest in serving certified trade professionals.'
      },
      {
        title: '5. Data Retention',
        content: 'Personal records are retained strictly for the duration necessary to manage your active trade account or commercial dialogue, and subsequently in accordance with statutory fiscal and civil timeframes.'
      },
      {
        title: '6. Data Subject Rights',
        content: 'Under EU Regulation 2016/679 (GDPR), you possess full rights to access, rectify, delete, or restrict the processing of your data by writing to privacy@fortesrl.it.'
      }
    ]
  },
  terms: {
    badge: 'Terms of Use',
    title: 'Terms & Conditions',
    lastUpdated: 'Last updated: October 28, 2026',
    intro: 'Welcome to AIRWOOD, a brand of Forte Srl. Access and utilization of this website and the Technical Portal are governed by these Terms and Conditions.',
    sections: [
      {
        title: '1. Intellectual Property',
        content: 'All architectural assets, technical sheets, patented AIR fixing drawings, specifications, and imagery displayed on this site are the exclusive property of Forte Srl and protected under international intellectual property and patent statutes.'
      },
      {
        title: '2. Technical Area Access',
        content: 'Access to restricted technical dossiers is granted to verified professionals upon manual verification by Forte Srl (architects, specifiers, installers, merchants, contractors). Users must maintain the confidentiality of their credentials.'
      },
      {
        title: '3. Draft Documents & Specifications',
        content: 'Documents designated as "Draft under review" are provided for initial design consultation. For final execution and tender bills of quantities, consult verified files or contact the Forte Srl engineering department directly.'
      },
      {
        title: '4. Digital Finishes & Physical Samples',
        content: 'Digital color swatches and renderings are illustrative representations. Actual composite hues and textures may show subtle variation based on lighting and production batches. Physical sample inspection is always recommended before ordering.'
      },
      {
        title: '5. Governing Law & Jurisdiction',
        content: 'These terms are governed by Italian law. Any dispute arising in connection with the portal shall be subject to the exclusive jurisdiction of the Court of Bari, Italy.'
      }
    ]
  }
};

export const enTranslations = en;

