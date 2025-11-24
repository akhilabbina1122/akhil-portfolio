import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';
import '../styles/Certifications.css';

const Certifications = () => {
  return (
    <Section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <span className="section-subtitle">Validated Skills</span>

      <div className="certifications-grid">
        {portfolioData.certifications.map((cert) => (
          <div key={cert.id} className="glass-card cert-card">
            <Award size={32} className="cert-icon" />
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-desc">{cert.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
