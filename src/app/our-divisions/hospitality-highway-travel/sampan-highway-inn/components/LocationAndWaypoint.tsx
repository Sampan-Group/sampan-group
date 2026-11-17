"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaDirections, FaClock } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.089219414334!2d89.765406!3d23.260465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2sSampan%20Highway%20Inn%20Restaurant%20%26%20Party%20Centre!5e0!3m2!1sen!2sbd!4v1788938537834!5m2!1sen!2sbd";

const googleMapsDeepLink =
  "https://maps.app.goo.gl/KXSdwQf41PxZLmvf8";

const hubDistances = [
  { hub: "Dhaka Zero Point / Jatrabari", distance: "103 km", time: "1h 15m" },
  { hub: "Padma Bridge Toll Plaza (Mawa)", distance: "72 km", time: "50m" },
  { hub: "Bhanga Junction Expressway", distance: "30 km", time: "25m" },
  { hub: "Khulna Divisional City Hub", distance: "98 km", time: "1h 15m" },
];

export default function LocationAndWaypoint() {
  return (
    <section id="location" className="bg-[#07150E] text-white py-24 sm:py-32 border-b border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Main Grid: Left Details & Right Waypoint Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Find Us Information */}
          <div className="fade-up lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#B8F230]" />
                <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#B8F230]">
                  Find Us
                </p>
              </div>

              <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.05]">
                <div className="overflow-hidden">
                  <div className="line-mask">A welcome stop</div>
                </div>
                <div className="overflow-hidden mt-1">
                  <div className="line-mask text-[#B8F230]">along your way.</div>
                </div>
              </h2>

              <div className="space-y-1.5 font-mono text-xs sm:text-sm text-neutral-300">
                <p className="font-bold text-white text-base">Sampan Highway Inn</p>
                <p className="text-neutral-400">Kashiani (KM 103), Dhaka–Khulna Highway, Bangladesh.</p>
                <p className="text-neutral-400">GPS: 23.260465° N, 89.765979° E</p>
              </div>

              {/* Highway Corridor Distances */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  Corridor Travel Times
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hubDistances.map((item, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.03] border border-white/10 font-mono text-xs">
                      <span className="text-neutral-400 block text-[11px] truncate">{item.hub}</span>
                      <div className="flex items-center justify-between mt-1 text-white font-bold">
                        <span>{item.distance}</span>
                        <span className="text-[#B8F230]">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href={googleMapsDeepLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B8F230] hover:bg-[#a6dc28] text-neutral-950 font-bold px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 shadow-xl"
              >
                <span>Open Google Maps</span>
                <FiArrowUpRight className="text-base" />
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 transition-colors"
              >
                <FaPhoneAlt className="text-[#B8F230] text-xs" />
                <span>+880 1929-918408</span>
              </a>
            </div>
          </div>

          {/* Right Column: Your Waypoint Card with Map */}
          <div className="fade-up lg:col-span-6 flex flex-col">
            <div className="bg-[#0C1E14] border border-white/15 p-8 sm:p-10 flex flex-col flex-1 justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#B8F230] block">
                  Your Waypoint
                </span>
                
                <div>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    KM 103
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-neutral-300 mt-1">
                    Dhaka–Khulna
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Planning a road trip? Save the location before you travel and make your next stop a Sampan stop.
                </p>
              </div>

              {/* Embedded Map */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-neutral-900">
                <iframe
                  title="Sampan Highway Inn Map Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.05)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* View Route Action */}
              <div className="pt-2">
                <a
                  href={googleMapsDeepLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between border border-white/20 hover:border-[#B8F230] hover:text-[#B8F230] bg-black/40 px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-300"
                >
                  <span>View Route on Google Maps</span>
                  <FiArrowUpRight className="text-base text-[#B8F230]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

