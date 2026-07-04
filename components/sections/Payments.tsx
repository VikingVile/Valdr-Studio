import { CreditCard, ShieldCheck, ArrowUpRight } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import { CALENDLY_URL, type CopyShape } from "@/lib/copy";

type PaymentsProps = {
  t: CopyShape["payment"];
};

export default function Payments({ t }: PaymentsProps) {
  return (
    <Reveal direction="right">
      <section
        id="payment"
        className="relative overflow-hidden border-t border-border px-6 py-32"
      >
        <div className="absolute right-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-glow-md" />
        <div className="absolute bottom-0 left-[-180px] h-[420px] w-[420px] rounded-full bg-white/[0.025] blur-glow-md" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: t.approvalTitle,
                  text: t.approvalText,
                },
                {
                  icon: CreditCard,
                  title: t.checkoutTitle,
                  text: t.checkoutText,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-control border border-border bg-surface p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-control border border-border bg-surface">
                      <Icon className="h-5 w-5 text-text-primary" strokeWidth={1.6} />
                    </div>

                    <h3 className="font-semibold text-text-primary">{item.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-text-secondary">
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
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-text-tertiary">
                  {t.cardEyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  {t.cardTitleLine1}
                  <br />
                  {t.cardTitleLine2}
                </h3>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-control border border-border bg-surface">
                <CreditCard className="h-6 w-6 text-text-primary" strokeWidth={1.6} />
              </div>
            </div>

            <p className="leading-7 text-text-secondary">{t.cardText}</p>

            <div className="mt-8 space-y-4 border-t border-border pt-8 font-mono text-sm text-text-secondary">
              <div className="flex items-center justify-between">
                <span>Step 1</span>
                <span className="text-text-primary">{t.step1}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Step 2</span>
                <span className="text-text-primary">{t.step2}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Step 3</span>
                <span className="text-text-primary">{t.step3}</span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cta-primary-bg px-8 py-4 font-medium text-cta-primary-text transition hover:scale-[1.02]"
              >
                {t.button}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-text-tertiary">
              {t.note}
            </p>
          </GlowCard>
        </div>
      </section>
    </Reveal>
  );
}
