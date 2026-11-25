"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const diningFeatures = [
  {
    title: "All-Day Hospitality",
    description: "Dining options for travelers throughout the day and night.",
  },
  {
    title: "Welcoming Spaces",
    description: "Comfortable spaces for family meals and gatherings.",
  },
  {
    title: "Quick Stops",
    description: "Refreshments and light bites along your journey.",
  },
  {
    title: "Relaxed Meals",
    description: "A selection of local and international dishes.",
  },
];

const subOfferings = [
  {
    name: "Sampan Family Restaurant",
    category: "Full Service Dining",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_070207.jpg",
    tag: "Multi-Cuisine",
  },
  {
    name: "Sampan Juice Bar & Treats",
    category: "Fresh & Healthy",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_065448 (1).jpg",
    tag: "Cold-Pressed & Shakes",
  },
  {
    name: "Sampan Sweet Shop",
    category: "Traditional Delights",
    image: "/images/our-divisions/sampan-highway-inn/sweet-shop.jpg",
    tag: "Pure Chhana & Ghee",
  },
  {
    name: "Sampan Fast Food",
    category: "Quick Bites",
    image: "/images/our-divisions/sampan-highway-inn/fast_food.webp",
    tag: "Burgers & Wraps",
  },
];

export default function DiningSection() {
  return (
    <section id="dining" className="bg-[#061B2B] text-white py-24 sm:py-32 border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-[#007DC6]/10 rounded-full blur-[140px]" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Top 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">

          {/* Left Column: Story & Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="fade-up flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FCB813]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#FCB813]">
                01 / Dining
              </p>
            </div>

            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">A delicious reason</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#FCB813]">to slow down.</div>
              </div>
            </h2>

            <p className="fade-up text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Whether you&apos;re beginning a journey, passing through or stopping to unwind, make time for food and a moment worth enjoying.
            </p>

            {/* 2x2 Features Grid */}
            <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {diningFeatures.map((feat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
                    <FiArrowUpRight className="text-[#FCB813] text-sm" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Clear Action Button */}
            <div className="fade-up pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FCB813] hover:bg-[#E6A20B] text-neutral-950 font-bold px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Contact Us</span>
                <FiArrowUpRight className="text-base" />
              </Link>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white px-6 py-4 text-xs font-mono font-bold text-white uppercase tracking-wider transition-colors"
              >
                <FaPhoneAlt className="text-[#FCB813] text-xs" />
                <span>+880 1929-918408</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Restaurant Photography */}
          <div className="fade-up lg:col-span-6">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 group">
              <div className="parallax-img absolute -top-[14%] left-0 w-full h-[128%]">
                <img
                  src="/images/our-divisions/sampan-highway-inn/latest/sampan-dining-hall-interior.webp"
                  alt="Sampan Highway Inn Main Dining Hall"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-xs font-mono">
                <div>
                  {/* <span className="text-[#FCB813] font-bold uppercase tracking-wider block mb-1">
                    Main Dining Hall • KM 103
                  </span> */}
                  <p className="text-white text-sm font-semibold">
                    A welcoming space for dining, relaxation, and memorable meals.                  </p>
                </div>
                {/* <span className="text-neutral-400 bg-black/60 px-3 py-1 border border-white/10">
                  Verified Property
                </span> */}
              </div>
            </div>
          </div>

        </div>

        {/* 4 Culinary Offerings Cards */}
        <div className="fade-up pt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-8 bg-[#FCB813]" />
                <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#FCB813]">
                  EXPLORE OUR DINING
                </p>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Something for every craving.
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Discover our dining and refreshment options along your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subOfferings.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-t-2xl bg-white/[0.04] border border-white/10 hover:border-[#FCB813]/50 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-neutral-900">
                  <div className="parallax-img absolute -top-[14%] left-0 w-full h-[128%]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[#FCB813] border border-white/10 z-10">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FCB813] transition-colors">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

