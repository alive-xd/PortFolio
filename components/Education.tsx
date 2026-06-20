'use client';

import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Education</h2>
        <div className="certs-timeline-container">
          <div className="certs-timeline-line"></div>
          <div className="certs-timeline-item reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="certs-timeline-dot"></div>
            <div className="cert-card">
              <div className="cert-header">
                <div className="cert-meta">
                  <span className="cert-org">Lovely Professional University</span>
                  <h3 className="cert-title">Bachelor of Technology — Computer Science (Cybersecurity Specialisation)</h3>
                  <div className="cert-dates font-mono">
                    2022 – August 2026 (Expected) · Punjab, India
                  </div>
                  <p style={{ marginTop: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <strong>Relevant coursework:</strong> network security, ethical hacking, cryptography, digital forensics, operating systems, data structures & algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
