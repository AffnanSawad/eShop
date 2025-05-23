import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/ProductSlice";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-Data");
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        {/* Logo & Mobile Toggle */}
        <div className="flex w-full md:w-auto justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            eShop
          </Link>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={22} />
          </button>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center border border-gray-300 rounded-md px-3 py-1 w-full md:w-1/2"
        >
          <input
            type="text"
            placeholder="Search product"
            className="flex-grow outline-none px-2 py-1 text-sm"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="text-gray-500 hover:text-blue-500" />
          </button>
        </form>

        {/* Desktop Icons and Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-blue-600 transition duration-200"
          >
            <FaShoppingCart size={24} />
            {products.length > 0 && (
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-md animate-pulse">
                {products.length}
              </span>
            )}
          </Link>

          <Link to="/login">
            <button
              className="
                px-4 py-2
                text-sm font-semibold
                text-white
                bg-blue-600 rounded-md
                hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                transition-colors duration-300
                shadow-md
              "
            >
              Log In
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Links and Mobile Icons */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex items-center justify-center space-x-6 font-semibold text-md py-3 transition-all duration-300`}
      >
        <Link
          to="/"
          className="hover:text-blue-600 block md:inline-block py-2 md:py-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:text-blue-600 block md:inline-block py-2 md:py-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className="hover:text-blue-600 block md:inline-block py-2 md:py-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-600 block md:inline-block py-2 md:py-0"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>

        {/* Mobile Cart and Login (visible only on mobile) */}
        <div className="flex md:hidden items-center space-x-4 mt-3">
          <Link
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-blue-600 transition duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaShoppingCart size={24} />
            {products.length > 0 && (
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-md animate-pulse">
                {products.length}
              </span>
            )}
          </Link>

          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <button
              className="
                px-4 py-2
                text-sm font-semibold
                text-white
                bg-blue-600 rounded-md
                hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                transition-colors duration-300
                shadow-md
              "
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
