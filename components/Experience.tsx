'use client';

import React from 'react';

interface ExperienceEntry {
  role: string;
  organisation: string;
  duration: string;
  badge: string;
  bullets: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceEntry[] = [
    {
      role: 'Bug Bounty Practice',
      organisation: 'Bugcrowd (Self-directed)',
      duration: '2025',
      badge: 'VULNERABILITY RESEARCH',
      bullets: [
        'Practiced web application testing across recon, enumeration and OWASP Top 10 vulnerability classes.',
        'Documented findings with proof-of-concept steps and remediation recommendations.'
      ]
    },
    {
      role: 'Joint Vulnerability Assessment & OSINT Project',
      organisation: 'Peer collaboration',
      duration: '2024–25',
      badge: 'THREAT MODELING',
      bullets: [
        'Carried out reconnaissance and threat modelling with a peer in shared test environments.',
        'Co-wrote a report covering findings and recommended mitigations.'
      ]
    },
    {
      role: 'Code-A-Haunt 2.0',
      organisation: '48-hour Hackathon',
      duration: 'Feb 2024',
      badge: 'RAPID PROTOTYPING',
      bullets: [
        'Built a working security prototype under a 48-hour deadline.',
        'Presented a live demo to judges.'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container reveal">
        <div className="section-header-wrap">
          <h2 className="section-title-centered">Experience &amp; Hands-on Practice</h2>
          <p className="section-subtitle-text">
            Applied security research, competitive hackathon prototyping, and adversarial reconnaissance.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="experience-cards-grid">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="exp-glass-card glass-card"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="exp-card-header">
                <div className="exp-meta-left">
                  <span className="exp-badge-track font-mono">{exp.badge}</span>
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <div className="exp-org-line">{exp.organisation}</div>
                </div>
                <div className="exp-date-pill font-mono">{exp.duration}</div>
              </div>

              <ul className="exp-bullets-list" role="list">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="exp-bullet-item">
                    <span className="bullet-chevron font-mono">&gt;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Split: TryHackMe Card & Other Activities */}
        <div className="experience-bottom-split">
          {/* TryHackMe Card */}
          <div className="thm-featured-card glass-card">
            <div className="thm-card-top">
              <div className="thm-title-group">
                <div className="thm-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="thm-heading">Hands-on Labs &amp; CTFs</h3>
                  <span className="thm-subheading font-mono">TryHackMe Profile @alivexd</span>
                </div>
              </div>
              <a 
                href="https://tryhackme.com/p/alivexd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm"
              >
                Profile: tryhackme.com/p/alivexd
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" x2="21" y1="14" y2="3"/>
                </svg>
              </a>
            </div>
            
            <div className="thm-status-badge-row">
              <div className="thm-rank-pill">
                <span className="rank-dot-green" />
                <span><strong>Status:</strong> Top 1% globally — active on SOC and offensive security learning paths</span>
              </div>
            </div>

            <p className="thm-desc-text">
              Actively practicing threat detection, log analysis, and offensive security challenges on TryHackMe. Profile: @alivexd
            </p>
          </div>

          {/* Other Single Line Card */}
          <div className="other-activity-card glass-card">
            <span className="other-overline font-mono">COMMUNITY &amp; OUTREACH</span>
            <h4 className="other-title">Other</h4>
            <p className="other-desc">
              Volunteer, Jeet Foundation NGO (July 2023) — Supported community impact programs and outreach operations.
            </p>
          </div>
        </div>
      </div>

      <style>{`


        /* Experience Cards Grid */
        .experience-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: clamp(18px, 2.5vw, 24px);
          margin-bottom: clamp(24px, 3.5vh, 36px);
        }

        .exp-glass-card {
          padding: clamp(22px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }

        .exp-badge-track {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 4px;
        }

        .exp-role-title {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 2px;
          letter-spacing: -0.01em;
        }

        .exp-org-line {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .exp-date-pill {
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .exp-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 0;
          padding: 0;
        }

        .exp-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .bullet-chevron {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Bottom Split */
        .experience-bottom-split {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.6fr);
          gap: clamp(18px, 2.5vw, 24px);
        }

        .thm-featured-card {
          padding: clamp(22px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .thm-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .thm-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .thm-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--accent-light);
          border: 1px solid var(--accent-border);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .thm-heading {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
        }

        .thm-subheading {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .thm-status-badge-row {
          display: flex;
        }

        .thm-rank-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--accent-sec-light);
          border: 1px solid rgba(5, 150, 105, 0.25);
          color: var(--accent-sec);
          font-size: 0.86rem;
        }

        .rank-dot-green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-sec);
          flex-shrink: 0;
        }

        .thm-desc-text {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .other-activity-card {
          padding: clamp(22px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }

        .other-overline {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .other-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
        }

        .other-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 900px) {
          .experience-bottom-split {
            grid-template-columns: 1fr;
          }
          .trace-callout-banner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
