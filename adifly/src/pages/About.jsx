import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Digital marketing expert with 10+ years of experience in helping businesses grow online.'
    },
    {
      name: 'Jane Smith',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b381d88d?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning designer with expertise in brand identity and digital experiences.'
    },
    {
      name: 'Mike Johnson',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in modern web technologies and scalable solutions.'
    }
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">Adifly</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We are a leading digital marketing agency dedicated to helping businesses achieve 
            exceptional growth through innovative strategies and cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, Adifly began with a simple mission: to help businesses 
                  thrive in the digital age. What started as a small team of passionate 
                  marketers has grown into a full-service digital agency.
                </p>
                <p>
                  Our journey has been driven by our commitment to delivering exceptional 
                  results for our clients. We combine creativity with data-driven insights 
                  to create campaigns that not only look great but also drive real, 
                  measurable business growth.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses across various 
                  industries establish their digital presence and achieve their growth objectives.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Our team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make the magic happen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business grow and succeed online
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
