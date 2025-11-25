import React, { useState } from "react";
import TermsModal from "../../components/TermsModal";
import "./AANOnboarding.css";

const AANOnboarding = () => {
  const [codeVerified, setCodeVerified] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [activeTab, setActiveTab] = useState(null);

  const pdfFiles = {
    overview: "/AAN-Role-Overview.pdf",
    modules: "/AAN-Orientation-Modules.pdf",
    expectations: "/AAN-Performance-Expectations.pdf",
    tools: "/AAMS-Tools-and-Resources.pdf",
  };

  const handleDownloadChecklist = () => {
    const link = document.createElement("a");
    link.href = "/Onboarding-Activities-Checklist.pdf";
    link.download = "Onboarding-Activities-Checklist.pdf";
    link.click();
  };

  const handleVerifyCode = () => {
    if (accessCode.trim().toLowerCase() === "success") {
      setTimeout(() => setCodeVerified(true), 150);
    } else {
      alert("Invalid Code. Please try again.");
    }
  };

  return (
    <div className="aan-onboard-wrapper">
      
      {/* ACCESS CODE MODAL */}
      {!codeVerified && (
        <div className="aan-code-modal-overlay">
          <div className="aan-code-modal">
            <h2 className="modal-title">Enter Access Code for Onboarding</h2>

            <input
              type="text"
              className="aan-code-input"
              placeholder="Enter access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
            />

            <div className="aan-code-buttons">
              <button className="verify-btn" onClick={handleVerifyCode}>
                Verify & Continue
              </button>

              <button
                className="cancel-btn"
                onClick={() => (window.location.href = "/aan")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TERMS MODAL */}
      {codeVerified && !agreed && <TermsModal onAgree={() => setAgreed(true)} />}

      {/* MAIN CONTENT */}
      {codeVerified && agreed && (
        <div className="aan-onboard-content">
          <div className="aan-logo-wrapper">
              <img
                src="/all-american-medical-staffing-logo.png"
                alt="All American Logo"
                className="aan-logo"
              />
            </div>

          {/* <h1 className="aan-main-title">All American Onboarding</h1> */}

          <section className="aan-section">
            <h2 className="aan-section-title">Intention & Outcome of Onboarding</h2>

            <p>
              The purpose of this onboarding is to ensure you confidently step into the field as an
              <strong> All American Medical Staffing Survey-Ready Nurse™</strong>, delivering:
            </p>

            <ul className="aan-list">
              <li>High-quality, compliant care</li>
              <li>Timely, accurate documentation</li>
              <li>Professional, aligned representation of our brand and values</li>
            </ul>

            <h3 className="aan-subtitle">Expected Time to Complete Onboarding</h3>

            <ul className="aan-list">
              <li><strong>Day 1:</strong> Welcome, setup, handbook, portal access</li>
              <li><strong>Days 2–3:</strong> Compliance, documentation, operations training</li>
              <li><strong>Days 3–5:</strong> Shadowing, chart review, skill verification</li>
              <li><strong>Week 1:</strong> First assignment & QA introduction</li>
              <li><strong>Month 1:</strong> Fully integrated Survey-Ready Nurse™</li>
            </ul>

            <p className="aan-checkmarks">
              ✔ Confident <br />
              ✔ Competent <br />
              ✔ Compliant <br />
              ✔ Ready to represent the All-American brand with excellence
            </p>
          </section>

          {/* BUTTON GRID */}
          <div className="aan-button-grid">

            <button
              className={`aan-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Role Overview
            </button>

            <button
              className={`aan-btn ${activeTab === "modules" ? "active" : ""}`}
              onClick={() => setActiveTab("modules")}
            >
              Orientation Training Modules
            </button>

            <button className="aan-btn-download" onClick={handleDownloadChecklist}>
              ⬇ Onboarding Activities & Checklist (PDF)
            </button>

            <button
              className={`aan-btn ${activeTab === "expectations" ? "active" : ""}`}
              onClick={() => setActiveTab("expectations")}
            >
              Performance Expectations
            </button>

            <button
              className={`aan-btn ${activeTab === "tools" ? "active" : ""}`}
              onClick={() => setActiveTab("tools")}
            >
              AAMS Tools & Resources
            </button>
          </div>

          {/* PDF VIEWER */}
          {activeTab && (
            <div className="aan-pdf-container">
              <iframe
                src={pdfFiles[activeTab]}
                title="PDF Viewer"
                className="aan-pdf-iframe"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AANOnboarding;
