import React from 'react';
import './Education.css';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="education-container">
      <div className="overlay">
        <h1>Training & Education</h1>
        <p>
          At ACE Compliance Consulting, we provide self-paced and guided training resources to help consultants stay
          compliant and certified in HIPAA, Medicaid/Medicare policies, and state-level PAS applications.
        </p>
        <div className="cards">
          <div className="card">
            <h3>🧠 HIPAA Compliance Training</h3>
            <p>Both free and premium HIPAA courses tailored to consultants and caregivers.</p>
          </div>
          <div className="card">
            <h3>📄 Medicare/Medicaid Certification</h3>
            <p>Online resources and checklists to prepare for your certification exam.</p>
          </div>
          <div className="card">
            <h3>📚 PDFs, PPTs & Videos</h3>
            <p>Downloadable content to learn on your own schedule at your own pace.</p>
          </div>
          <div className="card">
            <h3>🌐 GoHighLevel Modules</h3>
            <p>Access internal courses and compliance workflows via our partner portal.</p>
          </div>
        </div>

        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      </div>
    </div>
  );
};

export default Education;
