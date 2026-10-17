import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layout, Cpu, Database, Server, Zap, Wrench, Check } from 'lucide-react';

export const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    'Frontend Core': <Layout size={20} style={{ color: '#38bdf8' }} />,
    'AI & Vector Search': <Cpu size={20} style={{ color: '#818cf8' }} />,
    'State & Architecture': <Database size={20} style={{ color: '#34d399' }} />,
    'Backend & Full-Stack': <Server size={20} style={{ color: '#fbbf24' }} />,
    'Performance & Testing': <Zap size={20} style={{ color: '#f43f5e' }} />,
    'Tooling & DevOps': <Wrench size={20} style={{ color: '#a855f7' }} />,
  };

  const filteredCategories = selectedCategory === 'All'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="section-tag">CAPABILITIES & EXPERTISE</div>
            <h2 className="section-title">
              TECHNICAL STACK.
            </h2>
            <p className="section-subtitle">
              Engineered with 4.9+ years of hands-on production mastery across modern frontend frameworks, AI vectors, and scalable systems.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <button
              onClick={() => setSelectedCategory('All')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                border: selectedCategory === 'All' ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                background: selectedCategory === 'All' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedCategory === 'All' ? '#38bdf8' : 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              All Domains
            </button>
            {portfolioData.skillCategories.map((c) => (
              <button
                key={c.category}
                onClick={() => setSelectedCategory(c.category)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: selectedCategory === c.category ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: selectedCategory === c.category ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedCategory === c.category ? '#38bdf8' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="glass-panel"
              style={{
                padding: '2.2rem',
                background: 'rgba(15, 20, 31, 0.65)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {categoryIcons[cat.category] || <Layout size={20} style={{ color: '#38bdf8' }} />}
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#fff',
                        lineHeight: '1.2',
                      }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                  {cat.description}
                </p>
              </div>

              {/* Skills Pill Cluster */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#e2e8f0',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                      e.currentTarget.style.color = '#38bdf8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#e2e8f0';
                    }}
                  >
                    <span style={{ color: '#38bdf8', opacity: 0.6 }}>✦</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
