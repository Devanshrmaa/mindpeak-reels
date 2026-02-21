import { writeFileSync } from 'fs';

const cities = [
  'delhi', 'mumbai', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 
  'pune', 'ahmedabad', 'jaipur', 'lucknow', 'patna', 'kochi'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

cities.forEach(city => {
  ['jee', 'neet'].forEach(exam => {
    xml += `  <url><loc>https://mindpeakinstitute.com/${exam}-coaching-in-${city}</loc><lastmod>2026-02-18</lastmod><priority>0.80</priority></url>\n`;
  });
});

xml += `</urlset>`;
writeFileSync('public/sitemaps/locations.xml', xml);
console.log('✅ 24 location pages (12 cities × 2 exams)');
