import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import CvTemplates from "../components/CvTemplates";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CvPreview = () => {
  const { id } = useParams();
  const savedCvs = JSON.parse(localStorage.getItem("userCvs")) || [];
  const cvData = savedCvs[id];
  const cvRef = useRef(null);

  if (!cvData) {
    return (
      <h2 className="text-center text-danger mt-5">
        CV Not Found
      </h2>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const input = cvRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 20; // Padding
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("my_cv.pdf");
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2 className="text-center mb-4 fw-bold text-primary">CV Preview</h2>

      <div ref={cvRef} id="cv-template" className="w-100 shadow p-4 bg-white rounded">
        <CvTemplates data={cvData} />
      </div>

      <div className="mt-4 d-flex gap-3">
        <button className="btn btn-success fw-semibold shadow-sm" onClick={handlePrint}>
          <i className="bi bi-printer me-2"></i> Print CV
        </button>
        <button className="btn btn-danger fw-semibold shadow-sm" onClick={handleDownloadPDF}>
          <i className="bi bi-file-earmark-arrow-down me-2"></i> Download PDF
        </button>
      </div>
    </div>
  );
};

export default CvPreview;
