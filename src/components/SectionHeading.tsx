import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
            light
              ? "bg-white/10 text-gold-200 ring-1 ring-white/15"
              : "bg-navy-50 text-teal-700 ring-1 ring-navy-100"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem]",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-navy-100/80" : "text-navy-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
