import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Image, Modal } from "react-bootstrap";
import { FaFileAlt, FaPalette, FaSave, FaDownload } from "react-icons/fa";

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [savedCVs, setSavedCVs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCV, setSelectedCV] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Features
    setFeatures([
      { icon: <FaFileAlt />, title: "Multiple Templates", text: "Pick from modern CV templates." },
      { icon: <FaPalette />, title: "Customizable Colors", text: "Match your style with theme colors." },
      { icon: <FaSave />, title: "Save & Edit Anytime", text: "Keep your CVs in one place." },
      { icon: <FaDownload />, title: "Download in PDF", text: "Get a professional CV instantly." }
    ]);

    // Load saved CVs from localStorage
    const storedCVs = localStorage.getItem("userCvs");
    if (storedCVs) {
      const parsed = JSON.parse(storedCVs);
      const latestFirst = parsed.slice().reverse().slice(0, 5); // Show last 5 saved
      setSavedCVs(latestFirst);
    }

    setLoading(false);
  }, []);

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      alert("Please log in first!");
    } else {
      window.location.href = "/create-cv";
    }
  };

  const handleViewCV = (cv) => {
    setSelectedCV(cv);
    setShowModal(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">Create a Stunning CV in Minutes!</h1>
          <p className="lead">Choose from multiple templates, customize with your details, and download instantly.</p>
          <Button variant="light" size="lg" className="fw-bold mt-3" onClick={handleGetStarted}>
            Get Started
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">Why Choose Our CV Builder?</h2>
          <Row className="g-4">
            {features.map((feature, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card className="text-center shadow-sm border-0 p-3">
                  <Card.Body>
                    <div className="fs-2 text-primary">{feature.icon}</div>
                    <Card.Title className="fw-bold mt-2">{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Saved CVs Section */}
      <section className="saved-cvs py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Your Saved CVs</h2>
          <Row className="d-flex justify-content-center">
            {loading ? (
              <p className="text-center">Loading saved CVs...</p>
            ) : savedCVs.length > 0 ? (
              savedCVs.map((cv, idx) => (
                <Col md={4} sm={6} key={idx} className="mb-4">
                  <Card className="shadow-sm border-0 text-center">
                    <Card.Body>
                      <Image
                        src={cv.image || "https://via.placeholder.com/120"}
                        roundedCircle
                        width="120"
                        height="120"
                        className="mb-3"
                      />
                      <h5>{cv.name || "Unnamed CV"}</h5>
                      <p>{cv.email || "No Email"}</p>
                      <Button className="btn btn-outline-primary btn-sm" onClick={() => handleViewCV(cv)}>
                        View CV
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-center text-muted">No saved CVs found.</p>
            )}
          </Row>
        </Container>
      </section>

      {/* CV Preview Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>CV Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCV ? (
            <div className="text-center">
              <Image
                src={selectedCV.image || "https://via.placeholder.com/150"}
                roundedCircle
                width="150"
                height="150"
                className="mb-3"
              />
              <h4>{selectedCV.name}</h4>
              <p><strong>Email:</strong> {selectedCV.email}</p>
              <p><strong>Phone:</strong> {selectedCV.phone}</p>
              <p><strong>Address:</strong> {selectedCV.address}</p>
              <p><strong>Profession:</strong> {selectedCV.profession}</p>
              <p><strong>Summary:</strong> {selectedCV.summary}</p>
            </div>
          ) : (
            <p className="text-center">No CV selected.</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
