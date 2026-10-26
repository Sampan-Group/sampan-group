import type { Metadata } from "next";
import LSHSLandingClient from "../components/LSHSLandingClient";

export const metadata: Metadata = {
  title: "London School of Higher Studies (LSHS) | CIPS Approved Study Centre",
  description:
    "Official CIPS UK Approved Study Centre & Exam Centre (Centre No: 10005967). Study Level 2 to Level 6 MCIPS Chartered procurement qualifications.",
};

export default function LondonSchoolOfHigherStudiesSubPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <LSHSLandingClient />
    </main>
  );
}
