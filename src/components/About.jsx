import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import '../styles/About.css';

const About = () => {
  const { aboutNarrative, name, location, role, email } = portfolioData.personalInfo;

  return (
    <Section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">Who I Am</span>

      <div className="about-content">
        <div className="about-text">
          <p>{aboutNarrative}</p>
          
          <div className="interests-list">
            <h3>Interests</h3>
            <ul>
              <li>Cloud-based Systems</li>
              <li>Web Applications</li>
              <li>Data Analytics</li>
              <li>Modern Software Engineering</li>
            </ul>
          </div>
        </div>

        <div className="about-card-wrapper">
          <div className="glass-card about-card">
            <div className="info-row">
              <span className="label">Name:</span>
              <span className="value">{name}</span>
            </div>
            <div className="info-row">
              <span className="label">Location:</span>
              <span className="value">{location}</span>
            </div>
            <div className="info-row">
              <span className="label">Role:</span>
              <span className="value">{role}</span>
            </div>
            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">{email}</span>
            </div>
            <div className="info-row">
              <span className="label">Open To:</span>
              <span className="value">Internships, Entry-level roles</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
