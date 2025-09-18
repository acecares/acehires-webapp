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
          At ACE Compliance Consulting, we offer comprehensive training modules to support consultants in excelling at
          every stage of their career — from fundamental compliance to advanced engagement strategies.
        </p>
        <div className="cards">
          <div className="card">
            <h3>📘 Ace Compliance Consulting Fundamentals</h3>
            <p>Core training to understand the mission, processes, and compliance foundation of ACE.</p>
          </div>
          <div className="card">
            <h3>📗 Compliance & Consulting Excellence</h3>
            <p>Advance your understanding of compliance expectations and best consulting practices.</p>
          </div>
          <div className="card">
            <h3>🎯 Client Engagement & Professional Etiquette</h3>
            <p>Master communication, ethics, and rapport-building strategies with clients.</p>
          </div>
          <div className="card">
            <h3>📝 Documentation & Reporting Standards</h3>
            <p>Learn proper case documentation, compliance logs, and digital reporting techniques.</p>
          </div>
          <div className="card">
            <h3>💼 Consulting Training</h3>
            <p>Hands-on consulting techniques tailored for mental health and behavioral healthcare.</p>
          </div>
          <div className="card">
            <h3>🎓 Education Consultant Training</h3>
            <p>Specialized curriculum for education-focused consultants serving academic institutions.</p>
          </div>
        </div>

        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      </div>
    </div>
  );
};

console.log("✅ lets gooo");

export default Education;