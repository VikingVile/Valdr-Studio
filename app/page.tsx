"use client";

import { useEffect, useState } from "react";
import { copy, type Language } from "@/lib/copy";
import TawkChat from "@/components/TawkChat";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/hero/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import Services from "@/components/sections/Services";
import SelectedWork from "@/components/sections/SelectedWork";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import SelectedWorkHighlights from "@/components/sections/SelectedWorkHighlights";
import Booking from "@/components/sections/Booking";
import Payments from "@/components/sections/Payments";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("valdr-language");

    if (savedLanguage === "en" || savedLanguage === "sr") {
      window.setTimeout(() => setLanguage(savedLanguage), 0);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    window.localStorage.setItem("valdr-language", nextLanguage);
  }

  const t = copy[language];

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[linear-gradient(to_bottom,#080808_0%,#0A0A0A_35%,#111111_100%)] text-white">
      <Navbar t={t.nav} language={language} onLanguageChange={changeLanguage} />
      <Hero t={t.hero} />
      <ProofStrip t={t.proof} />
      <Services t={t.services} />
      <SelectedWork t={t.work} />
      <Process t={t.process} />
      <About t={t.about} />
      <SelectedWorkHighlights t={t.highlights} />
      <Booking t={t.booking} />
      <Payments t={t.payment} />
      <Contact t={t.contact} />
      <TawkChat />
    </main>
  );
}
