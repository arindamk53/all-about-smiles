import { Camera } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/site";

/**
 * NOTE FOR SITE OWNERS / BACKEND:
 * The images below are high-quality stock placeholders standing in for
 * "Clinic Interior", "Consultation Room" and "Advanced Dental Equipment".
 * Replace the `src` values in `images.gallery` (src/lib/site.ts) with real
 * clinic photographs when available — no markup changes required.
 */
export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A Glimpse Inside"
          title={
            <>
              A Modern Clinic Built for{" "}
              <span className="text-gradient-gold">Your Comfort</span>
            </>
          }
          subtitle="Spotless, contemporary interiors paired with advanced dental equipment — designed to put every patient at ease."
        />

        <Reveal className="mt-14">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {images.gallery.map((item) => (
              <figure
                key={item.caption}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-sm ring-1 ring-navy-100"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent opacity-70 transition duration-300 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold-300">
                    <Camera className="h-3.5 w-3.5" />
                    {item.tag}
                  </span>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
