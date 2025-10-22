'use client';

import Link from 'next/link';
import { Sparkle } from './Sparkle';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function Logo({ className = '', size = 'md', animated = true }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
      <div className={`flex items-center gap-1 font-logo font-semibold text-ink tracking-wide ${sizeClasses[size]} ${className}`}>
        <span>Merryway</span>
        <Sparkle 
          size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'} 
          animated={animated}
          className="text-accent-sparkle"
        />
      </div>
    </Link>
  );
}
