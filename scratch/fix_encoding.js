const fs = require('fs');
const path = require('path');

const directories = [
  'c:\\Users\\Computer House\\OneDrive\\Desktop\\explore-pakistan-fr\\ateliers-haussmann-3d',
  'c:\\Users\\Computer House\\OneDrive\\Desktop\\explore-pakistan-fr\\wordpress\\wp-content\\themes\\ateliers-haussmann',
  'c:\\Users\\Computer House\\OneDrive\\Desktop\\explore-pakistan-fr\\ateliers-haussmann'
];

const extensions = ['.jsx', '.js', '.css', '.php'];

const replacements = [
  { from: 'é', to: 'é' },
  { from: 'à', to: 'à' },
  { from: 'è', to: 'è' },
  { from: 'ù', to: 'ù' },
  { from: 'â', to: 'â' },
  { from: 'û', to: 'û' },
  { from: 'ô', to: 'ô' },
  { from: 'î', to: 'î' },
  { from: 'ï', to: 'ï' },
  { from: 'ç', to: 'ç' },
  { from: 'ë', to: 'ë' },
  { from: 'É', to: 'É' },
  { from: 'È', to: 'È' },
  { from: 'À', to: 'À' },
  { from: '€', to: '€' },
  { from: '’', to: '’' },
  { from: '✓', to: '✓' },
  { from: '★', to: '★' },
  { from: '✅', to: '✅' },
  { from: '—', to: '—' },
  { from: '–', to: '–' },
  { from: '·', to: '·' }
];

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        processDir(fullPath);
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        fixFile(fullPath);
      }
    }
  }
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const r of replacements) {
      if (content.includes(r.from)) {
        // Use split-join to replace all occurrences without regex escaping issues
        content = content.split(r.from).join(r.to);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (e) {
    console.error(`Error fixing ${filePath}:`, e.message);
  }
}

for (const dir of directories) {
  console.log(`Processing ${dir}...`);
  processDir(dir);
}
console.log('Fix complete!');
