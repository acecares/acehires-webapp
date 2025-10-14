import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "../ConsultingTraining/ConsultingTraining.css";
import Navbar from "../../components/Navbar/Navbar";

const DocumentationStandards = () => {
  const navigate = useNavigate();
  const [visibleDoc, setVisibleDoc] = useState("doc");

  const document = {
    id: "doc",
    label: "Documentation & Reporting Standards",
    file: "/Documentation-and-Reporting-Standards.pdf",
  };

  return (
    <div className="consulting-page">
      <Navbar />

      <div className="consulting-card">
        <h1 className="consulting-title">{document.label}</h1>
        <p className="consulting-desc">
          Proper documentation and reporting are vital for compliance and
          organizational integrity. Access the guide below.
        </p>

        <div className="consulting-button-container">
          <button
            className={`consulting-toggle-btn ${
              visibleDoc === document.id ? "active" : ""
            }`}
            onClick={() => setVisibleDoc(document.id)}
          >
            Documentation Standards
          </button>
        </div>

        {visibleDoc === document.id && (
          <div className="consulting-viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={document.file} />
            </Worker>
          </div>
        )}

        <button className="consulting-back-btn" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default DocumentationStandards;
