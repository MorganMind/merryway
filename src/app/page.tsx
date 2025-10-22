import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { MorganDemoSection } from '@/components/MorganDemoSection';
import { PlansSection } from '@/components/PlansSection';
import { TrailsSection } from '@/components/TrailsSection';
import { EmailCaptureSection } from '@/components/EmailCaptureSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
      <div className="min-h-screen bg-background-canvas relative">
        {/* Content */}
        <div className="relative z-10">
        <Navigation />
        <main>
        <HeroSection />
        <div className="bg-background-canvas/22 backdrop-blur-[2px]">
          <MorganDemoSection />
          <PlansSection />
          <TrailsSection />
          {/* <HowItWorksSection /> */}
          <EmailCaptureSection />
        </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
