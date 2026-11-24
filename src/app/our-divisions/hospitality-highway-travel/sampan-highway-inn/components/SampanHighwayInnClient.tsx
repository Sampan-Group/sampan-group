"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroOverview from "./HeroOverview";
import TheExperienceSection from "./TheExperienceSection";
import DiningSection from "./DiningSection";
import RestSuitesSection from "./RestSuitesSection";
import ConvenienceSection from "./ConvenienceSection";
import GreenRibbonCTA from "./GreenRibbonCTA";
import MomentsGallery from "./MomentsGallery";
import NearbyLocationModule from "./NearbyLocationModule";
import LocationAndWaypoint from "./LocationAndWaypoint";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function SampanHighwayInnClient() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Keep content opaque; only heading lines use the masked text reveal.
        gsap.set([".line-mask", ".fade-up", ".hero-fade-up"], {
          y: 0,
          yPercent: 0,
          autoAlpha: 1,
        });

        const heroTl = gsap.timeline();
        heroTl
          .fromTo(
            ".hero-line-mask",
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 0.95,
              ease: "power4.out",
              stagger: 0.08,
            }
          )
          .from(
            ".hero-fade-up",
            {
              y: 10,
              duration: 0.35,
              ease: "power2.out",
              stagger: 0.04,
            },
            0
          );

        // Preserve the original line reveal, with a shorter duration and earlier start.
        gsap.utils.toArray<HTMLElement>("h2").forEach((heading) => {
          const lines = heading.querySelectorAll<HTMLElement>(".line-mask");
          if (!lines.length) return;
          gsap.fromTo(
            lines,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.06,
              scrollTrigger: {
                trigger: heading,
                start: "top 98%",
                once: true,
              },
            }
          );
        });

        // Start just below the viewport; movement never reduces opacity.
        gsap.utils.toArray<HTMLElement>(".fade-up:not(.hero-fade-up)").forEach((el) => {
          gsap.from(
            el,
            {
              y: 10,
              duration: 0.35,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top bottom+=120",
                once: true,
              },
            }
          );
        });

        // 1. Dedicated Hero Background Parallax: translates with scroll depth
        const heroEl = document.getElementById("hero");
        if (heroEl) {
          gsap.fromTo(
            ".parallax-hero",
            { yPercent: 0 },
            {
              yPercent: 22,
              ease: "none",
              scrollTrigger: {
                trigger: heroEl,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        // 2. Parallax image scrub animation for all content cards
        gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
          const triggerEl = el.closest("article, .group, section") || el.parentElement || el;
          gsap.fromTo(
            el,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: triggerEl,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".line-mask", ".fade-up", ".hero-line-mask", ".hero-fade-up"], {
          y: 0,
          yPercent: 0,
          autoAlpha: 1,
        });
        gsap.set([".parallax-img", ".parallax-hero"], {
          y: 0,
          yPercent: 0,
          x: 0,
        });
      });

      // Refresh against actual asset layout rather than a fixed loading delay.
      let disposed = false;
      let refreshFrame = 0;
      const refreshLayout = () => {
        if (disposed) return;
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      };
      const container = containerRef.current;
      container?.addEventListener("load", refreshLayout, true);
      void document.fonts.ready.then(refreshLayout);
      refreshLayout();

      return () => {
        disposed = true;
        cancelAnimationFrame(refreshFrame);
        container?.removeEventListener("load", refreshLayout, true);
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      data-no-reveal
      className="bg-[#F8FAFC] text-neutral-900 antialiased selection:bg-[#FCB813] selection:text-neutral-950 font-sans"
    >
      {/* 1. HERO OVERVIEW (Properly exposed night photograph, crisp typography & metrics) */}
      <HeroOverview />

      {/* 2. THE SAMPAN EXPERIENCE (3-Pillar entry: Dining, Rest, Convenience) */}
      <TheExperienceSection />

      {/* 3. 01 / DINING (Logo-inspired navy and gold, 24/7 hospitality, real restaurant photography & actions) */}
      <DiningSection />

      {/* 4. 02 / REST SUITES (Light luxury aesthetic, acoustic quiet, suites showcase & booking action) */}
      <RestSuitesSection />

      {/* 5. 03 / HIGHWAY CONVENIENCE (Modern washrooms, 24/7 Mart, Fuel bay, Mosque & Parking) */}
      <ConvenienceSection />

      {/* 6. BRAND GOLD RIBBON CTA (Clear directional drive action) */}
      <GreenRibbonCTA />

      {/* 7. MOMENTS AT SAMPAN (Curated authentic photograph gallery with interactive lightbox) */}
      <MomentsGallery />

      {/* 8. NEARBY ATTRACTIONS & SAMPAN DESTINATIONS */}
      <NearbyLocationModule />

      {/* 9. FIND US & WAYPOINT (Corridor times, waypoint KM 103 card, and embedded interactive map) */}
      <LocationAndWaypoint />
    </main>
  );
}
