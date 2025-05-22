import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        
        {/* Logo & Mobile Toggle */}
        <div className="flex w-full md:w-auto justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">eShop</Link>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={22} />
          </button>
        </div>

        {/* Search Bar */}
        <form className="hidden md:flex items-center border border-gray-300 rounded-md px-3 py-1 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search product"
            className="flex-grow outline-none px-2 py-1 text-sm"
          />
          <button type="submit">
            <FaSearch className="text-gray-500 hover:text-blue-500" />
          </button>
        </form>

        {/* Icons and Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-500">
            <FaShoppingCart size={20} />
          </Link>

          <button className="text-sm text-blue-600 hover:underline">
            LogIn | Register
          </button>

          <button className="text-gray-700 hover:text-blue-500">
            <FaUser size={20} />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex items-center justify-center space-x-6 font-semibold text-md py-3 transition-all duration-300`}
      >
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/shop" className="hover:text-blue-600">Shop</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
