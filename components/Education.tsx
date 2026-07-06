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
            <span className="resume-item-date font-mono">2022 – Aug 2026 (Expected)</span>
          </div>
          <div className="resume-item-org">Lovely Professional University · Punjab, India</div>
          <p className="resume-item-desc">
            Specialisation in Cybersecurity. Focused on applying technical security standards and developing defensive methodologies.
          </p>
          <div className="coursework-box">
            <span className="coursework-label">Relevant Coursework</span>
            <div className="coursework-tags">
              <span>Network Security</span>
              <span>Ethical Hacking</span>
              <span>Cryptography</span>
              <span>Digital Forensics</span>
              <span>Operating Systems</span>
              <span>DSA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
