import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Optional icons

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const isActive = (path) =>
    location.pathname === path
      ? 'nav-link active text-white font-weight-bold'
      : 'nav-link text-white';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand font-weight-bold" to="/">
          <i className="bi bi-journal-text mr-1"></i> CV Builder
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={isActive('/')} to="/">
                <i className="bi bi-house mr-1"></i> Home
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className={isActive('/register')} to="/register">
                    <i className="bi bi-person-plus mr-1"></i> Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={isActive('/login')} to="/login">
                    <i className="bi bi-box-arrow-in-right mr-1"></i> Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className={isActive('/dashboard')} to="/dashboard">
                    <i className="bi bi-speedometer2 mr-1"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-sm btn-outline-light ml-2"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right mr-1"></i> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
