'use client';

import React from 'react';

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  id: string;
  link?: string;
}

export const Certifications: React.FC = () => {
  const certificationsList: Certification[] = [
    {
      title: 'SAP Analytics Cloud',
      issuer: 'SAP',
      issued: 'Jan 2026',
      id: 'SAP-SAC-2026-904',
      link: 'https://www.credly.com/badges/d159757b-983d-4a08-a390-32f6c245b5ea'
    },
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL',
      issued: 'Dec 2025',
      expires: 'Dec 2029',
      id: 'NPTEL25CS117S1358701853',
      link: 'https://nptel.ac.in/'
    },
    {
      title: 'Fortinet Certified Fundamentals',
      issuer: 'Fortinet',
      issued: 'Apr 2025',
      expires: 'Apr 2027',
      id: '83294560935K',
      link: 'https://www.credly.com/badges/8c47a3bb-6e97-4f56-b6d0-b8bb9cf2a917'
    },
    {
      title: 'Fortinet Certified Associate',
      issuer: 'Fortinet',
      issued: 'Apr 2025',
      expires: 'Apr 2027',
      id: '30257988455K',
      link: 'https://linkedin.com/in/sushen-kumar'
    },
    {
      title: 'Penetration Testing and Ethical Hacking',
      issuer: 'Cybrary',
      issued: 'Nov 2024',
      id: 'CC-0e57b62a-2d17-49e4-9022-083abf7c03ad',
      link: 'https://app.cybrary.it/courses/api/certificate/CC-0e57b62e-2d17-49e4-9022-083abf7c03ad/view'
    },
    {
      title: 'Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      issued: 'Oct 2024',
      id: '799e311f-6c9e-4aaf-ac68-c316e4535f38',
      link: 'https://www.credly.com/badges/799e311f-6c9e-4aaf-ac68-c316e4535f38'
    }
  ];

  return (
    <section id="certs" className="section certs-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Certifications</h2>

        <div className="certs-timeline-container">
          <div className="certs-timeline-line"></div>
          {certificationsList.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certs-timeline-item reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="certs-timeline-dot"></div>
              <div className="cert-card">
                <div className="cert-header">
                  <div className="cert-meta">
                    <span className="cert-org">{cert.issuer}</span>
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-dates font-mono">
                      Issued: {cert.issued} {cert.expires ? `· Expires: ${cert.expires}` : ''}
                    </div>
                    <div className="cert-id font-mono">
                      ID: {cert.id}
                    </div>
                  </div>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-sm cert-btn"
                  >
                    Verify Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
