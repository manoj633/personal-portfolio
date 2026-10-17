import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export const Recognition = () => {
  const recognitionItems = [
    {
      podium: '1st',
      period: 'TCS Enterprise Delivery',
      org: 'Tata Consultancy Services',
      title: 'Best Team Award',
      detail: 'Awarded for delivering mission-critical applications well before the deadline with zero production defects across 3 consecutive quarters.',
      badge: 'Zero Defect Record',
      accentColor: '#f59e0b',
      border: 'rgba(245, 158, 11, 0.35)',
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.5) 100%)',
      badgeClass: 'chip-amber',
    },
    {
      podium: '1st',
      period: 'Quarter 1 Recognition',
      org: 'Tata Consultancy Services',
      title: 'TCS On-the-Spot Award',
      detail: 'Recognized for excellent defect-free development and proactive engineering contributions in WLMS.',
      badge: 'Defect-free Code',
      accentColor: '#10b981',
      border: 'rgba(16, 185, 129, 0.35)',
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(236,253,245,0.5) 100%)',
      badgeClass: 'chip-emerald',
    },
    {
      podium: '1st',
      period: 'Quarter 2 Recognition',
      org: 'Tata Consultancy Services',
      title: 'TCS On-the-Spot Award',
      detail: 'Recognized for equipment portal delivery cutting incident returns by 26% and boosting turnaround by 37%.',
      badge: 'Incident Drop',
      accentColor: '#2563eb',
      border: 'rgba(37, 99, 235, 0.35)',
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(239,246,255,0.5) 100%)',
      badgeClass: 'chip-blue',
    },
    {
      podium: '1st',
      period: 'Quarter 3 Recognition',
      org: 'Tata Consultancy Services',
      title: 'TCS On-the-Spot Award',
      detail: 'Recognized for leading frontend migrations from Angular to React and cutting PR review cycles by 25%.',
      badge: 'React Migration',
      accentColor: '#8b5cf6',
      border: 'rgba(139, 92, 246, 0.35)',
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,243,255,0.5) 100%)',
      badgeClass: 'chip-purple',
    },
  ];

  return (
    <section id="awards" style={{ padding: '6rem 0', borderTop: '1px solid #e2e8f0', background: '#f8fafc' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-kicker">
            <Trophy size={14} />
            <span>Recognition</span>
          </div>
          <h2 className="section-heading">
            Production <span className="gradient-text-sunset">podiums & honors.</span>
          </h2>
          <p className="section-intro">
            Consistent recognition for high code velocity, zero-defect production delivery, and proactive leadership across enterprise teams.
          </p>
        </div>

        {/* 4 Clean Podium Cards with vibrant gradient badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {recognitionItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="glass-card"
              style={{
                padding: '2rem',
                border: `1.5px solid ${item.border}`,
                background: item.bg,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      background: item.accentColor,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      boxShadow: `0 3px 10px ${item.accentColor}40`,
                    }}
                  >
                    {item.podium}
                  </div>

                  <span
                    className={item.badgeClass}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.4rem' }}>
                  {item.period} · {item.org}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginTop: '0.5rem' }}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
