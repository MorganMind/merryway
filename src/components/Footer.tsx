'use client';

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { Sparkle } from './Sparkle';
import Link from 'next/link';

export function Footer() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Logo size="lg" animated={true} className="mb-4" />
            <p className="text-gray-300 mb-6 max-w-md">
              Find your merry way. A family planner that listens, remembers, 
              and gently guides your household from idea to plan to &quot;we did it!&quot;
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Sparkle size="sm" animated={true} className="text-accent-sparkle/50" />
              <span>Made with care for families</span>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#plans"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  How it works
                </a>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/memory-cards"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Memory Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/yesterdays"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Yesterdays
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@merryway.app"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@merryway.app"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Hello
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="text-sm text-gray-400"
              variants={itemVariants}
            >
              © {currentYear} Merryway. All rights reserved.
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              variants={itemVariants}
            >
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
