import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";
import { cn } from "@/utils/cn";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Patient Stories"
          title={
            <>
              Smiles That Speak{" "}
              <span className="text-gradient-gold">for Themselves</span>
            </>
          }
          subtitle="Real feedback from patients across Salt Lake and greater Kolkata."
        />

        {/* Google rating summary */}
        <Reveal className="mt-7 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-2.5 ring-1 ring-white/15">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </span>
            <span className="text-sm font-semibold text-white">5.0</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-sm text-navy-100/80">Google Reviews</span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-gold-400/30 hover:bg-white/[0.07]">
                <Quote className="h-9 w-9 text-gold-400/40" />
                <div className="mt-3 flex">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy-100/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br font-display text-sm font-bold text-white",
                      t.accent
                    )}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-display text-sm font-bold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-navy-200/70">{t.detail}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
