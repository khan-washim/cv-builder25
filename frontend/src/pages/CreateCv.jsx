import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CvTemplates from "../components/CvTemplates";
import CVForm from "../components/CVForm";  // Import the CVForm component

const CreateCv = () => {
  const navigate = useNavigate();
  const [cvData, setCvData] = useState({
    name: "", email: "", phone: "", address: "", dob: "", linkedin: "", github: "",
    education: "", experience: "", skills: "", languages: "", hobbies: "",
    summary: "", projects: "", references: "", nationality: "", maritalStatus: "",
    image: null, template: "1", color: "#ffffff"
  });

  const [savedCvs, setSavedCvs] = useState([]);

  useEffect(() => {
    const storedCvs = JSON.parse(localStorage.getItem("userCvs")) || [];
    setSavedCvs(storedCvs);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({ ...cvData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCvData({ ...cvData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCvs = [...savedCvs, cvData];
    setSavedCvs(updatedCvs);
    localStorage.setItem("userCvs", JSON.stringify(updatedCvs));

    setCvData({
      name: "", email: "", phone: "", address: "", dob: "", linkedin: "", github: "",
      education: "", experience: "", skills: "", languages: "", hobbies: "",
      summary: "", projects: "", references: "", nationality: "", maritalStatus: "",
      image: null, template: "1", color: "#ffffff"
    });

    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4 bg-light">
        <h2 className="text-center bg-primary text-white rounded-3 p-3">Create Your CV</h2>
        
        {/* Use the CVForm component */}
        <CVForm 
          cvData={cvData}
          handleChange={handleChange}
          handleImageUpload={handleImageUpload}
          handleSubmit={handleSubmit}
        />

      </div>
      <h3 className="text-center mt-4 bg-success text-white p-3 rounded-3">Preview Selected Template</h3>
      <div className="border p-3 mt-2 shadow-sm rounded-3 bg-white">
        <CvTemplates data={cvData} />
      </div>
    </div>
  );
};

export default CreateCv;
