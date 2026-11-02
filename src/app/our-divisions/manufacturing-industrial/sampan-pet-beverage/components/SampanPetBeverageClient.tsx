"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaWineBottle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaCheck,
  FaShieldAlt,
  FaIndustry,
  FaWater,
} from "react-icons/fa";
import { FiArrowRight, FiMaximize2 } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const heroBackground = "/images/our-divisions/sampan-pet-beverage/hero.jpeg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const factoryGallery: GalleryItem[] = [
  {
    id: "pet-1",
    title: "Main Industrial Warehouse & Production Facility",
    category: "PLANT INFRASTRUCTURE",
    image: "/images/our-divisions/sampan-pet-beverage/plant-infrastructure.webp",
    description: "Our central facility, housing advanced automated machinery, ensures high-volume, reliable production.",
  },
  {
    id: "pet-2",
    title: "Covered Production Hall & Warehouse Facility",
    category: "PLANT INTERIOR",
    image: "/images/our-divisions/sampan-pet-beverage/image-2.webp",
    description: "Heavy-duty covered production hall and warehouse bay engineered for phase expansion, raw materials, and secondary processing.",
  },
];

interface PlantCapability {
  eyebrow: string;
  title: string;
  body: string;
  footerTag: string;
  icon: React.ElementType;
}

const plantCapabilities: PlantCapability[] = [
  {
    eyebrow: "INJECTION MOLDING",
    title: "Food-Grade PET Preforms",
    body: "High-clarity preforms molded from 100% virgin food-grade PET resin for water and beverage brands.",
    footerTag: "100% Virgin Resin ✓",
    icon: FaIndustry,
  },
  {
    eyebrow: "BLOW MOLDING",
    title: "Custom PET Bottles",
    body: "Durable, pressure-resistant PET bottles blown in standard and custom sizes from 250ml to 5L.",
    footerTag: "Leak-Proof Precision ✓",
    icon: FaWineBottle,
  },
  {
    eyebrow: "WATER & BEVERAGES",
    title: "Automated Bottling Line",
    body: "Multi-stage RO, UV, and ozone-purified drinking water and beverages bottled with zero human touch.",
    footerTag: "BSTI & FDA Compliant ✓",
    icon: FaWater,
  },
];

export default function SampanPetBeverageClient() {
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

        // 2. Slow reveal fade-up for content, cards, badges
        gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
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
      className="bg-[#fcfbf9] text-[#1a1714] selection:bg-orange-600 selection:text-white"
    >
      {/* ================= 1. HERO SECTION (FULL HEIGHT) ================= */}
      <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#140e0a] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src={heroBackground}
              alt="Sampan PET and Beverage Factory"
              sizes="100vw"
              className="w-full h-full object-cover object-center opacity-70 scale-105"
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
                  PET &amp; Beverage
                </div>
              </div>
            </h1>

            {/* Shortened Subheadline */}
            <p className="fade-up text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-orange-500/80 pl-4">
              Automated food-grade PET bottle preforms and beverage bottling plant located inside Sampan Industrial Park, Alfadanga, Faridpur.
            </p>

            {/* Action Buttons */}
            <div className="fade-up mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("capabilities")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-orange-950/40 cursor-pointer"
              >
                <span>Plant Capabilities</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Plant Photos
              </button>

              <button
                onClick={() => scrollTo("location")}
                className="inline-flex items-center justify-center rounded-none border border-orange-500/40 bg-orange-950/30 hover:bg-orange-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Location &amp; Inquiries
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="fade-up mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Alfadanga</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Faridpur District</p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-orange-400 uppercase tracking-wider">Food Grade</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Virgin PET Resin</p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Industrial Park</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Anchor Facility</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. PLANT CAPABILITIES (3-CARD ROW) ================= */}
      <section id="capabilities" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Food-grade packaging.</div>
              </div>
              <div className="overflow-hidden">
                <div className="line-mask text-orange-700">Hygienic bottling.</div>
              </div>
            </h2>
            <p className="fade-up mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
              Automated PET preform molding, bottle blowing, and purified water production in Alfadanga.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {plantCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="fade-up group relative flex flex-col justify-between border border-neutral-200/90 bg-white p-7 sm:p-8 rounded-none hover:border-orange-600 hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.12)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-orange-600 transition-all duration-500 group-hover:w-full z-10" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-[#faf8f5] border border-neutral-200/80 flex items-center justify-center text-orange-700 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all duration-500 shadow-xs">
                        <Icon className="text-lg" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-neutral-300 group-hover:text-orange-600/70 transition-colors">
                        0{idx + 1}
                      </span>
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

      {/* ================= 3. PLANT PHOTOS (NO EYEBROW) ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Plant &amp; Facility Photos</div>
              </div>
            </h2>
            <p className="fade-up mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xl">
              Inside our automated bottling line and PET molding facility in Alfadanga.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {factoryGallery.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="fade-up group relative flex flex-col justify-between bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-5 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Photo Viewport with Rounded Corners & Parallax */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-950">
                  <div className="parallax-img absolute inset-0 w-full h-[112%] -top-[6%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-orange-700">
                          {item.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-neutral-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-700 transition-colors leading-snug">
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

      {/* ================= 4. INDUSTRIAL PARK INTEGRATION ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#140e0a] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="fade-up border border-white/10 bg-[#1a130f] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-none">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-400 block">
                INSIDE SAMPAN INDUSTRIAL PARK
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                <div className="overflow-hidden">
                  <div className="line-mask">Co-Located with Sister</div>
                </div>
                <div className="overflow-hidden">
                  <div className="line-mask text-orange-400">Manufacturing Plants</div>
                </div>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Operating alongside Sampan Hollow Bricks &amp; Tiles in Alfadanga, Faridpur—sharing master-planned zoning, dedicated substation power, and highway freight access.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-industrial-park"
                className="inline-flex items-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>VIEW INDUSTRIAL PARK</span>
                <FiArrowRight className="text-xs" />
              </Link>
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-hollow-bricks-tiles"
                className="inline-flex items-center gap-2 rounded-none border border-white/25 hover:border-white hover:bg-white hover:text-black text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>HOLLOW BRICKS PLANT</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. LOCATION & B2B INQUIRIES ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Plant Location &amp; B2B Inquiries</div>
              </div>
            </h2>
            <p className="fade-up mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Located inside{" "}
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-industrial-park"
                className="text-orange-700 underline hover:text-orange-600 font-medium transition-colors"
              >
                Sampan Industrial Park
              </Link>
              , Alfadanga, Faridpur. Contact our B2B desk for wholesale preforms or contract bottling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Address */}
            <div className="fade-up bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950">
                  Plant Location
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                  Sampan PET &amp; Beverage <br />
                  Sampan Industrial Park <br />
                  Alfadanga, Faridpur, Bangladesh
                </p>
              </div>
              <p className="pt-4 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Alfadanga Industrial Corridor
              </p>
            </div>

            {/* Card 2: Quality & Certification */}
            <div className="fade-up bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                  <FaShieldAlt className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950">
                  Quality Standards
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                  100% Virgin Food-Grade PET <br />
                  Multi-Stage Water Purification <br />
                  Zero BPA &amp; BSTI Compliant
                </p>
              </div>
              <p className="pt-4 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Hygienic Automated Bottling
              </p>
            </div>

            {/* Card 3: Inquiries Contact */}
            <div className="fade-up bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                  <FaPhoneAlt className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950">
                  B2B Supply Desk
                </h3>
                <div className="pt-1 text-sm text-neutral-700 space-y-1 font-mono">
                  <p>
                    <span className="text-neutral-400">Phone: </span>
                    <a href="tel:+8801929918400" className="text-orange-700 font-bold hover:underline">
                      +880 1929-918400
                    </a>
                  </p>
                  <p>
                    <span className="text-neutral-400">Email: </span>
                    <a href="mailto:info@sampangroup.com.bd" className="text-orange-700 font-bold hover:underline">
                      info@sampangroup.com.bd
                    </a>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>REQUEST WHOLESALE QUOTE</span>
                  <FiArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal (Square Style) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-black"
          >
            <img
              src={selectedImage}
              alt="Sampan PET & Beverage Preview"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
