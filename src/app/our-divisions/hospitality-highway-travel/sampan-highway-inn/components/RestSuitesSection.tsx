"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaClock, FaMapMarkerAlt, FaBed, FaPhoneAlt, FaTimes } from "react-icons/fa";

const suiteKeyFeatures = [
  {
    icon: FaClock,
    title: "24/7 Check-in",
    desc: "Arrive at any hour, day or night.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Convenient Highway Location",
    desc: "A comfortable stop along the Dhaka–Khulna Highway.",
  },
  {
    icon: FaBed,
    title: "Rest & Recharge",
    desc: "Take a refreshing break before continuing your journey.",
  },
];

export default function RestSuitesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="suites" className="bg-[#FAF9F6] text-neutral-900 py-24 sm:py-32 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-emerald-700" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-emerald-800">
                02 / REST SUITES
              </p>
            </div>
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold tracking-tight text-neutral-950 leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">Rest Well.</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-emerald-800">Travel Refreshed.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            Comfortable rest suites for travelers looking to relax and recharge before continuing their journey.
          </p>
        </div>

        {/* 2-Column Split: Visual Gallery & Key Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="fade-up lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 border border-neutral-300/80 shadow-md group">
              <div className="parallax-img absolute inset-0 w-full h-[126%] -top-[13%]">
                <img
                  src="/images/facilities/highway_inn/warm-modern-bedroom-living-suite.webp"
                  alt="Sampan Highway Inn Rest Suite"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-900 border border-neutral-200 z-10">
                VVIP Rest Suite
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3.5 py-1.5 font-mono text-xs z-10">
                24/7 Check-in
              </div>
            </div>

            {/* Secondary Showcase Thumbnails */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 border border-neutral-300/80 group">
                <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
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
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 border border-neutral-300/80 group">
                <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
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

          {/* Right Column: Exact Copy & Clear Actions */}
          <div className="fade-up lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold block">
                YOUR REST STOP ALONG THE HIGHWAY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight leading-snug">
                A Comfortable Pause, Whenever You Need It.
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                Whether you&apos;re traveling during the day or arriving late at night, Sampan Highway Inn welcomes you with convenient accommodation and 24/7 check-in.
              </p>
            </div>

            {/* 3 Core Points */}
            <div className="space-y-4 pt-2">
              {suiteKeyFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white border border-neutral-200/90 shadow-sm">
                    <div className="w-10 h-10 rounded-none bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                      <Icon className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950">{feat.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-emerald-950 text-white font-bold px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                <span>Enquire About a Rest Suite</span>
                <FiArrowUpRight className="text-base text-[#B8F230]" />
              </button>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-neutral-900 bg-white px-6 py-4 text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider transition-colors text-center"
              >
                <FaPhoneAlt className="text-emerald-700 text-xs" />
                <span>Call for Availability</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Suite Reservation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white border border-neutral-300 p-8 text-neutral-900 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="space-y-4 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">
                Instant Suite Reservation
              </span>
              <h3 className="text-2xl font-bold text-neutral-950">
                Book a Suite at Sampan Highway Inn
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Call our 24/7 reception desk for immediate room allocation, day-rest slots, or overnight reservations.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <a
                href="tel:+8801929918408"
                className="flex items-center justify-between p-4 bg-neutral-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-950 transition-colors"
              >
                <span>Call Desk (+880 1929-918408)</span>
                <FiArrowUpRight className="text-base text-[#B8F230]" />
              </a>

              <a
                href="https://wa.me/8801929918408?text=Hello%20Sampan%20Highway%20Inn,%20I%20would%20like%20to%20enquire%20about%20a%20rest%20suite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-neutral-300 text-neutral-900 font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
              >
                <span>WhatsApp Instant Inquiry</span>
                <FiArrowUpRight className="text-base" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
