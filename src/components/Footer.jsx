// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* Column 1: E-Shop Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wide">e-Shop</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop shop for all your needs. Shop with us and experience the best online shopping experience.
          </p>
          <p className="text-sm mt-4 text-gray-500">&copy; {new Date().getFullYear()} e-Shop. All rights reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/shop" className="hover:text-red-500 transition">Shop</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Follow Us & Newsletter */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-white mb-5">Follow Us</h3>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start space-x-4 mb-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white hover:bg-red-500 p-2 rounded-full transition"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 w-full max-w-xs sm:max-w-full mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-800 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500 w-full"
            />
            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition"
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
