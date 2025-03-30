import React from "react";
import { useParams } from "react-router-dom";
import CvTemplates from "../components/CvTemplates";
import "bootstrap/dist/css/bootstrap.min.css";

const CvPreview = () => {
  const { id } = useParams();
  const savedCvs = JSON.parse(localStorage.getItem("userCvs")) || [];
  const cvData = savedCvs[id];

  if (!cvData) return <h2 className="text-center text-danger mt-5">CV Not Found</h2>;

  const handlePrint = () => window.print();

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2 className="text-center mb-4 fw-bold text-primary">CV Preview</h2>
      <div id="cv-template" className="w-100 shadow p-4 bg-white rounded">
        <CvTemplates data={cvData} />
      </div>
      <button className="btn btn-success mt-4 px-4 py-2 fw-semibold shadow-sm" onClick={handlePrint}>
        <i className="bi bi-printer me-2"></i> Print CV
      </button>
    </div>
  );
};

export default CvPreview;
