import { Phone } from "lucide-react";
import { clinic } from "@/lib/site";

/**
 * Persistent, easily-reachable action bar for small screens. Hidden on large
 * screens where the navbar CTA is always visible.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-navy-100 bg-white/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-10px_40px_-18px_rgba(12,33,56,0.4)] backdrop-blur-md lg:hidden">
      <a
        href={clinic.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-50 px-4 py-3 text-sm font-bold text-navy-800 ring-1 ring-navy-100 transition active:scale-95"
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        href={clinic.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-4 py-3 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/25 transition active:scale-95 hover:from-[#22c35e] hover:to-[#1eb354] hover:text-white"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.22-.488-.452-.497-.662-.506-.17-.008-.367-.008-.564-.008-.198 0-.52.074-.792.372-.272.298-1.04 1.018-1.04 2.485 0 1.467 1.066 2.88 1.214 3.08.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.298-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.298-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207z" />
        </svg>
        WhatsApp Us
      </a>
    </div>
  );
}
