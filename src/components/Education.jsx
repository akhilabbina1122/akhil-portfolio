import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';
import '../styles/Education.css';

const Education = () => {
  return (
    <Section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <span className="section-subtitle">Academic Background</span>

      <div className="education-list">
        {portfolioData.education.map((edu) => (
          <div key={edu.id} className="glass-card education-item">
            <div className="edu-icon">
              <GraduationCap size={24} />
            </div>
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-duration">{edu.duration}</span>
              </div>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-detail">{edu.detail}</p>
              {edu.description && <p className="edu-desc">{edu.description}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="highlights-wrapper">
        <h3 className="highlights-title">Academic Highlights</h3>
        <ul className="highlights-list">
          {portfolioData.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Education;
