import React, { useEffect, useState } from 'react';

const PreviewCv = () => {
  const [cvData, setCvData] = useState({
    fullName: '',
    profession: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    education: [],
    experience: [],
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

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cvData'));
    if (storedData) setCvData(storedData);
  }, []);

  return (
    <div className="container mt-5 p-4 border rounded shadow bg-light">
      <div className="text-center mb-4">
        {cvData.profileImage && (
          <img
            src={cvData.profileImage}
            alt="Profile"
            className="rounded-circle"
            style={{ width: 120, height: 120, objectFit: 'cover' }}
          />
        )}
        <h2 className="mt-3">{cvData.fullName}</h2>
        <p className="text-muted">{cvData.profession}</p>
      </div>

      <div className="mb-4">
        <h4>Contact Info</h4>
        <p><strong>Email:</strong> {cvData.email}</p>
        <p><strong>Phone:</strong> {cvData.phone}</p>
        <p><strong>Address:</strong> {cvData.address}</p>
        <p>
          {cvData.linkedin && <a href={cvData.linkedin}>LinkedIn</a>} {' '}
          {cvData.github && <a href={cvData.github} className="ms-3">GitHub</a>} {' '}
          {cvData.website && <a href={cvData.website} className="ms-3">Website</a>}
        </p>
      </div>

      <div className="mb-4">
        <h4>Professional Summary</h4>
        <p>{cvData.summary}</p>
      </div>

      <div className="mb-4">
        <h4>Education</h4>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h5>{edu.degree} in {edu.field}</h5>
            <p>{edu.institution} ({edu.startYear} - {edu.endYear})</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4>Experience</h4>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="mb-2">
            <h5>{exp.position} at {exp.company}</h5>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4>Skills</h4>
        <ul className="list-inline">
          {cvData.skills.map((skill, i) => (
            <li key={i} className="list-inline-item badge bg-primary me-2 mb-2">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4>Languages</h4>
        <ul className="list-inline">
          {cvData.languages.map((lang, i) => (
            <li key={i} className="list-inline-item badge bg-secondary me-2 mb-2">{lang}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4>Certifications</h4>
        <ul>
          {cvData.certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4>Achievements</h4>
        <ul>
          {cvData.achievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4>Hobbies</h4>
        <p>{cvData.hobbies}</p>
      </div>
    </div>
  );
};

export default PreviewCv;
