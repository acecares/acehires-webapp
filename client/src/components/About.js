import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="overlay">
        <h1>About Us</h1>
        <p className="tagline">Succeed • Grow • Thrive</p>

        {/* AboutSection */}
        <div className="info-section">
          <div className="info-card">
            <p>
              Ace Compliance Consulting is the source for growth and expansion into the best version of yourself.
              It’s the playground where people do complete work that is effective, efficient, and meaningful.
            </p>
          </div>

          

        Your original service cards section stays here
        <div className="about-grid">
          <div className="about-card">
            <h3>📋 PAS Licensing Support</h3>
            <p>Expert guidance to complete and submit PAS applications for multiple U.S. states. We walk clients through each step of the process.</p>
          </div>
          <div className="about-card">
            <h3>📋 HIPAA Compliance Guidance</h3>
            <p>Ensure your practice or business is compliant with HIPAA laws with our detailed audits, policy templates, and consultant coaching.</p>
          </div>
          <div className="about-card">
            <h3>💼 Medicaid/Medicare Consulting</h3>
            <p>We prepare documentation and assist in applying for Medicaid/Medicare provider enrollment or billing credentials.</p>
          </div>
          <div className="about-card">
            <h3>👩‍⚕️ Training for In-Home Caregivers</h3>
            <p>Special programs for caregivers, nurses, and CNAs providing home-based medical services. Certification included.</p>
          </div>
          <div className="about-card">
            <h3>💻 Admin Support & Workflow Automation</h3>
            <p>We implement tools like GoHighLevel, vcita, and forms to help automate reminders, document intake, and follow-ups.</p>
          </div>
          <div className="about-card">
            <h3>📋 PAS Licensing Support</h3>
            <p>Expert guidance to complete and submit PAS applications for multiple U.S. states. We walk clients through each step of the process.</p>
          </div>
        </div>

        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default About;
