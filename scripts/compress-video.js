const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const inputPath = path.join(__dirname, '../public/assets/landing.mp4');
const outputPath = path.join(__dirname, '../public/assets/landing-compressed.mp4');
const backupPath = path.join(__dirname, '../public/assets/landing-original.mp4');

console.log('Starting video compression...');
console.log('Input:', inputPath);
console.log('Output:', outputPath);

// Get input file size
const inputStats = fs.statSync(inputPath);
console.log(`Original size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);

ffmpeg(inputPath)
  .outputOptions([
    '-c:v libx264',           // Use H.264 codec
    '-crf 28',                // Constant Rate Factor (18-28 is good, higher = smaller file)
    '-preset medium',         // Encoding speed preset
    '-movflags +faststart',   // Enable fast start for web
    '-pix_fmt yuv420p',       // Pixel format for compatibility
    '-c:a aac',               // Audio codec
    '-b:a 128k',              // Audio bitrate
    '-ac 2'                   // Audio channels
  ])
  .on('start', (commandLine) => {
    console.log('FFmpeg command:', commandLine);
  })
  .on('progress', (progress) => {
    if (progress.percent) {
      console.log(`Processing: ${Math.round(progress.percent)}% done`);
    }
  })
  .on('end', () => {
    const outputStats = fs.statSync(outputPath);
    console.log(`\nCompression complete!`);
    console.log(`Original size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Compressed size: ${(outputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Reduction: ${(((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1)}%`);

    // Backup original and replace with compressed version
    console.log('\nBacking up original file...');
    fs.renameSync(inputPath, backupPath);
    fs.renameSync(outputPath, inputPath);
    console.log('Original saved as: landing-original.mp4');
    console.log('Compressed version is now: landing.mp4');
  })
  .on('error', (err) => {
    console.error('Error during compression:', err.message);
    process.exit(1);
  })
  .save(outputPath);
