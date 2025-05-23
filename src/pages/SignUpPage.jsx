// src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({}); // State for validation errors

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically handle the sign-up logic, e.g., send data to an API
      console.log('Sign Up attempt:', { fullName, email, password });
      alert('Sign Up functionality not implemented in this example. Form submitted successfully!');
      // You might redirect to a login page or dashboard here
    } else {
      console.log('Form has validation errors.');
    }
  };

  const InputField = ({ id, label, type, placeholder, value, onChange, error }) => (
    <div className="mb-4"> {/* Reduced mb from 6 to 4 for more fields */}

    <Helmet>
        <title> Sign Up </title>
    </Helmet>


      <label htmlFor={id} className="block text-gray-700 text-base font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 placeholder-gray-500
                    ${error ? 'border-red-500' : 'border-gray-300'}`}
        value={value}
        onChange={onChange}
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="Enter your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-6" // Added mt-6 for spacing
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;