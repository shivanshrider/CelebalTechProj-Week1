import React from 'react';
import './SuccessPage.css';

function SuccessPage({ formData, onBack }) {
  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="success-page">
      <h2>SignUp Successful!</h2>
      <div className="submitted-data">
        <h3>Account Information:</h3>
        <div className="data-grid">
          <div className="data-item">
            <strong>First Name:</strong> {formData.firstName}
          </div>
          <div className="data-item">
            <strong>Last Name:</strong> {formData.lastName}
          </div>
          <div className="data-item">
            <strong>Username:</strong> {formData.username}
          </div>
          <div className="data-item">
            <strong>Email:</strong> {formData.email}
          </div>
          <div className="data-item">
            <strong>Phone Number:</strong> {formData.phoneCode} {formData.phoneNumber}
          </div>
          <div className="data-item">
            <strong>Country:</strong> {formData.country}
          </div>
          <div className="data-item">
            <strong>City:</strong> {formData.city}
          </div>
          <div className="data-item">
            <strong>PAN Number:</strong> {formData.panNumber}
          </div>
          <div className="data-item">
            <strong>Aadhar Number:</strong> {formData.aadharNumber}
          </div>
        </div>
      </div>
      <button onClick={onBack} className="back-button">
        Back to SignUp
      </button>
    </div>
  );
}

export default SuccessPage; 