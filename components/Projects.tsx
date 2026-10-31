'use client';

import React, { useState } from 'react';

interface StandardProject {
  id?: string;
  name: string;
  tag: string;
  summary: string;
  stack: string[];
  live?: string;
  github?: string;
  accent: string;
}

const OTHER_PROJECTS: StandardProject[] = [
  {
    name: 'ReconX',
    tag: 'OSINT & Reconnaissance',
    summary: 'Client-side OSINT platform centralizing 80+ intelligence tools into structured reconnaissance workflows with zero backend dependencies.',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Lucide React', 'Vercel'],
    live: 'https://getreconx.vercel.app/',
    github: 'https://github.com/alive-xd/ReconX',
    accent: '#059669',
  },
  {
    name: 'NoCap',
    tag: 'Threat Intelligence',
    summary: 'Traceable threat intelligence platform aggregating security feeds into evidence-backed cases with transparent, explainable risk scoring.',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'REST APIs'],
    live: '',
    github: 'https://github.com/alive-xd/NoCap',
    accent: '#2563EB',
  },
  {
    name: 'SentriX',
    tag: 'SOC Management',
    summary: 'Modern Security Operations Center (SOC) platform streamlining incident lifecycle from alert ingestion to case triage and resolution.',
    stack: ['Next.js 15', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
    live: '',
    github: 'https://github.com/alive-xd/SentriX',
    accent: '#2563EB',
  },
  {
    name: 'Chat Decoder',
    tag: 'Digital Forensics',
    summary: 'AI-powered WhatsApp communication forensics platform applying NLP and RAG pipelines for pattern identification and behavioral analysis.',
    stack: ['Python', 'Next.js', 'Gemini 1.5 Flash', 'ChromaDB', 'FastAPI'],
    live: '',
    github: 'https://github.com/alive-xd/ChatDecoder',
    accent: '#7C3AED',
  },
  {
    name: 'CineAI',
    tag: 'AI Recommendation Engine',
    summary: 'Full-stack AI recommendation engine combining semantic vector search, a 4-signal hybrid algorithm, and explainable attribution scores.',
    stack: ['Next.js 14', 'FastAPI', 'Python', 'PostgreSQL', 'Qdrant', 'Redis', 'Docker'],
    live: '',
    github: 'https://github.com/alive-xd/CineAI',
    accent: '#0284C7',
  },
];

const GH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const EXT_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" x2="21" y1="14" y2="3"/>
  </svg>
);

export const Projects: React.FC = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section id="projects" className="section projects-section">
      <div className="container reveal">
        <div className="section-header-wrap">
          <span className="section-overline">Engineered Solutions</span>
          <h2 className="section-title-centered">Featured Projects</h2>
          <p className="section-subtitle-text">
            Detection engineering pipelines, OSINT toolkits, and security platforms tested on real data.
          </p>
        </div>

        <div className="projects-responsive-grid">
          {/* Featured Project: Trace */}
          <article id="trace" className="project-grid-card featured-trace-card glass-card">
            <div className="trace-header-row">
              <div className="trace-badge-group">
                <span className="trace-badge font-mono">
                  FEATURED DETECTION ENGINEERING
                </span>
              </div>
              <div className="trace-stats-strip">
                <span className="trace-stat-pill font-mono">13 rules · 10 techniques · 85 → 11 alerts</span>
              </div>
            </div>

            <div className="trace-main-info">
              <h3 className="trace-title">Trace</h3>
              <p className="trace-summary">
                Trace is a Sigma detection-rule validation pipeline that tests hand-written SOC detection logic against real, historically captured malware execution logs — not synthetic or self-generated test data. It sources genuine Windows Event Log captures from documented attack technique executions, exposes two real coverage gaps discovered through that testing, and ships a live interactive tool that runs detection logic on demand.
              </p>
            </div>

            <ul className="trace-core-bullets" role="list">
              <li>
                <div className="bullet-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span>Real-data validation against genuine Windows Event Logs</span>
              </li>
              <li>
                <div className="bullet-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span>The registry persistence coverage gap</span>
              </li>
              <li>
                <div className="bullet-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span>The false-positive diagnosis</span>
              </li>
            </ul>

            {/* Collapsible Technical Details */}
            <div className="trace-collapsible-wrapper">
              <button 
                type="button" 
                className="trace-details-toggle"
                onClick={() => setDetailsOpen(!detailsOpen)}
                aria-expanded={detailsOpen}
              >
                <span>{detailsOpen ? 'Hide technical details' : 'Show technical details'}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ transform: detailsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {detailsOpen && (
                <div className="trace-collapsible-content">
                  <div className="trace-detail-item">
                    <div className="detail-tag font-mono">EVTX PIPELINE</div>
                    <strong>Real-Data Validation Pipeline:</strong>
                    <span>Fetches, parses, and evaluates 13 Sigma detection rules across 10 MITRE ATT&amp;CK techniques against genuine captured Windows Event Logs from the EVTX-ATTACK-SAMPLES research dataset, rather than hand-written synthetic test cases.</span>
                  </div>
                  <div className="trace-detail-item">
                    <div className="detail-tag font-mono">PERSISTENCE GAP</div>
                    <strong>Registry Persistence Coverage Gap:</strong>
                    <span>Discovered that a rule assuming command-line-based registry modification (reg.exe) completely missed a real malware sample that wrote its persistence key directly via the Windows API. Diagnosed the gap by pivoting detection from Process Creation (Event ID 1) to Registry Events (Event ID 12/13/14), closing the blind spot regardless of execution method.</span>
                  </div>
                  <div className="trace-detail-item">
                    <div className="detail-tag font-mono">ALERT REDUCTION</div>
                    <strong>False-Positive Inflation Diagnosis:</strong>
                    <span>Identified that an initial rundll32 detection rule was generating 85 matches, 74 of which were benign OS telemetry (module loads, not executions). Root-caused the issue to an overly broad log-source assumption and tightened the rule to Event ID 1 only, reducing output to 11 precise, actionable alerts — a real false-positive reduction caught before reaching production.</span>
                  </div>
                  <div className="trace-detail-item">
                    <div className="detail-tag font-mono">LIVE ENGINE</div>
                    <strong>Live Interactive Detection Tester:</strong>
                    <span>A Vercel serverless function runs the actual Sigma rule-matching logic on demand against real historical samples or user-submitted JSON, returning genuine match/no-match results computed live.</span>
                  </div>
                </div>
              )}
            </div>

            <div className="project-chips-wrap">
              {['Python', 'Sigma', 'Vercel', 'JavaScript', 'HTML5'].map((tech) => (
                <span key={tech} className="tech-chip font-mono">{tech}</span>
              ))}
            </div>

            <div className="project-card-actions">
              <a href="https://trace-sigma-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                {EXT_ICON} Live Demo
              </a>
              <a href="https://github.com/alive-xd/Trace" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                {GH_ICON} GitHub
              </a>
            </div>
          </article>

          {/* Other 5 Projects in responsive grid */}
          {OTHER_PROJECTS.map((proj, idx) => (
            <article 
              key={proj.name} 
              className="project-grid-card standard-project-card glass-card" 
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="card-top-meta">
                <span className="card-category-tag font-mono">{proj.tag}</span>
              </div>

              <h3 className="standard-proj-title">{proj.name}</h3>
              <p className="standard-proj-summary">{proj.summary}</p>

              <div className="project-chips-wrap">
                {proj.stack.map((tech) => (
                  <span key={tech} className="tech-chip font-mono">{tech}</span>
                ))}
              </div>

              <div className="project-card-actions">
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {EXT_ICON} Live Demo
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    {GH_ICON} GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer" style={{ marginTop: '48px', textAlign: 'center' }}>
          <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {GH_ICON} View All on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" x2="21" y1="14" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .projects-responsive-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(18px, 2.5vw, 24px);
        }

        .project-grid-card {
          padding: clamp(24px, 3.5vw, 32px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Trace Featured Card Spans Full Width */
        .featured-trace-card {
          grid-column: 1 / -1;
          border-left: 4px solid var(--accent);
        }

        .trace-header-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .trace-badge {
          display: inline-block;
          padding: 5px 14px;
          background: var(--accent-light);
          border: 1px solid var(--accent-border);
          color: var(--accent);
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .trace-stats-strip {
          display: flex;
        }

        .trace-stat-pill {
          display: inline-block;
          padding: 6px 14px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--accent);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        [data-theme="dark"] .trace-stat-pill {
          background: rgba(255, 255, 255, 0.04);
        }

        .trace-title {
          font-family: var(--font-sans);
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .trace-summary {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .trace-core-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .trace-core-bullets li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .bullet-check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent-sec-light);
          border: 1px solid rgba(5, 150, 105, 0.3);
          color: var(--accent-sec);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trace-collapsible-wrapper {
          margin-bottom: 22px;
          border-top: 1px solid var(--border);
          padding-top: 14px;
        }

        .trace-details-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: var(--accent);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          padding: 6px 0;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }

        .trace-details-toggle:hover {
          opacity: 0.85;
          gap: 11px;
        }

        .trace-collapsible-content {
          margin-top: 14px;
          padding: 20px;
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        [data-theme="dark"] .trace-collapsible-content {
          background: rgba(17, 24, 39, 0.8);
        }

        .trace-detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .trace-detail-item strong {
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        .trace-detail-item span {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Standard Cards */
        .card-top-meta {
          margin-bottom: 12px;
        }

        .card-category-tag {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .standard-proj-title {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .standard-proj-summary {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }

        .tech-chip {
          display: inline-block;
          padding: 4px 10px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), color var(--transition-fast);
        }

        [data-theme="dark"] .tech-chip {
          background: rgba(255, 255, 255, 0.04);
        }

        .project-grid-card:hover .tech-chip {
          border-color: var(--card-border-hover);
        }

        .project-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* Mobile & Zoom Breakpoints */
        @media (max-width: 820px) {
          .projects-responsive-grid {
            grid-template-columns: 1fr;
          }

          .featured-trace-card {
            padding: 22px 18px;
          }

          .project-grid-card {
            padding: 22px 18px;
          }
        }
      `}</style>
    </section>
  );
};
