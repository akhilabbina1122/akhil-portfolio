import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Navbar.css'; // We'll create this specific CSS file for Navbar tweaks if needed, or put in index.css

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          {portfolioData.personalInfo.shortName}
        </div>

        <div className="desktop-menu">
          {portfolioData.navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className="nav-link"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} color="var(--accent-primary)" /> : <Menu size={24} color="var(--accent-primary)" />}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-links">
            {portfolioData.navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)}
                className="mobile-nav-link"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
