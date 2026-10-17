import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Award, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">CAREER JOURNEY & IMPACT</div>
          <h2 className="section-title">
            EXPERIENCE & RECOGNITION.
          </h2>
          <p className="section-subtitle">
            4.9+ years delivering enterprise-grade web engineering, leading portal migrations, and maintaining zero-defect production records.
          </p>
        </div>

        {/* Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4.5rem' }}>
          {portfolioData.experience.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.7) 0%, rgba(10, 15, 26, 0.85) 100%)',
                position: 'relative',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <span className="pill-badge" style={{ borderColor: '#38bdf8', color: '#38bdf8' }}>
                      {item.type}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#94a3b8' }}>
                      {item.company}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
                      fontWeight: '800',
                      color: '#fff',
                    }}
                  >
                    {item.role}
                  </h3>
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: '600' }}>
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem' }}>
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {item.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#38bdf8', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.65' }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Education Double Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Awards Card */}
          <div
            className="glass-panel"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(20, 15, 30, 0.7) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Award size={22} style={{ color: '#fbbf24' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>
                Honors & Recognition
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {portfolioData.awards.map((award, aIdx) => (
                <div
                  key={aIdx}
                  style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <div style={{ fontWeight: '700', color: '#fef08a', fontSize: '0.98rem' }}>
                      {award.title}
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#94a3b8' }}>
                      TCS
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5' }}>
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div
            className="glass-panel"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(10, 20, 30, 0.7) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GraduationCap size={22} style={{ color: '#38bdf8' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>
                Academic Foundation
              </h3>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                {portfolioData.education.degree}
              </div>
              <div style={{ color: '#38bdf8', fontSize: '0.9rem', marginBottom: '0.35rem', fontWeight: '500' }}>
                {portfolioData.education.institution}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748b', marginBottom: '1rem' }}>
                GRADUATION PERIOD: {portfolioData.education.period}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.55' }}>
                {portfolioData.education.highlights}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
