import {
  ArrowRight,
  Star,
  Clock,
  Sparkles,
} from "lucide-react";
import { images, clinic } from "@/lib/site";

export function Hero() {
  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Modern, relaxing interior of All About Smiles dental clinic"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/92 via-navy-950/75 to-navy-900/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/30 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Decorative floating blobs */}
      <div className="animate-float-slow pointer-events-none absolute right-[8%] top-[22%] hidden h-24 w-24 rounded-full bg-teal-400/20 blur-2xl lg:block" />
      <div className="animate-float pointer-events-none absolute right-[20%] bottom-[18%] hidden h-16 w-16 rounded-full bg-gold-400/20 blur-xl lg:block" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">
          <span className="inline-flex animate-[fade-up_0.7s_ease-out_both] items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200 ring-1 ring-white/20 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Multi-Specialty Dental Clinic · Salt Lake, Kolkata
          </span>

          <h1 className="mt-6 animate-[fade-up_0.7s_ease-out_0.05s_both] font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.9rem]">
            Your Best Smile Awaits at{" "}
            <span className="text-gradient-gold">All About Smiles</span>
          </h1>

          <p className="mt-6 max-w-xl animate-[fade-up_0.7s_ease-out_0.15s_both] text-lg leading-relaxed text-navy-100/85">
            Specialty dental treatments at reasonable rates. From routine
            check-ups to advanced maxillofacial surgery — gentle, modern care
            led by Dr. Budhaditya De, open all 7 days of the week.
          </p>

          <div className="mt-9 flex animate-[fade-up_0.7s_ease-out_0.25s_both] flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 shadow-xl shadow-gold-500/30 transition duration-300 hover:-translate-y-0.5 hover:from-[#22c35e] hover:to-[#1eb354] hover:text-white hover:shadow-2xl hover:shadow-[#22c35e]/35"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.22-.488-.452-.497-.662-.506-.17-.008-.367-.008-.564-.008-.198 0-.52.074-.792.372-.272.298-1.04 1.018-1.04 2.485 0 1.467 1.066 2.88 1.214 3.08.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.298-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.298-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207z" />
              </svg>
              Book via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Trust chips */}
          <div className="mt-10 flex animate-[fade-up_0.7s_ease-out_0.35s_both] flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-100/80">
            <span className="inline-flex items-center gap-2">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </span>
              Loved by patients
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-teal-300" /> Open 7 Days
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold-300" /> 9+ Years Experience
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
