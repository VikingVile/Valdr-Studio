import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import type { CopyShape } from "@/lib/copy";

type ProcessProps = {
  t: CopyShape["process"];
};

export default function Process({ t }: ProcessProps) {
  return (
    <Reveal direction="left">
      <section
        id="process"
        className="relative overflow-hidden border-t border-border px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
              {t.eyebrow}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.titleLine1}
              <br />
              {t.titleLine2}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {t.items.map((step) => {
              const Icon = step.icon;

              return (
                <GlowCard key={step.title} innerClassName="p-8">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-control border border-border bg-surface transition duration-300 group-hover:border-border-hover group-hover:bg-cta-primary-bg group-hover:text-cta-primary-text">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>

                  <h3 className="text-2xl font-semibold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-text-secondary">
                    {step.text}
                  </p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
