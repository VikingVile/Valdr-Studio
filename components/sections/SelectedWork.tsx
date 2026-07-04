import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import type { CopyShape } from "@/lib/copy";

type SelectedWorkProps = {
  t: CopyShape["work"];
};

type WorkItemId = keyof CopyShape["work"]["items"];

type WorkItemData = {
  id: WorkItemId;
  href: string;
  external?: boolean;
  ariaLabel?: string;
  image: string;
  imageAlt: string;
  imageClassName: string;
  overlayClassName: string;
  extraBottomFade?: boolean;
  badgeClassName: string;
  cardClassName?: string;
};

const workItems: WorkItemData[] = [
  {
    id: "bor",
    href: "https://borskiprevoz.netlify.app/",
    external: true,
    image: "/images/favicon.png.png",
    imageAlt: "Bor Bus App",
    imageClassName: "object-cover transition duration-700 group-hover:scale-[1.07]",
    overlayClassName: "bg-gradient-to-t from-black/60 to-transparent",
    badgeClassName: "border-border bg-black/40 text-text-primary",
    cardClassName: "hover:border-border-hover hover:shadow-card-hover",
  },
  {
    id: "pesmarica",
    href: "https://pesmarica.netlify.app/",
    external: true,
    image: "/images/pesmarica.png.png",
    imageAlt: "Pesmarica App",
    imageClassName: "object-cover transition duration-700 group-hover:scale-[1.07]",
    overlayClassName: "bg-gradient-to-t from-black/60 to-transparent",
    badgeClassName: "border-border bg-black/40 text-text-primary",
    cardClassName: "hover:border-border-hover hover:shadow-card-hover",
  },
  {
    id: "jovan",
    href: "/work/jovan-pt",
    ariaLabel: "Open Jovan PT case study",
    image: "/images/jovan-preview.jpg",
    imageAlt: "Jovan PT preview",
    imageClassName:
      "scale-[1.13] object-cover object-[center_7%] transition duration-700 group-hover:scale-[1.18]",
    overlayClassName: "bg-gradient-to-t from-black/75 via-black/20 to-transparent",
    extraBottomFade: true,
    badgeClassName: "border-accent-jovan/20 bg-accent-jovan/10 text-accent-jovan",
    cardClassName:
      "cursor-pointer hover:border-accent-jovan/25 hover:shadow-[var(--shadow-card-hover),0_0_45px_rgba(250,204,21,0.08)] focus:outline-none focus-visible:-translate-y-2 focus-visible:border-accent-jovan/35 focus-visible:shadow-[0_0_0_3px_rgba(250,204,21,0.18),var(--shadow-card-hover)]",
  },
  {
    id: "vcompany",
    href: "/work/v-company",
    image: "/images/v-company-preview.png",
    imageAlt: "V-COMPANY preview",
    imageClassName: "object-cover object-left transition duration-700 group-hover:scale-[1.07]",
    overlayClassName: "bg-gradient-to-t from-black/80 via-black/25 to-transparent",
    badgeClassName: "border-accent-vcompany/20 bg-accent-vcompany/10 text-accent-vcompany",
    cardClassName: "hover:border-accent-vcompany/20 hover:shadow-card-hover",
  },
];

export default function SelectedWork({ t }: SelectedWorkProps) {
  return (
    <Reveal direction="up">
      <section id="work" className="relative overflow-hidden px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-text-tertiary">
                {t.eyebrow}
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.title}
              </h2>
            </div>

            <p className="max-w-md text-text-tertiary">{t.text}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {workItems.map((item) => (
              <WorkCard
                key={item.id}
                {...item}
                tag={t.items[item.id].tag}
                title={t.items[item.id].title}
                text={t.items[item.id].text}
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
