"use client";

import { useEffect, useRef } from "react";
import { useDemoModal } from "@/components/DemoBookingModal";
import { S } from "@/components/home-redesign/theme";
import { MpNav, MpHero, MpMarquee, MpWeek } from "@/components/home-redesign/HomeTop";
import { MpLedger, MpReportProof, MpPrograms } from "@/components/home-redesign/HomeMid";
import { MpFAQ, MpContact } from "@/components/home-redesign/HomeBottom";
import { MpCompare, MpMethod, MpVoices, MpStats } from "@/components/home-redesign/HomeExtras";

/**
 * Redesigned homepage (v2.1) — a warm cream-on-navy editorial layout, evolved
 * from the Claude Design handoff with a full motion & depth pass:
 *
 *  - hero entrance choreography (pure CSS keyframes, stagger via `--d`)
 *  - scroll-reveal for every section (one shared IntersectionObserver, no
 *    framer-motion — keeps the initial JS bundle untouched)
 *  - hover micro-interactions (buttons lift, cards float, nav links underline)
 *  - an achievements marquee, animated report bars, smooth FAQ expansion
 *
 * Scoped to the homepage only; the rest of the site keeps the global theme.
 * Section components live in `src/components/home-redesign/` and share the
 * `S` theme object. All animation lives in the scoped <style> block below and
 * is disabled wholesale under `prefers-reduced-motion`.
 *
 * The prototype was desktop-only, so the media queries below also add the
 * responsive collapse rules (multi-column grids → single column on narrow
 * viewports). `!important` is required to override the components' inline grid
 * declarations.
 */
export default function HomeRedesign() {
  const { openDemoModal } = useDemoModal();
  const rootRef = useRef<HTMLDivElement>(null);
  const onCta = () => openDemoModal();

  /* Scroll-reveal: one observer for every [data-reveal] element. The hidden
     state is only applied once `.mp-js` is set, so no-JS visitors (and bots)
     always see fully visible content. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("mp-in"));
      return;
    }

    root.classList.add("mp-js");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("mp-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -56px 0px" }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Interactive layer: a single delegated pointer listener drives the
     cursor-follow spotlight on every [.mp-spot] card, plus a slim scroll
     progress bar. Both are cheap (one listener each) and pointer/scroll
     driven, so they stay out of the initial render path. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return;

    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest?.(".mp-spot") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    root.addEventListener("pointermove", onMove, { passive: true });

    const bar = document.getElementById("mp-progress");
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      root.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="mp-home"
      style={{ background: S.bg, color: S.navy, fontFamily: S.body, minHeight: "100vh" }}
    >
      <style>{`
        .mp-home { overflow-x: hidden; --mp-ease: cubic-bezier(0.16, 1, 0.3, 1); }
        .mp-home section[id] { scroll-margin-top: 84px; }
        .mp-home ::selection { background: ${S.goldBtn}; color: ${S.navyDeep}; }

        /* ---------- entrance (hero, runs once on load) ---------- */
        @keyframes mpRise { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
        .mp-home .mp-rise { animation: mpRise 0.9s var(--mp-ease) both; animation-delay: var(--d, 0s); }
        @keyframes mpUnderline { from { background-size: 0% 100%; } to { background-size: 100% 100%; } }
        .mp-home .mp-underline {
          background-image: linear-gradient(transparent 60%, ${S.goldSoft} 60%);
          background-repeat: no-repeat; background-size: 100% 100%;
          animation: mpUnderline 1.1s var(--mp-ease) 0.7s both;
        }

        /* ---------- scroll reveal (hidden only when JS is live) ---------- */
        .mp-home.mp-js [data-reveal] {
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.85s var(--mp-ease), transform 0.85s var(--mp-ease);
          transition-delay: var(--d, 0s);
        }
        .mp-home.mp-js [data-reveal].mp-in { opacity: 1; transform: none; }

        /* ---------- buttons ---------- */
        .mp-home .mp-btn {
          font-family: ${S.body}; font-size: 15px; font-weight: 600;
          padding: 14px 28px; border-radius: 999px; cursor: pointer;
          border: 1.5px solid transparent; display: inline-flex; align-items: center;
          justify-content: center; gap: 8px; white-space: nowrap;
          transition: transform 0.25s var(--mp-ease), box-shadow 0.25s var(--mp-ease),
                      background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .mp-home .mp-btn:hover { transform: translateY(-2px); }
        .mp-home .mp-btn:active { transform: translateY(0) scale(0.99); }
        .mp-home .mp-btn:focus-visible { outline: 2px solid ${S.gold}; outline-offset: 3px; }
        .mp-home .mp-btn-primary { background: var(--mp-btn-bg); color: var(--mp-btn-fg); box-shadow: 0 10px 26px rgba(27,42,82,0.20); }
        .mp-home .mp-btn-primary:hover { background: var(--mp-btn-bg-hover); box-shadow: 0 16px 38px rgba(19,32,63,0.30); }
        .mp-home .mp-btn-gold { background: ${S.gradGold}; color: ${S.navyDeep}; font-weight: 700; box-shadow: 0 12px 30px rgba(201,151,31,0.32); }
        .mp-home .mp-btn-gold:hover { box-shadow: 0 18px 42px rgba(201,151,31,0.42); }
        .mp-home .mp-btn-outline { background: transparent; color: ${S.navy}; border-color: ${S.navy}; }
        .mp-home .mp-btn-outline:hover { background: var(--mp-ink); color: var(--mp-bg); box-shadow: 0 12px 30px rgba(27,42,82,0.20); }
        .mp-home .mp-btn-outlineLight { background: transparent; color: ${S.cream}; border-color: rgba(251,247,239,0.4); }
        .mp-home .mp-btn-outlineLight:hover { border-color: ${S.goldBtn}; color: ${S.goldBtn}; }

        /* ---------- nav ---------- */
        .mp-home .mp-navlink { position: relative; transition: color 0.25s ease; }
        .mp-home .mp-navlink::after {
          content: ""; position: absolute; left: 0; right: 100%; bottom: -5px; height: 2px;
          background: ${S.gold}; border-radius: 2px; transition: right 0.3s var(--mp-ease);
        }
        .mp-home .mp-navlink:hover { color: ${S.navy}; }
        .mp-home .mp-navlink:hover::after { right: 0; }

        /* ---------- ambient motion ---------- */
        @keyframes mpFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        .mp-home .mp-float { animation: mpFloat 6.5s ease-in-out infinite; }
        @keyframes mpPulse {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.55); }
          70% { box-shadow: 0 0 0 9px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        .mp-home .mp-pulse { animation: mpPulse 2.2s ease-out infinite; }

        /* ---------- achievements marquee ---------- */
        @keyframes mpMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .mp-home .mp-marquee-track { display: flex; width: max-content; animation: mpMarquee 38s linear infinite; }
        .mp-home .mp-marquee:hover .mp-marquee-track { animation-play-state: paused; }

        /* ---------- cards & rows ---------- */
        .mp-home .mp-week-card {
          transition: transform 0.35s var(--mp-ease), border-color 0.35s ease,
                      background-color 0.35s ease, box-shadow 0.35s var(--mp-ease);
        }
        .mp-home .mp-week-card:hover {
          transform: translateY(-6px); border-color: rgba(227,190,85,0.55);
          background-color: rgba(251,247,239,0.10); box-shadow: 0 20px 44px rgba(0,0,0,0.28);
        }
        .mp-home .mp-ledger-hover { transition: background-color 0.3s ease; border-radius: 14px; }
        .mp-home .mp-ledger-hover:hover { background-color: var(--mp-hover-tint); }
        .mp-home .mp-lift { transition: transform 0.4s var(--mp-ease), box-shadow 0.4s var(--mp-ease); }
        .mp-home .mp-lift:hover { transform: translateY(-6px); box-shadow: ${S.shadowLift}; }
        .mp-home .mp-program { transition: transform 0.35s var(--mp-ease); }
        .mp-home .mp-program:hover { transform: translateY(-4px); }
        .mp-home .mp-contact-chip { transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s var(--mp-ease); }
        .mp-home .mp-contact-chip:hover { border-color: rgba(227,190,85,0.6); background-color: rgba(251,247,239,0.10); transform: translateY(-2px); }

        /* ---------- animated report bars ---------- */
        .mp-home .mp-bar-fill { width: var(--w); transition: width 1.3s var(--mp-ease) 0.3s; }
        .mp-home.mp-js [data-reveal]:not(.mp-in) .mp-bar-fill { width: 0; }

        /* ---------- FAQ smooth expand ---------- */
        .mp-home .mp-faq-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.4s var(--mp-ease); }
        .mp-home .mp-faq-body.mp-open { grid-template-rows: 1fr; }
        .mp-home .mp-faq-body > div { overflow: hidden; }
        .mp-home .mp-faq-item { transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, border-radius 0.3s ease; }

        /* ---------- arrow links ---------- */
        .mp-home .mp-arrow-link { display: inline-flex; align-items: center; gap: 6px; transition: gap 0.25s var(--mp-ease), color 0.25s ease; }
        .mp-home .mp-arrow-link:hover { gap: 11px; color: ${S.gold}; }

        /* ---------- method pillars + program icons (flourish on card hover) ---------- */
        .mp-home .mp-pillar-ic { transition: transform 0.4s var(--mp-ease); }
        .mp-home .mp-lift:hover .mp-pillar-ic,
        .mp-home .mp-program:hover .mp-pillar-ic { transform: rotate(-8deg) scale(1.08); }

        /* ---------- FAQ: drop the sticky aside on narrow viewports ---------- */
        @media (max-width: 900px) { .mp-home .mp-faq-aside { position: static !important; } }

        /* ---------- scroll progress bar ---------- */
        .mp-home #mp-progress {
          position: fixed; top: 0; left: 0; height: 3px; width: 100%;
          transform-origin: 0 50%; transform: scaleX(0);
          background: ${S.gradGold}; z-index: 100; will-change: transform;
        }

        /* ---------- film grain (editorial texture) ---------- */
        .mp-home #mp-grain {
          position: fixed; inset: 0; z-index: 8; pointer-events: none; opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 140px 140px;
        }

        /* ---------- hero aurora drift ---------- */
        @keyframes mpAuroraA { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-40px, 30px) scale(1.12); } }
        @keyframes mpAuroraB { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(36px, -26px) scale(1.1); } }
        .mp-home .mp-aurora { will-change: transform; }
        .mp-home .mp-aurora-a { animation: mpAuroraA 16s ease-in-out infinite; }
        .mp-home .mp-aurora-b { animation: mpAuroraB 19s ease-in-out infinite; }

        /* ---------- headline gold shimmer ---------- */
        @keyframes mpShimmer { to { background-position: 200% center; } }
        .mp-home .mp-shimmer {
          background: ${S.gradGoldText}; background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: mpShimmer 5.5s linear infinite;
        }

        /* ---------- pointer spotlight on cards (cursor-follow glow) ---------- */
        .mp-home .mp-spot { position: relative; isolation: isolate; }
        .mp-home .mp-spot::before {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
          opacity: 0; transition: opacity 0.4s ease; z-index: -1;
          background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 0%), ${S.spotCream}, transparent 62%);
        }
        .mp-home .mp-spot.mp-spot-dark::before {
          background: radial-gradient(280px circle at var(--mx, 50%) var(--my, 0%), ${S.spotNavy}, transparent 62%);
        }
        .mp-home .mp-spot:hover::before { opacity: 1; }

        /* ---------- responsive collapse ---------- */
        @media (max-width: 900px) {
          .mp-home .mp-2col { grid-template-columns: 1fr !important; }
          .mp-home .mp-3col { grid-template-columns: 1fr 1fr !important; }
          .mp-home .mp-4col { grid-template-columns: 1fr 1fr !important; }
          .mp-home .mp-nav-links { display: none !important; }
        }
        @media (max-width: 720px) {
          .mp-home .mp-x { padding-left: 22px !important; padding-right: 22px !important; }
          .mp-home .mp-3col, .mp-home .mp-4col { grid-template-columns: 1fr !important; }
          .mp-home .mp-ledger-row { grid-template-columns: 1fr auto !important; row-gap: 4px !important; }
          .mp-home .mp-programs-card { padding: 32px 24px !important; }
          .mp-home .mp-programs-grid > div { padding: 0 0 24px !important; border-left: none !important; }
          .mp-home .mp-contact-card { padding: 36px 26px !important; }
          .mp-home .mp-hero-card { position: static !important; width: 100% !important; margin-top: 16px !important; }
        }

        /* ---------- reduced motion: kill everything ---------- */
        @media (prefers-reduced-motion: reduce) {
          .mp-home *, .mp-home *::before, .mp-home *::after {
            animation-duration: 0.01ms !important; animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .mp-home.mp-js [data-reveal] { opacity: 1; transform: none; }
        }
      `}</style>

      {/* slim scroll-progress bar (top) + subtle film-grain texture overlay */}
      <div id="mp-progress" aria-hidden />
      <div id="mp-grain" aria-hidden />

      <MpNav onCta={onCta} />
      <MpHero onCta={onCta} />
      <MpMarquee />
      <MpCompare />
      <MpWeek />
      <MpMethod />
      <MpStats />
      <MpLedger />
      <MpReportProof />
      <MpVoices />
      <MpPrograms onCta={onCta} />
      <MpFAQ onCta={onCta} />
      <MpContact onCta={onCta} />
      {/* The design's slim footer (MpFooter) is intentionally not rendered here:
          the page closes with the production <PageFooter /> link directory in
          app/page.tsx, which carries the homepage's internal-link/crawl equity. */}
    </div>
  );
}
