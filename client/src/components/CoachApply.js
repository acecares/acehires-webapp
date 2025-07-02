import React, { useEffect } from 'react';
import './CoachApply.css';
import aceLogo from '../assets/main-logo-ace.png';

const CoachApply = () => {
  // Scroll to top after GoHighLevel form is submitted
  useEffect(() => {
    const handleFormSubmission = (event) => {
      if (event.data === 'formSubmitted') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('message', handleFormSubmission);
    return () => window.removeEventListener('message', handleFormSubmission);
  }, []);

  return (
    <div className="coach-apply-container">
      <div className="coach-apply-content">
        <img src={aceLogo} alt="ACE Compliance Consulting" className="ace-logo" />
        <h1 className="apply-heading">Apply as a Coach</h1>

        <div className="form-container">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/AFeUyNjZk2PCDY8S0uHt"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-AFeUyNjZk2PCDY8S0uHt"
            data-version="2"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Coach Hiring Form – ACE"
            data-height="1504"
            data-layout-iframe-id="inline-AFeUyNjZk2PCDY8S0uHt"
            data-form-id="AFeUyNjZk2PCDY8S0uHt"
            title="Coach Hiring Form – ACE"
          ></iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
      </div>
    </div>
  );
};

export default CoachApply;
