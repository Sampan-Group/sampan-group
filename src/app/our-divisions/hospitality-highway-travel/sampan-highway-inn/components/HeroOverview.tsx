"use client";

import Link from "next/link";
import { FaRoute, FaCompass, FaChevronDown, FaFacebookF } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const heroImage = "/images/our-divisions/sampan-highway-inn/latest/sampan-highway-inn-night-facade.webp";

const quickMetrics = [
  { value: "24 / 7", label: "Highway hospitality" },
  { value: "Rest & Recharge", label: "Comfortable suites" },
  { value: "KM 103", label: "Dhaka–Khulna Highway" },
  { value: "Convenient Parking", label: "Easy highway access" },
];

export default function HeroOverview() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-neutral-950 text-white pt-24 sm:pt-28 border-b border-white/10">
      {/* Keep the illuminated facade visible, with a closer crop on small screens. */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="parallax-hero absolute inset-0 w-full h-[135%] -top-[15%]">
          <img
            src={heroImage}
            alt="Sampan Highway Inn Kashiani"
            sizes="100vw"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[42%_58%] sm:object-[center_58%] brightness-[1.04] contrast-[1.02]"
          />
        </div>
        {/* Concentrate shading behind the copy and let the right-hand facade shine. */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(3,12,8,0.72),rgba(3,12,8,0.4))] sm:bg-[linear-gradient(90deg,rgba(3,12,8,0.78)_0%,rgba(3,12,8,0.55)_38%,rgba(3,12,8,0.16)_72%,rgba(3,12,8,0.04)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(3,12,8,0.8)_0%,transparent_38%,transparent_75%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      {/* In-Page Navigation Header Bar (Commented out to prevent visual conflict with main site navbar)
      <nav
        aria-label="Highway Inn Navigation"
        className="relative z-20 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider uppercase text-[#B8F230]">KM 103</span>
          <span className="text-white/40">•</span>
          <span className="text-neutral-300 hidden sm:inline">Kashiani, Dhaka–Khulna Corridor</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-neutral-300 font-medium">
          <button onClick={() => scrollTo("experiences")} className="hover:text-[#B8F230] transition-colors cursor-pointer">
            Experiences
          </button>
          <button onClick={() => scrollTo("dining")} className="hover:text-[#B8F230] transition-colors cursor-pointer">
            Dining
          </button>
          <button onClick={() => scrollTo("suites")} className="hover:text-[#B8F230] transition-colors cursor-pointer">
            Rest Suites
          </button>
          <button onClick={() => scrollTo("convenience")} className="hover:text-[#B8F230] transition-colors cursor-pointer">
            Convenience
          </button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-[#B8F230] transition-colors cursor-pointer">
            Gallery
          </button>
          <button onClick={() => scrollTo("nearby")} className="hover:text-[#B8F230] transition-colors cursor-pointer">
            Nearby
          </button>
          <button onClick={() => scrollTo("location")} className="hover:text-[#B8F230] transition-colors cursor-pointer">
            Find Us
          </button>
        </div>

        <button
          onClick={() => scrollTo("location")}
          className="inline-flex items-center gap-1.5 border border-white/30 hover:border-[#B8F230] hover:text-[#B8F230] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          <span>Plan Your Stop</span>
          <FiArrowUpRight className="text-sm" />
        </button>
      </nav>
      */}

      {/* Main Hero Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12 sm:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Badge */}
          <div className="hero-fade-up flex items-center gap-3 flex-wrap">
            <span className="h-0.5 w-8 bg-[#B8F230]" />
            <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#B8F230]">
              Welcome to Sampan Highway Inn
            </p>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 hidden sm:inline">
              KM 103 Kashiani
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.6rem,5.6vw,5rem)] font-bold tracking-tight text-white leading-[1.02]">
            <div className="overflow-hidden">
              <div className="hero-line-mask line-mask">More than a stop.</div>
            </div>
            <div className="overflow-hidden mt-1 sm:mt-2">
              <div className="hero-line-mask line-mask text-[#B8F230]">A destination.</div>
            </div>
          </h1>

          {/* Tagline */}
          <p className="hero-fade-up text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
            A refreshing break in every journey. Discover 24/7 dining, inviting rest suites and thoughtful highway hospitality at Kashiani on the Dhaka–Khulna corridor.
          </p>

          {/* Clear Actions */}
          <div className="hero-fade-up pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("dining")}
              className="inline-flex items-center justify-center gap-2 bg-[#B8F230] hover:bg-[#a6dc28] text-neutral-950 font-bold px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 shadow-lg cursor-pointer text-center"
            >
              <span>Explore Dining</span>
              <FiArrowUpRight className="text-base" />
            </button>

            <button
              onClick={() => scrollTo("location")}
              className="inline-flex items-center justify-center gap-2 border border-white/30 bg-black/40 hover:bg-white hover:text-neutral-950 text-white font-bold px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
            >
              <FaRoute className="text-[#B8F230]" />
              <span>Plan Your Visit</span>
              <FiArrowUpRight className="text-base" />
            </button>

            <a
              href="https://www.facebook.com/sampanhighwayinn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-[#1877F2]/40 bg-[#1877F2]/10 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white text-white font-bold px-6 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 backdrop-blur-sm text-center"
            >
              <FaFacebookF className="text-sm text-[#1877F2] group-hover:text-white transition-colors" />
              <span>Facebook</span>
              <FiArrowUpRight className="text-base text-neutral-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Quick Metrics Bar */}
      <div className="relative z-20 border-t border-white/15 bg-black/45 backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {quickMetrics.map((metric, i) => (
              <div key={i} className="fade-up space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-light">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
