"use client";

import type { CSSProperties } from "react";
import { Atom, Stethoscope, GraduationCap } from "lucide-react";
import { S } from "./theme";
import { MpButton, MpEyebrow } from "./MpButton";

const dd = (i: number, base = 0.08) => ({ "--d": `${i * base}s` } as CSSProperties);

export function MpLedger() {
  const rows = [
    { rank: "AIR 42", exam: "JEE Advanced", name: "Aarav Sharma", note: "IIT Bombay, Computer Science", img: "/images/aarav-sharma.jpg" },
    { rank: "AIR 89", exam: "JEE Mains", name: "Rohan Gupta", note: "99.97 percentile, dropper year", img: "/images/rohan-gupta.jpg" },
    { rank: "AIR 156", exam: "NEET UG", name: "Priya Patel", note: "AIIMS Delhi, MBBS", img: "/images/priya-patel.jpg" },
  ];
  return (
    <section id="results" className="mp-x" style={{ padding: "96px 48px 0" }}>
      <div data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingBottom: 24, gap: 24, flexWrap: "wrap" }}>
        <div>
          <MpEyebrow>Proof, not promises</MpEyebrow>
          <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: 0, color: S.navy }}>The results ledger</h2>
        </div>
        <span style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: S.inkSoft, fontWeight: 600 }}>500+ students mentored · 95% success rate</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} data-reveal style={{ borderTop: `1px solid ${S.line}`, ...dd(i) }}>
          <div className="mp-ledger-row mp-ledger-hover" style={{ display: "grid", gridTemplateColumns: "200px 150px 1fr 64px", gap: 24, alignItems: "center", padding: "24px 18px", margin: "0 -18px" }}>
            <div style={{ fontFamily: S.disp, fontSize: 46, fontWeight: 700, color: S.gold, letterSpacing: "-0.02em" }}>{r.rank}</div>
            <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: S.inkSoft, fontWeight: 600 }}>{r.exam}</div>
            <div style={{ fontSize: 19, color: S.navy, fontWeight: 500 }}>{r.name} <span style={{ color: S.inkSoft, fontSize: 16, fontWeight: 400 }}>— {r.note}</span></div>
            <img src={r.img} alt={r.name} style={{ width: 58, height: 58, borderRadius: "50%", objectFit: "cover", border: `2px solid ${S.goldSoft}`, boxShadow: "0 6px 16px rgba(19,32,63,0.14)" }} />
          </div>
        </div>
      ))}
      <div data-reveal style={{ borderTop: `1px solid ${S.line}`, paddingTop: 20, display: "flex", justifyContent: "space-between", fontSize: 13.5, color: S.inkSoft, gap: 24, flexWrap: "wrap" }}>
        <span>+ 50 more students under AIR 5,000 — full list published yearly</span>
        <a href="/success-stories" className="mp-arrow-link" style={{ fontWeight: 600, color: S.navy, textDecoration: "none" }}>
          Read all success stories <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

export function MpReportProof() {
  const bars = [
    { k: "Biology — Genetics", v: 92, c: S.green },
    { k: "Chemistry — Equilibrium", v: 78, c: S.gold },
    { k: "Physics — Optics", v: 61, c: S.terracotta },
  ];
  const stats = [
    { v: "AIR 156", k: "Priya’s final NEET rank" },
    { v: "< 30 min", k: "doubt response time" },
    { v: "6 days", k: "live classes per week" },
  ];
  return (
    <section className="mp-x mp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, padding: "96px 48px", alignItems: "center" }}>
      <div data-reveal style={{ position: "relative" }}>
        <div aria-hidden style={{ position: "absolute", top: -50, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(227,190,85,0.22) 0%, rgba(227,190,85,0) 65%)", pointerEvents: "none" }} />
        <div className="mp-lift mp-spot" style={{ position: "relative", background: S.card, borderRadius: 20, border: `1px solid ${S.line}`, boxShadow: S.shadowSoft, padding: "28px 30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
            <span style={{ fontFamily: S.disp, fontWeight: 700, fontSize: 17, color: S.navy }}>Weekly report — Priya P.</span>
            <span style={{ fontSize: 12, color: S.inkSoft, background: S.bgDeep, borderRadius: 999, padding: "5px 12px", fontWeight: 600 }}>Week 31 · NEET UG</span>
          </div>
          {bars.map((r, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6, color: S.navy }}>
                <span style={{ fontWeight: 600 }}>{r.k}</span><span style={{ color: S.inkSoft, fontWeight: 400 }}>{r.v}% accuracy</span>
              </div>
              <div style={{ height: 8, borderRadius: 999, background: S.cardTint, overflow: "hidden" }}>
                <div className="mp-bar-fill" style={{ "--w": `${r.v}%`, height: "100%", borderRadius: 999, background: r.c } as CSSProperties} />
              </div>
            </div>
          ))}
          <div style={{ fontSize: 13, lineHeight: 1.55, color: S.inkSoft, background: S.cardTint, borderLeft: `3px solid ${S.goldBtn}`, borderRadius: 10, padding: "12px 14px", marginTop: 18 }}>
            <strong style={{ color: S.navy }}>Mentor&apos;s note:</strong> Optics needs two extra sessions this week — plan adjusted. Genetics is exam-ready.
          </div>
        </div>
      </div>

      <div data-reveal style={{ ...dd(1, 0.12) }}>
        <MpEyebrow>Weekly parent report</MpEyebrow>
        <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", lineHeight: 1.08, margin: "0 0 18px", color: S.navy }}>
          Parents see everything.<br />Every single week.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: S.inkSoft, maxWidth: 460, margin: "0 0 30px" }}>
          No more &quot;how is the prep going?&quot; guesswork. Weekly analytics show exactly where
          your child stands — accuracy, speed, topic-wise performance — and what the mentor
          is changing in response.
        </p>
        <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderTop: `1px solid ${S.line}` }}>
          {stats.map((s, i) => (
            <div key={i} style={{ paddingTop: 18, paddingRight: 28, paddingLeft: i ? 28 : 0, borderLeft: i ? `1px solid ${S.line}` : "none" }}>
              <div style={{ fontFamily: S.disp, fontSize: 30, fontWeight: 700, color: S.gold }}>{s.v}</div>
              <div style={{ fontSize: 13, color: S.inkSoft, marginTop: 4 }}>{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MpPrograms({ onCta }: { onCta: () => void }) {
  const programs = [
    { no: "01", Icon: Atom, t: "JEE Main + Advanced", d: "1-year and 2-year programs with personal IIT/NIT mentors, weekly CBT mocks, a roadmap built around your target rank.", best: "Best result: AIR 42" },
    { no: "02", Icon: Stethoscope, t: "NEET UG", d: "NCERT line-by-line mastery first, Biology specialists from AIIMS, NTA-pattern computer-based mocks.", best: "Best result: AIR 156" },
    { no: "03", Icon: GraduationCap, t: "Foundation · Class 6–10", d: "Boards + Olympiad + NTSE, building scientific habits before the competitive years.", best: "95%+ board scores" },
  ];
  return (
    <section id="programs" className="mp-x" style={{ padding: "0 48px 96px" }}>
      <div data-reveal className="mp-programs-card" style={{ position: "relative", overflow: "hidden", background: S.bgDeep, borderRadius: 26, border: `1px solid ${S.line}`, padding: "52px 48px 44px" }}>
        <div aria-hidden style={{ position: "absolute", top: -120, right: -100, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(227,190,85,0.20) 0%, rgba(227,190,85,0) 65%)", pointerEvents: "none" }} />
        <MpEyebrow style={{ marginBottom: 30 }}>Programs — choose your exam</MpEyebrow>
        <div className="mp-3col mp-programs-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {programs.map((p, i) => (
            <div key={i} data-reveal className="mp-program" style={{ position: "relative", padding: i ? "0 36px" : "0 36px 0 0", borderLeft: i ? `1px solid ${S.line}` : "none", ...dd(i) }}>
              <span aria-hidden style={{ position: "absolute", top: -6, right: i ? 0 : 36, fontFamily: S.disp, fontSize: 13, fontWeight: 700, color: S.line }}>{p.no}</span>
              <span aria-hidden className="mp-pillar-ic" style={{ display: "grid", placeItems: "center", width: 48, height: 48, borderRadius: 14, background: S.gradGold, boxShadow: "0 10px 24px rgba(201,151,31,0.26)" }}>
                <p.Icon style={{ width: 22, height: 22, color: S.navyDeep }} strokeWidth={2.2} />
              </span>
              <h3 style={{ fontFamily: S.disp, fontSize: 25, fontWeight: 600, margin: "18px 0 12px", color: S.navy }}>{p.t}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: S.inkSoft, margin: "0 0 18px" }}>{p.d}</p>
              <div style={{ display: "inline-block", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: S.goldInk, fontWeight: 700, background: S.goldSoft, borderRadius: 999, padding: "6px 13px" }}>{p.best}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "relative", borderTop: `1px solid ${S.line}`, marginTop: 38, paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <span style={{ fontSize: 14.5, color: S.inkSoft, maxWidth: 620, lineHeight: 1.6 }}>Also available: subject crash courses, 1-on-1 crash programs, dropper batches and CBT test series. Join anytime — no batch dependency.</span>
          <MpButton onClick={onCta} style={{ padding: "13px 26px", fontSize: 14 }}>Find my program</MpButton>
        </div>
      </div>
    </section>
  );
}
