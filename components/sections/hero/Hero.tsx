import { CALENDLY_URL, type CopyShape } from "@/lib/copy";
import HeroBackground from "./HeroBackground";

type HeroProps = {
  t: CopyShape["hero"];
};

export default function Hero({ t }: HeroProps) {
  return (
    <>
      <HeroBackground />

      <section className="relative z-10 flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 md:px-6 md:pt-24">
        {/* Premium top atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-380px] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-glow-lg" />

          <div className="absolute left-[10%] top-[5%] h-[320px] w-[320px] rounded-full bg-white/[0.03] blur-glow-md" />

          <div className="absolute right-[8%] top-[8%] h-[280px] w-[280px] rounded-full bg-white/[0.025] blur-glow-md" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_42%)]" />
        </div>

        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-glow-lg" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-72 w-[700px] rotate-[-8deg] rounded-full bg-white/8 blur-glow-sm" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-72 w-[700px] rotate-[8deg] rounded-full bg-white/6 blur-glow-sm" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[length:100%_6px] opacity-[0.08]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45vh] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
            {t.eyebrow}
          </p>

          <h1 className="mx-auto max-w-4xl text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-6xl">
            {t.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            {t.text}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[220px] rounded-full bg-cta-primary-bg px-8 py-4 font-medium text-cta-primary-text transition hover:scale-105"
            >
              {t.primary}
            </a>

            <a
              href="#work"
              className="min-w-[220px] rounded-full border border-border bg-cta-secondary-bg px-8 py-4 font-medium backdrop-blur-sm transition hover:bg-cta-secondary-bg-hover"
            >
              {t.secondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
