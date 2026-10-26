"use client";

import { useState } from "react";

interface LSHSLevelAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    recommendedLevel: string;
    levelName: string;
    points: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is your current procurement or supply chain experience?",
    subtitle: "Select the option that best reflects your professional background.",
    options: [
      {
        label: "Complete beginner / New to the field",
        description: "No prior experience in buying, procurement, or supply operations.",
        recommendedLevel: "Level 2",
        levelName: "Certificate in Procurement & Supply Operations",
        points: 2,
      },
      {
        label: "1 to 2 years in operational buying or logistics",
        description: "Familiar with purchase orders, basic inventory, and supplier interactions.",
        recommendedLevel: "Level 3",
        levelName: "Advanced Certificate in Procurement & Supply Operations",
        points: 3,
      },
      {
        label: "2+ years professional experience OR university degree",
        description: "Actively handling supplier negotiations, contracts, and commercial sourcing.",
        recommendedLevel: "Level 4 (Most Popular)",
        levelName: "Diploma in Procurement & Supply",
        points: 4,
      },
      {
        label: "5+ years in senior procurement / managerial role",
        description: "Leading category strategies, cross-functional teams, and supplier risks.",
        recommendedLevel: "Level 5 / Level 6",
        levelName: "Advanced or Professional Diploma (MCIPS Pathway)",
        points: 5,
      },
    ],
  },
  {
    id: 2,
    question: "What is your ultimate professional career goal?",
    subtitle: "What milestone are you looking to achieve with CIPS?",
    options: [
      {
        label: "Enter the procurement industry with a recognised UK credential",
        description: "Build foundational knowledge and secure an entry-level buying role.",
        recommendedLevel: "Level 2",
        levelName: "Certificate in Procurement & Supply Operations",
        points: 2,
      },
      {
        label: "Earn a globally respected professional diploma for mid-tier promotion",
        description: "Gain standard commercial competencies recognized across multinational employers.",
        recommendedLevel: "Level 4 (Most Popular)",
        levelName: "Diploma in Procurement & Supply",
        points: 4,
      },
      {
        label: "Achieve MCIPS Chartered Status (Full Chartered Procurement Executive)",
        description: "Ascend to CPO / Head of Procurement with full UK Chartered status.",
        recommendedLevel: "Level 6",
        levelName: "Professional Diploma Strategic Procurement Leadership",
        points: 6,
      },
    ],
  },
];

export default function LSHSLevelAssessmentModal({
  isOpen,
  onClose,
}: LSHSLevelAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{
    level: string;
    title: string;
    description: string;
    credits: string;
    modules: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSelectOption = (index: number) => {
    const updated = [...selectedAnswers, index];
    setSelectedAnswers(updated);

    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendation based on Q1 selection primarily
      const q1Choice = questions[0].options[updated[0]];
      if (q1Choice.points === 2) {
        setResult({
          level: "Level 2",
          title: "Certificate in Procurement and Supply Operations",
          description:
            "Your ideal starting point to build practical foundations. No formal prerequisites required — learn basic purchasing cycles, supplier relationship fundamentals, and risk awareness.",
          credits: "18 Credits",
          modules: "5 Modules",
        });
      } else if (q1Choice.points === 3) {
        setResult({
          level: "Level 3",
          title: "Advanced Certificate in Procurement & Supply Operations",
          description:
            "Prepares operational professionals to transition into tactical management with solid commercial tools, stakeholder coordination, and contract monitoring.",
          credits: "30 Credits",
          modules: "6 Modules (4 core + 2 elective)",
        });
      } else if (q1Choice.points === 5) {
        setResult({
          level: "Level 5 / 6 (MCIPS)",
          title: "Advanced / Professional Diploma in Strategic Procurement",
          description:
            "If you have already cleared Level 4 or have substantial senior experience, you are positioned for executive leadership, category governance, and direct Chartered MCIPS status.",
          credits: "60 Credits per level",
          modules: "Core + Elective Modules",
        });
      } else {
        // Default to Level 4 (Most Popular)
        setResult({
          level: "Level 4 (Most Popular)",
          title: "Diploma in Procurement and Supply",
          description:
            "The industry benchmark qualification. Over 80% of degree holders and working professionals start here to master commercial contracting, supplier negotiations, and ethical sourcing.",
          credits: "60 Credits",
          modules: "8 Modules",
        });
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sky-200 overflow-hidden my-8 animate-in fade-in duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0c4a6e] to-[#0b73b9] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#f4d210] text-slate-950 px-2.5 py-0.5 rounded-full">
                Interactive Advisor
              </span>
              <span className="text-xs text-sky-200">CIPS Entry Diagnostic</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
              Find Your Ideal CIPS Starting Level
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {!result ? (
            <div>
              {/* Progress dots */}
              <div className="flex items-center gap-2 mb-6">
                {questions.map((q, idx) => (
                  <div
                    key={q.id}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentStep
                        ? "w-8 bg-[#0b73b9]"
                        : idx < currentStep
                        ? "w-4 bg-sky-300"
                        : "w-4 bg-slate-200"
                    }`}
                  />
                ))}
                <span className="text-xs text-slate-500 font-semibold ml-2">
                  Question {currentStep + 1} of {questions.length}
                </span>
              </div>

              {/* Current Question */}
              <div className="mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  {questions[currentStep].question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-[#0b73b9] hover:bg-sky-50/60 transition-all duration-200 group flex items-start gap-3 cursor-pointer"
                  >
                    <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0b73b9] text-slate-700 group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#0b73b9] transition-colors">
                        {option.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {option.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                <span>✓</span> Recommended Level for You
              </div>

              <div className="bg-sky-50 border-2 border-sky-300 rounded-2xl p-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0b73b9] bg-white px-2.5 py-1 rounded border border-sky-200">
                    {result.level}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    {result.credits} • {result.modules}
                  </span>
                </div>
                <h4 className="text-2xl font-bold font-serif text-slate-900">
                  {result.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {result.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://forms.gle/kHkicZ6TaHQRoMck6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-[#f4d210] hover:bg-amber-300 text-slate-950 font-bold text-sm text-center shadow-md transition-all"
                  >
                    Apply for this Level (Admission Form) ↗
                  </a>
                  <a
                    href="https://cips.lshs.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-sm text-center shadow-md transition-all"
                  >
                    View Modules on cips.lshs.co.uk ↗
                  </a>
                </div>

                <div className="flex justify-between items-center pt-3 text-xs text-slate-500">
                  <button
                    onClick={handleReset}
                    className="text-[#0b73b9] hover:underline font-semibold"
                  >
                    ← Retake Assessment
                  </button>
                  <button
                    onClick={onClose}
                    className="text-slate-500 hover:text-slate-900"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
