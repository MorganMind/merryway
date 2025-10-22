'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Button } from './Button';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogHeaderProps {
  children: React.ReactNode;
}

interface DialogTitleProps {
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onOpenChange(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DialogContent({ children, className = '' }: DialogContentProps) {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6',
        className
      )}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  );
}

export function DialogHeader({ children }: DialogHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      {children}
    </div>
  );
}

export function DialogTitle({ children }: DialogTitleProps) {
  return (
    <h2 className="text-xl font-semibold text-ink font-heading">
      {children}
    </h2>
  );
}

export function DialogClose({ onClose }: { onClose: () => void }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClose}
      className="p-1"
    >
      <X className="w-4 h-4" />
    </Button>
  );
}
