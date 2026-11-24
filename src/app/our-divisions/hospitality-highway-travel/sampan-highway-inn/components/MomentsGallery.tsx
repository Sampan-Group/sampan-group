"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./MomentsGallery.module.css";

interface GalleryPhoto {
  id: number;
  title: string;
  label: string;
  category: "all" | "dining" | "exterior" | "convenience";
  categoryLabel: string;
  image: string;
  caption: string;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

function LightboxPhoto({ photo }: { photo: GalleryPhoto }) {
  const [displayedPhoto, setDisplayedPhoto] = useState(photo);
  const [failedPhoto, setFailedPhoto] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    const image = new window.Image();
    image.src = photo.image;
    // Retain the previous photograph until the next one is ready to crossfade.
    void image.decode().then(() => {
      if (!cancelled) {
        setDisplayedPhoto(photo);
        setFailedPhoto(null);
      }
    }).catch(() => {
      if (!cancelled) setFailedPhoto(photo.id);
    });
    return () => { cancelled = true; };
  }, [photo]);

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.img
          key={displayedPhoto.id}
          src={displayedPhoto.image}
          alt={displayedPhoto.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </AnimatePresence>
      {(displayedPhoto.id !== photo.id || failedPhoto === photo.id) && (
        <span role="status" className="absolute top-3 z-10 bg-black/70 px-3 py-2 text-sm text-white">
          {failedPhoto === photo.id ? "Unable to load this photo." : "Loading photo…"}
        </span>
      )}
    </>
  );
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: "Illuminated Night Facade & Parking Plaza",
    label: "A warm welcome, day or night",
    category: "exterior",
    categoryLabel: "Exterior Plaza",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-highway-inn-night-facade.webp",
    caption: "Direct highway frontage with multi-tiered lighting, Pubali Bank ATM booth & illuminated plaza.",
  },
  {
    id: 2,
    title: "Main Family Dining Hall",
    label: "Room for the whole family",
    category: "dining",
    categoryLabel: "Dining",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-family-dining-hall.webp",
    caption: "Spacious air-conditioned dining area with ambient chandeliers, concentric tile flooring, and comfortable family tables.",
  },
  {
    id: 3,
    title: "Executive Restaurant & Ambient Lounges",
    label: "Settle in. Savour the moment.",
    category: "dining",
    categoryLabel: "Dining",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_070207.jpg",
    caption: "Custom marble tables, quilted armchairs, and warm filament pendant fixtures for relaxed corridor meals.",
  },
  {
    id: 4,
    title: "Sampan Mart 24/7 Courtyard Super Shop",
    label: "Essentials, around the clock",
    category: "convenience",
    categoryLabel: "Convenience",
    image: "/images/our-divisions/sampan-highway-inn/latest/sampan-mart-24-7-courtyard.webp",
    caption: "Paved courtyard walk-up shop for road snacks, travel toiletries, fresh bakery & ice cream.",
  },
  {
    id: 5,
    title: "Sampan Juice Bar & Soft Serve Parlor",
    label: "Fresh flavours & little treats",
    category: "dining",
    categoryLabel: "Dining",
    image: "/images/our-divisions/sampan-highway-inn/Sampan Highway Inn/IMG_20250916_065448 (1).jpg",
    caption: "Freshly squeezed seasonal fruits, shakes, and soft-serve ice cream stall.",
  },
  {
    id: 6,
    title: "Luxury Washrooms & LED Vanity Mirrors",
    label: "Refresh before the road",
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
  const galleryRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lightboxOpen = lightboxIndex !== null;

  const filtered = activeCategory === "all"
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-gallery-parallax]").forEach((image) => {
        gsap.fromTo(image, { yPercent: -8, scale: 1.04 }, {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: image.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      });
    });
    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-gallery-parallax]", { y: 0, yPercent: 0, scale: 1 });
    });
    return () => media.revert();
  }, { scope: galleryRef, dependencies: [activeCategory], revertOnUpdate: true });

  useEffect(() => {
    if (!lightboxOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const step = event.key === "ArrowRight" ? 1 : -1;
        setLightboxIndex(current => current === null ? null : (current + step + filtered.length) % filtered.length);
      }
      if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [lightboxOpen, filtered.length]);

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
    <section ref={galleryRef} id="gallery" className="bg-[#F8FAFC] py-24 sm:py-32 border-b border-neutral-200 text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="fade-up flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#C3161C]" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#005A91]">
                Moments at Sampan
              </p>
            </div>
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold tracking-tight text-neutral-950 leading-[1.05]">
              <div className="overflow-hidden">
                <div className="line-mask">A glimpse of the</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#005A91]">experience.</div>
              </div>
            </h2>
          </div>
          <p className="fade-up max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            A visual story of the places, flavors and moments that make a highway stop memorable.
          </p>
        </div>

        <div className="fade-up mb-8 flex flex-col justify-between gap-4 border-b border-neutral-200 sm:mb-10 lg:flex-row lg:items-end">
          <div role="group" aria-label="Filter gallery photos" className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={activeCategory === cat.id}
              onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
              className={`-mb-px border-b-2 px-1 pb-4 pt-2 text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0069A8] ${activeCategory === cat.id
                  ? "border-[#005A91] text-[#06466E]"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
                }`}
            >
              {cat.label}
            </button>
          ))}
          </div>
          <p aria-live="polite" className="pb-4 text-sm text-neutral-500">
            {filtered.length} {filtered.length === 1 ? "photograph" : "photographs"}
          </p>
        </div>

        {/* A generous feature photograph, stacked details, then a supporting row. */}
        <div className={`${styles.photoGrid} ${filtered.length < 3 ? styles.filteredGrid : ""} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5`}>
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`View ${item.title}`}
              aria-haspopup="dialog"
              onClick={() => setLightboxIndex(index)}
              className={`group relative isolate overflow-hidden bg-neutral-900 text-left text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0069A8] ${filtered.length === 1
                ? "sm:col-span-2 lg:col-span-12"
                : filtered.length === 2
                  ? "lg:col-span-6"
                  : index === 0
                    ? "sm:col-span-2 sm:row-span-2 lg:col-span-7"
                    : index < 3
                      ? "lg:col-span-5"
                      : index === 5 ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-4"}`}
            >
              <span data-gallery-parallax className="absolute -top-[10%] left-0 h-[120%] w-full">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                sizes={filtered.length === 1 ? "(max-width: 1440px) 100vw, 1312px" : index === 0 && filtered.length > 2 ? "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 58vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-visible:scale-[1.03] ${item.category === "exterior" ? "object-[center_60%]" : "object-center"}`}
              />
              </span>
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <span aria-hidden="true" className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#061B2B]">
                <FaExpand className="text-sm" />
              </span>
              <span className={`absolute inset-x-0 bottom-0 z-20 p-6 ${index === 0 && filtered.length !== 2 ? "sm:p-8" : ""}`}>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/80">{item.categoryLabel}</span>
                <span className={`block font-semibold leading-tight tracking-tight ${index === 0 && filtered.length !== 2 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"}`}>{item.label}</span>
                {index === 0 && filtered.length !== 2 && <span className="mt-3 hidden max-w-md text-sm leading-relaxed text-white/80 sm:block">Explore the spaces that make a Sampan stop special.</span>}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 bg-black/90 backdrop-blur-md"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="highway-gallery-photo-title"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[calc(100dvh-2rem)] max-w-5xl w-full overflow-y-auto bg-neutral-950 border border-white/20 p-4 sm:p-6 text-white shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close photo viewer"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 text-white/70 hover:text-white p-2 text-lg"
            >
              <FaTimes />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center mb-4">
              <LightboxPhoto photo={filtered[lightboxIndex]} />

              <button
                type="button"
                aria-label="Previous photo"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 bg-black/60 hover:bg-black/90 p-3 text-white border border-white/20"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              <button
                type="button"
                aria-label="Next photo"
                onClick={handleNext}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 bg-black/60 hover:bg-black/90 p-3 text-white border border-white/20"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-[#FCB813] uppercase font-bold tracking-wider block mb-1">
                  {filtered[lightboxIndex].categoryLabel} • {lightboxIndex + 1} of {filtered.length}
                </span>
                <h4 id="highway-gallery-photo-title" className="text-sm sm:text-base font-bold text-white">
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

