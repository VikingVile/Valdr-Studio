"use client";

import Image from "next/image";
import Link from "next/link"; //OVDE JE DODANO//
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import TawkChat from "@/components/TawkChat";

import {
  Sparkles,
  Globe,
  MonitorSmartphone,
  RefreshCcw,
  Search,
  PenTool,
  Code2,
  Rocket,
  CalendarDays,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

type Language = "en" | "sr";

const CALENDLY_URL = "https://calendly.com/radivojevicdavor79/30min";

const copy = {
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
      borTag: "Web App",
      borTitle: "Bor Bus App",
      borText:
        "Public transport application for the city of Bor, focused on usability, routes and timetable access.",
      pesmaricaTag: "App",
      pesmaricaTitle: "Pesmarica App",
      pesmaricaText:
        "Personalized digital songbook for singers across eastern Serbia, designed for simple access and organisation on set.",
      jovanTag: "In Progress",
      jovanTitle: "Jovan PT",
      jovanText:
        "Premium personal trainer website focused on high-end branding and conversion.",
      //OVDE JE DODANO//
      vcompanyTag: "In Progress",
      vcompanyTitle: "V-COMPANY",
      vcompanyText:
        "Premium industrial CNC website focused on trust, capability clarity and serious B2B positioning.",
      avlijeTag: "In Progress",
      avlijeTitle: "Restoran Avlija",
      avlijeText:
        "Warm premium restaurant website focused on atmosphere, Serbian cuisine, reservations and brand presence.",
      //OVDE JE DODANO//
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
    testimonials: {
      eyebrow: "Testimonials",
      title: "Early feedback from real projects.",
      items: [
        {
          quote:
            "The app is simple, clean and actually useful. Everything is easy to find and works smoothly.",
          name: "Bor Bus App",
          role: "Public transport project",
        },
        {
          quote:
            "The songbook feels organized and easy to use during performances. It saves time and keeps everything in one place.",
          name: "Pesmarica App",
          role: "Digital songbook project",
        },
        {
          quote:
            "The direction already feels premium and serious. The goal is to build something that looks high-end, not generic.",
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
      title: "Secure payments after the project is approved.",
      text: "Payments are never required before we understand your project. First, we discuss your goals, scope and timeline. After the proposal is approved, you receive a secure payment link to reserve your project slot.",
      approvalTitle: "Approval first",
      approvalText:
        "You only pay after the project direction and scope are clear.",
      checkoutTitle: "Secure checkout",
      checkoutText:
        "Approved payments are handled safely through Stripe Checkout.",
      cardEyebrow: "Payment Flow",
      cardTitleLine1: "Proposal first.",
      cardTitleLine2: "Payment after.",
      cardText:
        "Every project starts with a short strategy call. Once we agree on scope, timeline and pricing, a private payment link is shared for the agreed deposit or invoice.",
      step1: "Strategy call",
      step2: "Proposal approval",
      step3: "Secure payment",
      button: "Book Strategy Call",
      note: "Secure payment links are shared privately after the project scope is approved.",
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
      borTag: "Web aplikacija",
      borTitle: "Bor Bus App",
      borText:
        "Aplikacija za javni prevoz grada Bora, fokusirana na jednostavno korišćenje, linije i red vožnje.",
      pesmaricaTag: "Aplikacija",
      pesmaricaTitle: "Pesmarica App",
      pesmaricaText:
        "Personalizovana digitalna pesmarica za pevače u istočnoj Srbiji, napravljena za brz pristup i organizaciju tokom nastupa.",
      jovanTag: "U izradi",
      jovanTitle: "Jovan PT",
      jovanText:
        "Premium sajt za personalnog trenera fokusiran na high-end brending i konverziju.",
      //OVDE JE DODANO//
      vcompanyTag: "U izradi",
      vcompanyTitle: "V-COMPANY",
      vcompanyText:
        "Premium industrijski CNC sajt fokusiran na poverenje, kapacitete i ozbiljan B2B nastup.",
      avlijeTag: "U izradi",
      avlijeTitle: "Restoran Avlija",
      avlijeText:
        "Topao premium restoran sajt fokusiran na atmosferu, domaću kuhinju, rezervacije i brend prisustvo.",
      //OVDE JE DODANO//
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
    testimonials: {
      eyebrow: "Utisci",
      title: "Rani feedback iz stvarnih projekata.",
      items: [
        {
          quote:
            "Aplikacija je jednostavna, čista i stvarno korisna. Sve se lako pronalazi i radi glatko.",
          name: "Bor Bus App",
          role: "Projekat javnog prevoza",
        },
        {
          quote:
            "Pesmarica je organizovana i laka za korišćenje tokom nastupa. Štedi vreme i drži sve na jednom mestu.",
          name: "Pesmarica App",
          role: "Digitalna pesmarica",
        },
        {
          quote:
            "Pravac već deluje premium i ozbiljno. Cilj je da se napravi nešto što izgleda high-end, a ne generički.",
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
      title: "Sigurno plaćanje tek nakon odobrenog projekta.",
      text: "Plaćanje se nikada ne traži pre nego što razumemo tvoj projekat. Prvo prolazimo kroz ciljeve, obim i rokove. Nakon odobrenog predloga, dobijaš siguran payment link za rezervaciju termina projekta.",
      approvalTitle: "Prvo odobrenje",
      approvalText:
        "Plaćanje ide tek kada su pravac projekta i obim posla jasni.",
      checkoutTitle: "Siguran checkout",
      checkoutText:
        "Odobrena plaćanja se bezbedno obrađuju kroz Stripe Checkout.",
      cardEyebrow: "Tok plaćanja",
      cardTitleLine1: "Prvo predlog.",
      cardTitleLine2: "Plaćanje posle.",
      cardText:
        "Svaki projekat počinje kratkim strategy call-om. Kada se dogovorimo oko obima, rokova i cene, privatni payment link se šalje za dogovoreni depozit ili fakturu.",
      step1: "Strategy call",
      step2: "Odobren predlog",
      step3: "Sigurno plaćanje",
      button: "Zakaži poziv",
      note: "Sigurni payment linkovi se šalju privatno nakon što se odobri obim projekta.",
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

function GlowCard({
  children,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={`group relative rounded-[28px] p-[1px] transition duration-500 hover:-translate-y-2 ${className}`}
    >
      <div className="absolute -inset-[2px] rounded-[36px] bg-white opacity-55 blur-[2px] transition duration-500 group-hover:opacity-70" />

      <div
        className={`relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A] hover:border-white/20 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

function BinaryCodeRain() {
  const columnGroups = [
    {
      side: "left",
      offset: "2vw",
      opacity: 0.13,
      streams: [
        { animation: "valdrBinaryDownA", duration: "22s", delay: "-4s", sequence: "010110100101011001011010" },
        { animation: "valdrBinaryUpB", duration: "31s", delay: "-16s", sequence: "110010101101001011001010" },
        { animation: "valdrBinaryDownC", duration: "27s", delay: "-9s", sequence: "001011010010110100101101" },
        { animation: "valdrBinaryUpD", duration: "36s", delay: "-21s", sequence: "101001011010010110100101" },
      ],
    },
    {
      side: "left",
      offset: "4.9vw",
      opacity: 0.11,
      streams: [
        { animation: "valdrBinaryUpA", duration: "34s", delay: "-18s", sequence: "101101001010110010110100" },
        { animation: "valdrBinaryDownB", duration: "25s", delay: "-7s", sequence: "010010110100101101001011" },
        { animation: "valdrBinaryUpC", duration: "39s", delay: "-25s", sequence: "110100101101001010110010" },
        { animation: "valdrBinaryDownD", duration: "29s", delay: "-13s", sequence: "001101001011010010101101" },
      ],
    },
    {
      side: "left",
      offset: "7.8vw",
      opacity: 0.095,
      streams: [
        { animation: "valdrBinaryDownD", duration: "41s", delay: "-29s", sequence: "011010010110100101011001" },
        { animation: "valdrBinaryUpA", duration: "28s", delay: "-11s", sequence: "100101101001011010010110" },
        { animation: "valdrBinaryDownB", duration: "35s", delay: "-20s", sequence: "010110010101101001011010" },
        { animation: "valdrBinaryUpC", duration: "24s", delay: "-6s", sequence: "111001010110100101100101" },
      ],
    },
    {
      side: "left",
      offset: "15vw",
      opacity: 0.075,
      streams: [
        { animation: "valdrBinaryUpD", duration: "30s", delay: "-12s", sequence: "010101101001011001011010" },
        { animation: "valdrBinaryDownA", duration: "44s", delay: "-33s", sequence: "101101001011010010110010" },
        { animation: "valdrBinaryUpB", duration: "26s", delay: "-8s", sequence: "001011010110010101101001" },
        { animation: "valdrBinaryDownC", duration: "37s", delay: "-19s", sequence: "110010110100101101001010" },
      ],
    },
    {
      side: "right",
      offset: "2vw",
      opacity: 0.13,
      streams: [
        { animation: "valdrBinaryUpA", duration: "23s", delay: "-6s", sequence: "101001011010010110010101" },
        { animation: "valdrBinaryDownB", duration: "32s", delay: "-18s", sequence: "010101101001011010010110" },
        { animation: "valdrBinaryUpC", duration: "28s", delay: "-10s", sequence: "110100101011001011010010" },
        { animation: "valdrBinaryDownD", duration: "37s", delay: "-24s", sequence: "001010110100101101001011" },
      ],
    },
    {
      side: "right",
      offset: "4.9vw",
      opacity: 0.11,
      streams: [
        { animation: "valdrBinaryDownA", duration: "35s", delay: "-21s", sequence: "011001011010010101101001" },
        { animation: "valdrBinaryUpB", duration: "26s", delay: "-8s", sequence: "101101001011001010110100" },
        { animation: "valdrBinaryDownC", duration: "40s", delay: "-30s", sequence: "010110100101101001011001" },
        { animation: "valdrBinaryUpD", duration: "30s", delay: "-14s", sequence: "110010101101001010110100" },
      ],
    },
    {
      side: "right",
      offset: "7.8vw",
      opacity: 0.095,
      streams: [
        { animation: "valdrBinaryUpD", duration: "42s", delay: "-31s", sequence: "001101001011010010101101" },
        { animation: "valdrBinaryDownA", duration: "29s", delay: "-12s", sequence: "010010110100101101001011" },
        { animation: "valdrBinaryUpB", duration: "36s", delay: "-22s", sequence: "101001011010010110100101" },
        { animation: "valdrBinaryDownC", duration: "25s", delay: "-7s", sequence: "110100101011001011010010" },
      ],
    },
    {
      side: "right",
      offset: "10.7vw",
      opacity: 0.075,
      streams: [
        { animation: "valdrBinaryDownD", duration: "31s", delay: "-16s", sequence: "010110010101101001011010" },
        { animation: "valdrBinaryUpA", duration: "45s", delay: "-35s", sequence: "111001010110100101100101" },
        { animation: "valdrBinaryDownB", duration: "27s", delay: "-9s", sequence: "011010010110100101011001" },
        { animation: "valdrBinaryUpC", duration: "38s", delay: "-26s", sequence: "100101101001011010010110" },
      ],
    },
  ] as const;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-dvh w-screen max-w-full overflow-hidden xl:block"
      aria-hidden="true"
    >
      <style>{`
        @keyframes valdrBinaryDownA {
          0% { transform: translate3d(-1px, -50%, 0); }
          50% { transform: translate3d(1px, 0%, 0); }
          100% { transform: translate3d(-1px, 50%, 0); }
        }

        @keyframes valdrBinaryDownB {
          0% { transform: translate3d(1px, -50%, 0); }
          45% { transform: translate3d(-2px, -3%, 0); }
          100% { transform: translate3d(1px, 50%, 0); }
        }

        @keyframes valdrBinaryDownC {
          0% { transform: translate3d(0px, -50%, 0); }
          55% { transform: translate3d(2px, 2%, 0); }
          100% { transform: translate3d(-1px, 50%, 0); }
        }

        @keyframes valdrBinaryDownD {
          0% { transform: translate3d(2px, -50%, 0); }
          50% { transform: translate3d(-1px, 0%, 0); }
          100% { transform: translate3d(2px, 50%, 0); }
        }

        @keyframes valdrBinaryUpA {
          0% { transform: translate3d(1px, 50%, 0); }
          50% { transform: translate3d(-1px, 0%, 0); }
          100% { transform: translate3d(1px, -50%, 0); }
        }

        @keyframes valdrBinaryUpB {
          0% { transform: translate3d(-1px, 50%, 0); }
          45% { transform: translate3d(2px, 3%, 0); }
          100% { transform: translate3d(-1px, -50%, 0); }
        }

        @keyframes valdrBinaryUpC {
          0% { transform: translate3d(0px, 50%, 0); }
          55% { transform: translate3d(-2px, -2%, 0); }
          100% { transform: translate3d(1px, -50%, 0); }
        }

        @keyframes valdrBinaryUpD {
          0% { transform: translate3d(-2px, 50%, 0); }
          50% { transform: translate3d(1px, 0%, 0); }
          100% { transform: translate3d(-2px, -50%, 0); }
        }
      `}</style>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 20%, rgba(0,0,0,0.62) 25%, rgba(0,0,0,0.24) 29%, transparent 34%, transparent 66%, rgba(0,0,0,0.24) 71%, rgba(0,0,0,0.62) 75%, black 80%, black 100%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 20%, rgba(0,0,0,0.62) 25%, rgba(0,0,0,0.24) 29%, transparent 34%, transparent 66%, rgba(0,0,0,0.24) 71%, rgba(0,0,0,0.62) 75%, black 80%, black 100%)",
        }}
      >
        {columnGroups.map((group, groupIndex) => (
          <div
            key={`${group.side}-${group.offset}-${groupIndex}`}
            className="absolute top-[-50vh] h-[200vh] w-[46px] select-none overflow-hidden"
            style={
              group.side === "left"
                ? { left: group.offset, opacity: group.opacity }
                : { right: group.offset, opacity: group.opacity }
            }
          >
            {group.streams.map((stream, streamIndex) => (
              <div
                key={`${stream.animation}-${stream.duration}-${streamIndex}`}
                className="absolute top-0 h-full w-4 whitespace-pre-wrap break-all font-mono text-[11px] font-medium leading-[1.9] tracking-[0.45em] text-white/90 blur-[0.12px] [writing-mode:vertical-rl]"
                style={{
                  left: `${streamIndex * 13}px`,
                  animation: `${stream.animation} ${stream.duration} linear infinite`,
                  animationDelay: stream.delay,
                }}
              >
                {(stream.sequence.repeat(22) + stream.sequence.repeat(22))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("valdr-language");

    if (savedLanguage === "en" || savedLanguage === "sr") {
      window.setTimeout(() => setLanguage(savedLanguage), 0);
    }
  }, []);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    window.localStorage.setItem("valdr-language", nextLanguage);
  }

  const t = copy[language];

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[linear-gradient(to_bottom,#080808_0%,#0A0A0A_35%,#111111_100%)] text-white">
      <BinaryCodeRain />

      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 md:h-[78px]">
          <a href="#" className="flex items-center">
            <Image
              src="/images/ValdrStudio.png"
              alt="Valdr Studio logo"
              width={220}
              height={90}
              className="w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
            <a href="#services" className="transition hover:text-white">
              {t.nav.services}
            </a>
            <a href="#work" className="transition hover:text-white">
              {t.nav.work}
            </a>
            <a href="#process" className="transition hover:text-white">
              {t.nav.process}
            </a>
            <a href="#booking" className="transition hover:text-white">
              {t.nav.booking}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-medium text-neutral-400">
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`rounded-full px-3 py-1.5 transition ${
                  language === "en" ? "bg-white text-black" : "hover:text-white"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLanguage("sr")}
                className={`rounded-full px-3 py-1.5 transition ${
                  language === "sr" ? "bg-white text-black" : "hover:text-white"
                }`}
              >
                SR
              </button>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black sm:inline-flex"
            >
              {t.nav.startProject}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 md:px-6 md:pt-24">
        {/* Premium top atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-380px] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[140px]" />

          <div className="absolute left-[10%] top-[5%] h-[320px] w-[320px] rounded-full bg-white/[0.03] blur-[120px]" />

          <div className="absolute right-[8%] top-[8%] h-[280px] w-[280px] rounded-full bg-white/[0.025] blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_42%)]" />
        </div>

        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-72 w-[700px] rotate-[-8deg] rounded-full bg-white/8 blur-[90px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-72 w-[700px] rotate-[8deg] rounded-full bg-white/6 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[length:100%_6px] opacity-[0.08]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45vh] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-400">
            {t.hero.eyebrow}
          </p>

          <h1 className="mx-auto max-w-4xl text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            {t.hero.text}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[220px] rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
            >
              {t.hero.primary}
            </a>

            <a
              href="#work"
              className="min-w-[220px] rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur-sm transition hover:bg-white/10"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <Reveal direction="up">
        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] px-6 py-14 backdrop-blur-sm">
          <div className="absolute left-1/2 top-0 h-52 w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" />

          <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-3">
            {t.proof.map((item) => (
              <div key={item.title}>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-neutral-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* SERVICES */}
      <Reveal direction="up">
        <section id="services" className="relative px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t.services.eyebrow}
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.services.title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.services.items.map((service) => {
                const Icon = service.icon;

                return (
                  <GlowCard key={service.title} innerClassName="p-8">
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <Icon className="h-5 w-5 text-neutral-300" />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-neutral-400">
                      {service.text}
                    </p>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* SELECTED WORK */}
      <Reveal direction="up">
        <section id="work" className="relative overflow-hidden px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                  {t.work.eyebrow}
                </p>

                <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  {t.work.title}
                </h2>
              </div>

              <p className="max-w-md text-neutral-500">{t.work.text}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* BOR BUS */}
              <a
                href="https://borskiprevoz.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-[240px] overflow-hidden bg-neutral-950 md:h-[300px]">
                  <Image
                    src="/images/favicon.png.png"
                    alt="Bor Bus App"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-200 backdrop-blur-sm">
                      {t.work.borTag}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                      {t.work.borTitle}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <p className="mt-4 text-neutral-400">{t.work.borText}</p>
                </div>
              </a>

              {/* PESMARICA */}
              <a
                href="https://pesmarica.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-[240px] overflow-hidden bg-neutral-950 md:h-[300px]">
                  <Image
                    src="/images/pesmarica.png.png"
                    alt="Pesmarica App"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-200 backdrop-blur-sm">
                      {t.work.pesmaricaTag}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                      {t.work.pesmaricaTitle}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <p className="mt-4 text-neutral-400">
                    {t.work.pesmaricaText}
                  </p>
                </div>
              </a>

              {/* JOVAN PT */} {/*OVDE JE DODANO: kartica sada vodi na interni preview page umesto na Instagram */}
              <Link
                href="/work/jovan-pt"
                aria-label="Open Jovan PT case study"
                className="group block cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-yellow-300/25 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35),0_0_45px_rgba(250,204,21,0.08)] focus:outline-none focus-visible:-translate-y-2 focus-visible:border-yellow-300/35 focus-visible:shadow-[0_0_0_3px_rgba(250,204,21,0.18),0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-[240px] overflow-hidden bg-neutral-950 md:h-[300px]">
                  <Image
                    src="/images/jovan-preview.jpg"
                    alt="Jovan PT preview"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="scale-[1.13] object-cover object-[center_7%] transition duration-700 group-hover:scale-[1.18]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-transparent" />

                  <div className="absolute bottom-8 left-8 z-20">
                    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300 backdrop-blur-sm">
                      {t.work.jovanTag}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">
                      {t.work.jovanTitle}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <p className="mt-4 text-neutral-400">{t.work.jovanText}</p>
                </div>
              </Link>

              {/* V-COMPANY */} {/*OVDE JE DODANO*/}
              <Link
                href="/work/v-company"
                className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-sky-300/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-[240px] overflow-hidden bg-neutral-950 md:h-[300px]">
                  <Image
                    src="/images/v-company-preview.png"
                    alt="V-COMPANY preview"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-left transition duration-700 group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <div className="absolute bottom-8 left-8 z-20">
                    <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200 backdrop-blur-sm">
                      {t.work.vcompanyTag}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">
                      {t.work.vcompanyTitle}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <p className="mt-4 text-neutral-400">
                    {t.work.vcompanyText}
                  </p>
                </div>
              </Link>

              {/* RESTORAN AVLIJA */} {/*OVDE JE DODANO*/}
              <Link
                href="/work/restoran-avlija"
                className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-amber-300/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-[240px] overflow-hidden bg-neutral-950 md:h-[300px]">
                  <Image
                    src="/images/avlije-preview.png"
                    alt="Restoran Avlija preview"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <div className="absolute bottom-8 left-8 z-20">
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 backdrop-blur-sm">
                      {t.work.avlijeTag}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">
                      {t.work.avlijeTitle}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <p className="mt-4 text-neutral-400">{t.work.avlijeText}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PROCESS */}
      <Reveal direction="left">
        <section
          id="process"
          className="relative overflow-hidden border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t.process.eyebrow}
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.process.titleLine1}
                <br />
                {t.process.titleLine2}
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {t.process.items.map((step) => {
                const Icon = step.icon;

                return (
                  <GlowCard key={step.title} innerClassName="p-8">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>

                    <h3 className="text-2xl font-semibold">{step.title}</h3>

                    <p className="mt-4 leading-7 text-neutral-400">
                      {step.text}
                    </p>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ABOUT */}
      <Reveal direction="up">
        <section className="relative border-t border-white/10 py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/40">
                  {t.about.eyebrow}
                </p>

                <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  {t.about.title}
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
                  {t.about.p1}
                </p>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                  {t.about.p2Start}{" "}
                  <span className="text-white">Davor Radivojevic</span>,{" "}
                  {t.about.p2End}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

                <div className="relative space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                      {t.about.focusEyebrow}
                    </p>

                    <h3 className="mt-2 text-2xl font-medium text-white">
                      {t.about.focusTitle}
                    </h3>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {t.about.cards.map((card) => (
                      <GlowCard
                        key={card.title}
                        innerClassName="min-h-[160px] p-6"
                      >
                        <p className="text-sm text-white/45">{card.title}</p>
                        <p className="mt-2 text-lg leading-7 text-white">
                          {card.text}
                        </p>
                      </GlowCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal direction="up">
        <section className="relative overflow-hidden border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t.testimonials.eyebrow}
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.testimonials.title}
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {t.testimonials.items.map((item) => (
                <GlowCard key={item.name} innerClassName="p-8">
                  <p className="text-lg leading-8 text-neutral-300">
                    “{item.quote}”
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {item.role}
                    </p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* BOOKING */}
      <Reveal direction="left">
        <section
          id="booking"
          className="relative overflow-hidden border-t border-white/10 px-6 py-32"
        >
          <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[150px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t.booking.eyebrow}
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.booking.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                {t.booking.text}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {t.booking.benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-neutral-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlowCard innerClassName="p-8 md:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <CalendarDays className="h-6 w-6 text-white" strokeWidth={1.6} />
              </div>

              <h3 className="text-3xl font-semibold tracking-tight">
                {t.booking.cardTitle}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {t.booking.cardText}
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-sm text-neutral-400">
                <div className="flex items-center justify-between">
                  <span>{t.booking.durationLabel}</span>
                  <span className="text-white">{t.booking.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>{t.booking.formatLabel}</span>
                  <span className="text-white">{t.booking.format}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>{t.booking.priceLabel}</span>
                  <span className="text-white">{t.booking.price}</span>
                </div>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-[1.02]"
              >
                {t.booking.button}
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <p className="mt-5 text-center text-xs text-neutral-500">
                {t.booking.note}
              </p>
            </GlowCard>
          </div>
        </section>
      </Reveal>

      {/* PAYMENT */}
      <Reveal direction="right">
        <section
          id="payment"
          className="relative overflow-hidden border-t border-white/10 px-6 py-32"
        >
          <div className="absolute right-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[130px]" />
          <div className="absolute bottom-0 left-[-180px] h-[420px] w-[420px] rounded-full bg-white/[0.025] blur-[130px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                {t.payment.eyebrow}
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.payment.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                {t.payment.text}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: t.payment.approvalTitle,
                    text: t.payment.approvalText,
                  },
                  {
                    icon: CreditCard,
                    title: t.payment.checkoutTitle,
                    text: t.payment.checkoutText,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                      </div>

                      <h3 className="font-semibold text-white">{item.title}</h3>

                      <p className="mt-3 text-sm leading-6 text-neutral-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <GlowCard innerClassName="p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    {t.payment.cardEyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    {t.payment.cardTitleLine1}
                    <br />
                    {t.payment.cardTitleLine2}
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <CreditCard className="h-6 w-6 text-white" strokeWidth={1.6} />
                </div>
              </div>

              <p className="leading-7 text-neutral-400">
                {t.payment.cardText}
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-sm text-neutral-400">
                <div className="flex items-center justify-between">
                  <span>Step 1</span>
                  <span className="text-white">{t.payment.step1}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Step 2</span>
                  <span className="text-white">{t.payment.step2}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Step 3</span>
                  <span className="text-white">{t.payment.step3}</span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-[1.02]"
                >
                  {t.payment.button}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-neutral-500">
                {t.payment.note}
              </p>
            </GlowCard>
          </div>
        </section>
      </Reveal>

      {/* CONTACT / CTA */}
      <Reveal direction="up">
        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/10 px-6 py-36"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[140px]" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
              {t.contact.eyebrow}
            </p>

            <h2 className="font-semibold tracking-tight">
              <span className="mx-auto block max-w-[320px] text-[38px] leading-[1.02] sm:hidden">
                {t.contact.mobileTitle}
              </span>

              <span className="hidden text-4xl leading-[0.98] sm:block sm:text-6xl">
                {t.contact.desktopTitleLine1}
                <br />
                {t.contact.desktopTitleLine2}
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400">
              {t.contact.text}
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/381611509121"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[220px] rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
              >
                {t.contact.whatsapp}
              </a>

              <a
                href="mailto:valdrstudio@gmail.com"
                className="min-w-[220px] rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur-sm transition hover:bg-white/10"
              >
                {t.contact.email}
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center text-sm text-neutral-500">
              <a
                href="mailto:valdrstudio@gmail.com"
                className="transition hover:text-white"
              >
                valdrstudio@gmail.com
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <TawkChat />
    </main>
  );
}
