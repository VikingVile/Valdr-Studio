import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type WorkCardProps = {
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
  tag: string;
  title: string;
  text: string;
};

export default function WorkCard({
  href,
  external = false,
  ariaLabel,
  image,
  imageAlt,
  imageClassName,
  overlayClassName,
  extraBottomFade = false,
  badgeClassName,
  cardClassName = "",
  tag,
  title,
  text,
}: WorkCardProps) {
  const className = `group block overflow-hidden rounded-card border border-border bg-surface transition duration-500 hover:-translate-y-2 ${cardClassName}`;

  const content = (
    <>
      <div className="relative h-[240px] overflow-hidden bg-bg md:h-[300px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className={imageClassName}
        />

        <div className={`absolute inset-0 ${overlayClassName}`} />

        {extraBottomFade && (
          <div className="absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-transparent" />
        )}

        <div className="absolute bottom-8 left-8 z-20">
          <span
            className={`rounded-full border px-4 py-2 text-sm backdrop-blur-sm ${badgeClassName}`}
          >
            {tag}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <ArrowUpRight className="h-5 w-5 shrink-0 text-text-secondary transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-text-primary" />
        </div>

        <p className="mt-4 text-text-secondary">{text}</p>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {content}
    </Link>
  );
}
