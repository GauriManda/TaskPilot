import React from 'react';
import { X, ArrowRight } from 'lucide-react';

const Modal = ({ isModalOpen, setIsModalOpen, formData, handleInputChange, handleSubmit }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <h2>Get Started Today</h2>
        <p>Fill in your details and we'll get back to you shortly</p>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <button onClick={handleSubmit} className="submit-button">
            Submit <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;