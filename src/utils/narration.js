// src/utils/narration.js
// Narration script builder for MassQuest
// Strictly matches on-screen text 1:1 as per audio_generation_pipeline (5).md

export const say       = (text) => ({ text, style: 'statement' });
export const ask       = (text) => ({ text, style: 'question' });
export const cheer     = (text) => ({ text, style: 'celebration' });
export const celebrate = (text) => ({ text, style: 'celebration' });
export const emphasize = (text) => ({ text, style: 'emphasis' });
export const think     = (text) => ({ text, style: 'thinking' });
export const instruct  = (text) => ({ text, style: 'instruction' });
export const encourage = (text) => ({ text, style: 'encouragement' });

export function wonderNarration() {
  return [
    cheer("Welcome to MassQuest! Let's investigate the big mass mystery!"),
    say("Sophie is holding a bag of apples that feels really heavy, while Max has a feather and a 500-gram box."),
    ask("How do we know which is heavier, and how many grams equal one kilogram?"),
    cheer("Let's investigate how balance scales and measuring mass work!"),
  ];
}

export function storyNarration(panel) {
  const scripts = [
    [
      say("It is a sunny morning at the bustling town market! Sophie runs over to Max's fruit stall."),
      say("Max has an antique balance scale on his counter."),
      say("When he places a big basket of fresh strawberries on one pan, it clunks down while the other side goes up!"),
      cheer("Sophie learns the golden rule: the heavier side always sinks down!"),
    ],
    [
      say("A customer asks Max for sweet berries, spices, and cinnamon."),
      say("Max brings out his precision scale and says: These items are small and light, so we measure them in grams!"),
      say("A single grape is about 5 grams, and a wooden pencil is about 20 grams."),
      cheer("When objects are light, grams are our best friend!"),
    ],
    [
      say("Lily the baker arrives with a huge shopping cart to buy flour and sugar for the bakery."),
      say("She lifts a giant bag onto the heavy-duty scale."),
      say("We don't count thousands of tiny grams for giant bags, smiles Lily. We use kilograms!"),
      cheer("One kilogram is written as 1 kg, and is used for heavy things."),
    ],
    [
      say("In the science lab, Oliver shows the class a magic math fact: exactly 1000 tiny 1-gram weights balance one 1-kilogram metal block!"),
      say("That means 1 kilogram equals 1000 grams, and 500 grams is exactly half a kilogram!"),
      cheer("Sophie shouts with joy — she is now officially a certified Mass Master!"),
    ],
  ];

  return scripts[panel] || scripts[0];
}

export function simStationIntro(stationIdx) {
  const intros = [
    [
      instruct("Welcome to Station A — Interactive Pan Balance Lab!"),
      instruct("Place brass weights on the scale pan to balance the grocery items until the beam is completely level!"),
    ],
    [
      instruct("Welcome to Station B — Market Dial and Scale Reader!"),
      instruct("Read the dial graduations carefully and weigh grocery bags to calculate exact recipe totals!"),
    ],
    [
      instruct("Welcome to Station C — The Grams to Kilograms Converter Machine!"),
      instruct("Convert between grams and kilograms, pack 1000-gram bags, and solve conversion puzzles!"),
    ],
    [
      instruct("Welcome to Station D — Chef Lily's Recipe Mass Inspector!"),
      instruct("Inspect recipe ingredients, spot incorrect masses, and balance the baker's workbench to perfection!"),
    ],
  ];

  return intros[stationIdx] || intros[0];
}

export function playQuestionNarration(questionText) {
  return [
    ask(questionText)
  ];
}

export function playCorrectNarration(streak = 1) {
  if (streak >= 5) {
    return [cheer("Incredible streak! You are unstoppable! 🔥")];
  }
  if (streak >= 3) {
    return [cheer("Awesome! Three in a row! ⭐")];
  }
  return [cheer("Spot on! That's correct! 🎉")];
}

export function playWrongNarration() {
  return [
    think("Not quite — check the hint, look at the units carefully, and try again! 💡")
  ];
}

export function playHint1Narration() {
  return [
    encourage("Here's your first hint! Look at whether the units are in grams or kilograms.")
  ];
}

export function playHint2Narration() {
  return [
    encourage("Here's your final clue! Remember that 1 kilogram equals 1000 grams.")
  ];
}

export function districtCompleteNarration() {
  return [
    cheer("World Complete! Spectacular job on this mass world! 🌟")
  ];
}

export function bossStartNarration() {
  return [
    emphasize("The Boss Battle begins! Answer correctly to defeat the boss and claim your badge!")
  ];
}

export function bossWinNarration() {
  return [
    cheer("Victory! You defeated the boss and claimed the World Badge! 👑")
  ];
}

export function reflectNarration() {
  return [
    say("Welcome to the Reflect Phase! Let's review the key mass concepts and check your scorecard! 📓")
  ];
}

export function reflectCompleteNarration() {
  return [
    cheer("Outstanding! You have mastered grams, kilograms, and balance scales! You are a true Mass Master! 🏆")
  ];
}
