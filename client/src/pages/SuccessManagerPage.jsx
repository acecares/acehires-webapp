import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RolePage.css";
import TermsModal from "../components/TermsModal";

const SuccessManagerPage = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="role-page">
      {!agreed && <TermsModal onAgree={() => setAgreed(true)} />}
      {agreed && (
        <div className="content">
          <h1>Success Manager</h1>
          <p>Welcome to the Success Manager role onboarding page.</p>
          <button onClick={() => navigate(-1)}>⬅ Go Back</button>
        </div>
      )}
    </div>
  );
};

export default SuccessManagerPage;
