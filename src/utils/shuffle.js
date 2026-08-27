// src/utils/shuffle.js
// Shuffle utility to randomize question options and question banks while keeping data intact

export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateSessionQuestions(questionBank) {
  if (!questionBank || !questionBank.length) return [];
  return questionBank.map((q) => ({
    ...q,
    options: shuffle([...(q.options || [])]),
  }));
}
