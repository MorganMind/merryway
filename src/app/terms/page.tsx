import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-block mb-6">
              <Logo size="lg" />
            </Link>
            <h1 className="text-4xl font-bold text-ink font-heading mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-ink font-heading mb-4">
                Welcome to Merryway
              </h2>
              <p className="mb-6 text-gray-700">
                These terms govern your use of Merryway, our family planning app. 
                By using our service, you agree to these terms.
              </p>

              <h3 className="text-xl font-semibold text-ink font-heading mb-3">
                Using Merryway
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>You must be 13 or older to use our service</li>
                <li>Parents are responsible for their children&apos;s accounts</li>
                <li>Use our service respectfully and lawfully</li>
                <li>Don&apos;t share inappropriate content</li>
              </ul>

              <h3 className="text-xl font-semibold text-ink font-heading mb-3">
                Your Content
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>You own your family&apos;s data and content</li>
                <li>You can export your data anytime</li>
                <li>You can delete your account and data</li>
                <li>We&apos;ll never claim ownership of your content</li>
              </ul>

              <h3 className="text-xl font-semibold text-ink font-heading mb-3">
                Our Service
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>We provide suggestions, not guarantees</li>
                <li>Always verify information before making plans</li>
                <li>We&apos;re not responsible for third-party activities</li>
                <li>Service availability may vary</li>
              </ul>

              <h3 className="text-xl font-semibold text-ink font-heading mb-3">
                Changes to Terms
              </h3>
              <p className="mb-6 text-gray-700">
                We may update these terms occasionally. We&apos;ll notify you of significant 
                changes via email or in-app notification.
              </p>

              <p className="text-gray-700">
                Questions about these terms? Contact us at{' '}
                <a href="mailto:legal@merryway.app" className="text-primary hover:underline">
                  legal@merryway.app
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
