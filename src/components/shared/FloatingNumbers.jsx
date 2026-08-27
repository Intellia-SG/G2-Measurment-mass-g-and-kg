// src/components/shared/FloatingNumbers.jsx
import React, { useMemo } from 'react';
import './FloatingNumbers.css';

const SYMBOLS = ['⚖️', '1 kg', '1000 g', '500 g', '250 g', '🍎', '🏋️', '📦', '🧁', '🍬', 'g', 'kg', '✨', '⭐'];

export default function FloatingNumbers() {
  const items = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      left: `${(i * 5.6 + 3) % 94}%`,
      top: `${(i * 7.2 + 5) % 90}%`,
      duration: `${14 + (i % 6) * 3}s`,
      delay: `${(i * 0.7) % 5}s`,
      size: `${0.9 + (i % 4) * 0.25}rem`,
      opacity: 0.08 + (i % 3) * 0.04,
    }));
  }, []);

  return (
    <div className="floating-symbols-layer" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-symbol-item"
          style={{
            left: item.left,
            top: item.top,
            animationDuration: item.duration,
            animationDelay: item.delay,
            fontSize: item.size,
            opacity: item.opacity,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}
