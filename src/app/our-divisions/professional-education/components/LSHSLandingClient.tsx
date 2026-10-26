"use client";

import LSHSHero from "./LSHSHero";
import LSHSRoadmap from "./LSHSRoadmap";
import LSHSWhyCIPS from "./LSHSWhyCIPS";
import LSHSAccreditationProof from "./LSHSAccreditationProof";
import LSHSGlobalReach from "./LSHSGlobalReach";
import LSHSFAQ from "./LSHSFAQ";
import LSHSEnquiryForm from "./LSHSEnquiryForm";
import LSHSLiveChatWidget from "./LSHSLiveChatWidget";

export default function LSHSLandingClient() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      {/* 1. Hero Section with Headline, CIPS credentials, and Video teaser */}
      <LSHSHero />

      {/* 2. Course Roadmap (Level 2 to Level 6 MCIPS, Credits & Modules) */}
      <LSHSRoadmap />

      {/* 3. Why CIPS Section (5 Key Pillars / Carousel) */}
      <LSHSWhyCIPS />

      {/* 4. CIPS Official UK Accreditation & Recognition Proof */}
      <LSHSAccreditationProof />

      {/* 5. Global Reach & Country Ambassadors */}
      <LSHSGlobalReach />

      {/* 6. Frequently Asked Questions */}
      <LSHSFAQ />

      {/* 7. Executive Consultation & Quick Enquiry */}
      <LSHSEnquiryForm />

      {/* Live Chat Support Widget */}
      <LSHSLiveChatWidget />
    </div>
  );
}
