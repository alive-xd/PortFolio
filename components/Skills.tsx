'use client';

import React from 'react';

interface SkillRow {
  category: string;
  title: string;
  tags: string[];
  tintClass: string;
}

export const Skills: React.FC = () => {
  const skillsList: SkillRow[] = [
    {
      category: 'BLUE TEAM',
      title: 'SOC & Blue Team Operations',
      tags: ['alert triage', 'log analysis', 'incident response', 'IOC analysis', 'threat hunting', 'SIEM fundamentals', 'network monitoring', 'Security Onion'],
      tintClass: 'tint-indigo'
    },
    {
      category: 'OFFENSIVE',
      title: 'Offensive Security & Threat Research',
      tags: ['nmap', 'burp suite', 'metasploit', 'sqlmap', 'wireshark', 'nikto', 'gobuster', 'maltego', 'shodan', 'vulnerability research', 'malware analysis', 'recon', 'OSINT', 'pen testing'],
      tintClass: 'tint-cyan'
    },
    {
      category: 'FORENSICS',
      title: 'Digital Forensics',
      tags: ['autopsy', 'FTK imager', 'memory forensics', 'disk imaging', 'evidence acquisition', 'artifact analysis'],
      tintClass: 'tint-blue'
    },
    {
      category: 'AI & SECURITY',
      title: 'AI Security & Intelligent Systems',
      tags: ['LLM engineering', 'AI security', 'RAG', 'machine learning', 'neural networks', 'semantic search'],
      tintClass: 'tint-purple'
    },
    {
      category: 'PLATFORM ENG',
      title: 'Software & Platform Engineering',
      tags: ['full stack', 'API design', 'secure coding', 'cloud native', 'automation'],
      tintClass: 'tint-violet'
    },
    {
      category: 'CORE TECH',
      title: 'Languages & Frameworks',
      tags: ['python', 'java', 'javascript', 'Go', 'C++', 'Next.js', 'PyTorch', 'Docker', 'DSA'],
      tintClass: 'tint-emerald'
    },
    {
      category: 'DEVOPS',
      title: 'Infrastructure & DevOps',
      tags: ['cloud infra', 'containers', 'CI/CD pipelines', 'Linux systems', 'orchestration'],
      tintClass: 'tint-indigo'
    },
    {
      category: 'FRONTEND & UX',
      title: 'Frontend & UX',
      tags: ['UI/UX systems', 'design systems', 'creative code', 'interactive dev'],
      tintClass: 'tint-cyan'
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Skills</h2>
        
        <div className="skills-rows-container">
          {skillsList.map((skill, index) => (
            <div 
              key={skill.title} 
              className={`skill-row-card ${skill.tintClass} reveal`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="skill-row-left">
                <span className="skill-row-category">{skill.category}</span>
              </div>
              
              <h3 className="skill-row-title">{skill.title}</h3>
              
              <div className="skill-row-right">
                <div className="skill-row-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="skill-row-pill">{tag}</span>
                  ))}
                </div>
                <div className="skill-row-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
