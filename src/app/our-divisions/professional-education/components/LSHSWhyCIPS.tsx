"use client";

import { useState } from "react";

const pillars = [
  {
    id: "01",
    tag: "Global Benchmark",
    title: "Internationally Recognised",
    description:
      "CIPS is the world's largest procurement and supply professional body, and its qualifications are used as a benchmark by employers across sectors and geographies worldwide.",
    highlight: "Recognised across 150+ countries & Fortune 500 employers",
    icon: "🌐",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    id: "02",
    tag: "Practical Impact",
    title: "Built for Career Progression",
    description:
      "Each level builds practical, job-relevant skills from operational buying through to strategic sourcing and supplier management, designed to accelerate your next career step.",
    highlight: "20%+ higher average earning potential for qualified buyers",
    icon: "📈",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    id: "03",
    tag: "Chartered Distinction",
    title: "Your Direct Route to MCIPS",
    description:
      "Complete Levels 4, 5, and 6 (plus the required work experience) and you're on the direct path to MCIPS Chartered status, full membership, and executive standing.",
    highlight: "The gold standard for Heads of Procurement & CPOs",
    icon: "🎖️",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
  },
  {
    id: "04",
    tag: "Real-World Rigor",
    title: "Applied Standard in Procurement",
    description:
      "A CIPS qualification is far more than a certificate. It's proof of applied knowledge in commercial contracting, negotiation, and risk mitigation built by industry practitioners.",
    highlight: "Syllabus updated continually with global industry leaders",
    icon: "⚖️",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    id: "05",
    tag: "ESG & Compliance",
    title: "Responsible & Ethical Procurement",
    description:
      "Modern syllabuses embed ethical sourcing, environmental sustainability, anti-bribery, and responsible supply chain practice skills demanded by modern leadership.",
    highlight: "Meets global ESG standards and UN Sustainable Development goals",
    icon: "🌱",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
  },
];

export default function LSHSWhyCIPS() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="why-cips" className="py-20 px-4 sm:px-8 lg:px-16 bg-[#f8fafc] text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-sky-100 text-[#0b73b9]">
            <span>Why Choose CIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4 leading-tight">
            Why You Should Study CIPS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            CIPS, the <strong className="text-slate-800 font-semibold">Chartered Institute of Procurement & Supply</strong>, is the recognised professional standard for procurement and supply chain practice, held by professionals across the public and private sectors internationally. Earning a CIPS qualification demonstrates applied, industry-relevant capability in sourcing, negotiation, contract management, and supply chain strategy.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <a
              href="https://cips.lshs.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Learn CIPS Programmes on Official Site</span>
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>

        {/* Interactive Slides / Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Pill List on Left */}
          <div className="lg:col-span-5 space-y-2.5">
            {pillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActiveSlide(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border-2 flex items-center justify-between cursor-pointer ${
                  activeSlide === idx
                    ? "bg-white border-[#0b73b9] shadow-lg shadow-sky-950/5 scale-[1.01]"
                    : "bg-white/60 hover:bg-white border-slate-200/80 text-slate-600"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                      activeSlide === idx
                        ? "bg-[#0c4a6e] text-[#f4d210]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {pillar.id}
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider block text-slate-400">
                      {pillar.tag}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-bold font-serif ${
                        activeSlide === idx ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xl ml-2 shrink-0">{pillar.icon}</span>
              </button>
            ))}
          </div>

          {/* Detailed Spotlight View on Right */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-[#0c4a6e] via-[#072d42] to-[#041a29] text-white rounded-3xl p-8 sm:p-10 border border-sky-600/30 shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              {/* Background ambient watermarks */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0b73b9]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#f4d210]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f4d210]/20 text-[#f4d210] border border-[#f4d210]/40">
                    Slide {pillars[activeSlide].id} of 05
                  </span>
                  <span className="text-3xl">{pillars[activeSlide].icon}</span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                    {pillars[activeSlide].tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
                    {pillars[activeSlide].title}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed font-light">
                  {pillars[activeSlide].description}
                </p>

                <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-center gap-3">
                  <span className="text-[#f4d210] text-lg">★</span>
                  <span className="text-xs sm:text-sm text-sky-100 font-medium">
                    {pillars[activeSlide].highlight}
                  </span>
                </div>
              </div>

              {/* Spotlight Footer Controls */}
              <div className="relative z-10 pt-6 mt-6 border-t border-sky-800/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {pillars.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === i ? "w-8 bg-[#f4d210]" : "w-3 bg-sky-800 hover:bg-sky-700"
                      }`}
                      aria-label={`Jump to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <a
                  href="https://cips.lshs.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[#f4d210] hover:text-amber-200 inline-flex items-center gap-1"
                >
                  <span>Explore full syllabus on cips.lshs.co.uk</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
