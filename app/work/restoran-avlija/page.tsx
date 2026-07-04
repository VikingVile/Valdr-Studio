import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";

export default function RestoranAvlijaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
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
              Restoran Avlija
            </h1>

            <p className="mt-6 max-w-xl text-lg text-neutral-400">
              Premium restaurant website focused on atmosphere,
              reservations, local identity and stronger digital presence.
            </p>

            <div className="mt-10 space-y-4 text-neutral-300">
              <p>• Warm premium visual identity</p>
              <p>• Reservation-focused experience</p>
              <p>• Better menu presentation</p>
              <p>• Stronger first impression for visitors</p>
            </div>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Current status
              </p>

              <p className="mt-3 text-neutral-300">
                Newly signed project currently in active development.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10">
            <Image
              src="/images/avlije-preview.png"
              alt="Restoran Avlija"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}