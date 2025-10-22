'use client';

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Button } from './Button';
import { Sparkle } from './Sparkle';
import { useState, useRef, useEffect } from 'react';

export function HeroSection() {
  const [, setShowDemo] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress: _scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Track content position and prevent page scroll
  const [contentPosition, setContentPosition] = useState(0);
  const contentPositionMotion = useMotionValue(0);

  // Background stays completely fixed - no vertical movement at all
  const backgroundY = 0;
  
  // Scale and blur start with content movement, continue with page scroll
  const maxContentScroll = typeof window !== 'undefined' ? -window.innerHeight * 0.2 : -200;
  
  // Scale starts immediately with content scrolling, not page scroll
  const scale = useTransform(contentPositionMotion, [0, maxContentScroll], [1, 1.5]);
  
  // Blur starts immediately with content scrolling, not page scroll  
  const blur = useTransform(contentPositionMotion, [0, maxContentScroll], [0, 8]);
  
  // Content scrolls up while background stays fixed
  // const contentY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Video playback control
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.8;
    video.play();
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const maxScroll = -window.innerHeight * 0.2; // 20% of screen height
      
      // If content hasn't reached 20% up yet, prevent page scroll
      if (contentPosition > maxScroll) {
        e.preventDefault();
        
        // Move content up or down based on scroll direction
        const newPosition = Math.max(Math.min(contentPosition - e.deltaY * 0.5, 0), maxScroll);
        setContentPosition(newPosition);
        contentPositionMotion.set(newPosition);
        
        // Apply transform to content
        const contentElement = document.querySelector('[data-hero-content]') as HTMLElement;
        if (contentElement) {
          contentElement.style.transform = `translateY(${newPosition}px)`;
        }
      }
      // If content is at original position (0) and user scrolls up, allow normal page scroll
      else if (contentPosition === 0 && e.deltaY < 0) {
        // Allow normal page scroll when at top and scrolling up
        return;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [contentPosition, contentPositionMotion]);

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


  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fixed/Parallax Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale, y: backgroundY }}
      >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/merrytemp.mp4" type="video/mp4" />
            </video>
      </motion.div>
      
          {/* Video Overlay for better text readability */}
          <motion.div 
            className="absolute inset-0 bg-background-canvas/20 z-10"
            style={{ backdropFilter: `blur(${blur}px)` }}
          ></motion.div>
          
          {/* Gradient Overlay - Cream to Navy */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-canvas/25 to-primary/50 z-10"></div>
      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkle size="lg" animated={true} className="text-accent-sparkle/30" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <Sparkle size="md" animated={true} className="text-accent-sparkle/20" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/4"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          <Sparkle size="sm" animated={true} className="text-accent-sparkle/25" />
        </motion.div>
      </div>

          <div className="container mx-auto px-4 py-20 relative z-20">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              data-hero-content
              style={{ 
                alignItems: 'flex-start'
              }}
            >
              {/* Left Column - Content */}
              <div className="text-center lg:text-left pt-20">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl text-text-ink font-heading mb-6 leading-tight tracking-wide"
                  style={{ fontWeight: 900 }}
                  variants={itemVariants}
                >
                  Ideas today.{' '}
                  <span className="text-primary">Stories tomorrow.</span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto lg:mx-0"
                  variants={itemVariants}
                >
                  Merryway listens, remembers, and gently guides your family—from idea to plan to 
                  &quot;we did it!&quot;—like a modern Mary Poppins.
                </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button variant="primary" size="lg" withSparkle>
                Get early access
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => setShowDemo(true)}
              >
                Watch 60s demo
              </Button>
            </motion.div>

                <motion.p
                  className="text-sm text-gray-300 mt-6"
                  variants={itemVariants}
                >
                  Private beta rolling out. We&apos;ll invite you as soon as we can.
                </motion.p>
          </div>

              {/* Right Column - Montage Cards */}
              <div className="relative pt-20">
                {/* First Card - Largest and on Top */}
                <motion.div
                  className="relative w-full max-w-lg mx-auto lg:ml-auto mb-6 z-30"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                  <motion.div
                    className="relative p-8 bg-gradient-to-br from-primary/10 via-accent-sage/5 to-accent-sparkle/10 rounded-2xl shadow-2xl border border-primary/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-4 h-4 bg-accent-sparkle rounded-full animate-pulse"></div>
                      <h3 className="font-heading text-2xl font-bold text-primary">Morgan is thinking...</h3>
                    </div>
                    
                    <motion.div 
                      className="bg-background-card/90 backdrop-blur-sm rounded-xl p-6 mb-6 border border-background-divider"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    >
                      <p className="text-text-ink font-medium mb-4 text-lg">&ldquo;What should we do this weekend?&rdquo;</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Family</span>
                        <span className="px-3 py-2 bg-accent-sage/10 text-accent-sage rounded-full text-sm font-medium">Outdoor</span>
                        <span className="px-3 py-2 bg-accent-sparkle/10 text-accent-sparkle rounded-full text-sm font-medium">Fun</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-3 text-text-slate"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                    >
                      <Sparkle size="md" className="text-accent-sparkle animate-spin" />
                      <span className="font-medium">Finding perfect matches...</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Stacked Cards - Hidden until 50% scroll */}
                <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                  {/* Plans Card - Stacked behind */}
                  <motion.div
                    className="absolute top-4 left-4 w-full max-w-md z-20"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50%" }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <motion.div
                      className="relative p-6 bg-background-card rounded-xl shadow-lg border border-background-divider"
                      whileHover={{ scale: 1.02, rotate: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-heading text-lg font-semibold text-text-ink mb-4">Plans</h3>
                      <div className="space-y-3 text-text-slate text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-accent-sage rounded-full"></div>
                          <span>Zoo visit - Saturday 2pm</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-accent-sparkle rounded-full"></div>
                          <span>Movie night - Sunday 7pm</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Trails Card - Stacked behind */}
                  <motion.div
                    className="absolute top-8 left-8 w-full max-w-md z-10"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40%" }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  >
                    <motion.div
                      className="relative p-6 bg-background-card rounded-xl shadow-lg border border-background-divider"
                      whileHover={{ scale: 1.02, rotate: -1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-heading text-lg font-semibold text-text-ink mb-4">Memories</h3>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">12</div>
                        <div className="text-text-slate">Adventures this month</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
        </motion.div>
      </div>
    </section>
  );
}
