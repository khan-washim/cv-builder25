import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/cvs/create');
    } else {
      setAlertMessage('Please register or login first.');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000); // Hide message after 3 seconds
    }
  };

  return (
    <div className="container py-5">
      {alertMessage && (
        <div className="alert alert-warning text-center" role="alert">
          {alertMessage}
        </div>
      )}

      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold text-primary">Welcome to CV Builder</h1>
          <p className="lead text-secondary mt-3">
            Create a professional and modern resume effortlessly with our powerful CV builder.
          </p>
          <button className="btn btn-primary btn-lg mt-4" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/167/167707.png"
            alt="CV Builder"
            className="img-fluid"
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
