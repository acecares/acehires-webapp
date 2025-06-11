import React from "react";
import { useNavigate } from "react-router-dom";
import "./RolePage.css";

const ApplicationSuccessExpertPage = () => {
  const navigate = useNavigate();
  return (
    <div className="role-page">
      <div className="content">
        <h1>Application Success Expert</h1>
        <p>Welcome to the Application Success Expert role onboarding page.</p>
        <button onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    </div>
  );
};

export default ApplicationSuccessExpertPage;
