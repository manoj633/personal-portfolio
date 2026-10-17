import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Shield, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        backgroundColor: 'rgba(4, 6, 12, 0.85)',
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
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#0a0e17',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: 'clamp(1.75rem, 4vw, 2.75rem)',
          position: 'relative',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '2rem', paddingRight: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="pill-badge" style={{ borderColor: project.accent, color: project.accent }}>
              {project.number} // {project.category}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748b' }}>
              TYPE: {project.type}
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: '800',
              color: '#fff',
              lineHeight: '1.15',
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.6' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Visit Live Application</span>
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={17} />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
            Technologies & Tools Employed
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#e2e8f0',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview Summary */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Architecture & Solution Overview
          </div>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.75' }}>
            {project.summary}
          </p>
        </div>

        {/* Key Engineering Deliverables / Highlights */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Key Engineering Highlights & Impact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <CheckCircle2 size={18} style={{ color: project.accent || '#38bdf8', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
