import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <Section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">What I Work With</span>

      <div className="skills-grid">
        {portfolioData.skills.map((category, index) => (
          <div key={index} className="glass-card skill-category-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.items.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    {/* Optional: Add level if needed, or just keep it simple */}
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: skill.level === 'Proficient' ? '90%' : skill.level === 'Intermediate' ? '75%' : '60%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
