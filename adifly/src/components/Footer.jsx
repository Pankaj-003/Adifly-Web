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
    <footer className="bg-gray-950 text-white">
      {/* Top */}
      <div className="px-4 sm:px-6 lg:px-8 pt-14 pb-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={Footerlogo}
                alt="Adifly"
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
              {/* <span className="text-2xl font-bold tracking-tight">Adifly</span> */}
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Result-oriented marketing. Growth delivered. Full-stack digital services that
              unite performance and design to move brands forward.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
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
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center uppercase text-sm font-bold transition-colors"
                >
                  {s.char}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
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
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
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
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-400">
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
              <div className="bg-gray-950 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h5 className="text-xl font-semibold">Stay in the loop</h5>
                  <p className="text-gray-300 mt-1">
                    Get insights, case studies, and growth playbooks in your inbox.
                  </p>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex w-full md:w-auto max-w-md"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-lg bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-r-lg bg-white text-primary font-semibold hover:bg-gray-100 transition"
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
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {year} Adifly. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {/* <img src={Footerlogo} alt="Adifly" className="h-12 w-auto object-contain" /> */}
            <nav className="flex items-center gap-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
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
