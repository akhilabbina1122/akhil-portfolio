import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <Section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <span className="section-subtitle">Practical Exposure</span>

      <div className="experience-timeline">
        {portfolioData.experience.map((exp) => (
          <div key={exp.id} className={`timeline-item ${exp.type}`}>
            <div className="timeline-marker"></div>
            <div className="glass-card timeline-content">
              <span className="exp-duration">{exp.duration}</span>
              <h3 className="exp-role">{exp.role}</h3>
              <h4 className="exp-company">{exp.company}</h4>
              <p className="exp-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
