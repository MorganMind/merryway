'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Sparkle } from './Sparkle';
import { Users, CheckCircle, Heart } from 'lucide-react';

export function FeaturesSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
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
    <section id="features" className="py-20 bg-white">
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
            Three simple reasons why families are finding their merry way with us.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card variant="elevated" className="p-8 h-full text-center group">
                <motion.div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>

                <h3 className="text-2xl font-semibold text-ink font-heading mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle sparkle accent */}
                <motion.div
                  className="mt-6 flex justify-center"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
