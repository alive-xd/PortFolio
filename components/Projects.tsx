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
  color: string;
}

const OTHER_PROJECTS: StandardProject[] = [
  {
    name: 'ReconX',
    tag: 'OSINT & Reconnaissance',
    summary: 'Client-side OSINT platform centralizing 80+ intelligence tools into structured reconnaissance workflows with zero backend dependencies.',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Lucide React', 'Vercel'],
    live: 'https://getreconx.vercel.app/',
    github: 'https://github.com/alive-xd/ReconX',
    color: '#10b981',
  },
  {
    name: 'NoCap',
    tag: 'Threat Intelligence',
    summary: 'Traceable threat intelligence platform aggregating security feeds into evidence-backed cases with transparent, explainable risk scoring.',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'REST APIs'],
    live: '',
    github: 'https://github.com/alive-xd/NoCap',
    color: '#06b6d4',
  },
  {
    name: 'SentriX',
    tag: 'SOC Management',
    summary: 'Modern Security Operations Center (SOC) platform streamlining incident lifecycle from alert ingestion to case triage and resolution.',
    stack: ['Next.js 15', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
    live: '',
    github: 'https://github.com/alive-xd/SentriX',
    color: '#ef4444',
  },
  {
    name: 'Chat Decoder',
    tag: 'Digital Forensics',
    summary: 'AI-powered WhatsApp communication forensics platform applying NLP and RAG pipelines for pattern identification and behavioral analysis.',
    stack: ['Python', 'Next.js', 'Gemini 1.5 Flash', 'ChromaDB', 'FastAPI'],
    live: '',
    github: 'https://github.com/alive-xd/ChatDecoder',
    color: '#a78bfa',
  },
  {
    name: 'CineAI',
    tag: 'AI Recommendation Engine',
    summary: 'Full-stack AI recommendation engine combining semantic vector search, a 4-signal hybrid algorithm, and explainable attribution scores.',
    stack: ['Next.js 14', 'FastAPI', 'Python', 'PostgreSQL', 'Qdrant', 'Redis', 'Docker'],
    live: '',
    github: 'https://github.com/alive-xd/CineAI',
    color: '#3b82f6',
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
      <div className="container">
        <h2 className="section-title-centered reveal">Projects</h2>

        <div className="projects-responsive-grid">
          {/* Featured Project: Trace */}
          <article id="trace" className="project-grid-card featured-trace-card reveal">
            <div className="trace-header-row">
              <span className="trace-badge">Featured Detection Engineering</span>
              <div className="trace-stats-strip">
                <span className="trace-stat-pill">13 rules · 10 techniques · 85 → 11 alerts</span>
              </div>
            </div>

            <h3 className="trace-title">Trace</h3>

            <p className="trace-summary">
              Trace is a Sigma detection-rule validation pipeline that tests hand-written SOC detection logic against real, historically captured malware execution logs — not synthetic or self-generated test data. It sources genuine Windows Event Log captures from documented attack technique executions, exposes two real coverage gaps discovered through that testing, and ships a live interactive tool that runs detection logic on demand.
            </p>

            <ul className="trace-core-bullets">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981', flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Real-data validation against genuine Windows Event Logs</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981', flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>The registry persistence coverage gap</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981', flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
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
                <span>Technical details</span>
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
                    <strong>Real-Data Validation Pipeline:</strong>
                    <span>Fetches, parses, and evaluates 13 Sigma detection rules across 10 MITRE ATT&amp;CK techniques against genuine captured Windows Event Logs from the EVTX-ATTACK-SAMPLES research dataset, rather than hand-written synthetic test cases.</span>
                  </div>
                  <div className="trace-detail-item">
                    <strong>Registry Persistence Coverage Gap:</strong>
                    <span>Discovered that a rule assuming command-line-based registry modification (reg.exe) completely missed a real malware sample that wrote its persistence key directly via the Windows API. Diagnosed the gap by pivoting detection from Process Creation (Event ID 1) to Registry Events (Event ID 12/13/14), closing the blind spot regardless of execution method.</span>
                  </div>
                  <div className="trace-detail-item">
                    <strong>False-Positive Inflation Diagnosis:</strong>
                    <span>Identified that an initial rundll32 detection rule was generating 85 matches, 74 of which were benign OS telemetry (module loads, not executions). Root-caused the issue to an overly broad log-source assumption and tightened the rule to Event ID 1 only, reducing output to 11 precise, actionable alerts — a real false-positive reduction caught before reaching production.</span>
                  </div>
                  <div className="trace-detail-item">
                    <strong>Live Interactive Detection Tester:</strong>
                    <span>A Vercel serverless function runs the actual Sigma rule-matching logic on demand against real historical samples or user-submitted JSON, returning genuine match/no-match results computed live.</span>
                  </div>
                </div>
              )}
            </div>

            <div className="project-chips-wrap">
              {['Python', 'Sigma', 'Vercel', 'JavaScript', 'HTML5'].map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
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
            <article key={proj.name} className="project-grid-card standard-project-card reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
              <div className="card-top-meta">
                <span className="card-category-tag">{proj.tag}</span>
              </div>

              <h3 className="standard-proj-title">{proj.name}</h3>
              <p className="standard-proj-summary">{proj.summary}</p>

              <div className="project-chips-wrap">
                {proj.stack.map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
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

        <div className="projects-footer reveal" style={{ marginTop: '40px', textAlign: 'center' }}>
          <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All on GitHub
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
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .project-grid-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-lg);
          padding: 28px;
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-grid-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
        }

        /* Trace Featured Card Spans Full Width */
        .featured-trace-card {
          grid-column: 1 / -1;
          border: 2px solid rgba(249, 115, 22, 0.35);
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.04) 0%, var(--card-bg) 60%);
        }

        .trace-header-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .trace-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(249, 115, 22, 0.12);
          color: #ea580c;
          border-radius: 999px;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
        }

        .trace-stats-strip {
          display: flex;
        }

        .trace-stat-pill {
          display: inline-block;
          padding: 6px 14px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent);
        }

        .trace-title {
          font-family: var(--font-sans);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .trace-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 16px;
        }

        .trace-core-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .trace-core-bullets li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .trace-collapsible-wrapper {
          margin-bottom: 20px;
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
          padding: 4px 0;
        }

        .trace-collapsible-content {
          margin-top: 12px;
          padding: 16px 18px;
          background: var(--bg);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeIn 0.25s ease forwards;
        }

        .trace-detail-item {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .trace-detail-item strong {
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .trace-detail-item span {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Standard Cards */
        .card-top-meta {
          margin-bottom: 10px;
        }

        .card-category-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .standard-proj-title {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .standard-proj-summary {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .project-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tech-chip {
          display: inline-block;
          padding: 5px 11px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .project-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
          .projects-responsive-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .featured-trace-card {
            padding: 22px 18px;
          }

          .project-grid-card {
            padding: 22px 18px;
          }

          .trace-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
