import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layout, Cpu, Database, Server, Zap, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TheStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Frontend Core',
    'AI & Vector Search',
    'State & Architecture',
    'Backend & Full-Stack',
    'Performance & Testing',
    'Tooling & DevOps',
  ];

  const categoryThemes = {
    'Frontend Core': {
      color: '#2563eb',
      icon: <Layout size={20} style={{ color: '#2563eb' }} />,
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(239,246,255,0.6) 100%)',
      border: 'rgba(59, 130, 246, 0.3)',
      chipClass: 'chip-blue',
    },
    'AI & Vector Search': {
      color: '#7c3aed',
      icon: <Cpu size={20} style={{ color: '#7c3aed' }} />,
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,243,255,0.6) 100%)',
      border: 'rgba(139, 92, 246, 0.3)',
      chipClass: 'chip-purple',
    },
    'State & Architecture': {
      color: '#059669',
      icon: <Database size={20} style={{ color: '#059669' }} />,
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(236,253,245,0.6) 100%)',
      border: 'rgba(16, 185, 129, 0.3)',
      chipClass: 'chip-emerald',
    },
    'Backend & Full-Stack': {
      color: '#d97706',
      icon: <Server size={20} style={{ color: '#d97706' }} />,
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.6) 100%)',
      border: 'rgba(245, 158, 11, 0.3)',
      chipClass: 'chip-amber',
    },
    'Performance & Testing': {
      color: '#e11d48',
      icon: <Zap size={20} style={{ color: '#e11d48' }} />,
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,241,242,0.6) 100%)',
      border: 'rgba(244, 63, 94, 0.3)',
      chipClass: 'chip-rose',
    },
    'Tooling & DevOps': {
      color: '#0891b2',
      icon: <Wrench size={20} style={{ color: '#0891b2' }} />,
      bg: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(236,254,255,0.6) 100%)',
      border: 'rgba(6, 182, 212, 0.3)',
      chipClass: 'chip-cyan',
    },
  };

  const filteredCategories = activeCategory === 'All'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.category === activeCategory);

  return (
    <section id="stack" style={{ padding: '6rem 0', borderTop: '1px solid #e2e8f0', background: '#ffffff' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
          <div className="section-kicker">
            <Sparkles size={14} />
            <span>The stack</span>
          </div>
          <h2 className="section-heading">
            The <span className="gradient-text-brand">toolbox.</span>
          </h2>
          <p className="section-intro">
            React and TypeScript in front, Node and Express behind, MongoDB and Pinecone underneath. On the AI side, I build vector RAG pipelines and automate schemas — grounded in 4.9+ years of engineering rigor. Pick a discipline to filter the field.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1.05rem',
                borderRadius: '9999px',
                border: activeCategory === cat ? '1px solid #2563eb' : '1px solid #e2e8f0',
                background: activeCategory === cat ? '#2563eb' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#475569',
                fontSize: '0.82rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid of Themed Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group) => {
              const theme = categoryThemes[group.category] || categoryThemes['Frontend Core'];

              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    background: theme.bg,
                    border: `1.5px solid ${theme.border}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: '#ffffff',
                          border: `1px solid ${theme.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                        }}
                      >
                        {theme.icon}
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          fontWeight: '800',
                          color: '#0f172a',
                        }}
                      >
                        {group.category}
                      </h3>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.55', marginBottom: '1.5rem' }}>
                      {group.description}
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className={theme.chipClass}
                        style={{
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: '700',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <div
          className="glass-card"
          style={{
            padding: '1.25rem 1.75rem',
            background: 'linear-gradient(135deg, rgba(238, 242, 255, 0.7) 0%, rgba(240, 249, 255, 0.5) 100%)',
            border: '1px solid #c7d2fe',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: '#4338ca', fontWeight: '800' }}>Plus the engineering glue:</span>
          <span style={{ color: '#0f172a', fontWeight: '600' }}>
            Zero-defect delivery · TDD with Jest · Code Reviews · SonarQube · Scalable Component Architecture
          </span>
        </div>
      </div>
    </section>
  );
};
