import { FAQSection } from '@/components/FAQSection';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background-canvas">
      <Navigation />
      
      <main className="pt-16">
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
