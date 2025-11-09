import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>TaskPilot</h3>
            <p>Simplifying productivity for modern professionals</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Email: info@taskapp.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TaskPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;