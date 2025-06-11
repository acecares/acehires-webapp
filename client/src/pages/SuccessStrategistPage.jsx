import React from "react";
import { useNavigate } from "react-router-dom";
import "./RolePage.css";

const SuccessStrategistPage = () => {
  const navigate = useNavigate();
  return (
    <div className="role-page">
      <div className="content">
        <h1>Success Strategist</h1>
        <p>Welcome to the Success Strategist role onboarding page.</p>
        <button onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    </div>
  );
};

export default SuccessStrategistPage;
