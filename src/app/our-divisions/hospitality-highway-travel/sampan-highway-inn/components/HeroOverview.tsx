"use client";

import { FaRoute, FaFacebookF } from "react-icons/fa";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const heroImage = "/images/our-divisions/sampan-highway-inn/latest/sampan-highway-inn-night-facade.webp";

const quickMetrics = [
  "24/7 Dining",
  "Rest Suites",
  "Kashiani",
  "Parking",
];

export default function HeroOverview() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[580px] lg:h-screen lg:max-h-[860px] flex flex-col justify-center gap-7 sm:gap-9 lg:gap-11 overflow-hidden bg-neutral-950 text-white pt-16 sm:pt-20 pb-6 sm:pb-10 border-b border-white/10">
      {/* Keep the illuminated facade visible, with a closer crop on small screens. */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="parallax-hero absolute inset-0 w-full h-[135%] -top-[15%]">
          <img
            src={heroImage}
            alt="Sampan Highway Inn Kashiani"
            sizes="100vw"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[42%_58%] sm:object-[center_58%] brightness-[1.12] contrast-[1.02]"
          />
        </div>
        {/* Concentrate shading behind the copy and let the right-hand facade shine. */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(3,14,25,0.76)_0%,rgba(3,14,25,0.5)_65%,rgba(3,14,25,0.24)_100%)] sm:bg-[linear-gradient(90deg,rgba(3,14,25,0.8)_0%,rgba(3,14,25,0.54)_38%,rgba(3,14,25,0.1)_72%,rgba(3,14,25,0.02)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(3,14,25,0.8)_0%,transparent_38%,transparent_75%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      {/* In-Page Navigation Header Bar (Commented out to prevent visual conflict with main site navbar)
      <nav
        aria-label="Highway Inn Navigation"
        className="relative z-20 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider uppercase text-[#FCB813]">Open 24/7</span>
          <span className="text-neutral-300 hidden sm:inline">Kashiani, Dhaka–Khulna Corridor</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-neutral-300 font-medium">
          <button onClick={() => scrollTo("experiences")} className="hover:text-[#FCB813] transition-colors cursor-pointer">
            Experiences
          </button>
          <button onClick={() => scrollTo("dining")} className="hover:text-[#FCB813] transition-colors cursor-pointer">
            Dining
          </button>
          <button onClick={() => scrollTo("suites")} className="hover:text-[#FCB813] transition-colors cursor-pointer">
            Rest Suites
          </button>
          <button onClick={() => scrollTo("convenience")} className="hover:text-[#FCB813] transition-colors cursor-pointer">
            Convenience
          </button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-[#FCB813] transition-colors cursor-pointer">
            Gallery
          </button>
          <button onClick={() => scrollTo("nearby")} className="hover:text-[#FCB813] transition-colors cursor-pointer">
            Nearby
          </button>
          <button onClick={() => scrollTo("location")} className="hover:text-[#FCB813] transition-colors cursor-pointer">
            Find Us
          </button>
        </div>

        <button
          onClick={() => scrollTo("location")}
          className="inline-flex items-center gap-1.5 border border-white/30 hover:border-[#FCB813] hover:text-[#FCB813] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          <span>Plan Your Stop</span>
          <FiArrowUpRight className="text-sm" />
        </button>
      </nav>
      */}

      {/* Main Hero Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl space-y-4">
          {/* Eyebrow Badge */}
          <div className="hero-fade-up flex items-center gap-2.5 flex-wrap">
            <span className="h-0.5 w-6 bg-[#FCB813]" />
            <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FCB813]">
              Stay. Dine. Recharge.
            </p>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-medium hidden sm:inline">
              Kashiani
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            <div className="overflow-hidden pb-1 -mb-1">
              <div className="hero-line-mask line-mask text-white">Sampan</div>
            </div>
            <div className="overflow-hidden mt-0.5 pb-1.5 -mb-1.5">
              <div className="hero-line-mask line-mask text-[#FCB813]">Highway Inn</div>
            </div>
          </h1>

          {/* Tagline */}
          <p className="hero-fade-up text-xs sm:text-sm md:text-base text-white max-w-xl leading-relaxed font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
            {/* A refreshing break in every journey. Discover 24/7 dining, inviting rest suites and highway hospitality.   */}
            Dine, unwind, and recharge along the Dhaka–Khulna Highway.
          </p>

          {/* Clear Actions */}
          <div className="hero-fade-up pt-1 flex flex-col gap-2.5 w-full max-w-sm sm:max-w-xl">
            {/* Buttons: stacked on mobile, side by side on desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full">
              <button
                onClick={() => scrollTo("dining")}
                className="flex-1 flex items-center justify-between gap-4 px-5 py-3 sm:py-3.5 rounded-lg bg-[#FCB813] hover:bg-[#FFC433] text-neutral-950 font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer group"
              >
                <span>EXPLORE 24/7 DINING</span>
                <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </button>

              <button
                onClick={() => scrollTo("location")}
                className="flex-1 flex items-center justify-between gap-4 px-5 py-3 sm:py-3.5 rounded-lg border border-white/25 bg-neutral-950/70 hover:bg-neutral-900/90 hover:border-white/40 text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 backdrop-blur-sm cursor-pointer group"
              >
                <span>PLAN YOUR VISIT</span>
                <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </button>
            </div>

            <a
              href="https://www.facebook.com/sampanhighwayinn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pt-0.5 text-xs text-neutral-300 hover:text-white transition-colors w-fit group"
            >
              <FaFacebookF className="text-[#FCB813] text-xs sm:text-sm shrink-0" />
              <span className="font-medium">Visit our Facebook page</span>
              <FiArrowUpRight className="text-xs text-neutral-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Floating Metrics (Styled like StayVerse reference) */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-4 sm:px-10 lg:px-16 pt-1">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-1">
          {/* Metrics group: 2x2 grid on mobile with clean center divider, single row on sm+ */}
          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:items-center sm:divide-x sm:divide-white/25">
            {quickMetrics.map((item, i) => (
              <div
                key={i}
                className={`fade-up ${i % 2 === 1 ? "border-l border-white/20 pl-3.5 sm:border-l-0 sm:pl-0" : "pr-3 sm:pr-0"
                  } ${i >= 2 ? "pt-2.5 sm:pt-0 border-t border-white/10 sm:border-t-0" : "pb-2.5 sm:pb-0"
                  } ${i === 0
                    ? "sm:pr-5 lg:pr-6"
                    : i === quickMetrics.length - 1
                      ? "sm:pl-5 lg:pl-6"
                      : "sm:px-5 lg:px-6"
                  }`}
              >
                <div className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCB813] shrink-0" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Thin horizontal line connecting towards waypoint action */}
          <div className="hidden xl:flex items-center flex-1 mx-6 relative self-center">
            <div className="w-full h-px bg-white/25" />
            <div className="absolute left-1/3 -top-1 w-2 h-2 rounded-full bg-[#FCB813] shadow-[0_0_8px_#FCB813]" />
          </div>

          {/* Right prompt / waypoint action */}
          <button
            onClick={() => scrollTo("location")}
            className="fade-up hidden sm:flex items-center gap-2.5 text-white hover:text-white transition-colors cursor-pointer text-left group shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-[#FCB813] group-hover:bg-[#FCB813] group-hover:text-[#061B2B] transition-all">
              <FaRoute className="text-xs" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FCB813] font-bold flex items-center gap-1.5">
                <span>Kashiani</span>
                <FiArrowUpRight className="text-xs opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-[10px] sm:text-[11px] text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                Where are you heading today?
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
