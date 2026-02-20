import { existsSync } from 'fs';

const requiredFiles = [
  'public/sitemap.xml',
  'public/sitemaps/core/sitemap.xml',
  'scripts/sitemap-utils.ts',
];

console.log('🔍 Verifying File 1 installation...\n');

let allGood = true;
requiredFiles.forEach(file => {
  const exists = existsSync(file);
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allGood = false;
});

if (allGood) {
  console.log('\n✅ File 1 complete! Ready for File 2.');
} else {
  console.log('\n❌ Some files missing. Please create them.');
}
