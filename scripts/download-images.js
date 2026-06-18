const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory');
}

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    filename: 'hero-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    filename: 'hero-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    filename: 'hero-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80',
    filename: 'hero-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    filename: 'hero-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80',
    filename: 'hero-6.jpg'
  }
];

function downloadImage(url, filename) {
  const filepath = path.join(imagesDir, filename);
  
  // Skip if already exists
  if (fs.existsSync(filepath)) {
    console.log(`✓ ${filename} already exists`);
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    console.log(`Downloading ${filename}...`);
    
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          const fileStream = fs.createWriteStream(filepath);
          redirectResponse.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✓ Downloaded ${filename}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      console.error(`✗ Failed to download ${filename}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Downloading hero images...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (err) {
      console.error(`Error downloading ${image.filename}`);
    }
  }
  
  console.log('\n✓ Done! Images saved to /public/images/');
}

downloadAll();
