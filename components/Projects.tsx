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
    name: 'SentriX',
    tag: 'SOC Management Platform',
    desc: 'SentriX is a modern, production-grade Security Operations Center (SOC) platform designed to streamline the lifecycle of security incidents from initial alert ingestion to case investigation and resolution. Moving away from disjointed security tools, SentriX provides a centralized, opinionated workflow with real-time alert triage, automated threat intelligence correlation, and strict role-based access control, allowing analysts to focus entirely on threat remediation rather than data gathering.',
    features: [],
    featuresDetail: [
      { title: 'Asynchronous Backend Architecture', desc: 'Engineered a high-performance, non-blocking API layer utilizing FastAPI and asyncpg, capable of handling concurrent alert ingestions and database transactions with minimal overhead and robust Pydantic v2 input validation.' },
      { title: 'Secure Authentication & RBAC', desc: 'Implemented a stateless security model featuring JWT authentication coupled with Redis-backed refresh token rotation and instant logout blocklisting, wrapped in a granular Role-Based Access Control (RBAC) system for Admins and Analysts.' },
      { title: 'Threat Intelligence Integrations', desc: 'Built automated enrichment pipelines connecting directly to AlienVault OTX and VirusTotal APIs, allowing analysts to instantly correlate internal Indicators of Compromise (IoCs) against global threat databases.' },
      { title: 'Structured Investigation Workflow', desc: 'Designed a decoupled Next.js Single Page Application utilizing React Query for caching and Zustand for global state management, enabling analysts to seamlessly escalate triaged alerts into structured Cases with immutable investigation timelines and artifact linking.' }
    ],
    stack: ['Next.js 15', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS', 'GitHub'],
    live: '',
    github: 'https://github.com/alive-xd/SentriX',
    color: '#ef4444',
    bg: 'linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(124,58,237,0.08) 100%)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    terminal: true,
  },
  {
    name: 'ReconX',
    tag: 'Client-Side OSINT & Intelligence Gathering Toolkit',
    desc: 'ReconX is a production-ready OSINT platform that centralizes 80+ professional intelligence-gathering tools into a single, organized workspace for security researchers, penetration testers, and threat intelligence analysts. Built entirely on the client side, it eliminates backend dependencies, enabling fast, privacy-focused access to industry-standard reconnaissance resources through structured investigation workflows.',
    features: [],
    featuresDetail: [
      { title: '80+ Curated Security Tools', desc: 'Brings together industry-standard platforms including Shodan, Censys, VirusTotal, GreyNoise, SecurityTrails, crt.sh, AbuseIPDB, MITRE ATT&CK, and many more within a single unified interface.' },
      { title: 'Workflow-Oriented Intelligence Hub', desc: 'Organizes tools into six investigation workflows—Discovery, Infrastructure, Intelligence, Identity, Analysis, and Resources—allowing analysts to move through reconnaissance tasks efficiently instead of switching between dozens of bookmarks.' },
      { title: 'Zero Backend Architecture', desc: 'Runs entirely in the browser using Static Site Generation (SSG), eliminating server infrastructure, databases, APIs, user tracking, and telemetry while providing instant page loads and improved privacy.' },
      { title: 'Fast Global Delivery', desc: 'Statically generated pages deployed on Vercel\'s Edge Network provide low-latency access worldwide with minimal loading time and high availability.' },
      { title: 'Optimized Investigation Experience', desc: 'Features powerful search, category-based navigation, responsive layouts, and lightweight client-side state management to streamline access to frequently used OSINT resources.' },
      { title: 'Privacy-First Design', desc: 'Stores no user data, requires no authentication, performs no server-side processing, and minimizes third-party dependencies, making it suitable for security-conscious environments.' }
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Lucide React', 'Vercel', 'GitHub'],
    live: 'https://getreconx.vercel.app/',
    github: 'https://github.com/alive-xd/ReconX',
    color: '#10b981',
    bg: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(124,58,237,0.08) 100%)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
    terminal: true,
  },
  {
    name: 'NoCap',
    tag: 'Traceable Threat Intelligence & Investigation Platform',
    desc: 'NoCap is a production-grade threat intelligence and investigation platform designed for SOC analysts and incident responders. It aggregates intelligence from multiple security feeds into evidence-backed investigations where every score, severity, and finding is fully traceable to its original source. Instead of acting as a black-box reputation scanner, NoCap provides complete transparency through immutable evidence chains and explainable threat scoring.',
    features: [],
    featuresDetail: [
      { title: 'Evidence-Backed Investigation Engine', desc: 'Builds investigations using a structured pipeline (Ingest → Parse → Analyze → Score), ensuring every finding can be traced back to its original API response and raw evidence.' },
      { title: 'Explainable Threat Scoring', desc: 'Generates transparent risk scores by aggregating evidence from multiple intelligence providers, allowing analysts to inspect individual score contributions instead of relying on opaque reputation values.' },
      { title: 'Multi-Source Threat Intelligence Aggregation', desc: 'Collects and correlates data from VirusTotal, AbuseIPDB, crt.sh, WHOIS, NVD, and other public intelligence feeds to create comprehensive investigation reports.' },
      { title: 'Performance-Optimized Intelligence Pipeline', desc: 'Uses concurrent API requests, intelligent source-specific cache policies, and asynchronous processing to reduce investigation latency while minimizing external API usage.' },
      { title: 'Secure Investigation Platform', desc: 'Implements row-level security (RLS), CSRF protection, ownership validation, rate limiting, parameterized database queries, and secure scheduled task authorization following enterprise security practices.' },
      { title: 'Enterprise Investigation Workspace', desc: 'Provides structured case management, evidence tracking, investigation history, CVE monitoring, and analyst-friendly workflows designed around modern SOC triage processes.' }
    ],
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'REST APIs', 'GitHub'],
    live: '',
    github: 'https://github.com/alive-xd/NoCap',
    color: '#06b6d4',
    bg: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(59,130,246,0.08) 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    name: 'Chat Decoder',
    tag: 'WhatsApp Forensics Platform',
    desc: 'Chat Decoder is a full-stack AI-powered WhatsApp chat analysis platform that transforms raw .txt exports into deep communication intelligence. Applies forensic analysis techniques to identify communication patterns, sentiment shifts, relationship dynamics, and behavioural anomalies — applicable to insider threat investigation, OSINT research, and digital forensics practice.',
    features: [],
    featuresDetail: [
      { title: 'Insider Threat Detection', desc: 'Applicable to insider threat detection and communication forensics.' },
      { title: 'RAG Querying Pipeline', desc: 'Retrieval-augmented generation enables natural language querying of chat history.' },
      { title: 'Behavioural Profiling', desc: 'Per-participant behavioural and sentiment profiling over time.' },
      { title: 'Privacy-First Architecture', desc: 'Privacy-first setup with zero server-side data retention.' }
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
    name: 'CineAI',
    tag: 'AI Movie Recommendation Engine',
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
  const [currentIdx, setCurrentIdx] = useState(0);
  const [animClass, setAnimClass] = useState('proj-anim-active');
  const [animDir, setAnimDir] = useState<'left' | 'right' | 'in'>('in');
  const touchStartX = useRef(0);

  const n = PROJECTS.length;

  const goTo = (idx: number, dir: 'left' | 'right' | 'in') => {
    const targetIdx = ((idx % n) + n) % n;
    
    // Set out state
    setAnimClass(`proj-anim-out-${dir === 'right' ? 'left' : 'right'}`);
    
    setTimeout(() => {
      setCurrentIdx(targetIdx);
      setAnimDir(dir);
      setAnimClass(`proj-anim-${dir}`);
      
      // Force layout recalculation and set active
      setTimeout(() => {
        setAnimClass('proj-anim-active');
      }, 50);
    }, 150);
  };

  // Keyboard navigation when section is focused/visible
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if project section is currently visible in viewport
      const el = document.getElementById('projects');
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        if (e.key === 'ArrowLeft') goTo(currentIdx - 1, 'left');
        if (e.key === 'ArrowRight') goTo(currentIdx + 1, 'right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx]);

  const p = PROJECTS[currentIdx];



  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      goTo(dx < 0 ? currentIdx + 1 : currentIdx - 1, dx < 0 ? 'right' : 'left');
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Header row with prev/next controls */}
        <div className="proj-section-head reveal">
          <h2 className="section-title-centered">Projects</h2>
          <div className="proj-nav-controls">
            <button 
              id="projPrev" 
              className="proj-nav-btn" 
              aria-label="Previous project"
              onClick={() => goTo(currentIdx - 1, 'left')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span className="proj-counter">
              <span id="projCurrent">{currentIdx + 1}</span>
              <span className="proj-counter-sep">/</span>
              <span id="projTotal">{n}</span>
            </span>
            <button 
              id="projNext" 
              className="proj-nav-btn" 
              aria-label="Next project"
              onClick={() => goTo(currentIdx + 1, 'right')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Featured big card */}
        <div 
          id="projFeatured" 
          className="proj-featured-wrap" 
          aria-live="polite"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <article className={`proj-feat-card ${animClass}`}>
            <div className="proj-feat-inner">
              <div className="project-left-details" style={{ background: p.bg }}>
                <span className="project-tag-featured">{p.tag}</span>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s, i) => <span key={i} className="stack-chip">{s}</span>)}
                </div>
                <div className="project-cta">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      {EXT_ICON} Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                      {GH_ICON} GitHub
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-right-details">
                <h4 className="project-details-title">Technical Highlights</h4>
                <ul className="project-features" style={{ marginBottom: 0 }}>
                  {p.featuresDetail.map((f, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      <strong style={{ display: 'inline-block', color: 'var(--text-primary)' }}>{f.title}</strong>
                      <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.4 }}>{f.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>



        {/* Dot indicators */}
        <div id="projDots" className="proj-dots" role="tablist" aria-label="Project pagination">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`proj-dot ${i === currentIdx ? 'active' : ''}`}
              role="tab"
              aria-selected={i === currentIdx}
              aria-label={`Project ${i + 1}`}
              onClick={() => goTo(i, i > currentIdx ? 'right' : 'left')}
            />
          ))}
        </div>

        <div className="projects-footer reveal">
          <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
