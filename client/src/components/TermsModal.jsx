import React from 'react';
import './TermsModal.css';

const TermsModal = ({ onAgree }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Terms & Conditions</h2>
        <p>
          Welcome to ACE Compliance Consulting. Before continuing, please agree to the following terms:
        </p>
        <ul>
          <li>🔐 Confidentiality is strictly required.</li>
          <li>🚫 No sharing of proprietary training material.</li>
          <li>✅ You acknowledge all onboarding instructions.</li>
        </ul>
        <button onClick={onAgree} className="agree-btn">✅ Agree & Continue</button>
      </div>
    </div>
  );
};

export default TermsModal;
