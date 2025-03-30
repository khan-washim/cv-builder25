import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [savedCvs, setSavedCvs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCvs = JSON.parse(localStorage.getItem("userCvs")) || [];
    setSavedCvs(storedCvs);
  }, []);

  const handleDelete = (index) => {
    const updatedCvs = savedCvs.filter((_, i) => i !== index);
    localStorage.setItem("userCvs", JSON.stringify(updatedCvs));
    setSavedCvs(updatedCvs);
  };

  const handleEdit = (index) => {
    const cvToEdit = savedCvs[index];
    localStorage.setItem("editCv", JSON.stringify(cvToEdit)); // Store CV data temporarily
    navigate("/create-cv"); // Redirect to Create CV page
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">My Saved CVs</h2>
      <div className="list-group mt-4">
        {savedCvs.length > 0 ? (
          savedCvs.map((cv, index) => (
            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <Link to={`/cv-preview/${index}`} className="text-decoration-none">
                {cv.name} - {cv.email}
              </Link>
              <div>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No CVs saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
