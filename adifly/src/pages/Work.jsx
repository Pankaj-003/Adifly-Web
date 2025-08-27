import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeFilter]);

  const categories = [
    { id: 'all', name: 'All Projects', count: 18 },
    { id: 'web', name: 'Website Development', count: 8 },
    { id: 'design', name: 'Graphic Design', count: 6 },
    { id: 'marketing', name: 'Digital Marketing', count: 4 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Roxy Home Appliances',
      category: 'web',
      description: 'Elevate your home with Roxy Home Appliances – where innovation meets comfort. Experience the perfect blend of style and performance.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&crop=center',
      tags: ['E-commerce', 'React', 'Payment Gateway'],
      client: 'Roxy Appliances Ltd.',
      year: '2024',
      category_color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Ikonish uPVC',
      category: 'web',
      description: 'Eastern India\'s sole manufacturer of premium uPVC profiles, blending durability, elegance, and sustainability.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=400&fit=crop&crop=center',
      tags: ['Corporate Website', 'Manufacturing', 'SEO'],
      client: 'Ikonish Industries',
      year: '2024',
      category_color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Protein House Qatar',
      category: 'web',
      description: 'The ultimate destination for top-quality supplements in Qatar. Wide range of trusted brands for your fitness journey.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&crop=center',
      tags: ['E-commerce', 'Fitness', 'Multi-language'],
      client: 'Protein House LLC',
      year: '2024',
      category_color: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'FlightWale Booking Portal',
      category: 'web',
      description: 'Experience seamless travel booking with user-friendly, efficient, and visually stunning journey planning.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=400&fit=crop&crop=center',
      tags: ['Travel Portal', 'Booking System', 'API Integration'],
      client: 'FlightWale Technologies',
      year: '2024',
      category_color: 'bg-blue-500'
    },
    {
      id: 5,
      title: 'Anantmm City Haryana',
      category: 'web',
      description: 'Where elegance meets perfection, spanning 26.44 acres in Haryana. Experience harmonious blend of convenience and serenity.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop&crop=center',
      tags: ['Real Estate', 'Property Portal', 'Virtual Tour'],
      client: 'Anantmm Developers',
      year: '2024',
      category_color: 'bg-blue-500'
    },
    {
      id: 6,
      title: 'Mahadhyutta Group',
      category: 'web',
      description: 'Modern, user-friendly website highlighting real estate expertise, visionary projects, and commitment to innovation.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop&crop=center',
      tags: ['Real Estate', 'Corporate', 'CMS'],
      client: 'Mahadhyutta Group',
      year: '2024',
      category_color: 'bg-blue-500'
    },
    {
      id: 7,
      title: 'Alstone Brand Partnership',
      category: 'design',
      description: 'Official Partnership design materials for Alstone x RCB collaboration, celebrating strength and innovation.',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=500&h=400&fit=crop&crop=center',
      tags: ['Brand Partnership', 'Sports Marketing', 'Creative Campaign'],
      client: 'Alstone Industries',
      year: '2024',
      category_color: 'bg-purple-500'
    },
    {
      id: 8,
      title: 'Product CGI Animation',
      category: 'design',
      description: 'Transform your marketing with CGI videos. High-quality visuals that captivate your audience without expensive shoots.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop&crop=center',
      tags: ['CGI Animation', '3D Modeling', 'Product Visualization'],
      client: 'Tech Startups',
      year: '2024',
      category_color: 'bg-purple-500'
    },
    {
      id: 9,
      title: 'Corporate Brand Identity',
      category: 'design',
      description: 'Complete brand identity design including logo, business cards, letterheads, and comprehensive brand guidelines.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop&crop=center',
      tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines'],
      client: 'Various Corporates',
      year: '2024',
      category_color: 'bg-purple-500'
    },
    {
      id: 10,
      title: 'Motion Graphics Campaign',
      category: 'design',
      description: 'Dynamic motion graphics and video content for social media campaigns and digital advertising.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=400&fit=crop&crop=center',
      tags: ['Motion Graphics', 'Video Production', 'Social Media'],
      client: 'Fashion Brands',
      year: '2024',
      category_color: 'bg-purple-500'
    },
    {
      id: 11,
      title: 'Billboard & Signage Design',
      category: 'design',
      description: 'Large format designs for outdoor advertising and business signage with high impact visual communication.',
      image: 'https://images.unsplash.com/photo-1541140184049-b98b925e8b70?w=500&h=400&fit=crop&crop=center',
      tags: ['Billboard Design', 'Signage', 'Outdoor Advertising'],
      client: 'Retail Chains',
      year: '2024',
      category_color: 'bg-purple-500'
    },
    {
      id: 12,
      title: 'Packaging Design Series',
      category: 'design',
      description: 'Innovative packaging design that combines visual appeal with market impact for various consumer products.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=400&fit=crop&crop=center',
      tags: ['Packaging Design', 'Print Design', '3D Visualization'],
      client: 'FMCG Brands',
      year: '2023',
      category_color: 'bg-purple-500'
    },
    {
      id: 13,
      title: 'BigMuscles Social Campaign',
      category: 'marketing',
      description: 'Comprehensive social media strategy and content creation for fitness supplement brand BigMuscles.',
      image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?w=500&h=400&fit=crop&crop=center',
      tags: ['Social Media', 'Content Strategy', 'Fitness Industry'],
      client: 'BigMuscles Nutrition',
      year: '2024',
      category_color: 'bg-green-500'
    },
    {
      id: 14,
      title: 'Performance Marketing ROI',
      category: 'marketing',
      description: 'Data-driven performance marketing campaign that increased ROI by 300% through targeted advertising strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center',
      tags: ['Performance Marketing', 'ROI Optimization', 'Data Analytics'],
      client: 'E-commerce Startups',
      year: '2024',
      category_color: 'bg-green-500'
    },
    {
      id: 15,
      title: 'Influencer Marketing Strategy',
      category: 'marketing',
      description: 'Strategic influencer partnerships that generated 50M+ impressions and significant brand awareness across platforms.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=400&fit=crop&crop=center',
      tags: ['Influencer Marketing', 'Brand Awareness', 'Social Campaigns'],
      client: 'Fashion Retailers',
      year: '2024',
      category_color: 'bg-green-500'
    },
    {
      id: 16,
      title: 'SEO Growth Campaign',
      category: 'marketing',
      description: 'Comprehensive SEO strategy that improved organic traffic by 250% and search rankings significantly.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop&crop=center',
      tags: ['SEO', 'Content Marketing', 'Organic Growth'],
      client: 'SaaS Companies',
      year: '2024',
      category_color: 'bg-green-500'
    },
    {
      id: 17,
      title: 'Titiksa Developers Portal',
      category: 'web',
      description: 'Sleek website showcasing premium real estate projects, innovative designs, and commitment to excellence.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&h=400&fit=crop&crop=center',
      tags: ['Real Estate', 'Premium Design', 'Interactive'],
      client: 'Titiksa Developers',
      year: '2023',
      category_color: 'bg-blue-500'
    },
    {
      id: 18,
      title: 'Maharaja Agarsain Niwas',
      category: 'web',
      description: 'Best hostel facility for girls with spacious rooms, great ambience, and top-notch security features.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop&crop=center',
      tags: ['Hospitality', 'Booking System', 'Security Features'],
      client: 'Maharaja Agarsain Trust',
      year: '2023',
      category_color: 'bg-blue-500'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
  };

  const ProjectCard = ({ project, index }) => (
    <div 
      className="project-card opacity-0 transform translate-y-8"
      style={{ 
        animationDelay: `${index * 100}ms`,
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-4 hover:scale-[1.02] relative">
        {/* Floating animation on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        
        {/* Image Container with advanced hover effects */}
        <div className="relative overflow-hidden h-64">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
          
          {/* Gradient overlay with animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Animated overlay content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <div className="text-center space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-accent shadow-xl">
                View Project
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transform scale-75 group-hover:scale-100 transition-all duration-500 hover:bg-white/30 shadow-xl">
                Live Demo
              </button>
            </div>
          </div>

          {/* Category Badge with animation */}
          <div className="absolute top-4 left-4 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
            <span className={`${project.category_color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
              {categories.find(cat => cat.id === project.category)?.name}
            </span>
          </div>

          {/* Year badge */}
          <div className="absolute top-4 right-4 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
            <span className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content with stagger animations */}
        <div className="p-6 relative z-20">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 transform group-hover:translate-x-1 transition-transform duration-300">
            {project.description}
          </p>

          {/* Tags with stagger animation */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="bg-light text-secondary px-3 py-1 rounded-full text-xs font-medium transform group-hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-white"
                style={{ transitionDelay: `${tagIndex * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              Client: {project.client}
            </span>
            <div className="flex space-x-3">
              <button className="text-primary hover:text-secondary transition-colors duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </button>
              <button className="text-primary hover:text-secondary transition-colors duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section className="min-h-screen bg-gradient-to-br from-secondary via-dark to-primary text-white flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0" ref={heroRef}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s' }}></div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Main title with typewriter effect */}
            <div className={`mb-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                  Our
                </span>{' '}
                <span className="text-accent inline-block animate-text-reveal" style={{ animationDelay: '0.4s' }}>
                  Work
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 transform scale-x-0 animate-scale-x" style={{ animationDelay: '0.8s' }}></div>
            </div>

            <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
                We've served hundreds of successful projects and features for our clients. 
                Each project reflects our commitment to excellence and innovation.
              </p>
            </div>

            {/* Animated stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12 transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '250+', label: 'Happy Clients' },
                { number: '15+', label: 'Industries Served' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center transform hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-count-up">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className={`transform transition-all duration-1000 delay-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="animate-bounce cursor-pointer" onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                  <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
                <p className="text-sm mt-2 opacity-70">Scroll to explore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white sticky top-20 z-40 shadow-md" ref={projectsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveFilter(category.id);
                  setVisibleProjects(6);
                }}
                className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-light hover:text-primary shadow-md hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 flex items-center">
                  {category.name}
                  <span className="ml-2 text-sm opacity-75 bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </span>
                
                {/* Animated background */}
                {activeFilter !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <button
                onClick={loadMore}
                className="group bg-gradient-to-r from-primary to-secondary text-white font-semibold px-12 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Load More Projects
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section with 3D effect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary via-dark to-primary text-white relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient-shift"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='53' cy='7' r='2'/%3E%3Ccircle cx='53' cy='53' r='2'/%3E%3Ccircle cx='7' cy='53' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 20s linear infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-5xl font-bold mb-6 animate-text-reveal">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Join our growing list of satisfied clients and let us help you achieve your business goals 
              with innovative solutions and exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="group bg-white text-primary hover:bg-gray-100 font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link 
                to="/services"
                className="group border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">View Services</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
