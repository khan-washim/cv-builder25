import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const CvTemplates = ({ data }) => {
  const {
    name, email, phone, address, dob, linkedin, github, education, experience, 
    skills, languages, hobbies, summary, projects, references, nationality, maritalStatus, image, template, color
  } = data;

  const renderTemplate = () => {
    switch (template) {
      case "1":
        return (
          <Card className="p-4" style={{ backgroundColor: color }}>
            <Row>
              <Col md={4} className="text-center">
                {image && <Image src={image} roundedCircle width="120" height="120" />}
                <h3 className="mt-3">{name}</h3>
                <p className="text-muted">{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
                <p><strong>Date of Birth:</strong> {dob}</p>
                <p><strong>Nationality:</strong> {nationality}</p>
                <p><strong>Marital Status:</strong> {maritalStatus}</p>
              </Col>
              <Col md={8}>
                <h4 className="fw-bold">Summary</h4>
                <p>{summary}</p>
                <h4 className="fw-bold">Education</h4>
                <p>{education}</p>
                <h4 className="fw-bold">Experience</h4>
                <p>{experience}</p>
                <h4 className="fw-bold">Skills</h4>
                <p>{skills}</p>
                <h4 className="fw-bold">Languages</h4>
                <p>{languages}</p>
                <h4 className="fw-bold">Hobbies</h4>
                <p>{hobbies}</p>
                <h4 className="fw-bold">References</h4>
                <p>{references}</p>
                <h4 className="fw-bold">Projects</h4>
                <p>{projects}</p>
                <h4 className="fw-bold">LinkedIn</h4>
                <p>{linkedin}</p>
                <h4 className="fw-bold">GitHub</h4>
                <p>{github}</p>
              </Col>
            </Row>
          </Card>
        );

      case "2":
        return (
          <Card className="p-4 shadow-lg" style={{ backgroundColor: color }}>
            <Row>
              <Col md={3} className="bg-dark text-white p-3">
                {image && <Image src={image} roundedCircle width="100" className="mb-3" />}
                <h5 className="fw-bold">{name}</h5>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{linkedin}</p>
                <p>{github}</p>
              </Col>
              <Col md={9} className="p-3">
                <h4 className="fw-bold">Summary</h4>
                <p>{summary}</p>
                <h4 className="fw-bold">Education</h4>
                <p>{education}</p>
                <h4 className="fw-bold">Experience</h4>
                <p>{experience}</p>
                <h4 className="fw-bold">Skills</h4>
                <p>{skills}</p>
                <h4 className="fw-bold">Languages</h4>
                <p>{languages}</p>
                <h4 className="fw-bold">Hobbies</h4>
                <p>{hobbies}</p>
                <h4 className="fw-bold">References</h4>
                <p>{references}</p>
                <h4 className="fw-bold">Projects</h4>
                <p>{projects}</p>
                <h4 className="fw-bold">Nationality</h4>
                <p>{nationality}</p>
                <h4 className="fw-bold">Marital Status</h4>
                <p>{maritalStatus}</p>
              </Col>
            </Row>
          </Card>
        );

      case "3":
        return (
          <Card className="p-4 border-primary" style={{ backgroundColor: color }}>
            <h2 className="text-center fw-bold">{name}</h2>
            <h5 className="text-center text-muted">{email} | {phone}</h5>
            <h4 className="fw-bold mt-4">Summary</h4>
            <p>{summary}</p>
            <h4 className="fw-bold">Education</h4>
            <p>{education}</p>
            <h4 className="fw-bold">Experience</h4>
            <p>{experience}</p>
            <h4 className="fw-bold">Skills</h4>
            <p>{skills}</p>
            <h4 className="fw-bold">Languages</h4>
            <p>{languages}</p>
            <h4 className="fw-bold">Hobbies</h4>
            <p>{hobbies}</p>
            <h4 className="fw-bold">Projects</h4>
            <p>{projects}</p>
            <h4 className="fw-bold">References</h4>
            <p>{references}</p>
            <h4 className="fw-bold">LinkedIn</h4>
            <p>{linkedin}</p>
            <h4 className="fw-bold">GitHub</h4>
            <p>{github}</p>
            <h4 className="fw-bold">Nationality</h4>
            <p>{nationality}</p>
            <h4 className="fw-bold">Marital Status</h4>
            <p>{maritalStatus}</p>
          </Card>
        );

      case "4":
        return (
          <Card className="p-4 border-info shadow-sm" style={{ backgroundColor: color }}>
            <Row>
              <Col md={3} className="bg-info text-white p-3 text-center">
                {image && <Image src={image} roundedCircle width="100" />}
                <h5 className="mt-2">{name}</h5>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{linkedin}</p>
                <p>{github}</p>
              </Col>
              <Col md={9} className="p-3">
                <h4 className="fw-bold">Summary</h4>
                <p>{summary}</p>
                <h4 className="fw-bold">Education</h4>
                <p>{education}</p>
                <h4 className="fw-bold">Experience</h4>
                <p>{experience}</p>
                <h4 className="fw-bold">Skills</h4>
                <p>{skills}</p>
                <h4 className="fw-bold">Languages</h4>
                <p>{languages}</p>
                <h4 className="fw-bold">Hobbies</h4>
                <p>{hobbies}</p>
                <h4 className="fw-bold">Projects</h4>
                <p>{projects}</p>
                <h4 className="fw-bold">References</h4>
                <p>{references}</p>
                <h4 className="fw-bold">Nationality</h4>
                <p>{nationality}</p>
                <h4 className="fw-bold">Marital Status</h4>
                <p>{maritalStatus}</p>
              </Col>
            </Row>
          </Card>
        );

      case "5":
        return (
          <Card className="p-4 border-danger shadow-lg" style={{ backgroundColor: color }}>
            <h2 className="fw-bold text-danger">{name}</h2>
            <h5 className="text-muted">{email} | {phone}</h5>
            <Row className="mt-4">
              <Col md={6}>
                <h4 className="fw-bold">Experience</h4>
                <p>{experience}</p>
                <h4 className="fw-bold">Skills</h4>
                <p>{skills}</p>
                <h4 className="fw-bold">Projects</h4>
                <p>{projects}</p>
              </Col>
              <Col md={6}>
                <h4 className="fw-bold">Education</h4>
                <p>{education}</p>
                <h4 className="fw-bold">Languages</h4>
                <p>{languages}</p>
                <h4 className="fw-bold">Hobbies</h4>
                <p>{hobbies}</p>
                <h4 className="fw-bold">References</h4>
                <p>{references}</p>
              </Col>
            </Row>
          </Card>
        );

      default:
        return <p className="text-center">No Template Selected</p>;
    }
  };

  return <Container className="mt-4">{renderTemplate()}</Container>;
};

export default CvTemplates;
