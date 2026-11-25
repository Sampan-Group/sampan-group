"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import styles from "./NearbyLocationModule.module.css";

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
    image: "/images/our-divisions/sampan-mart/sampan-mart.png",
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
    <section id="nearby" className="relative overflow-hidden border-b border-[#061B2B]/10 bg-[#EEF5FA] py-24 text-[#061B2B] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#C3161C]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#005A91]">
                Around Sampan
              </p>
            </div>
            <h2 className={`${styles.heading} font-bold tracking-tight text-neutral-950 leading-[1.05]`}>
              <div className="overflow-hidden">
                <div className="line-mask">Nearby attractions &amp;</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#005A91]">Sampan destinations.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-base text-neutral-600 leading-relaxed font-light">
            There&apos;s more to explore around the corner. Find everyday essentials, places to unwind and practical stops close to Sampan Highway Inn.
          </p>
        </div>

        {/* Wide pairs frame a row of three, following the photo-led reference. */}
        <div className="grid auto-rows-[360px] grid-cols-1 gap-4 sm:auto-rows-[380px] sm:grid-cols-2 lg:auto-rows-[400px] lg:grid-cols-12 lg:gap-5">
          {nearbySpots.map((spot, index) => (
            <Link
              key={spot.id}
              href={spot.link}
              target={spot.external ? "_blank" : undefined}
              rel={spot.external ? "noopener noreferrer" : undefined}
              aria-labelledby={`nearby-${spot.id}-title`}
              aria-describedby={`nearby-${spot.id}-description`}
              className={`${styles.card} group relative isolate block overflow-hidden bg-[#061B2B] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0069A8] ${index === 6 ? "sm:col-span-2 lg:col-span-6" : index >= 2 && index <= 4 ? "lg:col-span-4" : "lg:col-span-6"}`}
            >
                <div className="parallax-img absolute -top-[14%] left-0 h-[128%] w-full">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    loading="lazy"
                    sizes={index >= 2 && index <= 4 ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 640px) 100vw, 50vw"}
                    className={`${styles.photo} h-full w-full object-cover`}
                  />
                </div>
              <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,18,30,0.88)_0%,rgba(3,18,30,0.4)_30%,transparent_65%)]" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 border border-white/15 transition-colors duration-300 group-hover:border-[#FCB813]/80 group-focus-visible:border-[#FCB813]/80" />

              <div className="absolute inset-x-0 top-5 flex flex-wrap items-start justify-between gap-3 px-5 sm:top-6 sm:px-6">
                <span className="inline-flex items-center gap-2 bg-white/95 px-3 py-1.5 text-sm font-semibold text-[#061B2B] shadow-sm">
                  <FaMapMarkerAlt aria-hidden="true" className="text-xs text-[#0069A8]" />
                  {spot.distance}
                </span>
                <span className="max-w-[70%] bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#061B2B] backdrop-blur-sm">
                    {spot.type}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 id={`nearby-${spot.id}-title`} className={`${styles.title} text-[clamp(1.5rem,2.3vw,2rem)] leading-tight text-white transition-colors duration-300 group-hover:text-[#FFE5A5] group-focus-visible:text-[#FFE5A5]`}>
                    {spot.name}
                  </h3>
                <div className={styles.details}>
                  <div className={styles.detailsInner}>
                  <p id={`nearby-${spot.id}-description`} className="mt-3 max-w-lg border-l-2 border-[#FCB813] pl-3 text-sm leading-relaxed text-white/90">
                    {spot.description}
                  </p>
                  </div>
                </div>
                <p className="mt-3 flex items-center gap-2 text-sm text-white/85">
                  <FaClock aria-hidden="true" className="text-xs text-[#FFE5A5]" />
                  {spot.driveTime}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#061B2B]/15 pt-6 text-sm sm:flex-row sm:items-center">
          <p className="text-neutral-600">A little more to discover, all close by.</p>
          <Link href="/our-divisions" className="w-fit border-b border-[#005A91] pb-1 font-semibold text-[#06466E] transition-colors hover:text-[#0069A8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0069A8]">
            Explore all Sampan destinations
          </Link>
        </div>

      </div>
    </section>
  );
}
