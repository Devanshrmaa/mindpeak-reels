import OnlineVsOffline from "@/views/OnlineVsOffline";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Online vs Offline JEE Coaching — Which Is Better in ${CURRENT_EXAM_YEAR}?`,
  description: "Honest comparison of online vs offline JEE/NEET coaching. Pros, cons, costs, effectiveness. See why 1-on-1 online coaching outperforms batch classrooms.",
  alternates: { canonical: "https://mindpeakinstitute.com/online-vs-offline-jee-coaching" },
  openGraph: {
    title: `Online vs Offline JEE Coaching ${CURRENT_EXAM_YEAR} — 1-on-1 Wins Every Time`,
    description: "See why 1-on-1 online JEE coaching outperforms offline batch classes. Honest cost, results and effectiveness comparison. Data from MindPeak.",
    url: "https://mindpeakinstitute.com/online-vs-offline-jee-coaching",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Online vs Offline JEE Coaching ${CURRENT_EXAM_YEAR} — The Honest Comparison`,
    description: "Costs, results, flexibility compared. See why personalized 1-on-1 online coaching beats offline batch. By MindPeak.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function Page() { return <OnlineVsOffline />; }
