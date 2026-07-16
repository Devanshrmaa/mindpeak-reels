/**
 * indexnow-ping.mjs — submit URLs to Bing via the IndexNow protocol.
 *
 * Bing indexes this site normally (no Google-style suppression), so fast
 * indexing there is the quickest live traffic lane. IndexNow pings tell
 * Bing immediately when URLs change instead of waiting for a recrawl.
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs                     # ping all sitemap URLs (index + children)
 *   node scripts/indexnow-ping.mjs /blog/foo /bar      # ping specific paths
 *   DRY_RUN=1 node scripts/indexnow-ping.mjs           # print payload, don't send
 *
 * The key file public/<KEY>.txt must be deployed (same KEY as below) —
 * IndexNow verifies ownership by fetching https://host/<KEY>.txt.
 * Docs: https://www.indexnow.org/documentation
 */

const HOST = 'mindpeakinstitute.com';
const KEY = 'c1a9e4f2b7d84f3a9c5e6d8b2f4a7c31';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH_LIMIT = 10000;

async function collectSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  const xml = await res.text();
  const children = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const child of children) {
    const childXml = await (await fetch(child)).text();
    urls.push(...[...childXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  return urls;
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? p : `/${p}`}`))
    : await collectSitemapUrls();

  if (urlList.length === 0) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urlList.slice(0, BATCH_LIMIT),
  };

  if (process.env.DRY_RUN) {
    console.log(`DRY RUN — would submit ${payload.urlList.length} URLs:`);
    console.log(payload.urlList.slice(0, 10).join('\n') + (payload.urlList.length > 10 ? `\n… +${payload.urlList.length - 10} more` : ''));
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  // IndexNow: 200 = submitted, 202 = accepted (key validation pending)
  console.log(`IndexNow response: HTTP ${res.status} — submitted ${payload.urlList.length} URLs`);
  if (res.status >= 400) {
    console.error(await res.text());
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('IndexNow ping failed:', err.message);
  process.exit(1);
});
