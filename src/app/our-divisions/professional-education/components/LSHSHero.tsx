"use client";

import { useState } from "react";

interface LSHSHeroProps {
  onOpenVideo?: () => void;
}

export default function LSHSHero({ onOpenVideo }: LSHSHeroProps = {}) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleVideoClick = () => {
    if (onOpenVideo) {
      onOpenVideo();
    } else {
      setShowVideoModal(true);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#062438] via-[#0c4a6e] to-[#072d42] text-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-8 lg:px-16">
        {/* Atmospheric Background Layer with Parallax Scrub */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="parallax-img absolute inset-0 w-full h-[124%] -top-[12%]">
            <img
              src="/images/projects/lshs.jpg"
              alt="London School of Higher Studies Campus"
              className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#062438]/95 via-[#0c4a6e]/90 to-[#072d42]/95 z-10" />
        </div>

        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[32rem] h-[32rem] rounded-full bg-[#0b73b9]/25 blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 translate-y-16 -translate-x-12 w-[28rem] h-[28rem] rounded-full bg-[#f4d210]/15 blur-3xl pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">

              {/* Headline with Masked Slow Reveal */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.08]">
                <div className="overflow-hidden">
                  <div className="hero-line-mask line-mask">Build Your Career on a</div>
                </div>
                <div className="overflow-hidden mt-1">
                  <div className="hero-line-mask line-mask text-transparent bg-clip-text bg-gradient-to-r from-[#f4d210] via-amber-200 to-[#f4d210]">
                    Global Standard
                  </div>
                </div>
              </h1>

              {/* Body */}
              <p className="hero-fade-up fade-up text-base sm:text-lg text-sky-100/90 leading-relaxed font-light">
                Welcome to the <strong className="text-white font-semibold">London School of Higher Studies (LSHS)</strong>. We help ambitious professionals gain the world&apos;s leading procurement and supply chain qualification — studied flexibly, assessed rigorously, and recognised by employers worldwide.
              </p>

              {/* Key Trust Signals */}
              <div className="hero-fade-up fade-up grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xs text-sky-200/80">Centre No</div>
                  <div className="text-sm font-bold font-mono text-[#f4d210]">10005967</div>
                  <div className="text-[10px] text-sky-300/70">Official CIPS UK</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xs text-sky-200/80">Pathway</div>
                  <div className="text-sm font-bold text-white">Level 2 → 6</div>
                  <div className="text-[10px] text-sky-300/70">MCIPS Chartered</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xs text-sky-200/80">Cost Savings</div>
                  <div className="text-sm font-bold text-[#f4d210]">Save 80%+</div>
                  <div className="text-[10px] text-sky-300/70">vs UK Campus Study</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xs text-sky-200/80">Global Reach</div>
                  <div className="text-sm font-bold text-white">150+ Countries</div>
                  <div className="text-[10px] text-sky-300/70">Distance & Classroom</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-fade-up fade-up pt-2 flex flex-wrap gap-3.5 sm:gap-4 items-center">
                <a
                  href="#pathway"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-[#f4d210] hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
                >
                  Explore CIPS Courses ↓
                </a>

                <a
                  href="https://cips.lshs.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0b73b9] hover:bg-sky-500 text-white shadow-lg shadow-sky-900/40 transition-all hover:scale-[1.02]"
                >
                  <span>Visit Main LSHS Portal</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>

              {/* Direct Admission Link Highlight */}
              <div className="hero-fade-up fade-up pt-2 flex flex-wrap items-center gap-4 text-xs text-sky-200/90">
                <a
                  href="https://forms.gle/kHkicZ6TaHQRoMck6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#f4d210] hover:underline font-semibold"
                >
                  <span>📋 Direct Admission Form (Google Form) ↗</span>
                </a>
                <span className="text-sky-500">•</span>
                <a href="#enquiry" className="hover:text-white transition-colors">
                  Talk to an Advisor
                </a>
                <span className="text-sky-500">•</span>
                <span className="font-mono text-sky-300/80">License: TRAD/DNCC/034723/2025</span>
              </div>
            </div>

            {/* Right Media Preview Column with Blue Light Shade */}
            <div className="hero-fade-up fade-up lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border-2 border-sky-400/30 bg-gradient-to-b from-sky-900/80 via-slate-900 to-[#0c4a6e] p-2 shadow-2xl shadow-sky-950/80">
                {/* Glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-[#f4d210]/20 to-sky-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video flex flex-col justify-end p-5 sm:p-6">
                  {/* YouTube thumbnail backdrop with Parallax */}
                  <div className="parallax-img absolute inset-0 w-full h-[116%] -top-[8%]">
                    <img
                      src="https://img.youtube.com/vi/cmEz18xDW_U/maxresdefault.jpg"
                      alt="LSHS CIPS Demo Class Trailer"
                      className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Blue light shade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-sky-950/60 to-transparent z-10" />
                  <div className="absolute inset-0 bg-[#0b73b9]/25 mix-blend-color z-10" />

                  {/* Play Button Trigger */}
                  <div className="relative z-20 flex flex-col items-center justify-center my-auto py-6">
                    <button
                      onClick={handleVideoClick}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f4d210] hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/30 transform group-hover:scale-110 transition-all duration-300 cursor-pointer"
                      aria-label="Play 5 minute demo class trailer"
                    >
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <span className="mt-3 text-xs font-bold uppercase tracking-wider text-white bg-slate-900/80 px-3 py-1 rounded-full border border-sky-400/30">
                      Watch 5-Min Demo Class Trailer
                    </span>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-sky-200">
                    <span className="flex items-center gap-1.5 font-medium text-white">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      LSHS Executive Preview
                    </span>
                    <a
                      href="https://youtu.be/cmEz18xDW_U"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-300 hover:text-white underline text-[11px]"
                    >
                      Open on YouTube ↗
                    </a>
                  </div>
                </div>

                {/* Card Sub-Banner */}
                <div className="p-4 bg-sky-950/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white font-bold block">Study Centre (Distance & Classroom)</span>
                    <span className="text-sky-300/80 text-[11px]">Identical UK CIPS syllabus & certification</span>
                  </div>
                  <a
                    href="https://cips.lshs.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f4d210] font-bold hover:underline shrink-0 ml-3"
                  >
                    cips.lshs.co.uk ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-sky-500/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-sky-950 border-b border-sky-800 text-white">
              <span className="text-sm font-bold flex items-center gap-2">
                <span>🇬🇧</span>
                London School of Higher Studies — CIPS Promo Trailer
              </span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/cmEz18xDW_U?autoplay=1"
                title="LSHS CIPS Trailer"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
