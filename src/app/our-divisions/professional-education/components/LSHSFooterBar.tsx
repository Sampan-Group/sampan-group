import Link from "next/link";

export default function LSHSFooterBar() {
  return (
    <footer className="bg-[#051c2c] text-white border-t border-sky-900/60 pt-16 pb-12 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-sky-900/50">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇬🇧</span>
              <h3 className="font-bold text-lg font-serif text-white tracking-wide">
                London School of Higher Studies
              </h3>
            </div>
            <p className="text-xs text-sky-200/80 leading-relaxed font-light">
              London School of Higher Studies (LSHS) is an official CIPS Approved Study Centre and Exam Centre supporting learners toward globally recognised procurement and supply chain qualifications.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#f4d210]/15 text-[#f4d210] border border-[#f4d210]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f4d210] animate-pulse" />
                A Sampan Group Concern
              </span>
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Useful Portals
            </h4>
            <ul className="space-y-2 text-xs text-sky-200/90 font-medium">
              <li>
                <a
                  href="https://cips.lshs.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f4d210] transition-colors flex items-center gap-1 font-semibold text-white"
                >
                  <span>Official LSHS CIPS Portal</span>
                  <span className="text-[10px] text-sky-400">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/kHkicZ6TaHQRoMck6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f4d210] transition-colors flex items-center gap-1"
                >
                  <span>Online Admission Form</span>
                  <span className="text-[10px] text-sky-400">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://study.cips.org/countries/bangladesh/london-school-of-higher-studies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f4d210] transition-colors flex items-center gap-1"
                >
                  <span>Verify with CIPS UK Directory</span>
                  <span className="text-[10px] text-sky-400">↗</span>
                </a>
              </li>
              <li>
                <a href="#pathway" className="hover:text-white transition-colors">
                  CIPS Qualification Pathway (L2–L6)
                </a>
              </li>
              <li>
                <a href="#why-cips" className="hover:text-white transition-colors">
                  Why Study CIPS
                </a>
              </li>
              <li>
                <Link href="/our-divisions" className="hover:text-white transition-colors text-sky-400">
                  ← Back to Sampan Divisions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Admissions Contacts
            </h4>
            <div className="space-y-2 text-xs text-sky-200/90">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">UK Campus & Hotline:</span>
                <a href="tel:+447515106586" className="text-white hover:text-[#f4d210] font-mono">
                  +44 7515 106586
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Bangladesh Desk:</span>
                <a href="tel:+8801906896326" className="text-white hover:text-[#f4d210] font-mono">
                  +880 1906 896326
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Admissions Email:</span>
                <a href="mailto:info@lshs.co.uk" className="text-[#f4d210] hover:underline font-mono">
                  info@lshs.co.uk
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-sky-300">
              <a href="https://facebook.com/lshs.co.uk/" target="_blank" rel="noreferrer" className="hover:text-[#f4d210]">Facebook</a>
              <span>•</span>
              <a href="https://linkedin.com/company/lshs.co.uk" target="_blank" rel="noreferrer" className="hover:text-[#f4d210]">LinkedIn</a>
              <span>•</span>
              <a href="https://youtube.com/channel/lshs" target="_blank" rel="noreferrer" className="hover:text-[#f4d210]">YouTube</a>
            </div>
          </div>

          {/* Column 4 - Integrity & Accreditation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Integrity & Registration
            </h4>
            <div className="p-4 rounded-xl bg-sky-950/70 border border-sky-800/80 space-y-2 text-xs">
              <div>
                <span className="text-sky-300/70 block text-[10px] uppercase font-mono">Official CIPS UK Centre:</span>
                <span className="font-mono font-bold text-white text-sm">Centre No: 10005967</span>
              </div>
              <div className="pt-1 border-t border-sky-800/60">
                <span className="text-sky-300/70 block text-[10px] uppercase font-mono">Government Trade License:</span>
                <span className="font-mono text-sky-200 text-xs">TRAD/DNCC/034723/2025</span>
              </div>
              <div className="pt-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  ✓ Verified Examination Centre
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300/70">
          <p>© {new Date().getFullYear()} London School of Higher Studies (LSHS). All rights reserved.</p>
          <p>A flagship educational concern of <strong className="text-white">Sampan Group</strong>.</p>
        </div>
      </div>
    </footer>
  );
}
