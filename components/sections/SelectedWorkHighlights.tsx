import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import type { CopyShape } from "@/lib/copy";

type SelectedWorkHighlightsProps = {
  t: CopyShape["highlights"];
};

export default function SelectedWorkHighlights({ t }: SelectedWorkHighlightsProps) {
  return (
    <Reveal direction="up">
      <section className="relative overflow-hidden border-t border-border px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
              {t.eyebrow}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.title}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {t.items.map((item) => (
              <GlowCard key={item.name} innerClassName="p-8">
                <p className="text-lg leading-8 text-text-secondary">
                  {item.highlight}
                </p>

                <div className="mt-10 border-t border-border pt-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-text-tertiary">{item.role}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
