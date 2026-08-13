const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputDir = path.join(__dirname, '../public/images/catalog');
const outputDir = path.join(__dirname, '../public/images/catalog');

async function optimizeImages() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFile = file.replace('.png', '.webp');
    const outputPath = path.join(outputDir, outputFile);
    
    try {
      const metadata = await sharp(inputPath).metadata();
      console.log(`${file}: ${metadata.width}x${metadata.height}`);
      
      await sharp(inputPath)
        .resize(400, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      console.log(`  Optimized: ${(originalSize/1024/1024).toFixed(2)}MB -> ${(optimizedSize/1024).toFixed(1)}KB`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

optimizeImages();
