import { writeFileSync } from 'fs';

// NEET Main
let neetMain = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://mindpeakinstitute.com/neet-ug-coaching</loc><lastmod>2026-02-18</lastmod><priority>0.85</priority></url>
  <url><loc>https://mindpeakinstitute.com/neet-biology-coaching</loc><lastmod>2026-02-18</lastmod><priority>0.75</priority></url>
  <url><loc>https://mindpeakinstitute.com/neet-physics-coaching</loc><lastmod>2026-02-18</lastmod><priority>0.75</priority></url>
  <url><loc>https://mindpeakinstitute.com/neet-chemistry-coaching</loc><lastmod>2026-02-18</lastmod><priority>0.75</priority></url>
</urlset>`;
writeFileSync('public/sitemaps/neet-main.xml', neetMain);

// NEET Chapters
const chapters = ['botany', 'zoology', 'physics', 'chemistry'];
let chapterXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

chapters.forEach(subject => {
  for (let i = 1; i <= 10; i++) {
    chapterXml += `  <url><loc>https://mindpeakinstitute.com/neet-${subject}-chapter-${i}</loc><lastmod>2026-02-18</lastmod><priority>0.75</priority></url>\n`;
  }
});
chapterXml += `</urlset>`;
writeFileSync('public/sitemaps/neet-chapters.xml', chapterXml);

// NEET Practice
let practiceXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
chapters.forEach(subject => {
  for (let i = 1; i <= 50; i++) {
    practiceXml += `  <url><loc>https://mindpeakinstitute.com/neet-${subject}-question-${i}</loc><lastmod>2026-02-18</lastmod><priority>0.65</priority></url>\n`;
  }
});
practiceXml += `</urlset>`;
writeFileSync('public/sitemaps/neet-practice.xml', practiceXml);

console.log('✅ NEET: 4 main + 40 chapters + 200 questions');
