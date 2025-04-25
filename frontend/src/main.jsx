import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Icons (if you're using them)
import 'bootstrap-icons/font/bootstrap-icons.css';
// Bootstrap JS (only necessary if you need Bootstrap JS functionality like dropdowns or modals)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js which is required for Bootstrap's JS components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
