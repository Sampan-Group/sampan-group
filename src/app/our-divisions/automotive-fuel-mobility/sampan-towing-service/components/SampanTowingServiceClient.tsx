"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaTimes,
  FaCheck,
  FaShieldAlt,
  FaUtensils,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiArrowRight, FiMaximize2 } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const heroBackground =
  "/images/our-divisions/sampan-towing/car-recovery-vehicle-transporting-yellow-car.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "tow-1",
    title: "Highway Wheel-Lift Recovery",
    category: "EMERGENCY TOWING",
    image:
      "/images/our-divisions/sampan-towing/car-recovery-vehicle-transporting-yellow-car.jpg",
    description:
      "Rapid-response recovery truck dispatched from Highway Inn for swift highway breakdown transport.",
  },
  {
    id: "tow-2",
    title: "Tilt-Bed Flatbed Transport",
    category: "FLATBED CARRIER",
    image: "/images/our-divisions/sampan-towing/upscalemedia-transformed-(7).jpg",
    description:
      "Hydraulic flatbed carrier engineered for complete damage-free passenger vehicle transport.",
  },
  {
    id: "tow-3",
    title: "24/7 Highway Inn Dispatch Bay",
    category: "STANDBY CREW",
    image: "/images/our-divisions/sampan-towing/commercial-dispatch-bay.jpg",
    description:
      "Modern commercial tilt-and-slide recovery fleet on 24/7 standby at Sampan Highway Inn dispatch bay.",
  },
];

interface ServiceCapability {
  eyebrow: string;
  title: string;
  body: string;
  footerTag: string;
  icon: React.ElementType;
}

const serviceCapabilities: ServiceCapability[] = [
  {
    eyebrow: "ROUND-THE-CLOCK",
    title: "24/7 Highway Towing",
    body: "Rapid dispatch for engine breakdowns, flat tires, or highway emergencies day and night.",
    footerTag: "Immediate Dispatch ✓",
    icon: FaClock,
  },
  {
    eyebrow: "SAFE TRANSIT",
    title: "Zero-Damage Transport",
    body: "Hydraulic wheel-lift and flatbed loading with secure wheel straps for scratch-free transit.",
    footerTag: "Secure Wheel Lashing ✓",
    icon: FaShieldAlt,
  },
  {
    eyebrow: "TRAVELER CARE",
    title: "Rest at Sampan Highway Inn",
    body: "Passengers can wait safely in our 24/7 air-conditioned dining hall and lounge.",
    footerTag: "24/7 Safe Waiting Area ✓",
    icon: FaUtensils,
  },
];

interface NearbySpot {
  id: string;
  name: string;
  type: string;
  badge: string;
  image: string;
  description: string;
  link: string;
}

const nearbySpots: NearbySpot[] = [
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    type: "HOSPITALITY & DINING",
    badge: "SERVICE BASE",
    image: "/images/our-divisions/sampan-highway-inn/heromain2.jpg",
    description:
      "24/7 highway restaurant, AC dining halls, prayer rooms, and rest stop.",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "AUTOMOTIVE & FUEL",
    badge: "IN COMPLEX",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description:
      "24/7 calibrated Octane 95, Diesel, and lubricants right beside the inn.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
  },
  {
    id: "lpg-station",
    name: "Sampan LPG Station",
    type: "CLEAN AUTOGAS",
    badge: "IN COMPLEX",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description:
      "24/7 high-pressure Auto LPG dispensing for private and commercial vehicles.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
  },
  {
    id: "sampan-mart",
    name: "Sampan Mart",
    type: "24/7 SUPER SHOP",
    badge: "IN COMPLEX",
    image: "/images/our-divisions/sampan-mart/Sampan-Mart.jpg",
    description:
      "Everyday travel essentials, fresh groceries, snacks, and chilled drinks.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "sweet-box",
    name: "Sampan Sweet Box",
    type: "BENGALI SWEETS",
    badge: "IN COMPLEX",
    image: "/images/facilities/highway_inn/sweet-shop.jpg",
    description:
      "Fresh traditional mishti, chhana sweets, and gift boxes for travelers.",
    link: "/our-divisions/retail-super-shops/sampan-sweet-box",
  },
  {
    id: "white-house",
    name: "Sampan White House & Motel",
    type: "ACCOMMODATION",
    badge: "TRANSIT STOP",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description:
      "Quiet private rooms and secure overnight parking beside Highway Inn.",
    link: "/our-divisions/hospitality-highway-travel/sampan-white-house",
  },
];

export default function SampanTowingServiceClient() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Line mask slow reveal for headings
        gsap.utils.toArray<HTMLElement>(".line-mask").forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.4,
              ease: "power4.out",
              scrollTrigger: { trigger: line.parentElement!, start: "top 88%" },
            }
          );
        });

        // 2. Reveal fade-up for content, cards, badges
        gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 28, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 92%" },
            }
          );
        });

        // 3. Parallax image reveal with scrub
        gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".line-mask", ".fade-up"], {
          y: 0,
          yPercent: 0,
          autoAlpha: 1,
        });
        gsap.set(".parallax-img", {
          y: 0,
          yPercent: 0,
          x: 0,
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="bg-[#fcfbf9] text-[#1a1714] selection:bg-orange-600 selection:text-white pb-16 sm:pb-0"
    >
      {/* ================= 1. HERO BANNER (FULL HEIGHT) ================= */}
      <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#110e0c] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src={heroBackground}
              alt="Sampan Towing Service Highway Truck"
              sizes="100vw"
              className="w-full h-full object-cover object-center opacity-75 scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            {/* Headline with slow line-mask reveal */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              <div className="overflow-hidden">
                <div className="line-mask">Sampan</div>
              </div>
              <div className="overflow-hidden">
                <div className="line-mask text-orange-400 block mt-1">
                  Towing Service
                </div>
              </div>
            </h1>

            {/* Subhead (15 words) */}
            <p className="fade-up text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-orange-500/80 pl-4">
              24/7 highway breakdown recovery and damage-free towing dispatched directly from Sampan Highway Inn, Kashiani.
            </p>

            {/* Urgent Emergency Call-to-Action (Above the fold) */}
            <div className="fade-up pt-1 space-y-3">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-red-200">
                  Emergency Roadside Recovery • 24/7 On-Call Crew
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="tel:+8801929918400"
                  className="group inline-flex items-center justify-center gap-3 rounded-none bg-orange-600 hover:bg-orange-500 active:bg-orange-700 px-7 sm:px-9 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 shadow-xl shadow-orange-950/60 ring-2 ring-orange-500/50 hover:ring-orange-400 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt className="text-[11px] animate-pulse" />
                  </div>
                  <span>CALL TOWING HOTLINE: +880 1929-918400</span>
                </a>

                <button
                  onClick={() => scrollTo("gallery")}
                  className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-6 sm:px-7 py-3.5 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  SERVICE PHOTOS
                </button>

                <button
                  onClick={() => scrollTo("nearby")}
                  className="inline-flex items-center justify-center rounded-none border border-orange-500/40 bg-orange-950/30 hover:bg-orange-900/60 px-6 sm:px-7 py-3.5 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  NEARBY PLACES
                </button>
              </div>
            </div>

            {/* Bottom 4 Stats */}
            <div className="fade-up mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  24/7 ON-CALL
                </p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">
                  Emergency Dispatch
                </p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-orange-400 uppercase tracking-wider">
                  SAFE RECOVERY
                </p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">
                  Damage-Free Loading
                </p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  DHAKA–KHULNA
                </p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">
                  KM 74, Kashiani
                </p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  HIGHWAY INN
                </p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">
                  Stationed Base
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. CAPABILITIES (3 CARDS) ================= */}
      <section id="capabilities" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Roadside peace of mind.</div>
              </div>
              <div className="overflow-hidden">
                <div className="line-mask text-orange-700">Swift highway recovery.</div>
              </div>
            </h2>
            <p className="fade-up mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
              Stationed at Sampan Highway Inn for fast vehicle recovery along the Dhaka–Khulna corridor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {serviceCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="fade-up group relative flex flex-col justify-between border border-neutral-200/90 bg-white p-7 sm:p-8 rounded-none hover:border-orange-600 hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.12)] transition-[border-color,box-shadow] duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-orange-600 transition-all duration-500 group-hover:w-full z-10" />

                  <div>
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-[#faf8f5] border border-neutral-200/80 flex items-center justify-center text-orange-700 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all duration-300 shadow-xs">
                        <Icon className="text-lg" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-orange-700">
                        {item.eyebrow}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 group-hover:text-orange-700 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      {item.body}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 bg-[#fdfbf7] border border-neutral-200/80 group-hover:border-orange-200 px-3 py-1.5 transition-colors">
                      <FaCheck className="text-[10px] text-orange-600" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-800">
                        {item.footerTag.replace(" ✓", "")}
                      </span>
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center text-neutral-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300">
                      <FiArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. SERVICE PHOTOS (3 CARDS) ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Service Photos</div>
              </div>
            </h2>
            <p className="fade-up mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xl">
              Our recovery trucks, flatbed carriers, and roadside crew in action.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {galleryItems.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="fade-up group relative flex flex-col justify-between bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-5 hover:border-neutral-300 hover:shadow-lg transition-[border-color,box-shadow] duration-300 cursor-pointer"
              >
                {/* Photo Viewport with Rounded Corners & Parallax */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-950">
                  <div className="parallax-img absolute inset-0 w-full h-[112%] -top-[6%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Top-Left Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-800">
                      {item.category}
                    </span>
                  </div>

                  {/* Top-Right Maximize Icon */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm text-white flex items-center justify-center group-hover:bg-black/80 transition-colors">
                    <FiMaximize2 className="text-xs" />
                  </div>
                </div>

                {/* Content Area Below Image */}
                <div className="pt-4 sm:pt-5 px-1 pb-1 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-700 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. NEARBY AT THIS LOCATION (6 CARDS) ================= */}
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#110e0c] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Nearby at This Location</div>
              </div>
            </h2>
            <p className="fade-up mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
              Part of the Sampan Highway Inn complex—with 24/7 dining, fuel, autogas, shopping, and rooms.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {nearbySpots.map((spot) => (
              <article
                key={spot.id}
                className="fade-up group relative flex flex-col justify-between h-full bg-[#181412] border border-white/[0.12] hover:border-orange-500/70 hover:shadow-[0_12px_36px_rgba(0,0,0,0.55)] transition-all duration-300 rounded-none overflow-hidden"
              >
                {/* Top orange line indicator on hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full z-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Photo frame with strict uniform 16:10 aspect ratio and parallax */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 shrink-0">
                  <div className="parallax-img absolute inset-0 w-full h-[112%] -top-[6%]">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181412] via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center rounded-none bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-orange-400 border border-orange-500/30 shadow-xs">
                      {spot.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange-400">
                        {spot.type}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {spot.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-light">
                      {spot.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-5 border-t border-white/10">
                    <Link
                      href={spot.link}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <span>VIEW DETAILS</span>
                      <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. SERVICE BASE & EMERGENCY HOTLINE (3 CARDS) ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Service Base &amp; Emergency Hotline</div>
              </div>
            </h2>
            <p className="fade-up mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
              Based at Sampan Highway Inn (KM 74, Dhaka–Khulna Highway) for immediate 24/7 dispatch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Service Stationed At */}
            <div className="fade-up bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950">
                  Service Stationed At
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                  Sampan Highway Inn <br />
                  KM 74, Dhaka–Khulna Highway, Kashiani
                </p>
              </div>
              <p className="pt-4 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Direct highway response base
              </p>
            </div>

            {/* Card 2: 24/7 Availability */}
            <div className="fade-up bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                  <FaClock className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950">
                  24/7 Availability
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                  24 Hours / 7 Days a Week <br />
                  Immediate Highway Callout • 365 Days
                </p>
              </div>
              <p className="pt-4 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Rapid breakdown assistance
              </p>
            </div>

            {/* Card 3: Emergency Hotline */}
            <div className="fade-up bg-white border-2 border-orange-500 bg-orange-50/20 p-8 rounded-none shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                  <FaPhoneAlt className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950">
                  Emergency Hotline
                </h3>
                <div className="pt-1 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-400">Call:</span>
                    <a
                      href="tel:+8801929918400"
                      className="font-mono font-bold text-orange-700 hover:underline"
                    >
                      +880 1929-918400
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100 space-y-2">
                <a
                  href="tel:+8801929918400"
                  className="inline-flex items-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>CALL FOR TOWING</span>
                </a>
                <p className="text-[11px] text-neutral-400 font-mono pt-1">
                  Instant voice dispatch
                </p>
              </div>
            </div>
          </div>

          {/* Location Map Box (Dedicated Full-Width Block Below the 3 Cards) */}
          <div className="fade-up mt-8 border border-neutral-300 bg-white p-2.5 sm:p-3.5 shadow-sm">
            {/* Top Bar with Live Indicator & Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-2.5 mb-2 border-b border-neutral-200">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 min-w-0">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse shrink-0" />
                <span className="font-bold text-neutral-900 uppercase tracking-wider shrink-0">Map:</span>
                <span className="truncate">Sampan Highway Inn Base, KM 74, Dhaka–Khulna Highway, Kashiani</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sampan+Highway+Inn,+Kashiani,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-orange-700 hover:text-orange-950 transition-colors shrink-0"
              >
                <span>Open in Maps</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-neutral-100 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Sampan+Highway+Inn+Kashiani+Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sampan Towing Dispatch Base Map"
                className="w-full h-full"
              />
            </div>

            {/* Below the map: Text Link */}
            <div className="mt-3 px-2 py-1.5 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
              <span className="text-neutral-500">
                Dhaka–Khulna Highway Corridor • KM 74 Kashiani Base
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sampan+Highway+Inn,+Kashiani,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-orange-700 hover:text-orange-800 hover:underline transition-colors"
              >
                <span>VIEW KASHIANI BASE ON GOOGLE MAPS</span>
                <span className="text-sm font-sans">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. MOBILE STICKY EMERGENCY HOTLINE BAR ================= */}
      <aside
        aria-label="Mobile Emergency Towing Bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#140e0c]/95 backdrop-blur-md border-t border-orange-500/40 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] flex items-center justify-between gap-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <div className="min-w-0 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-bold text-white uppercase tracking-wider truncate">
              24/7 Towing Base
            </p>
            <p className="font-mono text-[10px] text-orange-400 truncate">
              KM 74, Kashiani
            </p>
          </div>
        </div>

        <a
          href="tel:+8801929918400"
          className="shrink-0 inline-flex items-center gap-2 rounded-none bg-orange-600 active:bg-orange-700 text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-950/40"
        >
          <FaPhoneAlt className="text-[11px] animate-bounce" />
          <span>CALL NOW</span>
        </a>
      </aside>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-orange-600 transition-colors cursor-pointer z-20"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-neutral-950 flex flex-col justify-between"
          >
            <img
              src={selectedImage}
              alt="Sampan Towing Service Preview"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
