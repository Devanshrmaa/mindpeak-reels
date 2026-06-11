"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { S } from "./theme";
import { MpButton, MpEyebrow } from "./MpButton";

/* FAQ copy is verbatim from the production site (FAQSection). */
const mpFaqs = [
  { q: "Are the classes conducted online or offline?", a: "All our classes are conducted online via live 1-on-1 video sessions. The best part? Every live class is recorded, so you can revisit any session anytime for revision. This means you never miss a concept — even if you couldn’t attend a class, the recording is always available." },
  { q: "What makes MindPeak different from other coaching institutes?", a: "We offer personalized 1-on-1 live online classes 6 days a week with dedicated mentors — not crowded batch classes. Every student gets a customized study plan, regular performance analytics, and direct access to faculty for doubt resolution. Plus, all sessions are recorded for later revision." },
  { q: "How are the demo classes conducted?", a: "Demo classes are free, live 1-on-1 sessions with our faculty. You’ll experience our teaching methodology firsthand, get a personalized assessment of your current level, and receive a tailored roadmap for your preparation." },
  { q: "Can I join mid-session or do I have to wait for a new batch?", a: "Since our classes are 1-on-1, you can join anytime! There’s no batch dependency. We’ll create a customized schedule that works for you and align the curriculum to your exam timeline." },
  { q: "Who are the mentors at MindPeak?", a: "Our mentors are graduates from IIT, NIT, and AIIMS with proven teaching experience. Each mentor is carefully selected for both subject expertise and the ability to connect with students. They undergo regular training to stay updated with the latest exam patterns and NTA guidelines." },
  { q: "How quickly are doubts resolved?", a: "Doubts raised during live sessions are cleared instantly. For doubts outside class hours, our average response time is under 30 minutes via our dedicated doubt-resolution channel. Unlike batch coaching where students wait days, at MindPeak no question goes unanswered." },
  { q: "Is MindPeak suitable for dropper students?", a: "Absolutely. We have dedicated dropper programs for both JEE and NEET. Your mentor will evaluate your previous attempt, identify specific gaps, and build a focused plan to maximize your score improvement. Many of our top results — including AIR 89 — came from dropper students." },
  { q: "What is the fee structure?", a: "Our fees vary by program and duration. Book a free demo class and our counselor will walk you through all available plans, including any ongoing scholarships or installment options." },
  { q: "Do you offer any study material or do students need to buy separately?", a: "Comprehensive study material, practice problem sets, and NCERT-aligned notes are included with every program. We also provide free downloadable NCERT textbooks on our website. No need to purchase additional books — our curated resources cover the full JEE and NEET syllabus." },
];

export function MpFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mp-x" style={{ padding: "0 48px 96px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <MpEyebrow style={{ justifyContent: "center" }}>Straight answers</MpEyebrow>
          <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.4vw, 40px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: 0, color: S.navy }}>
            Questions parents ask us
          </h2>
        </div>
        <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {mpFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="mp-faq-item" style={{ background: isOpen ? "#FFFFFF" : "transparent", border: `1px solid ${isOpen ? S.line : "transparent"}`, borderBottom: `1px solid ${S.line}`, borderRadius: isOpen ? 16 : 0, boxShadow: isOpen ? "0 12px 34px rgba(19,32,63,0.08)" : "none" }}>
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontFamily: S.body, fontSize: 15.5, fontWeight: 600, color: S.navy }}>{f.q}</span>
                  <span aria-hidden style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", border: `1px solid ${isOpen ? S.gold : S.line}`, background: isOpen ? S.goldSoft : "transparent", display: "grid", placeItems: "center", color: isOpen ? "#7A5B0E" : S.inkSoft, transform: isOpen ? "rotate(45deg)" : "none", transition: "all 300ms cubic-bezier(0.16,1,0.3,1)", fontSize: 16, lineHeight: 1 }}>+</span>
                </button>
                {/* Answer stays in the DOM (SEO/a11y); the grid-rows trick animates height. */}
                <div className={`mp-faq-body${isOpen ? " mp-open" : ""}`}>
                  <div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.75, color: S.inkSoft, margin: 0, padding: "0 20px 20px" }}>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MpContact({ onCta }: { onCta: () => void }) {
  const cards = [
    { Icon: Phone, label: "+91 82194 57704", href: "tel:+918219457704" },
    { Icon: Mail, label: "mindpeak@mindpeakinstitute.com", href: "mailto:mindpeak@mindpeakinstitute.com" },
    { Icon: MapPin, label: "Dehra Gopipur, Himachal Pradesh", href: null as string | null },
  ];
  return (
    <section id="contact" className="mp-x" style={{ padding: "0 48px 72px" }}>
      <div data-reveal className="mp-contact-card" style={{ position: "relative", overflow: "hidden", background: S.gradNavy, borderRadius: 26, padding: "60px 56px 50px", color: S.cream, boxShadow: "0 34px 80px rgba(19,32,63,0.30)" }}>
        {/* ambient glow + ring ornaments */}
        <div aria-hidden style={{ position: "absolute", top: -150, right: -120, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(227,190,85,0.20) 0%, rgba(227,190,85,0) 65%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: -180, left: -110, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(251,247,239,0.08)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: -120, left: -50, width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(251,247,239,0.06)", pointerEvents: "none" }} />

        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 48, marginBottom: 42, flexWrap: "wrap" }}>
          <div>
            <MpEyebrow light>Free demo · zero commitment</MpEyebrow>
            <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.4vw, 42px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: "0 0 12px" }}>Try one class. Meet your mentor.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: S.creamSoft, margin: 0, maxWidth: 480 }}>
              A live 1-on-1 session, a personalized assessment of your current level, and a study plan sketch you keep either way.
            </p>
          </div>
          <MpButton kind="gold" onClick={onCta} style={{ padding: "17px 34px" }}>Book my free demo class</MpButton>
        </div>
        <div className="mp-3col" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {cards.map((c, i) => {
            const inner = (
              <>
                <span style={{ display: "grid", placeItems: "center", width: 32, height: 32, borderRadius: "50%", background: "rgba(227,190,85,0.14)", flexShrink: 0 }}>
                  <c.Icon style={{ width: 15, height: 15, color: S.goldBtn }} />
                </span>
                {c.label}
              </>
            );
            const cardStyle = { display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", background: S.creamFaint, border: `1px solid ${S.lineLight}`, borderRadius: 14, color: "rgba(251,247,239,0.88)", fontSize: 13.5, textDecoration: "none" } as const;
            return c.href ? (
              <a key={i} href={c.href} className="mp-contact-chip" style={cardStyle}>{inner}</a>
            ) : (
              <div key={i} className="mp-contact-chip" style={cardStyle}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MpFooter() {
  const social = [
    { label: "Instagram", href: "https://instagram.com/mindpeakinstitute" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61584805776923" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/mindpeak-institute/" },
    { label: "X", href: "https://x.com/mindpeakins" },
    { label: "WhatsApp", href: "https://wa.me/918219457704" },
  ];
  return (
    <footer className="mp-x" style={{ borderTop: `1px solid ${S.line}`, padding: "32px 48px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/images/logo.jpeg" alt="MindPeak Institute" style={{ width: 28, height: 28, borderRadius: "50%" }} />
          <span style={{ fontSize: 13, color: S.inkSoft }}>© 2026 MindPeak Institute. All rights reserved.</span>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: S.inkSoft, textDecoration: "none" }}>{s.label}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 12.5, color: S.inkSoft }}>
          <a href="/terms" style={{ color: S.inkSoft, textDecoration: "none" }}>Terms</a>
          <a href="/refund-policy" style={{ color: S.inkSoft, textDecoration: "none" }}>Refund Policy</a>
          <a href="/ncert-books" style={{ color: S.inkSoft, textDecoration: "none" }}>Free NCERT books</a>
        </div>
      </div>
    </footer>
  );
}
