import { Phone, Clock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { clinic } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-teal-800 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="animate-float pointer-events-none absolute left-[6%] top-10 hidden h-20 w-20 rounded-full bg-gold-400/20 blur-2xl lg:block" />
      <div className="animate-float-slow pointer-events-none absolute right-[8%] bottom-8 hidden h-28 w-28 rounded-full bg-teal-300/20 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200 ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5" /> Let's Get Started
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[2.9rem]">
            Ready to take care of{" "}
            <span className="text-gradient-gold">your teeth?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg">
            Book your visit with Dr. Budhaditya De today. Open 7 days a week with
            reasonable rates and gentle, patient-first care.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-base font-bold text-navy-950 shadow-xl shadow-gold-500/30 transition duration-300 hover:-translate-y-0.5 hover:from-[#22c35e] hover:to-[#1eb354] hover:text-white hover:shadow-2xl hover:shadow-[#22c35e]/35"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.22-.488-.452-.497-.662-.506-.17-.008-.367-.008-.564-.008-.198 0-.52.074-.792.372-.272.298-1.04 1.018-1.04 2.485 0 1.467 1.066 2.88 1.214 3.08.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.298-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.298-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207z" />
              </svg>
              Book an Appointment Today
            </a>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-4 text-base font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              {clinic.phoneDisplay}
            </a>
          </div>

          <p className="mt-7 inline-flex items-center gap-2 text-sm text-navy-100/75">
            <Clock className="h-4 w-4 text-teal-300" />
            Open 7 Days · {clinic.hours.short}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
