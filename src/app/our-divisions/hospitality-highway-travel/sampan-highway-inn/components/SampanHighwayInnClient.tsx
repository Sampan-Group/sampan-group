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
        // Hero entrance timeline
        const heroTl = gsap.timeline({ delay: 0.15 });
        heroTl
          .fromTo(
            ".hero-line-mask",
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1.25,
              ease: "power4.out",
              stagger: 0.12,
            }
          )
          .fromTo(
            ".hero-fade-up",
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
            },
            "-=0.75"
          );

        // Section headings line-mask slow reveal on scroll
        gsap.utils.toArray<HTMLElement>(".line-mask:not(.hero-line-mask)").forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.3,
              ease: "power4.out",
              scrollTrigger: {
                trigger: line.parentElement!,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Content cards, badges, descriptions fade-up on scroll
        gsap.utils.toArray<HTMLElement>(".fade-up:not(.hero-fade-up)").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none none",
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

        // Refresh triggers once images and fonts are positioned
        const refreshTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 300);

        return () => clearTimeout(refreshTimer);
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
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="bg-[#FAF9F6] text-neutral-900 antialiased selection:bg-[#B8F230] selection:text-neutral-950 font-sans"
    >
      {/* 1. HERO OVERVIEW (Properly exposed night photograph, crisp typography & metrics) */}
      <HeroOverview />

      {/* 2. THE SAMPAN EXPERIENCE (3-Pillar entry: Dining, Rest, Convenience) */}
      <TheExperienceSection />

      {/* 3. 01 / DINING (Dark forest green, 24/7 hospitality, real restaurant photography & actions) */}
      <DiningSection />

      {/* 4. 02 / REST SUITES (Light luxury aesthetic, acoustic quiet, suites showcase & booking action) */}
      <RestSuitesSection />

      {/* 5. 03 / HIGHWAY CONVENIENCE (Modern washrooms, 24/7 Mart, Fuel bay, Mosque & Parking) */}
      <ConvenienceSection />

      {/* 6. VIBRANT LIME RIBBON CTA (Clear directional drive action) */}
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
