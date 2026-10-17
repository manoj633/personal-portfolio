import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Terminal, Code2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export const Method = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Define',
      color: '#2563eb',
      bgGlow: 'rgba(37, 99, 235, 0.08)',
      borderColor: '#93c5fd',
      desc: 'Understand the business problem, user workflows, edge cases, and scope.',
      detail: 'Clarify data models, user journeys, and technical constraints before writing a single line of code.',
      checklist: ['Map user flows & edge cases', 'Define normalized data contracts', 'Identify performance bottlenecks early'],
    },
    {
      num: '02',
      title: 'Architect',
      color: '#7c3aed',
      bgGlow: 'rgba(124, 58, 237, 0.08)',
      borderColor: '#c4b5fd',
      desc: 'Plan component hierarchies, state management, API contracts, and vector pipelines.',
      detail: 'Design clean separation between UI components, business logic, caching layers, and backend services.',
      checklist: ['Atomic component decomposition', 'State strategy: Context vs Redux', 'OpenAI & Pinecone schema design'],
    },
    {
      num: '03',
      title: 'Build',
      color: '#0891b2',
      bgGlow: 'rgba(8, 145, 178, 0.08)',
      borderColor: '#a5f3fc',
      desc: 'Use AI to accelerate boilerplate, then write production-grade React & TypeScript.',
      detail: 'Implement responsive layouts, accessible component patterns, and resilient REST/vector integrations.',
      checklist: ['Strict TypeScript interfaces', 'Modular reusable component library', 'Clean CSS tokens & responsiveness'],
    },
    {
      num: '04',
      title: 'Optimize & Review',
      color: '#d97706',
      bgGlow: 'rgba(217, 119, 6, 0.08)',
      borderColor: '#fde68a',
      desc: 'Read the code, eliminate bottlenecks with memoization, and enforce TDD with Jest.',
      detail: 'Pass SonarQube quality gates, minimize bundle sizes, and verify zero regressions.',
      checklist: ['Targeted useMemo & useCallback', 'SonarQube zero-defect gate', 'Jest unit & integration test suites'],
    },
    {
      num: '05',
      title: 'Ship & Monitor',
      color: '#059669',
      bgGlow: 'rgba(5, 150, 105, 0.08)',
      borderColor: '#a7f3d0',
      desc: 'Deploy via automated GitHub Actions CI/CD and monitor real-world interactions.',
      detail: 'Ensure fast first-contentful-paint, rock-solid security headers, and zero production defects.',
      checklist: ['Automated GitHub Actions CI/CD', 'Zero-downtime production deployment', 'Telemetry & interaction monitoring'],
    },
  ];

  const tools = [
    { name: 'Claude Code', role: 'repo-level work', color: 'chip-purple' },
    { name: 'OpenAI Embeddings', role: 'vector representations', color: 'chip-indigo' },
    { name: 'Pinecone Vector DB', role: 'semantic search', color: 'chip-emerald' },
    { name: 'SonarQube', role: 'clean architecture', color: 'chip-cyan' },
    { name: 'Jest TDD', role: 'unit & integration testing', color: 'chip-amber' },
    { name: 'React Profiler', role: 'render speedup', color: 'chip-blue' },
  ];

  return (
    <section id="method" style={{ padding: '6rem 0', borderTop: '1px solid #e2e8f0', background: '#ffffff' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-kicker">
            <Sparkles size={14} />
            <span>How I build</span>
          </div>
          <h2 className="section-heading">
            AI-assisted builds. <span className="gradient-text-brand">Hands-on coding.</span>
          </h2>
          <p className="section-intro">
            I combine modern AI tooling to plan and scaffold fast with 4.9+ years of engineering discipline to review, debug, profile, and harden every line for production.
          </p>
        </div>

        {/* 5-Step Interactive Bento Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              onClick={() => setSelectedStep(idx)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card"
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                borderTop: `4px solid ${step.color}`,
                background: selectedStep === idx ? step.bgGlow : '#ffffff',
                borderColor: selectedStep === idx ? step.borderColor : '#e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    color: step.color,
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.num} · {step.title}
                </div>
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '0.5rem',
                    lineHeight: '1.35',
                  }}
                >
                  {step.desc}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: step.color, fontSize: '0.78rem', fontWeight: '700', marginTop: '1rem' }}>
                <span>Inspect Phase</span>
                <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Step Deep Dive Drawer */}
        <motion.div
          key={selectedStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card"
          style={{
            padding: '2rem 2.25rem',
            background: steps[selectedStep].bgGlow,
            border: `1.5px solid ${steps[selectedStep].borderColor}`,
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: '800', color: steps[selectedStep].color }}>
              ACTIVE METHOD INSPECTOR // PHASE {steps[selectedStep].num}
            </span>
            <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
              100% PRODUCTION VERIFIED
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>
            {steps[selectedStep].title}: {steps[selectedStep].desc}
          </h3>

          <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.65', marginBottom: '1.5rem', maxWidth: '850px' }}>
            {steps[selectedStep].detail}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {steps[selectedStep].checklist.map((item, cIdx) => (
              <div
                key={cIdx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <CheckCircle2 size={15} style={{ color: steps[selectedStep].color }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Workflow Strip with colorful chips */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.8) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            <Sparkles size={18} style={{ color: '#6366f1' }} />
            <span style={{ fontWeight: '800', color: '#0f172a' }}>AI Workflow & Tooling:</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {tools.map((t) => (
              <span
                key={t.name}
                className={t.color}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <span>{t.name}</span>
                <span style={{ opacity: 0.7 }}>· {t.role}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
