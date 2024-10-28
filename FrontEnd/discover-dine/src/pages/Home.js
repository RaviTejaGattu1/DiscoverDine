import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Ensure you have your CSS for styling
import logo from './Logo.webp'; // Import the logo image

const Home = () => {

  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/login'); // Navigate to the login page 
  }

  return (
    <div className="home">
      <div className="welcome-section">
        <img src={logo} alt="DiscoverDine Logo" className="logo" />
        <h1>Welcome to DiscoverDine.</h1>
        <h2>Find. View. Review.</h2>
      </div>
      <div className="user-type-section">
        <p>I am</p>
        <div className="button-container">
          <button className="user-button" onClick={handleUserClick}>User</button>
          <button className="user-button" onClick={handleUserClick}>Business Owner</button>
          <button className="user-button" onClick={handleUserClick}>Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
