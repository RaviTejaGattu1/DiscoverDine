import React, { useState } from 'react';
import './Login.css'; // Make sure to add your CSS for styling

const Login = () => {
  const [userType, setUserType] = useState("User"); // Default user type
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Here you can implement your authentication logic
    console.log("User Type:", userType);
    console.log("Username:", username);
    console.log("Password:", password);
    
    // Example of redirection based on user type (you can modify this logic)
    if (userType === "User") {
      // Redirect to User dashboard
      console.log("Redirecting to User dashboard...");
    } else if (userType === "Business Owner") {
      // Redirect to Business Owner dashboard
      console.log("Redirecting to Business Owner dashboard...");
    } else if (userType === "Admin") {
      // Redirect to Admin dashboard
      console.log("Redirecting to Admin dashboard...");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="User">User</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Admin">Admin</option>
          </select>
        </label>
        <br />
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
