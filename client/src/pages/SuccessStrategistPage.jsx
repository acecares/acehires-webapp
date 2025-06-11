import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TermsModal from "../components/TermsModal";
import "./RolePage.css";

const SuccessStrategistPage = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="role-page">
      {!agreed && <TermsModal onAgree={() => setAgreed(true)} />}

      {agreed && (
        <div className="content">
          <h1>Success Strategist</h1>
          <p>Welcome to the Success Strategist role onboarding page.</p>
          <button onClick={() => navigate(-1)}>⬅ Go Back</button>
        </div>
      )}
    </div>
  );
};

export default SuccessStrategistPage;
