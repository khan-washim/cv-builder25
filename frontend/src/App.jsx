// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import Footer
import Home from './pages/Home';
import CreateCV from './pages/CreateCv';
import CVList from './pages/CVList';
import CVDetail from './pages/CVDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import PreviewCv from './pages/PreviewCv';
import UserDashboard from './pages/UserDashboard';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/cvs/create" element={<CreateCV />} />
          <Route path="/cvs" element={<CVList />} />
          <Route path="/cvs/:id" element={<CVDetail />} />
          <Route path="/preview" element={<PreviewCv />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer /> {/* ✅ Footer added here */}
    </div>
  </Router>
);

export default App;
