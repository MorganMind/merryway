'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';

import { Clock, MapPin, Users, DollarSign, ThumbsUp } from 'lucide-react';

export function PlansSection() {
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

  const timelineItems = [
    {
      time: '2:00 PM',
      activity: 'Arrive at Rock Climbing Gym',
      location: 'Downtown Climbing Center',
      duration: '30 min',
      type: 'travel',
    },
    {
      time: '2:30 PM',
      activity: 'Safety Briefing & Gear',
      location: 'Downtown Climbing Center',
      duration: '15 min',
      type: 'prep',
    },
    {
      time: '2:45 PM',
      activity: 'Climbing Session',
      location: 'Downtown Climbing Center',
      duration: '90 min',
      type: 'main',
    },
    {
      time: '4:15 PM',
      activity: 'Wrap up & Photos',
      location: 'Downtown Climbing Center',
      duration: '15 min',
      type: 'wrap',
    },
  ];

  return (
    <section id="plans" className="py-20 bg-background-soft">
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
            How It{' '}
            <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Know what you want? Type it. Not sure? Pick and choose. Either way, Morgan drafts a sane plan you can lock in.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Left Column - Proposal Cards */}
          <div className="space-y-6">
            <motion.h3
              className="text-2xl font-semibold text-ink font-heading mb-6"
              variants={itemVariants}
            >
              Choose Your Adventure
            </motion.h3>

            {/* Proposal Card 1 */}
            <motion.div variants={itemVariants}>
              <Card variant="elevated" className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Indoor Rock Climbing</h4>
                    <p className="text-sm text-gray-600">Perfect for active families</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">+1 vote</div>
                    <div className="text-xs text-gray-500">Morgan</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    When: This afternoon
                  </span>
                  <span className="px-2 py-1 bg-accent-indigo/10 text-accent-indigo rounded-full text-xs">
                    Budget: $60
                  </span>
                  <span className="px-2 py-1 bg-accent-sparkle/20 text-ink rounded-full text-xs">
                    Travel: 2.1 mi
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    Indoor
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>2-3 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>2-6 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>$15/person</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="primary" size="sm" className="flex-1">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Vote
                  </Button>
                  <Button variant="secondary" size="sm">
                    Details
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Proposal Card 2 */}
            <motion.div variants={itemVariants}>
              <Card variant="elevated" className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Museum & Cafe</h4>
                    <p className="text-sm text-gray-600">Educational and relaxed</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-500">0 votes</div>
                    <div className="text-xs text-gray-500">Alternative</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    When: This afternoon
                  </span>
                  <span className="px-2 py-1 bg-accent-indigo/10 text-accent-indigo rounded-full text-xs">
                    Budget: $45
                  </span>
                  <span className="px-2 py-1 bg-accent-sparkle/20 text-ink rounded-full text-xs">
                    Travel: 1.8 mi
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Indoor
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>2-4 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>2-6 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>$12/person</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Vote
                  </Button>
                  <Button variant="secondary" size="sm">
                    Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Itinerary Timeline */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-ink font-heading mb-6"
              variants={itemVariants}
            >
              Your Itinerary
            </motion.h3>

            <motion.div variants={itemVariants}>
              <Card variant="elevated" className="p-6">
                <div className="space-y-4">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${
                          item.type === 'main' ? 'bg-primary' :
                          item.type === 'travel' ? 'bg-accent-indigo' :
                          item.type === 'prep' ? 'bg-accent-sparkle' :
                          'bg-gray-300'
                        }`} />
                        {index < timelineItems.length - 1 && (
                          <div className="w-0.5 h-8 bg-gray-200 mt-2" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-ink text-sm">
                            {item.time}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.duration}
                          </span>
                        </div>
                        <h4 className="font-medium text-ink text-sm mb-1">
                          {item.activity}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-ink">Total Duration</div>
                      <div className="text-xs text-gray-600">2.5 hours</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-ink">Estimated Cost</div>
                      <div className="text-xs text-gray-600">$60 for 4 people</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button variant="primary" className="w-full" withSparkle>
                    Lock it in
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
