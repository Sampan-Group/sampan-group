"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaClock } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

interface NearbySpot {
  id: string;
  name: string;
  type: string;
  distance: string;
  driveTime: string;
  image: string;
  description: string;
  link: string;
  external?: boolean;
}

const nearbySpots: NearbySpot[] = [
  {
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "Automotive & Fuel",
    distance: "10 m",
    driveTime: "30 second walk",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-filling-station-bus-bay.webp",
    description: "24/7 high-volume highway refuel, octane & diesel station with dedicated heavy vehicle bays.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
  },
  {
    id: "lpg-station",
    name: "Sampan LPG Station",
    type: "Clean Mobility & Fuel",
    distance: "10 m",
    driveTime: "30 second walk",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description: "State-of-the-art LPG autogas conversion and rapid dispenser refueling station.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
  },
  {
    id: "sampan-mart",
    name: "Sampan Mart 24/7",
    type: "Retail Super Shop",
    distance: "10 m",
    driveTime: "In Complex",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-mart-24-7-courtyard.webp",
    description: "24/7 highway retail super shop stocked with travel essentials, groceries, and fresh snacks.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "sweet-box",
    name: "Sampan Sweet Box",
    type: "Artisanal Bengali Sweets",
    distance: "10 m",
    driveTime: "In Complex",
    image: "/images/facilities/highway_inn/sweet-shop.jpg",
    description: "Authentic traditional mishti, fresh chhana sweets, celebration gift boxes, and highway travel treats.",
    link: "/our-divisions/retail-super-shops/sampan-sweet-box",
  },
  {
    id: "white-house",
    name: "Sampan White House & Motel",
    type: "Transit Accommodation",
    distance: "20 m",
    driveTime: "35 second walk",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description: "A sister hospitality property providing flexible hourly stays, quiet rooms, and private parking.",
    link: "/our-divisions/hospitality-highway-travel/sampan-white-house",
  },
  {
    id: "short-drive-range",
    name: "Sampan Short Drive Range",
    type: "Golf & Recreation",
    distance: "Adjacent",
    driveTime: "Coming Soon",
    image: "/images/our-divisions/sampan-golf-academy/range-hero.jpeg",
    description: "Upcoming precision short-game golf practice range and driving bays for enthusiasts and highway travelers.",
    link: "/our-divisions/golf-zone/sampan-short-drive-range",
  },
  {
    id: "mini-sampan",
    name: "Mini Sampan Super Shop",
    type: "Express Convenience",
    distance: "10 m",
    driveTime: "In Complex",
    image: "/images/our-divisions/mini-sampan-super-shop/Web-Banner-new.jpg",
    description: "Quick-stop express retail kiosk for instant refreshments and travel accessories.",
    link: "/our-divisions/retail-super-shops/mini-sampan-super-shop",
  },
];

export default function NearbyLocationModule() {
  return (
    <section id="nearby" className="bg-[#07150E] py-24 sm:py-32 text-white border-b border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#B8F230]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#B8F230]">
                Regional Surroundings
              </p>
            </div>
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">Nearby attractions &amp;</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#B8F230]">Sampan destinations.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            Discover other high-value Sampan Group developments, retail hubs, and mobility amenities in the immediate corridor vicinity.
          </p>
        </div>

        {/* Nearby Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nearbySpots.map((spot) => (
            <article
              key={spot.id}
              className="fade-up group flex flex-col overflow-hidden bg-white/[0.04] border border-white/10 hover:border-[#B8F230]/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 shadow-md"
            >
              {/* Image Preview with Parallax Scrub */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Distance Chip */}
                <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-[#B8F230] border border-white/10 flex items-center gap-1.5 z-10">
                  <FaMapMarkerAlt className="text-[9px]" />
                  <span>{spot.distance}</span>
                </div>

                {/* Drive Time Chip */}
                <div className="absolute bottom-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono font-semibold text-neutral-900 flex items-center gap-1 z-10">
                  <FaClock className="text-[9px] text-emerald-800" />
                  <span>{spot.driveTime}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="flex flex-1 flex-col p-6 justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8F230] block mb-1">
                    {spot.type}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#B8F230] transition-colors leading-snug">
                    {spot.name}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-light">
                    {spot.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  {spot.external ? (
                    <a
                      href={spot.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#B8F230] hover:underline"
                    >
                      <span>Explore Directions</span>
                      <FiArrowUpRight className="text-sm" />
                    </a>
                  ) : (
                    <Link
                      href={spot.link}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#B8F230] hover:underline"
                    >
                      <span>Discover Property</span>
                      <FiArrowUpRight className="text-sm" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
