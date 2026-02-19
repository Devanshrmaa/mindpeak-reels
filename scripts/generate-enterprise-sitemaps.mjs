/**
 * generate-enterprise-sitemaps.mjs
 * Run: node scripts/generate-enterprise-sitemaps.mjs
 *
 * Enterprise-level sitemap index architecture (Physics Wallah-style).
 * Reads actual route data from the codebase and generates:
 *   - Master sitemap.xml (Sitemap Index)
 *   - 20+ category-specific sub-sitemaps in public/sitemaps/
 *
 * Total URLs: 800+ (chapters, topics, locations, blogs, SEO pages, tools, etc.)
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASE_URL = 'https://mindpeakinstitute.com';
const TODAY = new Date().toISOString().split('T')[0];

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}

// ============================================================================
// DATA EXTRACTION — read actual slugs from source files
// ============================================================================

function extractSlugs(filePath) {
  const content = readFileSync(join(ROOT, filePath), 'utf-8');
  const slugs = [];
  const re = /slug:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(content)) !== null) slugs.push(m[1]);
  return slugs;
}

function topicToSlug(topic) {
  return topic.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function extractChapterTopics(filePath) {
  const content = readFileSync(join(ROOT, filePath), 'utf-8');
  const slugRe = /slug:\s*'([^']+)'/g;
  const topicsRe = /topics:\s*\[([^\]]+)\]/g;
  const slugs = [];
  const topicsArrays = [];
  let m;
  while ((m = slugRe.exec(content)) !== null) slugs.push(m[1]);
  while ((m = topicsRe.exec(content)) !== null) {
    const raw = m[1];
    const topics = [];
    const tRe = /(?:'([^']*)'|"([^"]*)")/g;
    let tm;
    while ((tm = tRe.exec(raw)) !== null) topics.push(tm[1] || tm[2]);
    topicsArrays.push(topics);
  }
  const result = [];
  for (let i = 0; i < slugs.length && i < topicsArrays.length; i++) {
    for (const topic of topicsArrays[i]) {
      result.push(`${slugs[i]}/${topicToSlug(topic)}`);
    }
  }
  return result;
}

// ─── Extract all real data ───
const jeePhysicsSlugs = extractSlugs('src/data/chapters/jeePhysics.ts');
const jeeChemistrySlugs = extractSlugs('src/data/chapters/jeeChemistry.ts');
const jeeMathsSlugs = extractSlugs('src/data/chapters/jeeMaths.ts');
const neetBiologySlugs = extractSlugs('src/data/chapters/neetBiology.ts');
const neetPhysicsSlugs = extractSlugs('src/data/chapters/neetPhysics.ts');
const neetChemistrySlugs = extractSlugs('src/data/chapters/neetChemistry.ts');

const blogSlugs = extractSlugs('src/data/blogData.ts');

// City + exam combos
const cityContent = readFileSync(join(ROOT, 'src/data/cityData.ts'), 'utf-8');
const expansionContent = readFileSync(join(ROOT, 'src/data/cityExpansion.ts'), 'utf-8');
function extractCityExamRoutes(content) {
  const routes = [];
  // Match slug and exams arrays
  const blockRe = /slug:\s*'([^']+)'[\s\S]*?exams:\s*\[([^\]]+)\]/g;
  let m;
  while ((m = blockRe.exec(content)) !== null) {
    const slug = m[1];
    const examsStr = m[2];
    if (examsStr.includes('jee')) routes.push(`jee-coaching-in-${slug}`);
    if (examsStr.includes('neet')) routes.push(`neet-coaching-in-${slug}`);
  }
  return routes;
}
const allLocationRoutes = [
  ...extractCityExamRoutes(cityContent),
  ...extractCityExamRoutes(expansionContent),
];

// Topic-level pages
const chapterFiles = [
  'src/data/chapters/jeePhysics.ts',
  'src/data/chapters/jeeChemistry.ts',
  'src/data/chapters/jeeMaths.ts',
  'src/data/chapters/neetBiology.ts',
  'src/data/chapters/neetPhysics.ts',
  'src/data/chapters/neetChemistry.ts',
];
const allTopicPaths = chapterFiles.flatMap(f => extractChapterTopics(f));

// Categorize locations by tier
const tier1Cities = ['delhi', 'mumbai', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad'];
const tier2Cities = ['jaipur', 'kochi', 'indore', 'chandigarh', 'nagpur', 'coimbatore', 'surat', 'vadodara',
  'lucknow', 'patna', 'bhopal', 'visakhapatnam', 'vijayawada', 'thane', 'navi-mumbai', 'aurangabad',
  'madurai', 'trichy'];

function categorizeLocation(route) {
  for (const c of tier1Cities) { if (route.includes(c)) return 'tier1'; }
  for (const c of tier2Cities) { if (route.includes(c)) return 'tier2'; }
  return 'tier3';
}
const locJeeTier1 = allLocationRoutes.filter(r => r.startsWith('jee') && categorizeLocation(r) === 'tier1');
const locJeeTier2 = allLocationRoutes.filter(r => r.startsWith('jee') && categorizeLocation(r) === 'tier2');
const locJeeTier3 = allLocationRoutes.filter(r => r.startsWith('jee') && categorizeLocation(r) === 'tier3');
const locNeetTier1 = allLocationRoutes.filter(r => r.startsWith('neet') && categorizeLocation(r) === 'tier1');
const locNeetTier2 = allLocationRoutes.filter(r => r.startsWith('neet') && categorizeLocation(r) === 'tier2');
const locNeetTier3 = allLocationRoutes.filter(r => r.startsWith('neet') && categorizeLocation(r) === 'tier3');

// ============================================================================
// SITEMAP GROUPS
// ============================================================================

const groups = [
  // ── CORE ──
  {
    name: 'core',
    path: 'sitemaps/core/sitemap.xml',
    lastmod: TODAY,
    urls: [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/jee-coaching', priority: 0.95, changefreq: 'weekly' },
      { url: '/neet-coaching', priority: 0.95, changefreq: 'weekly' },
      { url: '/free-trial', priority: 0.92, changefreq: 'weekly' },
      { url: '/pricing', priority: 0.90, changefreq: 'monthly' },
      { url: '/courses', priority: 0.88, changefreq: 'monthly' },
      { url: '/contact', priority: 0.85, changefreq: 'monthly' },
      { url: '/about', priority: 0.80, changefreq: 'monthly' },
    ],
  },

  // ── JEE SERVICE PAGES ──
  {
    name: 'jee',
    path: 'sitemaps/jee/sitemap.xml',
    lastmod: TODAY,
    urls: [
      { url: '/jee-main-coaching', priority: 0.85, changefreq: 'weekly' },
      { url: '/jee-advanced-coaching', priority: 0.85, changefreq: 'weekly' },
      { url: '/jee-dropper-coaching', priority: 0.82, changefreq: 'weekly' },
      { url: '/jee-crash-course', priority: 0.78, changefreq: 'weekly' },
      { url: '/jee-physics-coaching', priority: 0.75, changefreq: 'monthly' },
      { url: '/jee-chemistry-coaching', priority: 0.75, changefreq: 'monthly' },
      { url: '/jee-mathematics-coaching', priority: 0.75, changefreq: 'monthly' },
      { url: '/jee-physics-preparation', priority: 0.72, changefreq: 'monthly' },
      { url: '/jee-chemistry-preparation', priority: 0.72, changefreq: 'monthly' },
      { url: '/jee-mathematics-preparation', priority: 0.72, changefreq: 'monthly' },
    ],
  },

  // ── NEET SERVICE PAGES ──
  {
    name: 'neet',
    path: 'sitemaps/neet/sitemap.xml',
    lastmod: TODAY,
    urls: [
      { url: '/neet-ug-coaching', priority: 0.85, changefreq: 'weekly' },
      { url: '/neet-dropper-coaching', priority: 0.82, changefreq: 'weekly' },
      { url: '/neet-crash-course', priority: 0.78, changefreq: 'weekly' },
      { url: '/neet-biology-coaching', priority: 0.75, changefreq: 'monthly' },
      { url: '/neet-physics-coaching', priority: 0.75, changefreq: 'monthly' },
      { url: '/neet-chemistry-coaching', priority: 0.75, changefreq: 'monthly' },
      { url: '/neet-biology-preparation', priority: 0.72, changefreq: 'monthly' },
      { url: '/neet-physics-preparation', priority: 0.72, changefreq: 'monthly' },
      { url: '/neet-chemistry-preparation', priority: 0.72, changefreq: 'monthly' },
      { url: '/foundation-coaching', priority: 0.70, changefreq: 'monthly' },
    ],
  },

  // ── JEE CHAPTERS ──
  {
    name: 'jeePhysicsChapters',
    path: 'sitemaps/jee/chapters/physics/sitemap.xml',
    lastmod: TODAY,
    urls: jeePhysicsSlugs.map(s => ({ url: `/${s}`, priority: 0.70, changefreq: 'monthly' })),
  },
  {
    name: 'jeeChemistryChapters',
    path: 'sitemaps/jee/chapters/chemistry/sitemap.xml',
    lastmod: daysAgo(1),
    urls: jeeChemistrySlugs.map(s => ({ url: `/${s}`, priority: 0.70, changefreq: 'monthly' })),
  },
  {
    name: 'jeeMathsChapters',
    path: 'sitemaps/jee/chapters/mathematics/sitemap.xml',
    lastmod: daysAgo(1),
    urls: jeeMathsSlugs.map(s => ({ url: `/${s}`, priority: 0.70, changefreq: 'monthly' })),
  },

  // ── NEET CHAPTERS ──
  {
    name: 'neetBiologyChapters',
    path: 'sitemaps/neet/chapters/biology/sitemap.xml',
    lastmod: TODAY,
    urls: neetBiologySlugs.map(s => ({ url: `/${s}`, priority: 0.70, changefreq: 'monthly' })),
  },
  {
    name: 'neetPhysicsChapters',
    path: 'sitemaps/neet/chapters/physics/sitemap.xml',
    lastmod: daysAgo(1),
    urls: neetPhysicsSlugs.map(s => ({ url: `/${s}`, priority: 0.70, changefreq: 'monthly' })),
  },
  {
    name: 'neetChemistryChapters',
    path: 'sitemaps/neet/chapters/chemistry/sitemap.xml',
    lastmod: daysAgo(1),
    urls: neetChemistrySlugs.map(s => ({ url: `/${s}`, priority: 0.70, changefreq: 'monthly' })),
  },

  // ── TOPIC-LEVEL PAGES (split JEE vs NEET) ──
  {
    name: 'jeeTopics',
    path: 'sitemaps/jee/topics/sitemap.xml',
    lastmod: daysAgo(2),
    urls: allTopicPaths.filter(p => p.startsWith('jee-')).map(p => ({ url: `/${p}`, priority: 0.55, changefreq: 'monthly' })),
  },
  {
    name: 'neetTopics',
    path: 'sitemaps/neet/topics/sitemap.xml',
    lastmod: daysAgo(2),
    urls: allTopicPaths.filter(p => p.startsWith('neet-')).map(p => ({ url: `/${p}`, priority: 0.55, changefreq: 'monthly' })),
  },

  // ── LOCATIONS ──
  {
    name: 'locationsTier1Jee',
    path: 'sitemaps/locations/tier1/jee/sitemap.xml',
    lastmod: TODAY,
    urls: locJeeTier1.map(r => ({ url: `/${r}`, priority: 0.80, changefreq: 'monthly' })),
  },
  {
    name: 'locationsTier1Neet',
    path: 'sitemaps/locations/tier1/neet/sitemap.xml',
    lastmod: TODAY,
    urls: locNeetTier1.map(r => ({ url: `/${r}`, priority: 0.80, changefreq: 'monthly' })),
  },
  {
    name: 'locationsTier2Jee',
    path: 'sitemaps/locations/tier2/jee/sitemap.xml',
    lastmod: daysAgo(1),
    urls: locJeeTier2.map(r => ({ url: `/${r}`, priority: 0.70, changefreq: 'monthly' })),
  },
  {
    name: 'locationsTier2Neet',
    path: 'sitemaps/locations/tier2/neet/sitemap.xml',
    lastmod: daysAgo(1),
    urls: locNeetTier2.map(r => ({ url: `/${r}`, priority: 0.70, changefreq: 'monthly' })),
  },
  {
    name: 'locationsTier3Jee',
    path: 'sitemaps/locations/tier3/jee/sitemap.xml',
    lastmod: daysAgo(3),
    urls: locJeeTier3.map(r => ({ url: `/${r}`, priority: 0.60, changefreq: 'monthly' })),
  },
  {
    name: 'locationsTier3Neet',
    path: 'sitemaps/locations/tier3/neet/sitemap.xml',
    lastmod: daysAgo(3),
    urls: locNeetTier3.map(r => ({ url: `/${r}`, priority: 0.60, changefreq: 'monthly' })),
  },

  // ── BLOG ──
  {
    name: 'blog',
    path: 'sitemaps/blog/sitemap.xml',
    lastmod: TODAY,
    urls: [
      { url: '/blog', priority: 0.75, changefreq: 'weekly' },
      ...blogSlugs.map(s => ({ url: `/blog/${s}`, priority: 0.62, changefreq: 'monthly' })),
    ],
  },

  // ── COMPARISONS ──
  {
    name: 'comparisons',
    path: 'sitemaps/comparisons/sitemap.xml',
    lastmod: daysAgo(3),
    urls: [
      { url: '/kota-coaching-alternative', priority: 0.80, changefreq: 'monthly' },
      { url: '/online-vs-offline-jee-coaching', priority: 0.78, changefreq: 'monthly' },
      { url: '/batch-vs-personal-coaching', priority: 0.78, changefreq: 'monthly' },
      { url: '/mindpeak-vs-allen', priority: 0.78, changefreq: 'monthly' },
      { url: '/mindpeak-vs-resonance', priority: 0.78, changefreq: 'monthly' },
      { url: '/mindpeak-vs-fiitjee', priority: 0.78, changefreq: 'monthly' },
      { url: '/mindpeak-vs-byjus', priority: 0.75, changefreq: 'monthly' },
    ],
  },

  // ── TOOLS (Rank Predictors, Formulas) ──
  {
    name: 'tools',
    path: 'sitemaps/tools/sitemap.xml',
    lastmod: daysAgo(1),
    urls: [
      { url: '/jee-rank-predictor', priority: 0.75, changefreq: 'weekly' },
      { url: '/neet-rank-predictor', priority: 0.75, changefreq: 'weekly' },
      { url: '/jee-physics-formulas', priority: 0.70, changefreq: 'monthly' },
      { url: '/jee-chemistry-formulas', priority: 0.70, changefreq: 'monthly' },
      { url: '/jee-maths-formulas', priority: 0.70, changefreq: 'monthly' },
      { url: '/neet-biology-formulas', priority: 0.70, changefreq: 'monthly' },
      { url: '/neet-physics-formulas', priority: 0.70, changefreq: 'monthly' },
    ],
  },

  // ── LEGAL ──
  {
    name: 'legal',
    path: 'sitemaps/legal/sitemap.xml',
    lastmod: daysAgo(17),
    urls: [
      { url: '/terms-and-conditions', priority: 0.20, changefreq: 'yearly' },
      { url: '/refund-policy', priority: 0.25, changefreq: 'yearly' },
    ],
  },
];

// ============================================================================
// XML GENERATORS
// ============================================================================

function urlsetXml(urls, lastmod) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${BASE_URL}${u.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(2)}</priority>
  </url>`).join('\n')}
</urlset>`;
}

function sitemapIndexXml(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!--
================================================================
  MINDPEAK INSTITUTE — ENTERPRISE SITEMAP INDEX
  Auto-generated by scripts/generate-enterprise-sitemaps.mjs
  Generated: ${TODAY}
================================================================
-->
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <sitemap>
    <loc>${BASE_URL}/${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
}

// ============================================================================
// MAIN
// ============================================================================

console.log('🚀 Generating enterprise sitemap index...\n');

let totalUrls = 0;
const indexEntries = [];

for (const group of groups) {
  if (group.urls.length === 0) {
    console.log(`⚠️  ${group.name.padEnd(28)} 0 URLs — skipping`);
    continue;
  }

  const dir = join(ROOT, 'public', group.path.split('/').slice(0, -1).join('/'));
  mkdirSync(dir, { recursive: true });

  const xml = urlsetXml(group.urls, group.lastmod);
  writeFileSync(join(ROOT, 'public', group.path), xml);

  console.log(`✅ ${group.name.padEnd(28)} ${String(group.urls.length).padStart(4)} URLs → ${group.path}`);
  totalUrls += group.urls.length;
  indexEntries.push(group);
}

// Write master sitemap.xml
const masterXml = sitemapIndexXml(indexEntries);
writeFileSync(join(ROOT, 'public/sitemap.xml'), masterXml);

console.log('\n' + '─'.repeat(64));
console.log(`📊 Generated ${indexEntries.length} sub-sitemaps with ${totalUrls} total URLs`);
console.log(`📄 Master index: public/sitemap.xml`);
console.log('─'.repeat(64));

// Ping Google
const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(BASE_URL + '/sitemap.xml')}`;
try {
  const res = await fetch(pingUrl);
  console.log(res.ok ? `\n✅ Pinged Google: ${pingUrl}` : `\n⚠️  Google ping returned ${res.status}`);
} catch {
  console.log('\n⚠️  Could not ping Google (network error) — sitemaps still generated');
}

console.log(`\n📅 All sitemaps generated with date: ${TODAY}`);
