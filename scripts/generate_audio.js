// scripts/generate_audio.js
// Offline pre-generation script for ElevenLabs narration audio files in MassQuest.
// Strictly follows audio_generation_pipeline (5).md specifications.

import fs from 'fs';
import path from 'path';

// Helper to read environment variables without external dependencies
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...rest] = trimmed.split('=');
          const val = rest.join('=').replace(/^["']|["']$/g, '').trim();
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = val;
          }
        }
      }
    }
  }
}

loadEnv();

const apiKey = process.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("\n❌ Error: VITE_ELEVENLABS_API_KEY is not defined in .env.local or .env.");
  console.log("Please create a .env.local file with: VITE_ELEVENLABS_API_KEY=your_key_here\n");
  process.exit(1);
}

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice — Clear, Engaging Educator
const VOICE_MODEL = 'eleven_multilingual_v2';

const VOICE_SETTINGS = {
  statement:     { stability: 0.65, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true },
  instruction:   { stability: 0.65, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true },
  question:      { stability: 0.55, similarity_boost: 0.75, style: 0.50, use_speaker_boost: true },
  encouragement: { stability: 0.50, similarity_boost: 0.85, style: 0.60, use_speaker_boost: true },
  emphasis:      { stability: 0.75, similarity_boost: 0.90, style: 0.20, use_speaker_boost: true },
  thinking:      { stability: 0.70, similarity_boost: 0.78, style: 0.40, use_speaker_boost: true },
  celebration:   { stability: 0.45, similarity_boost: 0.85, style: 0.80, use_speaker_boost: true },
};

const phrases = [
  // ─── INTRO ────────────────────────────────────────────────────────────────
  { text: "Welcome to MassQuest! Let's investigate the big mass mystery!", style: 'celebration' },

  // ─── WONDER PHASE ────────────────────────────────────────────────────────
  { text: "Sophie is holding a bag of apples that feels really heavy, while Max has a feather and a 500-gram box.", style: 'statement' },
  { text: "How do we know which is heavier, and how many grams equal one kilogram?", style: 'question' },
  { text: "Let's investigate how balance scales and measuring mass work!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 0 ────────────────────────────────────────────────
  { text: "It is a sunny morning at the bustling town market! Sophie runs over to Max's fruit stall.", style: 'statement' },
  { text: "Max has an antique balance scale on his counter.", style: 'statement' },
  { text: "When he places a big basket of fresh strawberries on one pan, it clunks down while the other side goes up!", style: 'statement' },
  { text: "Sophie learns the golden rule: the heavier side always sinks down!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 1 ────────────────────────────────────────────────
  { text: "A customer asks Max for sweet berries, spices, and cinnamon.", style: 'statement' },
  { text: "Max brings out his precision scale and says: These items are small and light, so we measure them in grams!", style: 'statement' },
  { text: "A single grape is about 5 grams, and a wooden pencil is about 20 grams.", style: 'statement' },
  { text: "When objects are light, grams are our best friend!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 2 ────────────────────────────────────────────────
  { text: "Lily the baker arrives with a huge shopping cart to buy flour and sugar for the bakery.", style: 'statement' },
  { text: "She lifts a giant bag onto the heavy-duty scale.", style: 'statement' },
  { text: "We don't count thousands of tiny grams for giant bags, smiles Lily. We use kilograms!", style: 'statement' },
  { text: "One kilogram is written as 1 kg, and is used for heavy things.", style: 'celebration' },

  // ─── STORY PHASE: PANEL 3 ────────────────────────────────────────────────
  { text: "In the science lab, Oliver shows the class a magic math fact: exactly 1000 tiny 1-gram weights balance one 1-kilogram metal block!", style: 'statement' },
  { text: "That means 1 kilogram equals 1000 grams, and 500 grams is exactly half a kilogram!", style: 'statement' },
  { text: "Sophie shouts with joy — she is now officially a certified Mass Master!", style: 'celebration' },

  // ─── SIMULATE STATION INTROS ─────────────────────────────────────────────
  { text: "Welcome to Station A — Interactive Pan Balance Lab!", style: 'instruction' },
  { text: "Place brass weights on the scale pan to balance the grocery items until the beam is completely level!", style: 'instruction' },
  { text: "Welcome to Station B — Market Dial and Scale Reader!", style: 'instruction' },
  { text: "Read the dial graduations carefully and weigh grocery bags to calculate exact recipe totals!", style: 'instruction' },
  { text: "Welcome to Station C — The Grams to Kilograms Converter Machine!", style: 'instruction' },
  { text: "Convert between grams and kilograms, pack 1000-gram bags, and solve conversion puzzles!", style: 'instruction' },
  { text: "Welcome to Station D — Chef Lily's Recipe Mass Inspector!", style: 'instruction' },
  { text: "Inspect recipe ingredients, spot incorrect masses, and balance the baker's workbench to perfection!", style: 'instruction' },

  // ─── FEEDBACK & HINTS ────────────────────────────────────────────────────
  { text: "Spot on! That's correct! 🎉", style: 'celebration' },
  { text: "Awesome! Three in a row! ⭐", style: 'celebration' },
  { text: "Incredible streak! You are unstoppable! 🔥", style: 'celebration' },
  { text: "Not quite — check the hint, look at the units carefully, and try again! 💡", style: 'thinking' },
  { text: "Here's your first hint! Look at whether the units are in grams or kilograms.", style: 'encouragement' },
  { text: "Here's your final clue! Remember that 1 kilogram equals 1000 grams.", style: 'encouragement' },

  // ─── DISTRICT & BOSS BATTLES ─────────────────────────────────────────────
  { text: "World Complete! Spectacular job on this mass world! 🌟", style: 'celebration' },
  { text: "The Boss Battle begins! Answer correctly to defeat the boss and claim your badge!", style: 'emphasis' },
  { text: "Victory! You defeated the boss and claimed the World Badge! 👑", style: 'celebration' },

  // ─── REFLECT PHASE ───────────────────────────────────────────────────────
  { text: "Welcome to the Reflect Phase! Let's review the key mass concepts and check your scorecard! 📓", style: 'statement' },
  { text: "Outstanding! You have mastered grams, kilograms, and balance scales! You are a true Mass Master! 🏆", style: 'celebration' },
];

const outputDir = './public/assets/audio';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function cleanString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 45).replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  console.log(`\n🎙️ Starting ElevenLabs Audio Generation Pipeline for MassQuest`);
  console.log(`Voice ID: ${VOICE_ID} | Model: ${VOICE_MODEL}`);
  console.log(`Total phrases to process: ${phrases.length}\n`);

  const mapping = {};

  for (let i = 0; i < phrases.length; i++) {
    const { text, style } = phrases[i];
    const cleanText = cleanString(text);
    const fileName = `audio_${cleanText}_${i}.mp3`;
    const destPath = path.join(outputDir, fileName);

    const relativeWebPath = `/assets/audio/${fileName}`;
    mapping[text] = relativeWebPath;

    if (fs.existsSync(destPath)) {
      console.log(`[${i + 1}/${phrases.length}] ⏩ Skipped (already exists): ${fileName}`);
      continue;
    }

    console.log(`[${i + 1}/${phrases.length}] 🔊 Generating: "${text.substring(0, 40)}..." -> ${fileName}`);

    const settings = VOICE_SETTINGS[style] || VOICE_SETTINGS.statement;

    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: VOICE_MODEL,
          voice_settings: settings,
        }),
      });

      if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`HTTP ${response.status}: ${errBody}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(destPath, buffer);
      console.log(`   ✅ Saved: ${destPath}`);
    } catch (e) {
      console.error(`   ❌ Failed to generate phrase "${text}":`, e.message);
    }
  }

  // Write mapping to src/utils/audioMap.js
  const mapContent = `// Auto-generated by generate_audio.js\n// Static asset mapping for offline generated narration phrases in MassQuest\n\nexport const audioMap = ${JSON.stringify(mapping, null, 2)};\n\nexport default audioMap;\n`;
  fs.writeFileSync('./src/utils/audioMap.js', mapContent);
  console.log("\n✨ Audio mapping updated in src/utils/audioMap.js!");
  console.log("🎉 Audio generation completed successfully!\n");
}

main().catch(console.error);
