'use client';

import React from 'react';

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  status: string;
  statusType: 'active' | 'active-exp';
  accentColor: string;
  link: string;
}

export const Certifications: React.FC = () => {
  // Sorted by relevance to security roles (vendor security certifications & pentesting first)
  const certificationsList: Certification[] = [
    {
      title: 'Fortinet Certified Associate',
      issuer: 'Fortinet · ID: 30257988455K',
      issued: 'Apr 2025',
      status: 'Active · exp 2027',
      statusType: 'active-exp',
      accentColor: '#2563EB',
      link: 'https://linkedin.com/in/sushen-kumar'
    },
    {
      title: 'Fortinet Certified Fundamentals',
      issuer: 'Fortinet · ID: 83294560935K',
      issued: 'Apr 2025',
      status: 'Active · exp 2027',
      statusType: 'active-exp',
      accentColor: '#2563EB',
      link: 'https://www.credly.com/badges/8c47a3bb-6e97-4f56-b6d0-b8bb9cf2a917'
    },
    {
      title: 'Cisco — Ethical Hacker',
      issuer: 'Certificate (Cisco Networking Academy course)',
      issued: 'Oct 2024',
      status: 'Active',
      statusType: 'active',
      accentColor: '#0284C7',
      link: 'https://www.credly.com/badges/799e311f-6c9e-4aaf-ac68-c316e4535f38'
    },
    {
      title: 'Penetration Testing & Ethical Hacking',
      issuer: 'Cybrary',
      issued: 'Nov 2024',
      status: 'Active',
      statusType: 'active',
      accentColor: '#059669',
      link: 'https://app.cybrary.it/courses/api/certificate/CC-0e57b62e-2d17-49e4-9022-083abf7c03ad/view'
    },
    {
      title: 'Privacy & Security in Online Social Media',
      issuer: 'NPTEL · ID: NPTEL25CS117S1358701853',
      issued: 'Dec 2025',
      status: 'Active · exp 2029',
      statusType: 'active-exp',
      accentColor: '#7C3AED',
      link: 'https://nptel.ac.in/'
    }
  ];

  return (
    <section id="certs" className="section certs-section">
      <div className="container reveal">
        <div className="section-header-wrap">
          <h2 className="section-title-centered">Certifications</h2>
          <p className="section-subtitle-text">
            Verified credentials and vendor certifications across offensive &amp; defensive security.
          </p>
        </div>

        <div className="certs-deck glass-card">
          {certificationsList.map((cert, index) => (
            <div 
              key={cert.title} 
              className="cert-item-row"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="cert-row-left">
                <div 
                  className="cert-status-dot" 
                  style={{ 
                    backgroundColor: cert.accentColor 
                  }} 
                />
                <div className="cert-info-wrap">
                  <h3 className="cert-item-title">{cert.title}</h3>
                  <span className="cert-item-details">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="cert-row-right">
                <span className="cert-item-date font-mono">{cert.issued}</span>
                <span className="cert-status-badge font-mono">
                  {cert.status}
                </span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-verify-btn"
                  aria-label={`Verify ${cert.title}`}
                >
                  <span>Verify</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" x2="21" y1="14" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-deck {
          max-width: 920px;
          margin: 0 auto;
          padding: 8px 24px;
          display: flex;
          flex-direction: column;
        }

        .cert-item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 12px;
          border-bottom: 1px solid var(--border);
          transition: background-color var(--transition-fast), border-radius var(--transition-fast);
        }

        .cert-item-row:last-child {
          border-bottom: none;
        }

        .cert-item-row:hover {
          background-color: var(--accent-light);
          border-radius: var(--radius-sm);
        }

        .cert-row-left {
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
        }

        .cert-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .cert-info-wrap {
          display: flex;
          flex-direction: column;
        }

        .cert-item-title {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 3px;
          letter-spacing: -0.01em;
        }

        .cert-item-details {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .cert-row-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .cert-item-date {
          font-size: 0.84rem;
          color: var(--text-muted);
          min-width: 65px;
          text-align: right;
        }

        .cert-status-badge {
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 700;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-sec-light);
          border: 1px solid rgba(5, 150, 105, 0.3);
          color: var(--accent-sec);
        }

        .cert-verify-btn {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 14px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--accent-border);
          background: var(--accent-light);
          transition: all var(--transition-fast);
          min-width: 74px;
          justify-content: center;
        }

        .cert-verify-btn:hover {
          background: var(--accent);
          color: #FFFFFF !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        @media (max-width: 768px) {
          .certs-deck {
            padding: 8px 12px;
          }

          .cert-item-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 18px 8px;
          }

          .cert-row-right {
            width: 100%;
            justify-content: space-between;
            gap: 10px;
            padding-left: 24px;
          }

          .cert-item-date {
            text-align: left;
            min-width: auto;
          }
        }
      `}</style>
    </section>
  );
};
