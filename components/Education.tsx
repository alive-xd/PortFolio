'use client';

import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container reveal">
        <div className="section-header-wrap">
          <h2 className="section-title-centered">Education</h2>
          <p className="section-subtitle-text">
            Specialized engineering curriculum covering defensive methodologies, system internals, and applied cryptography.
          </p>
        </div>

        <div className="education-layout-grid">
          {/* Main Degree Glass Card */}
          <div className="education-degree-card glass-card">
            <div className="degree-card-top">
              <div className="degree-institution-info">
                <span className="degree-track-pill font-mono">B.TECH GRADUATE</span>
                <h3 className="degree-title">B.Tech in Computer Science</h3>
                <div className="degree-univ-name">
                  Lovely Professional University · Punjab, India
                </div>
              </div>
              <div className="degree-timeline-badge font-mono">
                2022 – Aug 2026 (Graduated)
              </div>
            </div>

            <p className="degree-focus-summary">
              Specialisation in Cybersecurity. Comprehensive engineering curriculum focused on applied security standards, network defense, system internals, and defensive security methodologies.
            </p>

            {/* Prominent Coursework Grid */}
            <div className="coursework-prominent-block">
              <div className="coursework-block-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <span className="coursework-block-title">Core Security &amp; Computing Coursework</span>
              </div>

              <div className="coursework-cards-grid">
                <div className="coursework-cell">
                  <span className="cell-topic-name">Network Security</span>
                  <span className="cell-topic-detail">Protocols, firewalls &amp; packet inspection</span>
                </div>
                <div className="coursework-cell">
                  <span className="cell-topic-name">Ethical Hacking</span>
                  <span className="cell-topic-detail">Methodologies, recon &amp; penetration testing</span>
                </div>
                <div className="coursework-cell">
                  <span className="cell-topic-name">Cryptography</span>
                  <span className="cell-topic-detail">Ciphers, hashing, PKI &amp; authentication</span>
                </div>
                <div className="coursework-cell">
                  <span className="cell-topic-name">Digital Forensics</span>
                  <span className="cell-topic-detail">Evidence acquisition &amp; artifact analysis</span>
                </div>
                <div className="coursework-cell">
                  <span className="cell-topic-name">Operating Systems</span>
                  <span className="cell-topic-detail">Kernel architecture, memory &amp; processes</span>
                </div>
                <div className="coursework-cell">
                  <span className="cell-topic-name">DSA</span>
                  <span className="cell-topic-detail">Data structures &amp; algorithmic efficiency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Labs & Practicals Glass Card */}
          <div className="education-practicals-card glass-card">
            <div className="practicals-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>

            <h3 className="practicals-heading">Academic Security Labs &amp; Practicals</h3>
            
            <p className="practicals-description">
              Hands-on university lab curriculum encompassing network packet capture analysis, cipher implementation, controlled penetration testing simulations, and digital evidence recovery.
            </p>

            <div className="practicals-tags-cluster">
              <span className="practicals-tag font-mono">Hands-on Lab Practicals</span>
              <span className="practicals-tag font-mono">Vulnerability Lab Simulations</span>
              <span className="practicals-tag font-mono">Incident Analysis</span>
              <span className="practicals-tag font-mono">Host &amp; Network Defense</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-layout-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
          gap: clamp(20px, 3vw, 32px);
          align-items: stretch;
        }

        .education-degree-card {
          padding: clamp(24px, 3.5vw, 36px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .degree-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 16px;
        }

        .degree-track-pill {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 4px;
        }

        .degree-title {
          font-family: var(--font-sans);
          font-size: clamp(1.25rem, 1.6vw, 1.5rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .degree-univ-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .degree-timeline-badge {
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--accent-light);
          border: 1px solid var(--accent-border);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent);
          white-space: nowrap;
        }

        .degree-focus-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        /* Coursework */
        .coursework-prominent-block {
          padding: clamp(16px, 2.5vw, 22px);
          border-radius: var(--radius-md);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
        }

        .coursework-block-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .coursework-block-title {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .coursework-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .coursework-cell {
          display: flex;
          flex-direction: column;
          padding: 10px 14px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .coursework-cell:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .cell-topic-name {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cell-topic-detail {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 2px;
          line-height: 1.35;
        }

        /* Practicals Card */
        .education-practicals-card {
          padding: clamp(24px, 3.5vw, 36px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        .practicals-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: var(--accent-light);
          border: 1px solid var(--accent-border);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .practicals-heading {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .practicals-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .practicals-tags-cluster {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }

        .practicals-tag {
          display: inline-block;
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 960px) {
          .education-layout-grid {
            grid-template-columns: 1fr;
          }

          .coursework-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
