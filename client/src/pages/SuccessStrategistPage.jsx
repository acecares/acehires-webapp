import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import TermsModal from "../components/TermsModal";

const SuccessStrategistPage = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [visibleDoc, setVisibleDoc] = useState(null);

  const handleAgree = () => setAgreed(true);

  const documents = [
    { id: "onboarding", label: "Onboarding Form", file: "/Application_Employee_Part_1.pdf" },
    { id: "handbook", label: "Employee Handbook", file: "/Application_Employee_Part_2.pdf" },
    { id: "compliance", label: "Compliance Guide", file: "/Application_Employee_Part_3.pdf" },
    { id: "training", label: "Training Overview", file: "/Application_Employee_Part_4.pdf" },
    { id: "policy", label: "Policy Agreement", file: "/Application_Employee_Part_5.pdf" },
  ];

  const selectedFile = documents.find(doc => doc.id === visibleDoc)?.file || "";

  return (
    <div style={styles.page}>
      {!agreed && <TermsModal onAgree={handleAgree} />}

      {agreed && (
        <div style={styles.card}>
          <h1 style={styles.heading}>Success Strategist</h1>
          <p style={styles.subheading}>
            Welcome to the Success Strategist role onboarding page.
          </p>

          <div style={styles.buttonGrid}>
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setVisibleDoc(doc.id)}
                style={{
                  ...styles.button,
                  ...(visibleDoc === doc.id ? styles.buttonActive : {}),
                }}
              >
                {doc.label}
              </button>
            ))}
          </div>

          {selectedFile && (
            <div style={styles.viewerContainer}>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={selectedFile} />
              </Worker>
            </div>
          )}

          <button onClick={() => navigate(-1)} style={styles.backButton}>
            ← Go Back
          </button>
        </div>
      )}
    </div>
  );
};

// --- 💅 Clean & Condensed Styles ---
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fc",
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "960px",
    width: "100%",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "6px",
    color: "#222",
  },
  subheading: {
    fontSize: "15px",
    textAlign: "center",
    marginBottom: "22px",
    color: "#555",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 18px",
    fontSize: "15px",
    fontWeight: "500",
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  buttonActive: {
    backgroundColor: "#007bff",
    color: "#fff",
    borderColor: "#007bff",
  },
  viewerContainer: {
    height: "650px",
    borderRadius: "6px",
    overflow: "hidden",
    marginTop: "16px",
    border: "1px solid #e0e0e0",
  },
  backButton: {
    marginTop: "25px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#007bff",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default SuccessStrategistPage;
