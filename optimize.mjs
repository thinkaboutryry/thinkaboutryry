import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('./src/assets');

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir);
  let initialSize = 0;
  let finalSize = 0;

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(assetsDir, file);
      const stat = fs.statSync(filePath);
      initialSize += stat.size;

      try {
        const buffer = fs.readFileSync(filePath);
        
        // Resize to max 1920px width to prevent huge displays from lagging, 
        // compress as JPEG if possible, but keep original extension.
        // Or simply optimize PNG
        const optimizedBuffer = await sharp(buffer)
          .resize({ width: 1920, withoutEnlargement: true })
          .png({ compressionLevel: 9, quality: 75, force: false }) // Use force: false to keep original format compression
          .jpeg({ quality: 80, force: false })
          .webp({ quality: 80, force: false })
          .toBuffer();
          
        fs.writeFileSync(filePath, optimizedBuffer);
        
        const newStat = fs.statSync(filePath);
        finalSize += newStat.size;
        console.log(`Optimized ${file}: ${(stat.size / 1024 / 1024).toFixed(2)} MB -> ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);
      } catch (e) {
        console.error(`Error optimizing ${file}:`, e);
      }
    }
  }
  
  console.log('\nOptimization complete!');
  console.log(`Initial Total Size: ${(initialSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Final Total Size: ${(finalSize / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
