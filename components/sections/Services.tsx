import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import type { CopyShape } from "@/lib/copy";

type ServicesProps = {
  t: CopyShape["services"];
};

export default function Services({ t }: ServicesProps) {
  return (
    <Reveal direction="up">
      <section id="services" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
              {t.eyebrow}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.title}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.items.map((service) => {
              const Icon = service.icon;

              return (
                <GlowCard key={service.title} innerClassName="p-8">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface">
                    <Icon className="h-5 w-5 text-text-secondary" />
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-6 text-text-secondary">
                    {service.text}
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
