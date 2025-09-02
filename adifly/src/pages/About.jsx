// About.jsx - Complete About page with fixed JSX syntax
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, 
  FaUsers, 
  FaLightbulb, 
  FaChartLine,
  FaAward,
  FaHeart,
  FaEye,
  FaHandshake,
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaBullseye,
  FaGem
} from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <MissionSection />
      <StorySection />
      <WhyChooseUsSection />
      <ValuesSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-primary via-secondary to-dark text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {[...Array(20)].map((_, i) => (
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-black mb-8 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            We are <span className="text-accent">creative innovators</span> of tomorrow,<br />
            crafting experiences for the <span className="text-primary">future</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-2xl md:text-3xl font-bold text-accent bg-dark/20 px-6 py-3 rounded-full">
              YOUR ONE STOP DIGITAL MARKETING AGENCY
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
              <FaQuoteLeft className="text-accent text-3xl mb-4 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                "Innovation is the most important part of our Success Strategy."
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Mission Section
const MissionSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Welcome to <span className="font-bold text-primary">Adifly</span> – where we transcend the confines of traditional labels. 
              We're not just another ad agency or digital marketing firm, we're your <span className="font-bold text-secondary">Brand Growth Partner</span>. 
              We break free from the ordinary, unchaining our creative spirits to explore boundless possibilities.
            </p>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Founded with passion and driven by innovation, Adifly emerges as a bold, youthful, and dedicated digital powerhouse. 
              Our mission is to consistently deliver the extraordinary. With courage in our hearts and innovation in our DNA, 
              we fearlessly embrace challenges and redefine expectations.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl text-white text-center"
            >
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                "If it's <span className="text-accent">Extraordinary</span>,<br />
                <span className="text-accent">Innovative</span> and <span className="text-accent">Result-Driven</span><br />
                It's <span className="text-accent">Adifly</span>"
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Story Section
const StorySection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-dark mb-8">
            Our <span className="text-primary">Story</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In an era of rapid digital transformation, forward-thinking entrepreneurs recognized the profound 
                shift in how brands communicate with their audiences. They observed that traditional marketing 
                methods were no longer sufficient to capture the attention of modern consumers.
              </p>
              
              <p>
                The digital revolution marked a new chapter in advertising and marketing, compelling brands and 
                businesses to navigate numerous challenges to thrive in an ever-evolving digital landscape and 
                communication environment.
              </p>
              
              <p>
                <span className="font-bold text-primary">Adifly</span> emerged at that pivotal moment, driven by a solid foundation of values 
                and extensive experience in digital innovation. With unwavering determination, Adifly began 
                providing comprehensive digital solutions to businesses seeking to harness the power of digital marketing.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border-l-4 border-primary"
              >
                <p className="font-semibold text-dark">
                  Since inception, Adifly has successfully collaborated with <span className="text-primary font-bold">500+ brands and businesses</span>, 
                  fueling our passion to transform each client's vision into extraordinary digital success stories.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <FaRocket className="text-4xl text-primary mb-4 mx-auto" />
                  <h4 className="text-2xl font-bold text-dark mb-2">Innovation</h4>
                  <p className="text-gray-600">Cutting-edge strategies</p>
                </div>
                <div className="text-center">
                  <FaUsers className="text-4xl text-secondary mb-4 mx-auto" />
                  <h4 className="text-2xl font-bold text-dark mb-2">Collaboration</h4>
                  <p className="text-gray-600">Partnership approach</p>
                </div>
                <div className="text-center">
                  <FaChartLine className="text-4xl text-accent mb-4 mx-auto" />
                  <h4 className="text-2xl font-bold text-dark mb-2">Growth</h4>
                  <p className="text-gray-600">Measurable results</p>
                </div>
                <div className="text-center">
                  <FaAward className="text-4xl text-primary mb-4 mx-auto" />
                  <h4 className="text-2xl font-bold text-dark mb-2">Excellence</h4>
                  <p className="text-gray-600">Award-winning work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: "Digital Marketing Excellence",
      description: "Comprehensive digital marketing strategies encompassing content marketing, performance marketing, and data-driven campaigns that maximize ROI."
    },
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: "Influencer Marketing",
      description: "Strategic influencer partnerships that amplify your brand message, leveraging authentic voices to build trust and drive engagement."
    },
    {
      icon: <FaLightbulb className="text-4xl text-accent" />,
      title: "Creative Content Solutions",
      description: "Compelling and engaging content that resonates with your target audience, crafted by our team of creative experts and strategists."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: "Performance Optimization",
      description: "Advanced analytics and performance marketing techniques to optimize campaigns, drive measurable results, and ensure maximum conversions."
    },
    {
      icon: <FaGem className="text-4xl text-secondary" />,
      title: "Brand Development",
      description: "Professional brand identity creation and corporate representation that showcases your business in the best light across all platforms."
    },
    {
      icon: <FaBullseye className="text-4xl text-accent" />,
      title: "Strategic Focus",
      description: "Data-driven strategies and insights that help your brand stand out from competition, engage audiences, and achieve sustainable business growth."
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
          <h2 className="text-5xl font-bold mb-8">
            Why Choose <span className="text-primary">Adifly</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Adifly is one of India's leading creative digital agencies, offering a comprehensive suite of services 
            to businesses across various industries. We specialize in innovative solutions that enhance brand presence 
            and drive digital marketing success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const values = [
    {
      icon: <FaEye className="text-4xl text-primary mb-4" />,
      title: "Our Vision",
      description: "To be the leading digital transformation partner that empowers brands to achieve extraordinary success in the digital age."
    },
    {
      icon: <FaBullseye className="text-4xl text-secondary mb-4" />,
      title: "Our Mission", 
      description: "To consistently deliver innovative, data-driven digital marketing solutions that drive measurable growth and lasting brand impact."
    },
    {
      icon: <FaHeart className="text-4xl text-accent mb-4" />,
      title: "Our Values",
      description: "Innovation, integrity, collaboration, and excellence form the foundation of everything we do for our clients and partners."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl text-center shadow-xl"
            >
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-2xl font-bold text-dark mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years of experience in digital marketing and brand strategy. Passionate about driving innovation and delivering exceptional results.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      description: "Award-winning creative strategist who brings brands to life through compelling visual storytelling and innovative campaign concepts.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b5d9d11c?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Strategy", 
      description: "Data-driven strategist specializing in performance marketing and growth optimization. Expert in turning insights into actionable results.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
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
          <h2 className="text-5xl font-bold text-dark mb-8">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the exceptional minds behind Adifly's success. Our diverse team of experts brings together 
            creativity, strategy, and innovation to deliver outstanding results for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-64 h-64 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-dark mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
              
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ scale: 1.2 }}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                )}
                {member.social.twitter && (
                  <motion.a
                    href={member.social.twitter}
                    whileHover={{ scale: 1.2 }}
                    className="text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <FaTwitter className="text-2xl" />
                  </motion.a>
                )}
                {member.social.instagram && (
                  <motion.a
                    href={member.social.instagram}
                    whileHover={{ scale: 1.2 }}
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    <FaInstagram className="text-2xl" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-dark mb-8">Our Mentor</h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
                  alt="Mentor"
                  className="w-48 h-48 rounded-full object-cover shadow-xl"
                />
                
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-dark mb-2">Dr. Rajesh Kumar</h4>
                  <p className="text-primary font-semibold mb-4">Senior Marketing Strategist & Mentor</p>
                  <p className="text-gray-700 leading-relaxed">
                    Meet our exceptional mentor, a guiding force behind our agency's success. With over 20 years 
                    of industry experience and a passion for innovation, our mentor brings invaluable knowledge 
                    and expertise to every project. From strategic insights to mentorship, they are dedicated to 
                    nurturing talent and empowering our team to deliver outstanding results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Stats Section  
const StatsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <FaRocket /> },
    { number: "250+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaStar /> },
    { number: "24/7", label: "Support Available", icon: <FaHandshake /> }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl mb-4 text-accent">{stat.icon}</div>
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your <span className="text-primary">Brand</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join us on this exhilarating journey, where the ordinary is left far behind, 
            and the extraordinary becomes the norm. Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center"
            >
              Start Your Project
              <FaArrowRight className="ml-2" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary font-bold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Learn More About Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
