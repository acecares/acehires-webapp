import React from 'react';
import './ConsultantApply.css';
import aceLogo from '../assets/main-logo-ace.png';

const ConsultantApply = () => {
  return (
    <div className="consultant-form-container">
      <img src={aceLogo} alt="ACE Compliance Consulting" className="ace-logo" />
      <h1>Apply as a Consultant</h1>

      <div className="form-container">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/JP3pTy8b7ityYCsVRtrN"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
          id="inline-JP3pTy8b7ityYCsVRtrN"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Consultant Hiring Form – ACE"
          data-height="1479"
          data-layout-iframe-id="inline-JP3pTy8b7ityYCsVRtrN"
          data-form-id="JP3pTy8b7ityYCsVRtrN"
          title="Consultant Hiring Form – ACE"
        ></iframe>
        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      </div>
    </div>
  );
};

export default ConsultantApply;
