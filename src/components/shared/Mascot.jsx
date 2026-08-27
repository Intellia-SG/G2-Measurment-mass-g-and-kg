// src/components/shared/Mascot.jsx
import React from 'react';
import './Mascot.css';

export default function Mascot({ mood = 'curious', message, size = 'md' }) {
  const emoji = mood === 'celebrating' ? '🏆' : mood === 'thinking' ? '🤔' : mood === 'excited' ? '✨' : '🧲';

  return (
    <div className={`mascot-wrap size-${size}`}>
      <div className="mascot-avatar">
        <span className="mascot-face" role="img" aria-label="Weighty the Mascot">
          {emoji}
        </span>
      </div>
      {message && (
        <div className="mascot-bubble">
          <p className="mascot-text">{message}</p>
        </div>
      )}
    </div>
  );
}
