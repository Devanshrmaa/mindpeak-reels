import OnlineVsOffline from "@/views/OnlineVsOffline";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Online vs Offline JEE Coaching — Which Is Better in ${CURRENT_EXAM_YEAR}?`,
  description: "Honest comparison of online vs offline JEE/NEET coaching. Pros, cons, costs, effectiveness. See why 1-on-1 online coaching outperforms batch classrooms.",
  alternates: { canonical: "https://mindpeakinstitute.com/online-vs-offline-jee-coaching" },
};
export default function Page() { return <OnlineVsOffline />; }
