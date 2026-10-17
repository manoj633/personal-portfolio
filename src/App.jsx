import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Method } from './components/Method';
import { InsideBuild } from './components/InsideBuild';
import { TheStack } from './components/TheStack';
import { Recognition } from './components/Recognition';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';

export function App() {
  const handleOpenInsideBuild = (projectId) => {
    const el = document.getElementById('inside-build');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      {/* Ambient Colorful Aurora Lighting (Adhivishnu vibe) */}
      <div className="ambient-aurora">
        <div className="aurora-blob-1" />
        <div className="aurora-blob-2" />
        <div className="aurora-blob-3" />
      </div>

      {/* Dotted Architectural Grid */}
      <div className="dot-grid-bg" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* The Work / Featured Projects with Tailored Themes & Mockups */}
        <Work onOpenInsideBuild={handleOpenInsideBuild} />

        {/* Method / 5-Step Engineering Workflow */}
        <Method />

        {/* Inside a Live Build: STRIDE & RAG Architecture */}
        <InsideBuild />

        {/* The Stack / Filterable Toolbox */}
        <TheStack />

        {/* Recognition / Production Podiums */}
        <Recognition />

        {/* About Manoj */}
        <About />

        {/* Contact / Let's build */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* 21st.dev Signature Floating Action Dock */}
      <FloatingDock />
    </div>
  );
}

export default App;
