import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import SuccessPage from './components/SuccessPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('form');
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setCurrentPage('success');
  };

  const handleBackToForm = () => {
    setCurrentPage('form');
  };

  return (
    <div className="App">
      {currentPage === 'form' ? (
        <RegistrationForm onSubmit={handleFormSubmit} />
      ) : (
        <SuccessPage formData={formData} onBack={handleBackToForm} />
      )}
    </div>
  );
}

export default App; 