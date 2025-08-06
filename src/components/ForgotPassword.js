import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // You can add logic to send reset link here
  };

  const handleRedirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-wrapper">
      <div className="forgot-password-container">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-description">
          Enter the email address registered with your account. We'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="forgot-form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ChachuCanada@gmail.com"
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <p className="login-redirect">
          Remembered your password?{' '}
          <span className="login-link" onClick={handleRedirectToLogin}>
            Login to your account
          </span>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
