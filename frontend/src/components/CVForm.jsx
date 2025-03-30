const CVForm = ({ cvData, handleChange, handleImageUpload, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="row g-4 mt-3">
      <h4 className="text-center text-primary">Personal Information</h4>
      {["name", "email", "phone", "address", "dob", "linkedin", "github", "nationality", "maritalStatus"].map((field) => (
        <div className="col-md-6" key={field}>
          <label className="form-label fw-semibold">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input 
            type={field === "dob" ? "date" : "text"} 
            name={field} 
            className="form-control rounded-3" 
            value={cvData[field]} 
            onChange={handleChange} 
            required 
          />
        </div>
      ))}

      <h4 className="text-center text-primary">Professional Information</h4>
      {["education", "experience", "skills", "languages", "hobbies", "summary", "projects", "references"].map((field) => (
        <div className="col-md-6" key={field}>
          <label className="form-label fw-semibold">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <textarea 
            name={field} 
            className="form-control rounded-3" 
            value={cvData[field]} 
            onChange={handleChange} 
            required 
          />
        </div>
      ))}

      <div className="col-md-6">
        <label className="form-label fw-semibold">Profile Image</label>
        <input type="file" className="form-control" onChange={handleImageUpload} />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold">Select Template</label>
        <select name="template" className="form-select" value={cvData.template} onChange={handleChange}>
          <option value="1">Template 1</option>
          <option value="2">Template 2</option>
          <option value="3">Template 3</option>
          <option value="4">Template 4</option>
          <option value="5">Template 5</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold">Choose Color</label>
        <input type="color" name="color" className="form-control form-control-color" value={cvData.color} onChange={handleChange} />
      </div>

      <div className="col-md-12 text-center">
        <button type="submit" className="btn btn-danger fw-bold px-4 py-2 rounded-pill shadow-lg">
          <i className="bi bi-file-earmark-check-fill"></i> Save CV
        </button>
      </div>
    </form>
  );
};

export default CVForm;
