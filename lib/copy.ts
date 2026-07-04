import {
  Sparkles,
  Globe,
  MonitorSmartphone,
  RefreshCcw,
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

export type Language = "en" | "sr";

export const CALENDLY_URL = "https://calendly.com/radivojevicdavor79/30min";

export const copy = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      booking: "Booking",
      contact: "Contact",
      startProject: "Start Project",
    },
    hero: {
      eyebrow: "Valdr Studio",
      title: "Premium websites built to make brands impossible to ignore.",
      text: "We craft modern, premium digital experiences for businesses that want to stand out online.",
      primary: "Start a Project",
      secondary: "View Work",
    },
    proof: [
      {
        title: "Premium",
        text: "Dark, modern, high-value visual identity.",
      },
      {
        title: "Responsive",
        text: "Built to look sharp on desktop and mobile.",
      },
      {
        title: "Conversion-focused",
        text: "Designed to help visitors take action.",
      },
    ],
    services: {
      eyebrow: "Services",
      title: "Websites that feel premium, fast and intentional.",
      items: [
        {
          title: "Landing Pages",
          text: "High-impact pages built to sell, book or capture leads.",
          icon: Sparkles,
        },
        {
          title: "Business Websites",
          text: "Modern websites for local brands, creators and service businesses.",
          icon: Globe,
        },
        {
          title: "Web Apps",
          text: "Clean digital tools with real functionality and sharp UI.",
          icon: MonitorSmartphone,
        },
        {
          title: "Redesigns",
          text: "Turning outdated websites into premium online experiences.",
          icon: RefreshCcw,
        },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      title: "Built with precision. Designed to stand out.",
      text: "A selection of projects focused on usability, performance and premium visual experience.",
      items: {
        bor: {
          tag: "Web App",
          title: "Bor Bus App",
          text: "Public transport application for the city of Bor, focused on usability, routes and timetable access.",
        },
        pesmarica: {
          tag: "App",
          title: "Pesmarica App",
          text: "Personalized digital songbook for singers across eastern Serbia, designed for simple access and organisation on set.",
        },
        jovan: {
          tag: "In Progress",
          title: "Jovan PT",
          text: "Premium personal trainer website focused on high-end branding and conversion.",
        },
        vcompany: {
          tag: "In Progress",
          title: "V-COMPANY",
          text: "Premium industrial CNC website focused on trust, capability clarity and serious B2B positioning.",
        },
      },
    },
    process: {
      eyebrow: "Process",
      titleLine1: "A simple process.",
      titleLine2: "Built for clarity.",
      items: [
        {
          title: "Discovery",
          text: "We define the goal, audience and direction of the project.",
          icon: Search,
        },
        {
          title: "Strategy",
          text: "Structure, positioning and premium visual direction.",
          icon: PenTool,
        },
        {
          title: "Build",
          text: "Fast, responsive development focused on quality.",
          icon: Code2,
        },
        {
          title: "Launch",
          text: "Final polish, optimization and going live.",
          icon: Rocket,
        },
      ],
    },
    about: {
      eyebrow: "About Valdr Studio",
      title: "Premium digital experiences built with purpose.",
      p1: "Valdr Studio is an independent creative web studio focused on building premium websites for brands that want to stand out, feel elevated and convert better online.",
      p2Start: "Founded by",
      p2End:
        "we combine modern design, clean development and conversion-focused structure to create websites that feel intentional from the very first scroll.",
      focusEyebrow: "Focus",
      focusTitle: "Websites that actually feel premium.",
      cards: [
        {
          title: "Design",
          text: "Clean, premium and memorable experiences.",
        },
        {
          title: "Development",
          text: "Fast, responsive and modern builds.",
        },
        {
          title: "Strategy",
          text: "Structure designed to convert visitors.",
        },
        {
          title: "Vision",
          text: "Helping brands become impossible to ignore.",
        },
      ],
    },
    highlights: {
      eyebrow: "Highlights",
      title: "Results from real projects, not just promises.",
      items: [
        {
          highlight:
            "Built for everyday use across an entire city — simple navigation, live routes and a timetable that's actually easy to find.",
          name: "Bor Bus App",
          role: "Public transport project",
        },
        {
          highlight:
            "Designed to keep performers organized on stage — fast access, clean structure and everything in one place.",
          name: "Pesmarica App",
          role: "Digital songbook project",
        },
        {
          highlight:
            "Shaping a premium, high-end first impression for an online coaching brand — built to feel serious, not generic.",
          name: "Jovan PT",
          role: "Website in progress",
        },
      ],
    },
    booking: {
      eyebrow: "Book a Call",
      title: "Let’s map out your premium web presence.",
      text: "Book a short strategy call and we’ll discuss your brand, goals, offer, timeline and the best direction for your website.",
      benefits: [
        "Clear project direction",
        "Premium visual strategy",
        "Next steps explained",
      ],
      cardTitle: "Free Website Strategy Call",
      cardText:
        "A focused 30-minute call to understand your project and see if Valdr Studio is the right fit.",
      durationLabel: "Duration",
      duration: "30 minutes",
      formatLabel: "Format",
      format: "Online call",
      priceLabel: "Price",
      price: "Free",
      button: "Book Strategy Call",
      note: "No pressure. Just clarity on what your website needs.",
    },
    payment: {
      eyebrow: "Client Payments",
      title: "Clear pricing, agreed before any payment.",
      text: "Payment is never required before we understand your project. First, we discuss your goals, scope and timeline on a strategy call. Once you approve the proposal, pricing and payment are agreed directly.",
      approvalTitle: "Approval first",
      approvalText:
        "You only pay after the project direction and scope are clear.",
      checkoutTitle: "Straightforward terms",
      checkoutText:
        "Pricing and payment details are agreed directly once the proposal is approved.",
      cardEyebrow: "Payment Flow",
      cardTitleLine1: "Proposal first.",
      cardTitleLine2: "Payment after.",
      cardText:
        "Every project starts with a short strategy call. Once we agree on scope, timeline and pricing, payment terms are confirmed directly for the agreed deposit or invoice.",
      step1: "Strategy call",
      step2: "Proposal approval",
      step3: "Payment agreed",
      button: "Book Strategy Call",
      note: "Payment details are only discussed after the project scope is approved.",
    },
    contact: {
      eyebrow: "Contact",
      mobileTitle: "Let’s build something exceptional.",
      desktopTitleLine1: "Let’s build something exceptional.",
      desktopTitleLine2: "Built to stand above the noise.",
      text: "Whether you need a premium website, redesign or a digital experience that actually stands out — let’s talk.",
      whatsapp: "WhatsApp",
      email: "Email",
    },
  },

  sr: {
    nav: {
      services: "Usluge",
      work: "Radovi",
      process: "Proces",
      booking: "Poziv",
      contact: "Kontakt",
      startProject: "Započni projekat",
    },
    hero: {
      eyebrow: "Valdr Studio",
      title: "Premium sajtovi napravljeni da vaš brend bude nemoguće ignorisati.",
      text: "Kreiramo moderne, premium digitalne prezentacije za biznise koji žele da izgledaju ozbiljno, kvalitetno i drugačije online.",
      primary: "Započni projekat",
      secondary: "Pogledaj radove",
    },
    proof: [
      {
        title: "Premium",
        text: "Tamna, moderna i vizuelno jaka prezentacija brenda.",
      },
      {
        title: "Responsive",
        text: "Sajt izgleda oštro i profesionalno na telefonu i desktopu.",
      },
      {
        title: "Fokus na konverziju",
        text: "Dizajniran da posetioca vodi ka jasnoj akciji.",
      },
    ],
    services: {
      eyebrow: "Usluge",
      title: "Sajtovi koji deluju premium, brzo i namerno dizajnirano.",
      items: [
        {
          title: "Landing stranice",
          text: "Stranice visokog uticaja napravljene da prodaju, rezervišu ili prikupe upite.",
          icon: Sparkles,
        },
        {
          title: "Biznis sajtovi",
          text: "Moderni sajtovi za lokalne brendove, kreatore i uslužne biznise.",
          icon: Globe,
        },
        {
          title: "Web aplikacije",
          text: "Čisti digitalni alati sa pravom funkcionalnošću i oštrim UI dizajnom.",
          icon: MonitorSmartphone,
        },
        {
          title: "Redizajn",
          text: "Pretvaranje zastarelih sajtova u premium online iskustva.",
          icon: RefreshCcw,
        },
      ],
    },
    work: {
      eyebrow: "Odabrani radovi",
      title: "Napravljeno precizno. Dizajnirano da se istakne.",
      text: "Izbor projekata fokusiranih na upotrebljivost, performanse i premium vizuelni doživljaj.",
      items: {
        bor: {
          tag: "Web aplikacija",
          title: "Bor Bus App",
          text: "Aplikacija za javni prevoz grada Bora, fokusirana na jednostavno korišćenje, linije i red vožnje.",
        },
        pesmarica: {
          tag: "Aplikacija",
          title: "Pesmarica App",
          text: "Personalizovana digitalna pesmarica za pevače u istočnoj Srbiji, napravljena za brz pristup i organizaciju tokom nastupa.",
        },
        jovan: {
          tag: "U izradi",
          title: "Jovan PT",
          text: "Premium sajt za personalnog trenera fokusiran na high-end brending i konverziju.",
        },
        vcompany: {
          tag: "U izradi",
          title: "V-COMPANY",
          text: "Premium industrijski CNC sajt fokusiran na poverenje, kapacitete i ozbiljan B2B nastup.",
        },
      },
    },
    process: {
      eyebrow: "Proces",
      titleLine1: "Jednostavan proces.",
      titleLine2: "Napravljen za jasnoću.",
      items: [
        {
          title: "Discovery",
          text: "Definišemo cilj, publiku i smer projekta pre dizajna.",
          icon: Search,
        },
        {
          title: "Strategija",
          text: "Struktura, pozicioniranje i premium vizuelni pravac.",
          icon: PenTool,
        },
        {
          title: "Izrada",
          text: "Brz, responzivan razvoj fokusiran na kvalitet.",
          icon: Code2,
        },
        {
          title: "Launch",
          text: "Finalno poliranje, optimizacija i puštanje sajta uživo.",
          icon: Rocket,
        },
      ],
    },
    about: {
      eyebrow: "O Valdr Studio",
      title: "Premium digitalna iskustva napravljena sa jasnom namerom.",
      p1: "Valdr Studio je nezavisni kreativni web studio fokusiran na izradu premium sajtova za brendove koji žele da se istaknu, deluju ozbiljnije i bolje konvertuju online.",
      p2Start: "Osnovao ga je",
      p2End:
        "spajamo moderan dizajn, čist development i strukturu fokusiranu na konverziju kako bismo kreirali sajtove koji deluju promišljeno od prvog skrola.",
      focusEyebrow: "Fokus",
      focusTitle: "Sajtovi koji zaista deluju premium.",
      cards: [
        {
          title: "Dizajn",
          text: "Čista, premium i pamtljiva iskustva.",
        },
        {
          title: "Development",
          text: "Brze, moderne i responzivne izrade.",
        },
        {
          title: "Strategija",
          text: "Struktura dizajnirana da pretvara posetioce u upite.",
        },
        {
          title: "Vizija",
          text: "Pomažemo brendovima da postanu nemogući za ignorisanje.",
        },
      ],
    },
    highlights: {
      eyebrow: "Istaknuti projekti",
      title: "Rezultati sa stvarnih projekata, ne samo obećanja.",
      items: [
        {
          highlight:
            "Napravljena za svakodnevnu upotrebu u celom gradu — jednostavna navigacija, ažurne linije i red vožnje koji je lako pronaći.",
          name: "Bor Bus App",
          role: "Projekat javnog prevoza",
        },
        {
          highlight:
            "Napravljena da pevači ostanu organizovani na nastupu — brz pristup, čista struktura i sve na jednom mestu.",
          name: "Pesmarica App",
          role: "Digitalna pesmarica",
        },
        {
          highlight:
            "Gradimo premium, ozbiljan prvi utisak za online coaching brend — sajt napravljen da deluje ozbiljno, a ne generički.",
          name: "Jovan PT",
          role: "Sajt u izradi",
        },
      ],
    },
    booking: {
      eyebrow: "Zakaži poziv",
      title: "Hajde da definišemo tvoje premium web prisustvo.",
      text: "Zakaži kratak strategy call gde prolazimo kroz tvoj brend, cilj, ponudu, rokove i najbolji pravac za tvoj sajt.",
      benefits: [
        "Jasan pravac projekta",
        "Premium vizuelna strategija",
        "Objašnjeni sledeći koraci",
      ],
      cardTitle: "Besplatan Website Strategy Call",
      cardText:
        "Fokusiran 30-minutni poziv da razumemo projekat i vidimo da li je Valdr Studio pravi izbor.",
      durationLabel: "Trajanje",
      duration: "30 minuta",
      formatLabel: "Format",
      format: "Online poziv",
      priceLabel: "Cena",
      price: "Besplatno",
      button: "Zakaži poziv",
      note: "Bez pritiska. Samo jasnija slika šta je tvom sajtu potrebno.",
    },
    payment: {
      eyebrow: "Plaćanja klijenata",
      title: "Jasna cena, dogovorena pre bilo kakvog plaćanja.",
      text: "Plaćanje se nikada ne traži pre nego što razumemo tvoj projekat. Prvo prolazimo kroz ciljeve, obim i rokove na strategy call-u. Nakon što odobriš predlog, cenu i način plaćanja dogovaramo direktno.",
      approvalTitle: "Prvo odobrenje",
      approvalText:
        "Plaćanje ide tek kada su pravac projekta i obim posla jasni.",
      checkoutTitle: "Jasni uslovi",
      checkoutText:
        "Cena i način plaćanja se dogovaraju direktno nakon odobrenog predloga.",
      cardEyebrow: "Tok plaćanja",
      cardTitleLine1: "Prvo predlog.",
      cardTitleLine2: "Plaćanje posle.",
      cardText:
        "Svaki projekat počinje kratkim strategy call-om. Kada se dogovorimo oko obima, rokova i cene, uslovi plaćanja se potvrđuju direktno za dogovoreni depozit ili fakturu.",
      step1: "Strategy call",
      step2: "Odobren predlog",
      step3: "Dogovoreno plaćanje",
      button: "Zakaži poziv",
      note: "Detalji plaćanja se dogovaraju tek nakon što se odobri obim projekta.",
    },
    contact: {
      eyebrow: "Kontakt",
      mobileTitle: "Hajde da napravimo nešto izuzetno.",
      desktopTitleLine1: "Hajde da napravimo nešto izuzetno.",
      desktopTitleLine2: "Dizajnirano da stoji iznad buke.",
      text: "Bilo da ti treba premium sajt, redizajn ili digitalno iskustvo koje se stvarno ističe — hajde da pričamo.",
      whatsapp: "WhatsApp",
      email: "Email",
    },
  },
};

export type CopyShape = (typeof copy)["en"];
