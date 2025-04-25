import React, { useRef, useState } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CreateCV = () => {
  const [cvData, setCvData] = useState({
    fullName: "",
    profession: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: [{ institution: "", degree: "", field: "", startYear: "", endYear: "" }],
    experience: [{ company: "", position: "", startDate: "", endDate: "", description: "" }],
    skills: [],
    languages: [],
    linkedin: "",
    github: "",
    website: "",
    hobbies: "",
    certifications: [],
    achievements: [],
    profileImage: "",
    nationality: "",
    dob: "",
    maritalStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({ ...cvData, [name]: value });
  };

  const handleArrayChange = (index, field, value, type) => {
    const updated = [...cvData[type]];
    updated[index][field] = value;
    setCvData({ ...cvData, [type]: updated });
  };

  const handleAddItem = (type, itemTemplate) => {
    setCvData({ ...cvData, [type]: [...cvData[type], itemTemplate] });
  };

  const handleListInputChange = (type, value) => {
    setCvData({ ...cvData, [type]: value.split(",").map((item) => item.trim()) });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCvData({ ...cvData, profileImage: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/cvs/create", cvData);
      alert("CV created successfully!");
    } catch (err) {
      console.error(err);
      alert("Error creating CV.");
    }
  };

  // PDF & Print
  const cvRef = useRef();
  const handlePrint = useReactToPrint({ content: () => cvRef.current });

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(cvRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };

  return (
    <div className="container py-4">
      <div className="row">
        {/* Left Side - CV Form */}
        <form onSubmit={handleSubmit} className="col-md-6">
          <h3>Create Your CV</h3>
          <input className="form-control mb-2" name="fullName" placeholder="Full Name" value={cvData.fullName} onChange={handleChange} required />
          <input className="form-control mb-2" name="profession" placeholder="Profession" value={cvData.profession} onChange={handleChange} required />
          <input className="form-control mb-2" name="email" type="email" placeholder="Email" value={cvData.email} onChange={handleChange} required />
          <input className="form-control mb-2" name="phone" placeholder="Phone" value={cvData.phone} onChange={handleChange} required />
          <input className="form-control mb-2" name="address" placeholder="Address" value={cvData.address} onChange={handleChange} />
          <textarea className="form-control mb-2" name="summary" placeholder="Summary" value={cvData.summary} onChange={handleChange} />

          {/* Education Section */}
          <h5>Education</h5>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <input className="form-control mb-1" placeholder="Institution" value={edu.institution} onChange={(e) => handleArrayChange(index, "institution", e.target.value, "education")} />
              <input className="form-control mb-1" placeholder="Degree" value={edu.degree} onChange={(e) => handleArrayChange(index, "degree", e.target.value, "education")} />
              <input className="form-control mb-1" placeholder="Field" value={edu.field} onChange={(e) => handleArrayChange(index, "field", e.target.value, "education")} />
              <input className="form-control mb-1" placeholder="Start Year" value={edu.startYear} onChange={(e) => handleArrayChange(index, "startYear", e.target.value, "education")} />
              <input className="form-control mb-1" placeholder="End Year" value={edu.endYear} onChange={(e) => handleArrayChange(index, "endYear", e.target.value, "education")} />
            </div>
          ))}
          <button type="button" className="btn btn-outline-primary mb-3" onClick={() => handleAddItem("education", { institution: "", degree: "", field: "", startYear: "", endYear: "" })}>+ Add Education</button>

          {/* Experience */}
          <h5>Experience</h5>
          {cvData.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <input className="form-control mb-1" placeholder="Company" value={exp.company} onChange={(e) => handleArrayChange(index, "company", e.target.value, "experience")} />
              <input className="form-control mb-1" placeholder="Position" value={exp.position} onChange={(e) => handleArrayChange(index, "position", e.target.value, "experience")} />
              <input className="form-control mb-1" placeholder="Start Date" value={exp.startDate} onChange={(e) => handleArrayChange(index, "startDate", e.target.value, "experience")} />
              <input className="form-control mb-1" placeholder="End Date" value={exp.endDate} onChange={(e) => handleArrayChange(index, "endDate", e.target.value, "experience")} />
              <textarea className="form-control mb-1" placeholder="Description" value={exp.description} onChange={(e) => handleArrayChange(index, "description", e.target.value, "experience")} />
            </div>
          ))}
          <button type="button" className="btn btn-outline-primary mb-3" onClick={() => handleAddItem("experience", { company: "", position: "", startDate: "", endDate: "", description: "" })}>+ Add Experience</button>

          <input className="form-control mb-2" placeholder="Skills (comma separated)" value={cvData.skills.join(", ")} onChange={(e) => handleListInputChange("skills", e.target.value)} />
          <input className="form-control mb-2" placeholder="Languages (comma separated)" value={cvData.languages.join(", ")} onChange={(e) => handleListInputChange("languages", e.target.value)} />
          <input className="form-control mb-2" placeholder="Certifications (comma separated)" value={cvData.certifications.join(", ")} onChange={(e) => handleListInputChange("certifications", e.target.value)} />
          <input className="form-control mb-2" placeholder="Achievements (comma separated)" value={cvData.achievements.join(", ")} onChange={(e) => handleListInputChange("achievements", e.target.value)} />

          <input className="form-control mb-2" placeholder="LinkedIn URL" name="linkedin" value={cvData.linkedin} onChange={handleChange} />
          <input className="form-control mb-2" placeholder="GitHub URL" name="github" value={cvData.github} onChange={handleChange} />
          <input className="form-control mb-2" placeholder="Website URL" name="website" value={cvData.website} onChange={handleChange} />
          <input className="form-control mb-2" placeholder="Hobbies" name="hobbies" value={cvData.hobbies} onChange={handleChange} />
          <input className="form-control mb-2" placeholder="Nationality" name="nationality" value={cvData.nationality} onChange={handleChange} />
          <input className="form-control mb-2" type="date" name="dob" value={cvData.dob} onChange={handleChange} />
          <input className="form-control mb-2" placeholder="Marital Status" name="maritalStatus" value={cvData.maritalStatus} onChange={handleChange} />
          <input className="form-control mb-2" type="file" accept="image/*" onChange={handleImageChange} />

          <button type="submit" className="btn btn-success me-2">Save CV</button>
        </form>

        {/* Right Side - Preview Section (Bootstrap 4) */}
<div
  className="col-md-8 mx-auto mt-5"
  style={{
    background: "linear-gradient(to right, #e0eafc, #cfdef3)",
    padding: "30px",
    borderRadius: "15px",
  }}
>
  <div
    ref={cvRef}
    className="card p-4 border-0"
    style={{ borderRadius: "20px", backgroundColor: "#ffffff" }}
  >
    <div className="text-center mb-4">
      {cvData.profileImage && (
        <img
          src={cvData.profileImage}
          alt="Profile"
          width={120}
          className="rounded-circle border border-primary mb-3"
          style={{ borderWidth: "2px" }}
        />
      )}
      <h2 className="font-weight-bold">{cvData.fullName}</h2>
      <p className="text-muted h5">{cvData.profession}</p>
    </div>

    <div className="mb-3">
      <p><strong>Email:</strong> {cvData.email}</p>
      <p><strong>Phone:</strong> {cvData.phone}</p>
      <p><strong>Address:</strong> {cvData.address}</p>
      <p><strong>Summary:</strong> {cvData.summary}</p>
      <p><strong>Nationality:</strong> {cvData.nationality}</p>
      <p><strong>Date of Birth:</strong> {cvData.dob}</p>
      <p><strong>Marital Status:</strong> {cvData.maritalStatus}</p>
    </div>

    <hr />

    {/* Education */}
    <div className="mb-3">
      <h5 className="font-weight-bold">Education</h5>
      {cvData.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <p><strong>{edu.institution}</strong> ({edu.startYear} - {edu.endYear})</p>
          <p>{edu.degree} in {edu.field}</p>
        </div>
      ))}
    </div>

    {/* Experience */}
    <div className="mb-3">
      <h5 className="font-weight-bold">Experience</h5>
      {cvData.experience.map((exp, index) => (
        <div key={index} className="mb-2">
          <p><strong>{exp.company}</strong> ({exp.startDate} - {exp.endDate})</p>
          <p>{exp.position}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>

    {/* Skills, Languages, Certifications, Achievements */}
    <div className="mb-3">
      <h5 className="font-weight-bold">Skills</h5>
      <p>{cvData.skills.join(", ")}</p>

      <h5 className="font-weight-bold mt-3">Languages</h5>
      <p>{cvData.languages.join(", ")}</p>

      <h5 className="font-weight-bold mt-3">Certifications</h5>
      <p>{cvData.certifications.join(", ")}</p>

      <h5 className="font-weight-bold mt-3">Achievements</h5>
      <p>{cvData.achievements.join(", ")}</p>
    </div>

    {/* Links */}
    <div className="mb-3">
      {cvData.linkedin && <p><strong>LinkedIn:</strong> <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">{cvData.linkedin}</a></p>}
      {cvData.github && <p><strong>GitHub:</strong> <a href={cvData.github} target="_blank" rel="noopener noreferrer">{cvData.github}</a></p>}
      {cvData.website && <p><strong>Website:</strong> <a href={cvData.website} target="_blank" rel="noopener noreferrer">{cvData.website}</a></p>}
    </div>

    {/* Hobbies */}
    {cvData.hobbies && (
      <div className="mb-3">
        <h5 className="font-weight-bold">Hobbies</h5>
        <p>{cvData.hobbies}</p>
      </div>
    )}

    <div className="text-center mt-4">
      <button className="btn btn-primary mr-2" onClick={handlePrint}>Print CV</button>
      <button className="btn btn-secondary" onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default CreateCV;
