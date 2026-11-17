"use client";

import { useState } from "react";
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

interface GalleryPhoto {
  id: number;
  title: string;
  category: "all" | "dining" | "exterior" | "convenience";
  categoryLabel: string;
  image: string;
  caption: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: "Illuminated Night Facade & Parking Plaza",
    category: "exterior",
    categoryLabel: "Exterior Plaza",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-highway-inn-night-facade.webp",
    caption: "Direct highway frontage with multi-tiered lighting, Pubali Bank ATM booth & illuminated plaza.",
  },
  {
    id: 2,
    title: "Main Family Dining Hall",
    category: "dining",
    categoryLabel: "Dining",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-dining-hall-interior.webp",
    caption: "Spacious air-conditioned dining area with ambient chandeliers, concentric tile flooring, and comfortable family tables.",
  },
  {
    id: 3,
    title: "Executive Restaurant & Ambient Lounges",
    category: "dining",
    categoryLabel: "Dining",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_070207.jpg",
    caption: "Custom marble tables, quilted armchairs, and warm filament pendant fixtures for relaxed corridor meals.",
  },
  {
    id: 4,
    title: "Sampan Mart 24/7 Courtyard Super Shop",
    category: "convenience",
    categoryLabel: "Convenience",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-mart-24-7-courtyard.webp",
    caption: "Paved courtyard walk-up shop for road snacks, travel toiletries, fresh bakery & ice cream.",
  },
  {
    id: 5,
    title: "Sampan Juice Bar & Soft Serve Parlor",
    category: "dining",
    categoryLabel: "Dining",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_065448 (1).jpg",
    caption: "Freshly squeezed seasonal fruits, shakes, and soft-serve ice cream stall.",
  },
  {
    id: 6,
    title: "Luxury Washrooms & LED Vanity Mirrors",
    category: "convenience",
    categoryLabel: "Convenience",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-luxury-washroom-vanity.webp",
    caption: "Spotless hygienic washrooms with circular backlight vanity mirrors and continuous sanitation.",
  },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "dining", label: "Dining & Cuisine" },
  { id: "exterior", label: "Exterior & Courtyard" },
  { id: "convenience", label: "Highway Services" },
];

export default function MomentsGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="bg-[#FAF9F6] py-24 sm:py-32 border-b border-neutral-200 text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-emerald-700" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-emerald-800">
                Moments at Sampan
              </p>
            </div>
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold tracking-tight text-neutral-950 leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">A glimpse of the</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-emerald-800">experience.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            A visual story of the places, flavors and moments that make a highway stop memorable.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="fade-up flex flex-wrap gap-2 pb-4 mb-10 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-neutral-950 text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3-Column Uniform Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <article
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="fade-up group relative flex flex-col bg-white border border-neutral-200/90 hover:border-emerald-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <div className="parallax-img absolute inset-0 w-full h-[116%] -top-[8%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white bg-emerald-800 px-3 py-1">
                    <FaExpand className="text-[9px]" /> Click to Expand
                  </span>
                </div>
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-900 border border-neutral-200">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-emerald-800 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-neutral-950 border border-white/20 p-4 sm:p-6 text-white shadow-2xl"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 text-white/70 hover:text-white p-2 text-lg"
            >
              <FaTimes />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center mb-4">
              <img
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />

              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 p-3 text-white border border-white/20"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 p-3 text-white border border-white/20"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-[#B8F230] uppercase font-bold tracking-wider block mb-1">
                  {filtered[lightboxIndex].categoryLabel} • {lightboxIndex + 1} of {filtered.length}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {filtered[lightboxIndex].title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  {filtered[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

