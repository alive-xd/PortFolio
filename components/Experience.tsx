'use client';

import React from 'react';

interface ExperienceEntry {
  role: string;
  organisation: string;
  duration: string;
  bullets: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceEntry[] = [
    {
      role: 'Bug Bounty Practice',
      organisation: 'Bugcrowd (Self-directed)',
      duration: '2025',
      bullets: [
        'Practiced web application testing across recon, enumeration and OWASP Top 10 vulnerability classes.',
        'Documented findings with proof-of-concept steps and remediation recommendations.'
      ]
    },
    {
      role: 'Joint Vulnerability Assessment & OSINT Project',
      organisation: 'Peer collaboration',
      duration: '2024–25',
      bullets: [
        'Carried out reconnaissance and threat modelling with a peer in shared test environments.',
        'Co-wrote a report covering findings and recommended mitigations.'
      ]
    },
    {
      role: 'Code-A-Haunt 2.0',
      organisation: '48-hour Hackathon',
      duration: 'Feb 2024',
      bullets: [
        'Built a working security prototype under a 48-hour deadline.',
        'Presented a live demo to judges.'
      ]
    }
  ];

  return (
    <div id="experience" className="resume-col">
      <h2 className="resume-col-title">Experience &amp; Hands-on Practice</h2>

      {/* One-line pointer linking to Trace project */}
      <div className="experience-pointer-box reveal">
        <a href="#trace" className="experience-pointer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span>Strongest hands-on work: <strong>Trace (see Projects)</strong></span>
        </a>
      </div>

      <div className="resume-list">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="resume-item reveal"
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            <div className="resume-item-header">
              <h3 className="resume-item-role">{exp.role}</h3>
              <span className="resume-item-date font-mono">{exp.duration}</span>
            </div>
            <div className="resume-item-org">{exp.organisation}</div>
            <ul className="resume-bullets">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="resume-bullet-item">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Other volunteering moved to single line */}
        <div className="resume-other-box reveal" style={{ transitionDelay: '0.24s' }}>
          <h4 className="resume-other-heading">Other</h4>
          <p className="resume-other-line">
            Volunteer, Jeet Foundation NGO (July 2023) — Supported community impact programs and outreach operations.
          </p>
        </div>
      </div>

      {/* Retitled TryHackMe Card */}
      <div className="experience-ctf-container reveal" style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
        <h3 className="ctf-section-title" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Hands-on Labs &amp; CTFs
        </h3>
        <div className="strength-card" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px 22px', alignItems: 'flex-start', borderRadius: '12px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>TryHackMe</span>
            <a href="https://tryhackme.com/p/alivexd" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ padding: '4px 10px', fontSize: '0.88rem' }}>
              Profile: tryhackme.com/p/alivexd
            </a>
          </div>
          <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Status:</strong> Top 1% globally — active on SOC and offensive security learning paths
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
            Actively practicing threat detection, log analysis, and offensive security challenges on TryHackMe. Profile: @alivexd
          </p>
        </div>
      </div>

      <style>{`
        .experience-pointer-box {
          margin-bottom: 8px;
        }

        .experience-pointer-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          background: var(--accent-light);
          color: var(--accent);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          transition: background-color 0.2s ease, transform 0.2s ease;
          border: 1px solid rgba(73, 97, 220, 0.15);
        }

        .experience-pointer-link:hover {
          background: var(--accent);
          color: #ffffff;
          transform: translateX(4px);
        }

        .resume-bullets {
          list-style: disc;
          padding-left: 20px;
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .resume-bullet-item {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .resume-other-box {
          padding-top: 14px;
          border-top: 1px dashed var(--border);
          margin-top: 6px;
        }

        .resume-other-heading {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .resume-other-line {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </div>
  );
};
