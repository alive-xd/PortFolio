'use client';

import React from 'react';

export const Education: React.FC = () => {
  return (
    <div id="education" className="resume-col">
      <h2 className="resume-col-title reveal">Education</h2>
      <div className="resume-list">
        <div className="resume-item reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="resume-item-header">
            <h3 className="resume-item-role">Bachelor of Technology (CS — Cybersecurity)</h3>
            <span className="resume-item-date font-mono">2022 – Aug 2026 (Expected)</span>
          </div>
          <div className="resume-item-org">Lovely Professional University</div>
          <p className="resume-item-desc">
            Focusing on ethical hacking, cryptography, digital forensics, and secure systems architecture. Punjab, India.
          </p>
          <div className="coursework-box">
            <span className="coursework-label">Coursework:</span>
            <div className="coursework-tags">
              <span>network security</span>
              <span>ethical hacking</span>
              <span>cryptography</span>
              <span>digital forensics</span>
              <span>operating systems</span>
              <span>data structures</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTF & Community */}
      <div className="experience-ctf-container reveal" style={{ marginTop: '30px', transitionDelay: '0.2s' }}>
        <h3 className="ctf-section-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#de1f26', verticalAlign: 'middle' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          CTF &amp; Community
        </h3>
        <div className="ctf-card">
          <div className="ctf-card-header">
            <span className="ctf-platform">TryHackMe</span>
            <a href="https://tryhackme.com/p/alivexd" target="_blank" rel="noopener noreferrer" className="ctf-link-btn">
              tryhackme.com/p/alivexd
            </a>
          </div>
          <div className="ctf-rank-text">
            <strong>Top 1% globally</strong> — active on SOC and offensive security learning paths.
          </div>
          <p className="ctf-desc">
            Practicing threat detection, log analysis, and vulnerability research challenges on TryHackMe. Profile: @alivexd
          </p>
        </div>
      </div>
    </div>
  );
};

