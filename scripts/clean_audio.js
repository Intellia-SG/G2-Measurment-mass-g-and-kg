// scripts/clean_audio.js
// Scans public/assets/audio/ and removes any .mp3 files not referenced in audioMap.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const audioDir = path.resolve(__dirname, '../public/assets/audio');
const mapPath = path.resolve(__dirname, '../src/utils/audioMap.js');

if (!fs.existsSync(audioDir)) {
  console.log("No audio directory found at:", audioDir);
  process.exit(0);
}

if (!fs.existsSync(mapPath)) {
  console.log("No audioMap.js found at:", mapPath);
  process.exit(0);
}

const mapContent = fs.readFileSync(mapPath, 'utf-8');
const files = fs.readdirSync(audioDir);

let deletedCount = 0;

for (const file of files) {
  if (file.endsWith('.mp3')) {
    if (!mapContent.includes(file)) {
      const fullPath = path.join(audioDir, file);
      fs.unlinkSync(fullPath);
      console.log(`🗑️ Deleted orphaned audio: ${file}`);
      deletedCount++;
    }
  }
}

console.log(`\n✨ Audio cleanup complete! Removed ${deletedCount} orphaned audio files.`);
