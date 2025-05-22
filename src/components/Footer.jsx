

// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">

        {/* Column 1: E-Shop Info */}
        <div className="flex flex-col items-start md:items-start text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wider">
            e-Shop
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Your one-stop shop for all your needs. Shop with us and experience the best online shopping experience.
          </p>
          <br />

           &copy; e-Shop. All rights reserved.
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/" className="hover:text-red-500 transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-red-500 transition-colors duration-200">Shop</a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500 transition-colors duration-200">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500 transition-colors duration-200">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us & Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-5">Follow Us</h3>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white hover:bg-red-500 p-2 rounded-full transition-all duration-200 text-lg">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white hover:bg-red-500 p-2 rounded-full transition-all duration-200 text-lg">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white hover:bg-red-500 p-2 rounded-full transition-all duration-200 text-lg">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white hover:bg-red-500 p-2 rounded-full transition-all duration-200 text-lg">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Newsletter Form */}
          <form className="w-full max-w-sm flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-800 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;