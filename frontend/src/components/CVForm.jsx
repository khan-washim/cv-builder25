import React from 'react';

const CVForm = ({ cvData, handleChange, handleImageUpload, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="row g-4 mt-3">
      {/* PERSONAL INFO */}
      <h4 className="text-center text-primary">Personal Information</h4>

      {/* Text Inputs */}
      {[
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "text" },
        { name: "address", label: "Address", type: "text" },
        { name: "dob", label: "Date of Birth", type: "date" },
        { name: "linkedin", label: "LinkedIn", type: "text" },
        { name: "github", label: "GitHub", type: "text" },
        { name: "nationality", label: "Nationality", type: "text" },
        { name: "maritalStatus", label: "Marital Status", type: "text" },
      ].map(({ name, label, type }) => (
        <div className="col-md-6" key={name}>
          <label className="form-label fw-semibold">{label}</label>
          <input
            type={type}
            name={name}
            className="form-control rounded-3"
            value={cvData[name]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      {/* PROFESSIONAL INFO */}
      <h4 className="text-center text-primary">Professional Information</h4>

      {[
        { name: "education", label: "Education" },
        { name: "experience", label: "Experience" },
        { name: "skills", label: "Skills" },
        { name: "languages", label: "Languages" },
        { name: "hobbies", label: "Hobbies" },
        { name: "summary", label: "Summary" },
        { name: "projects", label: "Projects" },
        { name: "references", label: "References" },
      ].map(({ name, label }) => (
        <div className="col-md-6" key={name}>
          <label className="form-label fw-semibold">{label}</label>
          <textarea
            name={name}
            className="form-control rounded-3"
            value={cvData[name]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      {/* PROFILE IMAGE */}
      <div className="col-md-6">
        <label className="form-label fw-semibold">Profile Image</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      {/* TEMPLATE SELECTOR */}
      <div className="col-md-6">
        <label className="form-label fw-semibold">Select Template</label>
        <select
          name="template"
          className="form-select"
          value={cvData.template}
          onChange={handleChange}
          required
        >
          <option value="">Select a Template</option>
          <option value="1">Template 1 (Chronological)</option>
          <option value="2">Template 2 (Functional)</option>
          <option value="3">Template 3 (Combination)</option>
          <option value="4">Template 4 (Targeted)</option>
          <option value="5">Template 5 (Modern Blue)</option>
        </select>
      </div>

      {/* COLOR PICKER */}
      <div className="col-md-6">
        <label className="form-label fw-semibold">Choose Color</label>
        <input
          type="color"
          name="color"
          className="form-control form-control-color"
          value={cvData.color}
          onChange={handleChange}
        />
      </div>

      {/* SAVE BUTTON */}
      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-danger fw-bold px-4 py-2 rounded-pill shadow-lg"
        >
          <i className="bi bi-file-earmark-check-fill"></i> Save CV
        </button>
      </div>
    </form>
  );
};

export default CVForm;
