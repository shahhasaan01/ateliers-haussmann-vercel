const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Let's use PowerShell to get image dimensions
const images = [
  'poster-pac.jpg',
  'poster-ballon.jpg',
  'poster-ssc.jpg'
];

const basePath = 'c:\\Users\\Computer House\\OneDrive\\Desktop\\explore-pakistan-fr\\ateliers-haussmann-3d\\public\\images';

images.forEach(img => {
  const fullPath = path.join(basePath, img);
  if (fs.existsSync(fullPath)) {
    try {
      const cmd = `powershell -Command "[Reflection.Assembly]::LoadWithPartialName('System.Drawing'); $b = New-Object System.Drawing.Bitmap('${fullPath.replace(/\\/g, '\\\\')}'); Write-Output \\"\\$($b.Width)x\\$($b.Height)\\"; $b.Dispose()"`;
      const size = execSync(cmd).toString().trim();
      console.log(`${img}: ${size}`);
    } catch (e) {
      console.error(`Failed to get size for ${img}:`, e.message);
    }
  } else {
    console.log(`${img}: Not found`);
  }
});
