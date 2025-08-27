import React, { useEffect, useState } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all service cards
    document.querySelectorAll('[data-service-card]').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const marketingServices = [
    {
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all social media platforms with engaging content and strategic campaigns.',
      icon: '📱'
    },
    {
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that focus on measurable results and ROI optimization.',
      icon: '📊'
    },
    {
      title: 'Influencer Marketing',
      description: 'Connect with your audience through authentic influencer partnerships and collaborations.',
      icon: '⭐'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Improve your search rankings and organic visibility with our proven SEO strategies.',
      icon: '🔍'
    },
    {
      title: 'WhatsApp Marketing',
      description: 'Reach customers directly through personalized WhatsApp marketing campaigns.',
      icon: '💬'
    }
  ];

  const webServices = [
    {
      title: 'E-commerce Website',
      description: 'Full-featured online stores with payment integration and inventory management.',
      icon: '🛒'
    },
    {
      title: 'Service Website',
      description: 'Professional service websites that convert visitors into customers.',
      icon: '🌐'
    },
    {
      title: 'Custom Website',
      description: 'Tailored websites built to meet your specific business requirements.',
      icon: '⚡'
    }
  ];

  const designServices = [
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates exceptional digital experiences.',
      icon: '🎨'
    },
    {
      title: 'Wireframe & Prototype',
      description: 'Strategic planning and prototyping for optimal user journeys.',
      icon: '📐'
    },
    {
      title: 'Logo Design',
      description: 'Memorable brand identities that make lasting impressions.',
      icon: '🎯'
    },
    {
      title: 'Brochure Design',
      description: 'Professional marketing materials that communicate your brand effectively.',
      icon: '📄'
    },
    {
      title: 'Banner Design',
      description: 'Eye-catching banners for digital and print marketing campaigns.',
      icon: '🎪'
    }
  ];

  const ServiceCard = ({ service, index, sectionId }) => {
    const cardId = `${sectionId}-card-${index}`;
    const isVisible = visibleCards[cardId];

    return (
      <div
        id={cardId}
        data-service-card
        className={`service-card group cursor-pointer transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ 
          transitionDelay: `${index * 150}ms`,
          minHeight: '250px'
        }}
      >
        {/* Icon with hover animation */}
        <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {service.icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>
    );
  };

  return (
    <section id="services" className="section-padding bg-gray-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to grow your business and reach your target audience effectively
          </p>
        </div>

        {/* Marketing Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Digital Marketing</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                sectionId="marketing"
              />
            ))}
          </div>
        </div>

        {/* Web Development Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Web Development</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                sectionId="web"
              />
            ))}
          </div>
        </div>

        {/* Design Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Design Services</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                sectionId="design"
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-2xl text-white relative overflow-hidden transform hover:scale-102 transition-transform duration-300">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals and drive measurable growth
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
