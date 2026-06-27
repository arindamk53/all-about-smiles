import { Award, Stethoscope, CalendarDays, IndianRupee } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const stats = [
  { icon: Award, value: "9+", label: "Years of Experience" },
  { icon: Stethoscope, value: "46+", label: "Treatments Offered" },
  { icon: CalendarDays, value: "7", label: "Days Open Weekly" },
  { icon: IndianRupee, value: "200", label: "Consultation Fee" },
];

export function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_30px_60px_-30px_rgba(12,33,56,0.35)] lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 p-6 lg:justify-center lg:p-8 ${
                i % 2 === 1 ? "bg-navy-50/60" : ""
              } ${i >= 2 ? "border-t border-navy-100 lg:border-t-0" : ""} ${
                i % 2 === 1 ? "border-l border-navy-100 lg:border-l-0" : ""
              }`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-teal-700 text-white shadow-md">
                <stat.icon className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-2xl font-extrabold text-navy-900 lg:text-3xl">
                  {stat.value.startsWith("200") ? "₹200" : stat.value}
                </div>
                <div className="text-xs font-medium text-navy-500 lg:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
