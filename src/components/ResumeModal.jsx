import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyResumeText = () => {
    const text = `
Manoj M
Email: ${portfolioData.personal.email} | Phone: ${portfolioData.personal.phone}
GitHub: ${portfolioData.personal.github} | LinkedIn: ${portfolioData.personal.linkedin}

PROFESSIONAL SUMMARY
${portfolioData.personal.summary}

SKILLS
${portfolioData.skillCategories.map(c => `${c.category}: ${c.skills.join(', ')}`).join('\n')}

WORK EXPERIENCE
${portfolioData.experience.map(e => `${e.role} — ${e.company} (${e.period})\n${e.keyPoints.map(p => `• ${p}`).join('\n')}`).join('\n\n')}

PROJECTS
${portfolioData.projects.map(p => `${p.title} (${p.category})\nStack: ${p.technologies.join(', ')}\n${p.highlights.map(h => `• ${h}`).join('\n')}`).join('\n\n')}

AWARDS
${portfolioData.awards.map(a => `• ${a.title}: ${a.description}`).join('\n')}

EDUCATION
${portfolioData.education.degree} — ${portfolioData.education.institution} (${portfolioData.education.period})
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9995,
        backgroundColor: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '880px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#0a0e17',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          position: 'relative',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.85)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1rem',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-dot" style={{ width: '8px', height: '8px' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#34d399', fontWeight: '600' }}>
              IMMEDIATE JOINER • VERIFIED RESUME
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={handleCopyResumeText}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
              title="Copy plain text resume"
            >
              {copied ? <Check size={14} style={{ color: '#34d399' }} /> : <Copy size={14} />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.015)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: '#fff', marginBottom: '0.4rem' }}>
              {portfolioData.personal.name}
            </h1>
            <div style={{ color: '#38bdf8', fontWeight: '600', fontSize: '1.05rem', marginBottom: '0.75rem' }}>
              {portfolioData.personal.role} • Immediate Joiner
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#94a3b8' }}>
              <span>✉ {portfolioData.personal.email}</span>
              <span>☎ {portfolioData.personal.phone}</span>
              <span>📍 {portfolioData.personal.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              // PROFESSIONAL SUMMARY
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.65' }}>
              {portfolioData.personal.summary}
            </p>
          </div>

          {/* Core Skills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
              // TECHNICAL SKILLS & DOMAINS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {portfolioData.skillCategories.map(c => (
                <div key={c.category} style={{ fontSize: '0.88rem' }}>
                  <strong style={{ color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>{c.category}: </strong>
                  <span style={{ color: '#94a3b8' }}>{c.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
              // WORK EXPERIENCE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {portfolioData.experience.map((e, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>
                      {e.role} — <span style={{ color: '#38bdf8' }}>{e.company}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8' }}>
                      {e.period}
                    </div>
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {e.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.55' }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
              // KEY PROJECTS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {portfolioData.projects.map((p, pIdx) => (
                <div key={pIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>
                      {p.title} <span style={{ color: '#64748b', fontSize: '0.85rem' }}>({p.category})</span>
                    </div>
                    {p.demoUrl && (
                      <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                        Visit Link ↗
                      </a>
                    )}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94a3b8', margin: '0.2rem 0 0.4rem' }}>
                    Stack: {p.technologies.join(' • ')}
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {p.highlights.slice(0, 3).map((hl, hlIdx) => (
                      <li key={hlIdx} style={{ color: '#cbd5e1', fontSize: '0.83rem', lineHeight: '1.5' }}>
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Education */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#fbbf24', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                // AWARDS & HONORS
              </div>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {portfolioData.awards.map((a, aIdx) => (
                  <li key={aIdx} style={{ color: '#cbd5e1', fontSize: '0.83rem' }}>
                    <strong style={{ color: '#fef08a' }}>{a.title}:</strong> {a.description}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                // EDUCATION
              </div>
              <div style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: '600' }}>
                {portfolioData.education.degree}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                {portfolioData.education.institution} ({portfolioData.education.period})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
