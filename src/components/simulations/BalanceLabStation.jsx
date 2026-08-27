// src/components/simulations/BalanceLabStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const ROUNDS = [
  { targetName: 'Fresh Pumpkin', emoji: '🎃', targetGrams: 650, hint: 'Try 500g + 100g + 50g' },
  { targetName: 'Market Gift Parcel', emoji: '📦', targetGrams: 1250, hint: 'Try 1 kg (1000g) + 200g + 50g' },
  { targetName: 'Honey Pot', emoji: '🍯', targetGrams: 350, hint: 'Try 200g + 100g + 50g' },
];

const WEIGHT_OPTIONS = [
  { label: '1 kg (1000g)', grams: 1000 },
  { label: '500 g', grams: 500 },
  { label: '200 g', grams: 200 },
  { label: '100 g', grams: 100 },
  { label: '50 g', grams: 50 },
  { label: '10 g', grams: 10 },
];

export default function BalanceLabStation({ onComplete, audioEnabled = true }) {
  const { sounds } = useAudio(audioEnabled);
  const [roundIdx, setRoundIdx] = useState(0);
  const [placedWeights, setPlacedWeights] = useState([]);
  const [completedRounds, setCompletedRounds] = useState(0);

  const round = ROUNDS[roundIdx];
  const rightTotal = placedWeights.reduce((sum, w) => sum + w.grams, 0);
  const diff = round.targetGrams - rightTotal;
  const isBalanced = diff === 0;

  // Tilt angle calculation: positive tilts right pan down
  const maxTilt = 14;
  const tilt = isBalanced ? 0 : Math.max(-maxTilt, Math.min(maxTilt, (rightTotal - round.targetGrams) / 40));

  function addWeight(w) {
    sounds.click();
    setPlacedWeights((prev) => [...prev, { ...w, id: Date.now() + Math.random() }]);
  }

  function removeWeight(id) {
    sounds.click();
    setPlacedWeights((prev) => prev.filter((w) => w.id !== id));
  }

  function clearWeights() {
    sounds.click();
    setPlacedWeights([]);
  }

  function handleCheck() {
    if (!isBalanced) {
      sounds.wrong();
      return;
    }
    sounds.correct();
    const nextDone = completedRounds + 1;
    setCompletedRounds(nextDone);

    if (roundIdx + 1 < ROUNDS.length) {
      setTimeout(() => {
        setRoundIdx(roundIdx + 1);
        setPlacedWeights([]);
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
      {/* Header */}
      <div className="station-header">
        <h3 className="station-title">⚖️ Station A: Interactive Pan Balance Lab</h3>
        <div className="station-target-box">
          <span className="station-target-label">Target:</span>
          <span className="station-target-num">{round.emoji} {round.targetGrams} g</span>
        </div>
      </div>

      <p className="station-instructions">
        Tap calibrated brass weights to place them on the right pan until the balance scale is <strong>completely level</strong>!
      </p>

      <div className="station-grid-2col">
        {/* Left Col: Balance Scale Visualization */}
        <div className="station-col-left station-panel">
          <svg viewBox="0 0 320 200" style={{ width: '100%', maxWidth: 300, height: 'auto', display: 'block' }}>
            {/* Stand and Pillar */}
            <rect x="156" y="55" width="8" height="120" rx="4" fill="rgba(255,255,255,0.3)" />
            <rect x="100" y="170" width="120" height="14" rx="7" fill="rgba(255,255,255,0.2)" />
            <circle cx="160" cy="58" r="9" fill="#f59e0b" />

            {/* Rotating Beam */}
            <g transform={`rotate(${tilt} 160 58)`} style={{ transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              {/* Beam line */}
              <rect x="40" y="55" width="240" height="7" rx="3.5" fill={isBalanced ? '#22c55e' : 'rgba(200,180,255,0.7)'} />

              {/* Left Pan (Target Item) */}
              <line x1="70" y1="58" x2="55" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              <line x1="70" y1="58" x2="85" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              <ellipse cx="70" cy="118" rx="34" ry="9" fill="rgba(124,92,191,0.65)" stroke="#c4b5fd" strokeWidth="1.5" />
              <text x="70" y="110" textAnchor="middle" fontSize="30">{round.emoji}</text>
              <rect x="45" y="130" width="50" height="16" rx="6" fill="rgba(0,0,0,0.6)" />
              <text x="70" y="142" textAnchor="middle" fontSize="10" fill="#fcd34d" fontFamily="Fredoka" fontWeight="800">
                {round.targetGrams} g
              </text>

              {/* Right Pan (Placed Weights) */}
              <line x1="250" y1="58" x2="235" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              <line x1="250" y1="58" x2="265" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              <ellipse cx="250" cy="118" rx="34" ry="9" fill="rgba(124,92,191,0.65)" stroke="#c4b5fd" strokeWidth="1.5" />
              <text x="250" y="110" textAnchor="middle" fontSize="24">⚖️</text>
              <rect x="225" y="130" width="50" height="16" rx="6" fill="rgba(0,0,0,0.6)" />
              <text x="250" y="142" textAnchor="middle" fontSize="10" fill={isBalanced ? '#4ade80' : '#ffd54f'} fontFamily="Fredoka" fontWeight="800">
                {rightTotal} g
              </text>
            </g>
          </svg>

          {/* Status Indicator */}
          <div className={`station-status-banner ${isBalanced ? 'is-balanced' : 'is-unbalanced'}`}>
            {isBalanced ? (
              <span>🎉 PERFECT BALANCE! (Left: {round.targetGrams}g = Right: {rightTotal}g)</span>
            ) : diff > 0 ? (
              <span>⚖️ Needs {diff} g more on the right pan! (Left is sinking)</span>
            ) : (
              <span>⚖️ Too heavy by {Math.abs(diff)} g! (Remove some weights)</span>
            )}
          </div>
        </div>

        {/* Right Col: Weight Shelf & Pan Contents */}
        <div className="station-col-right station-panel">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gold)' }}>
              Weights Shelf (Tap to add):
            </span>
            <button className="btn btn-outline btn-sm" onClick={clearWeights} disabled={placedWeights.length === 0} style={{ minHeight: 30, padding: '4px 10px', fontSize: '0.8rem' }}>
              Clear Pan 🗑️
            </button>
          </div>

          {/* Available weights shelf */}
          <div className="weights-shelf">
            {WEIGHT_OPTIONS.map((w, i) => (
              <button key={i} className="weight-token" onClick={() => addWeight(w)}>
                <span>+ {w.label}</span>
              </button>
            ))}
          </div>

          {/* Weights currently on Right Pan */}
          <div style={{ width: '100%', background: 'rgba(0,0,0,0.25)', borderRadius: '12px', padding: '8px', minHeight: '64px', boxSizing: 'border-box' }}>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '4px' }}>
              Weights in Right Pan ({placedWeights.length} items):
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {placedWeights.length === 0 ? (
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                  Pan is empty. Tap weights above to add.
                </span>
              ) : (
                placedWeights.map((w) => (
                  <button key={w.id} className="weight-token in-pan" onClick={() => removeWeight(w.id)} title="Tap to remove">
                    <span>{w.label} ✕</span>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '4px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
              Round {roundIdx + 1} of {ROUNDS.length}
            </span>
            <button
              className={`btn ${isBalanced ? 'btn-green' : 'btn-primary'} btn-sm`}
              onClick={handleCheck}
              disabled={!isBalanced}
            >
              {isBalanced ? (roundIdx + 1 >= ROUNDS.length ? 'Complete Lab! ⭐' : 'Next Item →') : 'Place Weights to Balance'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
