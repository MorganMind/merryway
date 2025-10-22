'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Sparkle } from './Sparkle';
import { Trophy, MapPin, Star, TrendingUp, Heart, Users } from 'lucide-react';

export function TrailsSection() {
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

      // Combined feed data - alternating milestones and photos with real family photos
      const feedItems = [
        // First milestone: Rock Climbing
        {
          type: 'milestone',
          icon: Trophy,
          title: 'Last Get-Together',
          value: 'Rock Climbing',
          subtitle: '2 days ago',
          color: 'text-primary',
          bgColor: 'bg-primary/10',
          trend: '+2 this month',
        },
        // Rock climbing photo (corresponding to the first milestone)
        {
          type: 'photo',
          id: 1,
          image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          caption: 'Rock climbing adventure - we conquered the wall! 🧗‍♀️',
          likes: 8,
          date: '2 days ago',
          location: 'Local Gym',
        },
        // Second milestone: Most Active Crew
        {
          type: 'milestone',
          icon: Users,
          title: 'Most Active Crew',
          value: 'Morgan + Kids',
          subtitle: '8 adventures',
          color: 'text-accent-indigo',
          bgColor: 'bg-accent-indigo/10',
          trend: '+3 this week',
        },
        // Beach photo
        {
          type: 'photo',
          id: 2,
          image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
          caption: 'Beach day with the kids! 🏖️',
          likes: 12,
          date: '1 week ago',
          location: 'Santa Monica Beach',
        },
        // Additional milestones
        {
          type: 'milestone',
          icon: MapPin,
          title: 'Indoor/Outdoor Mix',
          value: '67% Outdoor',
          subtitle: '33% Indoor',
          color: 'text-accent-sparkle',
          bgColor: 'bg-accent-sparkle/10',
          trend: 'Perfect balance',
        },
        // Park photo
        {
          type: 'photo',
          id: 3,
          image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=450&fit=crop',
          caption: 'Reading time in the park',
          likes: 15,
          date: '1 week ago',
          location: 'Central Park',
        },
        {
          type: 'milestone',
          icon: Star,
          title: 'New Places',
          value: '3 discovered',
          subtitle: 'This month',
          color: 'text-primary',
          bgColor: 'bg-primary/10',
          trend: 'Exploring more',
        },
        // Family cooking photo
        {
          type: 'photo',
          id: 4,
          image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          caption: 'Cooking together in the kitchen',
          likes: 18,
          date: '3 days ago',
          location: 'Home',
        },
        {
          type: 'milestone',
          icon: Heart,
          title: 'Family Favorites',
          value: 'Park & Ice Cream',
          subtitle: '5 visits',
          color: 'text-accent-indigo',
          bgColor: 'bg-accent-indigo/10',
          trend: 'Never gets old',
        },
        // Zoo photo
        {
          type: 'photo',
          id: 5,
          image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=450&fit=crop',
          caption: 'Zoo visit with the family',
          likes: 20,
          date: '2 weeks ago',
          location: 'San Diego Zoo',
        },
        {
          type: 'milestone',
          icon: TrendingUp,
          title: 'Adventure Streak',
          value: '12 days',
          subtitle: 'Current streak',
          color: 'text-accent-sparkle',
          bgColor: 'bg-accent-sparkle/10',
          trend: 'Keep it going!',
        },
        // Movie night photo
        {
          type: 'photo',
          id: 6,
          image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=350&fit=crop',
          caption: 'Movie night at home',
          likes: 6,
          date: '2 weeks ago',
          location: 'Home',
        },
        // Bike ride photo
        {
          type: 'photo',
          id: 7,
          image: 'https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          caption: 'Bike ride through the neighborhood',
          likes: 14,
          date: '5 days ago',
          location: 'Neighborhood',
        },
        // Museum photo
        {
          type: 'photo',
          id: 8,
          image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=450&fit=crop',
          caption: 'Museum visit - learning together',
          likes: 22,
          date: '1 week ago',
          location: 'Natural History Museum',
        },
        // Picnic photo
        {
          type: 'photo',
          id: 9,
          image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
          caption: 'Picnic in the park',
          likes: 16,
          date: '4 days ago',
          location: 'Golden Gate Park',
        },
        // Art project photo
        {
          type: 'photo',
          id: 10,
          image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
          caption: 'Art project at home',
          likes: 9,
          date: '6 days ago',
          location: 'Home',
        },
      ];

  return (
    <section id="trails" className="py-20 bg-background-canvas">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-ink font-heading mb-6 tracking-wide"
            variants={itemVariants}
          >
            <span className="text-primary">Memories Unlocked</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Celebrate progress. Nudge a quick win. Keep your family in a healthy rhythm.
          </motion.p>
        </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
              <motion.h3 
                className="text-2xl font-bold text-ink font-heading mb-8 text-center"
                variants={itemVariants}
              >
                Your Family Feed
              </motion.h3>
              
              {/* Swipe-style Feed Container */}
              <div className="relative h-[600px] overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex flex-col space-y-4"
                  animate={{
                    y: [0, -400, -800, -1200, -1600, -2000, 0]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1]
                  }}
                >
                  {/* Feed items with swipe stops */}
                  {[...feedItems, ...feedItems].map((item, index) => (
                    <motion.div
                      key={`${item.type === 'milestone' ? item.title : item.id}-${index}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="w-full max-w-3xl mx-auto"
                    >
                      {item.type === 'milestone' ? (
                        // Milestone Card
                        <Card variant="elevated" className="p-8 group">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="font-semibold text-ink text-lg">
                                {item.title}
                              </h4>
                              <div className="text-2xl font-bold text-ink">
                                {item.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {item.subtitle}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-sm text-gray-500 italic">
                                {item.trend}
                              </div>
                              <motion.div
                                animate={{
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                  delay: index * 0.3,
                                }}
                                className="mt-2"
                              >
                                <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
                              </motion.div>
                            </div>
                          </div>
                        </Card>
                      ) : (
                        // Photo Card
                        <Card variant="elevated" className="p-0 overflow-hidden">
                          {/* Photo Header */}
                          <div className="flex items-center gap-3 p-4 pb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-sage rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-bold">M</span>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-ink text-sm">Morgan's Family</div>
                              <div className="text-xs text-gray-500">{item.date}</div>
                            </div>
                            <div className="text-xs text-gray-500">{item.location}</div>
                          </div>
                          
                          {/* Photo */}
                          <div className="relative">
                            <img 
                              src={item.image} 
                              alt={item.caption}
                              className="w-full h-80 object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="bg-white/90 backdrop-blur-sm rounded-full p-2"
                              >
                                <Heart className="w-4 h-4 text-red-500" />
                              </motion.div>
                            </div>
                          </div>
                          
                          {/* Photo Footer */}
                          <div className="p-4 pt-2">
                            <div className="flex items-center gap-2 mb-2">
                              <Heart className="w-4 h-4 text-red-500" />
                              <span className="text-sm font-semibold text-ink">{item.likes} likes</span>
                            </div>
                            <div className="text-sm text-ink">
                              <span className="font-semibold">Morgan's Family</span> {item.caption}
                            </div>
                          </div>
                        </Card>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            className="bg-background-soft rounded-2xl p-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkle size="md" animated={true} className="text-accent-sparkle" />
              <h3 className="text-2xl font-semibold text-ink font-heading">
                Ready to start your trail?
              </h3>
              <Sparkle size="md" animated={true} className="text-accent-sparkle" />
            </div>
            <p className="text-gray-600 mb-6">
              Every family adventure becomes part of your story. Track wins, discover patterns, 
              and build memories that last.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>No judgment, just progress</span>
              <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
