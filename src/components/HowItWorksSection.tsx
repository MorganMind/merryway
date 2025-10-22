'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Sparkle } from './Sparkle';
import { Search, Calendar, MapPin, Trophy } from 'lucide-react';
import { useState, useRef } from 'react';

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Search,
      title: 'Explore',
      description: 'Ask Morgan anything. "Rainy afternoon ideas?" or "Something active but indoors?"',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      animation: 'cards-fanning',
    },
    {
      icon: Calendar,
      title: 'Days',
      description: 'Morgan suggests options that fit your family\'s rhythm, budget, and energy.',
      color: 'text-accent-indigo',
      bgColor: 'bg-accent-indigo/10',
      animation: 'lets-go-button',
    },
    {
      icon: MapPin,
      title: 'Plans',
      description: 'One tap turns ideas into detailed itineraries with times, locations, and buffers.',
      color: 'text-accent-sparkle',
      bgColor: 'bg-accent-sparkle/10',
      animation: 'timeline-sliding',
    },
    {
      icon: Trophy,
      title: 'Trails',
      description: 'Celebrate wins, track progress, and build your family\'s adventure story.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      animation: 'badge-filling',
    },
  ];

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    if (scrollRef.current) {
      const stepWidth = scrollRef.current.scrollWidth / steps.length;
      scrollRef.current.scrollTo({
        left: stepWidth * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink font-heading mb-6 tracking-wide">
            How it{' '}
            <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The core loop that turns family chaos into organized joy.
          </p>
        </motion.div>

        {/* Progress Dots */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Horizontal Scroller */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex-shrink-0 w-80"
                style={{ scrollSnapAlign: 'start' }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="p-8 h-full">
                  <motion.div
                    className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-ink font-heading mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Step Animation Preview */}
                  <motion.div
                    className="bg-background-soft rounded-lg p-4 text-center"
                    animate={
                      index === activeStep
                        ? {
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                              '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                              '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {step.animation === 'cards-fanning' && (
                      <div className="flex justify-center space-x-1">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="w-8 h-8 bg-primary/20 rounded"
                            animate={{
                              rotate: [0, 5, 0],
                              y: [0, -2, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {step.animation === 'lets-go-button' && (
                      <motion.div
                        className="inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        Let&apos;s go
                      </motion.div>
                    )}

                    {step.animation === 'timeline-sliding' && (
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="h-2 bg-primary/20 rounded"
                            animate={{
                              x: [-20, 20, -20],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {step.animation === 'badge-filling' && (
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Trophy className="w-4 h-4" />
                        <span>Win!</span>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Step Number */}
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sparkle Trail */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 pointer-events-none"
            animate={{
              x: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="flex justify-center">
              <Sparkle size="md" animated={true} className="text-accent-sparkle/50" />
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous step"
          >
            ←
          </button>
          <button
            onClick={() => scrollToStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next step"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
