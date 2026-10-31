'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        <div className="footer-left">
          <span className="footer-brand font-sans">
            Sushen Kumar
          </span>
          <span className="footer-sep">·</span>
          <span className="footer-role">Cybersecurity Graduate</span>
        </div>

        <p className="footer-copy">
          © 2025 Sushen Kumar. All rights reserved.
        </p>

        <div className="footer-right">
          <a 
            href="https://github.com/alive-xd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-nav-link"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/sushen-kumar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-nav-link"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:sushen.d3v@gmail.com" 
            className="footer-nav-link"
          >
            Email
          </a>
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
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .footer-brand {
          font-weight: 700;
          color: var(--text-primary);
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

        .footer-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-nav-link {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-nav-link:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 14px;
          }
          .footer-left {
            justify-content: center;
          }
          .footer-right {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
