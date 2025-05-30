import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <div className="overlay">
        <h1>Services & Vision</h1>
        <p>
          ACE Compliance Consulting offers tailored services for healthcare providers and individuals
          seeking expert support in compliance and licensing processes.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>📋 PAS Licensing Support</h3>
            <p>Expert guidance to complete and submit PAS applications for multiple U.S. states. We walk clients through each step of the process.</p>
          </div>
          <div className="service-card">
            <h3>📋 HIPAA Compliance Guidance</h3>
            <p>Ensure your practice or business is compliant with HIPAA laws with our detailed audits, policy templates, and consultant coaching.</p>
          </div>
          <div className="service-card">
            <h3>💼 Medicaid/Medicare Consulting</h3>
            <p>We prepare documentation and assist in applying for Medicaid/Medicare provider enrollment or billing credentials.</p>
          </div>
          <div className="service-card">
            <h3>👩‍⚕️ Training for In-Home Caregivers</h3>
            <p>Special programs for caregivers, nurses, and CNAs providing home-based medical services. Certification included.</p>
          </div>
          <div className="service-card">
            <h3>💻 Admin Support & Workflow Automation</h3>
            <p>We implement tools like GoHighLevel, vcita, and forms to help automate reminders, document intake, and follow-ups.</p>
          </div>
        </div>

        <h2>Our Vision</h2>
        <p>
          To be the most trusted partner in healthcare compliance by offering innovative, accessible, and simplified solutions
          to empower care providers and administrators across the country.
        </p>

        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      </div>
    </div>
  );
};

export default Services;
