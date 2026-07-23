const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/images/ai-avatars/Sanju Kumawat.jpeg');
const outputPath = path.join(__dirname, 'public/images/team/sanju-kumawat.webp');

async function processImage() {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // We want a square crop focusing on the face (top/attention).
    // Let's use 'attention' strategy which usually finds the face.
    await image
      .resize({
        width: 200,
        height: 200,
        fit: 'cover',
        position: 'attention' // smart crop focusing on the most detailed area (face)
      })
      .modulate({ brightness: 1.05, saturation: 1.1 })
      .sharpen()
      .webp({ quality: 100 })
      .toFile(outputPath);
      
    console.log('Successfully cropped Sanju using attention strategy.');
  } catch (e) {
    console.error('Error processing', e);
  }
}
processImage();
