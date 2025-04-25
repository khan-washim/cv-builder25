import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserDashboard = () => {
  const [savedCvs, setSavedCvs] = useState([]);
  const [previewCv, setPreviewCv] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  // Fetch saved CVs for the logged-in user
  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5000/api/cvs/user/${userId}`)
        .then((res) => setSavedCvs(res.data))
        .catch((err) => {
          console.error("Failed to fetch CVs", err);
          // Optionally show an error message
        });
    }
  }, [userId]);

  // Handle deleting a CV
  const handleDelete = async (cvId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cvs/${cvId}`);
      setSavedCvs((prev) => prev.filter((cv) => cv._id !== cvId));
    } catch (err) {
      console.error("Delete failed", err);
      // Optionally show an error message
    }
  };

  // Handle editing a CV
  const handleEdit = (cv) => {
    localStorage.setItem("editCv", JSON.stringify(cv));
    navigate("/cvs/create");
  };

  // Handle previewing a CV
  const handlePreview = (cv) => {
    localStorage.setItem("previewCv", JSON.stringify(cv));
    setPreviewCv(cv); // show inline preview instead of redirect
  };

  // Handle creating a new CV
  const handleCreateNew = () => {
    localStorage.removeItem("editCv"); // clear any previous edit
    navigate("/cvs/create");
  };

  // Check if no CVs exist and display an appropriate message
  const noCvsMessage = (
    <div className="text-center text-muted">
      <p>No CVs saved yet. Create one to get started!</p>
      <button className="btn btn-success" onClick={handleCreateNew}>
        + Create New CV
      </button>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Saved CVs</h2>
        <button className="btn btn-success" onClick={handleCreateNew}>
          + Create New CV
        </button>
      </div>

      {/* If savedCvs is empty, display a message */}
      {savedCvs.length > 0 ? (
        <div className="list-group mb-5">
          {savedCvs.map((cv) => (
            <div
              key={cv._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{cv.fullName || "Unnamed CV"}</strong>
                <br />
                <small>{cv.email || "No email provided"}</small>
                <br />
                <small className="text-muted">
                  Template: {cv.selectedTemplate || "Default"}
                </small>
              </div>
              <div>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => handlePreview(cv)}
                >
                  Preview
                </button>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(cv)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cv._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        noCvsMessage
      )}

      {/* Preview CV Section */}
      {previewCv && (
        <div className="card p-4 border shadow-sm">
          <h4 className="mb-3">CV Preview</h4>
          <p>
            <strong>Name:</strong> {previewCv.fullName}
          </p>
          <p>
            <strong>Email:</strong> {previewCv.email}
          </p>
          <p>
            <strong>Phone:</strong> {previewCv.phone}
          </p>
          <p>
            <strong>Address:</strong> {previewCv.address}
          </p>
          <p>
            <strong>Education:</strong> {previewCv.education}
          </p>
          <p>
            <strong>Skills:</strong> {previewCv.skills?.join(", ")}
          </p>
          {/* Add more fields as needed */}
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setPreviewCv(null)}
          >
            Close Preview
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
