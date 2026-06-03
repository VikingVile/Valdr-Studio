import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Payment Cancelled
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          No payment was completed.
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          You can return to the website and try again whenever you are ready.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
