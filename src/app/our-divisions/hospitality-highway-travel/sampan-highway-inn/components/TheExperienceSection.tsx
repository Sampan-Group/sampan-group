"use client";

import { FiArrowUpRight } from "react-icons/fi";

interface ExperiencePillar {
  topPill: string;
  tag: string;
  title: string;
  image: string;
  targetId: string;
}

const pillars: ExperiencePillar[] = [
  {
    topPill: "DINE",
    tag: "01 / EXPERIENCE",
    title: "Dining, Anytime",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-elegant-teal-dining-hall.webp",
    targetId: "dining",
  },
  {
    topPill: "REST",
    tag: "02 / EXPERIENCE",
    title: "Rest & Recharge",
    image: "/images/facilities/highway_inn/warm-modern-bedroom-living-suite.webp",
    targetId: "suites",
  },
  {
    topPill: "REFRESH",
    tag: "03 / EXPERIENCE",
    title: "Highway Convenience",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-mart-24-7-courtyard.webp",
    targetId: "convenience",
  },
];

export default function TheExperienceSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="experiences" className="bg-[#F8FAFC] py-14 sm:py-20 border-b border-neutral-200 text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header (Light Theme) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#C3161C]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#005A91]">
                The Sampan Experience
              </p>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-neutral-950 leading-[1.05]">
              <div className="overflow-hidden pb-1 -mb-1">
                <div className="line-mask">Good journeys deserve</div>
              </div>
              <div className="overflow-hidden mt-1 pb-1 -mb-1">
                <div className="line-mask text-[#06466E]">great pauses.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            Discover dining, comfortable rest suites, and convenient services for your journey.
          </p>
        </div>

        {/* 3 Pillars Grid (Mockup Dark Image Cards on Light Section Canvas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <article
              key={index}
              onClick={() => scrollTo(pillar.targetId)}
              className="fade-up group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] border border-neutral-200/80 hover:border-neutral-900/40 transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between p-3.5 sm:p-4.5 bg-neutral-900"
            >
              {/* Full Bleed Image with Zoom */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover brightness-[1.08] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Brighter Gradient: subtle protective shadow for text, transparent and vivid everywhere else */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 via-35% to-transparent group-hover:from-black/75 transition-all duration-500" />
              </div>

              {/* Top Banner / Pill */}
              <div className="relative z-10 w-full py-2 px-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 text-center font-mono text-xs font-bold tracking-[0.2em] text-white uppercase shadow-sm">
                {pillar.topPill}
              </div>

              {/* Bottom Content Cluster with Arrow to the Right */}
              <div className="relative z-10 p-3.5 sm:p-4.5 flex items-end justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {pillar.title}
                </h3>
                <div className="flex-shrink-0 text-white pb-0.5">
                  <FiArrowUpRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FCB813]" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
