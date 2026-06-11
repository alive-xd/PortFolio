'use client';

import React from 'react';

interface SkillRow {
  category: string;
  title: string;
  tags: string[];
  tintClass: string;
}

export const Skills: React.FC = () => {
  const skillsList: SkillRow[] = [
    {
      category: 'AI & SECURITY',
      title: 'AI Security & Intelligent Systems',
      tags: ['llm engineering', 'ai security', 'rag', 'machine learning', 'neural networks'],
      tintClass: 'tint-purple'
    },
    {
      category: 'OFFENSIVE OPS',
      title: 'Offensive Security & Threat Research',
      tags: ['pen testing', 'vulnerability research', 'malware analysis', 'forensics', 'recon'],
      tintClass: 'tint-cyan'
    },
    {
      category: 'PLATFORM ENG',
      title: 'Software & Platform Engineering',
      tags: ['full stack', 'api design', 'secure coding', 'cloud native', 'automation'],
      tintClass: 'tint-blue'
    },
    {
      category: 'FRONTEND & UX',
      title: 'Frontend & Experience Engineering',
      tags: ['ui/ux systems', 'design systems', 'creative code', 'interactive dev'],
      tintClass: 'tint-emerald'
    },
    {
      category: 'INFRASTRUCTURE',
      title: 'Infrastructure & DevOps',
      tags: ['cloud infra', 'containers', 'ci/cd pipelines', 'linux systems', 'orchestration'],
      tintClass: 'tint-indigo'
    },
    {
      category: 'CORE TECH',
      title: 'Languages & Frameworks',
      tags: ['python', 'java', 'javascript', 'go', 'c++', 'next.js', 'pytorch', 'docker'],
      tintClass: 'tint-violet'
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title-centered reveal">Skills</h2>
        
        <div className="skills-rows-container">
          {skillsList.map((skill, index) => (
            <div 
              key={skill.title} 
              className={`skill-row-card ${skill.tintClass} reveal`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="skill-row-left">
                <span className="skill-row-category">{skill.category}</span>
              </div>
              
              <h3 className="skill-row-title">{skill.title}</h3>
              
              <div className="skill-row-right">
                <div className="skill-row-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="skill-row-pill">{tag}</span>
                  ))}
                </div>
                <div className="skill-row-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
