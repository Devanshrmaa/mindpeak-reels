import RankPredictor from "@/views/RankPredictor";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} — Predict Your AIR & College`,
  description: `Use MindPeak's free JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} to estimate your All India Rank and get college suggestions. Based on JoSAA cutoff data.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-rank-predictor" },
};
export default function Page() { return <RankPredictor />; }
