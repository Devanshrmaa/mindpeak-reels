"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { UserCheck, Compass, Target, TrendingUp, Check, X } from "lucide-react";
import { S } from "./theme";
import { MpEyebrow } from "./MpButton";

const dd = (i: number, base = 0.09) => ({ "--d": `${i * base}s` } as CSSProperties);

/* A gentle cream wave that flows the navy bands into the cream sections
   above/below them. Rendered inside the (relative, overflow-hidden) navy
   section; sits in the top/bottom 54px strip, clear of the padded content. */
export function MpDivider({ side, color = S.bg }: { side: "top" | "bottom"; color?: string }) {
  const base: CSSProperties = { position: "absolute", left: 0, width: "100%", height: 54, display: "block", pointerEvents: "none" };
  return side === "top" ? (
    <svg aria-hidden viewBox="0 0 1440 54" preserveAspectRatio="none" style={{ ...base, top: -1 }}>
      <path d="M0,0 L1440,0 L1440,30 C1180,54 980,6 720,30 C470,53 250,10 0,34 Z" fill={color} />
    </svg>
  ) : (
    <svg aria-hidden viewBox="0 0 1440 54" preserveAspectRatio="none" style={{ ...base, bottom: -1 }}>
      <path d="M0,54 L1440,54 L1440,24 C1180,0 980,48 720,24 C470,1 250,44 0,20 Z" fill={color} />
    </svg>
  );
}

/* Count-up that fires once the value scrolls into view. Honours
   prefers-reduced-motion by jumping straight to the final number. */
function useCountUp(target: number, active: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(target * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

/* ------------------------------------------------------------------ *
 * MpCompare — the core differentiator, visualised.
 * Two facing cards: a muted "batch coaching" card and an elevated navy
 * "MindPeak way" card. Until now this contrast only lived in the hidden
 * SSR SEO shell; here it becomes the page's strongest hook.
 * ------------------------------------------------------------------ */
export function MpCompare() {
  const batch = [
    "One teacher, 100+ students in a class",
    "A fixed pace — the batch can't wait for you",
    "Doubts pile up; answers take days",
    "One generic test series for everyone",
    "Relocate to Kota, live in a hostel",
    "Parents left guessing how prep is going",
  ];
  const peak = [
    "One mentor, one student — every session",
    "Pace set by your weakest chapters first",
    "Doubts answered in under 30 minutes",
    "A plan rebuilt every week from your data",
    "Learn from home — students in 120+ cities",
    "A parent report every Sunday: accuracy, speed, topics",
  ];

  const rowBase: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: 13,
    padding: "12px 0",
  };

  return (
    <section className="mp-x" style={{ padding: "96px 48px" }}>
      <div data-reveal style={{ maxWidth: 760, marginBottom: 44 }}>
        <MpEyebrow>The difference</MpEyebrow>
        <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: "0 0 16px", color: S.navy, lineHeight: 1.08 }}>
          Why one mentor beats a batch of a hundred
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: S.inkSoft, maxWidth: 560, margin: 0 }}>
          Same syllabus, same exam — a completely different experience. Here is what
          changes the day your preparation stops being one-size-fits-all.
        </p>
      </div>

      <div className="mp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
        {/* Batch coaching — muted */}
        <div data-reveal data-tilt="3" className="mp-cmp-card mp-spot mp-glass-card mp-tilt" style={{ ...dd(0), borderRadius: 22, padding: "34px 32px 26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span aria-hidden style={{ width: 9, height: 9, borderRadius: "50%", background: S.inkSoft, opacity: 0.5 }} />
            <span style={{ fontFamily: S.disp, fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: S.inkSoft }}>Traditional batch coaching</span>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {batch.map((t, i) => (
              <li key={i} style={{ ...rowBase, borderTop: i ? `1px solid ${S.line}` : "none" }}>
                <span aria-hidden style={{ flexShrink: 0, display: "grid", placeItems: "center", width: 24, height: 24, borderRadius: "50%", background: S.cardTint, marginTop: 1 }}>
                  <X style={{ width: 13, height: 13, color: S.inkSoft }} />
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.5, color: S.inkSoft }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MindPeak — elevated navy */}
        <div data-reveal data-tilt="3" className="mp-cmp-card mp-tilt mp-spot mp-spot-dark" style={{ ...dd(1), position: "relative", overflow: "hidden", background: S.gradNavy, border: `1px solid rgba(212,168,75,0.45)`, borderRadius: 22, padding: "34px 32px 30px", color: S.cream, boxShadow: "0 26px 60px rgba(26,54,93,0.26)" }}>
          <div aria-hidden style={{ position: "absolute", top: -120, right: -90, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,75,0.22) 0%, rgba(212,168,75,0) 65%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span aria-hidden style={{ width: 9, height: 9, borderRadius: "50%", background: "#4ADE80" }} className="mp-pulse" />
              <span style={{ fontFamily: S.disp, fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: S.goldBtn }}>The MindPeak way</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: S.navyDeep, background: S.gradGold, borderRadius: 999, padding: "5px 12px" }}>Why families switch</span>
          </div>
          <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0 }}>
            {peak.map((t, i) => (
              <li key={i} style={{ ...rowBase, borderTop: i ? `1px solid ${S.lineLight}` : "none" }}>
                <span aria-hidden style={{ flexShrink: 0, display: "grid", placeItems: "center", width: 24, height: 24, borderRadius: "50%", background: S.gradGold, marginTop: 1 }}>
                  <Check style={{ width: 14, height: 14, color: S.navyDeep }} strokeWidth={3} />
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(251,247,239,0.92)" }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * MpMethod — the four pillars, on cream with elevated white cards.
 * ------------------------------------------------------------------ */
export function MpMethod() {
  const pillars = [
    { Icon: UserCheck, t: "1-on-1 Mentoring", d: "A dedicated mentor from IIT, NIT or AIIMS — the same person every day, who knows your name and your weak chapters." },
    { Icon: Compass, t: "Adaptive Curriculum", d: "Your plan rebuilds itself every week around performance data, so time always goes where it moves your rank most." },
    { Icon: Target, t: "Deep Practice", d: "Tiered problem sets that build real understanding — every mistake traced back to the exact concept behind it." },
    { Icon: TrendingUp, t: "Progress Tracking", d: "Weekly analytics on accuracy, speed and topics, shared with you and your parents every single Sunday." },
  ];
  return (
    <section className="mp-x" style={{ padding: "96px 48px 0" }}>
      <div data-reveal style={{ maxWidth: 720, margin: "0 auto 46px", textAlign: "center" }}>
        <MpEyebrow style={{ justifyContent: "center" }}>The method</MpEyebrow>
        <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: "0 0 16px", color: S.navy, lineHeight: 1.08 }}>
          Four things we do that batch coaching can't
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: S.inkSoft, margin: 0 }}>
          The whole system is built around one student at a time. These four pillars are
          what that makes possible.
        </p>
      </div>

      <div className="mp-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
        {pillars.map((p, i) => (
          <div key={i} data-reveal data-tilt="5" className="mp-tilt mp-spot mp-glass-card" style={{ ...dd(i), position: "relative", borderRadius: 20, padding: "30px 26px 28px" }}>
            <span aria-hidden style={{ position: "absolute", top: 22, right: 24, fontFamily: S.disp, fontSize: 13, fontWeight: 700, color: S.line }}>0{i + 1}</span>
            <span className="mp-pillar-ic" style={{ display: "grid", placeItems: "center", width: 52, height: 52, borderRadius: 16, background: S.gradGold, marginBottom: 20, boxShadow: "0 10px 24px rgba(185,137,53,0.28)" }}>
              <p.Icon style={{ width: 24, height: 24, color: S.navyDeep }} strokeWidth={2.2} />
            </span>
            <h3 style={{ fontFamily: S.disp, fontSize: 20, fontWeight: 600, margin: "0 0 10px", color: S.navy }}>{p.t}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: S.inkSoft, margin: 0 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * MpVoices — testimonials on the navy band, for human proof + rhythm.
 * Names/photos mirror the results ledger for consistency.
 * ------------------------------------------------------------------ */
export function MpVoices() {
  const voices = [
    {
      q: "My mentor knew exactly which chapters I was quietly avoiding. By December, rotational mechanics had gone from my worst topic to my fastest.",
      name: "Aarav Sharma",
      role: "AIR 42 · JEE Advanced",
      img: "/images/aarav-sharma.jpg",
    },
    {
      q: "Every Sunday I got a real report — accuracy, speed, what the mentor changed. For the first time I actually knew how my daughter's prep was going.",
      name: "Priya's mother",
      role: "Parent · NEET UG",
      img: "/images/priya-patel.jpg",
    },
    {
      q: "After a failed first attempt, the weekly plan kept rebuilding itself around my mistakes. I finished the drop year at 99.97 percentile.",
      name: "Rohan Gupta",
      role: "AIR 89 · JEE Mains, dropper",
      img: "/images/rohan-gupta.jpg",
    },
  ];
  return (
    <section className="mp-x" style={{ position: "relative", overflow: "hidden", background: S.gradNavy, color: S.cream, padding: "104px 48px 112px" }}>
      <MpDivider side="top" />
      <MpDivider side="bottom" />
      <div aria-hidden data-depth="0.25" style={{ position: "absolute", top: -160, left: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,75,0.14) 0%, rgba(212,168,75,0) 65%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: -220, right: -140, width: 460, height: 460, borderRadius: "50%", border: "1px solid rgba(251,247,239,0.07)", pointerEvents: "none" }} />

      <div data-reveal style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, gap: 24, flexWrap: "wrap" }}>
        <div>
          <MpEyebrow light>In their words</MpEyebrow>
          <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 42px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: 0 }}>Voices from MindPeak families</h2>
        </div>
        <span style={{ fontSize: 14, color: S.creamSoft, maxWidth: 280 }}>Real students, real ranks — the people behind the results ledger.</span>
      </div>

      <div className="mp-3col" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {voices.map((v, i) => (
          <figure key={i} data-reveal data-tilt="4" className="mp-week-card mp-spot mp-spot-dark mp-glass-band mp-tilt" style={{ ...dd(i), margin: 0, borderRadius: 20, padding: "30px 28px 26px", display: "flex", flexDirection: "column" }}>
            <span aria-hidden style={{ fontFamily: S.disp, fontSize: 56, fontWeight: 700, lineHeight: 0.7, color: S.goldBtn, opacity: 0.55, marginBottom: 14 }}>&ldquo;</span>
            <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.62, color: "rgba(251,247,239,0.94)", flexGrow: 1 }}>{v.q}</blockquote>
            <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 22, paddingTop: 20, borderTop: `1px solid ${S.lineLight}` }}>
              <img src={v.img} alt={v.name} style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover", border: `2px solid ${S.goldSoft}` }} />
              <div>
                <div style={{ fontFamily: S.disp, fontSize: 15.5, fontWeight: 600, color: S.cream }}>{v.name}</div>
                <div style={{ fontSize: 12.5, letterSpacing: "0.04em", color: S.goldBtn, fontWeight: 600, marginTop: 2 }}>{v.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * MpStats — a kinetic "by the numbers" band: a count-up SVG progress
 * ring for the success rate, plus three count-up figures. Numbers run
 * once the band scrolls into view (reduced-motion jumps to final).
 * ------------------------------------------------------------------ */
export function MpStats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { setActive(true); io.disconnect(); }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const success = useCountUp(95, active);
  const students = useCountUp(500, active);
  const air = useCountUp(42, active);
  const cities = useCountUp(120, active);

  const R = 60, STROKE = 9, SIZE = (R + STROKE) * 2;
  const CIRC = 2 * Math.PI * R;
  const dash = CIRC * (1 - success / 100);

  const numStats = [
    { v: `${Math.round(students)}+`, k: "students mentored across India" },
    { v: `AIR ${Math.round(air)}`, k: "best JEE Advanced rank to date" },
    { v: `${Math.round(cities)}+`, k: "cities reached — no relocation" },
  ];

  return (
    <section ref={ref} className="mp-x" style={{ position: "relative", overflow: "hidden", background: S.gradNavy, color: S.cream, padding: "104px 48px 112px" }}>
      <MpDivider side="top" />
      <MpDivider side="bottom" />
      <div aria-hidden data-depth="0.3" style={{ position: "absolute", top: -150, right: -120, width: 460, height: 460, borderRadius: "50%", background: S.auroraGoldSoft, pointerEvents: "none" }} />

      <div data-reveal style={{ position: "relative", textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
        <MpEyebrow light style={{ justifyContent: "center" }}>By the numbers</MpEyebrow>
        <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 42px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: 0 }}>Proof you can count</h2>
      </div>

      <div className="mp-2col" style={{ position: "relative", display: "grid", gridTemplateColumns: "auto 1fr", gap: 56, alignItems: "center" }}>
        <div data-reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative", width: SIZE, height: SIZE }}>
            <svg width={SIZE} height={SIZE} style={{ transform: "rotate(-90deg)" }} aria-hidden>
              <defs>
                <linearGradient id="mpRingGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E4C179" />
                  <stop offset="100%" stopColor="#B98935" />
                </linearGradient>
              </defs>
              <circle cx={R + STROKE} cy={R + STROKE} r={R} fill="none" stroke="rgba(251,247,239,0.14)" strokeWidth={STROKE} />
              <circle cx={R + STROKE} cy={R + STROKE} r={R} fill="none" stroke="url(#mpRingGrad)" strokeWidth={STROKE} strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={dash} />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <span style={{ fontFamily: S.disp, fontSize: 40, fontWeight: 700, color: S.cream, letterSpacing: "-0.02em" }}>{Math.round(success)}%</span>
            </div>
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: S.creamSoft, textAlign: "center", maxWidth: 190 }}>overall success rate across JEE &amp; NEET</div>
        </div>

        <div className="mp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {numStats.map((s, i) => (
            <div key={i} data-reveal data-tilt="3" className="mp-spot mp-spot-dark mp-glass-band mp-tilt" style={{ ...dd(i), borderRadius: 18, padding: "28px 24px" }}>
              <div style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3vw, 40px)", fontWeight: 700, color: S.goldBtn, letterSpacing: "-0.01em" }}>{s.v}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: S.creamSoft, marginTop: 8 }}>{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
