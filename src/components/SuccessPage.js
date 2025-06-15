import React from 'react';
import './SuccessPage.css';

function SuccessPage({ formData, onBack }) {
  if (!formData) {
    return <div className="loading">Just a moment...</div>;
  }

  return (
    <div className="success-page">
      <div className="success-header">
        <h2>🎉 Welcome Aboard!</h2>
        <p>Your account has been created successfully!</p>
      </div>
      
      <div className="submitted-data">
        <h3>Here's your account information:</h3>
        <div className="data-grid">
          <div className="data-item">
            <strong>Name:</strong> {formData.firstName} {formData.lastName}
          </div>
          <div className="data-item">
            <strong>Username:</strong> {formData.username}
          </div>
          <div className="data-item">
            <strong>Email:</strong> {formData.email}
          </div>
          <div className="data-item">
            <strong>Phone:</strong> {formData.phoneCode} {formData.phoneNumber}
          </div>
          <div className="data-item">
            <strong>Location:</strong> {formData.city}, {formData.country}
          </div>
          <div className="data-item">
            <strong>PAN:</strong> {formData.panNumber}
          </div>
          <div className="data-item">
            <strong>Aadhar:</strong> {formData.aadharNumber}
          </div>
        </div>
      </div>

      <div className="success-actions">
        <button onClick={onBack} className="back-button">
          Back to Sign Up
        </button>
        <p className="next-steps">
          We've sent a confirmation email to {formData.email}. 
          Please check your inbox to verify your account.
        </p>
      </div>
    </div>
  );
}

export default SuccessPage; 