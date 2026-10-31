'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        <div className="footer-left">
          <span className="footer-callsign font-mono">
            SUSHI<span>.SEC</span>
          </span>
          <span className="footer-sep">·</span>
          <span className="footer-role">Cybersecurity Graduate</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} · Engineered by{' '}
          <a 
            href="https://github.com/alive-xd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-author-link"
          >
            Sushen Kumar
          </a>
        </p>

        <div className="footer-right">
          <span className="footer-status font-mono">
            <span className="status-dot-green" />
            SEC_ENGINE_READY
          </span>
        </div>
      </div>

      <style>{`
        .footer-wrap {
          padding-block: 28px;
          border-top: 1px solid var(--border);
          background: var(--bg-subtle);
          margin-top: 40px;
          position: relative;
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .footer-callsign {
          font-weight: 800;
          color: var(--text-primary);
        }

        .footer-callsign span {
          color: var(--accent-red);
        }

        .footer-sep {
          color: var(--text-muted);
        }

        .footer-copy {
          margin: 0;
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-align: center;
        }

        .footer-author-link {
          color: var(--text-primary);
          font-weight: 700;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-author-link:hover {
          color: var(--accent-red);
        }

        .footer-right {
          display: flex;
          align-items: center;
        }

        .footer-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--accent-sec);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          background: var(--accent-sec-light);
          border: 1px solid rgba(5, 150, 105, 0.25);
        }

        .status-dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-sec);
          box-shadow: 0 0 6px var(--accent-sec);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>
    </footer>
  );
};
