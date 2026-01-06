import React, { useState, useEffect } from "react";
import TermsModal from "../../components/TermsModal";
import "./AANOnboarding.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const AANOnboarding = () => {
  const [codeVerified, setCodeVerified] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // 🔁 PAGE-SPECIFIC FAVICON + TITLE (no Helmet)
  useEffect(() => {
    const originalTitle = document.title;

    // Try to find an existing favicon (<link rel="icon" ...>)
    let faviconEl =
      document.querySelector("link[rel='icon']") ||
      document.querySelector("link[rel='shortcut icon']");

    let originalHref = null;

    if (faviconEl) {
      originalHref = faviconEl.getAttribute("href");
      faviconEl.setAttribute(
        "href",
        "/All_American_heart.png?v=3"
      );
    } else {
      // If none exists, create one
      faviconEl = document.createElement("link");
      faviconEl.rel = "icon";
      faviconEl.type = "image/png";
      faviconEl.href = "/all-american-medical-staffing-logo.png?v=3";
      document.head.appendChild(faviconEl);
    }

    document.title = "AAN Onboarding – All American Medical Staffing";

    // Restore previous favicon + title when leaving this page
    return () => {
      if (faviconEl && originalHref) {
        faviconEl.setAttribute("href", originalHref);
      }
      document.title = originalTitle;
    };
  }, []);

  const pdfFiles = {
    role: "/AAN-Role-Overview.pdf",
    orientation: "/AAN-Orientation-Modules.pdf",
    checklist: "/Onboarding-Activities-Checklist.pdf",
    performance: "/AAN-Performance-Expectations.pdf",
    tools: "/AAMS-Tools-and-Resources.pdf",
  };

  const buttons = [
    { id: "role", label: "Role Overview", file: pdfFiles.role },
    {
      id: "orientation",
      label: "Orientation Training Modules",
      file: pdfFiles.orientation,
    },
    {
      id: "checklist",
      label: "⬇ Onboarding Activities & Checklist (PDF)",
      file: pdfFiles.checklist,
      downloadable: true,
    },
    {
      id: "performance",
      label: "Performance Expectations",
      file: pdfFiles.performance,
    },
    { id: "tools", label: "AAMS Tools & Resources", file: pdfFiles.tools },
  ];

  const handleVerifyCode = () => {
    if (accessCode.trim().toLowerCase() === "success") {
      setTimeout(() => setCodeVerified(true), 150);
    } else {
      alert("Invalid Code. Please try again.");
    }
  };

  const downloadChecklist = () => {
    const link = document.createElement("a");
    link.href = pdfFiles.checklist;
    link.download = "Onboarding-Activities-Checklist.pdf";
    link.click();
  };

  return (
    <div className="aan-wrapper">
      {/* ACCESS CODE SCREEN */}
      {!codeVerified && (
        <div className="aan-access-overlay">
          <div className="aan-access-box">
            <h2 className="aan-access-title">Enter Access Code for Onboarding</h2>

            <input
              type="text"
              className="aan-access-input"
              placeholder="Enter access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
            />

            <div className="aan-access-buttons">
              <button onClick={handleVerifyCode} className="aan-access-verify-btn">
                Verify & Continue
              </button>

              <button
                onClick={() => (window.location.href = "/aan")}
                className="aan-access-cancel-btn"
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
        <div className="aan-content">
          {/* LOGO */}
          <div className="aan-logo-wrapper">
            <img
              src="/all-american-medical-staffing-logo.png"
              alt="AAMS Logo"
              className="aan-logo"
            />
          </div>

          {/* BANNER */}
          <div className="aan-banner">
            <img
              src="/onboarding-banner.jpg"
              alt="Onboarding Banner"
              className="aan-banner-img"
            />
            <h1 className="aan-banner-text">
              Welcome to All American Medical Staffing Onboarding
            </h1>
          </div>

          {/* SECTION 1: TEXT LEFT, IMAGE RIGHT */}
          <div className="aan-section-row">
            <div className="aan-text-block">
              <h2>Intention & Outcome of Onboarding</h2>
              <p>
                The purpose of this onboarding is to ensure you confidently step
                into the field as an{" "}
                <strong>All American Medical Staffing Survey-Ready Nurse™</strong>{" "}
                delivering:
              </p>

              <ul>
                <li>High-quality, compliant care</li>
                <br></br>
                <li>Timely, accurate documentation</li>
                <br></br>
                <li>
                  Professional, aligned representation of our brand and values
                </li>
              </ul>
            </div>

            <div className="aan-img-block">
              <img src="/nursing-three-male-nurse.jpg" alt="Nurses" />
            </div>
          </div>

          {/* SECTION 2: IMAGE LEFT, TEXT RIGHT */}
          <div className="aan-section-row reverse">
            <div className="aan-img-block">
              <img src="/nursing-items.jpg" alt="Nursing Items" />
            </div>

            <div className="aan-text-block">
              <h2>Expected Time to Complete Onboarding</h2>

              <ul>
                <li>
                  <strong>Day 1:</strong> Welcome, setup, handbook, portal access
                </li>
                <br></br>
                <li>
                  <strong>Days 2–3:</strong> Compliance, documentation, operations
                  training
                </li>
                <br></br>
                <li>
                  <strong>Days 3–5:</strong> Shadowing, chart review, skill
                  verification
                </li>
                <br></br>
                <li>
                  <strong>Week 1:</strong> First assignment & QA introduction
                </li>
                <br></br>
                <li>
                  <strong>Month 1:</strong> Fully integrated Survey-Ready Nurse™
                </li>
              </ul>
            </div>
          </div>

          {/* CENTERED CARD */}
          <div className="aan-centered-card remove-bullets">
            <h2 className="aan-centered-title">You will be:</h2>

            <ul className="aan-centered-checklist">
              <li>✔ Confident</li>
              <li>✔ Competent</li>
              <li>✔ Compliant</li>
              <li>
                ✔ Ready to represent the All-American brand with excellence
              </li>
            </ul>
          </div>

          {/* BUTTONS + PDF VIEWER */}
          <div className="aan-pdf-section">
            {/* LEFT: BUTTONS */}
            <div className="aan-button-column">
              {buttons.map((btn) =>
                btn.downloadable ? (
                  <button
                    key={btn.id}
                    className="aan-btn green"
                    onClick={downloadChecklist}
                  >
                    {btn.label}
                  </button>
                ) : (
                  <button
                    key={btn.id}
                    className="aan-btn red"
                    onClick={() => setSelectedFile(btn.file)}
                  >
                    {btn.label}
                  </button>
                )
              )}
            </div>

            {/* RIGHT: PDF VIEWER AREA */}
            <div className="aan-pdf-viewer-wrapper">
              <div className="aan-pdf-scroll-area">
                {selectedFile ? (
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={selectedFile} />
                  </Worker>
                ) : (
                  <div className="aan-empty-pdf">
                    <p>Select a document to begin viewing</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AANOnboarding;
