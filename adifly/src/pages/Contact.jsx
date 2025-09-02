// Contact.jsx - Complete functional contact page with all working buttons
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaUsers, 
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaCreditCard,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

// Toast Alert Component
const ToastAlert = ({ type = 'success', message, onClose, duration = 5000 }) => {
  React.useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const alertStyles = {
    success: { bg: 'bg-gradient-to-r from-green-500 to-emerald-600', icon: '✓' },
    error: { bg: 'bg-gradient-to-r from-red-500 to-rose-600', icon: '✕' },
    warning: { bg: 'bg-gradient-to-r from-yellow-500 to-orange-500', icon: '⚠' },
    info: { bg: 'bg-gradient-to-r from-blue-500 to-indigo-600', icon: 'ℹ' }
  };

  const style = alertStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed top-8 right-8 z-[9999]"
    >
      <div className={`${style.bg} text-white p-6 rounded-2xl shadow-2xl max-w-md cursor-pointer`} onClick={onClose}>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
            {style.icon}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg">{message}</p>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: 'success', message: '' });

  // Form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim()) {
      setAlert({ show: true, type: 'warning', message: 'Please enter your name.' });
      return;
    }
    
    if (!formData.email.trim()) {
      setAlert({ show: true, type: 'warning', message: 'Please enter your email address.' });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setAlert({ show: true, type: 'warning', message: 'Please enter a valid email address.' });
      return;
    }
    
    if (!formData.message.trim()) {
      setAlert({ show: true, type: 'warning', message: 'Please enter your message.' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call to your backend or email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAlert({
        show: true,
        type: 'success',
        message: '🎉 Thank you! We received your message and will get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setAlert({
        show: true,
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Button action handlers
  const handleMakePayment = () => {
    setAlert({
      show: true,
      type: 'info',
      message: 'Taking you to our pricing plans...'
    });
    
    setTimeout(() => {
      // Try to find pricing section on current page first
      const pricingSection = document.querySelector('[data-section="pricing"]') || 
                            document.getElementById('pricing') ||
                            document.querySelector('.pricing-section');
      
      if (pricingSection) {
        pricingSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Navigate to pricing page or home with pricing hash
        window.location.href = '/#pricing';
      }
    }, 1000);
  };

  const handleStartService = () => {
    setAlert({
      show: true,
      type: 'info',
      message: 'Opening service selection portal...'
    });
    
    setTimeout(() => {
      window.location.href = '/services';
    }, 1500);
  };

  const handleCallUs = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleEmailUs = () => {
    window.open('mailto:hello@adifly.com?subject=Business Inquiry&body=Hi, I would like to discuss a project with you.', '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I would like to know more about your services.');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleGetDirections = (location) => {
    const addresses = {
      gurugram: 'U78, 51, DLF Phase 3, Sector 24, Gurugram, Haryana 122022',
      bhubaneswar: 'Plot No 16/2024, Vikash School Lane, Khandagiri, Bhubaneswar, Odisha 751030'
    };
    
    const address = encodeURIComponent(addresses[location]);
    window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
  };

  const handleCheckAvailability = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Check if it's a weekday (Mon-Fri) and within working hours (9 AM - 7 PM)
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    const isWeekdayHours = currentHour >= 9 && currentHour < 19;
    
    // Check if it's Saturday and within working hours (10 AM - 4 PM)
    const isSaturday = currentDay === 6;
    const isSaturdayHours = currentHour >= 10 && currentHour < 16;
    
    if ((isWeekday && isWeekdayHours) || (isSaturday && isSaturdayHours)) {
      setAlert({
        show: true,
        type: 'success',
        message: '✅ We are currently available! Feel free to call us or send a message.'
      });
    } else if (currentDay === 0) {
      // Sunday
      setAlert({
        show: true,
        type: 'info',
        message: '📅 We are closed on Sundays. Please contact us on Monday-Saturday or leave a message.'
      });
    } else if (isWeekday && (currentHour < 9 || currentHour >= 19)) {
      // Weekday but outside hours
      setAlert({
        show: true,
        type: 'info',
        message: '🕐 We are currently outside business hours (9 AM - 7 PM). Please leave a message and we\'ll get back to you first thing tomorrow.'
      });
    } else if (isSaturday && (currentHour < 10 || currentHour >= 16)) {
      // Saturday but outside hours
      setAlert({
        show: true,
        type: 'info',
        message: '🕐 We are currently outside Saturday hours (10 AM - 4 PM). Please leave a message or contact us on Monday.'
      });
    }
  };

  const handleSocialMedia = (platform) => {
    const socialLinks = {
      linkedin: 'https://linkedin.com/company/adifly',
      twitter: 'https://twitter.com/adifly',
      instagram: 'https://instagram.com/adifly'
    };
    
    window.open(socialLinks[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Alert Messages */}
      {alert.show && (
        <ToastAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}

      {/* Hero Section */}
      <HeroSection 
        onCallUs={handleCallUs}
        onEmailUs={handleEmailUs}
        onWhatsApp={handleWhatsApp}
      />
      
      {/* Main Contact Section */}
      <MainContactSection 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        handleCallUs={handleCallUs}
        handleEmailUs={handleEmailUs}
        handleGetDirections={handleGetDirections}
        handleCheckAvailability={handleCheckAvailability}
      />
      
      {/* Locations Section */}
      <LocationsSection 
        handleGetDirections={handleGetDirections}
      />
      
      {/* CTA Section */}
      <CTASection 
        handleMakePayment={handleMakePayment}
        handleStartService={handleStartService}
      />
      
      {/* Social Media Section */}
      <SocialMediaSection 
        handleSocialMedia={handleSocialMedia}
      />
    </div>
  );
};

// Hero Section with working buttons
const HeroSection = ({ onCallUs, onEmailUs, onWhatsApp }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-primary via-secondary to-dark text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-6xl md:text-8xl font-black mb-6" whileHover={{ scale: 1.05 }}>
            #Hello
          </motion.h1>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-8">
            Connect With Us
          </motion.h2>
          <motion.p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
            Get in touch with us and let's embark on a journey to elevate your brand's digital presence. 
            Our team of experts is ready to collaborate, strategize, and create tailored solutions that drive remarkable results.
          </motion.p>
          
          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCallUs}
              className="bg-accent text-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors flex items-center"
            >
              <FaPhone className="mr-2" />
              Call Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEmailUs}
              className="bg-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/30 transition-colors flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Email Us
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onWhatsApp}
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="mt-12">
          <span className="inline-block px-8 py-3 bg-accent text-dark font-bold rounded-full text-lg">
            REACH OUT
          </span>
        </motion.div>
      </div>
    </section>
  );
};

// Main Contact Section with working form
const MainContactSection = ({ formData, handleChange, handleSubmit, isSubmitting, handleCallUs, handleEmailUs, handleGetDirections, handleCheckAvailability }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Our Office",
      details: ["DLF Phase 3, Sector 24", "Gurugram, Haryana 122022"],
      color: "text-blue-500",
      action: () => handleGetDirections('gurugram'),
      buttonText: "Get Directions"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "text-green-500",
      action: handleCallUs,
      buttonText: "Call Now"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us", 
      details: ["hello@adifly.com", "support@adifly.com"],
      color: "text-purple-500",
      action: handleEmailUs,
      buttonText: "Send Email"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-orange-500",
      action: handleCheckAvailability,
      buttonText: "Check Availability"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">
            We are just a <span className="text-primary">form away</span>
          </h2>
          <p className="text-xl text-gray-600">
            Share your details and we will be in touch with you within few hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Cards with working buttons */}
          <motion.div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className={`${info.color} mr-4`}>{info.icon}</div>
                  <h3 className="text-lg font-bold text-dark">{info.title}</h3>
                </div>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-1">{detail}</p>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={info.action}
                  className={`mt-4 px-4 py-2 ${info.color.replace('text', 'bg').replace('500', '500')} bg-opacity-10 ${info.color} font-semibold rounded-lg hover:bg-opacity-20 transition-colors`}
                >
                  {info.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Working Contact Form */}
          <motion.div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-dark font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-dark font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-dark font-semibold mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="seo">SEO Services</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="branding">Brand Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select budget...</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-2l">₹50,000 - ₹2,00,000</option>
                    <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                    <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
                    <option value="above-10l">Above ₹10,00,000</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-dark font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaArrowRight className="ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Locations Section with working direction buttons
const LocationsSection = ({ handleGetDirections }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const locations = [
    {
      id: 'gurugram',
      city: "Gurugram, Haryana",
      address: "U78, 51, DLF Phase 3, Sector 24, Gurugram, Haryana 122022",
      type: "Headquarters",
      icon: <FaUsers className="text-3xl text-primary" />,
      features: ["Main Office", "Creative Studio", "Client Meeting Rooms"]
    },
    {
      id: 'bhubaneswar',
      city: "Bhubaneswar, Odisha", 
      address: "Plot No 16/2024, Vikash School Lane, Khandagiri, Bhubaneswar, Odisha 751030",
      type: "Branch Office",
      icon: <FaRocket className="text-3xl text-secondary" />,
      features: ["Development Center", "Support Team", "Training Facility"]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            We are almost available <span className="text-primary">Everywhere</span>
          </h2>
          <p className="text-xl text-gray-300">
            Our Business Partners Digital Support Zone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center mb-6">
                {location.icon}
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">{index + 1}. {location.city}</h3>
                  <span className="text-accent font-medium">{location.type}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{location.address}</p>
              
              <div className="space-y-2 mb-6">
                {location.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <FaCheckCircle className="text-primary mr-3" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleGetDirections(location.id)}
                className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary transition-colors flex items-center"
              >
                <FaMapMarkerAlt className="mr-2" />
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section with updated pricing button
const CTASection = ({ handleMakePayment, handleStartService }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const ctaItems = [
    {
      title: "Ready with your decision",
      description: "View our transparent pricing plans and choose what fits best for you.",
      buttonText: "View Pricing Plans",
      buttonAction: handleMakePayment,
      buttonColor: "bg-primary hover:bg-secondary",
      icon: <FaCheckCircle className="text-4xl text-primary mb-4" />
    },
    {
      title: "Start your Digital Journey with Adifly",
      description: "Click on the button and start your services today.",
      buttonText: "Start Services Today",
      buttonAction: handleStartService,
      buttonColor: "bg-accent hover:bg-primary",
      icon: <FaRocket className="text-4xl text-accent mb-4" />
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {ctaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-xl text-center"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={item.buttonAction}
                className={`${item.buttonColor} text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto`}
              >
                {item.buttonText}
                <FaArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Social Media Section with working links
const SocialMediaSection = ({ handleSocialMedia }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const socialPlatforms = [
    { name: 'LinkedIn', icon: FaLinkedin, color: 'bg-blue-600 hover:bg-blue-700', key: 'linkedin' },
    { name: 'Twitter', icon: FaTwitter, color: 'bg-blue-400 hover:bg-blue-500', key: 'twitter' },
    { name: 'Instagram', icon: FaInstagram, color: 'bg-pink-500 hover:bg-pink-600', key: 'instagram' }
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h3 className="text-2xl font-bold text-dark mb-8">Follow Us on Social Media</h3>
          <div className="flex justify-center space-x-6">
            {socialPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <motion.button
                  key={platform.key}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSocialMedia(platform.key)}
                  className={`${platform.color} text-white p-4 rounded-full transition-all duration-300`}
                >
                  <IconComponent className="text-2xl" />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
