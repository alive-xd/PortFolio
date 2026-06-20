'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          Designed & built by <a href="https://github.com/alive-xd" target="_blank" rel="noopener noreferrer" className="footer-admin">Sushen Kumar</a> · Next.js · TypeScript · Vercel
        </p>
      </div>
    </footer>
  );
};

