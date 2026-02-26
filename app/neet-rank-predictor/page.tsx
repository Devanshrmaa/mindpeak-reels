import RankPredictor from "@/views/RankPredictor";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Predict Your AIR & College`,
  description: `Use MindPeak's free NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} to estimate your All India Rank and get college suggestions. Based on MCC cutoff data.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-rank-predictor" },
};
export default function Page() { return <RankPredictor />; }
