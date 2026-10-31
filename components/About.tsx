'use client';

import React from 'react';

export const About: React.FC = () => {
  const strengths = [
    {
      title: 'Cybersecurity Research',
      desc: 'Penetration testing, vulnerability assessment, OSINT, malware analysis, digital forensics, and threat intelligence across networked environments.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
      ),
      tag: 'OFFENSIVE & DEFENSIVE',
      tint: 'red'
    },
    {
      title: 'Security Automation',
      desc: 'Building automated security scanners, detection scripts, monitoring pipelines, and custom offensive/defensive tooling using Python and Java.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      tag: 'PIPELINES & SCRIPTS',
      tint: 'blue'
    },
    {
      title: 'AI Engineering',
      desc: 'Designing LLM-integrated architectures, semantic search pipelines, RAG systems, and intelligent agents applied to security operations and automation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5"/>
          <circle cx="5" cy="12" r="2.5"/>
          <circle cx="19" cy="12" r="2.5"/>
          <circle cx="12" cy="19" r="2.5"/>
          <circle cx="12" cy="12" r="2.5"/>
          <path d="M12 7.5v2m0 5v2.5M7.5 12h2m5 0h2.5M8.5 8.5l1.5 1.5m4 4l1.5 1.5M15.5 8.5L14 10m-4 4l-1.5 1.5"/>
        </svg>
      ),
      tag: 'RAG & INTELLIGENT AGENTS',
      tint: 'purple'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container reveal">
        <div className="section-header-wrap">
          <span className="section-overline">Identity &amp; Foundation</span>
          <h2 className="section-title-centered">About Me</h2>
          <p className="section-subtitle-text">
            Blending offensive security analysis with modern detection engineering and automation pipelines.
          </p>
        </div>

        <div className="about-grid-layout">
          {/* Main Story Glass Card */}
          <div className="about-bio-card glass-card">
            <div className="card-top-indicator">
              <span className="bio-terminal-prompt">$ cat profile_summary.md</span>
            </div>
            <div className="about-bio-body">
              <p className="bio-paragraph">
                Hi, I'm <strong>Sushen Kumar</strong> — a cybersecurity researcher and security automation engineer based in Bangalore. I design and build offensive security tooling, detection engineering pipelines, and intelligent automation frameworks that solve real-world security challenges.
              </p>
              <p className="bio-paragraph">
                B.Tech in Computer Science (Cybersecurity), Lovely Professional University, graduated August 2026. Actively seeking SOC analysis, penetration testing, or security engineering roles. Open to remote work and relocation anywhere in India.
              </p>
            </div>
            <div className="bio-highlights-strip">
              <div className="bio-badge">
                <span className="bio-badge-label">Focus:</span>
                <span className="bio-badge-val">SOC &amp; Detection Engineering</span>
              </div>
              <div className="bio-badge">
                <span className="bio-badge-label">Education:</span>
                <span className="bio-badge-val">B.Tech CS (Cybersecurity)</span>
              </div>
              <div className="bio-badge">
                <span className="bio-badge-label">Status:</span>
                <span className="bio-badge-val">Graduated Aug 2026</span>
              </div>
            </div>
          </div>

          {/* 3 Pillars Glass Grid */}
          <div className="about-pillars-grid">
            {strengths.map((item, index) => (
              <div 
                key={item.title} 
                className={`pillar-glass-card glass-card tint-${item.tint}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    {item.icon}
                  </div>
                  <span className="pillar-tag">{item.tag}</span>
                </div>
                <h3 className="pillar-title">{item.title}</h3>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: clamp(20px, 3vw, 32px);
          align-items: stretch;
        }

        .about-bio-card {
          padding: clamp(24px, 3.5vw, 36px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-top-indicator {
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }

        .bio-terminal-prompt {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent-red);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .about-bio-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .bio-paragraph {
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .bio-paragraph strong {
          color: var(--text-primary);
        }

        .bio-highlights-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }

        .bio-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
        }

        .bio-badge-label {
          color: var(--text-muted);
          font-weight: 600;
        }

        .bio-badge-val {
          color: var(--text-primary);
          font-weight: 700;
          font-family: var(--font-sans);
        }

        /* Pillars Column */
        .about-pillars-grid {
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 2vw, 18px);
        }

        .pillar-glass-card {
          padding: clamp(18px, 2.5vw, 24px);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pillar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .pillar-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          transition: all 0.2s ease;
        }

        .tint-red .pillar-icon-box { color: var(--accent-red); }
        .tint-blue .pillar-icon-box { color: var(--accent-blue); }
        .tint-purple .pillar-icon-box { color: #8B5CF6; }

        .pillar-glass-card:hover .pillar-icon-box {
          transform: scale(1.08);
        }

        .pillar-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .pillar-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 960px) {
          .about-grid-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
