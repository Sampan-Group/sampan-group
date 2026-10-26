"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Why should I choose LSHS?",
    answer:
      "London School of Higher Studies (LSHS) is an official CIPS UK Approved Study Centre and Exam Centre (Centre No: 10005967) operating under Sampan Group. We offer structured distance and classroom learning, 25-year CIPS Fellow tutoring, complete exam preparation, and comprehensive guidance through every stage of the CIPS pathway — from Level 2 to prestigious MCIPS Chartered status, saving you over 80% compared to UK campus costs.",
  },
  {
    question: "Are LSHS qualifications recognised globally?",
    answer:
      "Yes, 100%. All qualifications awarded are official Chartered Institute of Procurement & Supply (CIPS) UK credentials, identical to those issued in the United Kingdom. CIPS qualifications are recognized and respected by Fortune 500 employers, governments, and multilateral organizations across 150+ countries worldwide.",
  },
  {
    question: "What is CIPS, and why does it matter?",
    answer:
      "CIPS (Chartered Institute of Procurement & Supply) is the world's largest and most prestigious professional body dedicated to procurement and supply chain management. Holding a CIPS certification demonstrates rigorous, applied capability in commercial contracting, supplier negotiations, ethical sourcing, and ESG governance. Certified professionals earn an average of 20% higher salaries.",
  },
  {
    question: "Which CIPS level should I start with?",
    answer: (
      <div className="space-y-2">
        <p>Entry points are flexible depending on your prior background:</p>
        <ul className="space-y-1 pl-4 list-disc text-xs sm:text-sm">
          <li>
            <strong>Level 2 & 3:</strong> Suited to newcomers or individuals with limited operational experience looking to build foundations.
          </li>
          <li>
            <strong>Level 4 Diploma (Most Popular):</strong> The standard entry point for university graduates or professionals with 2+ years of procurement, buying, or supply experience.
          </li>
          <li>
            <strong>Level 5 & 6 Professional Diploma:</strong> For experienced managers targeting executive leadership, category governance, and direct MCIPS Chartered designation.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long does a CIPS qualification take to complete?",
    answer: (
      <div className="space-y-2">
        <p>Timelines depend on your chosen study intensity (distance, part-time, or intensive):</p>
        <ul className="space-y-1 pl-4 list-disc text-xs sm:text-sm">
          <li>
            <strong>Level 2 & 3:</strong> Typically completed in 6 to 12 months.
          </li>
          <li>
            <strong>Level 4, 5 & 6:</strong> Typically 9 to 18 months per level, structured around computer-based exam windows held throughout the year.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function LSHSFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 lg:px-16 bg-[#f8fafc] text-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Clear answers to common questions about studying CIPS qualifications with LSHS.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 shadow-sm hover:shadow"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-serif text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#0c4a6e] text-[#f4d210] rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>Have an enquiry not answered here?</span>
          <div className="flex items-center gap-4">
            <a href="#enquiry" className="text-[#0b73b9] font-bold hover:underline">
              Submit Enquiry Form ↓
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://cips.lshs.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c4a6e] font-bold hover:underline"
            >
              Visit cips.lshs.co.uk ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
