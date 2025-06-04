import React, { useState } from 'react';
import './Onboarding.css';
import { useNavigate } from 'react-router-dom';

const contentData = {
  mindset: `We Empower, Educate, and Execute with Excellence. We don’t make excuses, we make it happen!
  Our team operates with positivity, high energy, and integrity.`,
  objectives: `
  1. Compliance Excellence  
  2. Client Empowerment  
  3. Growth and Scalability  
  4. Operational Efficiency  
  5. Continuous Improvement  
  6. Partnership and Collaboration  
  7. Leadership in Compliance Education  
  8. Innovation in Service Delivery
  `,
  culture: `Our culture is performance-based and growth-oriented. We prioritize honesty, results, efficiency, and a mindset focused on achievement, transparency, and improvement.`,
  values: `ISEE:  
  • Integrity – Honest and ethical in all we do  
  • Success – Focused on client transformation  
  • Effectiveness – Real impact and results  
  • Efficiency – Time/resource optimized strategies`,
  expectations: `We work with high energy, proactive team members who thrive in supportive, collaborative, growth-oriented environments.`,
  philosophy: `Grow (continuous improvement)  
  Win (achieve goals fast)  
  Thrive (long-term sustainability and vision)`
};

const Onboarding = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (key) => {
    setActiveCard(activeCard === key ? null : key);
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-overlay">
        <h1 className="animated-heading">Welcome to ACE Consultant Onboarding</h1>
        <p className="tagline">Empowers Profits, Compliance, and Success</p>

        <div className="card-grid">
          {[
            { key: 'mindset', label: '💡 Our Mindset' },
            { key: 'objectives', label: '🎯 Our Objectives' },
            { key: 'culture', label: '🧱 Our Culture' },
            { key: 'values', label: '🔑 Core Values (ISEE)' },
            { key: 'expectations', label: '🚀 What We Expect' },
            { key: 'philosophy', label: '🧠 Words We Live By' },
          ].map(({ key, label }) => (
            <div
              key={key}
              className={`card ${activeCard === key ? 'active' : ''}`}
              onClick={() => handleCardClick(key)}
            >
              {label}
              {activeCard === key && <div className="card-content">{contentData[key]}</div>}
            </div>
          ))}
        </div>

        <div className="next-steps">
          <h2>Next Steps in Your Onboarding</h2>
          <ul>
            <li>📅 <a href="https://calendly.com/your-interview-link" target="_blank" rel="noopener noreferrer">Schedule Your Interview</a></li>
            <li>🎓 <a href="https://yourtrainingportal.com" target="_blank" rel="noopener noreferrer">Access Compliance Courses</a></li>
            <li>📥 Receive internal training via email from admin</li>
            <li>🤝 Contact <a href="mailto:support@acecompliance.org" rel="noopener noreferrer">support@acecompliance.org</a> for help</li>
          </ul>
          <button onClick={() => navigate('/')}>⬅ Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
