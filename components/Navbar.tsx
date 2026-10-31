'use client';

import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Read saved theme from document
    const currentTheme = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
    setTheme(currentTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Bottom reached -> Contact active
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // Reading trigger point
      const triggerY = window.innerHeight * 0.35;
      const sections = ['contact', 'projects', 'certs', 'skills', 'education', 'experience', 'about', 'home'];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom > 80) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#certs', label: 'Certifications', id: 'certs' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-dock-container">
          <nav className="nav-dock" aria-label="Main Navigation">
            {/* Clean Professional Logo */}
            <a href="#home" className="nav-logo-group" aria-label="Sushen Kumar Portfolio">
              <span className="logo-callsign">
                Sushen<span>.</span>
              </span>
            </a>

            {/* Desktop Pill Dock */}
            <ul className="nav-links-dock" role="list">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-dock-item">
                  <a
                    href={link.href}
                    className={`nav-dock-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="nav-actions-group">
              <button
                className="theme-toggle-btn"
                id="themeToggle"
                onClick={toggleTheme}
                aria-label="Toggle light or dark theme"
                title="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
                  </svg>
                )}
              </button>

              <button
                className="hamburger-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <ul className="mobile-nav-menu" role="list" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
