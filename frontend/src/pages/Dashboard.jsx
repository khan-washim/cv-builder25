import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [savedCvs, setSavedCvs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCvs = JSON.parse(localStorage.getItem("savedCVs")) || [];
    setSavedCvs(storedCvs);
  }, []);

  const handleDelete = (index) => {
    const updatedCvs = savedCvs.filter((_, i) => i !== index);
    localStorage.setItem("savedCVs", JSON.stringify(updatedCvs));
    setSavedCvs(updatedCvs);
  };

  const handleEdit = (index) => {
    const cvToEdit = savedCvs[index];
    localStorage.setItem("editCv", JSON.stringify(cvToEdit));
    navigate("/create-cv");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Saved CVs</h2>
      {savedCvs.length > 0 ? (
        <div className="list-group">
          {savedCvs.map((cv, index) => (
            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{cv.fullName || "Unnamed CV"}</strong><br />
                <small>{cv.email || "No email provided"}</small><br />
                <small className="text-muted">Template: {cv.selectedTemplate}</small>
              </div>
              <div>
                <button className="btn btn-info btn-sm me-2" onClick={() => navigate(`/cv-preview/${index}`)}>
                  Preview
                </button>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No CVs saved yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
