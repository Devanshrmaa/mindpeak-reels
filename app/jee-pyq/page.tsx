import JEEPYQHub from "@/views/JEEPYQHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Previous Year Questions (PYQ) — 2015–2024",
  description: "Solve real JEE Main & Advanced previous year questions from 2015 to 2024. Chapter-wise PYQs with year, shift info, and detailed solutions. Free JEE PYQ practice by MindPeak.",
  alternates: { canonical: "https://mindpeakinstitute.com/jee-pyq" },
};
export default function Page() { return <JEEPYQHub />; }
