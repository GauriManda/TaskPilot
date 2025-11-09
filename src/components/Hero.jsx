import React from 'react';
import { ArrowRight } from 'lucide-react';
import imgLand from "../assets/imgLand.png";

const Hero = ({ setIsModalOpen }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Simplify Your Life with Our
              <span className="highlight"> Task Pilot</span>
            </h1>
            <p className="hero-description">
              Organize, Achieve, Relax.
            </p>
            <button 
              className="cta-button"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>
          <div className="hero-image">
            <img 
              src={imgLand}
              alt="Professional using task management app"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;