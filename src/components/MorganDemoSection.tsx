'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';
import { Sparkle } from './Sparkle';
import { MessageCircle, MapPin, Clock, Users, CheckCircle, Heart, Star } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';

export function MorganDemoSection() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Define the conversation flow
  const conversation = useMemo(() => [
    // Scene 1: Research
    { type: 'morgan', text: 'Here are two great options for your family:', delay: 1000 },
    { type: 'research-card', delay: 3000 },
    { type: 'typing', delay: 5000 },
    { type: 'user', text: 'Perfect! Add this to our Saturday plan', delay: 7000 },
    
    // Scene 2: Adding to Plan
    { type: 'morgan', text: 'Great choice! I\'ve added it to your Saturday plan:', delay: 9000 },
    { type: 'plan-card', delay: 11000 },
    { type: 'typing', delay: 13000 },
    { type: 'user', text: 'How was the climbing session?', delay: 15000 },
    
    // Scene 3: Review
    { type: 'morgan', text: 'I\'d love to hear how it went! This helps me suggest better activities for your family:', delay: 17000 },
    { type: 'review-card', delay: 19000 },
  ], []);
  
  // Progress through conversation with looping
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const startConversation = () => {
      // Clear any existing timeouts
      timeouts.forEach(clearTimeout);
      timeouts = [];
      
      conversation.forEach((message, index) => {
        const timeout = setTimeout(() => {
          setCurrentMessage(index);
          if (message.type === 'typing') {
            setIsTyping(true);
            setTimeout(() => setIsTyping(false), 1000);
          }
          // Auto-scroll to bottom
          setTimeout(() => {
            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
          }, 200);
        }, message.delay);
        timeouts.push(timeout);
      });
      
      // Reset after full conversation (21 seconds) and restart
      const resetTimeout = setTimeout(() => {
        setCurrentMessage(0);
        setIsTyping(false);
        // Restart the conversation
        setTimeout(startConversation, 1000);
      }, 21000);
      timeouts.push(resetTimeout);
    };
    
    // Start the first conversation
    startConversation();
    
    return () => timeouts.forEach(clearTimeout);
  }, [conversation]);

  // Auto-scroll to bottom whenever currentMessage changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [currentMessage, isTyping]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  const features = [
    {
      icon: Users,
      title: 'Understands your crew',
      description: 'Time of day, weather, energy, budget—Merryway suggests what fits you.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: CheckCircle,
      title: 'Turns yes into done',
      description: 'One tap from idea → plan → itinerary → calendar hold.',
      color: 'text-accent-indigo',
      bgColor: 'bg-accent-indigo/10',
    },
    {
      icon: Heart,
      title: 'Memories that matter',
      description: 'Auto-collects wins into a private family reel.',
      color: 'text-accent-sparkle',
      bgColor: 'bg-accent-sparkle/10',
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Why{' '}
            <span className="text-primary">Merryway</span>
            ?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Three simple reasons why families are finding their merry way with us. See how we turn your ideas into plans that actually happen.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Chat Interface */}
            <div>
              <Card variant="elevated" className="p-8">
            <div ref={chatContainerRef} className="space-y-4 h-96 overflow-y-auto scrollbar-hide" id="chat-container">
              {/* Dynamic conversation that builds up */}
              {conversation.slice(0, currentMessage + 1).map((message, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Morgan messages */}
                  {message.type === 'morgan' && (
                    <>
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-background-soft rounded-2xl rounded-tl-md px-6 py-4 max-w-2xl">
                          <p className="text-sm text-gray-700">{message.text}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* User messages */}
                  {message.type === 'user' && (
                    <div className="flex justify-end w-full">
                      <div className="bg-primary text-white rounded-2xl rounded-br-md px-6 py-3 max-w-md">
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  )}

                  {/* Research Card */}
                  {message.type === 'research-card' && (
                    <>
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-background-soft rounded-2xl rounded-tl-md px-6 py-4 max-w-2xl">
                          <motion.div
                            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-ink text-sm mb-1">
                                  Indoor Rock Climbing
                                </h4>
                                <p className="text-xs text-gray-600">
                                  Perfect for active families, all ages welcome
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-gray-500">2.1 mi</div>
                                <div className="text-xs text-gray-500">$15/person</div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                                Active
                              </span>
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                                Indoor
                              </span>
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                                All ages
                              </span>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>2-3 hours</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                <span>2-6 people</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>Downtown</span>
                              </div>
                            </div>

                            <Button variant="primary" size="sm" className="w-full">
                              Add to Plan
                            </Button>
                          </motion.div>

                          <div className="mt-4 text-xs text-gray-500">
                            <p>• Filters by quiet hours, supervision, travel radius</p>
                            <p>• Privacy-safe (coarse locations only)</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Plan Card */}
                  {message.type === 'plan-card' && (
                    <>
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-background-soft rounded-2xl rounded-tl-md px-6 py-4 max-w-2xl">
                          <motion.div
                            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <h4 className="font-semibold text-ink text-sm">
                                  Saturday Plan
                                </h4>
                              </div>
                              <div className="text-xs text-gray-500">2:00 PM</div>
                            </div>
                            
                            <div className="bg-green-50 rounded-lg p-3 mb-3">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                                  <span className="text-green-600 text-xs">✓</span>
                                </div>
                                <span className="text-sm font-medium text-green-800">Rock Climbing Added</span>
                              </div>
                              <p className="text-xs text-green-700">Downtown Climbing Center • 2:00-4:30 PM</p>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <Clock className="w-3 h-3" />
                              <span>2.5 hours</span>
                              <span className="mx-1">•</span>
                              <span>$60 total</span>
                            </div>
                          </motion.div>

                          <div className="mt-4 text-xs text-gray-500">
                            <p>• Calendar hold created</p>
                            <p>• Directions & parking info sent</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Review Card */}
                  {message.type === 'review-card' && (
                    <>
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-background-soft rounded-2xl rounded-tl-md px-6 py-4 max-w-2xl">
                          <motion.div
                            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-ink text-sm">
                                Quick Review
                              </h4>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="w-3 h-3 bg-accent-sparkle rounded-full opacity-60"></div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-xs text-gray-700">Kids loved it</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-xs text-gray-700">Good for rainy days</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-xs text-gray-700">Would do again</span>
                              </div>
                            </div>

                            <Button variant="secondary" size="sm" className="w-full mt-3">
                              Save Review
                            </Button>
                          </motion.div>

                          <div className="mt-4 text-xs text-gray-500">
                            <p>• Your feedback improves future suggestions</p>
                            <p>• Photos automatically saved to Yesterday</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-background-soft rounded-2xl rounded-tl-md px-6 py-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </Card>

          {/* Microcopy */}
          <motion.div
            className="text-center mt-8"
            variants={itemVariants}
          >
            <p className="text-gray-600 mb-4">
              Ask anything. We blend web research with your household&apos;s rhythms.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Sparkle size="sm" animated={true} className="text-accent-sparkle" />
              <span>Powered by gentle AI, designed for families</span>
              <Sparkle size="sm" animated={true} className="text-accent-sparkle" />
            </div>
          </motion.div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-ink font-heading mb-6"
                variants={itemVariants}
              >
                Why Merryway works
              </motion.h3>
              
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-background-soft/50 transition-colors duration-200"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-ink text-lg mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
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
                    className="mt-1"
                  >
                    <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Proof Section */}
          <motion.div
            className="mt-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-ink font-heading mb-4">
                Follow a script that&apos;s better than the movies...
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of families who&apos;ve found their merry way with us
              </p>
            </motion.div>

            {/* Netflix-style Movie Browsing Carousel */}
            <div className="relative flex justify-center">
              {/* Carousel Container */}
              <div className="overflow-hidden" style={{ width: '960px', margin: '0 auto' }}>
                <motion.div 
                  className="flex gap-4 pb-4"
                  animate={{
                    x: [0, -320, -640, -960, -1280, -1600, 0]
                  }}
                  transition={{
                    duration: 125,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1]
                  }}
                  style={{ width: 'max-content' }}
                >
                  {/* Movie Card 1 - Weekend Adventures */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative group cursor-pointer flex-shrink-0"
                    style={{ width: '300px' }}
                  >
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-80 relative">
                      <Image 
                        src="/thegreatoutdoors.png" 
                        alt="Family playing together"
                        width={400}
                        height={320}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-end p-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                              Family Comedy
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            Weekend Adventures
                          </h3>
                          <div className="text-xs text-gray-300">2024 • Family • 2h 15m</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review content below the card */}
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        &ldquo;Merryway has transformed our chaotic weekends into organized adventures...&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">- Sarah M.</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">4.9</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Movie Card 2 - Memory Lane */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative group cursor-pointer flex-shrink-0"
                    style={{ width: '300px' }}
                  >
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-80 relative">
                      <Image 
                        src="/memorylane.png" 
                        alt="Family creating memories"
                        width={400}
                        height={320}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-end p-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                              Family Drama
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            Memory Lane
                          </h3>
                          <div className="text-xs text-gray-300">2024 • Family • 1h 45m</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review content below the card */}
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        &ldquo;Finally, a family planner that actually works! The memory features...&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">- David L.</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">4.8</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Movie Card 3 - Game Night */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative group cursor-pointer flex-shrink-0"
                    style={{ width: '300px' }}
                  >
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-80 relative">
                      <Image 
                        src="/betteryesterdays.png" 
                        alt="Family having fun together"
                        width={400}
                        height={320}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-end p-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                              Family Fun
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            Game Night
                          </h3>
                          <div className="text-xs text-gray-300">2024 • Family • 1h 30m</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review content below the card */}
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        &ldquo;The memory match game keeps our whole family engaged...&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">- Emily R.</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">4.9</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Movie Card 4 - Kitchen Stories */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative group cursor-pointer flex-shrink-0"
                    style={{ width: '300px' }}
                  >
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-80 relative">
                      <Image 
                        src="/kitchenstories.png" 
                        alt="Family cooking together"
                        width={400}
                        height={320}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-end p-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                              Family Cooking
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            Kitchen Stories
                          </h3>
                          <div className="text-xs text-gray-300">2024 • Family • 1h 20m</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review content below the card */}
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        &ldquo;Cooking together has become our favorite family tradition...&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">- Maria S.</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">4.7</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Movie Card 5 - Story Time */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative group cursor-pointer flex-shrink-0"
                    style={{ width: '300px' }}
                  >
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-80 relative">
                      <Image 
                        src="https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" 
                        alt="Family reading together"
                        width={400}
                        height={320}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-end p-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                              Family Learning
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            Story Time
                          </h3>
                          <div className="text-xs text-gray-300">2024 • Family • 45m</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review content below the card */}
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        &ldquo;Reading together creates the most magical family moments...&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">- James K.</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">4.9</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Movie Card 6 - Nature Walk */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative group cursor-pointer flex-shrink-0"
                    style={{ width: '300px' }}
                  >
                    <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-80 relative">
                      <Image 
                        src="/thegreatoutdoors.png" 
                        alt="Family outdoor adventure"
                        width={400}
                        height={320}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-end p-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                              Family Adventure
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            Nature Walk
                          </h3>
                          <div className="text-xs text-gray-300">2024 • Family • 2h 30m</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review content below the card */}
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        &ldquo;Exploring nature together brings our family closer than ever...&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">- Lisa T.</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">4.8</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Netflix-style scroll indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>

            {/* Statistics Section */}
            <motion.div
              className="text-center mt-16 mb-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <h3 className="text-2xl font-bold text-ink font-heading mb-4">
                Trusted by families everywhere
              </h3>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-gray-600">Memories Created</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-gray-600">Would Recommend</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
