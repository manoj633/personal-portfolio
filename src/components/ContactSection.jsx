import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formName || 'Recruiter / Client'}`);
    const body = encodeURIComponent(
      `Hi Manoj,\n\n${formMessage}\n\nBest regards,\n${formName}\nEmail: ${formEmail}`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0 7rem', position: 'relative' }}>
      <div className="site-container">
        {/* Section Tag */}
        <div className="section-tag">GET IN TOUCH</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Big Statement & Direct Channels */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.8vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.08',
                letterSpacing: '-0.02em',
                color: '#fff',
                marginBottom: '1.5rem',
              }}
            >
              LET'S BUILD SOMETHING{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                EXTRAORDINARY
              </span>
              .
            </h2>

            <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              I am an <strong style={{ color: '#fff' }}>Immediate Joiner</strong> based in Bangalore, available for Senior Frontend Engineer, Full-Stack React, and AI/Web Platform roles worldwide (Remote or On-site).
            </p>

            {/* Direct Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {/* Email Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={18} style={{ color: '#38bdf8' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748b' }}>
                      DIRECT INBOX
                    </div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.85rem',
                    color: copiedEmail ? '#34d399' : '#cbd5e1',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(52, 211, 153, 0.1)',
                      border: '1px solid rgba(52, 211, 153, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={18} style={{ color: '#34d399' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748b' }}>
                      MOBILE / WHATSAPP
                    </div>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.85rem',
                    color: copiedPhone ? '#34d399' : '#cbd5e1',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                  title="Copy phone"
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Pills */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub Repositories</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
              >
                <LinkedinIcon size={16} color="#0a66c2" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Dispatch Form */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 3.5vw, 2.75rem)',
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 15, 26, 0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <MessageSquare size={18} style={{ color: '#38bdf8' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '700', color: '#fff' }}>
                Dispatch a Priority Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  YOUR NAME / COMPANY
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Alex Carter (Google / Stripe)"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.09)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.09)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  MESSAGE / PROJECT SCOPE
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, product roadmap, or project you'd like to collaborate on..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.09)')}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '1rem',
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                }}
              >
                <span>Launch Mail Client</span>
                <Send size={16} />
              </button>

              {sentSuccess && (
                <div style={{ textAlign: 'center', color: '#34d399', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  ✓ Mail client generated with your message. Thank you!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
