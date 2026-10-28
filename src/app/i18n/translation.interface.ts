export interface Translations {
  nav: {
    home: string;
    products: string;
    technicalArea: string;
    certifications: string;
    catalogs: string;
    projects: string;
    about: string;
    contacts: string;
    quoteCta: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    ctaProfiles: string;
    ctaTechnical: string;
    quickLinks: {
      technical: { title: string; desc: string; cta: string };
      certifications: { title: string; desc: string; cta: string };
      catalogs: { title: string; desc: string; cta: string };
      products: { title: string; desc: string; cta: string };
    };
    profilesHeader: {
      badge: string;
      title: string;
      subtitle: string;
    };
    technology: {
      badge: string;
      title: string;
      statWeight: string;
      statWeightLabel: string;
      statWeightDesc: string;
      statU: string;
      statULabel: string;
      statUDesc: string;
      statFire: string;
      statFireLabel: string;
      statFireDesc: string;
      statPatent: string;
      statPatentLabel: string;
      statPatentDesc: string;
    };
    applications: {
      badge: string;
      title: string;
      interior: string;
      exterior: string;
      ceilings: string;
      ventilatedFacades: string;
    };
    finishes: {
      badge: string;
      title: string;
      catalogBtn: string;
      disclaimer: string;
      colors: { name: string; code: string }[];
    };
    projectsBanner: {
      badge: string;
      title: string;
    };
    technicalBanner: {
      badge: string;
      title: string;
      desc: string;
      loginBtn: string;
      registerBtn: string;
    };
    contactsPreview: {
      badge: string;
      title: string;
      desc: string;
    };
  };
  products: {
    badge: string;
    title: string;
    intro: string;
    compareTitle: string;
    headers: {
      feature: string;
      p25_4: string;
      p25_7: string;
      p25_10: string;
      p25_mix: string;
    };
    features: {
      design: string;
      thickness: string;
      usefulWidth: string;
      standardLength: string;
      yieldPerPanel: string;
      linearWeight: string;
      sqmWeight: string;
      uValue: string;
      fireReaction: string;
      finishes: string;
    };
    profiles: {
      id: string;
      badge: string;
      name: string;
      desc: string;
      thickness: string;
      uValue: string;
      sqmWeight: string;
      fire: string;
      applications: string;
      ctaTech: string;
      ctaCatalog: string;
      image: string;
      ambientImage?: string;
    }[];
    accessoriesTitle: string;
    accessoriesSubtitle: string;
    accessories: {
      code: string;
      element: string;
      usage: string;
      format: string;
    }[];
    ctaBox: {
      title: string;
      desc: string;
      btn: string;
    };
  };
  technicalArea: {
    badge: string;
    title: string;
    subtitle: string;
    loginTitle: string;
    loginDesc: string;
    emailLabel: string;
    passwordLabel: string;
    loginBtn: string;
    forgotPasswordBtn: string;
    registerTitle: string;
    registerDesc: string;
    fullNameLabel: string;
    companyLabel: string;
    roleLabel: string;
    registerBtn: string;
    roles: {
      architect: string;
      installer: string;
      dealer: string;
      contractor: string;
      other: string;
    };
    overviewTitle: string;
    overviewItems: {
      title: string;
      desc: string;
    }[];
    dashboard: {
      welcome: string;
      profileInfo: string;
      logoutBtn: string;
      searchPlaceholder: string;
      filterAll: string;
      filterProfile: string;
      filterType: string;
      types: {
        datasheet: string;
        installation: string;
        specs: string;
        declaration: string;
        cad: string;
      };
      statusDraft: string;
      statusAvailable: string;
      statusComingSoon: string;
      downloadBtn: string;
      noResults: string;
    };
  };
  certifications: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      fire: { code: string; title: string; desc: string };
      ce: { code: string; title: string; desc: string };
      iso: { code: string; title: string; desc: string };
    };
    tableTitle: string;
    tableHeaders: {
      char: string;
      norm: string;
      val: string;
    };
    tableRows: {
      char: string;
      norm: string;
      val: string;
    }[];
    footnote: string;
    documentsTitle: string;
    documents: {
      title: string;
      subtitle: string;
      status: string;
      url?: string;
    }[];
    disclaimer: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  catalogs: {
    badge: string;
    title: string;
    subtitle: string;
    generalCatalog: {
      badge: string;
      title: string;
      desc: string;
      specs: string;
      btn: string;
    };
    colorFolder: {
      badge: string;
      title: string;
      desc: string;
      specs: string;
      btn: string;
      sampleBtn: string;
    };
    technicalSection: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        desc: string;
        cta: string;
      }[];
    };
    indexTitle: string;
    indexItems: {
      title: string;
      page: string;
    }[];
    sampleBox: {
      title: string;
      desc: string;
      btn: string;
    };
    modal: {
      title: string;
      desc: string;
      emailLabel: string;
      emailPlaceholder: string;
      privacyText: string;
      submitBtn: string;
      cancelBtn: string;
      success: string;
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      location: string;
      profile: string;
      color: string;
      image: string;
      desc: string;
    }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  about: {
    badge: string;
    title: string;
    lead: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    facilityTitle: string;
    facilityP1: string;
    facilityP2: string;
    stats: {
      experience: { value: string; label: string };
      facility: { value: string; label: string };
      profiles: { value: string; label: string };
      patents: { value: string; label: string };
    };
    valuesTitle: string;
    values: {
      title: string;
      desc: string;
    }[];
  };
  contacts: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      companyLabel: string;
      emailLabel: string;
      roleLabel: string;
      messageLabel: string;
      privacyText: string;
      submitBtn: string;
      submitting: string;
      success: string;
      error: string;
    };
    info: {
      companyName: string;
      addressTitle: string;
      addressVal: string;
      phoneTitle: string;
      phoneVal: string;
      emailTitle: string;
      emailVal: string;
      hoursTitle: string;
      hoursVal: string;
    };
  };
  footer: {
    tagline: string;
    linksTitle: string;
    techTitle: string;
    contactsTitle: string;
    allRights: string;
    vat: string;
    privacy: string;
    terms: string;
    developedBy: string;
  };
  privacy: {
    badge: string;
    title: string;
    lastUpdated: string;
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  terms: {
    badge: string;
    title: string;
    lastUpdated: string;
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}
