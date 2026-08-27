// src/components/gamification/KingdomMap.jsx
import React from 'react';
import './KingdomMap.css';
import { DISTRICTS } from '../../data/questionBank.js';
import { calcStars } from '../../utils/scoring.js';

export default function KingdomMap({ districtScores, districtCorrect, currentDistrict, onSelectDistrict }) {
  return (
    <div className="kmap-container">
      <div className="kmap-grid">
        {DISTRICTS.map((d, i) => {
          const isCurrent = i === currentDistrict;
          const score = districtScores[i];
          const isDone = score !== null && score !== undefined;
          const correct = districtCorrect[i] || 0;
          const stars = isDone ? calcStars(score) : 0;

          let statusCls = 'locked';
          if (isDone) statusCls = 'completed';
          else if (isCurrent || i <= currentDistrict) statusCls = 'active';

          return (
            <div
              key={d.id}
              className={`kmap-node ${statusCls}`}
              onClick={() => (statusCls !== 'locked') && onSelectDistrict(i)}
              role="button"
              tabIndex={0}
              title={`World ${i + 1}: ${d.name}`}
            >
              <div className="kmap-icon-circle">
                <span>{d.icon}</span>
              </div>
              <div className="kmap-name">
                W{i + 1}: {d.name}
              </div>
              {isDone ? (
                <div className="kmap-stars">
                  {'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}
                </div>
              ) : (
                <div className="kmap-progress-text">
                  {isCurrent ? `${correct}/10 Done` : 'Available'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
