const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imgPath = 'c:\\Users\\Computer House\\OneDrive\\Desktop\\explore-pakistan-fr\\ateliers-haussmann-3d\\public\\images\\qualisol.png';

if (fs.existsSync(imgPath)) {
  try {
    const cmd = `powershell -Command "[Reflection.Assembly]::LoadWithPartialName('System.Drawing'); $b = New-Object System.Drawing.Bitmap('${imgPath.replace(/\\/g, '\\\\')}'); $w = $b.Width; $h = $b.Height; Write-Output \\"Dimensions: $w x $h\\"; $darkBorder = 0; for ($x=0; $x -lt $w; $x++) { if ($b.GetPixel($x, 0).R -lt 150) { $darkBorder++ }; if ($b.GetPixel($x, $h-1).R -lt 150) { $darkBorder++ } }; for ($y=0; $y -lt $h; $y++) { if ($b.GetPixel(0, $y).R -lt 150) { $darkBorder++ }; if ($b.GetPixel($w-1, $y).R -lt 150) { $darkBorder++ } }; Write-Output \\"Dark border pixels at exact edges: $darkBorder\\"; $b.Dispose()"`;
    const result = execSync(cmd).toString().trim();
    console.log(result);
  } catch (e) {
    console.error('Error:', e.message);
  }
} else {
  console.log('Not found');
}
