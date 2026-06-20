'use client';

import React from 'react';

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  id?: string;
  status: string;
  statusType: 'active' | 'active-exp' | 'non-security';
  dotColor: string;
  link: string;
}

export const Certifications: React.FC = () => {
  const certificationsList: Certification[] = [
    {
      title: 'Cisco — Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      issued: 'Oct 2024',
      status: 'Active',
      statusType: 'active',
      dotColor: '#3b82f6', // Blue dot
      link: 'https://www.credly.com/badges/799e311f-6c9e-4aaf-ac68-c316e4535f38'
    },
    {
      title: 'Fortinet Certified Associate',
      issuer: 'Fortinet · ID: 30257988455K',
      issued: 'Apr 2025',
      status: 'Active · exp 2027',
      statusType: 'active-exp',
      dotColor: '#3b82f6', // Blue dot
      link: 'https://linkedin.com/in/sushen-kumar'
    },
    {
      title: 'Fortinet Certified Fundamentals',
      issuer: 'Fortinet · ID: 83294560935K',
      issued: 'Apr 2025',
      status: 'Active · exp 2027',
      statusType: 'active-exp',
      dotColor: '#3b82f6', // Blue dot
      link: 'https://www.credly.com/badges/8c47a3bb-6e97-4f56-b6d0-b8bb9cf2a917'
    },
    {
      title: 'Penetration Testing & Ethical Hacking',
      issuer: 'Cybrary',
      issued: 'Nov 2024',
      status: 'Active',
      statusType: 'active',
      dotColor: '#10b981', // Green dot
      link: 'https://app.cybrary.it/courses/api/certificate/CC-0e57b62e-2d17-49e4-9022-083abf7c03ad/view'
    },
    {
      title: 'Privacy & Security in Online Social Media',
      issuer: 'NPTEL · ID: NPTEL25CS117S1358701853',
      issued: 'Dec 2025',
      status: 'Active · exp 2029',
      statusType: 'active-exp',
      dotColor: '#10b981', // Green dot
      link: 'https://nptel.ac.in/'
    },
    {
      title: 'SAP Analytics Cloud',
      issuer: 'SAP · ID: SAP-SAC-2026-904',
      issued: 'Jan 2026',
      status: 'Non-security',
      statusType: 'non-security',
      dotColor: '#6b7280', // Grey dot
      link: 'https://www.credly.com/badges/d159757b-983d-4a08-a390-32f6c245b5ea'
    }
  ];

  return (
    <section id="certs" className="section certs-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Certifications</h2>
        
        <p className="certs-subtitle reveal">
          Verified certifications — click to verify on issuer's platform
        </p>

        <div className="certs-list-new">
          {certificationsList.map((cert, index) => (
            <div 
              key={cert.title} 
              className="cert-list-row reveal"
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <div className="cert-row-left">
                <span className="cert-status-dot" style={{ backgroundColor: cert.dotColor }} />
                <div className="cert-info-wrap">
                  <h3 className="cert-item-title">{cert.title}</h3>
                  <span className="cert-item-details">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="cert-row-right">
                <span className="cert-item-date">{cert.issued}</span>
                <span className={`cert-status-badge ${cert.statusType}`}>
                  {cert.status}
                </span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-verify-link"
                >
                  Verify <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin: -10px auto 40px auto;
          font-size: 1.05rem;
          max-width: 600px;
        }

        .certs-list-new {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .cert-list-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 8px;
          border-bottom: 1px solid var(--border);
          transition: background-color 0.3s ease;
        }

        .cert-list-row:last-child {
          border-bottom: none;
        }

        .cert-list-row:hover {
          background-color: rgba(var(--accent-rgb), 0.015);
        }

        .cert-row-left {
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: left;
        }

        .cert-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.15);
        }

        .cert-info-wrap {
          display: flex;
          flex-direction: column;
        }

        .cert-item-title {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 3px;
        }

        .cert-item-details {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .cert-row-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .cert-item-date {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          min-width: 70px;
          text-align: right;
        }

        .cert-status-badge {
          padding: 5px 12px;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .cert-status-badge.active,
        .cert-status-badge.active-exp {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #10b981;
        }

        .cert-status-badge.non-security {
          background: rgba(107, 114, 128, 0.08);
          border: 1px solid rgba(107, 114, 128, 0.25);
          color: var(--text-secondary);
        }

        .cert-verify-link {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s ease, transform 0.2s ease;
          min-width: 65px;
        }

        .cert-verify-link:hover {
          color: var(--accent-hover);
          transform: translateX(2px);
        }

        @media (max-width: 768px) {
          .cert-list-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 20px 8px;
          }
          .cert-row-right {
            align-self: flex-start;
            padding-left: 28px;
            width: 100%;
            justify-content: space-between;
            gap: 12px;
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
