import { CalendarDays, ArrowUpRight, CheckCircle2 } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import { CALENDLY_URL, type CopyShape } from "@/lib/copy";

type BookingProps = {
  t: CopyShape["booking"];
};

export default function Booking({ t }: BookingProps) {
  return (
    <Reveal direction="left">
      <section
        id="booking"
        className="relative overflow-hidden border-t border-border px-6 py-32"
      >
        <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-glow-lg" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
              {t.eyebrow}
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              {t.text}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-control border border-border bg-surface px-4 py-4 text-sm text-text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4 text-text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <GlowCard innerClassName="p-8 md:p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-control border border-border bg-surface">
              <CalendarDays className="h-6 w-6 text-text-primary" strokeWidth={1.6} />
            </div>

            <h3 className="text-3xl font-semibold tracking-tight">
              {t.cardTitle}
            </h3>

            <p className="mt-4 leading-7 text-text-secondary">{t.cardText}</p>

            <div className="mt-8 space-y-4 border-t border-border pt-8 font-mono text-sm text-text-secondary">
              <div className="flex items-center justify-between">
                <span>{t.durationLabel}</span>
                <span className="text-text-primary">{t.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>{t.formatLabel}</span>
                <span className="text-text-primary">{t.format}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>{t.priceLabel}</span>
                <span className="text-text-primary">{t.price}</span>
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cta-primary-bg px-8 py-4 font-medium text-cta-primary-text transition hover:scale-[1.02]"
            >
              {t.button}
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <p className="mt-5 text-center text-xs text-text-tertiary">
              {t.note}
            </p>
          </GlowCard>
        </div>
      </section>
    </Reveal>
  );
}
