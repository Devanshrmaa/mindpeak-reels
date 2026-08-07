"use client";

import type { CSSProperties } from "react";
import { Star } from "lucide-react";
import { S } from "./theme";
import { MpButton, MpEyebrow } from "./MpButton";
import { MpDivider } from "./HomeExtras";
import { ThemeToggle } from "@/components/ThemeToggle";

const scrollToResults = () => {
  const el = document.getElementById("results");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
};

export function MpNav({ onCta }: { onCta: () => void }) {
  const link: CSSProperties = { fontSize: 14, fontWeight: 500, color: S.inkSoft, cursor: "pointer", textDecoration: "none" };
  return (
    <nav className="mp-x mp-nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", position: "sticky", top: 0, zIndex: 50 }}>
      <a href="/" aria-label="MindPeak Institute home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <span style={{ display: "grid", placeItems: "center", width: 38, height: 38, borderRadius: "50%", background: S.gradGold, flexShrink: 0 }}>
          <img src="/images/logo.jpeg" alt="MindPeak Institute" style={{ width: 32, height: 32, borderRadius: "50%", display: "block" }} />
        </span>
        <span style={{ fontFamily: S.disp, fontWeight: 700, fontSize: 17.5, color: S.navy, letterSpacing: "-0.01em" }}>MindPeak</span>
      </a>
      <div className="mp-nav-links" style={{ display: "flex", gap: 28 }}>
        <a href="/jee-coaching" className="mp-navlink" style={link}>JEE</a>
        <a href="/neet-coaching" className="mp-navlink" style={link}>NEET</a>
        <a href="/courses" className="mp-navlink" style={link}>Foundation</a>
        <a href="#results" className="mp-navlink" style={link}>Results</a>
        <a href="#faculty" className="mp-navlink" style={link}>Faculty</a>
        <a href="#pricing" className="mp-navlink" style={link}>Pricing</a>
        <a href="#faq" className="mp-navlink" style={link}>FAQ</a>
        <a href="#contact" className="mp-navlink" style={link}>Contact</a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <ThemeToggle />
        <MpButton onClick={onCta} style={{ padding: "11px 22px", fontSize: 14 }}>Book a free demo</MpButton>
      </div>
    </nav>
  );
}

export function MpHero({ onCta }: { onCta: () => void }) {
  const chip: CSSProperties = { fontFamily: S.body, fontSize: 12.5, fontWeight: 600, padding: "7px 14px", borderRadius: 999, border: `1px solid ${S.line}`, color: S.inkSoft, background: S.chipBg, backdropFilter: "blur(10px) saturate(150%)", WebkitBackdropFilter: "blur(10px) saturate(150%)" };
  const d = (s: string) => ({ "--d": s } as CSSProperties);
  return (
    <header className="mp-x mp-2col" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, padding: "64px 48px 96px", alignItems: "center" }}>
      {/* ambient backdrop: warm gold glow top-right, cool navy wash bottom-left —
          slowly drifting (aurora) and depth-shifted by the scroll parallax driver */}
      <div aria-hidden data-depth="0.35" style={{ position: "absolute", top: -160, right: -180, width: 560, height: 560, pointerEvents: "none" }}>
        <div className="mp-aurora mp-aurora-a" style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,75,0.26) 0%, rgba(212,168,75,0) 65%)" }} />
      </div>
      <div aria-hidden data-depth="0.2" style={{ position: "absolute", bottom: -200, left: -160, width: 520, height: 520, pointerEvents: "none" }}>
        <div className="mp-aurora mp-aurora-b" style={{ width: "100%", height: "100%", borderRadius: "50%", background: S.auroraNavy }} />
      </div>

      <div style={{ position: "relative" }}>
        <div className="mp-rise" style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap", ...d("0s") }}>
          <span style={{ ...chip, background: S.gradGold, borderColor: "transparent", color: S.navyDeep }}>students across India</span>
          <span style={chip}>1-on-1 format</span>
          <span style={chip}>IIT · NIT · AIIMS mentors</span>
        </div>
        <h1 className="mp-rise" style={{ fontFamily: S.disp, fontSize: "clamp(40px, 5.2vw, 66px)", lineHeight: 1.04, fontWeight: S.dispWeight, letterSpacing: "-0.028em", margin: 0, color: S.navy, ...d("0.08s") }}>
          The mentor who knows your name, your weak chapters, and your{" "}
          <span className="mp-shimmer">rank goal.</span>
        </h1>
        <p className="mp-rise" style={{ fontSize: 18, lineHeight: 1.65, color: S.inkSoft, maxWidth: 490, margin: "26px 0 34px", ...d("0.16s") }}>
          Daily live 1-on-1 classes with a personal IIT/NIT/AIIMS mentor — not a seat in a
          batch of 100. Doubts answered in under 30 minutes, parents updated every week.
        </p>
        <div className="mp-rise" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", ...d("0.24s") }}>
          <MpButton kind="gold" onClick={onCta} style={{ padding: "16px 32px" }}>Meet your mentor — free demo</MpButton>
          <MpButton kind="outline" onClick={scrollToResults} style={{ padding: "15px 26px" }}>See the results ledger</MpButton>
        </div>
        <div className="mp-rise" style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22, ...d("0.28s") }}>
          <div style={{ display: "flex", gap: 2 }} aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} style={{ width: 15, height: 15, color: S.goldBtn, fill: S.goldBtn }} />
            ))}
          </div>
          <span style={{ fontSize: 13.5, color: S.inkSoft }}>
            <strong style={{ color: S.navy, fontWeight: 700 }}></strong> from 
          </span>
        </div>
        <div className="mp-rise" style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 22, ...d("0.32s") }}>
          <div style={{ display: "flex" }}>
            {["student-1", "student-2", "student-3", "student-4"].map((s, i) => (
              <img key={s} src={`/images/${s}.jpg`} alt="MindPeak student" style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: `2px solid ${S.bg}`, boxShadow: "0 4px 12px rgba(26,54,93,0.18)", marginLeft: i ? -11 : 0 }} />
            ))}
          </div>
          <span style={{ fontSize: 13.5, color: S.inkSoft }}>
            <strong style={{ color: S.navy, fontWeight: 700 }}>cities across India</strong> — students join from every corner of India
          </span>
        </div>
      </div>

      <div className="mp-rise" style={{ position: "relative", ...d("0.2s") }}>
       {/* pointer-tracked + scroll-driven 3D tilt group: frame sits deep behind
           the photo plane, the live badge and doubt-chat card float well in
           front of it. data-tilt = pointer rotation, data-scroll-tilt = scroll
           rotation (both compose in the .mp-tilt transform). */}
       <div className="mp-tilt" data-tilt="9" data-scroll-tilt="12" style={{ position: "relative" }}>
        {/* offset gold frame behind the photo */}
        <div aria-hidden style={{ position: "absolute", inset: 0, borderRadius: 22, border: `2px solid ${S.goldBtn}`, transform: "translate(16px, 16px) translateZ(-70px)", opacity: 0.5, pointerEvents: "none" }} />
        <img src="/images/mentoring-session-2.jpg" alt="MindPeak mentor session" style={{ position: "relative", width: "100%", height: 480, objectFit: "cover", borderRadius: 22, display: "block", boxShadow: "0 30px 70px rgba(26,54,93,0.22)" }} />
        <div className="mp-tl" style={{ position: "absolute", top: 18, left: 18, display: "flex", alignItems: "center", gap: 8, background: "rgba(26,54,93,0.78)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", color: S.cream, borderRadius: 999, padding: "8px 15px", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", "--tz": "60px" } as CSSProperties}>
          <span className="mp-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
          LIVE 1-ON-1 CLASS
        </div>
        <div className="mp-float mp-hero-card mp-glass-card" style={{ position: "absolute", left: -30, bottom: -38, width: 332, borderRadius: 18, boxShadow: "0 28px 64px rgba(26,54,93,0.24)", padding: "18px 18px 16px", "--tz": "110px" } as CSSProperties}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: S.inkSoft, marginBottom: 12 }}>
            <span style={{ fontWeight: 700, color: S.navy }}>Doubt chat · Physics</span><span>11:42 PM</span>
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, background: S.cardTint, borderRadius: "12px 12px 12px 4px", padding: "10px 12px", marginBottom: 8, maxWidth: "92%", color: S.navy }}>
            Sir, rotational mechanics Q14 — why is angular momentum conserved here?
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, background: S.goldSoft, borderRadius: "12px 12px 4px 12px", padding: "10px 12px", marginLeft: "auto", maxWidth: "92%", color: S.navy }}>
            No external torque about the axis — sending a 2-min video walkthrough now. ✓
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6, fontSize: 11.5, color: S.green, fontWeight: 600, marginTop: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: S.green }} />
            Resolved in 18 minutes
          </div>
        </div>
       </div>
      </div>
    </header>
  );
}

/** Slim auto-scrolling strip of headline achievements between hero and the week band. */
export function MpMarquee() {
  const items = [
    "a strong rank · JEE Advanced",
    "a strong rank · JEE Mains",
    "a strong rank · NEET UG",
    "50+ ranks under AIR 5,000",
    "1-on-1 format",
    "cities across India across India",
    "Doubts solved in under 30 min",
    "Live 1-on-1, 6 days a week",
  ];
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      {items.map((t) => (
        <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 20px", fontFamily: S.disp, fontWeight: 600, fontSize: 13.5, letterSpacing: "0.08em", textTransform: "uppercase", color: S.navy, whiteSpace: "nowrap" }}>
          {t}
          <span aria-hidden style={{ color: S.gold, fontSize: 11 }}>✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="mp-marquee" role="presentation" style={{ borderTop: `1px solid ${S.line}`, borderBottom: `1px solid ${S.line}`, background: S.bgDeep, padding: "15px 0", overflow: "hidden" }}>
      <div className="mp-marquee-track">{row(false)}{row(true)}</div>
    </div>
  );
}

export function MpWeek() {
  const days = [
    { d: "Mon – Sat", t: "Daily 1-on-1 live class", s: "90 min with your personal mentor — concept building on your weak chapters first. Every session recorded." },
    { d: "Wednesday", t: "Practice review", s: "Tiered problem sets checked together; mistakes traced back to the exact concept." },
    { d: "Saturday", t: "CBT mock test", s: "Full NTA-pattern computer-based test — same interface as the real exam." },
    { d: "Sunday", t: "Parent report", s: "Accuracy, speed and topic-wise analytics shared with you and your parents." },
  ];
  const dd = (i: number) => ({ "--d": `${i * 0.09}s` } as CSSProperties);
  return (
    <section className="mp-x" style={{ position: "relative", overflow: "hidden", background: S.gradNavy, color: S.cream, padding: "108px 48px 104px" }}>
      <MpDivider side="top" />
      <MpDivider side="bottom" />
      <div aria-hidden data-depth="0.3" style={{ position: "absolute", top: -180, right: -120, width: 520, height: 520, pointerEvents: "none" }}>
        <div className="mp-aurora mp-aurora-a" style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,75,0.14) 0%, rgba(212,168,75,0) 65%)" }} />
      </div>
      <div aria-hidden style={{ position: "absolute", bottom: -240, left: -140, width: 480, height: 480, borderRadius: "50%", border: "1px solid rgba(251,247,239,0.07)", pointerEvents: "none" }} />

      <div data-reveal style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, gap: 24, flexWrap: "wrap" }}>
        <div>
          <MpEyebrow light>The weekly rhythm</MpEyebrow>
          <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 42px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: 0 }}>What a week looks like</h2>
        </div>
        <span style={{ fontSize: 14, color: S.creamSoft }}>Every plan is personal — this is Aarav&apos;s, Class 12, target IIT Bombay</span>
      </div>
      <div className="mp-4col" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {days.map((w, i) => (
          <div key={i} data-reveal data-tilt="4" className="mp-week-card mp-spot mp-spot-dark mp-glass-band mp-tilt" style={{ borderRadius: 18, padding: "26px 24px", ...dd(i) }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: S.goldBtn }}>{w.d}</span>
              <span aria-hidden style={{ fontFamily: S.disp, fontSize: 13, fontWeight: 700, color: "rgba(251,247,239,0.28)" }}>0{i + 1}</span>
            </div>
            <div style={{ fontFamily: S.disp, fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{w.t}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: S.creamSoft }}>{w.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
