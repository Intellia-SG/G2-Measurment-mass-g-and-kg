// src/data/storyContent.js
// 4 Educational Story Panels for MassQuest (Grade 2-5 Math: Mass & Weight)
import story1 from '../assets/story/1.jpg';
import story2 from '../assets/story/2.jpg';
import story3 from '../assets/story/3.jpg';
import story4 from '../assets/story/4.jpg';

export const STORY_PANELS = [
  {
    panel: 0,
    title: "Market Day Morning ☀️",
    character: "Sophie & Max",
    characterEmoji: "👧",
    imageEmoji: "⚖️",
    imageSrc: story1,
    imageBg: "linear-gradient(135deg, #1e1b4b, #312e81)",
    text: "It is a sunny morning at the bustling town market! Sophie runs over to Max's fruit stall. Max has an antique balance scale on his counter. When he places a big basket of fresh strawberries on one pan, it clunks DOWN while the other side goes UP! Sophie learns the golden rule: the heavier side always sinks down!",
    highlight: "⚖️ Heavier side sinks DOWN  ·  Lighter side rises UP",
  },
  {
    panel: 1,
    title: "Grams for Light Things 🍬",
    character: "Max the Stallkeeper",
    characterEmoji: "👦",
    imageEmoji: "🍬",
    imageSrc: story2,
    imageBg: "linear-gradient(135deg, #311042, #581c87)",
    text: "A customer asks Max for sweet berries, spices, and cinnamon. Max brings out his precision scale and says: 'These items are small and light, so we measure them in GRAMS (g)!' A single grape is about 5 g, and a wooden pencil is about 20 g. When objects are light, grams are our best friend!",
    highlight: "🍬 Light & small items → Measure in GRAMS (g)",
  },
  {
    panel: 2,
    title: "Kilograms for Heavy Sacks 🏋️",
    character: "Lily the Baker",
    characterEmoji: "👩‍🍳",
    imageEmoji: "🧁",
    imageSrc: story3,
    imageBg: "linear-gradient(135deg, #431407, #7c2d12)",
    text: "Lily the baker arrives with a huge shopping cart to buy flour and sugar for the bakery. She lifts a giant bag onto the heavy-duty scale. 'We don't count thousands of tiny grams for giant bags,' smiles Lily. 'We use KILOGRAMS (kg)!' One kilogram is written as 1 kg.",
    highlight: "📦 Heavy & bulky items → Measure in KILOGRAMS (kg)",
  },
  {
    panel: 3,
    title: "The 1000 Grams Superpower 💡",
    character: "Oliver the Teacher",
    characterEmoji: "👨‍🏫",
    imageEmoji: "🔬",
    imageSrc: story4,
    imageBg: "linear-gradient(135deg, #064e3b, #047857)",
    text: "In the science lab, Oliver shows the class a magic math fact: exactly 1000 tiny 1-gram weights balance one 1-kilogram metal block! That means 1 kg = 1000 g, and 500 g is exactly half a kilogram! Sophie shouts with joy — she is now officially a certified Mass Master!",
    highlight: "💡 1 kg = 1000 g  ·  500 g = ½ kg  ·  250 g = ¼ kg",
  },
];
