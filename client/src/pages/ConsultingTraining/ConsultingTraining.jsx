import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./ConsultingTraining.css";
import Navbar from "../../components/Navbar/Navbar";

const ConsultingTraining = () => {
  const navigate = useNavigate();
  const [visibleDoc, setVisibleDoc] = useState("consulting"); // Default first doc visible

  const documents = [
    {
      id: "consulting",
      label: "Consulting Training Material",
      file: "/Consulting-Training.pdf",
    },
    {
      id: "consulting2",
      label: "Ace Compliance Consulting Guide",
      file: "/Ace-Compliance-Consulting.pdf",
    },
  ];

  const selectedFile =
    documents.find((doc) => doc.id === visibleDoc)?.file || "";

  return (
    <div className="consulting-page">
      <Navbar />

      <div className="consulting-card">
        <h1 className="consulting-title">Consulting Training</h1>
        <p className="consulting-desc">
          Hands-on consulting techniques tailored for Home Healthcare Services.
        </p>

        {/* === Toggle Buttons === */}
        <div className="consulting-button-container">
          {documents.map((doc) => (
            <button
              key={doc.id}
              className={`consulting-toggle-btn ${
                visibleDoc === doc.id ? "active" : ""
              }`}
              onClick={() => setVisibleDoc(doc.id)} // ✅ FIXED
            >
              {doc.label}
            </button>
          ))}
        </div>

        {/* === PDF Viewer === */}
        {selectedFile && (
          <div className="consulting-viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={selectedFile} />
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

export default ConsultingTraining;
