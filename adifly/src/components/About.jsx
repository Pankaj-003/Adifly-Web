import React from 'react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Results',
      description: 'Every strategy is designed to deliver measurable business outcomes.',
      icon: '🎯'
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, committed to your success.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'Quality and attention to detail in everything we create.',
      icon: '⭐'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-primary">Adifly</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We are a leading digital marketing agency dedicated to helping businesses 
                achieve exceptional growth through innovative strategies and cutting-edge solutions.
              </p>
              <p>
                Our team of experts combines creativity with data-driven insights to deliver 
                campaigns that not only look great but also drive real, measurable results 
                for your business.
              </p>
              <p>
                From startups to enterprises, we've helped hundreds of clients across various 
                industries establish their digital presence and achieve their growth objectives.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-secondary mb-8">Our Values</h3>
            {values.map((value, index) => (
              <div key={value.title} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-light transition-colors duration-300">
                <div className="text-3xl">{value.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-secondary to-primary p-12 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              To empower businesses with innovative digital marketing solutions that drive growth, 
              build lasting relationships with customers, and create sustainable competitive advantages 
              in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
