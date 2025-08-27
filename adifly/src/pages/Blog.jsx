import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Digital Marketing Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that will shape the industry.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: 'Digital Marketing',
      author: 'John Doe',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Social Media ROI',
      excerpt: 'Learn how to measure and improve your social media return on investment with proven strategies.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      category: 'Social Media',
      author: 'Jane Smith',
      date: '2024-01-12',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Web Design Trends That Convert',
      excerpt: 'Discover the latest web design trends that not only look great but also drive conversions.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      category: 'Web Design',
      author: 'Mike Johnson',
      date: '2024-01-10',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Insights, tips, and strategies to help your business thrive in the digital world
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-primary transition-colors duration-300">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-16">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Articles Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                We're working on bringing you more valuable insights and tips. 
                Subscribe to our newsletter to get notified when new articles are published.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-r-lg font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
