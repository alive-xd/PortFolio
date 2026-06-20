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
      desc: 'Conducted independent vulnerability research across multiple bug bounty programs on the Bugcrowd platform. Performed web penetration testing (OWASP Top 10) and reported findings with proof-of-concept documentation.'
    },
    {
      role: 'Collaborative Security Research',
      organisation: 'Independent (Peer Collaboration)',
      duration: '2024 – 2025',
      desc: 'Collaborated with a peer researcher on a joint vulnerability assessment and OSINT initiative. Conducted coordinated reconnaissance, threat modelling, and tooling development.'
    },
    {
      role: 'Hackathon Participant',
      organisation: 'Code-A-Haunt 2.0',
      duration: 'Feb 13–15, 2024',
      desc: 'Built and presented a technical security project under 48-hour constraints. Developed a working prototype, documented the approach, and delivered a live demo.'
    },
    {
      role: 'Volunteer',
      organisation: 'Jeet Foundation NGO',
      duration: 'July 2023',
      desc: 'Contributed to social impact and community outreach programs, supporting organizational operations.'
    }
  ];

  return (
    <div id="experience" className="resume-col">
      <h2 className="resume-col-title reveal">Experience</h2>
      <div className="resume-list">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="resume-item reveal"
            style={{ transitionDelay: `${index * 0.1}s` }}
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
    </div>
  );
};

