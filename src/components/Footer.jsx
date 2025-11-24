import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">
                    © {new Date().getFullYear()} Abbina Bala Akhileswar · Computer Science Engineering
                </p>
                <button onClick={scrollToTop} className="back-to-top">
                    Back to top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
