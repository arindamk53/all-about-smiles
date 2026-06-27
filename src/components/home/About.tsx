import { Link } from "react-router-dom";
import {
  GraduationCap,
  Microscope,
  BadgeCheck,
  Stethoscope,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { doctor, clinic } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image column */}
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-gold-400" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-2 border-r-2 border-teal-400" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(12,33,56,0.5)] ring-1 ring-navy-100">
            <img
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.designation}`}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
          </div>

          {/* Floating experience badge */}
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-100 lg:left-auto lg:right-8 lg:translate-x-0">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 text-navy-950">
              <Stethoscope className="h-6 w-6" />
            </span>
            <div>
              <div className="font-display text-xl font-extrabold leading-none text-navy-900">
                9 Years
              </div>
              <div className="text-xs font-medium text-navy-500">
                Clinical Experience
              </div>
            </div>
          </div>
        </Reveal>

        {/* Text column */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Meet Your Dentist"
            title={
              <>
                {doctor.name.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="text-gradient-gold">De</span>
              </>
            }
          />

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3.5 py-1.5 text-sm font-semibold text-navy-800 ring-1 ring-navy-100">
              <BadgeCheck className="h-4 w-4 text-teal-600" />
              {doctor.designation}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3.5 py-1.5 text-sm font-semibold text-gold-800 ring-1 ring-gold-200">
              <Stethoscope className="h-4 w-4 text-gold-600" />
              {doctor.experience}
            </span>
          </div>

          <p className="mt-5 flex items-start gap-2.5 text-navy-600">
            <Microscope className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
            <span className="font-medium text-navy-800">Specialization:</span>
            <span>{doctor.specialization}</span>
          </p>

          {/* Qualifications */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {doctor.qualifications.map((q) => (
              <div
                key={q.degree}
                className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-navy-900">
                    {q.degree}
                  </div>
                  <div className="text-xs leading-snug text-navy-500">
                    {q.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-navy-500">
            <span className="font-semibold text-navy-700">Reg. No:</span>{" "}
            {clinic.regNo}
          </p>

          <p className="mt-5 text-[0.975rem] leading-relaxed text-navy-600">
            {doctor.story}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-navy-800 to-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy-900/25 transition hover:-translate-y-0.5 hover:from-[#22c35e] hover:to-[#1eb354] hover:shadow-[#22c35e]/25 hover:shadow-xl"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.22-.488-.452-.497-.662-.506-.17-.008-.367-.008-.564-.008-.198 0-.52.074-.792.372-.272.298-1.04 1.018-1.04 2.485 0 1.467 1.066 2.88 1.214 3.08.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.298-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.298-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207z" />
              </svg>
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-navy-800 ring-1 ring-navy-200 transition hover:bg-navy-50"
            >
              Explore Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
