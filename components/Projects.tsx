'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Project {
  name: string;
  tag: string;
  desc: string;
  features: string[];
  featuresDetail: { title: string; desc: string }[];
  stack: string[];
  live: string;
  github: string;
  color: string;
  bg: string;
  icon: React.ReactNode;
  terminal?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: 'CineAI',
    tag: 'Featured Project',
    desc: 'CineAI is a production-grade, full-stack AI movie recommendation platform combining semantic vector search, a 4-signal hybrid recommendation engine, and explainable AI to deliver personalised movie discovery. Unlike traditional platforms relying on keyword matching, CineAI understands natural language queries, learns user taste over time via adaptive per-user weights, and explains every recommendation through direct score attribution.',
    features: [],
    featuresDetail: [
      { title: 'Semantic Vector Search', desc: 'Encodes queries into 384-dimensional vectors using all-MiniLM-L6-v2 (SentenceTransformers) and retrieves semantically similar movies via approximate nearest-neighbour search in Qdrant — no GPU required.' },
      { title: 'Hybrid Recommendation Engine', desc: 'Fuses four signals (Semantic 35%, Content-based TF-IDF 30%, Collaborative SVD 25%, Popularity 10%) with per-user learned weights that adapt automatically via Exponential Moving Average updates on every feedback action.' },
      { title: 'Explainable AI Rationale', desc: 'Recommendations include human-readable reasoning generated through direct score attribution across signals, not post-hoc rationalisation.' },
      { title: 'Cold-Start Handling', desc: 'Three-tier fallback (trending → genre-affinity → full ML pipeline) activates the complete recommendation engine after 5+ user ratings, ensuring no user ever sees an empty feed.' }
    ],
    stack: ['Next.js 14', 'FastAPI', 'Python', 'PostgreSQL', 'Qdrant', 'Redis', 'Docker'],
    live: '',
    github: 'https://github.com/alive-xd/CineAI',
    color: '#3b82f6',
    bg: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
  {
    name: 'ReconX',
    tag: 'Featured Project',
    desc: 'ReconX is a curated, all-in-one OSINT and reconnaissance toolkit directory built for ethical hackers, security researchers, and bug bounty hunters. It aggregates 54+ hand-picked recon tools across 8 categories — from network intelligence and subdomain enumeration to social media OSINT and credential verification — into a single, searchable interface.',
    features: [],
    featuresDetail: [
      { title: '54-Tool OSINT Directory', desc: 'Organises reconnaissance tools across 8 categories (Basic Recon, Network, Email & Creds, Social Media, Financial, Web App, Ethical Doxing, Utility) with direct launch links — replacing hours of tool-hunting with one platform.' },
      { title: 'Category-Based Tool Navigation', desc: 'Tabbed filtering system lets users jump directly to the relevant tool category for their engagement phase (passive recon → active scanning → web app testing).' },
      { title: 'Integrated Web Terminal (Premium)', desc: 'Browser-based terminal interface providing access to 25+ penetration testing tools including nmap, sqlmap, gobuster, nuclei, and httpx without local installation.' },
      { title: 'Community Tool Suggestions', desc: 'Built-in submission flow allowing users to suggest tools for inclusion, keeping the directory actively maintained.' }
    ],
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    live: 'https://getreconx.vercel.app/',
    github: 'https://github.com/alive-xd/ReconX',
    color: '#10b981',
    bg: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(124,58,237,0.08) 100%)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
    terminal: true,
  },
  {
    name: 'Chat Decoder',
    tag: 'AI / Security Tool',
    desc: 'A full-stack AI-powered WhatsApp chat analysis platform that transforms raw .txt exports into deep conversation intelligence. Combines a RAG retrieval pipeline, per-participant sentiment analysis, and AI relationship scoring — entirely free, privacy-first, with zero data stored server-side.\n\nUnlike basic analyzers showing simple stats, Chat Decoder goes deeper to analyze relationship dynamics, communication styles, and sentiment shifts over time using AI.',
    features: [],
    featuresDetail: [
      { title: 'RAG-Powered Chat Q&A', desc: 'Chunks and embeds conversation history into ChromaDB using all-MiniLM-L6-v2, enabling natural language retrieval via Gemini 1.5 Flash — "when did we last fight?" returns contextually accurate answers.' },
      { title: 'Mood Arc Visualization', desc: 'Sliding-window sentiment scoring per participant rendered as an interactive timeline, surfacing emotional drift across months of conversation.' },
      { title: 'AI Relationship Health Score', desc: 'Gemini-generated composite score analyzing initiation balance, response symmetry, engagement depth, and conversation consistency.' },
      { title: 'Personality Style Profiling', desc: 'Infers per-participant communication traits (tone, assertiveness, humor density) from message patterns using few-shot prompting.' },
      { title: 'Privacy-First, Zero Backend Storage', desc: 'Chat parsing is fully client-side; no raw messages leave the browser. Backend handles only anonymized embedding queries.' },
      { title: 'Free Public Deployment', desc: 'Powered entirely by free-tier APIs (Gemini, ChromaDB in-memory) with 10 req/min rate limiting — zero cost, no credit card, publicly accessible.' }
    ],
    stack: ['Python', 'Next.js', 'Gemini 1.5 Flash', 'ChromaDB', 'FastAPI', 'sentence-transformers'],
    live: '',
    github: 'https://github.com/alive-xd/ChatDecoder',
    color: '#a78bfa',
    bg: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(167,139,250,0.08) 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: 'VaporID',
    tag: 'Security Tool',
    desc: 'VaporID is a browser-based synthetic identity generator for cybersecurity testing, privacy research, and OSINT training scenarios. It generates complete fake personas — including names, addresses, phone numbers, emails, and bank identification numbers — entirely using free, zero-cost APIs with no paid dependencies.',
    features: [],
    featuresDetail: [
      { title: 'Multi-module Identity Generation', desc: 'Produces synthetic identities across 8+ data types: personal details, photorealistic faces, addresses, phone numbers, email addresses, BINs, IMEI numbers, and PGP keypairs.' },
      { title: 'Zero Paid API Architecture', desc: 'Entire tool runs on free/open APIs and client-side logic, keeping operational costs at zero while remaining fully functional.' },
      { title: 'Bulk Export', desc: 'One-click export of generated identity data for use in test environments, form-fill automation, or security training exercises.' },
      { title: 'Security Research Utilities', desc: 'Includes supplementary tools like a VPN recommendations guide and breach simulation module to support broader OSINT and privacy research workflows.' }
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    live: '',
    github: 'https://github.com/alive-xd/VaporID',
    color: '#f97316',
    bg: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(239,68,68,0.08) 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const GH_ICON = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const EXT_ICON = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>;

const TerminalMockup: React.FC = () => {
  const [linesVisible, setLinesVisible] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setLinesVisible(p => [true, p[1], p[2]]), 100),
      setTimeout(() => setLinesVisible(p => [p[0], true, p[2]]), 700),
      setTimeout(() => setLinesVisible(p => [p[0], p[1], true]), 1300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal-mock">
      <div className="terminal-bar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="terminal-body">
        <p><span className="term-prompt">$</span> reconx --scan target.com</p>
        <p className="term-output" style={{ opacity: linesVisible[0] ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          ✓ Subdomain enum complete — 142 found
        </p>
        <p className="term-output" style={{ opacity: linesVisible[1] ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          ✓ Port scan — 12 open ports
        </p>
        <p className="term-output" style={{ opacity: linesVisible[2] ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          ✓ Vuln assessment — 3 critical
        </p>
        <p className="term-cursor">█</p>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((proj, idx) => (
            <article 
              key={proj.name} 
              className="project-card reveal" 
              style={{ 
                '--project-color': proj.color,
                transitionDelay: `${idx * 0.1}s`
              } as React.CSSProperties}
            >
              {/* Header: Icon & Title Group */}
              <div className="project-card-header">
                <div className="project-card-icon-wrap" style={{ background: proj.bg, color: proj.color }}>
                  {proj.icon}
                </div>
                <div className="project-card-title-group">
                  <span className="project-card-tag">{proj.tag}</span>
                  <h3 className="project-card-name">{proj.name}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="project-card-desc">{proj.desc}</p>

              {/* Technical Highlights */}
              <div className="project-card-highlights">
                <h4 className="highlights-title">Technical Highlights</h4>
                <ul className="highlights-list">
                  {proj.featuresDetail.slice(0, 3).map((feat, i) => (
                    <li key={i}>
                      <strong>{feat.title}:</strong> {feat.desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Tech Stack & CTA Actions */}
              <div className="project-card-footer">
                <div className="project-card-stack">
                  {proj.stack.map((tech) => (
                    <span key={tech} className="stack-chip">{tech}</span>
                  ))}
                </div>

                <div className="project-card-actions">
                  {proj.github && (
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`btn btn-ghost btn-sm ${!proj.live ? 'btn-full-width' : ''}`}
                    >
                      {GH_ICON} Code
                    </a>
                  )}
                  {proj.live && (
                    <a 
                      href={proj.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                    >
                      {EXT_ICON} Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer reveal">
          <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 40px;
          margin-bottom: 50px;
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-lg);
          padding: 35px;
          box-shadow: var(--card-shadow);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--project-color);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 0 20px rgba(109, 131, 242, 0.1);
        }

        .project-card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .project-card-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .project-card-icon-wrap svg {
          width: 28px;
          height: 28px;
        }

        .project-card-title-group {
          display: flex;
          flex-direction: column;
        }

        .project-card-tag {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--project-color);
          margin-bottom: 4px;
        }

        .project-card-name {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .project-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .project-card-highlights {
          background: rgba(0, 0, 0, 0.02);
          border-radius: var(--radius-md);
          padding: 20px;
          margin-bottom: 24px;
          border: 1px solid var(--border);
        }

        [data-theme="dark"] .project-card-highlights {
          background: rgba(255, 255, 255, 0.02);
        }

        .highlights-title {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--project-color);
          margin-bottom: 12px;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .highlights-list li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          line-height: 1.4;
          text-align: left;
        }

        .highlights-list li:last-child {
          margin-bottom: 0;
        }

        .highlights-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: 700;
        }

        .project-card-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-card-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .project-card-actions {
          display: flex;
          gap: 12px;
          width: 100%;
        }

        .project-card-actions a {
          flex: 1;
        }

        .btn-full-width {
          flex: none !important;
          width: 100% !important;
        }

        .projects-footer {
          text-align: center;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .project-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};
