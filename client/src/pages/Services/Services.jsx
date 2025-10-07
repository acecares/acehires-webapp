import React from "react";
import "./Services.css";
// import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"; // ✅ Added Navbar import

const serviceItems = [
  {
    title: "QAPI",
    description:
      "Quality Assurance & Performance Improvement support for compliance and growth.",
  },
  {
    title: "Mock Survey",
    description:
      "Simulated surveys to prepare agencies for official state and federal inspections.",
  },
  {
    title: "Chart Audit",
    description:
      "Detailed chart reviews to identify compliance gaps and ensure readiness.",
  },
  {
    title: "Legal Consulting",
    description:
      "Guidance on healthcare compliance laws, policies, and documentation.",
  },
  {
    title: "Plan of Correction",
    description:
      "Strategic corrective plans to resolve deficiencies post-survey.",
  },
  {
    title: "Compliance Services",
    description:
      "Comprehensive compliance support for agencies and providers.",
  },
  {
    title: "Success Strategic Session",
    description:
      "One-on-one sessions focused on planning and operational excellence.",
  },
  {
    title: "Agency Evaluation",
    description:
      "Complete evaluation of policies, workflows, and compliance readiness.",
  },
  {
    title: "Find & Fix Solutions (Corrections)",
    description:
      "Hands-on correction services to address compliance findings quickly.",
  },
];


const Services = () => {
  return (
    <div className="services-page">
      {/* ✅ Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="services-content">
        <h1 className="services-title">Our Consulting Services</h1>
        <p className="services-subtitle">
          Empowering agencies to achieve compliance excellence through strategic and customized consulting support.
        </p>

        <div className="services-grid">
          {serviceItems.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;