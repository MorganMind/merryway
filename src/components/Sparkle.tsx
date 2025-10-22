'use client';

import { motion } from 'framer-motion';

interface SparkleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function Sparkle({ className = '', size = 'md', animated = true }: SparkleProps) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const sparkleVariants = {
    initial: { opacity: 0.3, scale: 0.8 },
    animate: { 
      opacity: [0.3, 0.8, 0.3],
      scale: [0.8, 1.1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      }
    }
  };

  return (
    <motion.svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={animated ? sparkleVariants : undefined}
      initial="initial"
      animate={animated ? "animate" : "initial"}
    >
      <defs>
        <filter id="sparkle-blur">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>
      <path
        d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
        fill="currentColor"
        filter="url(#sparkle-blur)"
      />
    </motion.svg>
  );
}
