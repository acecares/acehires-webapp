import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import TermsModal from "../components/TermsModal";

const SuccessCoachesPage = () => {
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
          <h1 style={styles.heading}>Success Coaches role</h1>
          <p style={styles.subheading}>Welcome to the Success Coaches role onboarding page.</p>
           <div className="info-section">
            <p><strong>FINALLY, SERVICES TO SUPPORT HOME CARE AGENCY OWNERS ACHIEVE SUCCESS!</strong></p>
            <p>
              Stress and burn-out are very real problems amongst home health care agency owners and it’s often something that isn’t talked about enough throughout the industry. Whether you’ve been working in home care for 10+ years or are just getting started as an owner, it can all be tremendously overwhelming.
            </p>
            <p>
              Running a Home Care business is no easy feat and overworking yourself doesn’t just affect you – it can impact personal relationships with family and friends, your teammates, how smoothly business operation runs, clients/caregivers, your overall satisfaction, and your mental health and wellbeing.
            </p>
            <p>
              Connecting with a home care certified coach, networking with other home care agency owners, knowing your limits, intentionally investing in yourself through seminars, Home Care Masterminds, and taking time to focus on your mental, emotional, and physical wellbeing is extremely beneficial in achieving industry success and creating a life that you love.
            </p>
            <p>
              How do you cope with the mounting pressure? Do you do more with less? Yes.<br />
              Do you sacrifice your own well-being to keep up with the demands of the business? Yes.<br />
              If your answer is Yes to 1 or 2, it’s time to consider a Certified Home Care Coach!
            </p>
            <p>
              A support system to transform your agency—From Startup to Success. Implement a Success Blueprint to build the systems your agency requires to grow—and the strategic partner you desire to implement them.
            </p>
            <p>
              Let us be your strategic partner and support system to achieve success in home care with freedom, ease, and peace of mind.
            </p>
            <p><strong>Succeed in Home Care</strong></p>
            <p>
              Compliance without an operational and financial Success strategy generates a struggling agency.
            </p>
            <p>
              Growth without systems and structures can be painful. Discover how to grow and scale your business with your team to achieve success.
            </p>
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


export default SuccessCoachesPage;

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




