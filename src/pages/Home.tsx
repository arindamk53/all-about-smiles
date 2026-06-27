import { useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Gallery } from "@/components/home/Gallery";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SCROLL_TARGET_KEY } from "@/lib/useNav";

export default function Home() {
  // If we arrived here from another route with a section to scroll to, do it.
  useEffect(() => {
    const target = sessionStorage.getItem(SCROLL_TARGET_KEY);
    if (!target) return;
    sessionStorage.removeItem(SCROLL_TARGET_KEY);
    const timer = setTimeout(() => {
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
