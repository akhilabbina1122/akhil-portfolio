import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import '../styles/Hero.css';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Elements with Parallax */}
      <div className="hero-bg-elements">
        <div className="orb orb-1" style={{ transform: `translateY(${offset * 0.2}px)` }}></div>
        <div className="orb orb-2" style={{ transform: `translateY(${offset * 0.1}px)` }}></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tagline">{portfolioData.personalInfo.tagline}</span>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{portfolioData.personalInfo.name}</span>.
          </h1>
          <h2 className="hero-subtitle">
            {portfolioData.personalInfo.role} in Computer Science.
          </h2>
          <p className="hero-description">
            {portfolioData.personalInfo.objective}
          </p>
          
          <div className="hero-buttons">
            <a href="#education" className="btn btn-primary">View Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card-wrapper" style={{ transform: `translateY(${offset * -0.1}px)` }}>
            <div className="profile-image-container">
              <img src={profileImg} alt="Profile" className="profile-img" />
              <div className="profile-glow"></div>
            </div>
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
