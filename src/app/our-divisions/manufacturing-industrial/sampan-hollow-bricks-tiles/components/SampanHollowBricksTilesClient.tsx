"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaCubes,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaExpand,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const heroBackground = "/images/our-divisions/sampan-hollow-bricks/Image-Edit.jpg";

interface ProductItem {
  id: string;
  name: string;
  category: "blocks" | "pavers" | "infrastructure";
  categoryLabel: string;
  image: string;
  widthSpec?: string;
}

const mainProducts: ProductItem[] = [
  {
    id: "hollow-block-3-core",
    name: "3-Core Multi-Cavity Hollow Block",
    category: "blocks",
    categoryLabel: "Structural Hollow Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hollow_Block_3_Core.png",
    widthSpec: "Available Widths: 4″ • 6″ • 8″",
  },
  {
    id: "hollow-block-90mm",
    name: "90 mm Partition Hollow Block",
    category: "blocks",
    categoryLabel: "Interior Partition Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hollow_Block _90_mm.png",
    widthSpec: "Width: 90 mm (3.5″)",
  },
  {
    id: "hollow-block-stretcher",
    name: "Grooved Stretcher Hollow Block",
    category: "blocks",
    categoryLabel: "Stretcher Masonry Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hollow Block 4″_6″_8″.png",
    widthSpec: "Available Widths: 4″ • 6″ • 8″",
  },
  {
    id: "solid-block-4-6-8",
    name: "Solid Concrete Masonry Block",
    category: "blocks",
    categoryLabel: "Solid Dense Masonry",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Solid Block_4″_6″_8″.png",
    widthSpec: "Available Widths: 4″ • 6″ • 8″",
  },
  {
    id: "i-shape-paver",
    name: "I-Shape (Uni) Interlocking Paver",
    category: "pavers",
    categoryLabel: "Interlocking Traffic Paver",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/I_shape_Interlocking_Paver.png",
    widthSpec: "Heavy-Traffic Profile",
  },
  {
    id: "trihex-paver",
    name: "Trihex Patterned Interlocking Paver",
    category: "pavers",
    categoryLabel: "Architectural Traffic Paver",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Trihex_Paver_60_mm.png",
    widthSpec: "60 mm Standard Thickness",
  },
  {
    id: "hexagonal-paver",
    name: "Hexagonal Pavement Block",
    category: "pavers",
    categoryLabel: "Decorative Pavement Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hexagonal_Block_300 x150 x 60_mm.png",
    widthSpec: "60 mm Standard Thickness",
  },
  {
    id: "uni-paver-wavy",
    name: "Uni-Paver Wave Interlocking Block",
    category: "pavers",
    categoryLabel: "Industrial Traffic Paver",
    image: "/images/our-divisions/sampan-hollow-bricks/Uni_Paver_222×109.5_mm.png",
    widthSpec: "Wave Interlocking Profile",
  },
  {
    id: "curb-stone-500",
    name: "Precast Concrete Road Curb Stone",
    category: "infrastructure",
    categoryLabel: "Roadway Infrastructure",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Curb_Stone_500 X 400 X 120 mm.png",
    widthSpec: "Standard Roadway Profile",
  },
];

interface FactoryGalleryItem {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
}

// 1 Large featured photograph + 4 smaller photos (all genuine Alfadanga plant photography)
const featuredGalleryPhoto: FactoryGalleryItem = {
  id: "factory-paver-press-stacks",
  title: "Vibro-Press & Staged Paver Stacks",
  badge: "FEATURED OPERATION",
  image: "/images/our-divisions/sampan-hollow-bricks/production-press-pavers.webp",
  description:
    "Freshly pressed red interlocking uni-pavers stacked on production boards beside the automated forming press at the Alfadanga facility.",
};

const smallerGalleryPhotos: FactoryGalleryItem[] = [
  {
    id: "factory-exterior-shed",
    title: "Plant Infrastructure & Production Shed",
    badge: "PLANT EXTERIOR",
    image: "/images/our-divisions/sampan-hollow-bricks/plant-exterior.webp",
    description:
      "The SHBT manufacturing facility and dispatch yard located inside Sampan Industrial Park, Alfadanga.",
  },
  {
    id: "factory-pavers-stamped",
    title: "Finished Pavers on Curing Pallets",
    badge: "SHBT STAMPED",
    image: "/images/our-divisions/sampan-hollow-bricks/1.jpeg",
    description:
      "Freshly molded red interlocking uni-pavers bearing the official SHBT identifier resting on wooden pallets.",
  },
  {
    id: "factory-hollow-batch",
    title: "Yard Dispatch & Forklift Staging",
    badge: "YARD DISPATCH",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products.jpg",
    description:
      "Forklift handling and palletized concrete blocks staged for loading in the Alfadanga plant yard.",
  },
  {
    id: "factory-stack-cured",
    title: "Cured Block Storage Bay",
    badge: "STORAGE BAY",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products3.jpg",
    description:
      "Stacked concrete hollow masonry blocks arranged in the curing and bulk staging area.",
  },
];

interface ParkingTile {
  id: string;
  image: string;
}

const parkingTilesCollection: ParkingTile[] = [
  { id: "pt-1", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-1.jpg" },
  { id: "pt-2", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-2.jpg" },
  { id: "pt-3", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-3.jpg" },
  { id: "pt-4", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-4.jpg" },
  { id: "pt-5", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-5.jpg" },
  { id: "pt-6", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-6.jpg" },
  { id: "pt-7", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-7.jpg" },
  { id: "pt-8", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-8.jpg" },
  { id: "pt-9", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-9.jpg" },
  { id: "pt-10", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-10.jpg" },
];

interface ModalItem {
  image: string;
  title: string;
  category?: string;
  description?: string;
}

export default function SampanHollowBricksTilesClient() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedModalItem, setSelectedModalItem] = useState<ModalItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products", count: mainProducts.length },
    { id: "blocks", label: "Hollow & Solid Blocks", count: mainProducts.filter((p) => p.category === "blocks").length },
    { id: "pavers", label: "Interlocking Pavers", count: mainProducts.filter((p) => p.category === "pavers").length },
    { id: "infrastructure", label: "Roadway Curb Stones", count: mainProducts.filter((p) => p.category === "infrastructure").length },
  ];

  const filteredProducts = activeCategory === "all"
    ? mainProducts
    : mainProducts.filter((p) => p.category === activeCategory);

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
        // 1. Hero Entrance Timeline (Plays smoothly on initial page load with stagger)
        const heroTl = gsap.timeline({ delay: 0.2 });

        heroTl
          .fromTo(
            ".hero-line-mask",
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1.3,
              ease: "power4.out",
              stagger: 0.15,
            }
          )
          .fromTo(
            ".hero-fade-up",
            { y: 28, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.12,
            },
            "-=0.8"
          );

        // 2. Line mask slow reveal for subsequent section headings on scroll
        gsap.utils
          .toArray<HTMLElement>(".line-mask:not(.hero-line-mask)")
          .forEach((line) => {
            gsap.fromTo(
              line,
              { yPercent: 100 },
              {
                yPercent: 0,
                duration: 1.4,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: line.parentElement!,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
          });

        // 3. Reveal fade-up for content, cards, badges on scroll
        gsap.utils
          .toArray<HTMLElement>(".fade-up:not(.hero-fade-up)")
          .forEach((el) => {
            gsap.fromTo(
              el,
              { y: 28, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  toggleActions: "play none none none",
                },
              }
            );
          });

        // 4. Parallax image reveal with scrub
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
        gsap.set([".line-mask", ".fade-up", ".hero-line-mask", ".hero-fade-up"], {
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
      className="bg-[#fcfbf9] text-[#1a1714] selection:bg-red-700 selection:text-white"
    >

      {/* ================= 1. HERO SECTION (FULL HEIGHT & ENHANCED CONTRAST) ================= */}
      <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#140b0b] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src={heroBackground}
              alt="Sampan Hollow Bricks Plant"
              sizes="100vw"
              className="w-full h-full object-cover object-center opacity-70"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30 z-10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-6">

            {/* Headline with Slow Line-Mask Reveal */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              <div className="overflow-hidden">
                <div className="hero-line-mask line-mask">Sampan</div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-line-mask line-mask text-red-500 block mt-1">
                  Hollow Bricks &amp; Tiles
                </div>
              </div>
            </h1>

            {/* Subheadline with high-contrast semi-transparent backing overlay */}
            <div className="hero-fade-up fade-up relative max-w-xl">
              <div className="absolute -inset-x-3 -inset-y-2 bg-black/50 backdrop-blur-[2px] rounded-none -z-10 border-l-2 border-red-500" />
              <p className="text-xs sm:text-sm md:text-base text-neutral-100 leading-relaxed font-light tracking-wide pl-4 py-1">
                Automated eco-friendly concrete hollow blocks, solid masonry, interlocking pavers, and surface pattern paving plant inside Sampan Industrial Park, Alfadanga, Faridpur.
              </p>
            </div>

            {/* Hero Primary Actions with Fade-Up */}
            <div className="hero-fade-up fade-up mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("products")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-red-700 hover:bg-red-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <span>Product Catalogue</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Production Photos
              </button>

              <button
                onClick={() => scrollTo("patterns")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Paver Patterns
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-none border border-red-500/40 bg-red-950/30 hover:bg-red-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Wholesale Inquiries
              </Link>
            </div>

            {/* Quick Metrics with Fade-Up (Divided Bar styled like PET & Beverage) */}
            <div className="hero-fade-up fade-up mt-10 pt-8 border-t border-white/20">
              <div className="inline-grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20 bg-black/45 backdrop-blur-md border border-white/15 p-4 sm:p-5 rounded-none shadow-2xl">
                <div className="px-3 sm:px-6 first:pl-2">
                  <p className="text-[10px] sm:text-xs text-red-400 font-mono uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-sm sm:text-lg font-bold text-white uppercase tracking-wider mt-0.5">Alfadanga</p>
                  <p className="text-[11px] text-neutral-300 font-mono hidden sm:block mt-0.5">Faridpur District</p>
                </div>
                <div className="px-3 sm:px-6">
                  <p className="text-[10px] sm:text-xs text-red-400 font-mono uppercase tracking-widest font-semibold">Ecology</p>
                  <p className="text-sm sm:text-lg font-bold text-white uppercase tracking-wider mt-0.5">Zero Burning</p>
                  <p className="text-[11px] text-neutral-300 font-mono hidden sm:block mt-0.5">Non-Fired Concrete</p>
                </div>
                <div className="px-3 sm:px-6">
                  <p className="text-[10px] sm:text-xs text-red-400 font-mono uppercase tracking-widest font-semibold">Technology</p>
                  <p className="text-sm sm:text-lg font-bold text-white uppercase tracking-wider mt-0.5">Vibro-Press</p>
                  <p className="text-[11px] text-neutral-300 font-mono hidden sm:block mt-0.5">Automated Molding</p>
                </div>
                <div className="px-3 sm:px-6 last:pr-2">
                  <p className="text-[10px] sm:text-xs text-red-400 font-mono uppercase tracking-widest font-semibold">Variety</p>
                  <p className="text-sm sm:text-lg font-bold text-white uppercase tracking-wider mt-0.5">10+ Patterns</p>
                  <p className="text-[11px] text-neutral-300 font-mono hidden sm:block mt-0.5">Pavers &amp; Blocks</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. CORE PRODUCTS CATALOGUE ================= */}
      <section id="products" className="scroll-mt-20 py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="fade-up flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-700">
                  Engineered Product Catalogue
                </p>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                <div className="overflow-hidden">
                  <div className="line-mask">Hollow blocks &amp; solid masonry.</div>
                </div>
                <div className="overflow-hidden">
                  <div className="line-mask text-red-700">Pavers &amp; roadway curb stones.</div>
                </div>
              </h2>
              <p className="fade-up mt-3 max-w-xl text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Concrete hollow blocks, solid masonry units, and traffic pavers manufactured for multi-storey structures, boundary walls, and infrastructure roads.
              </p>
            </div>

            {/* Request Bulk Price Quote Button (Prominent near Catalogue Heading) */}
            <div className="fade-up shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Request Bulk Price Quote</span>
                <FiArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="fade-up flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-6 border-b border-neutral-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-red-700 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-2 text-[10px] ${activeCategory === cat.id ? "text-white/80" : "text-neutral-500"}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* Standardized Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() =>
                  setSelectedModalItem({
                    image: product.image,
                    title: product.name,
                    category: product.categoryLabel,
                    description: product.widthSpec,
                  })
                }
                className="fade-up group relative flex flex-col justify-between rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-red-600 transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full z-20" />

                {/* Standardized Image Container: Fixed Height, Consistent Neutral Background, Uniform Product Display Size */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-neutral-50/70 border-b border-neutral-100 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="max-h-36 max-w-[75%] sm:max-h-40 sm:max-w-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white bg-red-700 px-2.5 py-1">
                      <FaExpand className="text-[9px]" /> Enlarge
                    </span>
                  </div>
                </div>

                {/* Standardized Card Body: Predictable Spacing & Honest Width Specifications */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-neutral-950 group-hover:text-red-700 transition-colors leading-snug">
                      {product.name}
                    </h3>

                    {/* Width Specification Pill */}
                    {product.widthSpec && (
                      <div className="mt-2.5">
                        <span className="inline-flex items-center font-mono text-[11px] font-medium text-neutral-600 bg-neutral-100 border border-neutral-200/80 px-2.5 py-0.5">
                          {product.widthSpec}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. PRODUCTION PHOTOGRAPHS (INTENTIONAL 1 + 4 HIERARCHY) ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#faf9f6] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl mb-12">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-700">
                Alfadanga Manufacturing Facility
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Production Photographs</div>
              </div>
            </h2>
            <p className="fade-up mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
              Photographs documenting the actual automated vibro-compaction molding unit, cured paver inventory, and dispatch operations inside Sampan Industrial Park.
            </p>
          </div>

          {/* 1 Large Featured Photograph + 4 Smaller Photos in 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Featured Large Photograph (Left) */}
            <article
              onClick={() =>
                setSelectedModalItem({
                  image: featuredGalleryPhoto.image,
                  title: featuredGalleryPhoto.title,
                  category: featuredGalleryPhoto.badge,
                  description: featuredGalleryPhoto.description,
                })
              }
              className="fade-up lg:col-span-6 xl:col-span-7 group flex flex-col justify-between bg-white border border-neutral-200/90 rounded-none overflow-hidden hover:border-red-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] xl:h-[450px] overflow-hidden bg-neutral-900">
                <div className="parallax-img absolute inset-0 w-full h-[114%] -top-[7%]">
                  <img
                    src={featuredGalleryPhoto.image}
                    alt={featuredGalleryPhoto.title}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center rounded-none bg-black/85 backdrop-blur-md px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-red-400 border border-red-500/40 shadow-sm">
                    {featuredGalleryPhoto.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-10">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white bg-red-700 px-3 py-1.5">
                    <FaExpand className="text-[10px]" /> Click to Enlarge
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 group-hover:text-red-700 transition-colors leading-snug">
                    {featuredGalleryPhoto.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {featuredGalleryPhoto.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Sampan Industrial Park</span>
                  <span className="text-red-700 font-bold">Alfadanga Plant</span>
                </div>
              </div>
            </article>

            {/* 4 Smaller Photos Arranged in 2 Columns (Right) */}
            <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {smallerGalleryPhotos.map((item) => (
                <article
                  key={item.id}
                  onClick={() =>
                    setSelectedModalItem({
                      image: item.image,
                      title: item.title,
                      category: item.badge,
                      description: item.description,
                    })
                  }
                  className="fade-up group flex flex-col justify-between bg-white border border-neutral-200/90 rounded-none overflow-hidden hover:border-red-600 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                    <div className="parallax-img absolute inset-0 w-full h-[114%] -top-[7%]">
                      <img
                        src={item.image}
                        alt={item.title}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="inline-flex items-center rounded-none bg-black/80 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-red-400 border border-red-500/30">
                        {item.badge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5 z-10">
                      <span className="inline-flex items-center gap-1 font-mono text-[9px] text-white bg-red-700 px-2 py-0.5">
                        <FaExpand className="text-[8px]" /> Enlarge
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950 group-hover:text-red-700 transition-colors leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-[11px] text-neutral-600 leading-relaxed font-light line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span>Alfadanga Complex</span>
                      <span className="text-red-700 font-bold">Verified</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. PAVER PATTERNS & FINISHES ================= */}
      <section id="patterns" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c0909] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="fade-up flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-400">
                  Surface Finishes &amp; Textures
                </p>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                <div className="overflow-hidden">
                  <div className="line-mask">Paver Patterns &amp; Finishes</div>
                </div>
              </h2>
            </div>
            <p className="fade-up max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Explore the available patterns and surface designs for outdoor paving applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {parkingTilesCollection.map((tile, idx) => (
              <div
                key={tile.id}
                onClick={() =>
                  setSelectedModalItem({
                    image: tile.image,
                    title: `Paver Pattern Design #${idx + 1}`,
                    category: "Paver Patterns & Surface Finishes",
                  })
                }
                className="fade-up group relative aspect-square w-full bg-[#161010] border border-white/10 hover:border-red-500 rounded-none overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="parallax-img absolute inset-0 w-full h-[114%] -top-[7%]">
                  <img
                    src={tile.image}
                    alt={`Paver Pattern Design #${idx + 1}`}
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5 z-10">
                  <span className="font-mono text-[9px] text-white flex items-center gap-1">
                    <FaExpand className="text-[8px]" /> Enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-up mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <p>Patterns shown represent available surface finish and texture options for commercial and residential paving.</p>
            <Link
              href="/contact"
              className="text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Inquire About Patterns</span>
              <FiArrowRight className="text-xs" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= 5. MANUFACTURING HUB SECTION ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#1a0f0f] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="fade-up border border-white/10 bg-[#221414] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-none">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-400">
                Inside Sampan Industrial Park
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white">
                <div className="overflow-hidden">
                  <div className="line-mask">Manufacturing Hub in Alfadanga, Faridpur</div>
                </div>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Sampan Hollow Bricks &amp; Tiles operates directly within the Sampan Industrial Park complex in Alfadanga, Faridpur, co-located with sister manufacturing units including Sampan PET &amp; Beverage.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-industrial-park"
                className="inline-flex items-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>View Industrial Park</span>
                <FiArrowRight className="text-xs" />
              </Link>
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-pet-beverage"
                className="inline-flex items-center gap-2 rounded-none border border-white/25 hover:border-white hover:bg-white hover:text-black text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>PET &amp; Beverage Plant</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. PLANT LOCATION & B2B INQUIRIES ================= */}
      <section id="location" className="scroll-mt-20 py-16 sm:py-20 pb-20 sm:pb-24 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-10">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-700">
                Supply &amp; Distribution
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Plant Location &amp; B2B Inquiries</div>
              </div>
            </h2>
            <p className="fade-up mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Located inside{" "}
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-industrial-park"
                className="text-red-700 underline hover:text-red-600 font-medium transition-colors"
              >
                Sampan Industrial Park
              </Link>
              , Alfadanga, Faridpur. Contact our commercial desk for bulk supply, contractor orders, or custom brick and paver projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Sampan Industrial Park (Host Complex) */}
            <div className="fade-up bg-white border border-[#e2e5e9] p-7 sm:p-8 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-red-600/70 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-neutral-100">
                  <div className="h-12 flex items-center">
                    <img
                      src="/images/brand/industrialpark.png"
                      alt="Sampan Industrial Park Logo"
                      className="h-11 w-auto object-contain"
                    />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/80 px-2.5 py-1">
                    Host Complex
                  </span>
                </div>

                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Location &amp; Logistics
                </span>
                <h3 className="text-xl font-bold text-neutral-950 mt-1">
                  Sampan Industrial Park
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-mono">
                  Sampan Hollow Bricks &amp; Tiles <br />
                  Sampan Industrial Park <br />
                  Alfadanga, Faridpur, Bangladesh
                </p>

                <p className="mt-3 text-xs text-neutral-500 leading-relaxed font-light">
                  Master-planned industrial park with dedicated substation power, heavy trailer loading bays, and secure logistics dispatch.
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href="/our-divisions/manufacturing-industrial/sampan-industrial-park"
                  className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-red-700 hover:text-red-600 transition-colors"
                >
                  <span>Explore Park</span>
                  <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-red-700 font-bold text-[11px] font-mono">Host Unit</span>
              </div>
            </div>

            {/* Card 2: Co-Located Sister Facility (Sampan PET & Beverage) */}
            <div className="fade-up bg-white border border-[#e2e5e9] p-7 sm:p-8 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-red-600/70 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-neutral-100">
                  <div className="h-12 flex items-center">
                    <img
                      src="/images/brand/petandbeverage.png"
                      alt="Sampan PET & Beverage Logo"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1">
                    Sister Plant
                  </span>
                </div>

                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Co-Located Manufacturing
                </span>
                <h3 className="text-xl font-bold text-neutral-950 mt-1">
                  PET &amp; Beverage
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-mono">
                  Operating inside same park complex <br />
                  Alfadanga, Faridpur, Bangladesh
                </p>

                <p className="mt-3 text-xs text-neutral-500 leading-relaxed font-light">
                  Food-grade preforms and hygienic beverage bottling facility operating within the same industrial park infrastructure.
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href="/our-divisions/manufacturing-industrial/sampan-pet-beverage"
                  className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-red-700 hover:text-red-600 transition-colors"
                >
                  <span>Explore PET Plant</span>
                  <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-emerald-700 font-bold text-[11px] font-mono">Sister Unit</span>
              </div>
            </div>

            {/* Card 3: B2B Commercial Desk & Quote CTA (NO TIMING PART) */}
            <div className="fade-up bg-white border border-[#e2e5e9] p-7 sm:p-8 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-red-600/70 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-neutral-100">
                  <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center text-red-700 rounded-none shadow-xs">
                    <FaPhoneAlt className="text-base" />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/80 px-2.5 py-1">
                    Commercial Desk
                  </span>
                </div>

                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Direct Inquiries &amp; Supply
                </span>
                <h3 className="text-xl font-bold text-neutral-950 mt-1">
                  B2B Supply Desk
                </h3>

                <div className="mt-2 text-xs sm:text-sm text-neutral-700 space-y-2 font-mono">
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-red-600 text-xs shrink-0" />
                    <a href="tel:+8801929918400" className="text-red-700 font-bold hover:underline">
                      +880 1929-918400
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-red-600 text-xs shrink-0" />
                    <a href="mailto:info@sampangroup.com.bd" className="text-red-700 font-bold hover:underline break-all">
                      info@sampangroup.com.bd
                    </a>
                  </p>
                </div>
              </div>

              {/* Elevated CTA button */}
              <div className="pt-4 mt-5 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer w-full shadow-sm hover:shadow-md text-center"
                >
                  <span>REQUEST WHOLESALE QUOTE</span>
                  <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Location Map Box (Alfadanga, Faridpur, Bangladesh) */}
          <div className="fade-up mt-8 border border-neutral-300 bg-white p-2.5 sm:p-3.5 shadow-sm">
            {/* Top Bar with Live Indicator & Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-2.5 mb-2 border-b border-neutral-200">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 min-w-0">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
                <span className="font-bold text-neutral-900 uppercase tracking-wider shrink-0">Map:</span>
                <span className="truncate">Alfadanga, Faridpur, Bangladesh</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Alfadanga,+Faridpur,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-red-700 hover:text-red-950 transition-colors shrink-0"
              >
                <span>Open in Maps</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-neutral-100 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Alfadanga+Faridpur+Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alfadanga, Faridpur Regional Map"
                className="w-full h-full"
              />
            </div>

            {/* Below the map: Text Link */}
            <div className="mt-3 px-2 py-1.5 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
              <span className="text-neutral-500">
                Alfadanga Regional Area • Faridpur District
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Alfadanga,+Faridpur,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-red-700 hover:text-red-800 hover:underline transition-colors"
              >
                <span>VIEW ALFADANGA ON GOOGLE MAPS</span>
                <span className="text-sm font-sans">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedModalItem && (
        <div
          onClick={() => setSelectedModalItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedModalItem(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-red-700 transition-colors cursor-pointer z-30"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-[#141010] flex flex-col"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#1a1414] flex items-center justify-center p-6">
              <img
                src={selectedModalItem.image}
                alt={selectedModalItem.title}
                sizes="(max-width: 768px) 100vw, 80vw"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#1c1414] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                {selectedModalItem.category && (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    {selectedModalItem.category}
                  </span>
                )}
                <h4 className="text-lg font-bold text-white">
                  {selectedModalItem.title}
                </h4>
                {selectedModalItem.description && (
                  <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                    {selectedModalItem.description}
                  </p>
                )}
              </div>

              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Inquire Wholesale</span>
                <FiArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
