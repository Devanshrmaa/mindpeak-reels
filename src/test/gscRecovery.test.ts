import { describe, it, expect } from "vitest";
import { getSEOPage } from "@/data/seoPageData";
import { isKnownSlug } from "@/lib/resolveSlugMetadata";
import { getPostBySlug } from "@/data/blogData";
import { getKeptBlogSlugs } from "@/lib/programmaticBlogs";
import { getCityConsolidation, getSubjectCityRedirect } from "@/data/cityConsolidation";
import { REMOVED_DOORWAY_SLUGS } from "@/lib/removedSlugs";

/**
 * Locks in the GSC-recovery content + code work:
 * - HP online-tuition landing page is registered and routable
 * - the rewritten JEE-vs-NEET post and new NEET-2027 post exist and are in the sitemap
 * - the removal sitemap only lists URLs that genuinely serve HTTP 410
 */
describe("HP online-tuition landing page", () => {
  it("is registered in seoPageData and resolves as a known slug", () => {
    const page = getSEOPage("online-tuition-himachal-pradesh");
    expect(page).toBeDefined();
    expect(page!.faqs.length).toBeGreaterThanOrEqual(3);
    expect(page!.sections.length).toBeGreaterThanOrEqual(4);
    expect(isKnownSlug(["online-tuition-himachal-pradesh"])).toBe(true);
  });
});

describe("ranking-targeted blog posts", () => {
  it("JEE-vs-NEET post leads with a difficulty verdict", () => {
    const post = getPostBySlug("choosing-between-jee-and-neet");
    expect(post).toBeDefined();
    expect(post!.title.toLowerCase()).toContain("which is harder");
    expect(post!.content).toContain("Is JEE Harder Than NEET?");
    expect(post!.content).toContain("Frequently Asked Questions");
  });

  it("NEET 2027 syllabus post exists with CBT focus", () => {
    const post = getPostBySlug("neet-2027-syllabus-changes");
    expect(post).toBeDefined();
    expect(post!.content).toContain("computer-based test");
  });

  it("both editorial posts are included in the sitemap", () => {
    const kept = getKeptBlogSlugs();
    expect(kept).toContain("blog/choosing-between-jee-and-neet");
    expect(kept).toContain("blog/neet-2027-syllabus-changes");
  });
});

describe("removal sitemap only lists genuine 410s", () => {
  it("excludes any removed slug that actually 301-redirects", () => {
    const actually410 = (slug: string) => {
      if (getSubjectCityRedirect(slug)) return false;
      const con = getCityConsolidation(slug);
      if (con && con.action !== "410") return false;
      return true;
    };
    const kept = [...REMOVED_DOORWAY_SLUGS].filter(actually410);
    const dropped = [...REMOVED_DOORWAY_SLUGS].filter((s) => !actually410(s));

    // Subject-city doorways 301 to the subject page → must be dropped.
    expect(actually410("jee-physics-coaching-in-davanagere")).toBe(false);
    // Genuine foreign/dead doorways → must be kept.
    expect(actually410("jee-coaching-in-bahrain")).toBe(true);
    // The reconciliation must actually remove some entries.
    expect(dropped.length).toBeGreaterThan(0);
    expect(kept.length).toBeLessThan(REMOVED_DOORWAY_SLUGS.size);
  });
});
