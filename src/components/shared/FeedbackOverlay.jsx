// src/components/shared/FeedbackOverlay.jsx
import React from 'react';
import './FeedbackOverlay.css';

export default function FeedbackOverlay({ isCorrect, explanation, onContinue }) {
  return (
    <div className="feedback-overlay-backdrop">
      <div className={`feedback-overlay-card glass-card ${isCorrect ? 'is-correct' : 'is-incorrect'} anim-bounce-in`}>
        <div className="feedback-icon-circle">
          <span>{isCorrect ? '🎉' : '💡'}</span>
        </div>
        <h3 className="feedback-title">
          {isCorrect ? 'Brilliant! That\'s Correct!' : 'Not Quite! Here\'s Why:'}
        </h3>
        {explanation && <p className="feedback-explanation">{explanation}</p>}
        <button
          className={`btn ${isCorrect ? 'btn-green' : 'btn-primary'} feedback-continue-btn`}
          onClick={onContinue}
          autoFocus
        >
          {isCorrect ? 'Continue →' : 'Got It! Next →'}
        </button>
      </div>
    </div>
  );
}
