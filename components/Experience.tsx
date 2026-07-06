'use client';

import React from 'react';

interface ExperienceEntry {
  role: string;
  organisation: string;
  duration: string;
  desc: string;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceEntry[] = [
    {
      role: 'Security Researcher (Freelance)',
      organisation: 'Bugcrowd',
      duration: 'Jan 2025 – Dec 2025',
      desc: 'Conducted independent vulnerability research across multiple bug bounty programs on the Bugcrowd platform. Performed web application penetration testing including reconnaissance, enumeration, and exploitation of common vulnerability classes (OWASP Top 10). Reported security findings with proof-of-concept documentation and remediation recommendations.'
    },
    {
      role: 'Collaborative Security Research Project',
      organisation: 'Independent (Peer Collaboration)',
      duration: '2024 – 2025',
      desc: 'Collaborated with a peer researcher on a joint vulnerability assessment and OSINT research initiative. Conducted coordinated reconnaissance, threat modelling, and tooling development across shared test environments. Produced a joint research report covering findings and recommended mitigations.'
    },
    {
      role: 'Hackathon Participant',
      organisation: 'Code-A-Haunt 2.0',
      duration: 'Feb 13–15, 2024',
      desc: 'Built and presented a technical security project under 48-hour constraints as part of a competitive hackathon. Developed a working prototype, documented the approach, and delivered a live demonstration to judges.'
    },
    {
      role: 'Volunteer',
      organisation: 'Jeet Foundation NGO',
      duration: 'July 2023',
      desc: 'Contributed to social impact and community outreach programs. Supported organisational operations and community engagement initiatives.'
    }
  ];

  return (
    <div id="experience" className="resume-col">
      <h2 className="resume-col-title">Experience</h2>
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
            <p className="resume-item-desc">{exp.desc}</p>
          </div>
        ))}
      </div>

      <div className="experience-ctf-container reveal" style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
        <h3 className="ctf-section-title" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          CTF &amp; Community
        </h3>
        <div className="strength-card" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px 24px', alignItems: 'flex-start', borderRadius: '12px', background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>TryHackMe</span>
            <a href="https://tryhackme.com/p/alivexd" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ padding: '4px 10px', fontSize: '0.78rem' }}>
              Profile: tryhackme.com/p/alivexd
            </a>
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Status:</strong> Top 1% globally — active on SOC and offensive security learning paths
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
            Actively practicing threat detection, log analysis, and offensive security challenges on TryHackMe. Profile: @alivexd
          </p>
        </div>
      </div>
    </div>
  );
};
