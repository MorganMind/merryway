'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkle } from './Sparkle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withSparkle?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  withSparkle = false,
  className = '',
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-on hover:bg-primary-hover active:bg-primary-pressed hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-background-card text-text-ink border border-background-divider hover:bg-background-canvas hover:border-primary/40',
    ghost: 'text-text-ink hover:bg-background-canvas hover:text-primary',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {withSparkle && (
        <Sparkle 
          size="sm" 
          animated={true}
          className="text-accent-sparkle"
        />
      )}
    </motion.button>
  );
}
