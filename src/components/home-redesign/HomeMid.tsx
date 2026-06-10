"use client";

import { S } from "./theme";
import { MpButton } from "./MpButton";

export function MpLedger() {
  const rows = [
    { rank: "AIR 42", exam: "JEE Advanced", name: "Aarav Sharma", note: "IIT Bombay, Computer Science", img: "/images/aarav-sharma.jpg" },
    { rank: "AIR 89", exam: "JEE Mains", name: "Rohan Gupta", note: "99.97 percentile, dropper year", img: "/images/rohan-gupta.jpg" },
    { rank: "AIR 156", exam: "NEET UG", name: "Priya Patel", note: "AIIMS Delhi, MBBS", img: "/images/priya-patel.jpg" },
  ];
  return (
    <section id="results" className="mp-x" style={{ padding: "88px 48px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 20, gap: 24, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: S.disp, fontSize: 42, fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: 0, color: S.navy }}>The results ledger</h2>
        <span style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: S.inkSoft, fontWeight: 600 }}>500+ students mentored · 95% success rate</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="mp-ledger-row" style={{ display: "grid", gridTemplateColumns: "200px 150px 1fr 64px", gap: 24, alignItems: "center", padding: "22px 0", borderTop: `1px solid ${S.line}` }}>
          <div style={{ fontFamily: S.disp, fontSize: 44, fontWeight: 700, color: S.gold, letterSpacing: "-0.02em" }}>{r.rank}</div>
          <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: S.inkSoft, fontWeight: 600 }}>{r.exam}</div>
          <div style={{ fontSize: 19, color: S.navy }}>{r.name} <span style={{ color: S.inkSoft, fontSize: 16 }}>— {r.note}</span></div>
          <img src={r.img} alt={r.name} style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }} />
        </div>
      ))}
      <div style={{ borderTop: `1px solid ${S.line}`, paddingTop: 18, display: "flex", justifyContent: "space-between", fontSize: 13.5, color: S.inkSoft, gap: 24, flexWrap: "wrap" }}>
        <span>+ 50 more students under AIR 5,000 — full list published yearly</span>
        <a href="/results" style={{ fontWeight: 600, color: S.navy, textDecoration: "none" }}>Read all success stories →</a>
      </div>
    </section>
  );
}

export function MpReportProof() {
  const bars = [
    { k: "Biology — Genetics", v: 92, c: "#3E8E5A" },
    { k: "Chemistry — Equilibrium", v: 78, c: S.gold },
    { k: "Physics — Optics", v: 61, c: "#C25B3F" },
  ];
  const stats = [
    { v: "AIR 156", k: "Priya’s final NEET rank" },
    { v: "< 30 min", k: "doubt response time" },
    { v: "6 days", k: "live classes per week" },
  ];
  return (
    <section className="mp-x mp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, padding: "88px 48px", alignItems: "center" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 18, border: `1px solid ${S.line}`, boxShadow: "0 18px 48px rgba(19,32,63,0.10)", padding: "26px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <span style={{ fontFamily: S.disp, fontWeight: 700, fontSize: 17, color: S.navy }}>Weekly report — Priya P.</span>
          <span style={{ fontSize: 12, color: S.inkSoft }}>Week 31 · NEET UG</span>
        </div>
        {bars.map((r, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6, color: S.navy }}>
              <span style={{ fontWeight: 600 }}>{r.k}</span><span style={{ color: S.inkSoft, fontWeight: 400 }}>{r.v}% accuracy</span>
            </div>
            <div style={{ height: 8, borderRadius: 999, background: "#EEF0F5" }}>
              <div style={{ width: `${r.v}%`, height: "100%", borderRadius: 999, background: r.c }} />
            </div>
          </div>
        ))}
        <div style={{ fontSize: 13, lineHeight: 1.55, color: S.inkSoft, background: "#F7F8FB", borderRadius: 10, padding: "12px 14px", marginTop: 18 }}>
          <strong style={{ color: S.navy }}>Mentor&apos;s note:</strong> Optics needs two extra sessions this week — plan adjusted. Genetics is exam-ready.
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: S.disp, fontSize: 42, fontWeight: S.dispWeight, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 18px", color: S.navy }}>
          Parents see everything.<br />Every single week.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: S.inkSoft, maxWidth: 460, margin: "0 0 26px" }}>
          No more &quot;how is the prep going?&quot; guesswork. Weekly analytics show exactly where
          your child stands — accuracy, speed, topic-wise performance — and what the mentor
          is changing in response.
        </p>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {stats.map((s, i) => (
            <div key={i}>
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
    { no: "01", t: "JEE Main + Advanced", d: "1-year and 2-year programs with personal IIT/NIT mentors, weekly CBT mocks, a roadmap built around your target rank.", best: "Best result: AIR 42" },
    { no: "02", t: "NEET UG", d: "NCERT line-by-line mastery first, Biology specialists from AIIMS, NTA-pattern computer-based mocks.", best: "Best result: AIR 156" },
    { no: "03", t: "Foundation · Class 6–10", d: "Boards + Olympiad + NTSE, building scientific habits before the competitive years.", best: "95%+ board scores" },
  ];
  return (
    <section id="programs" className="mp-x" style={{ padding: "0 48px 88px" }}>
      <div className="mp-programs-card" style={{ background: S.bgDeep, borderRadius: 24, padding: "48px 48px 44px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: S.inkSoft, marginBottom: 28, fontWeight: 600 }}>Programs — choose your exam</div>
        <div className="mp-3col mp-programs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {programs.map((p, i) => (
            <div key={i} style={{ padding: i ? "0 36px" : "0 36px 0 0", borderLeft: i ? `1px solid ${S.line}` : "none" }}>
              <div style={{ fontSize: 12, color: S.gold, fontWeight: 700 }}>{p.no}</div>
              <h3 style={{ fontFamily: S.disp, fontSize: 25, fontWeight: 600, margin: "10px 0 12px", color: S.navy }}>{p.t}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: S.inkSoft, margin: "0 0 18px" }}>{p.d}</p>
              <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: S.gold, fontWeight: 700 }}>{p.best}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${S.line}`, marginTop: 36, paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <span style={{ fontSize: 14.5, color: S.inkSoft, maxWidth: 620 }}>Also available: subject crash courses, 1-on-1 crash programs, dropper batches and CBT test series. Join anytime — no batch dependency.</span>
          <MpButton onClick={onCta} style={{ padding: "13px 26px", fontSize: 14 }}>Find my program</MpButton>
        </div>
      </div>
    </section>
  );
}
