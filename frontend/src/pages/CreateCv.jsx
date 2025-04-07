import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';

const templates = ["Template 1", "Template 2", "Template 3", "Template 4", "Template 5"];

const CVPreview = React.forwardRef(({ data, selectedTemplate }, ref) => (
  <div ref={ref} className={`p-4 border rounded my-3 ${selectedTemplate.toLowerCase().replace(' ', '-')}`}>
    {data.profileImage && (
      <img
        src={URL.createObjectURL(data.profileImage)}
        alt="Profile"
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        className="rounded-circle mb-3"
      />
    )}
    <h2>{data.fullName}</h2>
    <p>{data.email} | {data.phone} | {data.address}</p>
    <p>LinkedIn: {data.linkedin}</p>
    <p>GitHub: {data.github}</p>
    <h4>About</h4>
    <p>{data.about}</p>
    <h4>Experience</h4>
    <p>{data.experience}</p>
    <h4>Education</h4>
    <p>{data.education}</p>
    <h4>Skills</h4>
    <p>{data.skills}</p>
    <h4>Expertise</h4>
    <p>{data.expertise}</p>
    <h4>Languages</h4>
    <p>{data.languages}</p>
  </div>
));

const CreateCV = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', address: '', linkedin: '', github: '', about: '', experience: '', education: '', skills: '', expertise: '', languages: '', profileImage: null,
  });
  const [selectedTemplate, setSelectedTemplate] = useState("Template 1");
  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  const handlePDF = () => {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(componentRef.current, {
      callback: function (doc) {
        doc.save(`${formData.fullName || 'cv'}.pdf`);
      },
      x: 10,
      y: 10
    });
  };

  const handleSave = () => {
    const savedCVs = JSON.parse(localStorage.getItem('savedCVs')) || [];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newCV = {
        ...formData,
        profileImage: formData.profileImage ? reader.result : null,
        selectedTemplate,
        savedAt: new Date().toISOString(),
      };
      savedCVs.push(newCV);
      localStorage.setItem('savedCVs', JSON.stringify(savedCVs));
      alert('CV saved successfully!');
    };

    if (formData.profileImage) {
      reader.readAsDataURL(formData.profileImage);
    } else {
      const newCV = {
        ...formData,
        profileImage: null,
        selectedTemplate,
        savedAt: new Date().toISOString(),
      };
      savedCVs.push(newCV);
      localStorage.setItem('savedCVs', JSON.stringify(savedCVs));
      alert('CV saved successfully!');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Create CV</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Profile Image</label>
              <input type="file" className="form-control" name="profileImage" accept="image/*" onChange={handleChange} />
            </div>
            {["fullName", "email", "phone", "address", "linkedin", "github", "skills", "expertise", "languages"].map((field, idx) => (
              <div className="mb-3" key={idx}>
                <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field.includes("email") ? "email" : field.includes("linkedin") || field.includes("github") ? "url" : "text"}
                  className="form-control"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
            {["about", "experience", "education"].map((field, idx) => (
              <div className="mb-3" key={idx}>
                <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <textarea
                  className="form-control"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
            ))}
            <div className="mb-3">
              <label className="form-label">Choose Template</label>
              <select className="form-select" value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
                {templates.map((tpl, index) => (
                  <option key={index} value={tpl}>{tpl}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <CVPreview data={formData} selectedTemplate={selectedTemplate} ref={componentRef} />
          <button className="btn btn-primary me-2" onClick={handlePrint}>Print CV</button>
          <button className="btn btn-success me-2" onClick={handlePDF}>Download PDF</button>
          <button className="btn btn-warning" onClick={handleSave}>Save CV</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCV;
