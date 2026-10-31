'use client';

import React from 'react';

export const Education: React.FC = () => {
  return (
    <div id="education" className="resume-col">
      <h2 className="resume-col-title">Education</h2>

      <div className="resume-list">
        <div className="resume-item reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="resume-item-header">
            <h3 className="resume-item-role">B.Tech in Computer Science</h3>
            <span className="resume-item-date font-mono">2022 – Aug 2026 (Graduated)</span>
          </div>
          <div className="resume-item-org">Lovely Professional University · Punjab, India</div>
          <p className="resume-item-desc">
            Specialisation in Cybersecurity. Comprehensive engineering curriculum focused on applied security standards, network defense, system internals, and defensive security methodologies.
          </p>

          {/* Prominent Coursework Showcase */}
          <div className="coursework-box-prominent">
            <span className="coursework-label-prominent">Core Security &amp; Computing Coursework</span>
            <div className="coursework-tags-grid">
              <div className="coursework-tag-card">
                <span className="coursework-tag-title">Network Security</span>
                <span className="coursework-tag-sub">Protocols, firewalls &amp; packet inspection</span>
              </div>
              <div className="coursework-tag-card">
                <span className="coursework-tag-title">Ethical Hacking</span>
                <span className="coursework-tag-sub">Methodologies, recon &amp; penetration testing</span>
              </div>
              <div className="coursework-tag-card">
                <span className="coursework-tag-title">Cryptography</span>
                <span className="coursework-tag-sub">Ciphers, hashing, PKI &amp; authentication</span>
              </div>
              <div className="coursework-tag-card">
                <span className="coursework-tag-title">Digital Forensics</span>
                <span className="coursework-tag-sub">Evidence acquisition &amp; artifact analysis</span>
              </div>
              <div className="coursework-tag-card">
                <span className="coursework-tag-title">Operating Systems</span>
                <span className="coursework-tag-sub">Kernel architecture, memory &amp; processes</span>
              </div>
              <div className="coursework-tag-card">
                <span className="coursework-tag-title">DSA</span>
                <span className="coursework-tag-sub">Data structures &amp; algorithmic efficiency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Labs & Practical Foundation to balance with Experience column */}
        <div className="education-lab-card reveal" style={{ transitionDelay: '0.18s' }}>
          <div className="education-lab-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            <h4 className="education-lab-title">Academic Security Labs &amp; Practicals</h4>
          </div>
          <p className="education-lab-desc">
            Hands-on university lab curriculum encompassing network packet capture analysis, cipher implementation, controlled penetration testing simulations, and digital evidence recovery.
          </p>
          <div className="education-badges">
            <span className="edu-badge">Hands-on Lab Practicals</span>
            <span className="edu-badge">Vulnerability Lab Simulations</span>
            <span className="edu-badge">Incident Analysis</span>
          </div>
        </div>
      </div>

      <style>{`
        .coursework-box-prominent {
          margin-top: 20px;
          padding: 18px 20px;
          border-radius: var(--radius-md);
          background: var(--bg);
          border: 1px solid var(--border);
        }

        .coursework-label-prominent {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .coursework-tags-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .coursework-tag-card {
          display: flex;
          flex-direction: column;
          padding: 10px 12px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-sm);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .coursework-tag-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .coursework-tag-title {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .coursework-tag-sub {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 2px;
          line-height: 1.3;
        }

        .education-lab-card {
          padding: 20px 22px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-md);
          box-shadow: var(--card-shadow);
          margin-top: 24px;
        }

        .education-lab-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .education-lab-title {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .education-lab-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 14px;
        }

        .education-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .edu-badge {
          display: inline-block;
          padding: 4px 10px;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        @media (max-width: 576px) {
          .coursework-tags-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
