import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const { email, location, linkedin } = portfolioData.personalInfo;

    return (
        <Section id="contact" className="contact-section">
            <h2 className="section-title">Contact</h2>
            <span className="section-subtitle">Let's Connect</span>

            <div className="contact-container">
                <div className="contact-info">
                    <p className="contact-lead">
                        Have an opportunity, project, or collaboration in mind? Feel free to reach out.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <span>{email}</span>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <span>{location}</span>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box"><Linkedin size={20} /></div>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper glass-card">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
