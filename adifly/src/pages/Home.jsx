// Home.jsx - Complete homepage with all sections and animations
// Dependencies: npm i framer-motion react-intersection-observer react-icons swiper react-countup

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaPaintBrush, FaChartLine, FaUsers, FaAward, FaPlay, FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
// import StatsSection from './components/StatsSection';
import StatsSection from '../components/ExactStatsSection';
// Toast Alert Component
const ToastAlert = ({ type = 'success', message, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const alertStyles = {
    success: {
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      icon: '✓',
      ring: 'ring-green-200'
    },
    error: {
      bg: 'bg-gradient-to-r from-red-500 to-rose-600',
      icon: '✕',
      ring: 'ring-red-200'
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      icon: '⚠',
      ring: 'ring-yellow-200'
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      icon: 'ℹ',
      ring: 'ring-blue-200'
    }
  };

  const style = alertStyles[type];

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed top-8 right-8 z-[9999]"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${style.bg} ${style.ring} ring-4 ring-opacity-40 text-white p-6 rounded-2xl shadow-2xl max-w-md cursor-pointer transform`}
            onClick={onClose}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold"
              >
                {style.icon}
              </motion.div>
              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-semibold text-lg"
                >
                  {message}
                </motion.p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                ✕
              </motion.button>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className="h-1 bg-white/30 rounded-full mt-4 origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Home Component
const Home = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const [alert, setAlert] = useState({ show: false, type: 'success', message: '' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      rotateX: -90 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed', icon: <FaRocket />, color: 'text-blue-500' },
    { number: 98, suffix: '%', label: 'Client Satisfaction', icon: <FaAward />, color: 'text-yellow-500' },
    { number: 250, suffix: '+', label: 'Happy Clients', icon: <FaUsers />, color: 'text-red-500' },
    { number: 24, suffix: '/7', label: 'Support Available', icon: <FaChartLine />, color: 'text-green-500' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Alert Messages */}
      {alert.show && (
        <ToastAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ ...alert, show: false })}
          duration={5000}
        />
      )}

      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-dark to-primary text-white overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-accent/25 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.4, 0.8, 0.4],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h1 className="text-6xl md:text-8xl font-extrabold leading-none">
                <motion.span variants={textVariants} className="block">
                  Result
                </motion.span>
                <motion.span 
                  variants={textVariants}
                  className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  Oriented
                </motion.span>
                <motion.span variants={textVariants} className="block">
                  Marketing
                </motion.span>
              </motion.h1>

              <motion.div
                variants={slideUpVariants}
                className="text-3xl md:text-4xl font-light"
              >
                <span className="text-gray-200">Growth</span>
                <br />
                <motion.span 
                  className="text-accent font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  Delivered
                </motion.span>
              </motion.div>

              <motion.p 
                variants={slideUpVariants}
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                Transform your business with comprehensive digital marketing solutions 
                designed to maximize ROI and accelerate sustainable growth.
              </motion.p>

              <motion.div 
                variants={containerVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div variants={slideUpVariants}>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">Start Your Journey</span>
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                <motion.div variants={slideUpVariants}>
                  <Link
                    to="/services"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary transition-all duration-300"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <motion.div 
                className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg p-8 rounded-3xl border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-white/10 p-6 rounded-2xl text-center relative group cursor-pointer"
                    >
                      <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                      <div className="text-4xl font-bold text-primary mb-1">
                        <CountUp end={stat.number} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-gray-200">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={() => document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2 opacity-70">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section */}
      <ProcessSection />
      {/* Stats Section */}
   <StatsSection />
      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Awards */}
      <AwardsSection />

      {/* Team */}
      <TeamSection />

      {/* Pricing */}
      <PricingSection />

      {/* Blog */}
      <BlogSection />

      {/* FAQ */}
      <FAQSection />

      {/* Contact Form */}
      <InteractiveContactForm setAlert={setAlert} />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};

// Process Section
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const steps = [
    { title: 'Discovery', desc: 'We analyze your business goals and target audience', icon: '🔍' },
    { title: 'Strategy', desc: 'Custom roadmap tailored to your specific needs', icon: '🎯' },
    { title: 'Execute', desc: 'Implementation with real-time progress tracking', icon: '⚡' },
    { title: 'Optimize', desc: 'Continuous improvement based on data insights', icon: '📈' }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Our <span className="text-primary">Process</span>
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onHoverStart={() => setActiveStep(i)}
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                activeStep === i ? 'bg-primary text-white scale-105' : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm opacity-80">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const services = [
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Digital Marketing',
      description: 'Performance-driven campaigns across all digital channels',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <FaPaintBrush className="text-4xl text-primary" />,
      title: 'UI/UX Design',
      description: 'User-centered design for exceptional experiences',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed for your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/services" className="text-primary font-semibold hover:text-secondary">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      quote: "Adifly transformed our digital presence completely. 300% increase in leads!",
      image: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Mike Chen",
      role: "Founder, GrowthCo",
      quote: "Best ROI we've ever seen from a marketing agency. Highly recommended!",
      image: "https://i.pravatar.cc/100?img=2"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-center mb-16"
        >
          What Our <span className="text-primary">Clients Say</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <img
                  src={test.image}
                  className="w-20 h-20 rounded-full mx-auto"
                  alt={test.name}
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <FaPlay className="text-white text-xs ml-1" />
                </div>
              </div>
              <blockquote className="text-xl mb-6 italic">"{test.quote}"</blockquote>
              <div>
                <h4 className="font-bold">{test.name}</h4>
                <p className="text-gray-400">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Awards Section
const AwardsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const awards = [
    { title: 'Best Digital Agency 2024', org: 'Marketing Excellence Awards', icon: '🏆' },
    { title: 'Top Web Design Studio', org: 'Design Council', icon: '🥇' },
    { title: 'Innovation in Marketing', org: 'Tech Innovation Summit', icon: '💡' },
    { title: 'Client Satisfaction Leader', org: 'Industry Review', icon: '⭐' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-center mb-16"
        >
          Awards & <span className="text-primary">Recognition</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={inView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-xl text-center"
            >
              <div className="text-6xl mb-4">{award.icon}</div>
              <h3 className="font-bold text-lg mb-2">{award.title}</h3>
              <p className="text-gray-600 text-sm">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const team = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image: "https://i.pravatar.cc/400?img=1",
      bio: "10+ years in digital marketing"
    },
    {
      name: "Sarah Davis",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/400?img=2",
      bio: "Full-stack development expert"
    },
    {
      name: "Mike Wilson",
      role: "Strategy Head",
      image: "https://i.pravatar.cc/400?img=3",
      bio: "Data-driven marketing strategist"
    },
    {
      name: "Emma Brown",
      role: "UX Designer",
      image: "https://i.pravatar.cc/400?img=4",
      bio: "User experience specialist"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-center mb-16"
        >
          Meet Our <span className="text-primary">Team</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const plans = [
    {
      name: 'Starter',
      monthly: 999,
      yearly: 899,
      features: ['Social Media', 'Basic SEO', 'Monthly Reports'],
      popular: false
    },
    {
      name: 'Growth',
      monthly: 1999,
      yearly: 1799,
      features: ['Everything in Starter', 'PPC Campaigns', 'Weekly Reports'],
      popular: true
    },
    {
      name: 'Enterprise',
      monthly: 'Custom',
      yearly: 'Custom',
      features: ['Everything in Growth', 'Dedicated Manager', 'Daily Reports'],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-center mb-8"
        >
          Simple <span className="text-primary">Pricing</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white p-1 rounded-full shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly' ? 'bg-primary text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'yearly' ? 'bg-primary text-white' : 'text-gray-600'
              }`}
            >
              Yearly <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-2">-10%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-8 rounded-2xl relative ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary to-secondary text-white scale-105' 
                  : 'bg-white border-2 border-gray-100 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {typeof plan[billingCycle] === 'number' ? `₹${plan[billingCycle]}` : plan[billingCycle]}
                </span>
                {typeof plan[billingCycle] === 'number' && (
                  <span className="text-sm opacity-60">/month</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                plan.popular 
                  ? 'bg-white text-primary hover:bg-gray-100' 
                  : 'bg-primary text-white hover:bg-secondary'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section
const BlogSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const posts = [
    {
      title: "10 Digital Marketing Trends for 2025",
      excerpt: "Stay ahead with these emerging trends that will shape the industry.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      date: "Jan 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "The Ultimate Guide to Social Media ROI",
      excerpt: "Learn how to measure and improve your social media return on investment.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      date: "Jan 12, 2025",
      readTime: "8 min read"
    },
    {
      title: "Web Design Trends That Convert",
      excerpt: "Discover the latest web design trends that drive conversions.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      date: "Jan 10, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="text-5xl font-bold"
          >
            Latest <span className="text-primary">Insights</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <Link to="/blog" className="text-primary font-semibold hover:text-secondary">
              View All Posts →
            </Link>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to="/blog" className="text-primary font-semibold hover:text-secondary">
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Most projects are completed within 4-8 weeks, depending on scope and complexity. We provide detailed timelines during our initial consultation."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer 24/7 support and maintenance packages for all our clients. Our team ensures your digital assets stay updated and secure."
    },
    {
      q: "What's included in your pricing?",
      a: "Our pricing includes strategy development, implementation, monitoring, and reporting. We provide transparent pricing with no hidden costs."
    },
    {
      q: "Can you work with our existing team?",
      a: "Absolutely! We collaborate seamlessly with in-house teams and provide training and knowledge transfer as needed."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-center mb-8"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:outline-none text-lg"
            />
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-lg pr-4">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: openFAQ === i ? 180 : 0 }}
                  className="text-primary text-2xl font-bold"
                >
                  ↓
                </motion.div>
              </button>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Interactive Contact Form with Proper Validation
const InteractiveContactForm = ({ setAlert }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const steps = [
    { 
      title: "Tell us about your project", 
      fields: ["projectType", "budget"],
      required: ["projectType"]
    },
    { 
      title: "Contact details", 
      fields: ["name", "email", "phone"],
      required: ["name", "email"]
    },
    { 
      title: "Additional information", 
      fields: ["message", "timeline"],
      required: ["message"]
    }
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = (stepIndex) => {
    const step = steps[stepIndex];
    const stepErrors = {};
    let isValid = true;

    step.required.forEach(fieldName => {
      const value = formData[fieldName].trim();
      
      if (!value) {
        stepErrors[fieldName] = 'This field is required';
        isValid = false;
      } else if (fieldName === 'email' && !validateEmail(value)) {
        stepErrors[fieldName] = 'Please enter a valid email address';
        isValid = false;
      } else if (fieldName === 'name' && value.length < 2) {
        stepErrors[fieldName] = 'Name must be at least 2 characters long';
        isValid = false;
      }
    });

    setErrors(stepErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else {
      setAlert({
        show: true,
        type: 'warning',
        message: 'Please fill out all required fields correctly before proceeding.'
      });
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      setAlert({
        show: true,
        type: 'warning',
        message: 'Please fill out all required fields correctly.'
      });
      return;
    }

    let allStepsValid = true;
    for (let i = 0; i < steps.length; i++) {
      if (!validateStep(i)) {
        allStepsValid = false;
        break;
      }
    }

    if (!allStepsValid) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Please complete all previous steps before submitting.'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAlert({
        show: true,
        type: 'success',
        message: '🎉 Thank you! Your project inquiry has been submitted successfully. We\'ll get back to you within 24 hours.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: ''
      });
      setCurrentStep(0);
      setErrors({});
      
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCurrentStepValid = () => {
    const step = steps[currentStep];
    return step.required.every(fieldName => {
      const value = formData[fieldName].trim();
      if (fieldName === 'email') {
        return value && validateEmail(value);
      }
      return value !== '';
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-center mb-16"
        >
          Let's Start Your <span className="text-primary">Project</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8"
        >
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {steps.map((step, i) => (
                <div key={i} className={`text-sm flex items-center ${
                  i <= currentStep ? 'text-primary' : 'text-gray-400'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                    i < currentStep ? 'bg-primary text-white' : 
                    i === currentStep ? 'bg-primary/50 text-white' : 'bg-gray-600'
                  }`}>
                    {i < currentStep ? '✓' : i + 1}
                  </div>
                  <span className="hidden sm:inline">Step {i + 1}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="min-h-[400px]"
              >
                <h3 className="text-2xl font-bold mb-6">{steps[currentStep].title}</h3>
                <div className="space-y-6">
                  {currentStep === 0 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`w-full p-4 rounded-lg bg-white/20 border ${
                            errors.projectType ? 'border-red-500' : 'border-white/30'
                          } text-white focus:border-primary focus:outline-none`}
                        >
                          <option value="" className="text-gray-800">Select project type...</option>
                          <option value="web-development" className="text-gray-800">Web Development</option>
                          <option value="digital-marketing" className="text-gray-800">Digital Marketing</option>
                          <option value="ui-ux-design" className="text-gray-800">UI/UX Design</option>
                          <option value="seo" className="text-gray-800">SEO Services</option>
                          <option value="social-media" className="text-gray-800">Social Media Marketing</option>
                          <option value="other" className="text-gray-800">Other</option>
                        </select>
                        {errors.projectType && (
                          <p className="text-red-400 text-sm mt-2">{errors.projectType}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Budget Range (Optional)
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white focus:border-primary focus:outline-none"
                        >
                          <option value="" className="text-gray-800">Select budget range...</option>
                          <option value="under-50k" className="text-gray-800">Under ₹50,000</option>
                          <option value="50k-1l" className="text-gray-800">₹50,000 - ₹1,00,000</option>
                          <option value="1l-3l" className="text-gray-800">₹1,00,000 - ₹3,00,000</option>
                          <option value="3l-5l" className="text-gray-800">₹3,00,000 - ₹5,00,000</option>
                          <option value="above-5l" className="text-gray-800">Above ₹5,00,000</option>
                        </select>
                      </div>
                    </>
                  )}
                  
                  {currentStep === 1 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full p-4 rounded-lg bg-white/20 border ${
                            errors.name ? 'border-red-500' : 'border-white/30'
                          } text-white placeholder-white/60 focus:border-primary focus:outline-none`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full p-4 rounded-lg bg-white/20 border ${
                            errors.email ? 'border-red-500' : 'border-white/30'
                          } text-white placeholder-white/60 focus:border-primary focus:outline-none`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </>
                  )}
                  
                  {currentStep === 2 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your project requirements, goals, and any specific features you need..."
                          rows="6"
                          className={`w-full p-4 rounded-lg bg-white/20 border ${
                            errors.message ? 'border-red-500' : 'border-white/30'
                          } text-white placeholder-white/60 focus:border-primary focus:outline-none resize-none`}
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Timeline (Optional)
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white focus:border-primary focus:outline-none"
                        >
                          <option value="" className="text-gray-800">Select timeline...</option>
                          <option value="urgent" className="text-gray-800">ASAP (Rush job)</option>
                          <option value="1-2-weeks" className="text-gray-800">1-2 weeks</option>
                          <option value="1-month" className="text-gray-800">1 month</option>
                          <option value="2-3-months" className="text-gray-800">2-3 months</option>
                          <option value="flexible" className="text-gray-800">Flexible</option>
                        </select>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4 mt-6">
                        <h4 className="font-semibold mb-3">Review Your Information:</h4>
                        <div className="text-sm space-y-2 text-gray-300">
                          <p><strong>Project Type:</strong> {formData.projectType || 'Not selected'}</p>
                          <p><strong>Name:</strong> {formData.name || 'Not provided'}</p>
                          <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
                          {formData.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
                          <p><strong>Message:</strong> {formData.message.substring(0, 100)}{formData.message.length > 100 ? '...' : ''}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg disabled:opacity-50 hover:bg-gray-500 transition-colors disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentStep === steps.length - 1 ? (
                <button
                  type="submit"
                  disabled={isSubmitting || !isCurrentStepValid()}
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Project'
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentStepValid()}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTA = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-dark text-white relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #7cc644 0%, transparent 70%)",
            "radial-gradient(circle at 80% 50%, #076c4e 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, #7cc644 0%, transparent 70%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that have chosen our expertise 
            to accelerate their growth and achieve remarkable results.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                Start Your Project Today
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
