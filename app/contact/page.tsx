import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MindPeak Institute — JEE & NEET Coaching Enquiries",
  description: "Get in touch with MindPeak Institute. Call +91 82194 57704, email us, or WhatsApp for JEE & NEET coaching enquiries. Mon-Sat, 9 AM – 8 PM IST.",
  alternates: { canonical: "https://mindpeakinstitute.com/contact" },
};
export default function ContactPage() { return <Contact />; }
