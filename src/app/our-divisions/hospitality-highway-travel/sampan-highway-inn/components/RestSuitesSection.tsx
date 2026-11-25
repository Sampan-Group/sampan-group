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
    desc: "Located along the Dhaka–Khulna Highway.",
  },
  {
    icon: FaBed,
    title: "Comfortable Rest Suites",
    desc: "A welcoming space to relax during your journey.",
  },
];

export default function RestSuitesSection() {
  return (
    <section id="suites" className="bg-[#F8FAFC] text-neutral-900 py-16 sm:py-24 lg:py-28 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
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
          <p className="fade-up max-w-md text-[15px] sm:text-base text-neutral-600 leading-relaxed font-light">
            Comfortable rest suites for travelers looking to relax and recharge before continuing their journey.
          </p>
        </div>

        {/* 2-Column Split: Visual Gallery & Key Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Visual Showcase */}
          <div className="fade-up lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 border border-neutral-300/80 shadow-md group">
              <div className="parallax-img absolute inset-0 w-full h-[126%] -top-[13%]">
                <img
                  src="/images/facilities/highway_inn/warm-modern-bedroom-living-suite.webp"
                  alt="Sampan Highway Inn Rest Suite"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#06466E] border border-neutral-200 z-10">
                VVIP Rest Suite
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3.5 py-1.5 font-mono text-xs z-10">
                24/7 Check-in
              </div>
            </div>

            {/* Secondary Showcase Thumbnails */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 border border-neutral-300/80 group">
                <div className="parallax-img absolute -top-[14%] left-0 w-full h-[128%]">
                  <img
                    src="/images/our-divisions/sampan-highway-inn/vvip-lounge.jpeg"
                    alt="Executive VIP Lounge"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-0.5 text-[10px] font-mono z-10">
                  Executive VIP Lounge
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 border border-neutral-300/80 group">
                <div className="parallax-img absolute -top-[14%] left-0 w-full h-[128%]">
                  <img
                    src="/images/our-divisions/sampan-highway-inn/lounge.jpg"
                    alt="Lounge Seating"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-0.5 text-[10px] font-mono z-10">
                  Quiet Rest &amp; Reading
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Copy */}
          <div className="fade-up lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#005A91] font-bold block">
                YOUR REST STOP ALONG THE HIGHWAY
              </span>
              <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-bold text-neutral-950 tracking-tight leading-snug">
                Your Comfortable Stop Along the Highway.
              </h3>
              <p className="text-[15px] sm:text-base text-neutral-600 leading-relaxed font-light">
                Whether you&apos;re traveling during the day or arriving late at night, Sampan Highway Inn welcomes you with convenient accommodation and 24/7 check-in.
              </p>
            </div>

            {/* 3 Core Points */}
            <div className="space-y-4 pt-2">
              {suiteKeyFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 sm:p-5 bg-white border border-neutral-200/90 shadow-sm">
                    <div className="w-10 h-10 rounded-none bg-[#EFF7FC] border border-[#C6E2F3] text-[#005A91] flex items-center justify-center shrink-0">
                      <Icon className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-base font-bold text-neutral-950">{feat.title}</h4>
                      <p className="text-[15px] text-neutral-600 leading-relaxed mt-0.5">{feat.desc}</p>
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
