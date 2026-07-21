# Bing Webmaster Tools — Operator Guide

How MindPeak "attaches" to Bing, and the few steps only a human with the Bing
account can do. Bing indexes this site **normally** (it did not apply the
March-2026 Google spam penalty), so Bing is our fastest live-traffic lane —
worth keeping first-class.

There is no way to give an automated agent your Bing login. The integration is
therefore split into **code we ship** (already done) and **three dashboard
actions you do once**.

---

## What the codebase already does

| Piece | File | Purpose |
|---|---|---|
| Bing-only sitemap | `app/bing-sitemap.xml/route.ts` → `app/bing-pages.xml/route.ts` | Exposes the curated pages **plus** ~14k thin question/city pages to Bing that are kept out of Google |
| Per-crawler robots | `proxy.ts` + `src/lib/bingIndexing.ts` | Serves `X-Robots-Tag: index` to Bingbot, `noindex` to everyone else, on those thin pages |
| Ownership meta tag | `app/layout.tsx` | Renders `<meta name="msvalidate.01">` when `BING_SITE_VERIFICATION` is set |
| IndexNow key | `public/c1a9e4f2b7d84f3a9c5e6d8b2f4a7c31.txt` | Proves domain ownership to IndexNow |
| IndexNow library | `src/lib/indexNow.ts` | Single source of truth: key, endpoint, `submitToIndexNow()` |
| Auto-ping on publish | `app/api/revalidate/route.ts` | Revalidating a path also pushes it to Bing |
| On-demand endpoint | `app/api/indexnow/route.ts` | `POST /api/indexnow?secret=…` to submit any URLs |
| Bulk ping | `scripts/indexnow-ping.mjs` | `node scripts/indexnow-ping.mjs` pings every sitemap URL |

---

## The three things only you can do (once)

### 1. Verify ownership in Bing Webmaster Tools
Go to <https://www.bing.com/webmasters> → **Add a site** → `https://mindpeakinstitute.com`.

Two options:
- **Import from Google Search Console** (fastest — nothing to deploy), **or**
- **HTML Meta Tag**: copy the `content` value Bing shows and set it in Vercel as
  `BING_SITE_VERIFICATION` (Project → Settings → Environment Variables →
  Production), then redeploy. The tag renders automatically; click **Verify**.

### 2. Submit the Bing sitemap
Bing Webmaster Tools → **Sitemaps** → **Submit sitemap**:

```
https://mindpeakinstitute.com/bing-sitemap.xml
```

⚠️ Submit it **only here**. Do **not** add it to `robots.txt` or `sitemap.xml` —
it deliberately lists the ~14k Bing-exclusive pages that must stay invisible to
Googlebot.

### 3. (Optional) Confirm IndexNow is linked
Bing Webmaster Tools → **IndexNow** should show the key
`c1a9e4f2b7d84f3a9c5e6d8b2f4a7c31` as active once the first submission lands.
Send one now to kick it off:

```bash
node scripts/indexnow-ping.mjs            # pings every URL in the sitemap
node scripts/indexnow-ping.mjs /blog/foo  # pings specific paths
DRY_RUN=1 node scripts/indexnow-ping.mjs  # preview, no send
```

---

## Day-to-day: nothing extra to do

Publishing/updating a page already notifies Bing. Whenever you purge the ISR
cache:

```bash
curl -X POST "https://mindpeakinstitute.com/api/revalidate?secret=SECRET&path=/blog/new-post"
```

the same path is pushed to IndexNow automatically. Opt out per call with
`&indexnow=0`. To push URLs without revalidating:

```bash
curl -X POST "https://mindpeakinstitute.com/api/indexnow?secret=SECRET" \
  -H 'Content-Type: application/json' \
  -d '{"urls":["/blog/new-post","/jee-coaching"]}'
```

(`secret` is `REVALIDATION_SECRET`.)

---

## Keep the IndexNow key in sync

The key appears in **three** places and they must match exactly:
1. `src/lib/indexNow.ts` → `INDEXNOW_KEY`
2. `public/<key>.txt` (filename **and** contents)
3. `scripts/indexnow-ping.mjs` → `KEY`

To rotate: generate a new 32-char hex string, update all three (rename the
public file too), redeploy, then re-check the IndexNow panel in Bing Webmaster
Tools.
