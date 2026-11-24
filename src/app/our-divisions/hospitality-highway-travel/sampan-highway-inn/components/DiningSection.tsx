"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhoneAlt, FaUtensils, FaClock, FaCheckCircle, FaTimes } from "react-icons/fa";

const diningFeatures = [
  {
    title: "All-day hospitality",
    description: "24/7 round-the-clock fresh preparations, hygienic live kitchens & quick turnaround.",
  },
  {
    title: "Welcoming spaces",
    description: "Spacious family dining hall, private VIP chambers & banquet party centre.",
  },
  {
    title: "Quick stops",
    description: "Sampan Juice Bar, artisan soft-serve, fresh baked goods & pure ghee sweets.",
  },
  {
    title: "Relaxed meals",
    description: "Authentic Bengali comfort food, tandoor sizzlers, Chinese & continental menus.",
  },
];

const subOfferings = [
  {
    name: "Sampan Family Restaurant",
    category: "Full Service Dining",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_070207.jpg",
    timing: "24 Hours Open",
    tag: "Multi-Cuisine",
  },
  {
    name: "Sampan Juice Bar & Treats",
    category: "Fresh & Healthy",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_065448 (1).jpg",
    timing: "7:00 AM – 12:00 AM",
    tag: "Cold-Pressed & Shakes",
  },
  {
    name: "Sampan Sweet Shop",
    category: "Traditional Delights",
    image: "/images/our-divisions/sampan-highway-inn/sweet-shop.jpg",
    timing: "7:00 AM – 11:30 PM",
    tag: "Pure Chhana & Ghee",
  },
  {
    name: "Sampan Fast Food",
    category: "Quick Bites",
    image: "/images/our-divisions/sampan-highway-inn/fast_food.webp",
    timing: "24 Hours Service",
    tag: "Burgers & Wraps",
  },
];

export default function DiningSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FCB813] hover:bg-[#E6A20B] text-neutral-950 font-bold px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Enquire About Dining</span>
                <FiArrowUpRight className="text-base" />
              </button>

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
            <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10 group">
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
                  <span className="text-[#FCB813] font-bold uppercase tracking-wider block mb-1">
                    Main Dining Hall • KM 103
                  </span>
                  <p className="text-white text-sm font-semibold">
                    Spacious multi-zone dining with ambient pendant fixtures &amp; private booths
                  </p>
                </div>
                <span className="text-neutral-400 bg-black/60 px-3 py-1 border border-white/10">
                  Verified Property
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Culinary Offerings Cards */}
        <div className="fade-up pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Culinary Destinations on the Premises
            </h3>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              4 Fresh Food Concepts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subOfferings.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white/[0.04] border border-white/10 hover:border-[#FCB813]/50 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
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

                <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#FCB813] transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 pt-2 border-t border-white/5 font-mono">
                    <FaClock className="text-[#FCB813] text-[10px]" />
                    <span>{item.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Dining Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0C2A40] border border-[#007DC6]/40 p-8 text-white shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="space-y-4 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FCB813]">
                Direct Reservation &amp; Dining Hotline
              </span>
              <h3 className="text-2xl font-bold text-white">
                Plan Your Dining at Sampan Highway Inn
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Whether traveling with family, a tour group, or booking private party halls, our team ensures freshly cooked meals are ready on your schedule.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href="tel:+8801929918408"
                className="flex items-center justify-between p-4 bg-[#FCB813] text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E6A20B] transition-colors"
              >
                <span>Call Hotline (+880 1929-918408)</span>
                <FiArrowUpRight className="text-base" />
              </a>

              <a
                href="https://wa.me/8801929918408"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
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

