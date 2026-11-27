"use client";

import { FaPumpSoap, FaGasPump, FaShoppingBag, FaMosque } from "react-icons/fa";

const convenienceCards = [
  {
    icon: FaPumpSoap,
    tag: "REFRESH",
    title: "Washroom Facilities",
    description: "Freshen up before continuing your journey.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-luxury-washroom-vanity.webp",
  },
  {
    icon: FaShoppingBag,
    tag: "SHOP",
    title: "Sampan Mart",
    description: "Snacks, beverages, and everyday travel essentials.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-mart-courtyard-landscaping.webp",
  },
  {
    icon: FaGasPump,
    tag: "REFUEL",
    title: "Filling Station",
    description: "A convenient refueling stop along your route.",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-filling-station-bus-bay.webp",
  },
  {
    icon: FaMosque,
    tag: "PRAYER",
    title: "Prayer Facilities",
    description: "A dedicated space for prayer during your journey.",
    image: "/images/our-divisions/sampan-highway-inn/sampan-mosque.jpeg",
  },
];

export default function ConvenienceSection() {
  return (
    <section id="convenience" className="bg-[#081F32] text-white py-20 lg:py-24 border-b border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#FCB813]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#FCB813]">
                03 / HIGHWAY FACILITIES
              </p>
            </div>
            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">Everything you need.</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#FCB813]">Along the way.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            Refresh, refuel, and continue your journey with convenient highway facilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {convenienceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={index}
                className="fade-up group flex flex-col rounded-2xl overflow-hidden bg-[#142839] border border-white/10 hover:border-[#FCB813]/40 transition-colors duration-300"
              >
                {/* Image Preview with Parallax */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <div className="parallax-img absolute -top-[14%] left-0 w-full h-[128%]">
                    <img
                      src={card.image}
                      alt={card.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 lg:p-6 flex flex-col flex-1 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#FCB813]">
                    <Icon className="text-xs" />
                    <span>{card.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FCB813] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-neutral-300 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

