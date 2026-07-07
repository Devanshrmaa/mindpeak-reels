"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { buildFAQSchemaFromQA } from "@/components/PageFAQ";
import { S } from "./theme";
import { MpButton, MpEyebrow } from "./MpButton";

/* FAQ copy is verbatim from the production site (FAQSection). */
const mpFaqs = [
  { tag: "Format", q: "Are the classes conducted online or offline?", a: "All our classes are conducted online via live 1-on-1 video sessions. The best part? Every live class is recorded, so you can revisit any session anytime for revision. This means you never miss a concept — even if you couldn’t attend a class, the recording is always available." },
  { tag: "Why us", q: "What makes MindPeak different from other coaching institutes?", a: "We offer personalized 1-on-1 live online classes 6 days a week with dedicated mentors — not crowded batch classes. Every student gets a customized study plan, regular performance analytics, and direct access to faculty for doubt resolution. Plus, all sessions are recorded for later revision." },
  { tag: "Demo", q: "How are the demo classes conducted?", a: "Demo classes are free, live 1-on-1 sessions with our faculty. You’ll experience our teaching methodology firsthand, get a personalized assessment of your current level, and receive a tailored roadmap for your preparation." },
  { tag: "Joining", q: "Can I join mid-session or do I have to wait for a new batch?", a: "Since our classes are 1-on-1, you can join anytime! There’s no batch dependency. We’ll create a customized schedule that works for you and align the curriculum to your exam timeline." },
  { tag: "Mentors", q: "Who are the mentors at MindPeak?", a: "Our mentors are graduates from IIT, NIT, and AIIMS with proven teaching experience. Each mentor is carefully selected for both subject expertise and the ability to connect with students. They undergo regular training to stay updated with the latest exam patterns and NTA guidelines." },
  { tag: "Doubts", q: "How quickly are doubts resolved?", a: "Doubts raised during live sessions are cleared instantly. For doubts outside class hours, our average response time is under 30 minutes via our dedicated doubt-resolution channel. Unlike batch coaching where students wait days, at MindPeak no question goes unanswered." },
  { tag: "Droppers", q: "Is MindPeak suitable for dropper students?", a: "Absolutely. We have dedicated dropper programs for both JEE and NEET. Your mentor will evaluate your previous attempt, identify specific gaps, and build a focused plan to maximize your score improvement. Many of our top results — including AIR 89 — came from dropper students." },
  { tag: "Fees", q: "What is the fee structure?", a: "Our fees vary by program and duration. Book a free demo class and our counselor will walk you through all available plans, including any ongoing scholarships or installment options." },
  { tag: "Material", q: "Do you offer any study material or do students need to buy separately?", a: "Comprehensive study material, practice problem sets, and NCERT-aligned notes are included with every program. We also provide free downloadable NCERT textbooks on our website. No need to purchase additional books — our curated resources cover the full JEE and NEET syllabus." },
];

export function MpFAQ({ onCta }: { onCta: () => void }) {
  const [open, setOpen] = useState<number | null>(0);
  const contactLink = { display: "flex", alignItems: "center", gap: 9, padding: "10px 14px", borderRadius: 12, color: "rgba(251,247,239,0.9)", fontSize: 13, fontWeight: 600, textDecoration: "none" } as const;

  return (
    <section id="faq" className="mp-x" style={{ padding: "0 48px 96px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchemaFromQA(mpFaqs)) }}
      />
      <div className="mp-2col mp-faq-grid" style={{ display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 56, alignItems: "start" }}>
        {/* LEFT — sticky intro + "still have a question" CTA panel */}
        <div data-reveal className="mp-faq-aside" style={{ position: "sticky", top: 96 }}>
          <MpEyebrow>Straight answers</MpEyebrow>
          <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.4vw, 42px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", lineHeight: 1.08, margin: "0 0 16px", color: S.navy }}>
            Questions parents<br />ask us
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: S.inkSoft, margin: "0 0 26px", maxWidth: 360 }}>
            Everything about classes, mentors, doubts and fees — answered plainly. Still unsure about something? A counsellor is one message away.
          </p>

          <div className="mp-spot mp-spot-dark" style={{ position: "relative", overflow: "hidden", background: S.gradNavy, color: S.cream, borderRadius: 20, padding: "26px 26px 24px", boxShadow: "0 24px 56px rgba(26,54,93,0.24)" }}>
            <div aria-hidden style={{ position: "absolute", top: -90, right: -70, width: 240, height: 240, borderRadius: "50%", background: S.auroraGoldSoft, pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: S.disp, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Still have a question?</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: S.creamSoft, margin: "0 0 20px" }}>
                Book a free 1-on-1 demo or message us on WhatsApp — we usually reply within the hour.
              </p>
              <MpButton kind="gold" onClick={onCta} style={{ width: "100%", padding: "14px 22px", marginBottom: 12 }}>Book a free demo</MpButton>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 9 }}>
                <a href="https://wa.me/918219457704" target="_blank" rel="noopener noreferrer" className="mp-contact-chip mp-glass-band" style={contactLink}>
                  <span style={{ display: "grid", placeItems: "center", width: 28, height: 28, borderRadius: "50%", background: "rgba(212,168,75,0.14)", flexShrink: 0 }}><MessageCircle style={{ width: 14, height: 14, color: S.goldBtn }} /></span>
                  Chat with us on WhatsApp
                </a>
                <a href="tel:+918219457704" className="mp-contact-chip mp-glass-band" style={contactLink}>
                  <span style={{ display: "grid", placeItems: "center", width: 28, height: 28, borderRadius: "50%", background: "rgba(212,168,75,0.14)", flexShrink: 0 }}><Phone style={{ width: 14, height: 14, color: S.goldBtn }} /></span>
                  +91 82194 57704
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — accordion of rounded, tagged, spotlight cards */}
        <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {mpFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="mp-faq-item mp-spot" style={{ background: isOpen ? S.card : S.chipBg, border: `1px solid ${isOpen ? "rgba(212,168,75,0.5)" : S.line}`, borderRadius: 16, boxShadow: isOpen ? "0 16px 40px rgba(26,54,93,0.10)" : "none" }}>
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                    <span style={{ alignSelf: "flex-start", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: S.goldInk, background: S.goldSoft, borderRadius: 999, padding: "3px 9px" }}>{f.tag}</span>
                    <span style={{ fontFamily: S.body, fontSize: 15.5, fontWeight: 600, color: S.navy, lineHeight: 1.4 }}>{f.q}</span>
                  </span>
                  <span aria-hidden style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", border: `1px solid ${isOpen ? S.gold : S.line}`, background: isOpen ? S.goldSoft : S.card, display: "grid", placeItems: "center", color: isOpen ? S.goldInk : S.inkSoft, transform: isOpen ? "rotate(45deg)" : "none", transition: "all 300ms cubic-bezier(0.16,1,0.3,1)", fontSize: 18, lineHeight: 1 }}>+</span>
                </button>
                {/* Answer stays in the DOM (SEO/a11y); the grid-rows trick animates height. */}
                <div className={`mp-faq-body${isOpen ? " mp-open" : ""}`}>
                  <div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.75, color: S.inkSoft, margin: 0, padding: "0 22px 20px" }}>{f.a}</p>
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
      <div data-reveal className="mp-contact-card" style={{ position: "relative", overflow: "hidden", background: S.gradNavy, borderRadius: 26, padding: "60px 56px 50px", color: S.cream, boxShadow: "0 34px 80px rgba(26,54,93,0.30)" }}>
        {/* ambient glow + ring ornaments */}
        <div aria-hidden data-depth="0.25" style={{ position: "absolute", top: -150, right: -120, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,75,0.20) 0%, rgba(212,168,75,0) 65%)", pointerEvents: "none" }} />
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
                <span style={{ display: "grid", placeItems: "center", width: 32, height: 32, borderRadius: "50%", background: "rgba(212,168,75,0.14)", flexShrink: 0 }}>
                  <c.Icon style={{ width: 15, height: 15, color: S.goldBtn }} />
                </span>
                {c.label}
              </>
            );
            const cardStyle = { display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderRadius: 14, color: "rgba(251,247,239,0.88)", fontSize: 13.5, textDecoration: "none" } as const;
            return c.href ? (
              <a key={i} href={c.href} className="mp-contact-chip mp-glass-band" style={cardStyle}>{inner}</a>
            ) : (
              <div key={i} className="mp-contact-chip mp-glass-band" style={cardStyle}>{inner}</div>
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
