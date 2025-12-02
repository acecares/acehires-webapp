import React, { useState } from "react";
import TermsModal from "../../components/TermsModal";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./AANOnboarding.css";

const AANOnboarding = () => {
  const [codeVerified, setCodeVerified] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const pdfButtons = [
    {
      id: "role",
      label: "Role Overview",
      file: "/AAN-Role-Overview.pdf",
      downloadable: false,
    },
    {
      id: "orientation",
      label: "Orientation Training Modules",
      file: "/AAN-Orientation-Modules.pdf",
      downloadable: false,
    },
    {
      id: "checklist",
      label: "⬇ Onboarding Activities & Checklist (PDF)",
      file: "/Onboarding-Activities-Checklist.pdf",
      downloadable: true,
    },
    {
      id: "performance",
      label: "Performance Expectations",
      file: "/AAN-Performance-Expectations.pdf",
      downloadable: false,
    },
    {
      id: "tools",
      label: "AAMS Tools & Resources",
      file: "/AAMS-Tools-and-Resources.pdf",
      downloadable: false,
    },
  ];

  const handleVerifyCode = () => {
    if (accessCode.trim().toLowerCase() === "success") {
      setTimeout(() => setCodeVerified(true), 200);
    } else {
      alert("Invalid Code. Please try again.");
    }
  };

  return (
    <div className="aan-container">

      {/* =====================================
          ACCESS CODE AUTHENTICATION MODAL
      ======================================= */}
      {!codeVerified && (
        <div className="aan-auth-overlay">
          <div className="aan-auth-modal">

            <h2 className="aan-auth-title">Enter Access Code for Onboarding</h2>

            <input
              type="text"
              className="aan-auth-input"
              placeholder="Enter access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
            />

            <div className="aan-auth-btn-row">
              <button className="aan-auth-verify" onClick={handleVerifyCode}>
                Verify & Continue
              </button>

              <button
                className="aan-auth-cancel"
                onClick={() => (window.location.href = "/aan")}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

      {/* TERMS & CONDITIONS MODAL */}
      {codeVerified && !agreed && <TermsModal onAgree={() => setAgreed(true)} />}

      {/* =====================================
          MAIN CONTENT (Shown after all checks)
      ======================================= */}
      {codeVerified && agreed && (
        <>
          <div className="aan-logo-wrapper">
            <img
              src="/all-american-medical-staffing-logo.png"
              alt="AAMS Logo"
              className="aan-logo"
            />
          </div>

          <h1 className="aan-main-title">All American Onboarding</h1>

          {/* INFO BLOCK */}
          <div className="aan-info-box">
            <h2>Intention & Outcome of Onboarding</h2>
            <p>
              The purpose of this onboarding is to ensure you confidently step into
              the field as an <strong>All American Medical Staffing Survey-Ready Nurse™</strong>,
              delivering:
            </p>

            <ul>
              <li>High-quality, compliant care</li>
              <li>Timely, accurate documentation</li>
              <li>Professional, aligned representation of our brand and values</li>
            </ul>

            <h3>Expected Time to Complete Onboarding</h3>
            <ul>
              <li><strong>Day 1:</strong> Welcome, setup, handbook, portal access</li>
              <li><strong>Days 2–3:</strong> Compliance, documentation, operations training</li>
              <li><strong>Days 3–5:</strong> Shadowing, chart review, skill verification</li>
              <li><strong>Week 1:</strong> First assignment & QA introduction</li>
              <li><strong>Month 1:</strong> Fully integrated Survey-Ready Nurse™</li>
            </ul>

            <h3>You will be:</h3>
            <ul className="aan-checklist">
              <li>✔ Confident</li>
              <li>✔ Competent</li>
              <li>✔ Compliant</li>
              <li>✔ Ready to represent the All-American brand with excellence</li>
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="aan-buttons-wrapper">
            {pdfButtons.map((btn) => (
              <button
                key={btn.id}
                className={`aan-pdf-button ${btn.downloadable ? "aan-download-btn" : ""}`}
                onClick={() => setSelectedFile(btn.file)}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* PDF Viewer */}
          {selectedFile &&
            selectedFile !== "/Onboarding-Activities-Checklist.pdf" && (
              <div className="aan-pdf-viewer-container">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={selectedFile} />
                </Worker>
              </div>
            )}

          {/* Download-only */}
          {selectedFile === "/Onboarding-Activities-Checklist.pdf" && (
            <div className="aan-download-section">
              <a href={selectedFile} download className="aan-direct-download-link">
                Click to download the Onboarding Activities & Checklist PDF
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AANOnboarding;
