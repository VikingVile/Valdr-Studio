import Reveal from "@/components/Reveal";
import type { CopyShape } from "@/lib/copy";

type ProofStripProps = {
  t: CopyShape["proof"];
};

export default function ProofStrip({ t }: ProofStripProps) {
  return (
    <Reveal direction="up">
      <section className="relative overflow-hidden border-y border-border bg-surface px-6 py-14 backdrop-blur-sm">
        <div className="absolute left-1/2 top-0 h-52 w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-glow-sm" />

        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-3">
          {t.map((item) => (
            <div key={item.title}>
              <p className="font-mono text-2xl font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-text-tertiary">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
