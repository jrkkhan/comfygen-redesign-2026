const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images/ai-avatars');
const outputDir = path.join(__dirname, 'public/images/team');

const files = [
  'Adil Khan.png',
  'Hemant Sharma.png',
  'Ketan Gupta.png',
  'Sanju Kumawat.jpeg'
];

async function processImages() {
  for (let file of files) {
    const inputPath = path.join(inputDir, file);
    const outName = file.toLowerCase().replace(' ', '-').replace('.png', '.webp').replace('.jpeg', '.webp');
    const outputPath = path.join(outputDir, outName);
    
    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      console.log('Processing:', file, 'Has Alpha:', metadata.hasAlpha);
      
      // If it has alpha (transparent background), we can add a background
      // If not, we can still enhance it (brightness, sharpness)
      
      // Create a cool background
      const bg = sharp({
        create: {
          width: 400,
          height: 400,
          channels: 4,
          background: { r: 36, g: 112, b: 245, alpha: 1 } // Primary blue
        }
      }).png();
      
      if (metadata.hasAlpha) {
         await bg
          .composite([{ input: await image.resize(400, 400, {fit: 'cover'}).toBuffer() }])
          .resize(200, 200)
          .webp({ quality: 100 })
          .toFile(outputPath);
      } else {
         // Just enhance and crop
         await image
          .resize(200, 200, {fit: 'cover'})
          .modulate({ brightness: 1.05, saturation: 1.1 }) // Make it pop more
          .sharpen()
          .webp({ quality: 100 })
          .toFile(outputPath);
      }
      
      console.log('Successfully saved to', outputPath);
    } catch (e) {
      console.error('Error processing', file, e);
    }
  }
}
processImages();
