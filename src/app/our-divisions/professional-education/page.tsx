import type { Metadata } from "next";
import LSHSLandingClient from "./components/LSHSLandingClient";

export const metadata: Metadata = {
  title: "London School of Higher Studies (LSHS) | CIPS Approved Study Centre | Sampan Group",
  description:
    "London School of Higher Studies (LSHS) is an official CIPS UK Approved Study Centre & Exam Centre (Centre No: 10005967). Study Level 2 to Level 6 MCIPS Chartered procurement and supply chain qualifications flexibly with world-class UK tutoring.",
  keywords: [
    "London School of Higher Studies",
    "LSHS",
    "CIPS Bangladesh",
    "CIPS UK",
    "MCIPS",
    "Procurement and Supply Chain",
    "Sampan Group Education",
    "CIPS Level 4 Diploma",
  ],
};

export default function ProfessionalEducationDivisionPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <LSHSLandingClient />
    </main>
  );
}
