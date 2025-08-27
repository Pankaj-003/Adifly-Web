import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Social Media Marketing', path: '/services' },
      { name: 'Performance Marketing', path: '/services' },
      { name: 'SEO Services', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'UI/UX Design', path: '/services' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Work', path: '/work' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold">Adifly</span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                We are a leading digital marketing agency dedicated to helping businesses 
                achieve exceptional growth through innovative strategies and cutting-edge solutions.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <span className="text-sm font-semibold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter and get the latest digital marketing tips and trends
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary hover:bg-accent px-6 py-3 rounded-r-lg font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Adifly. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
