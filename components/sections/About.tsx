import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import type { CopyShape } from "@/lib/copy";

type AboutProps = {
  t: CopyShape["about"];
};

export default function About({ t }: AboutProps) {
  return (
    <Reveal direction="up">
      <section className="relative border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-text-tertiary">
                {t.eyebrow}
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl">
                {t.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary">
                {t.p1}
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
                {t.p2Start}{" "}
                <span className="text-text-primary">Davor Radivojevic</span>,{" "}
                {t.p2End}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-card border border-border bg-surface p-10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

              <div className="relative space-y-8">
                <div>
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-text-tertiary">
                    {t.focusEyebrow}
                  </p>

                  <h3 className="mt-2 text-2xl font-medium text-text-primary">
                    {t.focusTitle}
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  {t.cards.map((card) => (
                    <GlowCard key={card.title} innerClassName="min-h-[160px] p-6">
                      <p className="text-sm text-text-tertiary">{card.title}</p>
                      <p className="mt-2 text-lg leading-7 text-text-primary">
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
  );
}
