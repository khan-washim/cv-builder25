import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userLoggedIn");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">CV Builder</Link>

        {/* Toggle Button for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>

            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-warning fw-semibold" to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-danger ms-2 fw-semibold" 
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link 
                  className="btn btn-success ms-2 fw-semibold" 
                  to="/login" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
