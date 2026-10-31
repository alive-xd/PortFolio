'use client';

import React from 'react';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'sushen.d3v@gmail.com',
      url: 'mailto:sushen.d3v@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      color: '#ea4335',
      glowClass: 'glow-gmail',
      actionText: 'Send Mail'
    },
    {
      name: 'GitHub',
      value: 'github.com/alive-xd',
      url: 'https://github.com/alive-xd',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: '#6d83f2',
      glowClass: 'glow-github',
      actionText: 'Follow & Code'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/sushen-kumar',
      url: 'https://linkedin.com/in/sushen-kumar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: '#0077b5',
      glowClass: 'glow-linkedin',
      actionText: 'Connect'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Contact Me</h2>
        
        <p className="contact-subtitle reveal">
          Open to SOC Analyst, Security Analyst, and Penetration Testing roles — fresher, available immediately, open to remote and relocation. Reach out on any platform below.
        </p>

        <div className="contact-links-grid reveal">
          {contactLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`contact-box-card ${link.glowClass}`}
            >
              <div className="contact-box-icon-wrap" style={{ color: link.color }}>
                {link.icon}
              </div>
              <h3 className="contact-box-title">{link.name}</h3>
              <p className="contact-box-value">{link.value}</p>
              <div className="contact-box-action">
                <span>{link.actionText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" x2="19" y1="12" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-subtitle {
          text-align: center;
          max-width: 620px;
          margin: -16px auto 28px auto;
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .contact-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .contact-box-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          min-height: 230px;
          box-shadow: var(--card-shadow);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
        }

        .contact-box-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
        }

        .contact-box-icon-wrap {
          width: 56px;
          height: 56px;
          background: var(--bg);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          border: 1px solid var(--border);
        }

        .contact-box-card:hover .contact-box-icon-wrap {
          transform: scale(1.1);
        }

        .contact-box-title {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 14px;
          margin-bottom: 6px;
        }

        .contact-box-value {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          word-break: break-all;
        }

        .contact-box-action {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent);
          transition: gap 0.2s ease;
        }

        .contact-box-card:hover .contact-box-action {
          gap: 10px;
        }

        .glow-gmail:hover {
          border-color: rgba(234, 67, 53, 0.4);
          box-shadow: 0 10px 30px rgba(234, 67, 53, 0.1);
        }
        .glow-github:hover {
          border-color: rgba(109, 131, 242, 0.4);
          box-shadow: 0 10px 30px rgba(109, 131, 242, 0.1);
        }
        .glow-linkedin:hover {
          border-color: rgba(0, 119, 181, 0.4);
          box-shadow: 0 10px 30px rgba(0, 119, 181, 0.1);
        }

        @media (max-width: 992px) {
          .contact-links-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .contact-links-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .contact-box-card {
            min-height: 200px;
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
};
