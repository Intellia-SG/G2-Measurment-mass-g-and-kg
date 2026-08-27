// src/data/questionBank.js
// 100 Comprehensive Questions for MassQuest across 10 Themed Worlds (Grade 2-5 Math: Mass & Weight)

export const DISTRICTS = [
  { id: 0, name: 'Pan Balance Basics',       icon: '⚖️', boss: { name: 'Scale Titan',      emoji: '⚖️', reward: 'Scale Explorer Badge ⚖️' } },
  { id: 1, name: 'Grams Grocery',            icon: '🍬', boss: { name: 'Gram Goblin',      emoji: '🍇', reward: 'Grams Master Badge 🍬' } },
  { id: 2, name: 'Kilogram Cargo',           icon: '🏋️', boss: { name: 'Heavy Golem',      emoji: '🗿', reward: 'Kilogram Champ Badge 🏋️' } },
  { id: 3, name: 'Reading Scale Dials',      icon: '🧭', boss: { name: 'Dial Dragon',      emoji: '🐉', reward: 'Scale Reader Badge 🧭' } },
  { id: 4, name: 'Kilograms to Grams',       icon: '🔄', boss: { name: 'Multiply Mage',    emoji: '🧙', reward: 'Kg-to-g Wizard Badge 🔄' } },
  { id: 5, name: 'Grams to Mixed Units',     icon: '🔀', boss: { name: 'Splitter Sphinx',  emoji: '🦁', reward: 'Unit Splitter Badge 🔀' } },
  { id: 6, name: 'Adding & Subtracting Mass',icon: '➕', boss: { name: 'Sum Sorcerer',     emoji: '🧮', reward: 'Mass Calculator Badge ➕' } },
  { id: 7, name: 'Comparing & Ordering',     icon: '📊', boss: { name: 'Ranking Knight',   emoji: '🛡️', reward: 'Order Knight Badge 📊' } },
  { id: 8, name: 'Market Word Problems',     icon: '📝', boss: { name: 'Problem Pharaoh',  emoji: '📜', reward: 'Problem Solver Badge 📝' } },
  { id: 9, name: 'Mass Grand Master',        icon: '👑', boss: { name: 'King Weigh-a-Lot', emoji: '👑', reward: 'Grand Master Trophy 🏆' } },
];

const RAW_QUESTIONS = [
  // ── WORLD 0: PAN BALANCE BASICS (Questions 1 - 10) ──────────────────────────
  {
    id: 1, districtId: 0, category: 'BALANCE PRINCIPLES', visual: 'balance',
    questionText: "When two objects are placed on a balance scale, which pan sinks down lower?",
    options: ["The heavier pan", "The lighter pan", "Both pans stay equal", "The smaller object pan"],
    correctAnswer: "The heavier pan",
    explanation: "Gravity pulls down harder on the heavier object, causing its side of the scale to sink down lower.",
    hint1: "Think about what happens on a playground seesaw when a heavier person sits on one end.",
    hint2: "The heavier side always sinks DOWN, while the lighter side goes UP.",
    visualData: { leftItem: "🍎 Apple (150g)", rightItem: "🪶 Feather (2g)", tilt: "left" }
  },
  {
    id: 2, districtId: 0, category: 'BALANCE PRINCIPLES', visual: 'balance',
    questionText: "If the balance scale beam is completely straight and level (horizontal), what does it mean?",
    options: ["Both sides have the exact same mass", "The left side is heavier", "The right side is heavier", "The scale is broken"],
    correctAnswer: "Both sides have the exact same mass",
    explanation: "When a balance scale is level, both pans hold equal mass.",
    hint1: "Neither side is tilting up or down.",
    hint2: "Level scale = equal mass on both sides.",
    visualData: { leftItem: "500g Weight", rightItem: "500g Flour", tilt: "level" }
  },
  {
    id: 3, districtId: 0, category: 'COMPARE MASS', visual: 'balance',
    questionText: "A watermelon is placed on the left pan and a strawberry is on the right pan. What will happen to the scale?",
    options: ["The left pan (watermelon) sinks down", "The right pan (strawberry) sinks down", "The scale remains perfectly level", "Both pans move up"],
    correctAnswer: "The left pan (watermelon) sinks down",
    explanation: "A watermelon has much greater mass than a strawberry, so the watermelon pan goes down.",
    hint1: "Which object is heavier: a big watermelon or a small strawberry?",
    hint2: "The heavier object (watermelon) pushes its pan down.",
    visualData: { leftItem: "🍉 Watermelon (3kg)", rightItem: "🍓 Strawberry (15g)", tilt: "left" }
  },
  {
    id: 4, districtId: 0, category: 'COMPARE MASS', visual: 'balance',
    questionText: "Sophie places a 200 g book on the left pan and two 100 g weights on the right pan. How will the scale look?",
    options: ["Balanced and level", "Tilted to the left", "Tilted to the right", "Spinning around"],
    correctAnswer: "Balanced and level",
    explanation: "Left side = 200 g. Right side = 100 g + 100 g = 200 g. Both sides have equal mass (200 g = 200 g).",
    hint1: "Add up the weights on the right pan: 100 g + 100 g = ?",
    hint2: "200 g on the left equals 200 g on the right, so the scale balances.",
    visualData: { leftItem: "📚 Book (200g)", rightItem: "⚖️ 100g + 100g", tilt: "level" }
  },
  {
    id: 5, districtId: 0, category: 'BALANCE COMPARISON', visual: 'balance',
    questionText: "If Box A tilts DOWN when compared to Box B on a balance scale, which statement is TRUE?",
    options: ["Box A is heavier than Box B", "Box B is heavier than Box A", "Box A and Box B have the same mass", "Box A is empty"],
    correctAnswer: "Box A is heavier than Box B",
    explanation: "The pan that tilts down always carries the heavier item.",
    hint1: "Downward movement indicates greater downward gravitational force (heavier mass).",
    hint2: "Box A went down, so Box A is heavier.",
    visualData: { leftItem: "📦 Box A", rightItem: "📦 Box B", tilt: "left" }
  },
  {
    id: 6, districtId: 0, category: 'BALANCE COMPARISON', visual: 'balance',
    questionText: "Max puts a toy truck on the left pan. The pan rises UP. What does this tell you about the toy truck?",
    options: ["The toy truck is lighter than the object on the right pan", "The toy truck is heavier than the object on the right pan", "The toy truck weighs 100 kg", "The toy truck is made of iron"],
    correctAnswer: "The toy truck is lighter than the object on the right pan",
    explanation: "When a pan rises up, the object in it is lighter than the object on the other side.",
    hint1: "The heavier side goes down, which pushes the lighter side UP.",
    hint2: "Rising up = lighter mass.",
    visualData: { leftItem: "🚗 Toy Truck", rightItem: "🪨 Heavy Stone", tilt: "right" }
  },
  {
    id: 7, districtId: 0, category: 'BALANCE RULES', visual: 'balance',
    questionText: "What is the primary tool used to directly compare whether one object is heavier than another without reading numbers?",
    options: ["Pan balance scale", "Measuring tape", "Thermometer", "Stopwatch"],
    correctAnswer: "Pan balance scale",
    explanation: "A pan balance scale compares two masses directly through balance and tilt.",
    hint1: "Which tool has two pans and a central pivot beam?",
    hint2: "A balance scale allows direct visual comparison of masses.",
    visualData: { leftItem: "🍎", rightItem: "🍊", tilt: "level" }
  },
  {
    id: 8, districtId: 0, category: 'BALANCE ADJUSTMENT', visual: 'balance',
    questionText: "The left pan with a pineapple is currently lower than the right pan with a 500 g weight. To make the scale balance level, what should Max do?",
    options: ["Add more weights to the right pan", "Remove weights from the right pan", "Add more fruit to the left pan", "Do nothing"],
    correctAnswer: "Add more weights to the right pan",
    explanation: "The pineapple is heavier than 500 g. To level the scale, we must add more weights to the right pan.",
    hint1: "The right pan is too light (it is up in the air).",
    hint2: "Adding more weights to the lighter side will bring it down toward balance.",
    visualData: { leftItem: "🍍 Pineapple", rightItem: "⚖️ 500g Weight", tilt: "left" }
  },
  {
    id: 9, districtId: 0, category: 'BALANCE COMPARISON', visual: 'balance',
    questionText: "One large metal ball balances exactly against 4 identical wooden blocks. If each wooden block has a mass of 50 g, what is the mass of the metal ball?",
    options: ["200 g", "100 g", "150 g", "400 g"],
    correctAnswer: "200 g",
    explanation: "4 blocks × 50 g = 200 g. Since the scale is balanced, the metal ball is also 200 g.",
    hint1: "Calculate 4 times 50 g.",
    hint2: "50 + 50 + 50 + 50 = 200 g.",
    visualData: { leftItem: "⚪ Metal Ball", rightItem: "4 × 🪵 50g Block", tilt: "level" }
  },
  {
    id: 10, districtId: 0, category: 'BALANCE COMPARISON', visual: 'balance',
    questionText: "A basket of oranges balances with three 200 g weights. What is the mass of the basket of oranges?",
    options: ["600 g", "500 g", "300 g", "200 g"],
    correctAnswer: "600 g",
    explanation: "3 × 200 g = 600 g.",
    hint1: "Multiply 3 by 200 g.",
    hint2: "200 + 200 + 200 = 600 g.",
    visualData: { leftItem: "🍊 Basket", rightItem: "3 × ⚖️ 200g", tilt: "level" }
  },

  // ── WORLD 1: GRAMS GROCERY (Questions 11 - 20) ──────────────────────────────
  {
    id: 11, districtId: 1, category: 'UNIT SELECTION', visual: 'mass_unit',
    questionText: "Which metric unit of mass is best suited for measuring a single potato chip or a coin?",
    options: ["Grams (g)", "Kilograms (kg)", "Litres (L)", "Metres (m)"],
    correctAnswer: "Grams (g)",
    explanation: "Grams are used for small, lightweight items such as coins, chips, and feathers.",
    hint1: "Is a coin very light or very heavy?",
    hint2: "Light items are measured in grams (g).",
    visualData: { item: "🪙 Coin", unit: "g" }
  },
  {
    id: 12, districtId: 1, category: 'MASS ESTIMATION', visual: 'mass_unit',
    questionText: "What is the most reasonable estimate for the mass of a standard wooden pencil?",
    options: ["20 g", "20 kg", "200 kg", "2 g"],
    correctAnswer: "20 g",
    explanation: "A standard wooden pencil weighs approximately 15 to 25 grams. 20 kg would be as heavy as a suitcase!",
    hint1: "A pencil is light and held comfortably in one hand.",
    hint2: "20 grams (20 g) is the realistic estimate.",
    visualData: { item: "✏️ Pencil", estimate: "20 g" }
  },
  {
    id: 13, districtId: 1, category: 'MASS ESTIMATION', visual: 'mass_unit',
    questionText: "Which of the following objects has a mass of approximately 5 grams?",
    options: ["A single grape", "A laptop computer", "A sack of potatoes", "A bicycle"],
    correctAnswer: "A single grape",
    explanation: "A single juicy grape has a mass of about 5 grams.",
    hint1: "5 grams is very small and lightweight.",
    hint2: "A grape weighs about 5 g.",
    visualData: { item: "🍇 Grape", mass: "5 g" }
  },
  {
    id: 14, districtId: 1, category: 'ADDING GRAMS', visual: 'mass_addition',
    questionText: "Sophie buys 120 g of almonds and 80 g of cashews. What is the total mass of the nuts in grams?",
    options: ["200 g", "180 g", "220 g", "100 g"],
    correctAnswer: "200 g",
    explanation: "120 g + 80 g = 200 g.",
    hint1: "Add 120 and 80 together.",
    hint2: "120 + 80 = 200 grams.",
    visualData: { itemA: "Almonds 120g", itemB: "Cashews 80g", total: "200g" }
  },
  {
    id: 15, districtId: 1, category: 'ADDING GRAMS', visual: 'mass_addition',
    questionText: "A recipe requires 250 g of white flour and 150 g of whole wheat flour. How many grams of flour are needed in total?",
    options: ["400 g", "350 g", "500 g", "300 g"],
    correctAnswer: "400 g",
    explanation: "250 g + 150 g = 400 g.",
    hint1: "250 + 150 = ?",
    hint2: "250 + 100 = 350; 350 + 50 = 400 g.",
    visualData: { itemA: "White Flour 250g", itemB: "Wheat Flour 150g", total: "400g" }
  },
  {
    id: 16, districtId: 1, category: 'SUBTRACTING GRAMS', visual: 'mass_subtraction',
    questionText: "Max had a 300 g jar of honey. He used 75 g for baking bread. How many grams of honey remain in the jar?",
    options: ["225 g", "235 g", "215 g", "175 g"],
    correctAnswer: "225 g",
    explanation: "300 g - 75 g = 225 g.",
    hint1: "Subtract 75 from 300.",
    hint2: "300 - 70 = 230; 230 - 5 = 225 g.",
    visualData: { total: "300g", used: "75g", remaining: "225g" }
  },
  {
    id: 17, districtId: 1, category: 'UNIT SELECTION', visual: 'mass_unit',
    questionText: "Which abbreviation correctly represents the unit 'gram' in mathematics?",
    options: ["g", "gm", "gr", "kg"],
    correctAnswer: "g",
    explanation: "The standard international metric symbol for gram is a lowercase 'g'.",
    hint1: "It is a single lowercase letter.",
    hint2: "We write 50 grams as 50 g.",
    visualData: { symbol: "g" }
  },
  {
    id: 18, districtId: 1, category: 'MASS ESTIMATION', visual: 'mass_unit',
    questionText: "Which object is most likely to weigh about 150 grams?",
    options: ["A medium apple", "An adult elephant", "A car tire", "A grain of sand"],
    correctAnswer: "A medium apple",
    explanation: "A fresh medium apple typically weighs around 150 to 180 grams.",
    hint1: "Think of an everyday fruit that fits neatly in your hand.",
    hint2: "An apple is about 150 g.",
    visualData: { item: "🍎 Apple", mass: "150 g" }
  },
  {
    id: 19, districtId: 1, category: 'COUNTING WEIGHTS', visual: 'scale_weights',
    questionText: "How many 50 g weights are needed to make a total mass of 250 g?",
    options: ["5 weights", "4 weights", "6 weights", "10 weights"],
    correctAnswer: "5 weights",
    explanation: "250 ÷ 50 = 5 weights. (50, 100, 150, 200, 250).",
    hint1: "Count by 50s up to 250.",
    hint2: "50 × 5 = 250.",
    visualData: { weightValue: 50, count: 5, target: 250 }
  },
  {
    id: 20, districtId: 1, category: 'ADDING GRAMS', visual: 'mass_addition',
    questionText: "Sophie weighs 3 chocolate bars. Each bar is 45 g. What is the total mass of the 3 chocolate bars?",
    options: ["135 g", "125 g", "145 g", "150 g"],
    correctAnswer: "135 g",
    explanation: "3 × 45 g = 135 g. (45 + 45 + 45 = 135 g).",
    hint1: "45 + 45 = 90. Now add 45 more.",
    hint2: "90 + 45 = 135 g.",
    visualData: { item: "🍫 3 × 45g", total: "135 g" }
  },

  // ── WORLD 2: KILOGRAM CARGO (Questions 21 - 30) ─────────────────────────────
  {
    id: 21, districtId: 2, category: 'UNIT SELECTION', visual: 'mass_unit',
    questionText: "Which metric unit of mass is best for measuring a large sack of rice or a person's body weight?",
    options: ["Kilograms (kg)", "Grams (g)", "Centimetres (cm)", "Millilitres (mL)"],
    correctAnswer: "Kilograms (kg)",
    explanation: "Kilograms (kg) are used to measure heavy, bulky items such as bags of rice, people, and furniture.",
    hint1: "Is a sack of rice light like a paperclip or heavy?",
    hint2: "Heavy objects are measured in kilograms (kg).",
    visualData: { item: "🍚 Sack of Rice", unit: "kg" }
  },
  {
    id: 22, districtId: 2, category: 'MASS ESTIMATION', visual: 'mass_unit',
    questionText: "What is the most reasonable estimate for the mass of an 8-year-old child?",
    options: ["27 kg", "27 g", "270 kg", "2 kg"],
    correctAnswer: "27 kg",
    explanation: "An average 8-year-old child weighs around 25 to 30 kilograms (kg).",
    hint1: "27 g is lighter than a chocolate bar. 270 kg is as heavy as a motorcycle.",
    hint2: "27 kg is the correct, realistic weight.",
    visualData: { item: "👧 Child", estimate: "27 kg" }
  },
  {
    id: 23, districtId: 2, category: 'MASS ESTIMATION', visual: 'mass_unit',
    questionText: "Which of the following objects has a mass of approximately 1 kilogram (1 kg)?",
    options: ["A 1-litre carton of milk", "A postage stamp", "A family car", "A single strawberry"],
    correctAnswer: "A 1-litre carton of milk",
    explanation: "1 litre of water or milk weighs exactly 1 kilogram.",
    hint1: "A standard full carton of milk or a bag of sugar weighs about 1 kg.",
    hint2: "1-litre milk carton = 1 kg.",
    visualData: { item: "🥛 1L Milk Carton", mass: "1 kg" }
  },
  {
    id: 24, districtId: 2, category: 'ADDING KG', visual: 'mass_addition',
    questionText: "Lily buys 14 kg of flour and 8 kg of sugar. What is the total mass of the baking ingredients in kilograms?",
    options: ["22 kg", "20 kg", "24 kg", "26 kg"],
    correctAnswer: "22 kg",
    explanation: "14 kg + 8 kg = 22 kg.",
    hint1: "Add 14 and 8.",
    hint2: "14 + 8 = 22 kg.",
    visualData: { itemA: "14 kg Flour", itemB: "8 kg Sugar", total: "22 kg" }
  },
  {
    id: 25, districtId: 2, category: 'SUBTRACTING KG', visual: 'mass_subtraction',
    questionText: "A delivery van was carrying 50 kg of parcel boxes. The driver dropped off 18 kg at the first stop. How many kg are still in the van?",
    options: ["32 kg", "38 kg", "28 kg", "34 kg"],
    correctAnswer: "32 kg",
    explanation: "50 kg - 18 kg = 32 kg.",
    hint1: "50 - 10 = 40; 40 - 8 = ?",
    hint2: "50 - 18 = 32 kg.",
    visualData: { total: "50 kg", removed: "18 kg", remaining: "32 kg" }
  },
  {
    id: 26, districtId: 2, category: 'UNIT SELECTION', visual: 'mass_unit',
    questionText: "What is the standard abbreviation for 'kilogram'?",
    options: ["kg", "kilo", "k", "kgm"],
    correctAnswer: "kg",
    explanation: "The standard international metric symbol for kilogram is 'kg'.",
    hint1: "Two lowercase letters: 'k' for kilo and 'g' for gram.",
    hint2: "Symbol is 'kg'.",
    visualData: { symbol: "kg" }
  },
  {
    id: 27, districtId: 2, category: 'COMPARE KG', visual: 'mass_unit',
    questionText: "Dog A weighs 12 kg and Dog B weighs 19 kg. How much heavier is Dog B than Dog A?",
    options: ["7 kg", "8 kg", "6 kg", "9 kg"],
    correctAnswer: "7 kg",
    explanation: "19 kg - 12 kg = 7 kg.",
    hint1: "Find the difference: 19 - 12.",
    hint2: "19 - 12 = 7 kg.",
    visualData: { itemA: "Dog A (12kg)", itemB: "Dog B (19kg)", diff: "7kg" }
  },
  {
    id: 28, districtId: 2, category: 'MASS ESTIMATION', visual: 'mass_unit',
    questionText: "Which item would be measured in grams instead of kilograms?",
    options: ["A plastic spoon", "A washing machine", "A golden retriever dog", "A sack of cement"],
    correctAnswer: "A plastic spoon",
    explanation: "A plastic spoon is very light (around 5 g), so it is measured in grams.",
    hint1: "Which object is lightweight and held with two fingers?",
    hint2: "A plastic spoon weighs only a few grams.",
    visualData: { item: "🥄 Plastic Spoon", unit: "g" }
  },
  {
    id: 29, districtId: 2, category: 'MULTIPLYING KG', visual: 'mass_addition',
    questionText: "Max stacks 6 identical boxes onto a pallet. If each box weighs 4 kg, what is the total mass of the stack?",
    options: ["24 kg", "20 kg", "28 kg", "18 kg"],
    correctAnswer: "24 kg",
    explanation: "6 × 4 kg = 24 kg.",
    hint1: "Multiply 6 by 4.",
    hint2: "6 × 4 = 24 kg.",
    visualData: { count: 6, weightPerBox: "4 kg", total: "24 kg" }
  },
  {
    id: 30, districtId: 2, category: 'ADDING KG', visual: 'mass_addition',
    questionText: "Oliver's school backpack weighs 3 kg, his sports bag weighs 2 kg, and his science project weighs 4 kg. What is the total mass he carries?",
    options: ["9 kg", "8 kg", "10 kg", "7 kg"],
    correctAnswer: "9 kg",
    explanation: "3 kg + 2 kg + 4 kg = 9 kg.",
    hint1: "Add the three numbers: 3 + 2 + 4.",
    hint2: "3 + 2 = 5; 5 + 4 = 9 kg.",
    visualData: { items: "3kg + 2kg + 4kg", total: "9 kg" }
  },

  // ── WORLD 3: READING SCALE DIALS (Questions 31 - 40) ────────────────────────
  {
    id: 31, districtId: 3, category: 'DIAL READING', visual: 'dial_scale',
    questionText: "On a 1-kg circular dial scale with marks every 100 g, the needle points to the 4th tick mark past 0. What is the mass?",
    options: ["400 g", "40 g", "4 kg", "450 g"],
    correctAnswer: "400 g",
    explanation: "Each tick mark represents 100 g. 4 × 100 g = 400 g.",
    hint1: "Count by 100s: 100, 200, 300, 400.",
    hint2: "4 ticks of 100 g = 400 g.",
    visualData: { dialMax: 1000, value: 400, unit: "g" }
  },
  {
    id: 32, districtId: 3, category: 'DIAL READING', visual: 'dial_scale',
    questionText: "On a kitchen scale dial, the needle is pointing exactly halfway between 0 and 1 kg. What mass does this show?",
    options: ["500 g", "250 g", "750 g", "100 g"],
    correctAnswer: "500 g",
    explanation: "Half of 1 kg (1000 g) is 500 g.",
    hint1: "What is half of 1000 grams?",
    hint2: "1000 ÷ 2 = 500 g.",
    visualData: { dialMax: 1000, value: 500, unit: "g" }
  },
  {
    id: 33, districtId: 3, category: 'DIAL READING', visual: 'dial_scale',
    questionText: "On a 5-kg market dial scale, the needle points directly at number 3. What is the mass of the items on the scale?",
    options: ["3 kg", "300 g", "30 kg", "350 g"],
    correctAnswer: "3 kg",
    explanation: "The scale is calibrated in kg, so pointing at 3 indicates 3 kg.",
    hint1: "The major numbers represent whole kilograms.",
    hint2: "Needle at 3 = 3 kg.",
    visualData: { dialMax: 5, value: 3, unit: "kg" }
  },
  {
    id: 34, districtId: 3, category: 'DIAL READING', visual: 'dial_scale',
    questionText: "On a 1-kg dial scale with tick marks every 250 g, the needle is pointing to the mark between 500 g and 1000 g. What mass is shown?",
    options: ["750 g", "600 g", "700 g", "800 g"],
    correctAnswer: "750 g",
    explanation: "500 g + 250 g = 750 g (which is three-quarters of a kilogram).",
    hint1: "Count by 250s: 250, 500, 750, 1000.",
    hint2: "The third quarter mark is 750 g.",
    visualData: { dialMax: 1000, value: 750, unit: "g" }
  },
  {
    id: 35, districtId: 3, category: 'DIGITAL SCALE', visual: 'digital_scale',
    questionText: "A digital scale display reads '1.50 kg'. What is this mass in kilograms and grams?",
    options: ["1 kg 500 g", "1 kg 50 g", "1 kg 5 g", "15 kg"],
    correctAnswer: "1 kg 500 g",
    explanation: "0.50 kg is half a kilogram = 500 g. So 1.50 kg = 1 kg 500 g.",
    hint1: "0.5 kg = 500 g.",
    hint2: "1 kg + 500 g = 1 kg 500 g.",
    visualData: { display: "1.50 kg", converted: "1 kg 500 g" }
  },
  {
    id: 36, districtId: 3, category: 'DIAL READING', visual: 'dial_scale',
    questionText: "Sophie places a bag of apples on a spring scale. The needle moves from 0 to 800 g. Then Max adds an orange and the needle moves to 950 g. What was the mass of the orange?",
    options: ["150 g", "100 g", "200 g", "250 g"],
    correctAnswer: "150 g",
    explanation: "950 g - 800 g = 150 g.",
    hint1: "Subtract the starting mass (800 g) from the new mass (950 g).",
    hint2: "950 - 800 = 150 g.",
    visualData: { start: "800g", end: "950g", diff: "150g" }
  },
  {
    id: 37, districtId: 3, category: 'SCALE INTERVALS', visual: 'dial_scale',
    questionText: "If there are 10 equal small intervals between 0 and 1 kg on a dial scale, how many grams does EACH small interval represent?",
    options: ["100 g", "50 g", "10 g", "200 g"],
    correctAnswer: "100 g",
    explanation: "1 kg = 1000 g. 1000 g ÷ 10 intervals = 100 g per interval.",
    hint1: "Divide 1000 grams by 10.",
    hint2: "1000 ÷ 10 = 100 g.",
    visualData: { totalGrams: 1000, divisions: 10, valuePerDiv: 100 }
  },
  {
    id: 38, districtId: 3, category: 'DIAL READING', visual: 'dial_scale',
    questionText: "On a dial scale, the needle points 2 small tick marks past the 1 kg line. If each small mark is 100 g, what is the total mass?",
    options: ["1 kg 200 g", "1 kg 20 g", "12 kg", "200 g"],
    correctAnswer: "1 kg 200 g",
    explanation: "1 kg + (2 × 100 g) = 1 kg 200 g (or 1200 g).",
    hint1: "Start at 1 kg, then add 2 ticks of 100 g (200 g).",
    hint2: "1 kg + 200 g = 1 kg 200 g.",
    visualData: { baseKg: 1, extraTicks: 2, tickVal: 100, result: "1 kg 200 g" }
  },
  {
    id: 39, districtId: 3, category: 'DIGITAL SCALE', visual: 'digital_scale',
    questionText: "A digital kitchen scale reads '0 g' before an empty bowl is placed on it. With the bowl, it reads '180 g'. Then flour is poured in until it reads '680 g'. What is the mass of the flour alone?",
    options: ["500 g", "400 g", "600 g", "860 g"],
    correctAnswer: "500 g",
    explanation: "680 g - 180 g = 500 g.",
    hint1: "Subtract the mass of the empty bowl from the total mass.",
    hint2: "680 - 180 = 500 g.",
    visualData: { bowl: "180 g", total: "680 g", ingredient: "500 g" }
  },
  {
    id: 40, districtId: 3, category: 'DIAL READING', visual: 'dial_scale',
    questionText: "On a 2-kg dial scale, the needle completes one-quarter (1/4) of a full 1-kg turn. What mass does it show?",
    options: ["250 g", "500 g", "100 g", "750 g"],
    correctAnswer: "250 g",
    explanation: "1/4 of 1000 g = 250 g.",
    hint1: "1000 ÷ 4 = ?",
    hint2: "One quarter of 1000 g is 250 g.",
    visualData: { dialMax: 1000, value: 250, unit: "g" }
  },

  // ── WORLD 4: KILOGRAMS TO GRAMS (Questions 41 - 50) ─────────────────────────
  {
    id: 41, districtId: 4, category: 'CONVERT KG TO G', visual: 'converter',
    questionText: "How many grams (g) are in exactly 1 kilogram (kg)?",
    options: ["1000 g", "100 g", "10 g", "10000 g"],
    correctAnswer: "1000 g",
    explanation: "The prefix 'kilo-' means one thousand. 1 kg = 1000 g.",
    hint1: "Kilo means one thousand.",
    hint2: "1 kg = 1000 g.",
    visualData: { kg: 1, g: 1000 }
  },
  {
    id: 42, districtId: 4, category: 'CONVERT KG TO G', visual: 'converter',
    questionText: "How many grams are in 3 kilograms?",
    options: ["3000 g", "300 g", "30000 g", "30 g"],
    correctAnswer: "3000 g",
    explanation: "3 × 1000 g = 3000 g.",
    hint1: "Multiply 3 by 1000.",
    hint2: "3 × 1000 = 3000 g.",
    visualData: { kg: 3, g: 3000 }
  },
  {
    id: 43, districtId: 4, category: 'CONVERT KG TO G', visual: 'converter',
    questionText: "Convert 7 kg into grams.",
    options: ["7000 g", "700 g", "70 g", "70000 g"],
    correctAnswer: "7000 g",
    explanation: "7 × 1000 g = 7000 g.",
    hint1: "Multiply the number of kilograms by 1000.",
    hint2: "7 × 1000 = 7000 g.",
    visualData: { kg: 7, g: 7000 }
  },
  {
    id: 44, districtId: 4, category: 'CONVERT FRACTION KG', visual: 'converter',
    questionText: "How many grams are in half a kilogram (1/2 kg)?",
    options: ["500 g", "250 g", "100 g", "750 g"],
    correctAnswer: "500 g",
    explanation: "Half of 1000 g is 500 g (1000 ÷ 2 = 500 g).",
    hint1: "What is 1000 divided by 2?",
    hint2: "1/2 kg = 500 g.",
    visualData: { kg: "1/2", g: 500 }
  },
  {
    id: 45, districtId: 4, category: 'CONVERT FRACTION KG', visual: 'converter',
    questionText: "How many grams are in one-quarter of a kilogram (1/4 kg)?",
    options: ["250 g", "500 g", "200 g", "150 g"],
    correctAnswer: "250 g",
    explanation: "1000 g ÷ 4 = 250 g.",
    hint1: "Divide 1000 by 4.",
    hint2: "1/4 kg = 250 g.",
    visualData: { kg: "1/4", g: 250 }
  },
  {
    id: 46, districtId: 4, category: 'CONVERT FRACTION KG', visual: 'converter',
    questionText: "How many grams are in three-quarters of a kilogram (3/4 kg)?",
    options: ["750 g", "650 g", "800 g", "700 g"],
    correctAnswer: "750 g",
    explanation: "3 × 250 g = 750 g (or 1000 g - 250 g = 750 g).",
    hint1: "500 g (half) + 250 g (quarter) = ?",
    hint2: "3/4 kg = 750 g.",
    visualData: { kg: "3/4", g: 750 }
  },
  {
    id: 47, districtId: 4, category: 'CONVERT KG TO G', visual: 'converter',
    questionText: "Lily has a 5 kg bag of sugar. How many grams of sugar is this?",
    options: ["5000 g", "500 g", "50 g", "50000 g"],
    correctAnswer: "5000 g",
    explanation: "5 × 1000 g = 5000 g.",
    hint1: "Multiply 5 by 1000.",
    hint2: "5 kg = 5000 g.",
    visualData: { kg: 5, g: 5000 }
  },
  {
    id: 48, districtId: 4, category: 'CONVERT KG TO G', visual: 'converter',
    questionText: "A carton weighs 10 kg. What is its mass in grams?",
    options: ["10000 g", "1000 g", "100 g", "100000 g"],
    correctAnswer: "10000 g",
    explanation: "10 × 1000 g = 10000 g.",
    hint1: "10 times 1000.",
    hint2: "10 kg = 10000 g.",
    visualData: { kg: 10, g: 10000 }
  },
  {
    id: 49, districtId: 4, category: 'CONVERT KG TO G', visual: 'converter',
    questionText: "To convert any measurement from kilograms into grams, what math operation should you perform?",
    options: ["Multiply by 1000", "Divide by 1000", "Add 100", "Subtract 1000"],
    correctAnswer: "Multiply by 1000",
    explanation: "Since 1 kg = 1000 g, you multiply the number of kilograms by 1000.",
    hint1: "Grams are smaller units, so the number gets bigger.",
    hint2: "kg ➔ g: multiply by 1000.",
    visualData: { rule: "kg × 1000 = g" }
  },
  {
    id: 50, districtId: 4, category: 'CONVERT KG TO G', visual: 'converter',
    questionText: "How many grams are in 2 and a half kilograms (2½ kg)?",
    options: ["2500 g", "2050 g", "250 g", "2005 g"],
    correctAnswer: "2500 g",
    explanation: "2 kg = 2000 g, and 1/2 kg = 500 g. 2000 + 500 = 2500 g.",
    hint1: "2 kg is 2000 g, and half a kg is 500 g.",
    hint2: "2000 + 500 = 2500 g.",
    visualData: { kg: "2.5", g: 2500 }
  },

  // ── WORLD 5: GRAMS TO MIXED UNITS (Questions 51 - 60) ───────────────────────
  {
    id: 51, districtId: 5, category: 'CONVERT G TO KG', visual: 'converter',
    questionText: "How many kilograms is 4000 grams?",
    options: ["4 kg", "40 kg", "400 kg", "0.4 kg"],
    correctAnswer: "4 kg",
    explanation: "4000 ÷ 1000 = 4 kg.",
    hint1: "Divide 4000 by 1000.",
    hint2: "4000 g = 4 kg.",
    visualData: { g: 4000, kg: 4 }
  },
  {
    id: 52, districtId: 5, category: 'MIXED UNITS', visual: 'converter',
    questionText: "Convert 1250 g into kilograms and grams.",
    options: ["1 kg 250 g", "12 kg 50 g", "1 kg 25 g", "10 kg 250 g"],
    correctAnswer: "1 kg 250 g",
    explanation: "1250 g = 1000 g + 250 g = 1 kg 250 g.",
    hint1: "Split into thousands (kg) and the remaining hundreds (g).",
    hint2: "1000 g = 1 kg, leaving 250 g.",
    visualData: { g: 1250, mixed: "1 kg 250 g" }
  },
  {
    id: 53, districtId: 5, category: 'MIXED UNITS', visual: 'converter',
    questionText: "A box of melons weighs 3400 g. What is this in kg and g?",
    options: ["3 kg 400 g", "34 kg 0 g", "3 kg 40 g", "30 kg 400 g"],
    correctAnswer: "3 kg 400 g",
    explanation: "3400 g = 3000 g + 400 g = 3 kg 400 g.",
    hint1: "3000 g is 3 kg.",
    hint2: "3000 g + 400 g = 3 kg 400 g.",
    visualData: { g: 3400, mixed: "3 kg 400 g" }
  },
  {
    id: 54, districtId: 5, category: 'MIXED UNITS', visual: 'converter',
    questionText: "Express 2 kg 50 g entirely in grams.",
    options: ["2050 g", "2500 g", "2005 g", "250 g"],
    correctAnswer: "2050 g",
    explanation: "2 kg = 2000 g. 2000 g + 50 g = 2050 g. (Note: NOT 2500 g, which is 2 kg 500 g).",
    hint1: "2 kg = 2000 g. Be careful with the zero in 50 g!",
    hint2: "2000 + 50 = 2050 g.",
    visualData: { mixed: "2 kg 50 g", g: 2050 }
  },
  {
    id: 55, districtId: 5, category: 'MIXED UNITS', visual: 'converter',
    questionText: "How is 5 kg 800 g written in grams?",
    options: ["5800 g", "5080 g", "5008 g", "580 g"],
    correctAnswer: "5800 g",
    explanation: "5 kg = 5000 g. 5000 g + 800 g = 5800 g.",
    hint1: "5 kg = 5000 g.",
    hint2: "5000 + 800 = 5800 g.",
    visualData: { mixed: "5 kg 800 g", g: 5800 }
  },
  {
    id: 56, districtId: 5, category: 'MIXED UNITS', visual: 'converter',
    questionText: "Convert 6005 g into kilograms and grams.",
    options: ["6 kg 5 g", "6 kg 50 g", "6 kg 500 g", "60 kg 5 g"],
    correctAnswer: "6 kg 5 g",
    explanation: "6005 g = 6000 g + 5 g = 6 kg 5 g.",
    hint1: "6000 g is 6 kg. What is the remaining number?",
    hint2: "6 kg and 5 g.",
    visualData: { g: 6005, mixed: "6 kg 5 g" }
  },
  {
    id: 57, districtId: 5, category: 'CONVERT G TO KG', visual: 'converter',
    questionText: "Convert 9000 g into kilograms.",
    options: ["9 kg", "90 kg", "900 kg", "0.9 kg"],
    correctAnswer: "9 kg",
    explanation: "9000 ÷ 1000 = 9 kg.",
    hint1: "Divide by 1000.",
    hint2: "9000 g = 9 kg.",
    visualData: { g: 9000, kg: 9 }
  },
  {
    id: 58, districtId: 5, category: 'MIXED UNITS', visual: 'converter',
    questionText: "Which of the following is equal to 4 kg 750 g?",
    options: ["4750 g", "4075 g", "475 g", "4705 g"],
    correctAnswer: "4750 g",
    explanation: "4 kg = 4000 g. 4000 g + 750 g = 4750 g.",
    hint1: "4000 + 750 = ?",
    hint2: "4750 g.",
    visualData: { mixed: "4 kg 750 g", g: 4750 }
  },
  {
    id: 59, districtId: 5, category: 'CONVERT G TO KG', visual: 'converter',
    questionText: "To convert a mass from grams into kilograms, which operation should you use?",
    options: ["Divide by 1000", "Multiply by 1000", "Subtract 100", "Add 1000"],
    correctAnswer: "Divide by 1000",
    explanation: "g ➔ kg: divide by 1000 because 1000 g make 1 kg.",
    hint1: "Kilograms are larger units, so the number gets smaller.",
    hint2: "g ÷ 1000 = kg.",
    visualData: { rule: "g ÷ 1000 = kg" }
  },
  {
    id: 60, districtId: 5, category: 'MIXED UNITS', visual: 'converter',
    questionText: "A watermelon weighs 2850 g. How much does it weigh in kilograms and grams?",
    options: ["2 kg 850 g", "28 kg 50 g", "2 kg 85 g", "20 kg 850 g"],
    correctAnswer: "2 kg 850 g",
    explanation: "2850 g = 2000 g + 850 g = 2 kg 850 g.",
    hint1: "Take out 2000 g for 2 kg.",
    hint2: "2 kg 850 g.",
    visualData: { g: 2850, mixed: "2 kg 850 g" }
  },

  // ── WORLD 6: ADDING & SUBTRACTING MASS (Questions 61 - 70) ──────────────────
  {
    id: 61, districtId: 6, category: 'ADDING MIXED MASS', visual: 'mass_addition',
    questionText: "Add: 1 kg 300 g + 2 kg 400 g = ?",
    options: ["3 kg 700 g", "3 kg 100 g", "4 kg 700 g", "2 kg 700 g"],
    correctAnswer: "3 kg 700 g",
    explanation: "Add kg together (1 + 2 = 3 kg) and g together (300 + 400 = 700 g) ➔ 3 kg 700 g.",
    hint1: "Add kilograms: 1 + 2 = 3 kg. Add grams: 300 + 400 = 700 g.",
    hint2: "Combine them: 3 kg 700 g.",
    visualData: { a: "1 kg 300 g", b: "2 kg 400 g", sum: "3 kg 700 g" }
  },
  {
    id: 62, districtId: 6, category: 'ADDING MIXED MASS', visual: 'mass_addition',
    questionText: "Add: 2 kg 600 g + 1 kg 500 g = ?",
    options: ["4 kg 100 g", "3 kg 1100 g", "3 kg 100 g", "4 kg 200 g"],
    correctAnswer: "4 kg 100 g",
    explanation: "Grams: 600 + 500 = 1100 g = 1 kg 100 g. Kilograms: 2 + 1 + 1 (regrouped) = 4 kg. Result = 4 kg 100 g.",
    hint1: "600 g + 500 g = 1100 g. Remember that 1000 g regroup into 1 kg!",
    hint2: "2 kg + 1 kg + 1 kg = 4 kg, with 100 g left over.",
    visualData: { a: "2 kg 600 g", b: "1 kg 500 g", sum: "4 kg 100 g" }
  },
  {
    id: 63, districtId: 6, category: 'SUBTRACTING MIXED MASS', visual: 'mass_subtraction',
    questionText: "Subtract: 4 kg 800 g − 1 kg 300 g = ?",
    options: ["3 kg 500 g", "3 kg 300 g", "5 kg 500 g", "2 kg 500 g"],
    correctAnswer: "3 kg 500 g",
    explanation: "Kilograms: 4 - 1 = 3 kg. Grams: 800 - 300 = 500 g. Result: 3 kg 500 g.",
    hint1: "4 kg - 1 kg = 3 kg. 800 g - 300 g = 500 g.",
    hint2: "3 kg 500 g.",
    visualData: { a: "4 kg 800 g", b: "1 kg 300 g", diff: "3 kg 500 g" }
  },
  {
    id: 64, districtId: 6, category: 'SUBTRACTING FROM 1KG', visual: 'mass_subtraction',
    questionText: "How many grams must you add to 650 g to make exactly 1 kg (1000 g)?",
    options: ["350 g", "450 g", "250 g", "150 g"],
    correctAnswer: "350 g",
    explanation: "1000 g - 650 g = 350 g.",
    hint1: "1000 - 650 = ?",
    hint2: "650 + 50 = 700; 700 + 300 = 1000. 300 + 50 = 350 g.",
    visualData: { current: "650 g", target: "1000 g", needed: "350 g" }
  },
  {
    id: 65, districtId: 6, category: 'SUBTRACTING MIXED MASS', visual: 'mass_subtraction',
    questionText: "Subtract: 3 kg − 750 g = ?",
    options: ["2 kg 250 g", "2 kg 750 g", "1 kg 250 g", "2 kg 500 g"],
    correctAnswer: "2 kg 250 g",
    explanation: "Borrow 1 kg (1000 g) from 3 kg ➔ 2 kg + (1000 g - 750 g) = 2 kg 250 g.",
    hint1: "1 kg minus 750 g is 250 g. You still have 2 kg left.",
    hint2: "2 kg 250 g.",
    visualData: { a: "3 kg", b: "750 g", diff: "2 kg 250 g" }
  },
  {
    id: 66, districtId: 6, category: 'ADDING MIXED MASS', visual: 'mass_addition',
    questionText: "Sophie puts 450 g of grapes and 550 g of mangoes into a shopping bag. What is the total mass in kilograms?",
    options: ["1 kg", "2 kg", "1.5 kg", "0.5 kg"],
    correctAnswer: "1 kg",
    explanation: "450 g + 550 g = 1000 g = 1 kg.",
    hint1: "450 + 550 = 1000 g.",
    hint2: "1000 g = 1 kg.",
    visualData: { a: "450 g", b: "550 g", sum: "1 kg" }
  },
  {
    id: 67, districtId: 6, category: 'SUBTRACTING MIXED MASS', visual: 'mass_subtraction',
    questionText: "A sack of potatoes weighed 5 kg 200 g. After cooking, 1 kg 800 g of potatoes were used. How many kilograms and grams remain?",
    options: ["3 kg 400 g", "3 kg 600 g", "4 kg 400 g", "2 kg 400 g"],
    correctAnswer: "3 kg 400 g",
    explanation: "5200 g - 1800 g = 3400 g = 3 kg 400 g.",
    hint1: "Convert to grams: 5200 g - 1800 g = 3400 g.",
    hint2: "3400 g = 3 kg 400 g.",
    visualData: { total: "5 kg 200 g", used: "1 kg 800 g", remaining: "3 kg 400 g" }
  },
  {
    id: 68, districtId: 6, category: 'ADDING MIXED MASS', visual: 'mass_addition',
    questionText: "Calculate: 3 kg 250 g + 1 kg 750 g = ?",
    options: ["5 kg", "4 kg 900 g", "4 kg 500 g", "5 kg 100 g"],
    correctAnswer: "5 kg",
    explanation: "250 g + 750 g = 1000 g = 1 kg. 3 kg + 1 kg + 1 kg = 5 kg.",
    hint1: "250 g + 750 g makes a whole new kilogram (1000 g)!",
    hint2: "3 + 1 + 1 = 5 kg.",
    visualData: { a: "3 kg 250 g", b: "1 kg 750 g", sum: "5 kg" }
  },
  {
    id: 69, districtId: 6, category: 'SUBTRACTING FROM TARGET', visual: 'mass_subtraction',
    questionText: "How much mass must be added to 3 kg 400 g to reach 5 kg?",
    options: ["1 kg 600 g", "1 kg 400 g", "2 kg 600 g", "1 kg 500 g"],
    correctAnswer: "1 kg 600 g",
    explanation: "5000 g - 3400 g = 1600 g = 1 kg 600 g.",
    hint1: "3400 g + 600 g = 4000 g (4 kg). Then add 1 kg more to reach 5 kg.",
    hint2: "1 kg 600 g.",
    visualData: { start: "3 kg 400 g", target: "5 kg", needed: "1 kg 600 g" }
  },
  {
    id: 70, districtId: 6, category: 'ADDING MIXED MASS', visual: 'mass_addition',
    questionText: "Max weighed 3 parcel boxes: 800 g, 600 g, and 600 g. What is their combined total mass?",
    options: ["2 kg", "2 kg 200 g", "1 kg 800 g", "2 kg 400 g"],
    correctAnswer: "2 kg",
    explanation: "800 + 600 + 600 = 2000 g = 2 kg.",
    hint1: "800 + 600 = 1400; 1400 + 600 = 2000 g.",
    hint2: "2000 g = 2 kg.",
    visualData: { items: "800g + 600g + 600g", total: "2 kg" }
  },

  // ── WORLD 7: COMPARING & ORDERING (Questions 71 - 80) ────────────────────────
  {
    id: 71, districtId: 7, category: 'COMPARE UNITS', visual: 'comparison',
    questionText: "Which is heavier: 2 kg or 1850 g?",
    options: ["2 kg", "1850 g", "They are equal", "Cannot be compared"],
    correctAnswer: "2 kg",
    explanation: "2 kg = 2000 g. Since 2000 g > 1850 g, 2 kg is heavier.",
    hint1: "Convert 2 kg into grams: 2 kg = 2000 g.",
    hint2: "2000 g is greater than 1850 g.",
    visualData: { itemA: "2 kg (2000g)", itemB: "1850 g", heavier: "2 kg" }
  },
  {
    id: 72, districtId: 7, category: 'COMPARE UNITS', visual: 'comparison',
    questionText: "Which is lighter: 500 g or 1 kg?",
    options: ["500 g", "1 kg", "Both are equal", "Neither"],
    correctAnswer: "500 g",
    explanation: "1 kg = 1000 g. 500 g is half of 1 kg, so 500 g is lighter.",
    hint1: "1 kg = 1000 g.",
    hint2: "500 g is less than 1000 g.",
    visualData: { itemA: "500 g", itemB: "1 kg (1000g)", lighter: "500 g" }
  },
  {
    id: 73, districtId: 7, category: 'COMPARE UNITS', visual: 'comparison',
    questionText: "Which of the following comparisons is TRUE?",
    options: ["1 kg 50 g < 1500 g", "2 kg = 200 g", "750 g > 1 kg", "3000 g < 2 kg"],
    correctAnswer: "1 kg 50 g < 1500 g",
    explanation: "1 kg 50 g = 1050 g, which is less than 1500 g (1 kg 500 g).",
    hint1: "Convert 1 kg 50 g to grams = 1050 g.",
    hint2: "1050 g is smaller than 1500 g.",
    visualData: { statement: "1050 g < 1500 g" }
  },
  {
    id: 74, districtId: 7, category: 'ORDER MASS', visual: 'comparison',
    questionText: "Order these masses from LIGHTEST to HEAVIEST: 1200 g, 900 g, 2 kg, 1 kg 500 g.",
    options: [
      "900 g, 1200 g, 1 kg 500 g, 2 kg",
      "2 kg, 1 kg 500 g, 1200 g, 900 g",
      "900 g, 2 kg, 1200 g, 1 kg 500 g",
      "1200 g, 900 g, 1 kg 500 g, 2 kg"
    ],
    correctAnswer: "900 g, 1200 g, 1 kg 500 g, 2 kg",
    explanation: "In grams: 900 g < 1200 g < 1500 g < 2000 g.",
    hint1: "Convert all to grams first: 900 g, 1200 g, 1500 g, 2000 g.",
    hint2: "Start with the smallest number: 900 g.",
    visualData: { ordered: "900g, 1200g, 1500g, 2000g" }
  },
  {
    id: 75, districtId: 7, category: 'COMPARE FRACTION', visual: 'comparison',
    questionText: "Which is heavier: 3/4 kg or 700 g?",
    options: ["3/4 kg", "700 g", "They are exactly equal", "Cannot be determined"],
    correctAnswer: "3/4 kg",
    explanation: "3/4 kg = 750 g. Since 750 g > 700 g, 3/4 kg is heavier.",
    hint1: "3/4 kg = 750 g.",
    hint2: "750 g > 700 g.",
    visualData: { itemA: "3/4 kg (750g)", itemB: "700 g", heavier: "3/4 kg" }
  },
  {
    id: 76, districtId: 7, category: 'FIND HEAVIEST', visual: 'comparison',
    questionText: "Which of the following represents the HEAVIEST mass?",
    options: ["3 kg 200 g", "3100 g", "2 kg 900 g", "3050 g"],
    correctAnswer: "3 kg 200 g",
    explanation: "In grams: 3 kg 200 g = 3200 g, which is greater than 3100 g, 2900 g, and 3050 g.",
    hint1: "3 kg 200 g = 3200 g.",
    hint2: "3200 g is the largest number.",
    visualData: { items: ["3200g", "3100g", "2900g", "3050g"], max: "3200g" }
  },
  {
    id: 77, districtId: 7, category: 'FIND LIGHTEST', visual: 'comparison',
    questionText: "Which of the following represents the LIGHTEST mass?",
    options: ["450 g", "1/2 kg", "1 kg", "2000 g"],
    correctAnswer: "450 g",
    explanation: "1/2 kg = 500 g. 450 g < 500 g < 1000 g < 2000 g.",
    hint1: "1/2 kg is 500 g.",
    hint2: "450 g is less than 500 g.",
    visualData: { items: ["450g", "500g", "1000g", "2000g"], min: "450g" }
  },
  {
    id: 78, districtId: 7, category: 'COMPARE UNITS', visual: 'comparison',
    questionText: "Is 4 kg equal to 4000 g?",
    options: ["Yes, exactly equal", "No, 4 kg is more", "No, 4000 g is more", "Only on digital scales"],
    correctAnswer: "Yes, exactly equal",
    explanation: "4 × 1000 g = 4000 g. Both represent the exact same mass.",
    hint1: "1 kg = 1000 g, so 4 kg = 4 × 1000 g.",
    hint2: "4 kg and 4000 g are identical in mass.",
    visualData: { itemA: "4 kg", itemB: "4000 g", comparison: "equal" }
  },
  {
    id: 79, districtId: 7, category: 'COMPARE UNITS', visual: 'comparison',
    questionText: "Which symbol correctly completes the statement: 2500 g ___ 2 kg 500 g?",
    options: ["=", ">", "<", "≠"],
    correctAnswer: "=",
    explanation: "2 kg 500 g = 2000 g + 500 g = 2500 g. They are equal.",
    hint1: "Convert 2 kg 500 g to grams.",
    hint2: "2500 g = 2500 g.",
    visualData: { left: "2500 g", right: "2 kg 500 g", symbol: "=" }
  },
  {
    id: 80, districtId: 7, category: 'ORDER MASS', visual: 'comparison',
    questionText: "Order these parcels from HEAVIEST to LIGHTEST: Parcel W (3 kg), Parcel X (3500 g), Parcel Y (2 kg 800 g).",
    options: [
      "Parcel X, Parcel W, Parcel Y",
      "Parcel W, Parcel X, Parcel Y",
      "Parcel Y, Parcel W, Parcel X",
      "Parcel X, Parcel Y, Parcel W"
    ],
    correctAnswer: "Parcel X, Parcel W, Parcel Y",
    explanation: "Parcel X = 3500 g, Parcel W = 3000 g, Parcel Y = 2800 g. 3500 > 3000 > 2800.",
    hint1: "Convert all to grams: X = 3500 g, W = 3000 g, Y = 2800 g.",
    hint2: "From largest to smallest: X (3500 g), W (3000 g), Y (2800 g).",
    visualData: { order: "X (3500g) > W (3000g) > Y (2800g)" }
  },

  // ── WORLD 8: MARKET WORD PROBLEMS (Questions 81 - 90) ───────────────────────
  {
    id: 81, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "Lily needs 2 kg of flour to bake a batch of wedding cakes. She already has 1 kg 350 g in her pantry. How much more flour must she buy?",
    options: ["650 g", "750 g", "550 g", "1 kg 650 g"],
    correctAnswer: "650 g",
    explanation: "2000 g - 1350 g = 650 g.",
    hint1: "2 kg = 2000 g. 2000 - 1350 = ?",
    hint2: "1350 + 650 = 2000 g.",
    visualData: { needed: "2 kg (2000g)", has: "1350 g", toBuy: "650 g" }
  },
  {
    id: 82, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "Max packs 4 gift baskets. Each basket weighs 750 g. What is the total mass of all 4 gift baskets in kilograms?",
    options: ["3 kg", "2.5 kg", "4 kg", "3.5 kg"],
    correctAnswer: "3 kg",
    explanation: "4 × 750 g = 3000 g = 3 kg.",
    hint1: "750 + 750 = 1500 g (1.5 kg). Double that for 4 baskets.",
    hint2: "1500 × 2 = 3000 g = 3 kg.",
    visualData: { baskets: 4, massEach: "750 g", total: "3 kg" }
  },
  {
    id: 83, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "Sophie's empty suitcase weighs 2 kg 500 g. She packs 8 kg 300 g of clothes. What is the total mass of the packed suitcase?",
    options: ["10 kg 800 g", "10 kg 500 g", "11 kg 800 g", "9 kg 800 g"],
    correctAnswer: "10 kg 800 g",
    explanation: "2 kg 500 g + 8 kg 300 g = 10 kg 800 g.",
    hint1: "2 kg + 8 kg = 10 kg. 500 g + 300 g = 800 g.",
    hint2: "10 kg 800 g.",
    visualData: { empty: "2 kg 500 g", clothes: "8 kg 300 g", total: "10 kg 800 g" }
  },
  {
    id: 84, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "Oliver has a 2-kilogram bag of fertilizer. He divides it equally into 4 small flower pots. How many grams of fertilizer go into each pot?",
    options: ["500 g", "250 g", "400 g", "200 g"],
    correctAnswer: "500 g",
    explanation: "2 kg = 2000 g. 2000 g ÷ 4 pots = 500 g per pot.",
    hint1: "2 kg = 2000 g. Divide 2000 by 4.",
    hint2: "2000 ÷ 4 = 500 g.",
    visualData: { total: "2000 g", pots: 4, perPot: "500 g" }
  },
  {
    id: 85, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "A baker starts the day with 10 kg of dough. In the morning, he uses 4 kg 250 g. In the afternoon, he uses 3 kg 500 g. How much dough is left at the end of the day?",
    options: ["2 kg 250 g", "2 kg 750 g", "3 kg 250 g", "1 kg 750 g"],
    correctAnswer: "2 kg 250 g",
    explanation: "Used total: 4250 g + 3500 g = 7750 g. Remaining: 10000 g - 7750 g = 2250 g = 2 kg 250 g.",
    hint1: "Find total dough used: 4 kg 250 g + 3 kg 500 g = 7 kg 750 g.",
    hint2: "10 kg - 7 kg 750 g = 2 kg 250 g.",
    visualData: { initial: "10 kg", used: "7 kg 750 g", remaining: "2 kg 250 g" }
  },
  {
    id: 86, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "A post office charges $2 for parcels under 1 kg, and $5 for parcels 1 kg or heavier. Max mails a box weighing 950 g and a book weighing 120 g in one package. What is the total mass and postage cost?",
    options: ["1070 g ($5 postage)", "1070 g ($2 postage)", "970 g ($2 postage)", "1050 g ($5 postage)"],
    correctAnswer: "1070 g ($5 postage)",
    explanation: "950 g + 120 g = 1070 g (1 kg 70 g). Since 1070 g >= 1000 g, the postage cost is $5.",
    hint1: "Add masses: 950 + 120 = 1070 g.",
    hint2: "1070 g is over 1 kg (1000 g), so it costs $5.",
    visualData: { box: "950g", book: "120g", total: "1070g", fee: "$5" }
  },
  {
    id: 87, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "Sophie's cat weighs 4 kg 100 g. Her puppy weighs 3 kg 600 g. What is the combined mass of both pets?",
    options: ["7 kg 700 g", "7 kg 500 g", "8 kg 700 g", "6 kg 700 g"],
    correctAnswer: "7 kg 700 g",
    explanation: "4 kg 100 g + 3 kg 600 g = 7 kg 700 g.",
    hint1: "4 kg + 3 kg = 7 kg. 100 g + 600 g = 700 g.",
    hint2: "7 kg 700 g.",
    visualData: { cat: "4 kg 100 g", puppy: "3 kg 600 g", sum: "7 kg 700 g" }
  },
  {
    id: 88, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "A carton of 10 identical books weighs 5 kg in total. How many grams does ONE book weigh?",
    options: ["500 g", "50 g", "250 g", "1000 g"],
    correctAnswer: "500 g",
    explanation: "5 kg = 5000 g. 5000 g ÷ 10 books = 500 g per book.",
    hint1: "5 kg = 5000 g.",
    hint2: "5000 ÷ 10 = 500 g.",
    visualData: { totalKg: 5, totalG: 5000, books: 10, each: "500 g" }
  },
  {
    id: 89, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "Max buys a 3 kg watermelon. He slices it and gives 600 g to Sophie and 800 g to Oliver. How many grams of watermelon does Max have left?",
    options: ["1600 g", "1400 g", "1800 g", "2000 g"],
    correctAnswer: "1600 g",
    explanation: "3000 g - (600 g + 800 g) = 3000 g - 1400 g = 1600 g (1 kg 600 g).",
    hint1: "Given away: 600 + 800 = 1400 g.",
    hint2: "3000 - 1400 = 1600 g.",
    visualData: { start: "3000 g", given: "1400 g", left: "1600 g" }
  },
  {
    id: 90, districtId: 8, category: 'WORD PROBLEM', visual: 'word_problem',
    questionText: "Lily has 6 packets of yeast. Each packet is 25 g. What is the total mass of the 6 yeast packets?",
    options: ["150 g", "125 g", "175 g", "200 g"],
    correctAnswer: "150 g",
    explanation: "6 × 25 g = 150 g. (4 × 25 = 100, plus 2 × 25 = 50 ➔ 150 g).",
    hint1: "25 + 25 = 50 g (2 packets). Multiply 50 by 3.",
    hint2: "50 × 3 = 150 g.",
    visualData: { packets: 6, each: "25 g", total: "150 g" }
  },

  // ── WORLD 9: MASS GRAND MASTER (Questions 91 - 100) ─────────────────────────
  {
    id: 91, districtId: 9, category: 'GRAND MASTER', visual: 'balance',
    questionText: "On a balance scale, 2 identical pineapples balance with one 1-kg weight and one 400-g weight. What is the mass of ONE pineapple?",
    options: ["700 g", "600 g", "800 g", "500 g"],
    correctAnswer: "700 g",
    explanation: "Total weight on right pan = 1000 g + 400 g = 1400 g. Since 2 pineapples = 1400 g, one pineapple = 1400 ÷ 2 = 700 g.",
    hint1: "1 kg + 400 g = 1400 g.",
    hint2: "Divide 1400 g equally by 2 pineapples = 700 g.",
    visualData: { leftItem: "2 × 🍍", rightItem: "1000g + 400g (1400g)", each: "700g", tilt: "level" }
  },
  {
    id: 92, districtId: 9, category: 'GRAND MASTER', visual: 'converter',
    questionText: "Which of the following expressions equals exactly 3 kg?",
    options: [
      "1250 g + 1750 g",
      "1500 g + 1200 g",
      "2 kg + 500 g",
      "300 g × 100"
    ],
    correctAnswer: "1250 g + 1750 g",
    explanation: "1250 g + 1750 g = 3000 g = 3 kg.",
    hint1: "Add 1250 and 1750.",
    hint2: "1250 + 1750 = 3000 g = 3 kg.",
    visualData: { expression: "1250g + 1750g = 3000g = 3kg" }
  },
  {
    id: 93, districtId: 9, category: 'GRAND MASTER', visual: 'comparison',
    questionText: "Box A is 2 kg 400 g. Box B is 1900 g. Box C is 2½ kg. Which box is the HEAVIEST?",
    options: ["Box C", "Box A", "Box B", "Box A and C are tied"],
    correctAnswer: "Box C",
    explanation: "Box A = 2400 g, Box B = 1900 g, Box C = 2½ kg = 2500 g. 2500 g is the largest mass.",
    hint1: "Convert all to grams: A = 2400 g, B = 1900 g, C = 2500 g.",
    hint2: "Box C (2500 g) is the heaviest.",
    visualData: { A: "2400g", B: "1900g", C: "2500g", winner: "Box C" }
  },
  {
    id: 94, districtId: 9, category: 'GRAND MASTER', visual: 'word_problem',
    questionText: "A crate filled with 8 identical metal parts weighs 6 kg 400 g. If the empty crate weighs 800 g, what is the mass of ONE metal part?",
    options: ["700 g", "800 g", "600 g", "750 g"],
    correctAnswer: "700 g",
    explanation: "Total mass of 8 parts = 6400 g - 800 g = 5600 g. Mass of 1 part = 5600 ÷ 8 = 700 g.",
    hint1: "Subtract empty crate: 6400 - 800 = 5600 g.",
    hint2: "Divide 5600 g by 8 parts = 700 g.",
    visualData: { totalWithCrate: "6400g", crate: "800g", partsTotal: "5600g", each: "700g" }
  },
  {
    id: 95, districtId: 9, category: 'GRAND MASTER', visual: 'converter',
    questionText: "Evaluate: 5 kg − 2 kg 350 g = ?",
    options: ["2 kg 650 g", "3 kg 650 g", "2 kg 350 g", "3 kg 350 g"],
    correctAnswer: "2 kg 650 g",
    explanation: "5000 g - 2350 g = 2650 g = 2 kg 650 g.",
    hint1: "5000 - 2350 = 2650 g.",
    hint2: "2650 g = 2 kg 650 g.",
    visualData: { start: "5000g", sub: "2350g", res: "2 kg 650 g" }
  },
  {
    id: 96, districtId: 9, category: 'GRAND MASTER', visual: 'balance',
    questionText: "3 identical bags of flour balance against one 500-g weight and one 1-kg weight. What is the mass of each bag of flour?",
    options: ["500 g", "750 g", "400 g", "300 g"],
    correctAnswer: "500 g",
    explanation: "Total weight = 1000 g + 500 g = 1500 g. 1500 g ÷ 3 bags = 500 g each.",
    hint1: "Right pan = 1500 g.",
    hint2: "1500 ÷ 3 = 500 g.",
    visualData: { left: "3 × Flour", right: "1500 g", each: "500 g" }
  },
  {
    id: 97, districtId: 9, category: 'GRAND MASTER', visual: 'word_problem',
    questionText: "A recipe for a giant chocolate cake requires 750 g butter, 1 kg 250 g flour, 800 g sugar, and 200 g cocoa. What is the total mass of the batter?",
    options: ["3 kg", "2 kg 800 g", "3 kg 200 g", "3.5 kg"],
    correctAnswer: "3 kg",
    explanation: "750 + 1250 + 800 + 200 = 2000 + 1000 = 3000 g = 3 kg.",
    hint1: "750 + 1250 = 2000 g (2 kg). 800 + 200 = 1000 g (1 kg).",
    hint2: "2 kg + 1 kg = 3 kg.",
    visualData: { items: "750g + 1250g + 800g + 200g", total: "3 kg" }
  },
  {
    id: 98, districtId: 9, category: 'GRAND MASTER', visual: 'comparison',
    questionText: "Sophie has 3 weights: 1 kg, 500 g, and 200 g. Which of the following total masses CANNOT be made using each weight at most once?",
    options: ["1400 g", "1700 g", "1500 g", "1200 g"],
    correctAnswer: "1400 g",
    explanation: "Possible combinations: 200g, 500g, 700g, 1000g, 1200g, 1500g, 1700g. 1400g cannot be formed.",
    hint1: "1000 + 500 + 200 = 1700 g; 1000 + 500 = 1500 g; 1000 + 200 = 1200 g.",
    hint2: "1400 g cannot be made with 1000, 500, and 200.",
    visualData: { weights: ["1000g", "500g", "200g"], impossible: "1400 g" }
  },
  {
    id: 99, districtId: 9, category: 'GRAND MASTER', visual: 'dial_scale',
    questionText: "A chef places an empty mixing bowl on a dial scale and it reads 350 g. He pours milk until the scale reads 1 kg 150 g. How much milk in grams was added?",
    options: ["800 g", "850 g", "750 g", "900 g"],
    correctAnswer: "800 g",
    explanation: "1150 g - 350 g = 800 g.",
    hint1: "1 kg 150 g = 1150 g.",
    hint2: "1150 - 350 = 800 g.",
    visualData: { start: "350 g", end: "1150 g", milk: "800 g" }
  },
  {
    id: 100, districtId: 9, category: 'GRAND MASTER', visual: 'converter',
    questionText: "You are the ultimate Mass Grand Master! How many grams are in 10 kilograms minus 500 grams?",
    options: ["9500 g", "9000 g", "9050 g", "9950 g"],
    correctAnswer: "9500 g",
    explanation: "10 kg = 10000 g. 10000 g - 500 g = 9500 g (or 9 kg 500 g).",
    hint1: "10 kg = 10000 g.",
    hint2: "10000 - 500 = 9500 g.",
    visualData: { expr: "10000g - 500g", result: "9500 g" }
  },
];

export default RAW_QUESTIONS;
