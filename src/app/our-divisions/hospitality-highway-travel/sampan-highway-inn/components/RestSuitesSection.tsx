"use client";

import { FaClock, FaMapMarkerAlt, FaBed } from "react-icons/fa";

const suiteKeyFeatures = [
  {
    icon: FaClock,
    title: "24/7 Check-in",
    desc: "Arrive at any hour, day or night.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Convenient Location",
    desc: "Along the Dhaka–Khulna Highway.",
  },
  {
    icon: FaBed,
    title: "Comfortable Rest Suites",
    desc: "A welcoming space to relax and recharge.",
  },
];

export default function RestSuitesSection() {
  return (
    <section id="suites" className="bg-[#F8FAFC] text-neutral-900 py-16 lg:py-24 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#C3161C]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#005A91]">
                02 / REST SUITES
              </p>
            </div>
            <h2 className="text-[clamp(2.25rem,3.8vw,3.5rem)] font-bold tracking-tight text-neutral-950 leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">Rest Well.</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#005A91]">Travel Refreshed.</div>
              </div>
            </h2>
          </div>
          {/* <p className="fade-up max-w-md text-[15px] sm:text-base text-neutral-600 leading-relaxed font-light">
            Comfortable rest suites for travelers looking to relax and recharge before continuing their journey.
          </p> */}
        </div>

        {/* 2-Column Split: Visual Showcase & Key Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Single Large Suite Photograph */}
          <div className="fade-up lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 border border-neutral-300/80 shadow-md group">
              <div className="parallax-img absolute inset-0 w-full h-[126%] -top-[13%]">
                <img
                  src="/images/facilities/highway_inn/warm-modern-bedroom-living-suite.webp"
                  alt="Sampan Highway Inn Rest Suite"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider text-[#06466E] border border-neutral-200 z-10">
                VVIP Rest Suite
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg font-mono text-xs z-10">
                24/7 Check-in
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Copy & Feature List */}
          <div className="fade-up lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#005A91] font-bold block">
                YOUR REST STOP ALONG THE HIGHWAY
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-950 tracking-tight leading-snug">
                Comfort at every stop.
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light">
                Whether arriving during the day or late at night, enjoy a comfortable place to unwind before continuing your journey.
              </p>
            </div>

            {/* Minimalist Feature List with Blue Icons & Subtle Dividers */}
            <div className="border-t border-neutral-200/80">
              {suiteKeyFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div key={index} className="flex items-start gap-4 py-4 border-b border-neutral-200/80">
                    <div className="w-9 h-9 rounded-full bg-[#EFF7FC] text-[#005A91] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="text-sm" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-950">{feat.title}</h4>
                      <p className="text-base text-neutral-600 leading-relaxed mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
