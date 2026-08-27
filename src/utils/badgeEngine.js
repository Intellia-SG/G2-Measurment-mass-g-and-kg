// src/utils/badgeEngine.js
// Gamification badge evaluation engine for MassQuest

export const BADGES = [
  {
    id: 'first_weigh',
    icon: '⚖️',
    label: 'First Weigh',
    description: 'Answer your very first mass question correctly!',
  },
  {
    id: 'streak_hero',
    icon: '🔥',
    label: 'Streak Hero',
    description: 'Achieve a winning streak of 5 correct answers in a row!',
  },
  {
    id: 'scale_balancer',
    icon: '⚖️',
    label: 'Scale Balancer',
    description: 'Complete Station A: Interactive Pan Balance Lab!',
  },
  {
    id: 'dial_master',
    icon: '🧭',
    label: 'Dial Master',
    description: 'Complete Station B: Market Dial & Scale Reader!',
  },
  {
    id: 'converter_pro',
    icon: '🔄',
    label: 'Converter Pro',
    description: 'Complete Station C: The Grams-to-Kilograms Machine!',
  },
  {
    id: 'chef_inspector',
    icon: '🧁',
    label: 'Master Chef Inspector',
    description: 'Complete Station D: Chef Lily\'s Recipe Mass Inspector!',
  },
  {
    id: 'boss_slayer',
    icon: '👑',
    label: 'Boss Slayer',
    description: 'Defeat a World Boss in a high-stakes Boss Battle!',
  },
  {
    id: 'world_conqueror',
    icon: '🗺️',
    label: 'World Explorer',
    description: 'Master at least 5 different Mass Worlds!',
  },
  {
    id: 'mass_grandmaster',
    icon: '🏆',
    label: 'Mass Grand Master',
    description: 'Conquer all 10 Mass Worlds and complete Practice Phase!',
  },
];

export function checkBadges(state) {
  if (!state) return [];
  const unlocked = [];

  const totalCorrect = state.districtCorrect?.reduce((s, c) => s + (c || 0), 0) || 0;
  const completedWorlds = state.districtScores?.filter((s) => s !== null && s >= 7).length || 0;

  // 1. First Weigh
  if (totalCorrect >= 1) unlocked.push('first_weigh');

  // 2. Streak Hero
  if ((state.maxStreak || 0) >= 5) unlocked.push('streak_hero');

  // 3. Station Badges
  if (state.simStationsComplete?.[0]) unlocked.push('scale_balancer');
  if (state.simStationsComplete?.[1]) unlocked.push('dial_master');
  if (state.simStationsComplete?.[2]) unlocked.push('converter_pro');
  if (state.simStationsComplete?.[3]) unlocked.push('chef_inspector');

  // 4. World exploration
  if (completedWorlds >= 5) unlocked.push('world_conqueror');
  if (state.phaseComplete?.play || (state.currentQuestion || 0) >= 100) unlocked.push('mass_grandmaster');

  return unlocked;
}
