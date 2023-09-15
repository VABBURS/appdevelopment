import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
  };

  const goToRegister = () => {
    navigate('/register'); 
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account?{' '}
        <span className="register-here" onClick={goToRegister}>
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;