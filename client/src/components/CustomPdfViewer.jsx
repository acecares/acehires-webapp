// components/CustomPdfViewer.jsx
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const CustomPdfViewer = () => {
  return (
    <div style={{ height: "700px", width: "100%", borderRadius: "8px", overflow: "hidden" }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
        <Viewer fileUrl="/Application_Employee_Part_1.pdf" />
      </Worker>
    </div>
  );
};

export default CustomPdfViewer;
