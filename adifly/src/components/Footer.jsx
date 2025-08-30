// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footerlogo from '../assets/Adifly-logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const nav = {
    services: [
      { label: 'Social Media Marketing', to: '/services' },
      { label: 'Performance Marketing', to: '/services' },
      { label: 'SEO Services', to: '/services' },
      { label: 'Web Development', to: '/services' },
      { label: 'UI/UX Design', to: '/services' },
    ],
    company: [
      { label: 'About', to: '/about' },
      { label: 'Work', to: '/work' },
      { label: 'Blog', to: '/blog' },
      { label: 'Careers', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
    resources: [
      { label: 'Help Center', to: '#' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Policy', to: '#' },
      { label: 'Sitemap', to: '#' },
    ],
  };

  return (
    <footer className="bg-gray-950 text-white selection:bg-primary/20 selection:text-white">
      {/* Top */}
      <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-8 md:pt-14 md:pb-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-5">
              <img
                src={Footerlogo}
                alt="Adifly"
                className="h-16 sm:h-18 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed break-words">
              Result-oriented marketing. Growth delivered. Full-stack digital services that
              unite performance and design to move brands forward.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 mt-5 sm:mt-6">
              {[
                { label: 'Facebook', char: 'f' },
                { label: 'X', char: 'x' },
                { label: 'LinkedIn', char: 'in' },
                { label: 'Instagram', char: 'ig' },
              ].map((s) => (
                <a
                  key={s.label}
                  aria-label={s.label}
                  href="#"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center uppercase text-sm font-bold transition-colors"
                >
                  {s.char}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-gray-400">
                {nav.services.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-gray-400">
                {nav.company.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4">Resources</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-gray-400">
                {nav.resources.map((l) => (
                  <li key={l.label}>
                    <a href={l.to} className="hover:text-primary transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-12">
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-primary to-secondary">
              <div className="bg-gray-950 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                <div>
                  <h5 className="text-lg sm:text-xl font-semibold">Stay in the loop</h5>
                  <p className="text-gray-300 mt-1">
                    Get insights, case studies, and growth playbooks in your inbox.
                  </p>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex w-full md:w-auto max-w-none md:max-w-md"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 px-4 py-3 rounded-l-lg bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="px-5 sm:px-6 py-3 rounded-r-lg bg-white text-primary font-semibold hover:bg-gray-100 transition shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {year} Adifly. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <nav className="flex items-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
              <a href="#" className="hover:text-primary transition-colors px-1.5 py-1 rounded">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors px-1.5 py-1 rounded">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors px-1.5 py-1 rounded">
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
