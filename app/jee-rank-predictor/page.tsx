import RankPredictor from "@/views/RankPredictor";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} — Free Tool | MindPeak`,
  description: `Use MindPeak's free JEE Main Rank Predictor to estimate your ${CURRENT_EXAM_YEAR} All India Rank and get college suggestions based on JoSAA cutoff data.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-rank-predictor" },
  openGraph: {
    title: `Free JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} — Estimate Your AIR`,
    description:
      "Predict your JEE Main All India Rank instantly. Enter your score and get college suggestions based on latest JoSAA cutoff data.",
    url: "https://mindpeakinstitute.com/jee-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `JEE Main Rank Predictor ${CURRENT_EXAM_YEAR} — Free | MindPeak`,
    description:
      "Enter your JEE Main score → get your estimated AIR + college list. Based on official JoSAA cutoff data.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function Page() { return <RankPredictor />; }
