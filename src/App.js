import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About ';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn'; // Corrected import path and name
import NavBar from './NavBar'; // Ensure correct path
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} /> {/* Corrected component name */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;










