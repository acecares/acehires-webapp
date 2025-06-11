import React from "react";
import { useNavigate } from "react-router-dom";
import "./RolePage.css";

const SuccessConsultantPage = () => {
  const navigate = useNavigate();
  return (
    <div className="role-page">
      <div className="content">
        <h1>Success Consultant</h1>
        <p>Welcome to the Success Consultant role onboarding page.</p>
        <button onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    </div>
  );
};

export default SuccessConsultantPage;
