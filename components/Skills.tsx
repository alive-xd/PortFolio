'use client';

import React from 'react';

interface SkillCard {
  title: string;
  subtitle: string;
  tags: string[];
  tintClass: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const skillsList: SkillCard[] = [
    {
      title: 'SOC & Blue Team',
      subtitle: 'Detection & response',
      tags: ['alert triage', 'log analysis', 'incident response', 'IOC analysis', 'threat hunting', 'Security Onion'],
      tintClass: 'tint-indigo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
      )
    },
    {
      title: 'Offensive Security',
      subtitle: 'Pentest & recon',
      tags: ['nmap', 'burp suite', 'metasploit', 'sqlmap', 'wireshark', 'gobuster', 'maltego', 'shodan'],
      tintClass: 'tint-cyan',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      subtitle: 'Evidence & analysis',
      tags: ['autopsy', 'FTK imager', 'memory forensics', 'disk imaging', 'artifact analysis'],
      tintClass: 'tint-blue',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v8"/>
          <path d="M9 11h6"/>
        </svg>
      )
    },
    {
      title: 'AI & Security',
      subtitle: 'LLMs & intelligent systems',
      tags: ['LLM engineering', 'RAG', 'AI security', 'machine learning', 'semantic search'],
      tintClass: 'tint-purple',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="12" cy="12" r="2.5"/>
          <path d="M12 7.5v2m0 5v2.5M7.5 12h2m5 0h2.5"/>
        </svg>
      )
    },
    {
      title: 'Languages',
      subtitle: 'Code I actually write',
      tags: ['python', 'java', 'javascript', 'Go', 'C++', 'DSA'],
      tintClass: 'tint-emerald',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      title: 'Infrastructure',
      subtitle: 'DevOps & platforms',
      tags: ['docker', 'linux', 'CI/CD', 'Next.js', 'cloud infra', 'containers'],
      tintClass: 'tint-violet',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" x2="6" y1="6" y2="6"/>
          <line x1="6" x2="6" y1="18" y2="18"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Technical Skills</h2>
        
        <p className="skills-subtitle reveal">
          Tools, languages, and domains I've built real things with
        </p>

        <div className="skills-grid-new">
          {skillsList.map((skill, index) => (
            <div 
              key={skill.title} 
              className={`skill-card-new ${skill.tintClass} reveal`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="skill-card-header">
                <div className="skill-card-icon-box">
                  {skill.icon}
                </div>
                <div className="skill-card-meta">
                  <h3 className="skill-card-title">{skill.title}</h3>
                  <span className="skill-card-subtitle">{skill.subtitle}</span>
                </div>
              </div>
              
              <div className="skill-card-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-card-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin: -10px auto 40px auto;
          font-size: 1.05rem;
          max-width: 600px;
        }

        .skills-grid-new {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 20px;
        }

        .skill-card-new {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          box-shadow: var(--card-shadow);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-card-new:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .skill-card-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          border: 1px solid var(--border);
          transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        .skill-card-meta {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .skill-card-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .skill-card-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .skill-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-card-tag {
          display: inline-block;
          padding: 5px 11px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        /* Hover interactions colored as per tint */
        .skill-card-new.tint-indigo:hover {
          border-color: #818cf8;
        }
        .skill-card-new.tint-indigo:hover .skill-card-icon-box {
          background: rgba(129, 140, 248, 0.1);
          border-color: #818cf8;
          color: #818cf8;
        }
        .skill-card-new.tint-indigo:hover .skill-card-tag {
          border-color: rgba(129, 140, 248, 0.3);
          background: rgba(129, 140, 248, 0.05);
          color: var(--text-primary);
        }

        .skill-card-new.tint-cyan:hover {
          border-color: #0891b2;
        }
        .skill-card-new.tint-cyan:hover .skill-card-icon-box {
          background: rgba(8, 145, 178, 0.1);
          border-color: #0891b2;
          color: #0891b2;
        }
        .skill-card-new.tint-cyan:hover .skill-card-tag {
          border-color: rgba(8, 145, 178, 0.3);
          background: rgba(8, 145, 178, 0.05);
          color: var(--text-primary);
        }

        .skill-card-new.tint-blue:hover {
          border-color: var(--accent);
        }
        .skill-card-new.tint-blue:hover .skill-card-icon-box {
          background: var(--accent-light);
          border-color: var(--accent);
          color: var(--accent);
        }
        .skill-card-new.tint-blue:hover .skill-card-tag {
          border-color: rgba(73, 97, 220, 0.3);
          background: var(--accent-light);
          color: var(--text-primary);
        }

        .skill-card-new.tint-purple:hover {
          border-color: var(--accent-ai);
        }
        .skill-card-new.tint-purple:hover .skill-card-icon-box {
          background: rgba(124, 58, 237, 0.1);
          border-color: var(--accent-ai);
          color: var(--accent-ai);
        }
        .skill-card-new.tint-purple:hover .skill-card-tag {
          border-color: rgba(124, 58, 237, 0.3);
          background: rgba(124, 58, 237, 0.05);
          color: var(--text-primary);
        }

        .skill-card-new.tint-emerald:hover {
          border-color: var(--accent-sec);
        }
        .skill-card-new.tint-emerald:hover .skill-card-icon-box {
          background: rgba(16, 185, 129, 0.1);
          border-color: var(--accent-sec);
          color: var(--accent-sec);
        }
        .skill-card-new.tint-emerald:hover .skill-card-tag {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.05);
          color: var(--text-primary);
        }

        .skill-card-new.tint-violet:hover {
          border-color: #a78bfa;
        }
        .skill-card-new.tint-violet:hover .skill-card-icon-box {
          background: rgba(167, 139, 250, 0.1);
          border-color: #a78bfa;
          color: #a78bfa;
        }
        .skill-card-new.tint-violet:hover .skill-card-tag {
          border-color: rgba(167, 139, 250, 0.3);
          background: rgba(167, 139, 250, 0.05);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .skills-grid-new {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .skill-card-new {
            padding: 20px 24px;
          }
        }
      `}</style>
    </section>
  );
};
