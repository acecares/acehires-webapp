import React, { useState } from "react";
import "./AANOnboarding.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const AANOnboarding = () => {
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
      downloadable: true, // ONLY THIS ONE DOWNLOADS
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

  return (
    <div className="aan-container">
      {/* Logo */}
      <div className="aan-logo-wrapper">
        <img
          src="/all-american-medical-staffing-logo.png"
          alt="AAMS Logo"
          className="aan-logo"
        />
      </div>

      <h1 className="aan-main-title">All American Onboarding</h1>

      {/* ONBOARDING TEXT SECTION */}
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
            className={`aan-pdf-button ${
              btn.downloadable ? "aan-download-btn" : ""
            }`}
            onClick={() => setSelectedFile(btn.file)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* VIEW-ONLY PDF VIEWER (for all except checklist) */}
      {selectedFile &&
        selectedFile !== "/Onboarding-Activities-Checklist.pdf" && (
          <div className="aan-pdf-viewer-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={selectedFile} />
            </Worker>
          </div>
        )}

      {/* DOWNLOAD ONLY FOR CHECKLIST */}
      {selectedFile === "/Onboarding-Activities-Checklist.pdf" && (
        <div className="aan-download-section">
          <a
            href={selectedFile}
            download
            className="aan-direct-download-link"
          >
            Click to download the Onboarding Activities & Checklist PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default AANOnboarding;
