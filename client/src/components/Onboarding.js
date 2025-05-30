import React from 'react';
import './Onboarding.css';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      <div className="overlay">
        <h1>Consultant Onboarding</h1>
        <p>
          We onboard new consultants through an orientation process including training, service overview,
          and internal policy alignment. Our onboarding covers:
        </p>
        <ol>
          <li>✅ Initial Compliance Training</li>
          <li>✅ Introduction to Client Process Flow</li>
          <li>✅ GoHighLevel Platform Walkthrough</li>
          <li>✅ Interview Scheduling and Documentation</li>
        </ol>
        <p>Please contact your ACE admin for your personalized onboarding link.</p>

        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      </div>
    </div>
  );
};

export default Onboarding;
