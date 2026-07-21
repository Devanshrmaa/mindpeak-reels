/**
 * IndexNow — instant URL submission to Bing (also Yandex, Seznam, Naver).
 * ─────────────────────────────────────────────────────────────────────
 * IndexNow is the closest thing to a "direct wire" into Bing Webmaster
 * Tools: instead of waiting for Bingbot to recrawl, we POST changed URLs
 * and Bing fetches them within minutes. Bing indexes this site normally
 * (no Google-style spam-update suppression), so this is the fastest live
 * traffic lane we have.
 *
 * Ownership is proven by hosting a key file at
 *   https://<HOST>/<INDEXNOW_KEY>.txt   (public/<INDEXNOW_KEY>.txt)
 * whose contents are exactly INDEXNOW_KEY. IndexNow fetches that file to
 * confirm the submitter controls the domain.
 *
 * ⚠️  Single source of truth for the key lives HERE. Three things must stay
 *     in lock-step:
 *       1. INDEXNOW_KEY below
 *       2. the hosted key file  public/<INDEXNOW_KEY>.txt
 *       3. the standalone script scripts/indexnow-ping.mjs (plain node, can't
 *          import this TS module, so it hardcodes the same key).
 *
 * Docs: https://www.indexnow.org/documentation
 */

export const INDEXNOW_HOST = 'mindpeakinstitute.com';

/** Public IndexNow key — matches public/<KEY>.txt and scripts/indexnow-ping.mjs. */
export const INDEXNOW_KEY = 'c1a9e4f2b7d84f3a9c5e6d8b2f4a7c31';

/** Shared IndexNow endpoint — participating engines share submissions. */
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/** Where engines fetch the key file to verify domain ownership. */
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

/** IndexNow accepts at most 10,000 URLs per request. */
const BATCH_LIMIT = 10_000;

/**
 * Normalise a path or URL to a canonical absolute URL on our host.
 * Returns null for anything that isn't a real, submittable URL:
 *  - empty / whitespace
 *  - unexpanded route patterns (contain "[" or "*")
 *  - absolute URLs pointing at a different host.
 */
export function toAbsoluteUrl(pathOrUrl: string): string | null {
  const raw = (pathOrUrl || '').trim();
  if (!raw || raw.includes('[') || raw.includes('*')) return null;

  if (/^https?:\/\//i.test(raw)) {
    try {
      const u = new URL(raw);
      return u.hostname === INDEXNOW_HOST ? u.toString() : null;
    } catch {
      return null;
    }
  }

  const path = raw.startsWith('/') ? raw : `/${raw}`;
  return `https://${INDEXNOW_HOST}${path}`;
}

export interface IndexNowResult {
  ok: boolean;
  status: number;
  submitted: number;
  urls: string[];
  error?: string;
}

/**
 * Submit one or more paths/URLs to IndexNow. Accepts absolute URLs or
 * site-relative paths; invalid/foreign entries are dropped. Never throws —
 * callers (e.g. the revalidate route) can fire-and-await without risking the
 * primary operation. IndexNow returns 200 (accepted) or 202 (accepted, key
 * validation pending); both mean success.
 */
export async function submitToIndexNow(
  input: string | string[],
): Promise<IndexNowResult> {
  const list = Array.isArray(input) ? input : [input];
  const urls = [
    ...new Set(
      list
        .map(toAbsoluteUrl)
        .filter((u): u is string => u !== null),
    ),
  ].slice(0, BATCH_LIMIT);

  if (urls.length === 0) {
    return { ok: false, status: 0, submitted: 0, urls, error: 'No valid URLs to submit' };
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    return {
      ok: res.status < 400,
      status: res.status,
      submitted: res.status < 400 ? urls.length : 0,
      urls,
      error: res.status < 400 ? undefined : `IndexNow responded HTTP ${res.status}`,
    };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      submitted: 0,
      urls,
      error: err instanceof Error ? err.message : 'IndexNow request failed',
    };
  }
}
