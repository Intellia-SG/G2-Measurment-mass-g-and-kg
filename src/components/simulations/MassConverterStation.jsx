// src/components/simulations/MassConverterStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const CONVERSION_CHALLENGES = [
  {
    title: 'Challenge 1: Mixed Units to Grams',
    question: 'Convert 2 kg 450 g into total grams (g):',
    options: ['2450 g', '2045 g', '24500 g', '245 g'],
    correct: '2450 g',
    rule: '2 kg = 2000 g  ➔  2000 g + 450 g = 2450 g',
  },
  {
    title: 'Challenge 2: Grams to Mixed Units',
    question: 'Convert 3500 g into kilograms and grams:',
    options: ['3 kg 500 g', '35 kg 0 g', '3 kg 50 g', '30 kg 500 g'],
    correct: '3 kg 500 g',
    rule: '3500 g = 3000 g (3 kg) + 500 g (½ kg)',
  },
  {
    title: 'Challenge 3: Fraction of a Kilogram',
    question: 'How many grams are in ¾ kg (three-quarters of a kilogram)?',
    options: ['750 g', '500 g', '250 g', '800 g'],
    correct: '750 g',
    rule: '¼ kg = 250 g  ➔  3 × 250 g = 750 g',
  },
];

export default function MassConverterStation({ onComplete, audioEnabled = true }) {
  const { sounds } = useAudio(audioEnabled);
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [sliderKg, setSliderKg] = useState(2);

  const challenge = CONVERSION_CHALLENGES[challengeIdx];

  function handleSelect(opt) {
    if (isAnswered) return;
    sounds.click();
    setSelectedAns(opt);
  }

  function handleCheck() {
    if (!selectedAns) return;
    setIsAnswered(true);
    if (selectedAns === challenge.correct) {
      sounds.correct();
    } else {
      sounds.wrong();
    }
  }

  function handleNext() {
    if (challengeIdx + 1 < CONVERSION_CHALLENGES.length) {
      setChallengeIdx(challengeIdx + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    } else {
      sounds.badge();
      onComplete && onComplete();
    }
  }

  return (
    <div className="station-wrap anim-fade-in">
      <div className="station-header">
        <h3 className="station-title">🔄 Station C: Grams-to-Kilograms Machine</h3>
        <div className="station-target-box">
          <span className="station-target-label">Rule:</span>
          <span className="station-target-num">1 kg = 1000 g ⚡</span>
        </div>
      </div>

      <p className="station-instructions">
        Use the interactive conversion machine to see how kilograms split into 1000-gram blocks, then solve the conversion challenge!
      </p>

      <div className="station-grid-2col">
        {/* Left Column: Interactive Visual Converter Machine */}
        <div className="station-col-left station-panel">
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gold)', marginBottom: '4px' }}>
            Interactive Kg ➔ Grams Explorer:
          </span>

          {/* Slider */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>1 kg</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={sliderKg}
              onChange={(e) => { sounds.click(); setSliderKg(Number(e.target.value)); }}
              style={{ flex: 1, accentColor: '#f59e0b', cursor: 'pointer' }}
              aria-label="Kilogram slider"
            />
            <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>5 kg</span>
          </div>

          {/* Live Converter display */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '8px 0', width: '100%' }}>
            <div style={{ background: 'rgba(245,158,11,0.25)', border: '2px solid #f59e0b', borderRadius: '14px', padding: '8px 18px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#cbd5e1' }}>KILOGRAMS</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: '#ffd54f' }}>
                {sliderKg} kg
              </div>
            </div>

            <span style={{ fontSize: '1.6rem', color: '#fcd34d' }}>⚡ = ⚡</span>

            <div style={{ background: 'rgba(56,189,248,0.25)', border: '2px solid #38bdf8', borderRadius: '14px', padding: '8px 18px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#cbd5e1' }}>TOTAL GRAMS</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8' }}>
                {sliderKg * 1000} g
              </div>
            </div>
          </div>

          {/* 1000g bags representation */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', width: '100%', marginTop: '4px' }}>
            {Array.from({ length: sliderKg }).map((_, i) => (
              <span key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 800, color: '#4ade80' }}>
                📦 1000g bag
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Active Conversion Challenge */}
        <div className="station-col-right station-panel">
          <div style={{ width: '100%', textAlign: 'left' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 800, textTransform: 'uppercase' }}>
              {challenge.title}
            </span>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', fontWeight: 800, margin: '4px 0 8px', color: '#ffffff' }}>
              {challenge.question}
            </p>
          </div>

          {/* Options Grid */}
          <div className="options-grid">
            {challenge.options.map((opt, i) => {
              let cls = 'option-btn';
              if (isAnswered) {
                if (opt === challenge.correct) cls += ' correct';
                else if (opt === selectedAns) cls += ' wrong';
                else cls += ' disabled';
              } else if (selectedAns === opt) {
                cls += ' selected';
              }
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => handleSelect(opt)}
                  disabled={isAnswered}
                  style={{ minHeight: '44px', padding: '10px', fontSize: '1.05rem' }}
                >
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {isAnswered && (
            <div style={{ width: '100%', background: selectedAns === challenge.correct ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)', border: `1px solid ${selectedAns === challenge.correct ? '#22c55e' : '#ef4444'}`, borderRadius: '10px', padding: '6px 12px', fontSize: '0.88rem', fontWeight: 700, textAlign: 'center' }}>
              💡 {challenge.rule}
            </div>
          )}

          {/* Bottom Action Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '4px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
              Puzzle {challengeIdx + 1} of {CONVERSION_CHALLENGES.length}
            </span>
            {!isAnswered ? (
              <button
                className="btn btn-primary btn-sm"
                onClick={handleCheck}
                disabled={!selectedAns}
              >
                Check Conversion ✓
              </button>
            ) : (
              <button
                className="btn btn-green btn-sm"
                onClick={handleNext}
              >
                {challengeIdx + 1 >= CONVERSION_CHALLENGES.length ? 'Complete Lab! ⭐' : 'Next Challenge →'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
