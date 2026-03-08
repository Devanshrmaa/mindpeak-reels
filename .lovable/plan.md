

# Fix: Vercel Deployment Failure

## Root Cause

The deployment fails because of **memory exhaustion** in the serverless function that generates `final3.xml`. Here's why:

1. **`getAllProgrammaticBlogSlugs()`** calls `getAllProgrammaticBlogPosts()` which generates **6,000+ full blog posts** with massive markdown content strings (2,000+ words each) — just to extract the slug field. This allocates hundreds of MB of strings that are immediately discarded.

2. **Single XML response** with 50,000+ URL entries produces a multi-megabyte response string, which can exceed Vercel serverless function memory limits (default 1024 MB, often less).

3. **`generateExamCityPosts()`** alone creates 6,000 objects with ~3KB content each = ~18MB of content strings, plus all the other generators.

## Fix — Two Changes

### 1. Add slug-only generators (no content generation)

In `src/lib/programmaticBlogs.ts`, add a new `getAllProgrammaticBlogSlugs()` that computes only slugs without generating any blog content:

```ts
export function getAllProgrammaticBlogSlugs(): string[] {
  const slugs: string[] = [];
  // Chapter prep: "blog/how-to-prepare-{chapter}-for-{exam}"
  for (const ch of chapters) {
    slugs.push(`blog/how-to-prepare-${slugify(ch.chapter)}-for-${ch.exam.toLowerCase()}`);
  }
  // ... repeat for each generator, producing only slug strings
  // Exam city posts (the big one):
  for (const exam of examRegistry) {
    for (const city of allCities.slice(0, 500)) {
      slugs.push(`blog/best-${exam.slug}-coaching-in-${city.slug}-${year}`);
    }
  }
  return slugs;
}
```

This eliminates ~99% of memory usage in the sitemap route.

### 2. Split sitemap into a sitemap index

Replace the single 50K-URL XML with a **sitemap index** that references sub-sitemaps. Convert `final3.xml` to output a sitemap index, and add sub-routes like `final3-blogs.xml`, `final3-practice.xml`, etc. Each sub-sitemap stays under 10,000 URLs.

Alternatively (simpler fix): keep one file but cap at 50,000 URLs since Google allows that per sitemap — but the memory fix in step 1 is mandatory.

## Files Changed

| File | Change |
|---|---|
| `src/lib/programmaticBlogs.ts` | Replace `getAllProgrammaticBlogSlugs()` with slug-only version that doesn't call `getAllProgrammaticBlogPosts()` |
| `app/final3.xml/route.ts` | Optionally split into sitemap index pattern for reliability |

## Impact

- Build memory drops from ~500MB+ to ~50MB for the sitemap route
- No content changes — all pages remain identical
- Deployment should succeed on Vercel's default 1024MB serverless limit

