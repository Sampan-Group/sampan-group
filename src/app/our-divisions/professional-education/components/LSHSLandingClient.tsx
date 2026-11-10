"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import LSHSHero from "./LSHSHero";
import LSHSRoadmap from "./LSHSRoadmap";
import LSHSWhyCIPS from "./LSHSWhyCIPS";
import LSHSAccreditationProof from "./LSHSAccreditationProof";
import LSHSGlobalReach from "./LSHSGlobalReach";
import LSHSFAQ from "./LSHSFAQ";
import LSHSEnquiryForm from "./LSHSEnquiryForm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function LSHSLandingClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Entrance Timeline (Reveals on page load with delay and stagger)
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

        // 2. Line mask reveal for subsequent section headings on scroll
        gsap.utils
          .toArray<HTMLElement>(".line-mask:not(.hero-line-mask)")
          .forEach((line) => {
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

        // 3. Fade-up reveal for cards, badges, descriptions on scroll
        gsap.utils
          .toArray<HTMLElement>(".fade-up:not(.hero-fade-up)")
          .forEach((el) => {
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

        // 4. Parallax image scrub on scroll
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
        gsap.set(
          [".line-mask", ".fade-up", ".hero-line-mask", ".hero-fade-up"],
          {
            y: 0,
            yPercent: 0,
            autoAlpha: 1,
          }
        );
        gsap.set(".parallax-img", {
          y: 0,
          yPercent: 0,
          x: 0,
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      {/* 1. Hero Section with Headline, CIPS credentials, and Video teaser */}
      <LSHSHero />

      {/* 2. Course Roadmap (Level 2 to Level 6 MCIPS, Credits & Modules) */}
      <LSHSRoadmap />

      {/* 3. Why CIPS Section (5 Key Pillars / Carousel) */}
      <LSHSWhyCIPS />

      {/* 4. CIPS Official UK Accreditation & Recognition Proof */}
      <LSHSAccreditationProof />

      {/* Dedicated Executive Campus & Digital Learning Parallax Banner */}
      <section className="relative h-[340px] sm:h-[400px] overflow-hidden flex items-center justify-center text-white border-y border-slate-200">
        <div className="parallax-img absolute inset-0 w-full h-[126%] -top-[13%]">
          <img
            src="/images/projects/lshs.jpg"
            alt="London School of Higher Studies Campus Studio"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#062438]/95 via-[#0c4a6e]/85 to-[#072d42]/95 z-10" />
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="fade-up inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#f4d210]/20 text-[#f4d210] border border-[#f4d210]/40 backdrop-blur-sm">
            Executive Campus &amp; Digital Learning
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold font-serif text-white leading-tight">
            <div className="overflow-hidden">
              <div className="line-mask">British Standard Procurement Tuition</div>
            </div>
            <div className="overflow-hidden">
              <div className="line-mask text-[#f4d210]">Delivered Locally &amp; Globally</div>
            </div>
          </h3>
          <p className="fade-up text-sm sm:text-base text-sky-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Collaborative seminar halls, executive computer-based exam workstations, and 24/7 cloud LMS access connecting ambitious procurement practitioners worldwide.
          </p>
        </div>
      </section>

      {/* 5. Global Reach & Country Ambassadors */}
      <LSHSGlobalReach />

      {/* 6. Frequently Asked Questions */}
      <LSHSFAQ />

      {/* 7. Executive Consultation & Quick Enquiry */}
      <LSHSEnquiryForm />
    </div>
  );
}
