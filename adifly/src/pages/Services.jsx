import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence',
      services: [
        {
          title: 'Social Media Marketing',
          description: 'Build your brand presence across all social media platforms with engaging content and strategic campaigns.',
          icon: '📱',
          features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
        },
        {
          title: 'Performance Marketing',
          description: 'Data-driven campaigns that focus on measurable results and ROI optimization.',
          icon: '📊',
          features: ['Google Ads', 'Facebook Ads', 'ROI Tracking', 'Conversion Optimization']
        },
        {
          title: 'Search Engine Optimization',
          description: 'Improve your search rankings and organic visibility with our proven SEO strategies.',
          icon: '🔍',
          features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
        },
        {
          title: 'WhatsApp Marketing',
          description: 'Reach customers directly through personalized WhatsApp marketing campaigns.',
          icon: '💬',
          features: ['Broadcast Messages', 'Automation', 'Customer Support', 'API Integration']
        }
      ]
    },
    {
      title: 'Web Development',
      description: 'Professional websites and web applications that drive business growth',
      services: [
        {
          title: 'E-commerce Website',
          description: 'Full-featured online stores with payment integration and inventory management.',
          icon: '🛒',
          features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Mobile Responsive']
        },
        {
          title: 'Service Website',
          description: 'Professional service websites that convert visitors into customers.',
          icon: '🌐',
          features: ['Custom Design', 'CMS Integration', 'Contact Forms', 'SEO Optimized']
        },
        {
          title: 'Custom Website',
          description: 'Tailored websites built to meet your specific business requirements.',
          icon: '⚡',
          features: ['Custom Functionality', 'Database Integration', 'Third-party APIs', 'Scalable Architecture']
        }
      ]
    },
    {
      title: 'Design Services',
      description: 'Creative design solutions that make your brand stand out',
      services: [
        {
          title: 'UI/UX Design',
          description: 'User-centered design that creates exceptional digital experiences.',
          icon: '🎨',
          features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing']
        },
        {
          title: 'Logo Design',
          description: 'Memorable brand identities that make lasting impressions.',
          icon: '🎯',
          features: ['Brand Strategy', 'Logo Concepts', 'Brand Guidelines', 'File Formats']
        },
        {
          title: 'Print Design',
          description: 'Professional marketing materials for your business needs.',
          icon: '📄',
          features: ['Brochures', 'Business Cards', 'Flyers', 'Packaging Design']
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and maximize your online presence
          </p>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-4 sm:px-6 lg:px-8 ${
          categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
        }`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-700">What's Included:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and create a custom solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/work"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
