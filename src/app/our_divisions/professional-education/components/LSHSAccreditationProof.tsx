export default function LSHSAccreditationProof() {
  const accreditations = [
    {
      title: "Officially Approved CIPS Study & Exam Centre",
      badge: "CIPS Awarding Body UK",
      description: "LSHS is an officially approved CIPS UK Study and Exam Centre. Sit your exams in Bangladesh with complete confidence.",
      code: "Centre Number: 10005967 (Valid thru Nov 2026)",
    },
    {
      title: "Identical UK CIPS Curriculum",
      badge: "Save 80%+ Expenses vs UK",
      description: "Receive the exact same prestigious CIPS qualifications locally without UK rent or airfare costs.",
      code: "Zero Airfare & Zero UK Rent",
    },
    {
      title: "25-Year CIPS Fellow Faculty",
      badge: "Expert Global Tutor",
      description: "Learn directly from a senior 25-Year CIPS Fellow with extensive global procurement and supply chain experience.",
      code: "Global Industry Expert Tutor",
    },
    {
      title: "Government Licensed & Sampan Governance",
      badge: "A Sampan Group Concern",
      description: "Fully licensed educational entity (TRAD/DNCC/034723/2025) operating under the corporate governance of Sampan Group.",
      code: "License: TRAD/DNCC/034723/2025",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#0c4a6e] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f4d210] bg-sky-950 px-3.5 py-1 rounded-full border border-sky-800">
            Institutional Recognition & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
            The Standard the World Trusts
          </h2>
          <p className="text-base sm:text-lg text-sky-100/70 mt-4 leading-relaxed">
            Equip yourself with the procurement qualification globally recognized across governments, corporations, and international bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditations.map((acc, idx) => (
            <div
              key={idx}
              className="bg-sky-950/60 border border-sky-800/40 hover:border-[#f4d210]/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f4d210] bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/50 block mb-4 w-fit">
                  {acc.badge}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-[#f4d210] transition-colors font-serif">
                  {acc.title}
                </h3>

                <p className="text-xs text-sky-100/70 mt-3 leading-relaxed">
                  {acc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-800/40 text-[10px] font-mono text-sky-300 font-bold">
                ✓ {acc.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
