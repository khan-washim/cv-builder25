// src/pages/CVForm.jsx
import { useState } from 'react';
import axios from 'axios';

const CVForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    profession: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    education: [{
      institution: '',
      degree: '',
      field: '',
      startYear: '',
      endYear: ''
    }],
    experience: [{
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    skills: [],
    languages: [],
    linkedin: '',
    github: '',
    website: '',
    hobbies: '',
    certifications: [],
    achievements: [],
    profileImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'skills' || name === 'languages' || name === 'certifications' || name === 'achievements') {
      setFormData({ ...formData, [name]: value.split(',') });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNestedChange = (e, index, section) => {
    const { name, value } = e.target;
    const updatedArray = [...formData[section]];
    updatedArray[index][name] = value;
    setFormData({ ...formData, [section]: updatedArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/cvs', formData);
      alert('CV Created Successfully');
    } catch (err) {
      console.error(err);
      alert('Error creating CV');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: 'auto' }}>
      <h2>Create Your CV</h2>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="profession" placeholder="Profession" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <textarea name="summary" placeholder="Summary" onChange={handleChange} />

      <h3>Education</h3>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <input name="institution" placeholder="Institution" onChange={e => handleNestedChange(e, index, 'education')} />
          <input name="degree" placeholder="Degree" onChange={e => handleNestedChange(e, index, 'education')} />
          <input name="field" placeholder="Field" onChange={e => handleNestedChange(e, index, 'education')} />
          <input name="startYear" placeholder="Start Year" onChange={e => handleNestedChange(e, index, 'education')} />
          <input name="endYear" placeholder="End Year" onChange={e => handleNestedChange(e, index, 'education')} />
        </div>
      ))}

      <h3>Experience</h3>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <input name="company" placeholder="Company" onChange={e => handleNestedChange(e, index, 'experience')} />
          <input name="position" placeholder="Position" onChange={e => handleNestedChange(e, index, 'experience')} />
          <input name="startDate" placeholder="Start Date" onChange={e => handleNestedChange(e, index, 'experience')} />
          <input name="endDate" placeholder="End Date" onChange={e => handleNestedChange(e, index, 'experience')} />
          <textarea name="description" placeholder="Description" onChange={e => handleNestedChange(e, index, 'experience')} />
        </div>
      ))}

      <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
      <input name="languages" placeholder="Languages (comma separated)" onChange={handleChange} />
      <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
      <input name="github" placeholder="GitHub URL" onChange={handleChange} />
      <input name="website" placeholder="Personal Website" onChange={handleChange} />
      <input name="hobbies" placeholder="Hobbies" onChange={handleChange} />
      <input name="certifications" placeholder="Certifications (comma separated)" onChange={handleChange} />
      <input name="achievements" placeholder="Achievements (comma separated)" onChange={handleChange} />
      <input name="profileImage" placeholder="Profile Image URL" onChange={handleChange} />

      <button type="submit">Submit CV</button>
    </form>
  );
};

export default CVForm;
