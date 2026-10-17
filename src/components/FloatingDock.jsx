import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Copy, Check, ArrowUp, Mail, Code2, Layers, Trophy, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const FloatingDock = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#2563eb', '#6366f1', '#10b981', '#f59e0b', '#ec4899'],
    });
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="floating-dock"
    >
      <a
        href="#work"
        style={{
          padding: '0.4rem 0.75rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          color: '#475569',
          fontSize: '0.78rem',
          fontWeight: '700',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#2563eb';
          e.currentTarget.style.backgroundColor = '#eff6ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#475569';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        Work
      </a>

      <a
        href="#method"
        style={{
          padding: '0.4rem 0.75rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          color: '#475569',
          fontSize: '0.78rem',
          fontWeight: '700',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#7c3aed';
          e.currentTarget.style.backgroundColor = '#faf5ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#475569';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        Method
      </a>

      <a
        href="#inside-build"
        style={{
          padding: '0.4rem 0.75rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          color: '#475569',
          fontSize: '0.78rem',
          fontWeight: '700',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#059669';
          e.currentTarget.style.backgroundColor = '#ecfdf5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#475569';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        STRIDE Build
      </a>

      <a
        href="#stack"
        style={{
          padding: '0.4rem 0.75rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          color: '#475569',
          fontSize: '0.78rem',
          fontWeight: '700',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#d97706';
          e.currentTarget.style.backgroundColor = '#fffbeb';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#475569';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        Stack
      </a>

      <div style={{ width: '1px', height: '16px', background: '#e2e8f0', margin: '0 0.2rem' }} />

      {/* Confetti Celebration Button */}
      <button
        onClick={handleConfetti}
        style={{
          padding: '0.35rem 0.65rem',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #fef08a 0%, #fed7aa 100%)',
          border: '1px solid #fde047',
          color: '#854d0e',
          cursor: 'pointer',
          fontSize: '0.78rem',
          fontWeight: '800',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}
        title="Celebrate Immediate Joiner!"
      >
        <span>🎉</span>
      </button>

      {/* Quick Copy Email Button */}
      <button
        onClick={handleCopyEmail}
        style={{
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          background: copied ? '#ecfdf5' : '#0f172a',
          border: copied ? '1px solid #10b981' : '1px solid #0f172a',
          color: copied ? '#059669' : '#ffffff',
          cursor: 'pointer',
          fontSize: '0.76rem',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          transition: 'all 0.2s ease',
        }}
        title="Copy Email"
      >
        {copied ? <Check size={13} style={{ color: '#059669' }} /> : <Copy size={13} />}
        <span>{copied ? 'Copied' : 'Email'}</span>
      </button>
    </motion.div>
  );
};
