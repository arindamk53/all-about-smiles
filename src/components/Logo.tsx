import { cn } from "@/utils/cn";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
};

/** Text-based logo with a tooth mark inside a brand gradient tile. */
export function Logo({ tone = "dark", className, showTagline = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-700 via-navy-800 to-teal-700 shadow-lg shadow-navy-900/20 ring-1 ring-white/15">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C9.79 2 8 3.79 8 6c0 .5.09.97.25 1.41C7.42 7.71 6.5 8 5.5 8 3.57 8 2 9.57 2 11.5c0 1.5.93 2.79 2.25 3.27.16 1.3.62 3.21 1.5 5.04C6.78 21.5 7.6 23 9 23c1.31 0 1.69-1.5 2.16-3.36C11.5 18.2 11.74 17 12 17s.5 1.2.84 2.64C13.31 21.5 13.69 23 15 23c1.4 0 2.22-1.5 3.25-3.19.88-1.83 1.34-3.74 1.5-5.04C21.07 14.29 22 13 22 11.5 22 9.57 20.43 8 18.5 8c-1 0-1.92-.29-2.75-.59C15.91 6.97 16 6.5 16 6c0-2.21-1.79-4-4-4z" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold-400 ring-2 ring-white/70" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold tracking-tight",
            tone === "light" ? "text-white" : "text-navy-900"
          )}
        >
          All About{" "}
          <span className="text-gradient-gold">Smiles</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em]",
              tone === "light" ? "text-navy-100/70" : "text-navy-400"
            )}
          >
            Dental Clinic
          </span>
        )}
      </span>
    </span>
  );
}
