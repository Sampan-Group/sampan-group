export default function LSHSUtilityBar() {
  return (
    <div className="bg-[#041a29] text-sky-100 text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-sky-900/60 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Contact phones and email */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5">
            <span className="text-[#f4d210]">🇬🇧 UK:</span>
            <a href="tel:+447515106586" className="hover:text-white transition-colors">
              +44 7515 106586
            </a>
          </span>
          <span className="text-sky-700 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#f4d210]">🇧🇩 BD:</span>
            <a href="tel:+8801906896326" className="hover:text-white transition-colors">
              +880 1906 896326
            </a>
          </span>
          <span className="text-sky-700 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span>✉</span>
            <a href="mailto:info@lshs.co.uk" className="hover:text-white transition-colors">
              info@lshs.co.uk
            </a>
          </span>
        </div>

        {/* Right: Promotion & Official Links */}
        <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[#f4d210] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f4d210] animate-ping" />
            Get 25% OFF Early Bird Tuition
          </span>
          <a
            href="https://forms.gle/kHkicZ6TaHQRoMck6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 hover:text-white font-medium underline"
          >
            Enrol Now ↗
          </a>
          <a
            href="https://cips.lshs.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b73b9] hover:bg-sky-500 text-white font-bold px-2.5 py-0.5 rounded text-[11px] transition-colors"
          >
            cips.lshs.co.uk ↗
          </a>
        </div>
      </div>
    </div>
  );
}
