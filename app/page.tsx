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

  useEffect(() => {
    // Scroll progress & back-to-top detection
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Reveal Intersection Observer
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    reveals.forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ToastProvider>
      {/* Scroll Progress Bar (Solid Blue) */}
      <div 
        style={{
          position: 'fixed',
          top: 0, 
          left: 0,
          height: '2px',
          background: 'var(--accent)',
          zIndex: 9999,
          width: `${scrollProgress}%`,
          transition: 'width 0.1s linear',
        }}
        aria-hidden="true"
      />

      {/* Clean Architectural Technical Grid Background */}
      <div className="tech-grid-background" aria-hidden="true" />

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

      {/* Floating Back-To-Top Button */}
      <button 
        type="button" 
        onClick={scrollToTop} 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to Top"
        title="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </ToastProvider>
  );
}
