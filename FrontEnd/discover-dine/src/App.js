import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // Import the Login page
import Navbar from './components/Navbar';


function App() {
  return (
    // <h1> React Application</h1>
    <Router>
      <div>
        <Navbar />  {/* Optional: Navigation component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> {/* Login route */}
          </Routes>
        </div>
      </Router>
    );
  }

export default App;