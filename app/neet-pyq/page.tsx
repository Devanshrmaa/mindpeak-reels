import NEETPYQHub from "@/views/NEETPYQHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEET Previous Year Questions (PYQ) — 2015–2024",
  description: "Solve real NEET previous year questions from 2015 to 2024. Chapter-wise PYQs for Biology, Physics & Chemistry with detailed NCERT-based solutions. Free NEET PYQ practice by MindPeak.",
  alternates: { canonical: "https://mindpeakinstitute.com/neet-pyq" },
};
export default function Page() { return <NEETPYQHub />; }
