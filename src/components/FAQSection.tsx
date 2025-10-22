'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Sparkle } from './Sparkle';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const faqs = [
    {
      question: 'Is my family\'s data private and secure?',
      answer: 'Absolutely. We never sell your data, share personal information without consent, or track you across other websites. Your family\'s privacy is our top priority.',
    },
    {
      question: 'How much does Merryway cost?',
      answer: 'Pricing is still being finalized, but we\'re committed to making Merryway accessible to all families. Early access users will get special pricing.',
    },
    {
      question: 'When will Merryway be available on iOS and Android?',
      answer: 'We\'re currently in private beta testing. The full app will launch on both iOS and Android in the coming months. Join our waitlist to be notified first.',
    },
    {
      question: 'What data sources does Morgan use for suggestions?',
      answer: 'Morgan combines web research with your family\'s preferences, local weather, and activity databases. All suggestions are filtered by your constraints like budget, travel radius, and supervision needs.',
    },
    {
      question: 'Can the whole family play Memory Match together?',
      answer: 'Yes! Memory Match is designed for all ages. Toddlers can play with simple photo matching while teens can handle more complex patterns. Everyone plays with your own family photos.',
    },
    {
      question: 'How do I get early access to Merryway?',
      answer: 'Sign up for our waitlist above! We\'re rolling out invites gradually to ensure the best experience. You\'ll get an email when your spot is ready.',
    },
    {
      question: 'Does Merryway work offline?',
      answer: 'Some features work offline, like viewing your saved plans and trails. For new suggestions and real-time updates, you\'ll need an internet connection.',
    },
    {
      question: 'Can I export my family\'s data?',
      answer: 'Yes, you can export all your data anytime. You own your family\'s information, and we make it easy to take it with you if needed.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-background-warm">
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
            Frequently Asked{' '}
            <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Everything you need to know about Merryway and how it works for your family.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Card variant="elevated" className="overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-background-soft/50 transition-colors duration-200"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-ink pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </button>

                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? 'auto' : 0,
                      opacity: openItems.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Schema.org FAQ markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map(faq => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </motion.div>

        {/* Contact CTA */}
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
                Still have questions?
              </h3>
              <Sparkle size="md" animated={true} className="text-accent-sparkle" />
            </div>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help! Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@merryway.app"
                className="text-primary hover:underline font-medium"
              >
                hello@merryway.app
              </a>
              <span className="hidden sm:block text-gray-400">•</span>
              <a
                href="mailto:support@merryway.app"
                className="text-primary hover:underline font-medium"
              >
                support@merryway.app
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
