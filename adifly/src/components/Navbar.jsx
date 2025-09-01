import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navlogo from '../assets/Adifly-logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
              <img 
                src={Navlogo} 
                alt="Adifly Logo" 
                className={`transition-all duration-300 ${
    scrolled ? 'h-14 w-auto' : 'h-20 w-auto'
                }`}
                onError={(e) => {
                  // Fallback if logo image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            
            </div>
          
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-white rounded-lg shadow-lg py-4 border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-primary bg-light font-semibold border-r-4 border-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-light'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-primary text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
