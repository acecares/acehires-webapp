import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (inputCode.trim().toUpperCase() === "SUCCESS") {
      window.location.href = "/onboarding";
    } else {
      setError("Invalid access code.");
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setInputCode("");
    setError("");
  };

  return (
    <div className="home-container">
      <img
        src="/main-logo.png"
        alt="Logo"
        style={{ width: "250px", position: "relative", top: "20px" }}
      />
      <h1 className="title">ACE SUCCESS TEAM</h1>

      <div className="card-grid">
        <div className="card" onClick={() => (window.location.href = "/apply")}>
          <h2>Apply Now</h2>
        </div>
        <div
          className="card"
          onClick={() => (window.location.href = "/education")}
        >
          <h2>Trainings and Education</h2>
        </div>
        <div className="card" onClick={() => setShowModal(true)}>
          <h2>Onboarding</h2>
        </div>
        <div
          className="card"
          onClick={() => (window.location.href = "/services")}
        >
          <h2>Services</h2>
        </div>
        <div className="card" onClick={() => (window.location.href = "/about")}>
          <h2>About Us</h2>
        </div>
        <div
          className="card"
          onClick={() => (window.location.href = "/vision")}
        >
          <h2>Vision & Mission</h2>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enter Access Code for Onboarding</h2>
            <input
              type="text"
              placeholder="Enter access code"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <div className="modal-actions">
              <button onClick={handleVerify}>
                <p>Verify & Continue</p>
              </button>
              <button className="cancel" onClick={handleClose}>
                <p>Cancel</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
