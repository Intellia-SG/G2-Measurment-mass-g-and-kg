// src/components/simulations/ScaleReaderStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const MARKET_ITEMS = [
  { id: 'apples',  name: 'Bag of Apples', emoji: '🍎', grams: 500 },
  { id: 'bananas', name: 'Fresh Bananas', emoji: '🍌', grams: 300 },
  { id: 'melon',   name: 'Sweet Melon',   emoji: '🍈', grams: 750 },
  { id: 'bread',   name: 'Bakery Loaf',   emoji: '🍞', grams: 250 },
  { id: 'flour',   name: 'Flour Pack',    emoji: '🌾', grams: 1000 },
  { id: 'berries', name: 'Strawberries',  emoji: '🍓', grams: 200 },
];

const TASKS = [
  {
    targetTotal: 1250,
    targetText: '1 kg 250 g (1250 g)',
    hint: 'Try: Sweet Melon (750g) + Bag of Apples (500g)',
  },
  {
    targetTotal: 1500,
    targetText: '1 kg 500 g (1500 g)',
    hint: 'Try: Flour Pack (1000g) + Bag of Apples (500g)',
  },
  {
    targetTotal: 800,
    targetText: '800 g',
    hint: 'Try: Fresh Bananas (300g) + Bag of Apples (500g)',
  },
];

export default function ScaleReaderStation({ onComplete, audioEnabled = true }) {
  const { sounds } = useAudio(audioEnabled);
  const [taskIdx, setTaskIdx] = useState(0);
  const [trayItems, setTrayItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  const task = TASKS[taskIdx];
  const currentTotal = trayItems.reduce((sum, item) => sum + item.grams, 0);
  const isMatch = currentTotal === task.targetTotal;

  // Dial needle angle: 0g is -135deg, 2000g is +135deg
  const maxScaleGrams = 2000;
  const needleAngle = -135 + Math.min(1, currentTotal / maxScaleGrams) * 270;

  function toggleItem(item) {
    sounds.click();
    if (trayItems.some((it) => it.id === item.id)) {
      setTrayItems((prev) => prev.filter((it) => it.id !== item.id));
    } else {
      setTrayItems((prev) => [...prev, item]);
    }
  }

  function handleVerify() {
    if (!isMatch) {
      sounds.wrong();
      return;
    }
    sounds.correct();
    const nextDone = completedTasks + 1;
    setCompletedTasks(nextDone);

    if (taskIdx + 1 < TASKS.length) {
      setTimeout(() => {
        setTaskIdx(taskIdx + 1);
        setTrayItems([]);
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
        <h3 className="station-title">🧭 Station B: Market Dial &amp; Scale Reader</h3>
        <div className="station-target-box">
          <span className="station-target-label">Target Mass:</span>
          <span className="station-target-num">🛒 {task.targetText}</span>
        </div>
      </div>

      <p className="station-instructions">
        Select grocery items to place on the scale until the dial needle points <strong>precisely to the target mass</strong>!
      </p>

      <div className="station-grid-2col">
        {/* Left Column: Dial Spring Scale Visualization */}
        <div className="station-col-left station-panel">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {/* Dial Gauge SVG */}
            <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: 190, height: 'auto', display: 'block' }}>
              {/* Dial outer casing */}
              <circle cx="100" cy="100" r="92" fill="#161234" stroke="rgba(245,158,11,0.6)" strokeWidth="4" />
              <circle cx="100" cy="100" r="76" fill="rgba(255,255,255,0.06)" />

              {/* Dial markings (0, 250g, 500g, 750g, 1000g/1kg, 1250g, 1500g, 1750g, 2000g) */}
              {[
                { deg: -135, label: '0' },
                { deg: -101.25, label: '250' },
                { deg: -67.5, label: '500g' },
                { deg: -33.75, label: '750' },
                { deg: 0, label: '1 kg' },
                { deg: 33.75, label: '1250' },
                { deg: 67.5, label: '1.5k' },
                { deg: 101.25, label: '1750' },
                { deg: 135, label: '2 kg' },
              ].map((m, i) => (
                <g key={i} transform={`rotate(${m.deg} 100 100)`}>
                  <line x1="100" y1="14" x2="100" y2="24" stroke="#fcd34d" strokeWidth="2.5" />
                  <text x="100" y="36" textAnchor="middle" fontSize="9" fill="#e2e8f0" fontFamily="Fredoka" fontWeight="700">
                    {m.label}
                  </text>
                </g>
              ))}

              {/* Center Pivot & Red Needle */}
              <circle cx="100" cy="100" r="8" fill="#f59e0b" />
              <g transform={`rotate(${needleAngle} 100 100)`} style={{ transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                <line x1="100" y1="100" x2="100" y2="24" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="100" cy="24" r="3.5" fill="#f87171" />
              </g>
            </svg>

            {/* Digital Readout Box */}
            <div style={{ marginTop: '6px', background: 'rgba(0,0,0,0.6)', border: '1.5px solid rgba(56,189,248,0.5)', borderRadius: '10px', padding: '4px 14px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 800 }}>SCALE READING:</span>
              <span style={{ fontFamily: 'monospace', fontSize: '1.15rem', fontWeight: 900, color: '#38bdf8' }}>
                {currentTotal} g ({currentTotal >= 1000 ? `${(currentTotal / 1000).toFixed(2)} kg` : `${currentTotal} g`})
              </span>
            </div>
          </div>

          <div className={`station-status-banner ${isMatch ? 'is-balanced' : 'is-unbalanced'}`} style={{ marginTop: '6px' }}>
            {isMatch ? (
              <span>🎉 EXACT MATCH! Needle is pointing right on {task.targetText}!</span>
            ) : (
              <span>Current: {currentTotal} g ➔ Target: {task.targetTotal} g</span>
            )}
          </div>
        </div>

        {/* Right Column: Grocery Shelf */}
        <div className="station-col-right station-panel">
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gold)', alignSelf: 'flex-start' }}>
            Market Items (Tap to place on / remove from scale):
          </span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
            {MARKET_ITEMS.map((item) => {
              const inTray = trayItems.some((it) => it.id === item.id);
              return (
                <button
                  key={item.id}
                  className={`option-btn ${inTray ? 'selected' : ''}`}
                  onClick={() => toggleItem(item)}
                  style={{
                    padding: '8px 10px',
                    minHeight: '48px',
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.emoji} {item.name}</span>
                  <span style={{ fontWeight: 900, color: inTray ? '#fef08a' : '#f59e0b', fontSize: '0.85rem' }}>
                    {item.grams}g
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '6px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
              Task {taskIdx + 1} of {TASKS.length}
            </span>
            <button
              className={`btn ${isMatch ? 'btn-green' : 'btn-primary'} btn-sm`}
              onClick={handleVerify}
              disabled={!isMatch}
            >
              {isMatch ? (taskIdx + 1 >= TASKS.length ? 'Complete Lab! ⭐' : 'Next Task →') : 'Reach Exact Target'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
