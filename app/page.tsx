'use client';

import React, { useState, useEffect } from 'react';
import { ToastProvider } from '@/components/Toast';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Certifications } from '@/components/Certifications';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    // 1. Scroll events handler
    const handleScroll = () => {
      const y = window.scrollY;
      setShowBackToTop(y > 400);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((y / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Cursor glow fine pointer detection
    if (window.matchMedia('(pointer: fine)').matches) {
      setHasFinePointer(true);
      const handleMouseMove = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Scroll Reveal intersection observer
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ToastProvider>
      {/* Scroll Progress Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0, 
          left: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #7c3aed, #3b82f6, #10b981)',
          zIndex: 9999,
          width: `${scrollProgress}%`,
          transition: 'width 0.1s linear',
          borderRadius: '0 2px 2px 0',
          boxShadow: '0 0 8px rgba(124,58,237,0.6)',
        }}
      />

      {/* Cursor Glow */}
      {hasFinePointer && (
        <div 
          style={{
            position: 'fixed',
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            width: '500px', 
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.2s ease, top 0.2s ease',
            mixBlendMode: 'screen',
          }}
        />
      )}

      {/* ─── BACKGROUND GLOWS ──────────────────────────────── */}
      <div className="aurora-glows" aria-hidden="true">
        <div className="aurora-blob aurora-web"></div>
        <div className="aurora-blob aurora-ai"></div>
        <div className="aurora-blob aurora-sec"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Back to top button */}
      <a 
        href="#home" 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
      </a>
    </ToastProvider>
  );
}
