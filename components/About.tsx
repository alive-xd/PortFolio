'use client';

import React from 'react';

export const About: React.FC = () => {
  const strengths = [
    {
      title: 'Cybersecurity Research',
      desc: 'Performing threat intelligence, vulnerability assessment, malware analysis, and auditing complex environments.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
      ),
      colorClass: 'sec-color'
    },
    {
      title: 'Security Automation',
      desc: 'Developing automated security tooling, automated scanners, monitoring systems, and custom defensive scripts.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
      colorClass: 'web-color'
    },
    {
      title: 'AI Engineering',
      desc: 'Designing semantic search pipelines, LLM integration architectures, neural models, and smart automation agents.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="12" cy="12" r="2.5"/><path d="M12 7.5v2m0 5v2.5M7.5 12h2m5 0h2.5M8.5 8.5l1.5 1.5m4 4l1.5 1.5M15.5 8.5L14 10m-4 4l-1.5 1.5"/></svg>
      ),
      colorClass: 'ai-color'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="skew-bg"></div>
      <div className="container reveal">
        <h2 className="section-title-centered white-title">About Me</h2>
        <div className="about-layout-grid">
          <div className="about-left-side">
            <div className="photo-wrapper">
              <img
                src="assets/profile.png"
                alt="Sushen Kumar"
                className="about-photo"
                width="200"
                height="200"
              />
            </div>
            <p className="about-p-main">
              Hi, I'm <strong>Sushen Kumar</strong>, a cybersecurity researcher, security automation engineer, and AI specialist. I design secure systems, build intelligent automation workflows, and audit digital environments to make infrastructure resilient, fast, and completely secure.
            </p>
          </div>
          
          <div className="about-strengths-grid">
            {strengths.map((item, index) => (
              <div 
                key={item.title} 
                className="strength-card"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={`strength-icon ${item.colorClass}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="strength-title">{item.title}</h3>
                  <p className="strength-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
