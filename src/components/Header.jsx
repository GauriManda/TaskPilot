import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">📋</span>
            <span className="logo-text">TaskPilot</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="nav-item">
              <span>Home</span>
            </a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="nav-item">
              <span>Features</span>
            </a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="nav-item">
              <span>Testimonials</span>
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-item">
              <span>Contact</span>
            </a>
                  </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;