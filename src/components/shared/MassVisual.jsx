// src/components/shared/MassVisual.jsx
import React from 'react';

export default function MassVisual({ type, data, compact = false }) {
  if (!data) return null;

  // 1. Balance Scale SVG
  if (type === 'balance') {
    const tilt = data.tilt === 'left' ? -12 : data.tilt === 'right' ? 12 : 0;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4px auto', maxWidth: 280, width: '100%' }}>
        <svg viewBox="0 0 240 140" style={{ width: '100%', height: 'auto', display: 'block' }}>
          {/* Base and stand */}
          <rect x="90" y="125" width="60" height="10" rx="5" fill="rgba(255,255,255,0.25)" />
          <rect x="117" y="45" width="6" height="85" rx="3" fill="rgba(255,255,255,0.35)" />
          <circle cx="120" cy="45" r="7" fill="#f59e0b" />

          {/* Tilting Arm */}
          <g transform={`rotate(${tilt} 120 45)`} style={{ transition: 'transform 0.4s ease' }}>
            <rect x="35" y="43" width="170" height="5" rx="2.5" fill="rgba(200,180,255,0.7)" />

            {/* Left Pan */}
            <line x1="55" y1="45" x2="45" y2="85" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <line x1="55" y1="45" x2="65" y2="85" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <ellipse cx="55" cy="87" rx="26" ry="6" fill="rgba(124,92,191,0.6)" stroke="#a78bfa" strokeWidth="1.2" />

            {/* Right Pan */}
            <line x1="185" y1="45" x2="175" y2="85" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <line x1="185" y1="45" x2="195" y2="85" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <ellipse cx="185" cy="87" rx="26" ry="6" fill="rgba(124,92,191,0.6)" stroke="#a78bfa" strokeWidth="1.2" />
          </g>
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.85rem', fontWeight: 800, color: '#fcd34d', padding: '0 8px' }}>
          <span>{data.leftItem || 'Left'}</span>
          <span>{data.rightItem || 'Right'}</span>
        </div>
      </div>
    );
  }

  // 2. Dial Spring Scale SVG
  if (type === 'dial_scale') {
    const val = data.value || 500;
    const max = data.dialMax || 1000;
    const angle = -135 + (val / max) * 270;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4px', margin: '0 auto' }}>
        <svg viewBox="0 0 120 120" style={{ width: '90px', height: '90px', display: 'block' }}>
          {/* Dial Face */}
          <circle cx="60" cy="60" r="54" fill="rgba(26,20,68,0.9)" stroke="rgba(245,158,11,0.6)" strokeWidth="3" />
          {/* Graduation ticks */}
          {[0, 45, 90, 135, 180, 225, 270].map((deg, i) => (
            <line
              key={i}
              x1="60"
              y1="12"
              x2="60"
              y2="18"
              stroke="#cbd5e1"
              strokeWidth="2"
              transform={`rotate(${deg - 135} 60 60)`}
            />
          ))}
          {/* Center needle */}
          <circle cx="60" cy="60" r="5" fill="#f59e0b" />
          <line
            x1="60"
            y1="60"
            x2="60"
            y2="20"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform={`rotate(${angle} 60 60)`}
            style={{ transition: 'transform 0.4s ease' }}
          />
        </svg>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gold)', fontSize: '0.92rem', marginTop: '2px' }}>
          Dial: {val} {data.unit || 'g'}
        </span>
      </div>
    );
  }

  // 3. Digital Scale LCD
  if (type === 'digital_scale') {
    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', padding: '6px 14px', background: 'rgba(20,20,40,0.85)', borderRadius: '12px', border: '1.5px solid rgba(56,189,248,0.4)' }}>
        <span style={{ fontSize: '1.2rem' }}>⚖️</span>
        <span style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 900, color: '#38bdf8', letterSpacing: '1px' }}>
          {data.display || `${data.value} g`}
        </span>
      </div>
    );
  }

  // 4. Converter badge
  if (type === 'converter') {
    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', padding: '6px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '14px', border: '1.5px solid rgba(255,213,79,0.4)' }}>
        <span style={{ fontSize: '1.2rem' }}>🔄</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#ffd54f' }}>
          {data.kg !== undefined ? `${data.kg} kg ➔ ${data.g} g` : data.mixed || data.rule}
        </span>
      </div>
    );
  }

  // 5. Comparison or Addition Pill
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '6px 12px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)' }}>
      {data.itemA && <span style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid #f59e0b', padding: '4px 10px', borderRadius: '14px', fontWeight: 800, fontSize: '0.9rem' }}>{data.itemA}</span>}
      {data.itemB && <span style={{ background: 'rgba(124,92,191,0.2)', border: '1px solid #7c5cbf', padding: '4px 10px', borderRadius: '14px', fontWeight: 800, fontSize: '0.9rem' }}>{data.itemB}</span>}
      {data.items && <span style={{ fontWeight: 800, color: 'var(--gold)', fontSize: '0.92rem' }}>{data.items}</span>}
      {data.ordered && <span style={{ fontWeight: 800, color: '#4ade80', fontSize: '0.9rem' }}>Order: {data.ordered}</span>}
    </div>
  );
}
