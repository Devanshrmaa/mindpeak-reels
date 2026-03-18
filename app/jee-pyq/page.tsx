import JEEPYQHub from "@/views/JEEPYQHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE PYQ ${CURRENT_EXAM_YEAR} — 10 Years Previous Year Questions [Free Solutions]`,
  description: `Solve real JEE Main & Advanced PYQs (2015–2025). Chapter-wise with year, shift info & detailed solutions. 100% free JEE PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-pyq" },
};
export default function Page() { return <JEEPYQHub />; }
