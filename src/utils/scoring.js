// src/utils/scoring.js
// XP and Star calculation algorithms for MassQuest

export function calcXP(attempts, hintsUsed, streak = 0) {
  let base = 10;
  if (attempts === 1) base = 15;
  else if (attempts === 2) base = 10;
  else base = 5;

  const hintPenalty = hintsUsed * 2;
  const streakBonus = Math.min(streak * 2, 10);

  return Math.max(2, base - hintPenalty + streakBonus);
}

export function calcStars(correctCount) {
  if (correctCount >= 9) return 3;
  if (correctCount >= 7) return 2;
  if (correctCount >= 5) return 1;
  return 0;
}
