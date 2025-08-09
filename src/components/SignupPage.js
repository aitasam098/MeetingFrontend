import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation
import './SignupPage.css';

function SignupPage() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const initialFormState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('✅ Signup successful!');
    setFormData(initialFormState);
    console.log('Form submitted:', formData);
    navigate('/verify-email');
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    navigate('/verify-email');
  };

  const handleRedirectToLogin = () => {
    navigate('/'); // ✅ Redirect to login page
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="page-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">Signup</h2>

        <button className="google-btn" onClick={handleGoogleSignup}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google logo"
            className="google-logo"
          />
          <span>Sign up with Google</span>
        </button>

        <div className="divider">
          <span>or sign up with</span>
        </div>



        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Chote Chachu"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ChachuCanada@gmail.com"
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
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            <span>
              I accept Accounting and Tax Services Terms of Use and Privacy Policy
            </span>
          </label>

          <button type="submit" className="signup-btn">Signup</button>
        </form>

        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}

        <p className="signin-link">
          Already have an account?{' '}
          <span className="signin-redirect" onClick={handleRedirectToLogin}>
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
