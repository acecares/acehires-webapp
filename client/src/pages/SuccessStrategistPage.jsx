import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import TermsModal from "../components/TermsModal"; // your modal

const SuccessStrategistPage = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
  };

  return (
    <div className="role-page">
      {!agreed && <TermsModal onAgree={handleAgree} />}

      {agreed && (
        <div className="content">
          <h1>Success Strategist</h1>
          <p>Welcome to the Success Strategist role onboarding page.</p>

          <div style={{ height: "700px", width: "100%", borderRadius: "8px", overflow: "hidden", marginTop: "20px" }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer fileUrl="/Application_Employee_Part_1.pdf" />
            </Worker>
          </div>

          <button onClick={() => navigate(-1)} className="go-back-button">
            ← Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default SuccessStrategistPage;
