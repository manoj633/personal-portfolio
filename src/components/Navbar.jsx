import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Check, Menu, X, Clock, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Method', href: '#method' },
    { label: 'Inside a Build', href: '#inside-build' },
    { label: 'Stack', href: '#stack' },
    { label: 'Awards', href: '#awards' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        backgroundColor: scrolled ? 'rgba(251, 251, 253, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid transparent',
        transition: 'all 0.25s ease',
      }}
    >
      <div className="site-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          
          {/* Logo / Brand (Adhivishnu style) */}
          <a
            href="#top"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#09090b',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: '0.85rem',
                letterSpacing: '-0.02em',
              }}
            >
              M
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                fontSize: '1rem',
                color: '#09090b',
                letterSpacing: '-0.01em',
              }}
            >
              Manoj M
            </span>
          </a>

          {/* Desktop Floating Pill Navigation (21st.dev style) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.35rem 0.6rem',
              background: '#ffffff',
              borderRadius: '9999px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px -2px rgba(0, 0, 0, 0.05)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: '#52525b',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#09090b';
                  e.currentTarget.style.backgroundColor = '#f4f4f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#52525b';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={handleCopyEmail}
              className="btn-light"
              style={{
                padding: '0.45rem 0.9rem',
                fontSize: '0.82rem',
                display: 'none',
              }}
              id="nav-copy-btn"
              title="Copy Email"
            >
              {copied ? <Check size={14} style={{ color: '#059669' }} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <a
              href="#contact"
              className="btn-dark"
              style={{
                padding: '0.45rem 1.1rem',
                fontSize: '0.82rem',
              }}
            >
              <span>Let's talk</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '0.4rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#09090b',
              }}
              className="mobile-nav-toggle"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '1.25rem 1.5rem 1.75rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: '#09090b',
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '0.45rem 0',
                  borderBottom: '1px solid #f4f4f5',
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ marginTop: '0.5rem' }}>
              <button
                onClick={handleCopyEmail}
                className="btn-light"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {copied ? <Check size={15} style={{ color: '#059669' }} /> : <Copy size={15} />}
                <span>{copied ? 'Copied Email' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-copy-btn {
            display: inline-flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
