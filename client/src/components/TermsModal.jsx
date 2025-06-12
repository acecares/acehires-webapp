import React, { useState } from 'react';
import './TermsModal.css';

const TermsModal = ({ onAgree }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="terms-modal-overlay">
      <div className="terms-modal">
        <h2>Terms & Conditions</h2>
        <p>Welcome to ACE Compliance Consulting. Before continuing, please agree to the following terms:</p>
        <ul>
          <li>🔒 Confidentiality is strictly required.</li>
          <li>🚫 No sharing of proprietary training material.</li>
          <li>✅ You acknowledge all onboarding instructions.</li>
        </ul>

        <div className="checkbox-section">
          <input
            type="checkbox"
            id="agree-checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree-checkbox"> I Agree & Continue</label>
        </div>

        <button
          className="agree-button"
          onClick={onAgree}
          disabled={!checked}
        >
          ✅ Agree & Continue
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
