'use client';

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-layout-grid">
          {/* Left Column: Copy & Actions */}
          <div className="hero-content-col">
            <div className="hero-top-badge-row">
              <div className="hero-status-pill">
                <span className="pulse-dot-green" />
                <span>Open to full-time roles</span>
              </div>
              <span className="hero-location-pill font-mono">Bangalore, India · Remote / Relocation</span>
            </div>

            <h1 className="hero-title-display">
              <span className="hero-name-primary">Sushen Kumar</span>
            </h1>

            <p className="hero-role-headline">
              Cybersecurity Graduate · SOC &amp; Detection Engineering · Security Automation
            </p>

            <p className="hero-open-to-subline">
              Open to: SOC Analyst · Security Analyst · Penetration Tester · Security Engineer
            </p>

            <p className="hero-description-lead">
              Cybersecurity researcher and detection engineering practitioner. I test defensive rules against real adversary logs, engineer custom offensive and OSINT tooling, and build automated threat response pipelines.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Get In Touch
              </a>
              <a 
                href="/Sushen_Kumar_CV.pdf" 
                download="Sushen_Kumar_CV.pdf"
                className="btn btn-outline" 
                id="resumeBtn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="12" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>

            {/* Verified Stats Strip */}
            <div className="hero-stats-deck">
              <div className="stat-glass-chip">
                <div className="stat-icon-wrapper blue-tint">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="stat-text-meta">
                  <span className="stat-label">TryHackMe Top 1% Global</span>
                </div>
              </div>

              <div className="stat-glass-chip">
                <div className="stat-icon-wrapper blue-tint">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="stat-text-meta">
                  <span className="stat-label">13 Sigma rules · 10 MITRE ATT&amp;CK techniques</span>
                </div>
              </div>

              <div className="stat-glass-chip">
                <div className="stat-icon-wrapper green-tint">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="stat-text-meta">
                  <span className="stat-label">85 → 11 false-positive alerts (Trace)</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="hero-socials-row">
              <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="hero-social-pill" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sushen-kumar" target="_blank" rel="noopener noreferrer" className="hero-social-pill" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:sushen.d3v@gmail.com" className="hero-social-pill" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>sushen.d3v@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Glass Portrait Card */}
          <div className="hero-visual-col">
            <div className="portrait-glass-card glass-card">
              <div className="portrait-frame">
                <img 
                  src="assets/profile.png" 
                  alt="Sushen Kumar - Cybersecurity Graduate" 
                  className="portrait-image"
                />
              </div>
              <div className="portrait-meta-badge">
                <span className="portrait-badge-title">Sushen Kumar</span>
                <span className="portrait-badge-spec">Cybersecurity Graduate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: clamp(96px, 13vh, 130px);
          padding-bottom: clamp(40px, 7vh, 64px);
          position: relative;
          width: 100%;
        }

        .hero-layout-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
          gap: clamp(28px, 4vw, 52px);
          align-items: center;
        }

        .hero-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-top-badge-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-pill);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: var(--card-shadow);
        }

        .pulse-dot-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
        }

        .hero-location-pill {
          font-size: 0.82rem;
          color: var(--text-muted);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
        }

        /* Solid Color Title - NO GRADIENTS */
        .hero-title-display {
          font-family: var(--font-sans);
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.035em;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .hero-name-primary {
          display: block;
          color: var(--text-primary);
        }

        .hero-role-headline {
          font-family: var(--font-sans);
          font-size: clamp(1.05rem, 1.5vw, 1.25rem);
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 8px;
          letter-spacing: -0.015em;
          line-height: 1.4;
        }

        .hero-open-to-subline {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 18px;
          line-height: 1.5;
        }

        .hero-description-lead {
          font-size: clamp(0.95rem, 1.15vw, 1.05rem);
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 600px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 24px;
        }

        /* Stats Deck */
        .hero-stats-deck {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 24px;
          width: 100%;
        }

        .stat-glass-chip {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 14px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-sm);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: var(--card-shadow);
          transition: transform 0.2s ease, border-color 0.2s ease;
          width: fit-content;
        }

        .stat-glass-chip:hover {
          transform: translateX(4px);
          border-color: var(--accent);
        }

        .stat-icon-wrapper {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon-wrapper.blue-tint {
          background: var(--accent-light);
          color: var(--accent);
        }

        .stat-icon-wrapper.green-tint {
          background: var(--accent-sec-light);
          color: var(--accent-sec);
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Social Pills */
        .hero-socials-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }

        .hero-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--card-bg);
          border: 1px solid var(--border);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .hero-social-pill:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        /* Right Column Clean Glass Portrait Card */
        .hero-visual-col {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .portrait-glass-card {
          padding: 12px;
          max-width: 310px;
          width: 100%;
          border-radius: var(--radius-lg);
        }

        .portrait-frame {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--bg-subtle);
          border: 1px solid var(--border);
        }

        .portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        .portrait-meta-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 12px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
        }

        .portrait-badge-title {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .portrait-badge-spec {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent);
          margin-top: 2px;
        }

        /* Responsive Breakpoints & Zoom Safe */
        @media (max-width: 960px) {
          .hero-layout-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 36px;
          }

          .hero-content-col {
            align-items: center;
            text-align: center;
            order: 2;
          }

          .hero-visual-col {
            order: 1;
          }

          .hero-top-badge-row,
          .hero-cta-group,
          .hero-socials-row {
            justify-content: center;
          }

          .hero-stats-deck {
            align-items: center;
          }

          .stat-glass-chip {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
