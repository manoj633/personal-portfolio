import React, { useState } from 'react';
import { Cpu, Zap, Shield, GitBranch, ArrowRight, Database, Terminal, CheckCircle2 } from 'lucide-react';

export const ArchitectureShowcase = () => {
  const [activeTab, setActiveTab] = useState('rag');

  return (
    <section id="architecture" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">ENGINEERING BLUEPRINTS</div>
          <h2 className="section-title">
            TECHNICAL ARCHITECTURE & RIGOR.
          </h2>
          <p className="section-subtitle">
            A deeper look at the architectural patterns, AI pipelines, and performance engineering systems I build into production.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('rag')}
            style={{
              padding: '0.85rem 1.6rem',
              borderRadius: '12px',
              border: activeTab === 'rag' ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'rag' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              color: activeTab === 'rag' ? '#38bdf8' : '#94a3b8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.25s ease',
            }}
          >
            <Cpu size={16} />
            <span>01. Enterprise AI RAG Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('perf')}
            style={{
              padding: '0.85rem 1.6rem',
              borderRadius: '12px',
              border: activeTab === 'perf' ? '1px solid #34d399' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'perf' ? 'rgba(52, 211, 153, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              color: activeTab === 'perf' ? '#34d399' : '#94a3b8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.25s ease',
            }}
          >
            <Zap size={16} />
            <span>02. Performance & Frontend Migration</span>
          </button>

          <button
            onClick={() => setActiveTab('fullstack')}
            style={{
              padding: '0.85rem 1.6rem',
              borderRadius: '12px',
              border: activeTab === 'fullstack' ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'fullstack' ? 'rgba(129, 140, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              color: activeTab === 'fullstack' ? '#818cf8' : '#94a3b8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.25s ease',
            }}
          >
            <Shield size={16} />
            <span>03. Full-Stack Security & Automation</span>
          </button>
        </div>

        {/* Tab 1: RAG Pipeline Schematic */}
        {activeTab === 'rag' && (
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(8, 12, 20, 0.9) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
          >
            <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
              <div className="pill-badge" style={{ marginBottom: '0.75rem' }}>
                CASE STUDY // TATA CONSULTANCY SERVICES (WLMS)
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '0.6rem' }}>
                OpenAI Embeddings + Pinecone Vector Search Automation
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.98rem' }}>
                In the WLMS ecosystem, engineers previously spent hours manually drafting XML workflow configurations for diverse incident cases. I architected a RAG pipeline that transforms input cases into high-dimensional vector embeddings, retrieves nearest historical configurations, and dynamically generates verified XML schemas.
              </p>
            </div>

            {/* Visual Step Pipeline Flow */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                position: 'relative',
                marginBottom: '2.5rem',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#38bdf8', marginBottom: '0.5rem' }}>
                  STEP 01 // INPUT
                </div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  React ORWP Portal
                </div>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  Operator submits new problem parameters and workflow criteria via modern React form components.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#818cf8', marginBottom: '0.5rem' }}>
                  STEP 02 // EMBEDDINGS
                </div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  OpenAI Vector Model
                </div>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  Converts semantic incident descriptions into 1536-dimensional vector representations.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#34d399', marginBottom: '0.5rem' }}>
                  STEP 03 // RETRIEVAL
                </div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  Pinecone Vector DB
                </div>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  Performs ultra-fast k-NN cosine similarity search across historical enterprise case repositories.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  STEP 04 // SYNTHESIS
                </div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  XML Schema Generation
                </div>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  Synthesizes production-ready XML workflow configurations with validated constraints and zero manual error.
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <CheckCircle2 size={17} style={{ color: '#38bdf8' }} />
                <span>Eliminated repetitive manual XML engineering</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <CheckCircle2 size={17} style={{ color: '#38bdf8' }} />
                <span>Zero hallucinations via strictly bound vector context</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <CheckCircle2 size={17} style={{ color: '#38bdf8' }} />
                <span>Integrated seamlessly into React frontend workflows</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Performance & Frontend Migration */}
        {activeTab === 'perf' && (
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(8, 12, 20, 0.9) 100%)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
            }}
          >
            <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
              <div className="pill-badge" style={{ borderColor: '#34d399', color: '#34d399', marginBottom: '0.75rem' }}>
                ENTERPRISE MODERNIZATION // ANGULAR 8 &rarr; REACT
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '0.6rem' }}>
                20% Speedup & Clean Component Decomposition
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.98rem' }}>
                Spearheaded the modernization of core WLMS portals (Price Fault Visualizer & Self-Care Portal) from monolithic Angular 8 to modular React, enforcing clean separation of concerns and eliminating bottlenecks.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: '700', color: '#34d399', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Rendering Optimizations
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  Targeted rerenders with <code>useMemo</code>, <code>useCallback</code>, debounced search filters, and virtualized list items for high-volume price-fault telemetry.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: '700', color: '#34d399', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Code Splitting & Lazy Bundles
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  Split massive single bundles into dynamic route-level chunks with React Suspense, slashing initial page load time significantly.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: '700', color: '#34d399', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  TDD & SonarQube Quality Gates
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  Implemented unit and integration tests with Jest, achieving 0 production defects and reducing PR review feedback cycles by 25%.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Full-Stack Security & Automation */}
        {activeTab === 'fullstack' && (
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(8, 12, 20, 0.9) 100%)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
            }}
          >
            <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
              <div className="pill-badge" style={{ borderColor: '#818cf8', color: '#818cf8', marginBottom: '0.75rem' }}>
                FLAGSHIP ECOSYSTEM // STRIDE FULL-STACK ARCHITECTURE
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '0.6rem' }}>
                End-to-End Security, Cron Automation & CI/CD
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.98rem' }}>
                In STRIDE, I proved complete ownership across both frontend reactivity and backend resilience: multi-factor authentication, background cron workers, and automated continuous delivery.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: '700', color: '#818cf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  TOTP 2FA & Hardened Auth
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  Time-based One-Time Password (TOTP) two-factor authentication, bcrypt password hashing, encrypted JWT cookies, and IP rate limiting against brute-force attacks.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: '700', color: '#818cf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Scheduled Cron Automations
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  node-cron engine executing recurring background jobs: daily goal digest calculations and automated weekly productivity summaries sent via transactional Brevo email APIs.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: '700', color: '#818cf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  CI/CD & Cloud Deployment
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  Continuous integration pipelines with GitHub Actions verifying build health and linting on every push, deployed on Render with 99.9% uptime.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
