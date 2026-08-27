// src/components/simulations/RecipeInspectorStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const RECIPES = [
  {
    name: '🥖 Golden Honey Bread',
    targetBatchText: '1000 g (1 kg)',
    targetTotal: 1000,
    ingredients: [
      { id: 'flour', name: 'White Flour', emoji: '🌾', targetGrams: 600, initialGrams: 500 },
      { id: 'sugar', name: 'Sweet Sugar', emoji: '🍬', targetGrams: 250, initialGrams: 250 },
      { id: 'butter', name: 'Creamy Butter', emoji: '🧈', targetGrams: 150, initialGrams: 150 },
    ],
  },
  {
    name: '🎂 Celebration Sponge Cake',
    targetBatchText: '2000 g (2 kg)',
    targetTotal: 2000,
    ingredients: [
      { id: 'flour', name: 'Cake Flour', emoji: '🌾', targetGrams: 1000, initialGrams: 900 },
      { id: 'sugar', name: 'Caster Sugar', emoji: '🍬', targetGrams: 600, initialGrams: 600 },
      { id: 'cocoa', name: 'Cocoa Powder', emoji: '🍫', targetGrams: 400, initialGrams: 300 },
    ],
  },
];

export default function RecipeInspectorStation({ onComplete, audioEnabled = true }) {
  const { sounds } = useAudio(audioEnabled);
  const [recipeIdx, setRecipeIdx] = useState(0);
  const [bowls, setBowls] = useState(() => {
    const init = {};
    RECIPES[0].ingredients.forEach((ing) => {
      init[ing.id] = ing.initialGrams;
    });
    return init;
  });

  const recipe = RECIPES[recipeIdx];
  const currentBatchTotal = Object.values(bowls).reduce((a, b) => a + b, 0);
  const allIngredientsMatch = recipe.ingredients.every((ing) => bowls[ing.id] === ing.targetGrams);

  function adjustIngredient(id, delta) {
    sounds.click();
    setBowls((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  }

  function handleCompleteRecipe() {
    if (!allIngredientsMatch) {
      sounds.wrong();
      return;
    }
    sounds.correct();

    if (recipeIdx + 1 < RECIPES.length) {
      setTimeout(() => {
        const nextIdx = recipeIdx + 1;
        setRecipeIdx(nextIdx);
        const nextInit = {};
        RECIPES[nextIdx].ingredients.forEach((ing) => {
          nextInit[ing.id] = ing.initialGrams;
        });
        setBowls(nextInit);
      }, 700);
    } else {
      setTimeout(() => {
        sounds.badge();
        onComplete && onComplete();
      }, 800);
    }
  }

  return (
    <div className="station-wrap anim-fade-in">
      <div className="station-header">
        <h3 className="station-title">🧁 Station D: Chef Lily's Recipe Inspector</h3>
        <div className="station-target-box">
          <span className="station-target-label">Recipe:</span>
          <span className="station-target-num">{recipe.name}</span>
        </div>
      </div>

      <p className="station-instructions">
        Inspect each ingredient bowl on the bakery counter. Add or remove scoops until every bowl matches the recipe card!
      </p>

      <div className="station-grid-2col">
        {/* Left Column: Recipe Card Checklist */}
        <div className="station-col-left station-panel">
          <div style={{ width: '100%', background: 'rgba(255,179,0,0.12)', border: '1.5px solid rgba(255,179,0,0.4)', borderRadius: '14px', padding: '10px 14px', boxSizing: 'border-box' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--gold)', fontSize: '1.05rem', marginBottom: '6px' }}>
              📜 Recipe Card Targets:
            </div>
            {recipe.ingredients.map((ing) => {
              const current = bowls[ing.id] || 0;
              const isOk = current === ing.targetGrams;
              return (
                <div key={ing.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                    {ing.emoji} {ing.name}: <strong>{ing.targetGrams} g</strong>
                  </span>
                  <span style={{ fontWeight: 800, color: isOk ? '#4ade80' : '#f87171', fontSize: '0.85rem' }}>
                    {isOk ? '✅ Ready' : `Current: ${current} g`}
                  </span>
                </div>
              );
            })}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '6px', borderTop: '1.5px solid rgba(255,179,0,0.4)', fontWeight: 900, color: '#fef08a' }}>
              <span>Total Batch Target:</span>
              <span>{recipe.targetBatchText}</span>
            </div>
          </div>

          <div className={`station-status-banner ${allIngredientsMatch ? 'is-balanced' : 'is-unbalanced'}`} style={{ marginTop: '6px' }}>
            {allIngredientsMatch ? (
              <span>🎉 PERFECT RECIPE! Total Batch = {currentBatchTotal} g ({recipe.targetBatchText})</span>
            ) : (
              <span>Current Total: {currentBatchTotal} g / {recipe.targetTotal} g</span>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Ingredient Scoopers */}
        <div className="station-col-right station-panel">
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gold)', alignSelf: 'flex-start' }}>
            Bakery Bowls (Use scoops to adjust):
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            {recipe.ingredients.map((ing) => {
              const current = bowls[ing.id] || 0;
              const isOk = current === ing.targetGrams;
              return (
                <div
                  key={ing.id}
                  style={{
                    background: isOk ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.06)',
                    border: `1.5px solid ${isOk ? '#22c55e' : 'rgba(255,255,255,0.15)'}`,
                    borderRadius: '12px',
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.92rem' }}>{ing.emoji} {ing.name}</span>
                    <span style={{ fontSize: '0.8rem', color: isOk ? '#4ade80' : '#ffd54f', fontWeight: 700 }}>
                      Bowl: {current} g (Goal: {ing.targetGrams}g)
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => adjustIngredient(ing.id, -100)}
                      disabled={current <= 0}
                      style={{ padding: '2px 8px', minHeight: '30px', minWidth: 'auto', fontSize: '0.8rem' }}
                    >
                      -100g
                    </button>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => adjustIngredient(ing.id, -50)}
                      disabled={current <= 0}
                      style={{ padding: '2px 8px', minHeight: '30px', minWidth: 'auto', fontSize: '0.8rem' }}
                    >
                      -50g
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => adjustIngredient(ing.id, +50)}
                      style={{ padding: '2px 8px', minHeight: '30px', minWidth: 'auto', fontSize: '0.8rem' }}
                    >
                      +50g
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => adjustIngredient(ing.id, +100)}
                      style={{ padding: '2px 8px', minHeight: '30px', minWidth: 'auto', fontSize: '0.8rem' }}
                    >
                      +100g
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '6px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
              Recipe {recipeIdx + 1} of {RECIPES.length}
            </span>
            <button
              className={`btn ${allIngredientsMatch ? 'btn-green' : 'btn-primary'} btn-sm`}
              onClick={handleCompleteRecipe}
              disabled={!allIngredientsMatch}
            >
              {allIngredientsMatch ? (recipeIdx + 1 >= RECIPES.length ? 'Complete Simulation! ⭐' : 'Next Recipe →') : 'Adjust All Ingredients'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
