// src/components/phases/WonderPhase.jsx
import React, { useEffect } from 'react';
import './WonderPhase.css';
import Mascot from '../shared/Mascot.jsx';
import { useAudio } from '../../hooks/useAudio.js';
import { wonderNarration } from '../../utils/narration.js';

const PARTICLES = ['⚖️', '1 kg', '1000 g', '500 g', '250 g', '🍎', '🏋️', '📦', '🧁', '🔬', 'g', 'kg', '✨', '⭐'];

export default function WonderPhase({ state, dispatch }) {
  const { narrate, stopAll } = useAudio(state?.audioEnabled ?? true);

  useEffect(() => {
    const segs = wonderNarration();
    narrate(segs);
    return () => stopAll();
  }, [narrate, stopAll]);

  function handleInvestigate() {
    stopAll();
    dispatch({ type: 'COMPLETE_PHASE', payload: 'wonder' });
    dispatch({ type: 'SET_PHASE', payload: 'story' });
  }

  return (
    <div className="wonder-wrap">
      {/* Floating background particles */}
      <div className="wonder-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="wonder-particle"
            style={{
              left: `${4 + (i * 7.2) % 92}%`,
              top: `${6 + (i * 8.4) % 86}%`,
              animationDelay: `${i * 0.45}s`,
              fontSize: `${1.0 + (i % 3) * 0.35}rem`,
            }}
          >
            {p}
          </span>
        ))}
      </div>

      <div className="wonder-container anim-slide-up">
        {/* Main 2-column wide card utilizing screen space */}
        <div className="wonder-card glass-card">
          {/* Left Column: Hero & Curiosity */}
          <div className="wonder-col-left">
            <div className="wonder-badge-pill">
              <span className="badge-icon">🔍</span>
              <span className="badge-text">PHASE 01: WONDER</span>
            </div>

            <div className="wonder-hero-icon-wrap" aria-hidden="true">
              <span className="wonder-stadium-icon">⚖️</span>
            </div>

            <h1 className="wonder-title">The Big Mass Mystery!</h1>

            <div className="wonder-mascot-row">
              <Mascot
                mood="curious"
                message="Let's investigate how balance scales, grams, and kilograms work!"
                size="sm"
              />
            </div>
          </div>

          {/* Right Column: Mystery Clues & CTA */}
          <div className="wonder-col-right">
            <div className="wonder-number-display">
              <div className="wonder-formula-label">⚡ Mystery Formula:</div>
              <span className="wonder-num">1 kg = 1000 g ➔ 500 g + 250 g = 750 g ➔ 1 kg?</span>
            </div>

            <div className="wonder-question-card">
              <p className="wonder-q">
                Sophie has a bag of apples and Max has a balance scale at the market stall…
              </p>
              <p className="wonder-q">
                When the apples go on the left pan, <strong className="wonder-em">why does that side sink down</strong>, and exactly <span className="wonder-highlight">how many grams equal 1 kilogram</span>?
              </p>
            </div>

            <button
              id="start-investigation-btn"
              className="btn btn-primary wonder-cta"
              onClick={handleInvestigate}
            >
              Start Investigation 🔍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
