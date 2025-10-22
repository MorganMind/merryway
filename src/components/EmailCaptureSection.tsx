'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';
import { Sparkle } from './Sparkle';
import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function EmailCaptureSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to the Merryway family! We\'ll be in touch soon.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background-soft to-accent-sparkle/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkle size="lg" animated={true} className="text-accent-sparkle" />
              <h2 className="text-4xl md:text-5xl font-bold text-ink font-heading tracking-wide">
                Get Early Access
              </h2>
              <Sparkle size="lg" animated={true} className="text-accent-sparkle" />
            </div>
            <p className="text-xl text-gray-600">
                Private beta is rolling out. We&apos;ll invite you as soon as we can.
              </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card variant="elevated" className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      required
                      disabled={status === 'loading'}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      withSparkle
                      disabled={status === 'loading' || !email}
                      className="sm:w-auto w-full"
                    >
                      {status === 'loading' ? 'Joining...' : 'Get early access'}
                    </Button>
                  </div>
                </div>

                {message && (
                  <motion.div
                    className={`flex items-center gap-2 p-4 rounded-lg ${
                      status === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{message}</span>
                  </motion.div>
                )}

                <div className="text-sm text-gray-500">
                  <p>We&apos;ll never sell your data. Unsubscribe anytime.</p>
                  <p className="mt-1">
                    <span className="font-medium">Trust line:</span> We&apos;ll never sell your data.
                  </p>
                </div>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="mt-8"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
                <span>Privacy-first</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
                <span>Family-focused</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
                <span>Joy-driven</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
