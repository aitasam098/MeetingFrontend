import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepSignedIn: true,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== 'correctPassword') {
      setErrorMessage('❌ Incorrect password. Please try again.');
    } else {
      setErrorMessage('');
      console.log('Login successful:', formData);
      navigate('/dashboard');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    navigate('/verify-email');
  };

  const handleRedirectToSignup = () => {
    navigate('/signup');
  };

  const handleRedirectToForgotPassword = () => {
    navigate('/forgot-password'); // ✅ Redirect to forgot password page
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Login</h2>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google logo"
            className="google-logo"
          />
          <span>Sign in with Google</span>
        </button>

        <div className="divider">
          <span>or sign in with</span>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Rhebhek@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="forgot-link" onClick={handleRedirectToForgotPassword}>
              Forgot Password?
            </span>
          </div>

          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="keepSignedIn"
              checked={formData.keepSignedIn}
              onChange={handleChange}
            />
            <span>Keep me signed in</span>
          </label>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-link">
          Don't have an Account?{' '}
          <span className="signup-redirect" onClick={handleRedirectToSignup}>
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
