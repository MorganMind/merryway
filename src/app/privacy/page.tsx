import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-block mb-6">
              <Logo size="lg" />
            </Link>
            <h1 className="text-4xl font-bold text-ink font-heading mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-ink font-heading mb-4">
                Your Privacy Matters
              </h2>
              <p className="mb-6 text-gray-700">
                At Merryway, we believe your family&apos;s data should be treated with the same care 
                and respect we&apos;d want for our own. This privacy policy explains how we collect, 
                use, and protect your information.
              </p>

              <h3 className="text-xl font-semibold text-ink font-heading mb-3">
                What We Collect
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Account information (name, email, family members)</li>
                <li>Activity preferences and constraints</li>
                <li>Location data (only when you choose to share it)</li>
                <li>Usage patterns to improve suggestions</li>
              </ul>

              <h3 className="text-xl font-semibold text-ink font-heading mb-3">
                How We Use It
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>To suggest activities that fit your family</li>
                <li>To create personalized itineraries</li>
                <li>To remember your preferences and wins</li>
                <li>To improve our service (anonymized data only)</li>
              </ul>

              <h3 className="text-xl font-semibold text-ink font-heading mb-3">
                What We Never Do
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Sell your data to third parties</li>
                <li>Share personal information without consent</li>
                <li>Track you across other websites</li>
                <li>Use your data for advertising</li>
              </ul>

              <p className="text-gray-700">
                Questions about your privacy? Contact us at{' '}
                <a href="mailto:privacy@merryway.app" className="text-primary hover:underline">
                  privacy@merryway.app
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button variant="primary">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
