import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive growth',
      icon: '🚀',
      link: '/services'
    },
    {
      title: 'Web Development',
      description: 'Professional websites that convert visitors into customers',
      icon: '💻',
      link: '/services'
    },
    {
      title: 'Graphic Design',
      description: 'Creative designs that make your brand stand out',
      icon: '🎨',
      link: '/services'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '250+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-secondary via-dark to-primary flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Result<br />
                  <span className="text-primary">Oriented</span><br />
                  Marketing
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-gray-200">
                  Growth<br />
                  <span className="text-accent font-semibold">Delivered</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transform your business with our comprehensive digital marketing solutions. 
                We deliver measurable results that drive growth and maximize your ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-primary hover:bg-accent text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Start Your Journey
                </Link>
                <Link 
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white/10 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-primary hover:text-secondary font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="bg-primary hover:bg-accent text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
