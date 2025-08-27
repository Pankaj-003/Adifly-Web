import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      client: 'Tech Startup Inc.',
      year: '2024'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity redesign for growing technology company.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tags: ['Branding', 'Logo Design', 'Guidelines'],
      client: 'Innovation Labs',
      year: '2024'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'marketing',
      description: 'Comprehensive social media strategy that increased engagement by 300%.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['Social Media', 'Content Strategy', 'Analytics'],
      client: 'Fashion Brand Co.',
      year: '2024'
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      description: 'Professional corporate website with custom CMS and advanced functionality.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['WordPress', 'Custom Theme', 'SEO'],
      client: 'Corporate Solutions Ltd.',
      year: '2024'
    },
    {
      id: 5,
      title: 'Mobile App Design',
      category: 'design',
      description: 'User-friendly mobile app design with modern UI/UX principles.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      tags: ['UI/UX', 'Mobile Design', 'Prototyping'],
      client: 'App Startup',
      year: '2023'
    },
    {
      id: 6,
      title: 'Digital Marketing Strategy',
      category: 'marketing',
      description: 'Data-driven marketing strategy that improved ROI by 250%.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop',
      tags: ['Strategy', 'Analytics', 'ROI'],
      client: 'SaaS Company',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-accent">Work</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            We've served hundreds of successful projects and features for our clients. 
            Each project reflects our commitment to excellence and innovation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '250+', label: 'Happy Clients' },
              { number: '15+', label: 'Industries Served' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-light hover:text-primary shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-light text-secondary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Client: {project.client}</span>
                    <button className="text-primary hover:text-secondary transition-colors duration-300">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing list of satisfied clients and let us help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
