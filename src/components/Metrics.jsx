import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Zap, ShieldCheck, Activity } from 'lucide-react';

export const Metrics = () => {
  const icons = [
    <Activity size={22} style={{ color: '#38bdf8' }} />,
    <ShieldCheck size={22} style={{ color: '#818cf8' }} />,
    <Zap size={22} style={{ color: '#34d399' }} />,
    <Award size={22} style={{ color: '#f59e0b' }} />,
  ];

  return (
    <section style={{ padding: '3.5rem 0 5rem' }}>
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {portfolioData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.2rem 1.8rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(15, 20, 31, 0.65)',
              }}
            >
              {/* Subtle accent corner glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: idx === 0 ? 'rgba(56, 189, 248, 0.15)' : idx === 1 ? 'rgba(129, 140, 248, 0.15)' : idx === 2 ? 'rgba(52, 211, 153, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                  filter: 'blur(25px)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {icons[idx]}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  METRIC_0{idx + 1}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.2rem',
                  fontWeight: '800',
                  lineHeight: '1',
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.5rem',
                }}
              >
                {metric.value}
              </div>

              <div
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: '#e2e8f0',
                  marginBottom: '0.35rem',
                }}
              >
                {metric.label}
              </div>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.5',
                }}
              >
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
