import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Mail, GitBranch, Database, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const InsideBuild = () => {
  const [activeStep, setActiveStep] = useState(0);

  const strideSteps = [
    {
      num: '01',
      title: 'Start with the interface.',
      subtitle: 'React and Vite shape the user focus.',
      color: '#2563eb',
      badgeClass: 'chip-blue',
      description:
        'Engineered an interactive productivity dashboard with hierarchical goal, task, and subtask tracking, customizable goal templates, an integrated Pomodoro focus timer, and calendar timeline views.',
      tech: ['React 18', 'Vite', 'Component Modularity', 'Context API', 'Responsive CSS'],
      icon: <Clock size={20} style={{ color: '#2563eb' }} />,
    },
    {
      num: '02',
      title: 'Access has a structure.',
      subtitle: 'JWT auth, password recovery, and TOTP 2FA.',
      color: '#059669',
      badgeClass: 'chip-emerald',
      description:
        'Secured application routes with cryptographic JSON Web Tokens, email-based password recovery, and Time-based One-Time Password (TOTP) two-factor authentication, hardened by rate limiting and centralized error middleware.',
      tech: ['JWT Sessions', 'TOTP 2FA', 'Bcrypt Hashing', 'Rate Limiting', 'CORS & Helmet'],
      icon: <ShieldCheck size={20} style={{ color: '#059669' }} />,
    },
    {
      num: '03',
      title: 'The interface connects to data.',
      subtitle: 'Express REST APIs and MongoDB document trees.',
      color: '#7c3aed',
      badgeClass: 'chip-purple',
      description:
        'Designed modular RESTful endpoints and schema relationships across users, goals, hierarchical subtasks, tags, comments, and real-time user notification queues.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'Data Indexing'],
      icon: <Database size={20} style={{ color: '#7c3aed' }} />,
    },
    {
      num: '04',
      title: 'Actionable background automation.',
      subtitle: 'node-cron jobs and Brevo email delivery.',
      color: '#d97706',
      badgeClass: 'chip-amber',
      description:
        'Built scheduled background cron workers that calculate daily goal streaks, generate weekly digest summaries, and dispatch transactional emails via Brevo integration.',
      tech: ['node-cron', 'Brevo API', 'Automated Digest', 'Background Workers'],
      icon: <Mail size={20} style={{ color: '#d97706' }} />,
    },
    {
      num: '05',
      title: 'Automated continuous delivery.',
      subtitle: 'GitHub Actions CI pipeline and Render hosting.',
      color: '#0891b2',
      badgeClass: 'chip-cyan',
      description:
        'Configured a production CI pipeline running automated lint checks and frontend bundle tests on every git push, deployed seamlessly to Render with zero-downtime rollouts.',
      tech: ['GitHub Actions', 'CI/CD Pipeline', 'Render Hosting', 'Zero Downtime'],
      icon: <GitBranch size={20} style={{ color: '#0891b2' }} />,
    },
  ];

  const current = strideSteps[activeStep];

  return (
    <section id="inside-build" style={{ padding: '6rem 0', borderTop: '1px solid #e2e8f0', background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
          <div className="section-kicker">
            <Sparkles size={14} />
            <span>Inside a live build</span>
          </div>
          <h2 className="section-heading">
            STRIDE, <span className="gradient-text-brand">beyond the surface.</span>
          </h2>
          <p className="section-intro">
            A production-ready full-stack productivity ecosystem, from its modular React interface to 2FA security, MongoDB relational trees, and automated cron background workers.
          </p>
        </div>

        {/* Step Selector Pills with Colors */}
        <div
          style={{
            display: 'flex',
            gap: '0.6rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2rem',
          }}
        >
          {strideSteps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              style={{
                position: 'relative',
                padding: '0.55rem 1.15rem',
                borderRadius: '9999px',
                border: activeStep === idx ? `1.5px solid ${step.color}` : '1px solid #e2e8f0',
                background: activeStep === idx ? '#ffffff' : 'rgba(255,255,255,0.7)',
                color: activeStep === idx ? step.color : '#475569',
                fontSize: '0.84rem',
                fontWeight: '700',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: activeStep === idx ? `0 4px 15px ${step.color}25` : '0 1px 3px rgba(0,0,0,0.03)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: step.color, display: 'inline-block' }} />
              <span>{step.num} · {step.title.replace('.', '')}</span>
            </button>
          ))}
        </div>

        {/* Interactive Step Container */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3.25rem)',
            background: '#ffffff',
            border: `1.5px solid ${current.color}40`,
            boxShadow: `0 15px 35px -5px ${current.color}15, 0 5px 15px rgba(0,0,0,0.04)`,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Detail */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: `${current.color}15`,
                    border: `1px solid ${current.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {current.icon}
                </div>
                <span className={current.badgeClass} style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
                  LAYER {current.num} OF 05
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                  fontWeight: '800',
                  color: '#0f172a',
                  lineHeight: '1.2',
                  marginBottom: '0.4rem',
                }}
              >
                {current.title}
              </h3>

              <div style={{ fontSize: '1.05rem', color: current.color, fontWeight: '700', marginBottom: '1.25rem' }}>
                {current.subtitle}
              </div>

              <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                {current.description}
              </p>

              {/* Tech Tags for this layer */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {current.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '0.35rem 0.8rem',
                      borderRadius: '8px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#1e293b',
                      fontWeight: '600',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://stride-qd71.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-vibrant"
                  style={{ padding: '0.7rem 1.4rem', fontSize: '0.88rem' }}
                >
                  <span>Visit Live STRIDE</span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href="https://github.com/manoj633/stride"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass"
                  style={{ padding: '0.7rem 1.4rem', fontSize: '0.88rem' }}
                >
                  <GithubIcon size={16} />
                  <span>View Source Code</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Architectural Spec Box with syntax highlighting */}
            <div
              style={{
                background: '#090d16',
                color: '#f8fafc',
                borderRadius: '16px',
                padding: '1.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                border: '1px solid #1e293b',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #1e293b',
                  paddingBottom: '0.85rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ marginLeft: '0.5rem', color: '#cbd5e1' }}>stride-architecture.ts</span>
                </div>
                <span style={{ color: '#34d399', fontWeight: '700' }}>✓ 100% PRODUCTION READY</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', lineHeight: '1.6' }}>
                <div>
                  <span style={{ color: '#38bdf8' }}>interface</span> <span style={{ color: '#fde047' }}>StrideArchitecture</span> {'{'}
                </div>
                <div style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                  activeLayer: <span style={{ color: '#34d399' }}>"{current.num} - {current.title.replace('.', '')}"</span>;
                </div>
                <div style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                  frontend: <span style={{ color: '#38bdf8' }}>"React + Vite + Modular Context API"</span>;
                </div>
                <div style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                  security: <span style={{ color: '#f43f5e' }}>"JWT + 2FA TOTP + IP Rate Limiter"</span>;
                </div>
                <div style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                  database: <span style={{ color: '#a78bfa' }}>"MongoDB Relational Subtask Trees"</span>;
                </div>
                <div style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                  automation: <span style={{ color: '#fbbf24' }}>"node-cron + Brevo Email Engine"</span>;
                </div>
                <div style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                  delivery: <span style={{ color: '#38bdf8' }}>{'"GitHub Actions CI \u2192 Render"'}</span>;
                </div>
                <div>{'}'}</div>

                <div style={{ marginTop: '0.75rem', paddingTop: '0.85rem', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '0.76rem' }}>
                  // Solo-architected, coded, and maintained by Manoj M
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
