import React from "react";
import { useNavigate } from "react-router-dom";
import "./RolePage.css";

const SuccessSupportStaffPage = () => {
  const navigate = useNavigate();
  return (
    <div className="role-page">
      <div className="content">
        <h1>Success Support Staff</h1>
        <p>Welcome to the Success Support Staff role onboarding page.</p>
        <button onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    </div>
  );
};

export default SuccessSupportStaffPage;
