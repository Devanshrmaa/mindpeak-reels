"use client";

import type { CSSProperties } from "react";
import { S } from "./theme";
import { MpButton } from "./MpButton";

const scrollToResults = () => {
  const el = document.getElementById("results");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
};

export function MpNav({ onCta }: { onCta: () => void }) {
  const link: CSSProperties = { fontSize: 14, fontWeight: 500, color: S.inkSoft, cursor: "pointer", textDecoration: "none" };
  return (
    <nav className="mp-x mp-nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 48px", position: "sticky", top: 0, zIndex: 50, background: S.bgTranslucent, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid ${S.line}` }}>
      <a href="/" aria-label="MindPeak Institute home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <img src="/images/logo.jpeg" alt="MindPeak Institute" style={{ width: 34, height: 34, borderRadius: "50%" }} />
        <span style={{ fontFamily: S.disp, fontWeight: 700, fontSize: 17, color: S.navy }}>MindPeak</span>
      </a>
      <div className="mp-nav-links" style={{ display: "flex", gap: 26 }}>
        <a href="/jee-coaching" style={link}>JEE</a>
        <a href="/neet-coaching" style={link}>NEET</a>
        <a href="/courses" style={link}>Foundation</a>
        <a href="#results" style={link}>Results</a>
        <a href="#faq" style={link}>FAQ</a>
        <a href="#contact" style={link}>Contact</a>
      </div>
      <MpButton onClick={onCta} style={{ padding: "11px 22px", fontSize: 14 }}>Book a free demo</MpButton>
    </nav>
  );
}

export function MpHero({ onCta }: { onCta: () => void }) {
  const chip: CSSProperties = { fontFamily: S.body, fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 999, border: `1px solid ${S.line}`, color: S.inkSoft };
  return (
    <header className="mp-x mp-2col" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, padding: "56px 48px 88px", alignItems: "center" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 26, flexWrap: "wrap" }}>
          <span style={{ ...chip, background: S.goldSoft, borderColor: "transparent", color: "#7A5B0E" }}>500+ students mentored</span>
          <span style={chip}>95% success rate</span>
          <span style={chip}>IIT · NIT · AIIMS mentors</span>
        </div>
        <h1 style={{ fontFamily: S.disp, fontSize: 62, lineHeight: 1.05, fontWeight: S.dispWeight, letterSpacing: "-0.025em", margin: 0, color: S.navy }}>
          The mentor who knows your name, your weak chapters, and your{" "}
          <span style={{ background: `linear-gradient(transparent 62%, ${S.goldSoft} 62%)` }}>rank goal.</span>
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: S.inkSoft, maxWidth: 480, margin: "24px 0 32px" }}>
          Daily live 1-on-1 classes with a personal IIT/NIT/AIIMS mentor — not a seat in a
          batch of 100. Doubts answered in under 30 minutes, parents updated every week.
        </p>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <MpButton onClick={onCta} style={{ padding: "15px 30px" }}>Meet your mentor — free demo</MpButton>
          <MpButton kind="outline" onClick={scrollToResults} style={{ padding: "15px 26px" }}>See the results ledger</MpButton>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 28 }}>
          <div style={{ display: "flex" }}>
            {["student-1", "student-2", "student-3", "student-4"].map((s, i) => (
              <img key={s} src={`/images/${s}.jpg`} alt="MindPeak student" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: `2px solid ${S.bg}`, marginLeft: i ? -10 : 0 }} />
            ))}
          </div>
          <span style={{ fontSize: 13.5, color: S.inkSoft }}>Joined by students from 120+ cities across India</span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <img src="/images/mentoring-session-2.jpg" alt="MindPeak mentor session" style={{ width: "100%", height: 460, objectFit: "cover", borderRadius: 20, display: "block" }} />
        <div style={{ position: "absolute", left: -28, bottom: -34, width: 330, background: "#FFFFFF", borderRadius: 16, boxShadow: "0 24px 60px rgba(19,32,63,0.22)", padding: "18px 18px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: S.inkSoft, marginBottom: 12 }}>
            <span style={{ fontWeight: 700, color: S.navy }}>Doubt chat · Physics</span><span>11:42 PM</span>
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, background: "#F1F3F8", borderRadius: "12px 12px 12px 4px", padding: "10px 12px", marginBottom: 8, maxWidth: "92%", color: S.navy }}>
            Sir, rotational mechanics Q14 — why is angular momentum conserved here?
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, background: S.goldSoft, borderRadius: "12px 12px 4px 12px", padding: "10px 12px", marginLeft: "auto", maxWidth: "92%", color: S.navy }}>
            No external torque about the axis — sending a 2-min video walkthrough now. ✓
          </div>
          <div style={{ fontSize: 11.5, color: S.inkSoft, textAlign: "right", marginTop: 8 }}>Resolved in 18 minutes</div>
        </div>
      </div>
    </header>
  );
}

export function MpWeek() {
  const days = [
    { d: "Mon – Sat", t: "Daily 1-on-1 live class", s: "90 min with your personal mentor — concept building on your weak chapters first. Every session recorded." },
    { d: "Wednesday", t: "Practice review", s: "Tiered problem sets checked together; mistakes traced back to the exact concept." },
    { d: "Saturday", t: "CBT mock test", s: "Full NTA-pattern computer-based test — same interface as the real exam." },
    { d: "Sunday", t: "Parent report", s: "Accuracy, speed and topic-wise analytics shared with you and your parents." },
  ];
  return (
    <section className="mp-x" style={{ background: S.navyDeep, color: S.cream, padding: "64px 48px 72px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, gap: 24, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: S.disp, fontSize: 40, fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: 0 }}>What a week looks like</h2>
        <span style={{ fontSize: 14, color: "rgba(251,247,239,0.6)" }}>Every plan is personal — this is Aarav&apos;s, Class 12, target IIT Bombay</span>
      </div>
      <div className="mp-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {days.map((w, i) => (
          <div key={i} style={{ background: "rgba(251,247,239,0.06)", border: "1px solid rgba(251,247,239,0.12)", borderRadius: 16, padding: "24px 22px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E3BE55", marginBottom: 14 }}>{w.d}</div>
            <div style={{ fontFamily: S.disp, fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{w.t}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(251,247,239,0.65)" }}>{w.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
