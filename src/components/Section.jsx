import React from 'react';

const Section = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Start Organizing Your Day Today</h2>
            <p>Join thousands of professionals who trust our platform</p>
          </div>
          <div className="cta-image">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=350&fit=crop" 
              alt="Mobile app interface"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;