import type { ReactNode } from "react";

export default function GlowCard({
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
      className={`group relative rounded-card p-[1px] transition duration-500 hover:-translate-y-2 ${className}`}
    >
      <div className="absolute -inset-[2px] rounded-[calc(var(--radius-card)+8px)] bg-white opacity-55 blur-[2px] transition duration-500 group-hover:opacity-70" />

      <div
        className={`relative h-full overflow-hidden rounded-card border border-border bg-bg hover:border-border-hover ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
