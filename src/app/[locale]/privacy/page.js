export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support. This may include your name, email address, 
              phone number, and other contact information.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and personalize your experience. We may also use your information 
              to send you updates about our services and events.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us at any time.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@cityscape-oasis.com" className="text-primary hover:underline">
                privacy@cityscape-oasis.com
              </a>
            </p>

            <p className="text-sm text-gray-600 mt-8">
              Last updated: December 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
