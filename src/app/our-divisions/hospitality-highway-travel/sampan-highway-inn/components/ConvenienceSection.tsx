"use client";

import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { FaPumpSoap, FaGasPump, FaShoppingBag, FaMosque, FaParking, FaShieldAlt } from "react-icons/fa";

const convenienceCards = [
  {
    tag: "HYGIENE & RESTROOMS",
    title: "Spotless Luxury Washrooms",
    description: "Modern vanity counters with circular LED-backlit mirrors, continuous sanitization, and dedicated private facilities for ladies and gentlemen.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-luxury-washroom-vanity.webp",
    badge: "24/7 Sanitized",
  },
  {
    tag: "COURTYARD SUPER SHOP",
    title: "Sampan Mart 24/7",
    description: "Direct courtyard access to packaged snacks, chilled drinks, travel necessities, artisanal dry fruits, and baby care essentials.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-mart-courtyard-landscaping.webp",
    badge: "Always Open",
  },
  {
    tag: "FUEL & MOBILITY",
    title: "Filling Station & Vehicle Bays",
    description: "Wide ingress pull-in bays, multi-dispenser fuel pumps, tire pressure calibration, and rapid turnaround for cars, SUVs & coaches.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-filling-station-bus-bay.webp",
    badge: "Full Service",
  },
  {
    tag: "SANCTUARY & SAFETY",
    title: "Prayer Mosque & 200+ Parking",
    description: "Peaceful prayer hall with separate wudu/ablution zones for ladies and men, backed by 24/7 armed security patrols and CCTV surveillance.",
    image: "/images/our-divisions/sampan-highway-inn/sampan-mosque.jpeg",
    badge: "Guarded 24/7",
  },
];

export default function ConvenienceSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="convenience" className="bg-[#081F32] text-white py-24 sm:py-32 border-b border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#FCB813]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#FCB813]">
                03 / Highway Convenience
              </p>
            </div>
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">Designed for</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#FCB813]">seamless transit.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            Every essential amenity right at KM 103, engineered so you can refresh, refuel, and continue your journey without friction.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {convenienceCards.map((card, index) => (
            <article
              key={index}
              className="fade-up group flex flex-col bg-white/[0.04] border border-white/10 hover:border-[#FCB813]/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 shadow-md"
            >
              {/* Image Preview with Parallax */}
              <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-neutral-900">
                <div className="parallax-img absolute -top-[14%] left-0 w-full h-[128%]">
                  <img
                    src={card.image}
                    alt={card.title}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[#FCB813] border border-white/10 z-10">
                  {card.badge}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FCB813] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#FCB813]">
                  <span>On-Premises KM 103</span>
                  <FiCheck className="text-sm" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Clear Action Banner */}
        <div className="fade-up mt-12 p-8 bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              Need assistance planning a group stop or fueling dispatch?
            </h4>
            <p className="text-xs text-neutral-400">
              Our 24/7 security and floor operations team can reserve bus parking and dedicated dining slots.
            </p>
          </div>
          <button
            onClick={() => scrollTo("location")}
            className="inline-flex items-center gap-2 bg-[#FCB813] hover:bg-[#E6A20B] text-neutral-950 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
          >
            <span>View Road Map &amp; Access</span>
            <FiArrowUpRight className="text-base" />
          </button>
        </div>

      </div>
    </section>
  );
}

