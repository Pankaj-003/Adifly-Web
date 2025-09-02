// Work.jsx - Fixed with correct useInView usage
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaExternalLinkAlt, 
  FaEye, 
  FaHeart,
  FaArrowRight,
  FaPlay,
  FaExpand
} from 'react-icons/fa';

const Work = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <AnimatedTextScroller />
      <ProjectShowcase />
      <HorizontalScrollSection />
      <WorkStatsSection />
      <WorkCTASection />
    </div>
  );
};

// Fixed Hero Section with correct useInView syntax
const HeroSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  
  const title = "India's Leading Marketing Agency";
  const subtitle = "Work";
  const description = "We've served hundreds of successful projects and features for our clients.";

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-dark text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {title.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-block text-2xl md:text-4xl font-bold"
              whileHover={{ 
                scale: 1.2, 
                color: "#7cc644",
                textShadow: "0 0 20px rgba(124, 198, 68, 0.8)"
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-8xl md:text-[12rem] font-black mb-8 leading-none"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 50px rgba(255,255,255,0.5)"
          }}
        >
          {subtitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Fixed Animated Text Scroller
const AnimatedTextScroller = () => {
  const { scrollY } = useScroll();
  const velocity = useTransform(scrollY, [0, 1000], [0, 5]);
  const x = useSpring(velocity, { stiffness: 100, damping: 30 });

  const scrollTexts = [
    "CREATIVE SOLUTIONS",
    "DIGITAL INNOVATION", 
    "BRAND EXCELLENCE",
    "MARKETING MASTERY",
    "VISUAL STORYTELLING"
  ];

  return (
    <section className="py-16 bg-dark text-white overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap mb-8"
        style={{ x }}
      >
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0">
            {scrollTexts.map((text, index) => (
              <motion.span
                key={`top-${groupIndex}-${index}`}
                className="mx-12 text-4xl md:text-6xl font-black cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  color: "#7cc644",
                  textShadow: "0 0 30px #7cc644"
                }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex whitespace-nowrap"
        style={{ x: useTransform(x, value => -value * 0.8) }}
      >
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0">
            {[...scrollTexts].reverse().map((text, index) => (
              <motion.span
                key={`bottom-${groupIndex}-${index}`}
                className="mx-12 text-4xl md:text-6xl font-black cursor-pointer opacity-50"
                whileHover={{ 
                  scale: 1.1,
                  opacity: 1,
                  color: "#7cc644"
                }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// Fixed Project Showcase
const ProjectShowcase = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Revolution",
      category: "Digital Marketing",
      client: "TechCorp Solutions",
      year: "2024",
      description: "Complete digital transformation for a leading e-commerce platform with 300% growth in conversion rates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Web Design", "SEO", "PPC"],
      metrics: { views: "2.5M", engagement: "+85%", roi: "300%" }
    },
    {
      id: 2,
      title: "Brand Identity Redesign",
      category: "Branding",
      client: "InnovateTech",
      year: "2024",
      description: "Complete brand overhaul resulting in 150% increase in brand recognition and customer engagement.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      tags: ["Branding", "Logo Design", "Strategy"],
      metrics: { views: "1.8M", engagement: "+65%", roi: "220%" }
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "Social Media",
      client: "Lifestyle Co",
      year: "2024",
      description: "Viral social media campaign that reached 5M+ users and generated unprecedented brand awareness.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
      tags: ["Social Media", "Content", "Influencer"],
      metrics: { views: "5.2M", engagement: "+120%", roi: "400%" }
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-dark mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most impactful work and the remarkable results we've achieved for our clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, inView, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <FaEye />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <FaExternalLinkAlt />
                </motion.button>
              </div>
              <span className="text-accent font-bold">{project.year}</span>
            </div>
          </div>
        </motion.div>

        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-semibold">{project.client}</span>
          </div>
          <motion.div
            className="text-primary font-bold flex items-center"
            whileHover={{ x: 5 }}
          >
            View Project <FaArrowRight className="ml-2" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Modal
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-2">{project.title}</h2>
              <p className="text-primary font-semibold">{project.client} • {project.year}</p>
            </div>
            <span className="bg-primary text-white px-4 py-2 rounded-full font-semibold">
              {project.category}
            </span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-primary mb-2">{project.metrics.views}</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-secondary mb-2">{project.metrics.engagement}</div>
              <div className="text-gray-600">Engagement Increase</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-accent mb-2">{project.metrics.roi}</div>
              <div className="text-gray-600">ROI Improvement</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Additional sections with fixed useInView
const HorizontalScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  const horizontalProjects = [
    {
      title: "Digital Campaign 2024",
      subtitle: "Revolutionary Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
      color: "from-primary to-secondary"
    },
    {
      title: "Brand Evolution",
      subtitle: "Creative Excellence", 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop",
      color: "from-secondary to-accent"
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-dark">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex space-x-8">
          {horizontalProjects.map((project, index) => (
            <div
              key={index}
              className="min-w-screen h-screen flex items-center justify-center relative"
            >
              <div className={`w-96 h-[70vh] bg-gradient-to-br ${project.color} rounded-3xl p-8 flex flex-col justify-between shadow-2xl`}>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-white mb-4"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/80 text-xl"
                  >
                    {project.subtitle}
                  </motion.p>
                </div>
                
                <motion.div
                  className="w-full h-48 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WorkStatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "200+", label: "Happy Clients", icon: "😊" },
    { number: "50+", label: "Awards Won", icon: "🏆" },
    { number: "99%", label: "Client Satisfaction", icon: "⭐" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-white/80">Results that speak for themselves</p>
        </motion.div>

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
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-black mb-2">{stat.number}</div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkCTASection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-5xl font-bold mb-8">
            Ready to Create Something <span className="text-primary">Amazing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's collaborate and bring your vision to life with our proven expertise and creative solutions.
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
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
