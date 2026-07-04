import Reveal from "@/components/Reveal";
import type { CopyShape } from "@/lib/copy";

type ContactProps = {
  t: CopyShape["contact"];
};

export default function Contact({ t }: ContactProps) {
  return (
    <Reveal direction="up">
      <section
        id="contact"
        className="relative overflow-hidden border-t border-border px-6 py-32"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-glow-lg" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
            {t.eyebrow}
          </p>

          <h2 className="font-semibold tracking-tight">
            <span className="mx-auto block max-w-[320px] text-[38px] leading-[1.02] sm:hidden">
              {t.mobileTitle}
            </span>

            <span className="hidden text-4xl leading-[0.98] sm:block sm:text-6xl">
              {t.desktopTitleLine1}
              <br />
              {t.desktopTitleLine2}
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary">
            {t.text}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/381611509121"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[220px] rounded-full bg-cta-primary-bg px-8 py-4 font-medium text-cta-primary-text transition hover:scale-105"
            >
              {t.whatsapp}
            </a>

            <a
              href="mailto:valdrstudio@gmail.com"
              className="min-w-[220px] rounded-full border border-border bg-cta-secondary-bg px-8 py-4 font-medium backdrop-blur-sm transition hover:bg-cta-secondary-bg-hover"
            >
              {t.email}
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center text-sm text-text-tertiary">
            <a
              href="mailto:valdrstudio@gmail.com"
              className="transition hover:text-text-primary"
            >
              valdrstudio@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
