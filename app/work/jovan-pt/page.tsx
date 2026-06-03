import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
} from "lucide-react";

function GlowCard({
  children,
  innerClassName = "",
}: {
  children: ReactNode;
  innerClassName?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_34px_rgba(255,255,255,0.07)] transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.045] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_0_48px_rgba(255,255,255,0.15)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </div>
  );
}

const infoCards = [
  { title: "Focus", text: "Premium fitness positioning" },
  { title: "Goal", text: "Trust + booking clarity" },
  { title: "Stack", text: "Next.js · Tailwind · Vercel" },
  { title: "Status", text: "Live demo" },
];

export default function JovanPTPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.08),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 rounded-full text-neutral-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to VALDR Studio
          </Link>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="min-w-0">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm text-white">
                <CheckCircle2 className="h-4 w-4" />
                Live Project
              </div>

              <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Jovan PT
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
                Premium personal trainer website built around authority,
                stronger first impression, online coaching positioning and a
                clearer booking path.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://jovan-pt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  Visit Live Website
                  <ExternalLink className="h-4 w-4" />
                </a>

                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  View More Work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {infoCards.map((card) => (
                  <GlowCard
                    key={card.title}
                    innerClassName="min-h-[140px] p-6"
                  >
                    <p className="text-sm text-white/45">{card.title}</p>
                    <p className="mt-3 text-lg leading-7 text-white">
                      {card.text}
                    </p>
                  </GlowCard>
                ))}
              </div>

              <div className="mt-5">
                <GlowCard innerClassName="p-7">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Clock3 className="h-4 w-4" />
                    <p className="text-sm uppercase tracking-[0.25em]">
                      Case study
                    </p>
                  </div>

                  <p className="mt-4 leading-7 text-neutral-300">
                    Full case study coming after final client content,
                    translations and booking details are locked. The live site
                    is already available for preview.
                  </p>
                </GlowCard>
              </div>
            </div>

            <a
              href="https://jovan-pt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the live Jovan PT website in a new tab"
              className="group relative min-w-0 cursor-pointer overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_0_70px_rgba(255,255,255,0.08)] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_90px_rgba(255,255,255,0.13)] focus:outline-none focus-visible:-translate-y-1 focus-visible:border-white/30 focus-visible:shadow-[0_0_0_3px_rgba(255,255,255,0.16),0_0_90px_rgba(255,255,255,0.13)]"
            >
              <Image
                src="/images/jovan-preview.jpg"
                alt="Jovan PT live website preview"
                width={1400}
                height={900}
                priority
                className="h-[560px] w-full object-cover object-[center_7%] transition duration-700 group-hover:scale-[1.035] lg:h-[720px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                <div>
                  <p className="text-sm text-neutral-400">Live preview</p>
                  <p className="font-semibold text-white">
                    Open Jovan PT website
                  </p>
                </div>

                <ArrowUpRight className="h-5 w-5 text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
