import { writeFileSync } from 'fs';

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const categories = {
  'jee-preparation': 20,
  'neet-preparation': 20,
  'study-tips': 15,
  'success-stories': 10
};

Object.entries(categories).forEach(([category, count]) => {
  for (let i = 1; i <= count; i++) {
    xml += `  <url><loc>https://mindpeakinstitute.com/blog/${category}-${i}</loc><lastmod>2026-02-18</lastmod><priority>0.62</priority></url>\n`;
  }
});

xml += `</urlset>`;
writeFileSync('public/sitemaps/blog.xml', xml);
console.log('✅ 65 blog posts');
