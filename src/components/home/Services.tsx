import { Check, IndianRupee, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services, clinic } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-gradient-to-b from-white via-navy-50/40 to-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title={
            <>
              Comprehensive Dental Care,{" "}
              <span className="text-gradient-gold">All Under One Roof</span>
            </>
          }
          subtitle="46 specialised treatments grouped into six core departments — each delivered with precision, comfort and transparency."
        />

        {/* Consultation fee highlight */}
        <Reveal className="mt-7 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-50 to-gold-100 px-5 py-2.5 text-sm font-bold text-gold-800 shadow-sm ring-1 ring-gold-200">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-navy-950">
              <IndianRupee className="h-3.5 w-3.5" />
            </span>
            Consultation Fee: {clinic.consultationFee} per visit
          </div>
        </Reveal>

        {/* Service cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-[0_34px_70px_-34px_rgba(12,33,56,0.45)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-teal-400 transition-transform duration-300 group-hover:scale-x-100" />

                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-50 to-teal-50 text-navy-700 ring-1 ring-navy-100 transition duration-300 group-hover:from-navy-800 group-hover:to-teal-700 group-hover:text-white group-hover:ring-transparent">
                  <service.icon className="h-7 w-7" />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-navy-500">{service.blurb}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-navy-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold text-navy-800 transition group-hover:text-teal-600"
                >
                  Book this service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
