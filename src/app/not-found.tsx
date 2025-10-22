import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import { Sparkle } from '@/components/Sparkle';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-soft flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Logo size="lg" animated={true} />
        </div>
        
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-ink font-heading mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Oops! This page seems to have wandered off.
          </p>
          <p className="text-gray-500">
            Even the best family plans sometimes need a detour.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkle size="md" animated={true} />
          <Sparkle size="sm" animated={true} />
          <Sparkle size="md" animated={true} />
        </div>

        <Link href="/">
          <Button variant="primary" size="lg" withSparkle>
            Find Your Merry Way Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
