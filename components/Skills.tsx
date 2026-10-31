'use client';

import React from 'react';

interface SkillCard {
  title: string;
  subtitle: string;
  tags: string[];
  accentColor: string;
  accentLight: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const skillsList: SkillCard[] = [
    {
      title: 'SOC & Blue Team',
      subtitle: 'Detection, triage & incident response',
      tags: ['alert triage', 'log analysis', 'incident response', 'IOC analysis', 'threat hunting', 'Security Onion'],
      accentColor: '#2563EB',
      accentLight: 'rgba(37, 99, 235, 0.08)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
      )
    },
    {
      title: 'Offensive Security',
      subtitle: 'Recon, enumeration & vulnerability assessment',
      tags: ['nmap', 'burp suite', 'metasploit', 'sqlmap', 'wireshark', 'gobuster', 'maltego', 'shodan'],
      accentColor: '#0284C7',
      accentLight: 'rgba(2, 132, 199, 0.08)',
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
      accentLight: 'rgba(5, 150, 105, 0.08)',
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
      subtitle: 'LLMs, semantic pipelines & automation',
      tags: ['LLM engineering', 'RAG', 'AI security', 'machine learning', 'semantic search'],
      accentColor: '#7C3AED',
      accentLight: 'rgba(124, 58, 237, 0.08)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="12" cy="12" r="2.5"/>
          <path d="M12 7.5v2m0 5v2.5M7.5 12h2m5 0h2.5"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container reveal">
        <div className="section-header-wrap">
          <h2 className="section-title-centered">Technical Skills</h2>
          <p className="section-subtitle-text">
            Security toolkits, investigation platforms, and automated analysis pipelines.
          </p>
        </div>

        <div className="skills-grid-clean">
          {skillsList.map((skill, index) => (
            <div 
              key={skill.title} 
              className="skill-glass-card glass-card"
              style={{ transitionDelay: `${index * 0.06}s` }}
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
        .skills-grid-clean {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(16px, 2.5vw, 24px);
        }

        .skill-glass-card {
          padding: clamp(22px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .skill-card-icon-box {
          width: 48px;
          height: 48px;
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

        .skill-card-title {
          font-family: var(--font-sans);
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 2px;
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
          padding: 6px 13px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        [data-theme="dark"] .skill-card-tag {
          background: rgba(255, 255, 255, 0.03);
        }

        .tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .skill-glass-card:hover .skill-card-tag {
          border-color: var(--card-border-hover);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .skills-grid-clean {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
