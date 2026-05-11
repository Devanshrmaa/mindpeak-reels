import type { Metadata } from "next";
import JEECoachingHimachalPradesh from "@/views/JEECoachingHimachalPradesh";

export const revalidate = false;

const title = "JEE Coaching Himachal Pradesh — 1-on-1 Online | MindPeak Institute";
const description =
  "The only personalized 1-on-1 JEE coaching built for Himachal Pradesh students. No Kota relocation. Expert IIT/NIT mentors, adaptive curriculum, 95% success rate. Free trial class.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-coaching-himachal-pradesh" },
  openGraph: {
    title,
    description,
    url: "https://mindpeakinstitute.com/jee-coaching-himachal-pradesh",
    siteName: "MindPeak Institute",
    type: "website",
  },
  keywords: [
    "JEE coaching Himachal Pradesh",
    "best JEE coaching Himachal Pradesh",
    "online JEE coaching HP",
    "JEE coaching Kangra",
    "JEE coaching Dharamshala",
    "JEE coaching Shimla online",
    "JEE tutor Himachal Pradesh",
    "IIT coaching Himachal Pradesh",
    "JEE 2026 Himachal Pradesh",
    "MindPeak Institute Kangra",
  ],
};

export default function Page() {
  return <JEECoachingHimachalPradesh />;
}
