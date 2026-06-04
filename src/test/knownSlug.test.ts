import { describe, it, expect } from "vitest";
import { isKnownSlug } from "@/lib/resolveSlugMetadata";

/**
 * Regression guard for the soft-404 / doorway-abuse vector flagged in
 * seo-reports/health-check-2026-06-02.md.
 *
 * `isKnownSlug` previously accepted ANY slug containing `coaching-in-`, so
 * fake city URLs (e.g. /jee-coaching-in-fakecity-xyz) rendered a live HTTP
 * 200 doorway page instead of 404 — the exact scaled-content pattern the
 * March 2026 Spam Update penalised. The catch-all route calls notFound()
 * whenever isKnownSlug() returns false, so these must be rejected.
 */
describe("isKnownSlug — coaching-in- 404 gate", () => {
  it("rejects fake/unknown city coaching slugs (soft-404 prevention)", () => {
    expect(isKnownSlug(["jee-coaching-in-fakecity-xyz"])).toBe(false);
    expect(isKnownSlug(["neet-coaching-in-totally-made-up-place"])).toBe(false);
    expect(isKnownSlug(["jee-coaching-in-zzzznotacity"])).toBe(false);
  });

  it("still rejects truly random non-coaching slugs", () => {
    expect(isKnownSlug(["totally-nonexistent-xyz-12345"])).toBe(false);
    expect(isKnownSlug(["random-unrelated-page-abc"])).toBe(false);
  });

  it("still accepts curated T1 city pages", () => {
    expect(isKnownSlug(["jee-coaching-in-mumbai"])).toBe(true);
    expect(isKnownSlug(["neet-coaching-in-delhi"])).toBe(true);
    expect(isKnownSlug(["jee-coaching-in-bangalore"])).toBe(true);
  });

  it("still accepts state regional hub pages", () => {
    expect(isKnownSlug(["jee-coaching-in-maharashtra"])).toBe(true);
    expect(isKnownSlug(["jee-coaching-in-uttar-pradesh"])).toBe(true);
  });

  it("still accepts the national flagship coaching page", () => {
    expect(isKnownSlug(["best-jee-coaching-in-india"])).toBe(true);
  });
});
