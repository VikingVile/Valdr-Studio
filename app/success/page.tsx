export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Payment Successful
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Your project deposit is confirmed.
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Thank you. I will review the payment and contact you with the next
          steps for your VALDR STUDIO project.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}