import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("authToken");

    if (!email || !password) {
      setMessage({ text: "Please fill in all fields!", type: "danger" });
      return;
    }

    if (email === storedEmail) {
      setMessage({ text: "Login successful! Redirecting to dashboard...", type: "success" });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setMessage({ text: "Invalid credentials!", type: "danger" });
    }
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <div className="card shadow-lg p-4 border-0 rounded" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4 fw-bold">🔐 Login</h3>

        {message && (
          <div className={`alert alert-${message.type} text-center`} role="alert">
            {message.text}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100 fw-bold" onClick={handleLogin}>
          Login
        </button>
      </div>

      {/* Footer Component */}
      
    </div>
  );
};

export default Login;
