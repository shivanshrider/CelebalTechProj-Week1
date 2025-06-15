import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '+91',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // My custom country and city data
  const countries = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
    { value: 'canada', label: 'Canada' }
  ];

  const cities = {
    india: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
    usa: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    uk: ['London', 'Manchester', 'Birmingham', 'Liverpool'],
    canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary']
  };

  // My custom validation logic
  function validateForm() {
    let newErrors = {};
    
    // Name validations
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Hey, we need your first name!';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is missing!';
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Pick a cool username!';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username should be at least 3 characters long';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Oops! That email doesn\'t look right';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Create a strong password!';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters';
    }

    // Phone validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'We need your phone number!';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit number';
    }

    // Location validation
    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }

    if (!formData.city) {
      newErrors.city = 'Please select your city';
    }

    // Document validation
    if (!formData.panNumber) {
      newErrors.panNumber = 'PAN number is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
      newErrors.panNumber = 'Please enter a valid PAN number (e.g., ABCDE1234F)';
    }

    if (!formData.aadharNumber) {
      newErrors.aadharNumber = 'Aadhar number is required';
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Please enter a valid 12-digit Aadhar number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // My form submission handler
  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  }

  // My input change handler
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="registration-form-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error' : ''}
            placeholder="Choose a username"
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <div className="phone-input">
            <input
              type="text"
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              className="phone-code"
              readOnly
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={errors.phoneNumber ? 'error' : ''}
            />
          </div>
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={errors.country ? 'error' : ''}
          >
            <option value="">Select your country</option>
            {countries.map(country => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        <div className="form-group">
          <label>City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? 'error' : ''}
            disabled={!formData.country}
          >
            <option value="">Select your city</option>
            {formData.country && cities[formData.country].map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label>PAN Number:</label>
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            className={errors.panNumber ? 'error' : ''}
            placeholder="Enter your PAN number"
          />
          {errors.panNumber && <span className="error-message">{errors.panNumber}</span>}
        </div>

        <div className="form-group">
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            className={errors.aadharNumber ? 'error' : ''}
            placeholder="Enter your Aadhar number"
          />
          {errors.aadharNumber && <span className="error-message">{errors.aadharNumber}</span>}
        </div>

        <button type="submit" className="submit-button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm; 