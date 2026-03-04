import React from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const serviceItems = [
  {
    title: "QAPI / QAPI I I I",
    description:
      "Quality Assurance & Performance Improvement support for compliance, performance, and agency growth.",
  },
  {
    title: "Mock Survey",
    description:
      "Simulated surveys to prepare agencies for official state and federal inspections with confidence.",
  },
  {
    title: "Chart Audit",
    description:
      "Detailed chart reviews to identify compliance gaps, reduce risk, and ensure survey readiness.",
  },
  {
    title: "Legal Consulting",
    description:
      "Guidance on healthcare compliance laws, policy development, and documentation best practices.",
  },
  {
    title: "Plan of Correction",
    description:
      "Strategic corrective plans to resolve deficiencies post-survey and protect your agency’s standing.",
  },
  {
    title: "Compliance Services",
    description:
      "Comprehensive compliance support tailored for home health, hospice, and home care agencies.",
  },
  {
    title: "Success Strategic Session",
    description:
      "One-on-one strategy sessions focused on operational excellence and compliance success planning.",
  },
  {
    title: "Agency Evaluation",
    description:
      "Complete evaluation of policies, workflows, and compliance readiness with actionable recommendations.",
  },
  {
    title: "Find & Fix Solutions (Corrections)",
    description:
      "Hands-on correction services to address compliance findings quickly and prevent repeat deficiencies.",
  },
  {
    title: "Survey Success Ready™ Program",
    description:
      "A comprehensive readiness system designed to help your agency pass surveys with total confidence.",
  },
  {
    title: "Startup Success Systems™",
    description:
      "A step-by-step launch framework that takes your agency from startup to licensed, certified, and revenue-ready.",
  },
  {
    title: "Agency Revenue Accelerator™",
    description:
      "A profit optimization program that identifies operational and billing gaps to maximize cash flow and growth.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <Navbar />

      {/* Hero overlay */}
      <div className="services-hero">
        <div className="services-content">
          <p className="services-kicker">Ace Success Team</p>

          <h1 className="services-title">
            <span className="title-green">Our</span>{" "}
            <span className="title-yellow">Consulting</span>{" "}
            <span className="title-green">Services</span>
          </h1>

          <div className="services-underline" />

          <p className="services-subtitle">
            Compliance-first consulting that helps agencies prepare for surveys, strengthen
            documentation, and build sustainable operational success.
          </p>

          <div className="services-grid">
            {serviceItems.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-card-actions">
                  {/* <button
                    type="button"
                    className="btn-primary"
                    onClick={() => navigate("/contact")}
                  >
                    Request Support
                  </button> */}

                  {/* <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => navigate("/contact")}
                  >
                    Book a Call
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          <div className="services-bottom-note">
            Need help choosing the right service?{" "}
            <button
              type="button"
              className="link-btn"
              onClick={() => navigate("/contact")}
            >
              Contact us
            </button>{" "}
            and we’ll guide you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;