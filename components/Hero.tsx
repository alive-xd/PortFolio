'use client';

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-left-col">
            <div className="hero-badges">
              <div className="hero-badge availability-badge">
                <span className="badge-dot pulse-green"></span>
                <span>Open to full-time roles</span>
              </div>
            </div>

            <h1 className="hero-title">
              <span className="hero-name">SUSHEN KUMAR</span>
            </h1>

            <p className="hero-role-line">
              Cybersecurity Graduate · SOC &amp; Detection Engineering · Security Automation
            </p>

            <p className="hero-open-to">
              Open to: SOC Analyst · Security Analyst · Penetration Tester · Security Engineer
            </p>

            <p className="hero-bio">
              Cybersecurity researcher and security automation engineer based in Bangalore. I build offensive security tools, detection pipelines, and intelligent automation frameworks for real-world threat analysis.
            </p>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="12" x2="12" y2="3"/>
                </svg>
                Resume
              </a>
            </div>

            {/* Stats Strip under buttons */}
            <div className="hero-stats-strip">
              <div className="stat-strip-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ef4444' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>TryHackMe Top 1% Global</span>
              </div>
              <div className="stat-strip-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                <span>13 Sigma rules · 10 MITRE ATT&amp;CK techniques</span>
              </div>
              <div className="stat-strip-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                <span>85 → 11 false-positive alerts (Trace)</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/sushen-kumar" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:sushen.d3v@gmail.com" className="social-link" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="hero-right-col">
            <div className="hero-photo-wrapper">
              <img 
                src="assets/profile.png" 
                alt="Sushen Kumar - Cybersecurity Graduate and Detection Engineer" 
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: auto;
          padding-top: 100px;
          padding-bottom: 50px;
        }

        .hero-role-line {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
          line-height: 1.4;
        }

        .hero-open-to {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .hero-bio {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.65;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
        }

        .hero-stats-strip {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
          width: 100%;
        }

        .stat-strip-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: var(--card-shadow);
          transition: transform 0.2s ease, border-color 0.2s ease;
          width: fit-content;
        }

        .stat-strip-item:hover {
          transform: translateX(3px);
          border-color: var(--accent);
        }

        /* Desktop Layout */
        @media (min-width: 993px) {
          .hero .container {
            display: block;
            width: 100%;
          }

          .hero-grid {
            display: grid !important;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 50px;
            align-items: center;
            text-align: left;
            width: 100%;
          }

          .hero-left-col {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .hero-badges {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
          }

          .hero-badge {
            margin: 0 !important;
          }

          .hero-title {
            text-align: left;
            font-size: 3.4rem;
          }

          .hero-role-line,
          .hero-open-to,
          .hero-bio {
            text-align: left;
          }

          .hero-cta {
            justify-content: flex-start;
          }

          .hero-stats-strip {
            align-items: flex-start;
          }

          .social-links {
            justify-content: flex-start;
          }
        }

        /* Mobile & Tablet Layout */
        @media (max-width: 992px) {
          .hero {
            padding-top: 90px;
            padding-bottom: 40px;
          }

          .hero-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
          }

          .hero-left-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            order: 2;
          }

          .hero-right-col {
            order: 1;
            margin-bottom: 28px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-badges {
            display: flex;
            justify-content: center;
            margin-bottom: 16px;
          }

          .hero-title {
            font-size: 2.6rem;
          }

          .hero-stats-strip {
            align-items: center;
          }

          .stat-strip-item {
            width: 100%;
            justify-content: center;
          }
        }

        /* Pulsing Availability Dot */
        .pulse-green {
          background-color: #10b981 !important;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse-green-anim 2s infinite;
        }

        @keyframes pulse-green-anim {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Hero Profile Photo Container */
        .hero-photo-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 2px solid var(--card-border);
          box-shadow: var(--card-shadow), 0 0 30px rgba(109, 131, 242, 0.15);
          background: var(--card-bg);
          transition: all 0.3s ease;
          width: 260px;
          height: 260px;
        }

        .hero-photo-wrapper:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: var(--accent);
          box-shadow: var(--card-shadow), 0 0 40px rgba(109, 131, 242, 0.25);
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
      `}</style>
    </section>
  );
};
