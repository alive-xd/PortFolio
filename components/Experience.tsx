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
      duration: 'January 2025 – December 2025',
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
      duration: 'February 13–15, 2024',
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
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Experience</h2>
        <div className="certs-timeline-container">
          <div className="certs-timeline-line"></div>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="certs-timeline-item reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="certs-timeline-dot"></div>
              <div className="cert-card">
                <div className="cert-header">
                  <div className="cert-meta">
                    <span className="cert-org">{exp.organisation}</span>
                    <h3 className="cert-title">{exp.role}</h3>
                    <div className="cert-dates font-mono">
                      {exp.duration}
                    </div>
                    <p style={{ marginTop: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
