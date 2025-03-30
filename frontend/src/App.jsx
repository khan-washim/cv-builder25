
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateCv from "./pages/CreateCv";
import Dashboard from "./pages/Dashboard";
import CvPreview from "./pages/CvPreview";
import { js } from '@eslint/js';
 
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-cv" element={<CreateCv />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cv-preview/:id" element={<CvPreview />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
