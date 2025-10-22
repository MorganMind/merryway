'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  hover?: boolean;
  children: React.ReactNode;
}

export function Card({ 
  variant = 'default', 
  hover = false,
  className = '',
  children,
  ...props 
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-background-card border border-background-divider',
    elevated: 'bg-background-card shadow-lg border border-background-divider',
    outlined: 'bg-transparent border-2 border-primary/20',
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 hover:rotate-1' : '';

  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
      whileHover={hover ? { scale: 1.02, rotate: 2 } : undefined}
    >
      {children}
    </motion.div>
  );
}
