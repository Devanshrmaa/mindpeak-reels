"use client";

import { useDemoModal } from "@/components/DemoBookingModal";
import { S } from "@/components/home-redesign/theme";
import { MpNav, MpHero, MpWeek } from "@/components/home-redesign/HomeTop";
import { MpLedger, MpReportProof, MpPrograms } from "@/components/home-redesign/HomeMid";
import { MpFAQ, MpContact } from "@/components/home-redesign/HomeBottom";

/**
 * Redesigned homepage (v2) — a warm cream-on-navy editorial layout ported from
 * the Claude Design handoff. Scoped to the homepage only; the rest of the site
 * keeps the global dark theme. Section components live in
 * `src/components/home-redesign/` and share the `S` theme object.
 *
 * The prototype was desktop-only, so the scoped <style> block below adds the
 * responsive collapse rules (multi-column grids → single column on narrow
 * viewports). `!important` is required to override the components' inline grid
 * declarations.
 */
export default function HomeRedesign() {
  const { openDemoModal } = useDemoModal();
  const onCta = () => openDemoModal();

  return (
    <div className="mp-home" style={{ background: S.bg, color: S.navy, fontFamily: S.body, minHeight: "100vh" }}>
      <style>{`
        .mp-home { overflow-x: hidden; }
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
          .mp-home h1 { font-size: 40px !important; }
          .mp-home h2 { font-size: 30px !important; }
        }
      `}</style>

      <MpNav onCta={onCta} />
      <MpHero onCta={onCta} />
      <MpWeek />
      <MpLedger />
      <MpReportProof />
      <MpPrograms onCta={onCta} />
      <MpFAQ />
      <MpContact onCta={onCta} />
      {/* The design's slim footer (MpFooter) is intentionally not rendered here:
          the page closes with the production <PageFooter /> link directory in
          app/page.tsx, which carries the homepage's internal-link/crawl equity. */}
    </div>
  );
}
