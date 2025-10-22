'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Sparkle } from '@/components/Sparkle';
import { Calendar, Heart, Users, MapPin, Clock } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function YesterdaysPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Finding Your Merry Way: A Family\'s Journey',
      excerpt: 'How the Johnson family discovered that planning doesn\'t have to be stressful when you have the right tools.',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Family Stories',
      image: '/api/placeholder/400/250',
      author: 'Sarah Johnson',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      title: 'The Magic of Spontaneous Adventures',
      excerpt: 'Sometimes the best family moments happen when you least expect them. Here\'s how to embrace the unexpected.',
      date: 'December 10, 2024',
      readTime: '3 min read',
      category: 'Adventure',
      image: '/api/placeholder/400/250',
      author: 'Mike Chen',
      likes: 18,
      comments: 5
    },
    {
      id: 3,
      title: 'Building Family Traditions That Stick',
      excerpt: 'Creating meaningful rituals that bring your family closer together, one tradition at a time.',
      date: 'December 5, 2024',
      readTime: '7 min read',
      category: 'Traditions',
      image: '/api/placeholder/400/250',
      author: 'Emma Rodriguez',
      likes: 31,
      comments: 12
    },
    {
      id: 4,
      title: 'From Chaos to Calm: Organizing Family Life',
      excerpt: 'Practical tips for managing the beautiful chaos of family life while keeping everyone happy.',
      date: 'November 28, 2024',
      readTime: '6 min read',
      category: 'Organization',
      image: '/api/placeholder/400/250',
      author: 'David Kim',
      likes: 22,
      comments: 7
    }
  ];

  return (
    <div className="min-h-screen bg-background-canvas">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-ink font-heading mb-6 tracking-wide"
                variants={itemVariants}
              >
                <span className="text-primary">Yesterdays</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Stories, tips, and insights from families who are finding their merry way. 
                Real experiences, real moments, real magic.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    className="group"
                  >
                    <Card variant="elevated" className="p-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/3">
                          <div className="aspect-video md:aspect-square bg-gray-100 flex items-center justify-center">
                            <div className="text-gray-400 text-sm">Featured Image</div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h2 className="text-2xl font-bold text-ink font-heading mb-3 group-hover:text-primary transition-colors duration-200">
                            {post.title}
                          </h2>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{post.comments} comments</span>
                              </div>
                            </div>
                            
                            <Button variant="secondary" size="sm">
                              Read More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                className="text-center mt-12"
                variants={itemVariants}
              >
                <Button variant="primary" size="lg" withSparkle>
                  Load More Stories
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkle size="md" animated={true} className="text-accent-sparkle" />
                  <h3 className="text-2xl font-semibold text-ink font-heading">
                    Stay in the Loop
                  </h3>
                  <Sparkle size="md" animated={true} className="text-accent-sparkle" />
                </div>
                <p className="text-gray-600 mb-6">
                  Get the latest family stories, tips, and Merryway updates delivered to your inbox.
                </p>
                <div className="flex gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button variant="primary" withSparkle>
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
