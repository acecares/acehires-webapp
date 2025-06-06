import React from 'react';
import './Vision.css';
import { useNavigate } from 'react-router-dom';

const Vision = () => {
  const navigate = useNavigate();

  return (
    <div className="vision-container">
      <div className="overlay">
        <h1>Vision & Mission</h1>
        <p className="tagline">Succeed • Grow • Thrive</p>

        {/* Mission, Vision, Core Values */}
        <div className="vision-section">
          <div className="info-card">
            <h3>Our Mission</h3>
            <p>
              We assist home care agency owners to achieve success, operate with peace of mind, and focus on patient care.
            </p>
          </div>

          <div className="info-card">
            <h3>Our Vision</h3>
            <p>
              We are the tipping point for an ever-increasing number of home care agency owners nationwide to achieve success,
              operate with peace of mind, and focus on patients care.
            </p>
            <p>
          To be the most trusted partner in healthcare compliance by offering innovative, accessible, and simplified solutions
          to empower care providers and administrators across the country.
        </p>
          </div>

          <div className="info-card">
            <h3>Our Core Values</h3>
            <ul>
              <li><strong>Effective:</strong> Masters at producing results</li>
              <li><strong>Efficient:</strong> Impeccable time management with precision</li>
              <li><strong>Integrity:</strong> Possibility that fuels workability</li>
              <li><strong>Success:</strong> All we do is win and achieve success</li>
            </ul>
          </div>
        </div>

        

        <div className="vision-grid">
          <div className="vision-card">
            <h3>📋 PAS Licensing Support</h3>
            <p>Expert guidance to complete and submit PAS applications for multiple U.S. states. We walk clients through each step of the process.</p>
          </div>
          <div className="vision-card">
            <h3>📋 HIPAA Compliance Guidance</h3>
            <p>Ensure your practice or business is compliant with HIPAA laws with our detailed audits, policy templates, and consultant coaching.</p>
          </div>
          <div className="vision-card">
            <h3>💼 Medicaid/Medicare Consulting</h3>
            <p>We prepare documentation and assist in applying for Medicaid/Medicare provider enrollment or billing credentials.</p>
          </div>
          <div className="vision-card">
            <h3>👩‍⚕️ Training for In-Home Caregivers</h3>
            <p>Special programs for caregivers, nurses, and CNAs providing home-based medical services. Certification included.</p>
          </div>
          <div className="vision-card">
            <h3>💻 Admin Support & Workflow Automation</h3>
            <p>We implement tools like GoHighLevel, vcita, and forms to help automate reminders, document intake, and follow-ups.</p>
          </div>
          <div className="vision-card">
            <h3>📋 PAS Licensing Support</h3>
            <p>Expert guidance to complete and submit PAS applications for multiple U.S. states. We walk clients through each step of the process.</p>
          </div>
        </div>


        

        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
        </div>
      </div>
  );
};

export default Vision;
