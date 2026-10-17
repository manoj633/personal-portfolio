import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid #f1f5f9',
        padding: '2.5rem 0',
        background: '#ffffff',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div>
            <span style={{ fontWeight: '700', color: '#09090b', fontSize: '0.95rem' }}>
              {portfolioData.personal.name}
            </span>
            <span style={{ color: '#71717a', fontSize: '0.85rem', marginLeft: '0.5rem' }}>
              · Senior Frontend Engineer
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.82rem' }}>
            <a href="#work" style={{ color: '#52525b', textDecoration: 'none' }}>Work</a>
            <a href="#method" style={{ color: '#52525b', textDecoration: 'none' }}>Method</a>
            <a href="#inside-build" style={{ color: '#52525b', textDecoration: 'none' }}>Inside a Build</a>
            <a href="#stack" style={{ color: '#52525b', textDecoration: 'none' }}>Stack</a>
            <a href="#about" style={{ color: '#52525b', textDecoration: 'none' }}>About</a>
            <a href="#contact" style={{ color: '#52525b', textDecoration: 'none' }}>Contact</a>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#a1a1aa' }}>
            © {new Date().getFullYear()} Manoj M · Bangalore, IN
          </div>
        </div>
      </div>
    </footer>
  );
};
