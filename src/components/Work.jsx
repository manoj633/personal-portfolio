import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Cpu, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Work = ({ onOpenInsideBuild }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { label: 'All', id: 'All' },
    { label: 'Full-Stack Product', id: 'Full-Stack Product' },
    { label: 'Enterprise & AI', id: 'Enterprise & AI' },
    { label: 'Client Work', id: 'Client & Business Platform' },
    { label: 'Enterprise Portals', id: 'Enterprise Portals' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  // Bespoke color accents and visual mockups for each project
  const projectStyles = {
    stride: {
      gradient: 'linear-gradient(135deg, rgba(238, 242, 255, 0.7) 0%, rgba(240, 249, 255, 0.5) 100%)',
      border: 'rgba(99, 102, 241, 0.35)',
      accentColor: '#4f46e5',
      badgeClass: 'chip-indigo',
      preview: (
        <div style={{ background: '#ffffff', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid #e0e7ff', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4f46e5', fontWeight: '700' }}>
              LIVE STRIDE DASHBOARD
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: '#059669', background: '#ecfdf5', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: '600' }}>
              ● 2FA Verified
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#1e293b', fontWeight: '600' }}>
              <span>Focus Target: Goal Tree Architecture</span>
              <span style={{ color: '#2563eb' }}>100%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#64748b', marginTop: '0.2rem' }}>
              <span>⏱ Pomodoro Timer: 25:00</span>
              <span>📧 node-cron Weekly Digest</span>
            </div>
          </div>
        </div>
      ),
    },
    protorev3d: {
      gradient: 'linear-gradient(135deg, rgba(254, 243, 199, 0.6) 0%, rgba(255, 237, 213, 0.4) 100%)',
      border: 'rgba(245, 158, 11, 0.35)',
      accentColor: '#d97706',
      badgeClass: 'chip-amber',
      preview: (
        <div style={{ background: '#ffffff', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid #fed7aa', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#d97706', fontWeight: '700' }}>
              CAD & 3D PROTOTYPING ENGINE
            </span>
            <span style={{ fontSize: '0.7rem', color: '#b45309', background: '#fffbeb', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: '600' }}>
              High Lighthouse Score
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.25rem 0.5rem', background: '#fef3c7', borderRadius: '6px', fontSize: '0.72rem', color: '#92400e', fontWeight: '600' }}>
              3D SLA/SLS Printing
            </span>
            <span style={{ padding: '0.25rem 0.5rem', background: '#ffedd5', borderRadius: '6px', fontSize: '0.72rem', color: '#9a3412', fontWeight: '600' }}>
              Precision CNC Machining
            </span>
            <span style={{ padding: '0.25rem 0.5rem', background: '#fee2e2', borderRadius: '6px', fontSize: '0.72rem', color: '#991b1b', fontWeight: '600' }}>
              Instant RFQ Quotes
            </span>
          </div>
        </div>
      ),
    },
    'wlms-rag': {
      gradient: 'linear-gradient(135deg, rgba(236, 253, 245, 0.7) 0%, rgba(240, 253, 250, 0.5) 100%)',
      border: 'rgba(16, 185, 129, 0.35)',
      accentColor: '#059669',
      badgeClass: 'chip-emerald',
      preview: (
        <div style={{ background: '#ffffff', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid #a7f3d0', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#059669', fontWeight: '700' }}>
              AI RAG VECTOR RETRIEVAL (TCS)
            </span>
            <span style={{ fontSize: '0.7rem', color: '#047857', background: '#d1fae5', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: '600' }}>
              Cosine Match: 98.6%
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#334155', background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', lineHeight: '1.5' }}>
            <div>&lt;WorkflowSchema CaseID="Historical-4902"&gt;</div>
            <div style={{ paddingLeft: '1rem', color: '#059669' }}>// Automated XML Generation (Zero Manual Errors)</div>
          </div>
        </div>
      ),
    },
    'british-telecom': {
      gradient: 'linear-gradient(135deg, rgba(239, 246, 255, 0.7) 0%, rgba(245, 243, 255, 0.5) 100%)',
      border: 'rgba(59, 130, 246, 0.35)',
      accentColor: '#2563eb',
      badgeClass: 'chip-blue',
      preview: (
        <div style={{ background: '#ffffff', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid #bfdbfe', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#2563eb', fontWeight: '700' }}>
              BRITISH TELECOM PORTAL ECOSYSTEM
            </span>
            <span style={{ fontSize: '0.7rem', color: '#1d4ed8', background: '#dbeafe', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: '600' }}>
              PCI-DSS Compliant
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#334155', fontWeight: '600' }}>
            <span>• -26% Device Faults</span>
            <span>• +37% Turnaround</span>
            <span>• +25% Booking Lift</span>
          </div>
        </div>
      ),
    },
  };

  return (
    <section id="work" style={{ padding: '6rem 0', borderTop: '1px solid #e2e8f0' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="section-kicker">
              <Sparkles size={14} />
              <span>The work · 4 featured systems</span>
            </div>
            <h2 className="section-heading">
              Built to solve real problems.
            </h2>
            <p className="section-intro">
              From solo-engineered full-stack platforms with background automation to enterprise AI vector pipelines and high-converting client applications.
            </p>
          </div>

          {/* Filter Pills with animated active pill */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  position: 'relative',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: activeFilter === f.id ? '1px solid #2563eb' : '1px solid #e2e8f0',
                  background: activeFilter === f.id ? '#2563eb' : '#ffffff',
                  color: activeFilter === f.id ? '#ffffff' : '#475569',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === f.id ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const style = projectStyles[project.id] || projectStyles.stride;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card"
                  style={{
                    padding: 'clamp(2rem, 3.8vw, 3rem)',
                    border: `1.5px solid ${style.border}`,
                    background: style.gradient,
                  }}
                >
                  {/* Top Row: Index, Category & Role Badge */}
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
                          fontSize: '1.3rem',
                          fontWeight: '800',
                          color: style.accentColor,
                        }}
                      >
                        {project.number}
                      </span>

                      <span
                        className={style.badgeClass}
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {project.category}
                      </span>

                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.2rem 0.65rem',
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '9999px',
                          fontSize: '0.74rem',
                          fontWeight: '600',
                          color: '#0f172a',
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                        <span>{project.type}</span>
                      </span>
                    </div>

                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748b' }}>
                      VERIFIED PRODUCTION BUILD
                    </div>
                  </div>

                  {/* 2-Column: Details on Left, Visual Mockup Box on Right */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '2.5rem',
                      alignItems: 'center',
                      marginBottom: '2rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                          fontWeight: '800',
                          color: '#0f172a',
                          lineHeight: '1.15',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {project.title}
                      </h3>

                      <div style={{ fontSize: '1.05rem', color: style.accentColor, fontWeight: '600', marginBottom: '1rem' }}>
                        {project.subtitle}
                      </div>

                      <p
                        style={{
                          fontSize: '0.96rem',
                          color: '#475569',
                          lineHeight: '1.65',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {project.summary}
                      </p>

                      {/* Bullet Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {project.highlights.slice(0, 2).map((h, hIdx) => (
                          <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                            <CheckCircle2 size={16} style={{ color: style.accentColor, marginTop: '3px', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.88rem', color: '#1e293b', lineHeight: '1.55' }}>
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Visual Interactive Mockup Card */}
                    <div>
                      {style.preview}
                    </div>
                  </div>

                  {/* Bottom Row: Tech Chips & Action Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '1.25rem',
                      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                      paddingTop: '1.5rem',
                    }}
                  >
                    {/* Tech Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', maxWidth: '650px' }}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.3rem 0.75rem',
                            borderRadius: '8px',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            color: '#1e293b',
                            fontWeight: '600',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <a
                        href="#inside-build"
                        onClick={() => onOpenInsideBuild(project.id)}
                        className="btn-glass"
                        style={{ padding: '0.65rem 1.3rem', fontSize: '0.85rem' }}
                      >
                        <span>Inside the build</span>
                        <ArrowUpRight size={15} />
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-vibrant"
                          style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
                        >
                          <span>Visit Live</span>
                          <ExternalLink size={15} />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glass"
                          style={{
                            padding: '0.65rem 0.95rem',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
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
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
