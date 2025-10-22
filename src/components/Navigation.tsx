'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navItems = [
      { label: 'How it works', href: '/#plans' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Yesterdays', href: '/yesterdays' },
    ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-card/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" animated={true} />

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-text-ink hover:text-primary transition-colors duration-200 font-medium relative group"
                    title={item.label === 'Yesterdays' ? 'Family stories & tips' : undefined}
                  >
                    {item.label}
                    {item.label === 'Yesterdays' && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-ink text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        Family stories & tips
                      </span>
                    )}
                  </a>
                ))}
              </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" withSparkle>
              Get early access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-ink" />
            ) : (
              <Menu className="w-6 h-6 text-text-ink" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 space-y-4 border-t border-gray-200/50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-ink hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="primary" withSparkle className="w-full">
                Get early access
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
