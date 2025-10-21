import React from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";

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


  {
    title: "Survey Success Ready™ Program",
    description:
      "A comprehensive readiness system that ensures your agency passes surveys with success, zero delays, and total compliance confidence.",
  },
  {
    title: "Startup Success Systems™",
    description:
      "A step-by-step launch framework that takes your home health, hospice, or home care agency from startup to licensed, certified, and revenue-ready",
  },
  {
    title: "Agency Revenue Accelerator™",
    description:
      "A profit optimization program that identifies operational and billing gaps to maximize cash flow, boost margins, and drive predictable agency growth.",
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
        {/* <p className="services-subtitle">
          Empowering agencies to achieve compliance excellence through strategic and customized consulting support.
        </p> */}

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
