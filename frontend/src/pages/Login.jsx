import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("userLoggedIn", "true");
      navigate("/create-cv");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4 fw-bold">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input 
              type="email" 
              className="form-control rounded-3" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input 
              type="password" 
              className="form-control rounded-3" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-3 fw-semibold shadow-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
