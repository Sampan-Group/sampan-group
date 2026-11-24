"use client";

import { FiArrowUpRight } from "react-icons/fi";

const googleMapsDeepLink = "https://maps.app.goo.gl/KXSdwQf41PxZLmvf8";

export default function GreenRibbonCTA() {
  return (
    <section className="border-t-4 border-[#C3161C] bg-[#FCB813] py-16 sm:py-20 text-neutral-950">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Headline */}
        <div className="space-y-2 max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-neutral-900/80">
            Your Next Stop Starts Here
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-tight">
            Make room for a better journey.
          </h2>
        </div>

        {/* Clear Action Button */}
        <div>
          <a
            href={googleMapsDeepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#061B2B] hover:bg-[#0C2A40] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] px-8 py-5 transition-all duration-300 shadow-xl shrink-0"
          >
            <span>Get Directions</span>
            <FiArrowUpRight className="text-base text-[#FCB813]" />
          </a>
        </div>

      </div>
    </section>
  );
}

