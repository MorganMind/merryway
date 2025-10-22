'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Sparkle } from '@/components/Sparkle';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function PricingPage() {
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

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$0',
      period: 'Free',
      description: 'Taste the magic. Explore feed, save to Someday (cap), 1 household up to 3 members, 2 crews, Yesterday auto-albums (cap), Memory Match 2 sessions/mo, guided games packs, basic reminders.',
      icon: Star,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      features: [
        'Explore feed & save to Someday (cap)',
        '1 household up to 3 members',
        '2 crews',
        'Yesterday auto-albums (cap)',
        'Memory Match 2 sessions/mo',
        'Guided games packs',
        'Basic reminders'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Plus',
      price: '$9.99',
      period: '$99/yr',
      description: 'The daily helper. Unlimited saves & crews, 6 members; Morgan quick web answers; Days/Soon resurfacing; calendar holds (ICS); Memory Match 8 sessions/mo + recaps; split Across-household view on Plans (no edits); light Deep Research (2 briefs/mo).',
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary',
      features: [
        'Unlimited saves & crews',
        '6 members per household',
        'Morgan quick web answers',
        'Days/Soon resurfacing',
        'Calendar holds (ICS)',
        'Memory Match 8 sessions/mo + recaps',
        'Split Across-household view on Plans',
        'Light Deep Research (2 briefs/mo)'
      ],
      cta: 'Start Plus',
      popular: true
    },
    {
      name: 'Everafter',
      price: '$14.99',
      period: '$149/yr',
      description: 'All the magic. Full Plans → Itinerary (single & multi-day), Split Day / Meanwhile mode, Deep Research 6 briefs/mo + priority, MCP household-fit checks on every suggestion, cross-household share & collaborate, Memory Match unlimited, advanced Trails insights, early features + priority support.',
      icon: Crown,
      color: 'text-accent-sparkle',
      bgColor: 'bg-accent-sparkle/10',
      borderColor: 'border-accent-sparkle',
      features: [
        'Full Plans → Itinerary (single & multi-day)',
        'Split Day / Meanwhile mode',
        'Deep Research 6 briefs/mo + priority',
        'MCP household-fit checks on every suggestion',
        'Cross-household share & collaborate',
        'Memory Match unlimited',
        'Advanced Trails insights',
        'Early features + priority support'
      ],
      cta: 'Go Everafter',
      popular: false
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
                Simple{' '}
                <span className="text-primary">Pricing</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Choose the plan that fits your family. Start free, upgrade when you're ready.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  variants={itemVariants}
                  className={`relative ${tier.popular ? 'md:-mt-8' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Sparkle size="sm" animated={true} className="text-white" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Card 
                    variant={tier.popular ? "elevated" : "default"} 
                    className={`p-8 h-full ${tier.popular ? tier.borderColor : ''}`}
                  >
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 ${tier.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <tier.icon className={`w-8 h-8 ${tier.color}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-ink font-heading mb-2">
                        {tier.name}
                      </h3>
                      
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-ink">
                          {tier.price}
                        </span>
                        <span className="text-gray-600 ml-2">
                          {tier.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tier.description}
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant={tier.popular ? "primary" : "secondary"}
                      size="lg"
                      className="w-full"
                      withSparkle={tier.popular}
                    >
                      {tier.cta}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="mt-20 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.h2
                className="text-3xl font-bold text-ink font-heading text-center mb-12"
                variants={itemVariants}
              >
                Frequently Asked Questions
              </motion.h2>
              
              <div className="space-y-6">
                <motion.div
                  className="bg-background-soft rounded-2xl p-6"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold text-ink mb-3">
                    Can I change plans anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing differences.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-background-soft rounded-2xl p-6"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold text-ink mb-3">
                    What happens to my data if I cancel?
                  </h3>
                  <p className="text-gray-600">
                    Your data is always yours. If you cancel, you can export your data or continue 
                    with the free Starter plan. We never delete your memories.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-background-soft rounded-2xl p-6"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold text-ink mb-3">
                    Do you offer family discounts?
                  </h3>
                  <p className="text-gray-600">
                    Our pricing is already designed for families! Plus and Everafter plans support 
                    multiple households and cross-household collaboration at no extra cost.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
