import React from "react";

const CvTemplates = ({ data }) => {
  const {
    name,
    email,
    phone,
    address,
    dob,
    linkedin,
    github,
    nationality,
    maritalStatus,
    education,
    experience,
    skills,
    languages,
    hobbies,
    summary,
    projects,
    references,
    image,
    color,
  } = data;

  return (
    <div style={{ color: "#000", fontFamily: "Arial, sans-serif" }}>
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{ borderBottom: `4px solid ${color}`, paddingBottom: "10px" }}
      >
        <div>
          <h2 className="fw-bold mb-1" style={{ color }}>{name}</h2>
          <p className="mb-0">{email} | {phone}</p>
          <p className="mb-0">{address}</p>
        </div>
        {image && (
          <img
            src={image}
            alt="Profile"
            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }}
          />
        )}
      </div>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Profile Summary</h5>
        <p>{summary}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Education</h5>
        <p>{education}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Experience</h5>
        <p>{experience}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Projects</h5>
        <p>{projects}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Skills</h5>
        <p>{skills}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Languages</h5>
        <p>{languages}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Hobbies</h5>
        <p>{hobbies}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>References</h5>
        <p>{references}</p>
      </section>

      <section className="mb-3">
        <h5 className="fw-bold" style={{ color }}>Additional Information</h5>
        <p><strong>Date of Birth:</strong> {dob}</p>
        <p><strong>Nationality:</strong> {nationality}</p>
        <p><strong>Marital Status:</strong> {maritalStatus}</p>
        <p><strong>LinkedIn:</strong> {linkedin}</p>
        <p><strong>GitHub:</strong> {github}</p>
      </section>
    </div>
  );
};

export default CvTemplates;
