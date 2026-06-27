import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "./Logo";
import { useSectionNav } from "@/lib/useNav";
import { clinic } from "@/lib/site";

const socials = [
  {
    label: "Facebook",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const quickLinks: { label: string; to?: string; href?: string; section?: string }[] = [
  { label: "Home", to: "/" },
  { label: "Book via WhatsApp", href: clinic.whatsappHref },
  { label: "Our Services", section: "services" },
  { label: "Gallery", section: "gallery" },
];

export function Footer() {
  const goSection = useSectionNav();
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy-950 text-navy-100"
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200/80">
              {clinic.tagline}. A multi-specialty dental clinic in Salt Lake,
              Kolkata — combining advanced technology with genuinely caring,
              patient-first treatment.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-gold-400 hover:text-navy-950"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-navy-200/80 transition hover:text-gold-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold-400/70 transition-all group-hover:w-3" />
                      {link.label}
                    </a>
                  ) : link.to ? (
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-1.5 text-navy-200/80 transition hover:text-gold-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold-400/70 transition-all group-hover:w-3" />
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => goSection(link.section!)}
                      className="group inline-flex items-center gap-1.5 text-navy-200/80 transition hover:text-gold-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold-400/70 transition-all group-hover:w-3" />
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Operating Hours
            </h4>
            <div className="mt-5 space-y-3 text-sm">
              <p className="inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-200 ring-1 ring-teal-400/20">
                <Clock className="h-3.5 w-3.5" /> Open 7 Days
              </p>
              <div className="space-y-1 text-navy-200/80">
                <p>Morning: {clinic.hours.morning}</p>
                <p>Evening: {clinic.hours.evening}</p>
                <p className="text-xs text-navy-300/70">No weekly off</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-navy-200/80">{clinic.address}</span>
              </li>
              <li>
                <a
                  href={clinic.phoneHref}
                  className="flex items-center gap-3 text-navy-200/80 transition hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={clinic.emailHref}
                  className="flex items-center gap-3 text-navy-200/80 transition hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                  {clinic.email}
                </a>
              </li>
              <li>
                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 transition hover:text-teal-200"
                >
                  View on Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          <p className="flex items-center gap-2 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-gold-300">
            <MapPin className="h-4 w-4" /> Find Us on Google Maps
          </p>
          <iframe
            title="All About Smiles — Google Maps location"
            src={clinic.mapEmbed}
            className="h-64 w-full sm:h-80"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-navy-300/70 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>
            Reg. No: {clinic.regNo} · Also listed on{" "}
            {clinic.listings.join(" & ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
