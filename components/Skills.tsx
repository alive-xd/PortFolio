'use client';

import React from 'react';

interface SkillCard {
  title: string;
  subtitle: string;
  tags: string[];
  accentColor: string;
  accentLight: string;
  badge: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const skillsList: SkillCard[] = [
    {
      title: 'SOC & Blue Team',
      subtitle: 'Detection, triage & mitigation',
      tags: ['alert triage', 'log analysis', 'incident response', 'IOC analysis', 'threat hunting', 'Security Onion'],
      accentColor: '#DC2626',
      accentLight: 'rgba(220, 38, 38, 0.1)',
      badge: 'DEFENSIVE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
      )
    },
    {
      title: 'Offensive Security',
      subtitle: 'Recon, enumeration & auditing',
      tags: ['nmap', 'burp suite', 'metasploit', 'sqlmap', 'wireshark', 'gobuster', 'maltego', 'shodan'],
      accentColor: '#2563EB',
      accentLight: 'rgba(37, 99, 235, 0.1)',
      badge: 'OFFENSIVE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="22" x2="18" y1="12" y2="12"/>
          <line x1="6" x2="2" y1="12" y2="12"/>
          <line x1="12" x2="12" y1="6" y2="2"/>
          <line x1="12" x2="12" y1="22" y2="18"/>
        </svg>
      )
    },
    {
      title: 'Digital Forensics',
      subtitle: 'Disk, memory & artifact triage',
      tags: ['autopsy', 'FTK imager', 'memory forensics', 'disk imaging', 'artifact analysis'],
      accentColor: '#059669',
      accentLight: 'rgba(5, 150, 105, 0.1)',
      badge: 'INVESTIGATION',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v8"/>
          <path d="M9 11h6"/>
        </svg>
      )
    },
    {
      title: 'AI & Security',
      subtitle: 'LLMs & intelligent agents',
      tags: ['LLM engineering', 'RAG', 'AI security', 'machine learning', 'semantic search'],
      accentColor: '#7C3AED',
      accentLight: 'rgba(124, 58, 237, 0.1)',
      badge: 'INTELLIGENCE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="12" cy="12" r="2.5"/>
          <path d="M12 7.5v2m0 5v2.5M7.5 12h2m5 0h2.5"/>
        </svg>
      )
    },
    {
      title: 'Languages',
      subtitle: 'Core systems & algorithms',
      tags: ['python', 'java', 'javascript', 'Go', 'C++', 'DSA'],
      accentColor: '#0284C7',
      accentLight: 'rgba(2, 132, 199, 0.1)',
      badge: 'CORE CODE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      title: 'Infrastructure',
      subtitle: 'Containers & Linux environments',
      tags: ['docker', 'linux', 'CI/CD', 'cloud infra', 'containers'],
      accentColor: '#D97706',
      accentLight: 'rgba(217, 119, 6, 0.1)',
      badge: 'ENVIRONMENTS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" x2="6" y1="6" y2="6"/>
          <line x1="6" x2="6" y1="18" y2="18"/>
        </svg>
      )
    },
    {
      title: 'Web / Frameworks',
      subtitle: 'Modern application architecture',
      tags: ['Next.js'],
      accentColor: '#DC2626',
      accentLight: 'rgba(220, 38, 38, 0.1)',
      badge: 'FRAMEWORK',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container reveal">
        <div className="section-header-wrap">
          <span className="section-overline">Capabilities &amp; Stack</span>
          <h2 className="section-title-centered">Technical Skills</h2>
          <p className="section-subtitle-text">
            Tools, languages, and domains I've built real things with.
          </p>
        </div>

        <div className="skills-grid-new">
          {skillsList.map((skill, index) => (
            <div 
              key={skill.title} 
              className="skill-glass-card glass-card"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="skill-card-header">
                <div 
                  className="skill-card-icon-box"
                  style={{ 
                    color: skill.accentColor, 
                    backgroundColor: skill.accentLight,
                    borderColor: `${skill.accentColor}33` 
                  }}
                >
                  {skill.icon}
                </div>
                <div className="skill-card-meta">
                  <div className="skill-badge-row">
                    <span className="skill-cat-badge font-mono">{skill.badge}</span>
                  </div>
                  <h3 className="skill-card-title">{skill.title}</h3>
                  <span className="skill-card-subtitle">{skill.subtitle}</span>
                </div>
              </div>
              
              <div className="skill-card-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-card-tag font-mono">
                    <span className="tag-dot" style={{ backgroundColor: skill.accentColor }} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid-new {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(16px, 2.5vw, 22px);
        }

        .skill-glass-card {
          padding: clamp(22px, 3vw, 26px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
        }

        .skill-card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .skill-card-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }

        .skill-glass-card:hover .skill-card-icon-box {
          transform: scale(1.08);
        }

        .skill-card-meta {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .skill-badge-row {
          margin-bottom: 4px;
        }

        .skill-cat-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .skill-card-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 3px;
          letter-spacing: -0.01em;
        }

        .skill-card-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .skill-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        [data-theme="dark"] .skill-card-tag {
          background: rgba(255, 255, 255, 0.03);
        }

        .tag-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          opacity: 0.8;
          flex-shrink: 0;
        }

        .skill-glass-card:hover .skill-card-tag {
          border-color: var(--card-border-hover);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .skills-grid-new {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
