import Image from "next/image";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import TawkChat from "@/components/TawkChat";
import { Sparkles, Globe, MonitorSmartphone, RefreshCcw} from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    text: "High-impact pages built to sell, book or capture leades.",
    icon: Sparkles,
  },
  {
    title: "Business Websites",
    text: "Modern websites for local brands, creators and service businesses.",
    icon: Globe,
  },
  {
    title: "Web Apps",
    text: "Clean digital tolls with real functionality adn sharp UI.",
    icon: MonitorSmartphone,
  },
  {
    title: "Redesigns",
    text: "Turning outdated websites into premium online experiences.",
    icon: RefreshCcw,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We define the goal, audience and direction of the project.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Structure, positioning and premium visual direction.",
  },
  {
    number: "03",
    title: "Build",
    text: "Fast, responsive development focused on quality.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Final polish, optimization and going live.",
  },
];

const testimonials = [
  {
    quote:
      "The app is simple, clean and actually useful. Everything is easy to find and works smoothly.",
    name: "Bor Bus App",
    role: "Public transport project",
  },
  {
    quote:
      "The songbook feels organized and easy to use during performances. It saves time and keeps everything in one place.",
    name: "Pesmarica App",
    role: "Digital songbook project",
  },
  {
    quote:
      "The direction already feels premium and serious. The goal is to build something that looks high-end, not generic.",
    name: "Jovan PT",
    role: "Website in progress",
  },
];

function GlowCard({
  children,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={`group relative rounded-[28px] p-[1px] transition duration-500 hover:-translate-y-2 ${className}`}
    >
      <div className="absolute -inset-[2px] rounded-[36px] bg-white blur-[2px] opacity-55 transition duration-500 group-hover:opacity-70" />

      <div
        className={`relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A] hover:border-white/20 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 md:h-[78px]">
          <a href="#" className="flex items-center">
            <Image
              src="/images/ValdrStudio.png"
              alt="Valdr Studio logo"
              width={220}
              height={90}
              className="w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black sm:inline-flex"
          >
            Start Project
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 md:px-6 md:pt-24">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-72 w-[700px] rotate-[-8deg] rounded-full bg-white/8 blur-[90px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-72 w-[700px] rotate-[8deg] rounded-full bg-white/6 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[length:100%_6px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45vh] opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_top,black,transparent)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-400">
            Valdr Studio
          </p>

          <h1 className="mx-auto max-w-4xl text-[44px] font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-5xl">
            Premium websites built to make brands impossible to ignore.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            We craft modern, premium digital experiences for businesses that
            want to stand out online.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="min-w-[220px] rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
            >
              Start a Project
            </a>

            <a
              href="#work"
              className="min-w-[220px] rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur-sm transition hover:bg-white/10"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <FadeIn>
        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] px-6 py-14 backdrop-blur-sm">
          <div className="absolute left-1/2 top-0 h-52 w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" />

          <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold">Premium</p>
              <p className="mt-2 text-sm text-neutral-500">
                Dark, modern, high-value visual identity.
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">Responsive</p>
              <p className="mt-2 text-sm text-neutral-500">
                Built to look sharp on desktop and mobile.
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">Conversion-focused</p>
              <p className="mt-2 text-sm text-neutral-500">
                Designed to help visitors take action.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* SERVICES */}
      <FadeIn>
        <section id="services" className="relative px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                Services
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Websites that feel premium, fast and intentional.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
  const Icon = service.icon;

  return (
            <GlowCard key={service.title} innerClassName="p-8">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-neutral-300" />
               </div>

                    <h3 className="text-xl font-semibold">
                     {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-neutral-400">
                       {service.text}
                    </p>
                    </GlowCard>
                    );
                  })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* SELECTED WORK */}
      <FadeIn>
        <section id="work" className="relative overflow-hidden px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Selected Work
                </p>

                <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Built with precision. Designed to stand out.
                </h2>
              </div>

              <p className="max-w-md text-neutral-500">
                A selection of projects focused on usability, performance and
                premium visual experience.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* BOR BUS */}
              <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="relative h-[300px] overflow-hidden bg-neutral-950">
                  <Image
                    src="/images/favicon.png.png"
                    alt="Bor Bus App"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-200 backdrop-blur-sm">
                      Web App
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Bor Bus App</h3>
                  <p className="mt-4 text-neutral-400">
                    Public transport application for the city of Bor, focused on
                    usability, routes and timetable access.
                  </p>
                </div>
              </div>

              {/* PESMARICA */}
              <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="relative h-[300px] overflow-hidden bg-neutral-950">
                  <Image
                    src="/images/pesmarica.png.png"
                    alt="Pesmarica App"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-200 backdrop-blur-sm">
                      App
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Pesmarica App</h3>
                  <p className="mt-4 text-neutral-400">
                    Personalized digital songbook for singers across eastern
                    Serbia, designed for simple access and organisation on set.
                  </p>
                </div>
              </div>

              {/* JOVAN PT */}
              <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="relative h-[300px] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

                  <div className="flex h-full items-end p-8">
                    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
                      In Progress
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Jovan PT</h3>
                  <p className="mt-4 text-neutral-400">
                    Premium personal trainer website focused on high-end
                    branding and conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* PROCESS */}
      <FadeIn>
        <section
          id="process"
          className="relative overflow-hidden border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                Process
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                A simple process.
                <br />
                Built for clarity.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {processSteps.map((step) => (
                <GlowCard key={step.number} innerClassName="p-8">
                  <p className="mb-8 text-sm text-neutral-500">
                    {step.number}
                  </p>

                  <h3 className="text-2xl font-semibold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {step.text}
                  </p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ABOUT */}
      <FadeIn>
        <section className="relative border-t border-white/10 py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              {/* Left Side */}
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/40">
                  About Valdr Studio
                </p>

                <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  Premium digital experiences built with purpose.
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
                  Valdr Studio is an independent creative web studio focused on
                  building premium websites for brands that want to stand out,
                  feel elevated and convert better online.
                </p>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                  Founded by <span className="text-white">Davor Radivojevic</span>
                  , we combine modern design, clean development and
                  conversion-focused structure to create websites that feel
                  intentional from the very first scroll.
                </p>
              </div>

              {/* Right Side */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

                <div className="relative space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                      Focus
                    </p>

                    <h3 className="mt-2 text-2xl font-medium text-white">
                      Websites that actually feel premium.
                    </h3>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <GlowCard innerClassName="min-h-[160px] p-6">
                      <p className="text-sm text-white/45">Design</p>
                      <p className="mt-2 text-lg leading-7 text-white">
                        Clean, premium and memorable experiences.
                      </p>
                    </GlowCard>

                    <GlowCard innerClassName="min-h-[160px] p-6">
                      <p className="text-sm text-white/45">Development</p>
                      <p className="mt-2 text-lg leading-7 text-white">
                        Fast, responsive and modern builds.
                      </p>
                    </GlowCard>

                    <GlowCard innerClassName="min-h-[160px] p-6">
                      <p className="text-sm text-white/45">Strategy</p>
                      <p className="mt-2 text-lg leading-7 text-white">
                        Structure designed to convert visitors.
                      </p>
                    </GlowCard>

                    <GlowCard innerClassName="min-h-[160px] p-6">
                      <p className="text-sm text-white/45">Vision</p>
                      <p className="mt-2 text-lg leading-7 text-white">
                        Helping brands become impossible to ignore.
                      </p>
                    </GlowCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* TESTIMONIALS */}
      <FadeIn>
        <section className="relative overflow-hidden border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                Testimonials
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Early feedback from real projects.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((item) => (
                <GlowCard key={item.name} innerClassName="p-8">
                  <p className="text-lg leading-8 text-neutral-300">
                    “{item.quote}”
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {item.role}
                    </p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CONTACT / CTA */}
      <FadeIn>
        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/10 px-6 py-36"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[140px]" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>

            <h2 className="font-semibold tracking-tight">
              {/* TELEFON */}
              <span className="mx-auto block max-w-[320px] text-[38px] leading-[1.02] sm:hidden">
                Let&apos;s build something exceptional.
              </span>

              {/* ZA DESKTOP */}
              <span className="hidden text-4xl leading-[0.98] sm:block sm:text-6xl">
                Let&apos;s build something exceptional.
                <br />
                Built to stand above the noise.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400">
              Whether you need a premium website, redesign or a digital
              experience that actually stands out — let&apos;s talk.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/381611509121"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[220px] rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
              >
                WhatsApp
              </a>

              <a
                href="mailto:valdrstudio@gmail.com"
                className="min-w-[220px] rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur-sm transition hover:bg-white/10"
              >
                Email
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-sm text-neutral-500">
              <a href="#" className="transition hover:text-white">
                Instagram
              </a>

              <span className="text-neutral-700">•</span>

              <a
                href="mailto:valdrstudio@gmail.com"
                className="transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      <TawkChat />
    </main>
  );
}
