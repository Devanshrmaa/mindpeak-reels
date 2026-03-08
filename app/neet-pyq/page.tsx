import NEETPYQHub from "@/views/NEETPYQHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  title: `NEET PYQ ${CURRENT_EXAM_YEAR} — 10 Years Previous Year Questions [Free Solutions]`,
  description: `Solve real NEET PYQs (2015–2025). Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free NEET PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-pyq" },
};
export default function Page() { return <NEETPYQHub />; }
