import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { Folder, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <Section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">What I've Built</span>

      <div className="projects-grid">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className={`glass-card project-card ${project.type}`}>
            <div className="project-header">
              <Folder size={40} className="project-icon" />
              {/* Add links if available in future */}
              {/* <ExternalLink size={20} className="project-link" /> */}
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            {project.details.length > 0 && (
              <ul className="project-details">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}

            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
