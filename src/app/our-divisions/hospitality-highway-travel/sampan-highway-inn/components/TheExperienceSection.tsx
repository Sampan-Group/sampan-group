"use client";

import { FiArrowRight } from "react-icons/fi";

interface ExperiencePillar {
  tag: string;
  title: string;
  body: string;
  image: string;
  actionText: string;
  targetId: string;
}

const pillars: ExperiencePillar[] = [
  {
    tag: "01 / DINE",
    title: "Dining, anytime",
    body: "Pause for a proper meal, a quick bite or a warm conversation in an inviting, air-conditioned setting.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-elegant-teal-dining-hall.webp",
    actionText: "DISCOVER DINING",
    targetId: "dining",
  },
  {
    tag: "02 / REST",
    title: "Rooms to recharge",
    body: "Take a welcome break from the road with the quiet, acoustically insulated comfort of a restful suite.",
    image: "/images/facilities/highway_inn/warm-modern-bedroom-living-suite.webp",
    actionText: "EXPLORE SUITES",
    targetId: "suites",
  },
  {
    tag: "03 / REFRESH",
    title: "Highway convenience",
    body: "A practical, welcoming stop along the Dhaka–Khulna corridor with 24/7 super shop, fuel & pristine washrooms.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-mart-24-7-courtyard.webp",
    actionText: "FIND OUR LOCATION",
    targetId: "convenience",
  },
];

export default function TheExperienceSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="experiences" className="bg-[#FAF9F6] py-24 sm:py-32 border-b border-neutral-200 text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-emerald-700" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-emerald-800">
                The Sampan Experience
              </p>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-neutral-950 leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">Good journeys deserve</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-emerald-900">great pauses.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            From a satisfying meal to a comfortable moment of rest, explore the experiences designed to make your journey better.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <article
              key={index}
              onClick={() => scrollTo(pillar.targetId)}
              className="fade-up group flex flex-col bg-white border border-neutral-200/90 hover:border-emerald-700 transition-all duration-500 shadow-sm hover:shadow-xl cursor-pointer"
            >
              {/* Image Container with Parallax Scrub */}
              <div className="relative aspect-[4/3] md:aspect-[5/6] overflow-hidden bg-neutral-100">
                <div className="parallax-img absolute -top-[14%] left-0 w-full h-[128%]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-900 border border-neutral-200">
                  {pillar.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-emerald-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    {pillar.body}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 group-hover:text-emerald-900 group-hover:gap-3 transition-all">
                  <span>{pillar.actionText}</span>
                  <FiArrowRight className="text-sm" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

