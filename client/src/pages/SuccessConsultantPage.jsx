import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import TermsModal from "../components/TermsModal";

const SuccessConsultantPage = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [visibleDoc, setVisibleDoc] = useState(null);

  const handleAgree = () => setAgreed(true);

  const documents = [
    { id: "handbook", label: "Success Specialist role & Responsibilities", file: "/1-Success_Manager_Position_Description.pdf" },
    { id: "onboarding", label: "Onboarding Form", file: "/Warm_Welcome.pdf" },
    { id: "compliance", label: "Team Member Success Guidelines", file: "/Employee-Onboarding-updated.pdf" },
    { id: "training", label: "Training Overview", file: "/Application_Employee_Part_4.pdf" },
    { id: "policy", label: "Policy Agreement", file: "/policy-agreement.pdf" },
  ];

  const selectedFile = documents.find(doc => doc.id === visibleDoc)?.file || "";
  return (
    <div style={styles.page}>
      {!agreed && <TermsModal onAgree={handleAgree} />}

      {agreed && (
        <div style={styles.card}>
          <h1 style={styles.heading}>Success Consultant role</h1>
          <p style={styles.subheading}>Welcome to the Success Consultant role onboarding page.</p>
           <div className="info-section">
            <h2>Compliance Consulting</h2>
            <p>
              Every client should achieve success in-home care.
              Through our fail-proof systems and comprehensive agency analysis, we are able to discover the key distinguishing factors for each agency to achieve and maintain success. The most successful organizations use a consulting company to maintain compliance, leverage efficiency and effectiveness, and distinguish themselves from others to establish a competitive advantage.
            </p>
            <p>
              Our highly-trained team will evaluate your agency’s overall clinical and administrative operation. Our team will complete an audit of clinical notes, OASIS, and clinical charts for the implementation of powerful support and tools that showcase your staffs’ most efficient and effective process for compliance, correction, and maximizing revenue. In certain cases, our consultant will find and fix out of compliance areas of the agency while onsite. Agencies that operate efficiently have the vehicle to drive engagement for growth and expansion that reaches the maximum amount of people.
            </p>
            <p>
              Compliance success begins with Ace Compliance Consulting. Ace offers several compliance packages to choose whether your agency needs to implement an effective compliance program or show compliance with State or Federal Rules and Regulations, Accreditation Standards, Medicare conditions of participation, develop plans of corrections, or implement corrective action plans.
            </p>

            <h2>Quality Assurance</h2>
            <p>
              Experience the difference. Health care consulting with a personal touch! Ace Compliance Consulting can implement a quality assurance and compliance program that enables ease and efficiency in incorporating comprehensive and efficient compliance tools.
            </p>
            <p>
              State, Accreditation, and Federal Regulations require agencies to conduct quarterly audits. The new wave of changes requires an effective QAPI program to effectively operate a profitable agency. Ace Compliance Consulting Team of experts will audit personnel and clinical files for accuracy and compliance. Upon request, our staff will also assist the agency in correcting errors and implementing a plan of corrections in compliance with the law.
            </p>

            <h2>Solve Problems to Ensure Success</h2>
            <p>
              <strong>PRE-SURVEY AUDITS:</strong> Skilled clinicians and our highly-trained administrative staff will review the agency’s programs, human resource setup, clinical charts, patient notes, and all policies to ensure compliance with accreditation standards and both State and Federal Regulations in preparation for regulatory and licensing surveys. The staff will also assist the agency with necessary corrections, system implementation, and compliance tools. Our teams will assist your team to solve the problems to ensure ongoing success.
            </p>

            <h2>Prepare for Survey Success</h2>
            <p>
              The more forms you have, the longer it takes for the surveyors to audit your files. We have a proven system that is highly recommended by the members of the State Surveyors. Our staff is available to audit and set up your company personnel files and clinical charts for easy auditing.
            </p>

            <h2>Use Ace Compliance Consulting</h2>
            <p>
              <strong>Pass State Survey</strong>  
              Our clients’ success rate is 99%. We PASSED THE STATE SURVEY and have a 100% PASS on the ACCREDITATION SURVEY. Our system is fail-proof.
            </p>
            <p>Join our team of successful home care agencies now!</p>
          </div>
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


export default SuccessConsultantPage;

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
  contentBlock: {
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#444",
    marginBottom: "20px",
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



