import RankPredictor from "@/views/RankPredictor";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} — Predict Your AIR & College`,
  description: `Use MindPeak's free JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} to estimate your All India Rank and get college suggestions. Based on JoSAA cutoff data.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-rank-predictor" },
  openGraph: {
    title: `JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} — Estimate Your AIR & College Instantly`,
    description: `Enter your JEE Main ${CURRENT_EXAM_YEAR} score and predict your All India Rank. See realistic college options from JoSAA/CSAB data. Free tool by MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} — Predict AIR & College`,
    description: `Enter your score, get your predicted AIR and top college options. Based on JoSAA cutoff data. Free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function Page() { return <RankPredictor />; }
