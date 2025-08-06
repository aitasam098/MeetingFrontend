import React, { useState, useEffect } from 'react';
import './EmailVerification.css';

function EmailVerification() {
  const [code, setCode] = useState(Array(6).fill(''));
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('✅ Account created successfully!');
    setCode(Array(6).fill(''));
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleResend = () => {
    alert('Verification email resent to ChachuCanada@gmail.com');
  };

  return (
    <div className="verification-wrapper">
      <div className="verification-container">
        <button className="back-button">←</button>
        <h2 className="verification-title">Please verify your email address</h2>
        <p className="verification-subtext">
          We've sent an email to <strong>ChachuCanada@gmail.com</strong>, please enter the code below.
        </p>

        <form onSubmit={handleSubmit} className="code-form">
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e)}
              />
            ))}
          </div>

          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>

        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}

        <p className="resend-text">
          Didn't see your email?{' '}
          <span className="resend-link" onClick={handleResend}>
            Resend
          </span>
        </p>
      </div>
    </div>
  );
}

export default EmailVerification;
