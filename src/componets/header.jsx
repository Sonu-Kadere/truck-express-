import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Login from '../asset/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // ✅ Helper to refresh the page and navigate
  const navigateAndRefresh = (path) => {
    closeMobileMenu();
    window.location.href = path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src={Login} alt="Truck Express Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
          <div className="text-xs sm:text-sm text-sky-700 font-semibold leading-tight">
            <div className="text-sm sm:text-base font-bold">TRUCK EXPRESS</div>
            <div className="hidden sm:block">EXPRESS DELIVERY</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm font-semibold text-gray-600">
          <Link to="/" onClick={() => navigateAndRefresh('/')}>HOME</Link>
          <Link to="/about" onClick={() => navigateAndRefresh('/about')}>ABOUT US</Link>
          <Link to="/how-we-work" onClick={() => navigateAndRefresh('/how-we-work')}>HOW WE WORK</Link>
          <Link to="/why-choose-us" onClick={() => navigateAndRefresh('/why-choose-us')}>WHY CHOOSE US</Link>
          <Link to="/services" onClick={() => navigateAndRefresh('/services')}>SERVICES</Link>
          <Link to="/my-bookings" onClick={() => navigateAndRefresh('/my-bookings')}>MY BOOKINGS</Link>
          <Link to="/contact" onClick={() => navigateAndRefresh('/contact')}>CONTACT US</Link>
        </nav>

        {/* Desktop Contact Info + Login */}
        <div className="hidden md:flex items-center gap-4 xl:gap-6">
          <div className="text-xs xl:text-sm text-red-600 flex flex-col">
            <div className="flex items-center gap-1">
              <FaPhoneAlt size={12} />
              <span className="text-black">+91 8889323456</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope size={12} />
              <span className="text-black">Email Us</span>
            </div>
          </div>

          <Link to="/login" onClick={() => navigateAndRefresh('/login')}>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-3 py-2 xl:px-4 rounded-full flex items-center gap-2 transition-colors text-sm">
              <FaUser size={14} /> LOGIN
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-gray-600 hover:text-sky-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Mobile Login Button */}
        <div className="md:hidden">
          <Link to="/login" onClick={() => navigateAndRefresh('/login')}>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-3 py-2 rounded-full flex items-center gap-1 transition-colors text-sm">
              <FaUser size={12} /> LOGIN
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-3 space-y-3">
            <Link to="/" onClick={() => navigateAndRefresh('/')}>HOME</Link>
            <Link to="/about" onClick={() => navigateAndRefresh('/about')}>ABOUT US</Link>
            <Link to="/how-we-work" onClick={() => navigateAndRefresh('/how-we-work')}>HOW WE WORK</Link>
            <Link to="/why-choose-us" onClick={() => navigateAndRefresh('/why-choose-us')}>WHY CHOOSE US</Link>
            <Link to="/services" onClick={() => navigateAndRefresh('/services')}>SERVICES</Link>
            <Link to="/my-bookings" onClick={() => navigateAndRefresh('/my-bookings')}>MY BOOKINGS</Link>
            <Link to="/contact" onClick={() => navigateAndRefresh('/contact')}>CONTACT US</Link>

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt size={14} className="text-red-600" />
                  <span>+91 8889323456</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope size={14} className="text-red-600" />
                  <span>Email Us</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
