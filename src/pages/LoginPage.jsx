// src/pages/LoginPage.jsx (You might put this in a 'pages' folder or directly in 'components')
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic, e.g., send data to an API
    console.log('Login attempt:', { email, password, rememberMe });
    alert('Login functionality not implemented in this example.'); // Placeholder alert
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

         <Helmet>
        <title> Log In </title>
    </Helmet>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-base font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-base font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 placeholder-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center text-gray-600 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-red-600 rounded focus:ring-red-500 border-gray-300 mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="/forgot-password" className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default LoginPage;