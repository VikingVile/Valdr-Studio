//OVDE JE DODANO//

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";

export default function JovanPTPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_50%)]" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-neutral-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to VALDR Studio
          </Link>

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
                <Clock3 className="h-4 w-4" />
                In Progress
              </div>

              <h1 className="text-5xl font-bold leading-[0.95] md:text-7xl">
                Jovan PT
              </h1>

              <p className="mt-6 max-w-xl text-lg text-neutral-400">
                Premium personal trainer website focused on authority,
                premium positioning, booking flow and stronger trust.
              </p>

              <div className="mt-10 space-y-4 text-neutral-300">
                <p>• Premium dark UI direction</p>
                <p>• Mobile-first booking experience</p>
                <p>• Stronger trainer authority positioning</p>
                <p>• Premium conversion-focused structure</p>
              </div>

              <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Full case study
                </p>

                <p className="mt-3 text-neutral-300">
                  Coming soon after project completion.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[36px] border border-white/10">
              <Image
                src="/images/jovan-preview.jpg"
                alt="Jovan PT"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}