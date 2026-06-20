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
              <small className="hero-greeting">Hello, I'm</small>
              <span className="hero-name">SUSHEN KUMAR</span>
            </h1>

            <p className="hero-tagline">
              CYBERSECURITY RESEARCHER • SECURITY AUTOMATION • AI ENGINEERING
            </p>

            {/* TryHackMe & LeetCode Stats Bar */}
            <div className="hero-stats-bar">
              <div className="stat-pill thm-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>TryHackMe Elite · Top 1% Global</span>
              </div>
              <div className="stat-pill lc-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>300+ LeetCode Problems</span>
              </div>
            </div>

            <p className="hero-bio">
              Cybersecurity researcher, security automation engineer, and AI specialist based in Bangalore — open to SOC Analyst, Security Analyst, and Penetration Testing roles. I build offensive security tools, intelligent automation frameworks, and AI-powered systems focused on threat analysis, vulnerability research, and real-world security operations. Fresher actively seeking full-time opportunities — open to remote and relocation.
            </p>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.15a16 16 0 0 0 6.29 6.29l1.41-1.41a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92v1z"/></svg>
                Get In Touch
              </a>
              <a 
                href="/Sushen_Kumar_CV.pdf" 
                download="Sushen_Kumar_CV.pdf"
                className="btn btn-outline" 
                id="resumeBtn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/sushen-kumar" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://instagram.com/sushen.raw" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.062 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="mailto:sushen.d3v@gmail.com" className="social-link" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="hero-right-col">
            <div className="hero-photo-wrapper">
              <img 
                src="assets/profile.png" 
                alt="Sushen Kumar" 
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Reset Hero container to allow Grid system */
        @media (min-width: 993px) {
          .hero .container {
            display: block;
            width: 100%;
          }

          .hero-grid {
            display: grid !important;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 60px;
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
            margin-bottom: 24px;
          }

          .hero-badge {
            margin: 0 !important;
          }

          .hero-title {
            text-align: left;
            font-size: 3.6rem;
          }

          .hero-greeting {
            text-align: left;
          }

          .hero-tagline {
            text-align: left;
            margin-bottom: 20px;
          }

          .hero-stats-bar {
            justify-content: flex-start;
          }

          .hero-bio {
            text-align: left;
            margin: 0 0 36px 0;
            max-width: 100%;
          }

          .hero-cta {
            justify-content: flex-start;
          }

          .social-links {
            justify-content: flex-start;
          }
        }

        @media (max-width: 992px) {
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
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-badges {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }

          .hero-badge {
            margin: 0 !important;
          }

          .hero-stats-bar {
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

        /* Stats Bar & Pills */
        .hero-stats-bar {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
          flex-wrap: wrap;
          width: 100%;
        }

        .stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          box-shadow: var(--card-shadow);
          transition: all 0.3s ease;
        }

        .stat-pill:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
        }

        .thm-pill svg {
          color: #de1f26; /* TryHackMe red */
        }

        .lc-pill svg {
          color: #ffa116; /* LeetCode orange */
        }

        /* Hero Profile Photo Container */
        .hero-photo-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 4px solid var(--card-border);
          box-shadow: var(--card-shadow), 0 0 30px rgba(109, 131, 242, 0.15);
          background: var(--card-bg);
          transition: all 0.3s ease;
          width: 280px;
          height: 280px;
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
