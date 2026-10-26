"use client";

import { useState } from "react";
import LSHSUtilityBar from "./LSHSUtilityBar";
import LSHSHero from "./LSHSHero";
import LSHSRoadmap from "./LSHSRoadmap";
import LSHSWhyCIPS from "./LSHSWhyCIPS";
import LSHSAccreditationProof from "./LSHSAccreditationProof";
import LSHSGlobalReach from "./LSHSGlobalReach";
import LSHSFAQ from "./LSHSFAQ";
import LSHSEnquiryForm from "./LSHSEnquiryForm";
import LSHSFooterBar from "./LSHSFooterBar";
import LSHSLevelAssessmentModal from "./LSHSLevelAssessmentModal";
import LSHSLiveChatWidget from "./LSHSLiveChatWidget";

export default function LSHSLandingClient() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      {/* 1. Utility Top Strip with Hotline & Promo */}
      <LSHSUtilityBar />

      {/* 2. Hero Section with Headline, Eyebrow, CIPS credentials, and Video teaser */}
      <LSHSHero onOpenAssessment={() => setIsAssessmentOpen(true)} />

      {/* 3. Course Roadmap (Level 2 to Level 6 MCIPS, Credits & Modules) */}
      <LSHSRoadmap onOpenAssessment={() => setIsAssessmentOpen(true)} />

      {/* 4. Why CIPS Section (5 Key Pillars / Carousel) */}
      <LSHSWhyCIPS />

      {/* 5. CIPS Official UK Accreditation & Recognition Proof */}
      <LSHSAccreditationProof />

      {/* 6. Global Reach & Country Ambassadors */}
      <LSHSGlobalReach />

      {/* 7. Frequently Asked Questions */}
      <LSHSFAQ />

      {/* 8. Executive Consultation & Quick Enquiry */}
      <LSHSEnquiryForm />

      {/* 9. Official LSHS Footer & Integrity Strip */}
      <LSHSFooterBar />

      {/* Interactive Modal Diagnostic Quiz */}
      <LSHSLevelAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
      />

      {/* Live Chat Support Widget */}
      <LSHSLiveChatWidget />
    </div>
  );
}
