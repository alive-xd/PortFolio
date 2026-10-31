'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ padding: '24px 0', borderTop: '1px solid var(--border)', marginTop: '40px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p className="footer-copy" style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} · Designed & built by{' '}
          <a 
            href="https://github.com/alive-xd" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            Sushen Kumar
          </a>
        </p>
      </div>
    </footer>
  );
};
