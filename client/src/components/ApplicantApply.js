import React, { useEffect } from 'react';
import './ApplicantApply.css';

const ApplicantApply = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="applicant-container">
      <div className="applicant-header">
        <img src="/main-logo.png" alt="ACE Logo" className="ace-logo" />
        <h1 className="apply-title">Apply as an Applicant</h1>
      </div>

      <div className="form-wrapper">
        <iframe
          id="inline-TYJoPRy60LQVXVol3ckH"
          src="https://api.leadconnectorhq.com/widget/form/TYJoPRy60LQVXVol3ckH"
          style={{
            width: '100%',
            height: '1954px',
            border: 'none',
            borderRadius: '4px',
          }}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Applicant Hiring Form – ACE"
          data-layout-iframe-id="inline-TYJoPRy60LQVXVol3ckH"
          data-form-id="TYJoPRy60LQVXVol3ckH"
          title="Applicant Hiring Form – ACE"
        ></iframe>
      </div>
    </div>
  );
};

export default ApplicantApply;
