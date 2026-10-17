import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Briefcase, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" style={{ padding: '5.5rem 0', borderTop: '1px solid #f1f5f9' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
          <div className="section-kicker">About</div>
          <h2 className="section-heading">
            Senior Frontend Engineer from Bangalore. Building scalable web applications, enterprise portal migrations, and AI tools.
          </h2>
          <p className="section-intro">
            With 4.9+ years of experience across Tata Consultancy Services and personal ventures, I focus on clean component architectures, measurable performance gains, and production reliability.
          </p>
        </div>

        {/* 2-Column Layout: Experience List + What I take on */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Career Journey */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#71717a', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Experience & Academic Background
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* TCS WLMS */}
              <div className="clean-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', color: '#09090b', fontSize: '1rem' }}>
                    Senior Software Engineer — WLMS
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#2563eb', fontWeight: '600' }}>
                    Dec 2022 — Present
                  </div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#71717a', marginBottom: '0.75rem' }}>
                  Tata Consultancy Services · Bangalore
                </div>
                <p style={{ fontSize: '0.88rem', color: '#52525b', lineHeight: '1.6' }}>
                  Architected React frontend with OpenAI/Pinecone RAG pipeline to automate XML workflow generation. Led migration of core portals from Angular 8 to React and boosted responsiveness by 20%.
                </p>
              </div>

              {/* TCS BT */}
              <div className="clean-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', color: '#09090b', fontSize: '1rem' }}>
                    Frontend Developer — British Telecom
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#2563eb', fontWeight: '600' }}>
                    Oct 2021 — Dec 2022
                  </div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#71717a', marginBottom: '0.75rem' }}>
                  Tata Consultancy Services · Bangalore
                </div>
                <p style={{ fontSize: '0.88rem', color: '#52525b', lineHeight: '1.6' }}>
                  Engineered equipment management portal (reducing faulty device returns by 26%) and built secure PCI-DSS compliant payment workflows.
                </p>
              </div>

              {/* Education */}
              <div className="clean-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', color: '#09090b', fontSize: '1rem' }}>
                    B.E in Electronics & Communication
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#71717a' }}>
                    2017 — 2021
                  </div>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#71717a' }}>
                  Jawaharlal Nehru National College of Engineering (JNNCE)
                </div>
              </div>
            </div>
          </div>

          {/* What I take on (Adhivishnu style) */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#71717a', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              What I take on
            </div>

            <div className="clean-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '800', color: '#09090b', marginBottom: '0.65rem' }}>
                Production web applications, component architectures, and useful AI integrations.
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#52525b', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                From architectural planning and component design to API orchestration and production release — built with an eye for performance and reliability.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#18181b', fontWeight: '500' }}>
                    Web & full-stack applications (React, Vite, Node, MongoDB)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#18181b', fontWeight: '500' }}>
                    Enterprise migrations & performance tuning (Angular to React)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#18181b', fontWeight: '500' }}>
                    AI automation & RAG vector search (OpenAI & Pinecone)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#18181b', fontWeight: '500' }}>
                    TDD unit testing, clean code review & zero-defect delivery
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="btn-dark"
                style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}
              >
                <span>Start a conversation</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
