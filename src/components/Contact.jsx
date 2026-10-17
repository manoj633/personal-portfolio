import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Manoj,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" style={{ padding: '5.5rem 0 6.5rem', borderTop: '1px solid #f1f5f9' }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-kicker">Project enquiries · Bangalore & Remote</div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
            Let’s build.
          </h2>
          <p className="section-intro">
            Immediate Joiner based in Bangalore, available for Senior Frontend, Full-Stack React, and AI/Web Platform opportunities worldwide.
          </p>
        </div>

        {/* 2-Column Clean Contact Block (Adhivishnu style) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Direct Channels */}
          <div>
            {/* Big Email Card */}
            <div
              className="clean-card"
              style={{
                padding: '2rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#71717a', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                DIRECT EMAIL
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    fontWeight: '700',
                    color: '#09090b',
                    textDecoration: 'none',
                    lineHeight: '1.3',
                  }}
                >
                  {portfolioData.personal.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-light"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={14} style={{ color: '#059669' }} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="clean-card"
              style={{
                padding: '1.5rem 2rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#71717a', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                PHONE & WHATSAPP
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#09090b',
                    textDecoration: 'none',
                  }}
                >
                  {portfolioData.personal.phone}
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="btn-light"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={14} style={{ color: '#059669' }} /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Pills */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} style={{ color: '#71717a' }} />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
              >
                <LinkedinIcon size={16} color="#0a66c2" />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} style={{ color: '#71717a' }} />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="clean-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '700', color: '#09090b', marginBottom: '1.25rem' }}>
              Send a quick message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#52525b', marginBottom: '0.35rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '8px',
                    border: '1px solid #e4e4e7',
                    background: '#fcfcfd',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: '#09090b',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#52525b', marginBottom: '0.35rem' }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '8px',
                    border: '1px solid #e4e4e7',
                    background: '#fcfcfd',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: '#09090b',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#52525b', marginBottom: '0.35rem' }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Details regarding your team, role, or project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '8px',
                    border: '1px solid #e4e4e7',
                    background: '#fcfcfd',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: '#09090b',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-dark"
                style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', marginTop: '0.5rem' }}
              >
                <span>Send message</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
