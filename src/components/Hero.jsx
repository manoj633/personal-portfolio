import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowDown, ArrowUpRight, Sparkles, Activity, Zap, Award, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#2563eb', '#6366f1', '#10b981', '#f59e0b', '#ec4899'],
    });
  };

  const marqueeSkills = [
    { name: 'React 19 & Next.js', color: 'chip-blue' },
    { name: 'TypeScript', color: 'chip-cyan' },
    { name: 'OpenAI Embeddings', color: 'chip-purple' },
    { name: 'Pinecone Vector DB', color: 'chip-emerald' },
    { name: 'RAG Pipelines', color: 'chip-indigo' },
    { name: 'Full-Stack STRIDE', color: 'chip-rose' },
    { name: 'Node.js & Express', color: 'chip-emerald' },
    { name: 'MongoDB Relational Trees', color: 'chip-emerald' },
    { name: 'Angular 8/12 to React', color: 'chip-blue' },
    { name: 'Jest TDD Testing', color: 'chip-amber' },
    { name: 'SonarQube Clean Code', color: 'chip-cyan' },
    { name: 'PCI-DSS Payment Flows', color: 'chip-purple' },
  ];

  return (
    <section
      id="top"
      style={{
        paddingTop: 'clamp(3.5rem, 7vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
        position: 'relative',
      }}
    >
      <div className="site-container">
        {/* Top Info Bar with interactive confetti click */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            flexWrap: 'wrap',
            marginBottom: '1.75rem',
          }}
        >
          <button
            onClick={triggerConfetti}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              background: '#ecfdf5',
              border: '1px solid #6ee7b7',
              color: '#065f46',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)',
              transition: 'all 0.2s ease',
            }}
            title="Click for celebration confetti!"
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span>Immediate Joiner · Bangalore, IN 🎉</span>
          </button>

          <span
            style={{
              fontSize: '0.82rem',
              color: '#64748b',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>4.9+ Years Production</span>
            <span>•</span>
            <span style={{ color: '#2563eb', fontWeight: '600' }}>Tata Consultancy Services</span>
          </span>
        </motion.div>

        {/* Big Animated Headline Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ maxWidth: '1000px', marginBottom: '2.5rem' }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.3rem, 5.2vw, 4.2rem)',
              fontWeight: '800',
              lineHeight: '1.12',
              letterSpacing: '-0.035em',
              color: '#0f172a',
              marginBottom: '1.5rem',
            }}
          >
            I build{' '}
            <span className="gradient-text-brand">high-performance web apps</span>,{' '}
            scalable React architectures, and practical{' '}
            <span className="gradient-text-sunset">AI tools</span>.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#475569',
              lineHeight: '1.65',
              maxWidth: '850px',
              fontWeight: '400',
            }}
          >
            Senior Frontend Engineer with 4.9+ years shipping scalable enterprise platforms at <strong style={{ color: '#0f172a' }}>Tata Consultancy Services</strong> (WLMS & British Telecom) and solo full-stack products. I use AI throughout development and understand the code deeply enough to optimize, debug, and scale it.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          <a href="#work" className="btn-vibrant">
            <span>See the work</span>
            <ArrowDown size={17} />
          </a>

          <a href="#method" className="btn-glass">
            <span>How I build</span>
            <ArrowUpRight size={17} />
          </a>

          <a href="#inside-build" className="btn-glass" style={{ borderColor: '#c7d2fe', color: '#4338ca', background: '#eef2ff' }}>
            <Sparkles size={16} />
            <span>Explore STRIDE Architecture</span>
          </a>
        </motion.div>

        {/* 4 Vibrant Bento Cards with colorful glow on hover */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {/* Card 1: Experience */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderLeft: '4px solid #3b82f6',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(239,246,255,0.5) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: '#2563eb' }}>
                EXPERIENCE
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={17} style={{ color: '#2563eb' }} />
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>
              4.9+ yrs
            </div>
            <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '0.45rem', lineHeight: '1.5' }}>
              Scalable web applications, React architectures & design systems
            </div>
          </div>

          {/* Card 2: Incident Drop */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderLeft: '4px solid #10b981',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(236,253,245,0.5) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: '#059669' }}>
                INCIDENT DROP
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={17} style={{ color: '#059669' }} />
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>
              26%
            </div>
            <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '0.45rem', lineHeight: '1.5' }}>
              Faulty equipment return drop for British Telecom portals
            </div>
          </div>

          {/* Card 3: Optimization */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderLeft: '4px solid #f59e0b',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.5) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: '#d97706' }}>
                SPEEDUP
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={17} style={{ color: '#d97706' }} />
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>
              20%
            </div>
            <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '0.45rem', lineHeight: '1.5' }}>
              Faster user interactions via memoization, code-splitting & TDD
            </div>
          </div>

          {/* Card 4: Quality */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderLeft: '4px solid #8b5cf6',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(243,232,255,0.5) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: '#7c3aed' }}>
                ZERO DEFECTS
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={17} style={{ color: '#7c3aed' }} />
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>
              0 Defects
            </div>
            <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '0.45rem', lineHeight: '1.5' }}>
              3 consecutive quarters (TCS Best Team & On-The-Spot awards)
            </div>
          </div>
        </motion.div>

        {/* 21st.dev Infinite Marquee Ribbon of Vibrant Skills */}
        <div style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '1rem 0', background: 'rgba(255,255,255,0.6)' }}>
          <div className="marquee-track">
            <div className="marquee-items">
              {marqueeSkills.concat(marqueeSkills).map((item, idx) => (
                <span
                  key={idx}
                  className={item.color}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-mono)',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                  }}
                >
                  <span>✦</span>
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
