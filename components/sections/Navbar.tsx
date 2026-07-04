"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL, type CopyShape, type Language } from "@/lib/copy";

type NavbarProps = {
  t: CopyShape["nav"];
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const navLinkKeys = ["services", "work", "process", "booking", "contact"] as const;

export default function Navbar({ t, language, onLanguageChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-black/20 backdrop-blur-xl">
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

        <nav className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
          <a href="#services" className="transition hover:text-text-primary">
            {t.services}
          </a>
          <a href="#work" className="transition hover:text-text-primary">
            {t.work}
          </a>
          <a href="#process" className="transition hover:text-text-primary">
            {t.process}
          </a>
          <a href="#booking" className="transition hover:text-text-primary">
            {t.booking}
          </a>
          <a href="#contact" className="transition hover:text-text-primary">
            {t.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex rounded-full border border-border bg-surface p-1 text-xs font-medium text-text-secondary">
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`rounded-full px-3 py-1.5 transition ${
                language === "en"
                  ? "bg-cta-primary-bg text-cta-primary-text"
                  : "hover:text-text-primary"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => onLanguageChange("sr")}
              className={`rounded-full px-3 py-1.5 transition ${
                language === "sr"
                  ? "bg-cta-primary-bg text-cta-primary-text"
                  : "hover:text-text-primary"
              }`}
            >
              SR
            </button>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-border bg-cta-secondary-bg px-5 py-2 text-sm font-medium transition hover:bg-cta-primary-bg hover:text-cta-primary-text sm:inline-flex"
          >
            {t.startProject}
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cta-secondary-bg text-text-primary transition hover:bg-cta-secondary-bg-hover md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-dvh w-[78vw] max-w-[320px] flex-col border-l border-border bg-bg px-6 py-6 md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
                  Menu
                </span>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cta-secondary-bg text-text-primary transition hover:bg-cta-secondary-bg-hover"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-2">
                {navLinkKeys.map((key) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-control px-3 py-3 text-lg text-text-secondary transition hover:bg-cta-secondary-bg hover:text-text-primary"
                  >
                    {t[key]}
                  </a>
                ))}
              </nav>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-cta-primary-bg px-6 py-3 font-medium text-cta-primary-text transition hover:scale-[1.02]"
              >
                {t.startProject}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
