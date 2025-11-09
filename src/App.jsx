import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Section from './components/Section';
import SubmissionTable from './components/SubmissionTable';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ThankYouPopup from './components/ThankYouPopup';
import './index.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timestamp: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const tableRef = React.useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submission = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    
    console.log('Form Submitted:', submission);
    setSubmissions((prev) => [...prev, submission]);

    setIsModalOpen(false);
    setShowThankYou(true);
    
    // reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      timestamp: ''
    });


    setTimeout(() => {
      if (tableRef.current) {
        tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);

    
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className="landing-page">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero setIsModalOpen={setIsModalOpen} />
      <Features />
      <Testimonials />
      <Section />
      <SubmissionTable submissions={submissions} tableRef={tableRef} />
      <Footer />
      
      <Modal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      
      <ThankYouPopup showThankYou={showThankYou} />
    </div>
  );
};

export default App;