const fs = require('fs');
const path = require('path');

const directories = [
  'c:\\Users\\Computer House\\OneDrive\\Desktop\\explore-pakistan-fr\\ateliers-haussmann-3d',
  'c:\\Users\\Computer House\\OneDrive\Desktop\\explore-pakistan-fr\\wordpress\\wp-content\\themes\\ateliers-haussmann',
  'c:\\Users\\Computer House\\OneDrive\\Desktop\\explore-pakistan-fr\\ateliers-haussmann'
];

const extensions = ['.jsx', '.js', '.css', '.php'];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        scanDir(fullPath);
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        checkFile(fullPath);
      }
    }
  }
}

const pattern = /[Ãâ]/;

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (pattern.test(content)) {
      // Find what sequences are present
      const matches = [];
      if (content.includes('é')) matches.push('é');
      if (content.includes('à')) matches.push('à');
      if (content.includes('è')) matches.push('è');
      if (content.includes('ù')) matches.push('ù');
      if (content.includes('â')) matches.push('â');
      if (content.includes('É')) matches.push('É');
      if (content.includes('€')) matches.push('€');
      if (content.includes('’')) matches.push('’');
      if (content.includes('✓')) matches.push('✓');
      if (content.includes('★')) matches.push('★');
      if (content.includes('✅')) matches.push('✅');
      if (content.includes('—')) matches.push('—');
      
      if (matches.length > 0) {
        console.log(`File with issues: ${filePath} (Matches: ${matches.join(', ')})`);
      }
    }
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
  }
}

for (const dir of directories) {
  console.log(`Scanning ${dir}...`);
  scanDir(dir);
}
console.log('Scan complete!');
