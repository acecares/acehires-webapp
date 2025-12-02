import React, { useState } from 'react';
import './TermsModal.css';

const TermsModal = ({ onAgree, title = 'Terms & Conditions', terms = [] }) => {
  const [isChecked, setIsChecked] = useState(false);

  const defaultTerms = [
    "Confidentiality is strictly required.",
    "No sharing of proprietary training material.",
    "You acknowledge all onboarding instructions.",
  ];

  const termsToShow = terms.length > 0 ? terms : defaultTerms;

  return (
    <div className="terms-modal-overlay">
      <div className="terms-modal">

        <h2>{title}</h2>

        <p>Before continuing, please agree to the following terms:</p>

        <ul>
          {termsToShow.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>

        <div className="checkbox-section">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="agree"> I Agree & Continue</label>
        </div>

        <button
          className="agree-button"
          disabled={!isChecked}
          onClick={onAgree}
        >
          Agree & Continue
        </button>

      </div>
    </div>
  );
};

export default TermsModal;
