import React from 'react';
import './Apply.css';
import { useNavigate } from 'react-router-dom';
import pdf1 from '../assets/Application_Employee_Part_1.pdf';
import pdf2 from '../assets/PERSONALITY_TEST_RVD_2023.pdf';

const Apply = () => {
  const navigate = useNavigate();

  return (
    <div className="content-wrapper">
    <div className="apply-container">
      <h1>Apply Now</h1>

      <div className="card-section">
        <div className="apply-card" onClick={() => navigate('/apply/applicant')}>
          <h3>Apply as an Applicant</h3>
          <p>For direct employment or client-side job positions</p>
        </div>
        <div className="apply-card" onClick={() => navigate('/apply/ConsultantApply')}>
          <h3>Apply as a Consultant</h3>
          <p>For contractors or consultants looking to join our team</p>
        </div>
        <div className="apply-card" onClick={() => navigate('/apply/ConsultantApply')}>
          <h3>Apply as a Coach</h3>
          <p>Help guide individuals toward success by sharing your expertise and experience.</p>
        </div>

        
      </div>

      <div className="note-box">
        <p>
          📌 <strong>Note:</strong> Complete the form and assessment below and attach them with your submission.
        </p>
      </div>

      <div className="pdf-section">
        <a href={pdf1} download className="pdf-button">📄 Download Application Form</a>
        <a href={pdf2} download className="pdf-button">📄 Download Assessment Form</a>
      </div>

    <div className="next-steps">
    <h2 class="myh2class">Next Steps in Your Applying</h2>
          <ul>
            <li>📅 <a href="https://calendly.com/your-interview-link" target="_blank" rel="noopener noreferrer">Schedule Your Interview</a></li>
            <li>🎓 <a href="https://yourtrainingportal.com" target="_blank" rel="noopener noreferrer">Access Compliance Courses</a></li>
            <li>🤝 Contact <a href="mailto:support@acecompliance.org" rel="noopener noreferrer">support@acecompliance.org</a> for help</li>
          </ul>
     </div>
    </div>
    </div>
  );
};

export default Apply;
