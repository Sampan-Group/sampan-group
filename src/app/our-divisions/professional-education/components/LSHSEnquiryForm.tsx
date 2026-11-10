"use client";

import { useState } from "react";

export default function LSHSEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    levelOfInterest: "Level 4 Diploma (Most Popular)",
    studyMode: "Distance Learning (Online)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-20 px-4 sm:px-8 lg:px-16 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 border-2 border-sky-600/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Section Header with Line-Mask Reveal */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="fade-up inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full mb-4">
              Admissions & Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Ready to Take Your Seat at the</div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="line-mask text-[#0b73b9]">Executive Table?</div>
              </div>
            </h2>
            <p className="fade-up text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Have a question about which CIPS level is right for you, course timetables, or how our distance learning platform works? Our London and Dhaka admissions team is here to help.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0c4a6e] text-white rounded-2xl p-8 text-center space-y-4 max-w-2xl mx-auto shadow-inner">
              <div className="w-16 h-16 bg-[#f4d210] text-slate-950 rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-md">
                ✓
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                Enquiry Received Successfully!
              </h3>
              <p className="text-sky-100/90 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-[#f4d210]">{formData.fullName}</strong>. An LSHS academic advisor will reach out to you at <strong className="text-[#f4d210]">{formData.phone || formData.email}</strong> with full syllabus details and fee structure.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <a
                  href="https://forms.gle/kHkicZ6TaHQRoMck6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-[#f4d210] hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Fill Official Admission Form ↗
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b73b9] focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b73b9] focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b73b9] focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    CIPS Level of Interest
                  </label>
                  <select
                    value={formData.levelOfInterest}
                    onChange={(e) => setFormData({ ...formData, levelOfInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b73b9] focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                  >
                    <option>Level 2 Certificate in Procurement & Supply</option>
                    <option>Level 3 Advanced Certificate in Procurement & Supply</option>
                    <option>Level 4 Diploma (Most Popular)</option>
                    <option>Level 5 Advanced Diploma</option>
                    <option>Level 6 Professional Diploma (MCIPS)</option>
                    <option>Corporate Batch / Customized Cohort</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Study Mode
                  </label>
                  <select
                    value={formData.studyMode}
                    onChange={(e) => setFormData({ ...formData, studyMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b73b9] focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                  >
                    <option>Distance Learning (Online Interactive)</option>
                    <option>Classroom-Based (Dhaka Campus)</option>
                    <option>Intensive Exam Preparation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Questions or Current Role (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your background or questions regarding exams, waivers, or payment plans..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b73b9] focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-[#f4d210] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-[1.01] cursor-pointer"
                >
                  Send Enquiry →
                </button>

                <span className="text-xs text-slate-400 hidden sm:inline">or</span>

                <a
                  href="https://forms.gle/kHkicZ6TaHQRoMck6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#f4d210] hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-all shadow"
                >
                  Apply Directly (Official Google Form) ↗
                </a>
              </div>
            </form>
          )}

          {/* Bottom Trust Grid from Doc */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-lg block mb-1">🏷️</span>
              <strong className="text-xs text-slate-800 block">Transparent Fees</strong>
              <span className="text-[11px] text-slate-500">No hidden costs</span>
            </div>
            <div className="p-3">
              <span className="text-lg block mb-1">💳</span>
              <strong className="text-xs text-slate-800 block">Flexible Payment</strong>
              <span className="text-[11px] text-slate-500">Installment plans</span>
            </div>
            <div className="p-3">
              <span className="text-lg block mb-1">🏛️</span>
              <strong className="text-xs text-slate-800 block">Approved Centre</strong>
              <span className="text-[11px] text-slate-500">Centre No: 10005967</span>
            </div>
            <div className="p-3">
              <span className="text-lg block mb-1">👨‍🏫</span>
              <strong className="text-xs text-slate-800 block">Qualified Tutors</strong>
              <span className="text-[11px] text-slate-500">25-Yr CIPS Fellow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
