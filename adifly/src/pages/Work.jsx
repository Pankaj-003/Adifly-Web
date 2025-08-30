import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'All Projects', count: 18 },
  { id: 'web', name: 'Website Development', count: 8 },
  { id: 'design', name: 'Graphic Design', count: 6 },
  { id: 'marketing', name: 'Digital Marketing', count: 4 },
];

const projects = [
  // Web
  {
    id: 1,
    title: 'Roxy Home Appliances',
    category: 'web',
    description:
      'Elevate your home with Roxy – where innovation meets comfort. The perfect blend of style and performance.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=600&fit=crop&crop=center',
    tags: ['E-commerce', 'React', 'Payment Gateway'],
    client: 'Roxy Appliances Ltd.',
    year: '2024',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Ikonish uPVC',
    category: 'web',
    description:
      "Eastern India's sole manufacturer of premium uPVC profiles, blending durability, elegance, and sustainability.",
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop&crop=center',
    tags: ['Corporate Website', 'Manufacturing', 'SEO'],
    client: 'Ikonish Industries',
    year: '2024',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Protein House Qatar',
    category: 'web',
    description:
      'Top-quality supplements in Qatar. A wide range of trusted brands for your fitness journey.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=600&fit=crop&crop=center',
    tags: ['E-commerce', 'Fitness', 'Multi-language'],
    client: 'Protein House LLC',
    year: '2024',
    color: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'FlightWale Booking Portal',
    category: 'web',
    description:
      'Seamless travel booking with user-friendly, efficient, and visually stunning journey planning.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=600&fit=crop&crop=center',
    tags: ['Travel Portal', 'Booking System', 'API Integration'],
    client: 'FlightWale Technologies',
    year: '2024',
    color: 'bg-blue-500',
  },
  {
    id: 5,
    title: 'Anantmm City Haryana',
    category: 'web',
    description:
      'Elegance meets perfection across 26.44 acres. A harmonious blend of convenience and serenity.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop&crop=center',
    tags: ['Real Estate', 'Property Portal', 'Virtual Tour'],
    client: 'Anantmm Developers',
    year: '2024',
    color: 'bg-blue-500',
  },
  {
    id: 6,
    title: 'Mahadhyutta Group',
    category: 'web',
    description:
      'Modern website highlighting real estate expertise, visionary projects, and innovation.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=600&fit=crop&crop=center',
    tags: ['Real Estate', 'Corporate', 'CMS'],
    client: 'Mahadhyutta Group',
    year: '2024',
    color: 'bg-blue-500',
  },
  {
    id: 17,
    title: 'Titiksa Developers Portal',
    category: 'web',
    description:
      'Sleek site showcasing premium real estate projects, innovative designs, and excellence.',
    image:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&h=600&fit=crop&crop=center',
    tags: ['Real Estate', 'Premium Design', 'Interactive'],
    client: 'Titiksa Developers',
    year: '2023',
    color: 'bg-blue-500',
  },
  {
    id: 18,
    title: 'Maharaja Agarsain Niwas',
    category: 'web',
    description:
      'Best hostel facility for girls with spacious rooms, ambience, and top-notch security features.',
    image:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&h=600&fit=crop&crop=center',
    tags: ['Hospitality', 'Booking System', 'Security Features'],
    client: 'Maharaja Agarsain Trust',
    year: '2023',
    color: 'bg-blue-500',
  },

  // Design
  {
    id: 7,
    title: 'Alstone x RCB Partnership',
    category: 'design',
    description:
      'Official partnership visuals celebrating strength and innovation with RCB.',
    image:
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&h=600&fit=crop&crop=center',
    tags: ['Brand Partnership', 'Sports Marketing', 'Creative Campaign'],
    client: 'Alstone Industries',
    year: '2024',
    color: 'bg-purple-500',
  },
  {
    id: 8,
    title: 'Product CGI Animation',
    category: 'design',
    description:
      'High-impact CGI videos and visuals that captivate without costly shoots.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop&crop=center',
    tags: ['CGI Animation', '3D Modeling', 'Visualization'],
    client: 'Tech Startups',
    year: '2024',
    color: 'bg-purple-500',
  },
  {
    id: 9,
    title: 'Corporate Brand Identity',
    category: 'design',
    description:
      'Logo, stationery, and brand guidelines for a cohesive identity.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop&crop=center',
    tags: ['Brand Identity', 'Logo Design', 'Guidelines'],
    client: 'Various Corporates',
    year: '2024',
    color: 'bg-purple-500',
  },
  {
    id: 10,
    title: 'Motion Graphics Campaign',
    category: 'design',
    description:
      'Dynamic motion graphics and video content for social ads.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&h=600&fit=crop&crop=center',
    tags: ['Motion Graphics', 'Video', 'Social Media'],
    client: 'Fashion Brands',
    year: '2024',
    color: 'bg-purple-500',
  },
  {
    id: 11,
    title: 'Billboard & Signage Design',
    category: 'design',
    description:
      'High-impact outdoor designs for retail and brand awareness.',
    image:
      'https://images.unsplash.com/photo-1541140184049-b98b925e8b70?w=900&h=600&fit=crop&crop=center',
    tags: ['Billboard', 'Signage', 'Outdoor'],
    client: 'Retail Chains',
    year: '2024',
    color: 'bg-purple-500',
  },
  {
    id: 12,
    title: 'Packaging Design Series',
    category: 'design',
    description:
      'Innovative packaging that blends aesthetics with market impact.',
    image:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&h=600&fit=crop&crop=center',
    tags: ['Packaging', 'Print', '3D'],
    client: 'FMCG Brands',
    year: '2023',
    color: 'bg-purple-500',
  },

  // Marketing
  {
    id: 13,
    title: 'BigMuscles Social Campaign',
    category: 'marketing',
    description:
      'Social strategy and content creation for massive engagement.',
    image:
      'https://images.unsplash.com/photo-1434596922112-19c563067271?w=900&h=600&fit=crop&crop=center',
    tags: ['Social Media', 'Content Strategy', 'Fitness'],
    client: 'BigMuscles Nutrition',
    year: '2024',
    color: 'bg-green-500',
  },
  {
    id: 14,
    title: 'Performance Marketing ROI',
    category: 'marketing',
    description:
      'ROI-focused ads that scaled revenue with precise targeting.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&crop=center',
    tags: ['Performance', 'Optimization', 'Analytics'],
    client: 'E-commerce Startups',
    year: '2024',
    color: 'bg-green-500',
  },
  {
    id: 15,
    title: 'Influencer Marketing Strategy',
    category: 'marketing',
    description:
      '50M+ impressions via curated creator partnerships.',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&h=600&fit=crop&crop=center',
    tags: ['Influencers', 'Awareness', 'Campaigns'],
    client: 'Fashion Retailers',
    year: '2024',
    color: 'bg-green-500',
  },
  {
    id: 16,
    title: 'SEO Growth Campaign',
    category: 'marketing',
    description:
      'Organic traffic up 250% with technical and content SEO.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop&crop=center',
    tags: ['SEO', 'Content', 'Organic'],
    client: 'SaaS Companies',
    year: '2024',
    color: 'bg-green-500',
  },
];

const Work = () => {
  const [active, setActive] = useState('all');
  const [visible, setVisible] = useState(6);
  const heroRef = useRef(null);

  // Parallax header accents
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY * 0.3;
      heroRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('animate-in');
        }),
      { threshold: 0.12, rootMargin: '80px' }
    );
    document.querySelectorAll('.project-card').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active, visible]);

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  const shown = filtered.slice(0, visible);

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-secondary via-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0" ref={heroRef}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <div className="absolute -top-10 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Our <span className="text-accent">Work</span>
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 animate-scale-x" />
            <p className="text-lg md:text-2xl opacity-90 max-w-4xl mx-auto">
              We’ve served hundreds of successful projects and features for our clients. Let’s make something great.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setActive(c.id);
                  setVisible(6);
                }}
                className={`group relative px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  active === c.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-light hover:text-primary'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="relative z-10 flex items-center">
                  {c.name}
                  <span
                    className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      active === c.id ? 'bg-white/20 text-white' : 'bg-white text-gray-700'
                    }`}
                  >
                    {c.count}
                  </span>
                </span>
                {active !== c.id && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shown.map((p, idx) => (
              <div
                key={p.id}
                className="project-card opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                  {/* Media */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[0.5deg]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Overlay actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors duration-300">
                          View Project
                        </button>
                        <button className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300">
                          Live Demo
                        </button>
                      </div>
                    </div>
                    {/* Badges */}
                    <div className="absolute top-4 left-4">
                      <span className={`${p.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow`}>
                        {categories.find((c) => c.id === p.category)?.name}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/40 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur">
                        {p.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-light text-secondary hover:bg-primary hover:text-white transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Client: {p.client}</span>
                      <Link to="/contact" className="text-primary hover:text-secondary font-semibold">
                        Enquire →
                      </Link>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          {visible < filtered.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisible((v) => Math.min(v + 6, filtered.length))}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-10 py-4 rounded-full hover:shadow-xl transition-all"
              >
                Load More Projects
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute inset-0 bg-white/10 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary via-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0 animate-gradient-shift bg-[length:400%_400%] opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            Join our growing list of satisfied clients and achieve your goals with innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-white text-primary font-bold px-10 py-4 rounded-full hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all relative overflow-hidden"
            >
              <span className="relative z-10">View Services</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
