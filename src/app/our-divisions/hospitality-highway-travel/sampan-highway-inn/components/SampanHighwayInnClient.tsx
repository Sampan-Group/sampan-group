"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroOverview from "./HeroOverview";
import MilestoneCounter from "./MilestoneCounter";
import FacilitiesList from "./FacilitiesList";
import LocationAndMap from "./LocationAndMap";
import PhotoVideoGallery from "./PhotoVideoGallery";
import NearbyLocationModule from "./NearbyLocationModule";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function SampanHighwayInnClient() {
  const containerRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero entrance timeline
        const heroTl = gsap.timeline({ delay: 0.2 });
        heroTl
          .fromTo(
            ".hero-line-mask",
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1.3,
              ease: "power4.out",
              stagger: 0.15,
            }
          )
          .fromTo(
            ".hero-fade-up",
            { y: 28, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.1,
            },
            "-=0.8"
          );

        // Section headings line-mask reveal on scroll
        gsap.utils.toArray<HTMLElement>(".line-mask:not(.hero-line-mask)").forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.4,
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
            { y: 28, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Parallax image scrub animation
        gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
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
        gsap.set(".parallax-img", {
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
      className="bg-[#F5F5F2] text-neutral-900 antialiased selection:bg-emerald-600 selection:text-white"
    >
      {/* OVERVIEW (Hero & Brand Introduction) */}
      <HeroOverview onOpenBooking={() => scrollToSection("booking-widget")} />

      {/* MILESTONE COUNTER (Track Record & Scale) */}
      <MilestoneCounter />

      {/* FACILITIES / OFFERINGS LIST (Category Filtered Cards) */}
      <FacilitiesList />

      {/* LOCATION + LIVE MAP (GPS Coordinates, Hub Distances & Embedded Map) */}
      <LocationAndMap />

      {/* PHOTO / VIDEO GALLERY (Masonry Showcase & Drone Video) */}
      <PhotoVideoGallery />

      {/* "NEARBY AT THIS LOCATION" MODULE (Adjacent Assets & Attractions) */}
      <NearbyLocationModule />
    </main>
  );
}
