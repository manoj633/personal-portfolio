import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Code2, Layers, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack Product', 'Enterprise & AI', 'Client & Business Platform', 'Enterprise Portals'];

  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="section-tag">SELECTED WORKS & CASE STUDIES</div>
            <h2 className="section-title">
              CRAFTED WITH PRECISION.
            </h2>
            <p className="section-subtitle">
              From solo-architected full-stack ecosystems to enterprise AI RAG pipelines and high-converting client platforms.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  border: filter === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: filter === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: filter === cat ? '#38bdf8' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.7) 0%, rgba(10, 15, 26, 0.85) 100%)',
              }}
            >
              {/* Top Row: Index number & Category */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      color: project.accent,
                    }}
                  >
                    {project.number}
                  </span>
                  <span className="pill-badge" style={{ borderColor: project.accent, color: project.accent }}>
                    {project.category}
                  </span>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748b' }}>
                  ROLE: <span style={{ color: '#cbd5e1' }}>{project.type}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                    fontWeight: '800',
                    color: '#fff',
                    lineHeight: '1.15',
                    marginBottom: '0.6rem',
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#38bdf8', fontWeight: '500' }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Summary Description */}
              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  maxWidth: '920px',
                }}
              >
                {project.summary}
              </p>

              {/* Key Deliverables Bullet Points */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                  padding: '1.25rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {project.highlights.slice(0, 2).map((item, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: project.accent, fontSize: '0.9rem', lineHeight: '1.6' }}>✦</span>
                    <span style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Row: Tech Stack Pills & Action CTAs */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '1.75rem',
                }}
              >
                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', maxWidth: '650px' }}>
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#94a3b8',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span
                      style={{
                        padding: '0.35rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#64748b',
                      }}
                    >
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn-secondary"
                    style={{
                      padding: '0.7rem 1.3rem',
                      fontSize: '0.88rem',
                    }}
                  >
                    <span>Architecture Deep Dive</span>
                    <ChevronRight size={15} />
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        padding: '0.7rem 1.4rem',
                        fontSize: '0.88rem',
                      }}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        padding: '0.7rem 1rem',
                        borderRadius: '50%',
                        width: '42px',
                        height: '42px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={17} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
