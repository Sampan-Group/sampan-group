"use client";

interface CountryItem {
  name: string;
  iso: string;
  code: string;
}

const countries: CountryItem[] = [
  { name: "United Kingdom", iso: "gb", code: "UK Hub" },
  { name: "Bangladesh", iso: "bd", code: "Dhaka Study Centre" },
  { name: "United Arab Emirates", iso: "ae", code: "Middle East" },
  { name: "Australia", iso: "au", code: "Oceania" },
  { name: "New Zealand", iso: "nz", code: "Oceania" },
  { name: "South Africa", iso: "za", code: "Africa" },
  { name: "Nigeria", iso: "ng", code: "West Africa" },
  { name: "Ghana", iso: "gh", code: "West Africa" },
  { name: "Kenya", iso: "ke", code: "East Africa" },
  { name: "Zambia", iso: "zm", code: "Southern Africa" },
  { name: "Qatar", iso: "qa", code: "Gulf Region" },
  { name: "+150 Countries", iso: "globe", code: "Global Distance" },
];

const ambassadors = [
  {
    country: "Bangladesh & South Asia",
    iso: "bd",
    title: "Regional Admissions Coordinator",
    role: "On-campus study, computer exam booking, and local fee payments",
    contact: "admissions@lshs.co.uk",
    phone: "+880 1906 896326",
  },
  {
    country: "United Kingdom & Europe",
    iso: "gb",
    title: "UK Academic Directorate",
    role: "Distance learning curriculum, CIPS UK tutor allocation, and MCIPS audits",
    contact: "info@lshs.co.uk",
    phone: "+44 7515 106586",
  },
  {
    country: "Middle East & Africa",
    iso: "globe",
    title: "International Learner Support",
    role: "Time-zone aligned tutoring schedules, corporate cohorts, and virtual classrooms",
    contact: "global@lshs.co.uk",
    phone: "+44 7515 106586",
  },
];

export default function LSHSGlobalReach() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Global Reach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4">
            Supporting Learners Across Borders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Whether you study via live distance learning or on campus, LSHS connects you with students and mentors across over 150 nations worldwide.
          </p>
        </div>

        {/* Flags Grid with Country Code CDN images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {countries.map((c, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/90 hover:border-sky-300 transition-all text-center group flex flex-col items-center justify-center shadow-xs hover:shadow-sm"
            >
              {c.iso === "globe" ? (
                <div className="w-10 h-7 rounded shadow-xs mb-2 flex items-center justify-center bg-sky-100 text-sky-800 text-base font-bold">
                  🌐
                </div>
              ) : (
                <div className="w-10 h-7 rounded shadow-xs overflow-hidden border border-slate-200/80 bg-slate-100 mb-2 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <img
                    src={`https://flagcdn.com/${c.iso}.svg`}
                    alt={`${c.name} flag`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0b73b9] transition-colors leading-tight">
                {c.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">{c.code}</span>
            </div>
          ))}
        </div>

        {/* Ambassador Support Cards */}
        <div className="bg-gradient-to-br from-[#0c4a6e] to-[#072d42] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f4d210]">
              Country Ambassador Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-2">
              Local Support, Wherever You&apos;re Studying From
            </h3>
            <p className="text-sm text-sky-100/80 mt-2 leading-relaxed">
              Our regional coordinators guide you through enrolment, syllabus selection, and CIPS examination scheduling in your own time zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ambassadors.map((amb, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/15 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {amb.iso === "globe" ? (
                      <span className="text-2xl">🌍</span>
                    ) : (
                      <div className="w-8 h-5.5 rounded overflow-hidden shadow-xs border border-white/20 shrink-0">
                        <img
                          src={`https://flagcdn.com/${amb.iso}.svg`}
                          alt={`${amb.country} flag`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f4d210]">
                      {amb.country}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-serif text-white mb-2">
                    {amb.title}
                  </h4>
                  <p className="text-xs text-sky-100/80 leading-relaxed mb-4">
                    {amb.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-sky-200">
                    <span>📞</span>
                    <a href={`tel:${amb.phone.replace(/\s+/g, "")}`} className="hover:text-white font-mono">
                      {amb.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-200">
                    <span>✉</span>
                    <a href={`mailto:${amb.contact}`} className="hover:text-white">
                      {amb.contact}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-sky-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-200">
            <span>
              Need customized intake dates for corporate batches or multinational teams?
            </span>
            <a
              href="https://cips.lshs.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f4d210] font-bold hover:underline"
            >
              Contact Global Admissions on cips.lshs.co.uk ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
