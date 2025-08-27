import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'design', name: 'Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features',
      image: 'https://via.placeholder.com/400x300/7cc644/ffffff?text=E-commerce+Platform',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      category: 'marketing',
      description: 'Viral social media campaign that increased engagement by 300%',
      image: 'https://via.placeholder.com/400x300/076c4e/ffffff?text=Social+Media+Campaign',
      tags: ['Social Media', 'Content', 'Analytics']
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity redesign for tech startup',
      image: 'https://via.placeholder.com/400x300/7cc644/ffffff?text=Brand+Identity',
      tags: ['Branding', 'Logo', 'Guidelines']
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      description: 'Professional corporate website with CMS integration',
      image: 'https://via.placeholder.com/400x300/076c4e/ffffff?text=Corporate+Website',
      tags: ['WordPress', 'Custom Theme', 'SEO']
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      category: 'marketing',
      description: 'Comprehensive digital marketing strategy for B2B company',
      image: 'https://via.placeholder.com/400x300/7cc644/ffffff?text=Marketing+Strategy',
      tags: ['Strategy', 'Analytics', 'ROI']
    },
    {
      id: 6,
      title: 'Mobile App Design',
      category: 'design',
      description: 'User-friendly mobile app design with modern UI/UX',
      image: 'https://via.placeholder.com/400x300/076c4e/ffffff?text=Mobile+App+Design',
      tags: ['UI/UX', 'Mobile', 'Prototyping']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent work and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-light hover:text-primary'
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-light text-secondary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
