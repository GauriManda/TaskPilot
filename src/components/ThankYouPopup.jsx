import React from 'react';

const ThankYouPopup = ({ showThankYou }) => {
  if (!showThankYou) return null;

  return (
    <div className="thank-you-popup">
      <div className="thank-you-content">
        <div className="thank-you-icon">✓</div>
        <h3>Thank you for your interest!</h3>
        <p>We'll get back to you soon.</p>
      </div>
    </div>
  );
};

export default ThankYouPopup;