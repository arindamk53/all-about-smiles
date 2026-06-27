import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/utils/cn";
import { useSectionNav } from "@/lib/useNav";
import { clinic } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Home", kind: "home" as const },
  { label: "About", kind: "section" as const, section: "about" },
  { label: "Services", kind: "section" as const, section: "services" },
  { label: "Gallery", kind: "section" as const, section: "gallery" },
  { label: "Contact", kind: "section" as const, section: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const goSection = useSectionNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = location.pathname === "/" && !scrolled;

  const handleItem = (item: (typeof NAV_ITEMS)[number]) => {
    setOpen(false);
    if (item.kind === "home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }
    goSection(item.section);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-navy-100/70 bg-white/85 backdrop-blur-md shadow-[0_10px_40px_-18px_rgba(12,33,56,0.35)]"
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleItem(NAV_ITEMS[0])}
          aria-label="All About Smiles — home"
          className="shrink-0 transition-transform hover:scale-[1.02]"
        >
          <Logo tone={transparent ? "light" : "dark"} />
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleItem(item)}
                className={cn(
                  "group relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-navy-600 hover:text-navy-900"
                )}
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={clinic.phoneHref}
            className={cn(
              "hidden items-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-semibold transition xl:inline-flex",
              transparent
                ? "text-white/90 ring-1 ring-white/30 hover:bg-white/10"
                : "text-navy-700 ring-1 ring-navy-200 hover:bg-navy-50"
            )}
          >
            <Phone className="h-4 w-4" />
            {clinic.phoneDisplay}
          </a>
          <a
            href={clinic.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/25 transition duration-300 hover:-translate-y-0.5 hover:from-[#22c35e] hover:to-[#1eb354] hover:text-white hover:shadow-xl hover:shadow-[#22c35e]/35 sm:inline-flex"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.22-.488-.452-.497-.662-.506-.17-.008-.367-.008-.564-.008-.198 0-.52.074-.792.372-.272.298-1.04 1.018-1.04 2.485 0 1.467 1.066 2.88 1.214 3.08.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.298-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.298-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207z" />
            </svg>
            Book via WhatsApp
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl transition lg:hidden",
              transparent
                ? "text-white ring-1 ring-white/30 hover:bg-white/10"
                : "text-navy-800 ring-1 ring-navy-200 hover:bg-navy-50"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 top-[4.5rem] bg-navy-950/50 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 origin-top border-b border-navy-100 bg-white px-4 pb-6 pt-2 shadow-2xl transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleItem(item)}
                  className="group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-semibold text-navy-800 transition hover:bg-navy-50"
                >
                  {item.label}
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400 opacity-0 transition group-hover:opacity-100" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2.5">
            <a
              href={clinic.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl bg-navy-50 px-4 py-3 text-sm font-semibold text-navy-800 ring-1 ring-navy-100"
            >
              <Phone className="h-4 w-4" /> {clinic.phoneDisplay}
            </a>
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-4 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/25 transition duration-300 hover:from-[#22c35e] hover:to-[#1eb354] hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-13.882c-.22-.488-.452-.497-.662-.506-.17-.008-.367-.008-.564-.008-.198 0-.52.074-.792.372-.272.298-1.04 1.018-1.04 2.485 0 1.467 1.066 2.88 1.214 3.08.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.298-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.298-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207z" />
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
