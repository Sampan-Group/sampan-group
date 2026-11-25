"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  CONSTANTS                                                          */
/* ------------------------------------------------------------------ */

// Updated quote to match your script exactly
const QUOTE_WORDS = [
  "We", "didn't", "start", "as", "a", "real", "estate", "company", "or", "a",
  "hospitality", "brand.", "We", "started", "as", "a", "highway", "stop",
  "and", "grew", "because", "we", "listened", "to", "what", "the", "road",
  "needed", "next.",
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function LeadershipMessage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* Reduced motion - show everything instantly */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".lead-content > *", ".lead-attribution"],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
          }
        );
        gsap.set(".lead-word", { y: "0%" });
      });

      /* Full animation suite */
      mm.add("(prefers-reduced-motion: no-preference)", () => {

        /* ── Content entrance timeline ── */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".lead-grid",
            start: "top 75%",
            once: true,
          },
        });

        tl.fromTo(
            ".lead-content > *",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            }
          )
          .fromTo(
            ".lead-attribution",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            "-=0.3"
          );

        gsap.fromTo(
          ".lead-word",
          { y: "110%" },
          {
            y: "0%",
            duration: 0.5,
            stagger: 0.022,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".lead-quote",
              start: "top 85%",
              once: true,
            },
          }
        );


      });
    },
    { scope: containerRef }
  );

  /* ── Render ─────────────────────────────────────────────────────── */
  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F5F5F2]"
    >
      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== MAIN GRID ====== */}
        <div className="lead-grid grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* ==================== QUOTE ==================== */}
          <div className="lead-content relative lg:col-span-12">
            {/* Oversized decorative quotation mark */}
            <div
              className="pointer-events-none absolute -left-4 -top-20 z-0 select-none font-serif text-[200px] leading-none text-emerald-600/[0.08] md:-left-10 md:text-[260px]"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative z-10">
              {/* Section label / Subtitle */}
              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-5 bg-gradient-to-r from-emerald-600/50 to-emerald-600/0" />
                <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.45em] text-neutral-400">
                  Message from the Managing Director
                </span>
              </div>

              {/* Split-text blockquote */}
              <blockquote className="lead-quote text-[clamp(1.7rem,3vw,2.65rem)] font-semibold leading-[1.22] tracking-[-0.03em] text-neutral-950">
                {QUOTE_WORDS.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden">
                    <span className="lead-word inline-block">
                      {word}&nbsp;
                    </span>
                  </span>
                ))}
              </blockquote>

              {/* Attribution */}
              <div className="lead-attribution mt-8 flex items-center gap-4">
                <span className="h-px w-8 bg-neutral-300" />
                <p className="text-xl font-bold tracking-tight text-neutral-900">
                  Emamul Hasan
                  <span className="ml-2 font-normal text-neutral-500">
                    Managing Director &amp; CEO
                  </span>
                </p>
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
