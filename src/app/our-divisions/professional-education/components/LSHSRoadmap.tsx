"use client";


const levels = [
  {
    level: "Level 2",
    title: "Certificate in Procurement and Supply Operations",
    badge: "Foundation Entry",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    stats: "5 Modules • 18 Credits",
    duration: "3 – 6 Months",
    summary:
      "Build your foundation. An ideal entry point for those completely new to procurement and supply chain roles, with no formal prerequisites.",
    focusAreas: [
      "Procurement lifecycle & terminology",
      "Supplier relations & purchase ordering",
      "Supply chain risk reduction fundamentals",
    ],
    officialLink: "https://cips.lshs.co.uk/",
  },
  {
    level: "Level 3",
    title: "Advanced Certificate in Procurement & Supply Operations",
    badge: "Operational Skills",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    stats: "6 Modules (4 Core + 2 Elective) • 30 Credits",
    duration: "6 Months",
    summary:
      "Develop your operational capability further and prepare for the transition into tactical and management-level procurement functions.",
    focusAreas: [
      "Operational sourcing & contract monitoring",
      "Stakeholder management & needs assessment",
      "Ethical procurement & data-driven buying",
    ],
    officialLink: "https://cips.lshs.co.uk/",
  },
  {
    level: "Level 4",
    title: "Diploma in Procurement and Supply",
    badge: "Most Popular",
    badgeColor: "bg-[#f4d210] text-slate-950 border-amber-400 font-bold shadow-sm",
    stats: "8 Modules • 60 Credits",
    duration: "9 – 12 Months",
    summary:
      "Our most-enrolled qualification. Move from operational buying into commercial contracting, strategic sourcing, and negotiation. Degree holders and working professionals start here.",
    focusAreas: [
      "Commercial contracting & legal terms",
      "Strategic negotiation & ethical sourcing",
      "Supplier relationship management & asset lifecycle",
    ],
    isFeatured: true,
    officialLink: "https://cips.lshs.co.uk/",
  },
  {
    level: "Level 5",
    title: "Advanced Diploma in Procurement and Supply",
    badge: "Managerial Scope",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    stats: "Core + Elective Modules • 60 Credits",
    duration: "12 Months",
    summary:
      "Step into a senior operational or managerial role. Covers supply chain risk, financial management, team leadership, and ethical procurement strategy.",
    focusAreas: [
      "Strategic category management & governance",
      "Supply chain resilience, risk & ESG",
      "Procurement team leadership & KPIs",
    ],
    officialLink: "https://cips.lshs.co.uk/",
  },
  {
    level: "Level 6",
    title: "Professional Diploma in Procurement and Supply",
    badge: "MCIPS Chartered Pathway",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold",
    stats: "Core + Optional Modules • 60 Credits",
    duration: "12 – 18 Months",
    summary:
      "The prestigious final level on the MCIPS pathway. Focuses on strategic leadership, change management, and corporate procurement strategy.",
    focusAreas: [
      "Strategic procurement governance & C-Suite alignment",
      "Enterprise change management & global sourcing",
      "Attainment of Chartered MCIPS credentials",
    ],
    officialLink: "https://cips.lshs.co.uk/",
  },
];

export default function LSHSRoadmap() {
  return (
    <section id="pathway" className="py-20 px-4 sm:px-8 lg:px-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Quick Scan Under-Hero Bar */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b73b9]">
              QUALIFICATION PATHWAY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              Study CIPS at the London School of Higher Studies
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              The global standard for procurement excellence, recognised in 150+ countries. Identical UK curriculum and official exam centre.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://cips.lshs.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              View All Courses on cips.lshs.co.uk →
            </a>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Course Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4">
            Your Path Through the CIPS Levels
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Progress in stages, from foundational operations to strategic leadership. Choose your starting point based on your current experience; most professionals with some industry background start at Level 4.
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {levels.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                item.isFeatured
                  ? "bg-gradient-to-b from-sky-50 via-white to-sky-50/50 border-2 border-[#0b73b9] shadow-xl shadow-sky-950/10 scale-[1.02]"
                  : "bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-lg"
              }`}
            >
              {item.isFeatured && (
                <div className="absolute -top-3.5 left-8 bg-[#0c4a6e] text-[#f4d210] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  ★ Recommended for Working Professionals
                </div>
              )}

              <div>
                {/* Level Tag & Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#0b73b9] uppercase">
                    {item.level}
                  </span>
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Modules & Credits pill */}
                <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg mb-4 inline-block">
                  {item.stats}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Key Focus Areas */}
                <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Knowledge Covered:
                  </span>
                  {item.focusAreas.map((focus, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs text-slate-700">
                      <span className="text-[#0b73b9] font-bold mr-2 shrink-0">✓</span>
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href="https://forms.gle/kHkicZ6TaHQRoMck6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all ${
                    item.isFeatured
                      ? "bg-[#f4d210] hover:bg-amber-300 text-slate-950 shadow-md"
                      : "bg-[#0c4a6e] hover:bg-[#0b73b9] text-white"
                  }`}
                >
                  Apply for {item.level} ↗
                </a>

                <a
                  href="https://cips.lshs.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[11px] text-[#0b73b9] hover:underline font-semibold"
                >
                  View full syllabus details on cips.lshs.co.uk →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
