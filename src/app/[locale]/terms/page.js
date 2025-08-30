export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Global carnival Jeddah services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Global carnival Jeddah&apos;s 
              website for personal, non-commercial transitory viewing only.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on Global carnival Jeddah&apos;s website are provided on an &apos;as is&apos; basis. Global carnival Jeddah 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall Global carnival Jeddah or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out of 
              the use or inability to use the materials on Global carnival Jeddah&apos;s website.
            </p>

            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on Global carnival Jeddah&apos;s website could include technical, typographical, 
              or photographic errors. Global carnival Jeddah does not warrant that any of the materials on its 
              website are accurate, complete or current.
            </p>

            <h2>Links</h2>
            <p>
              Global carnival Jeddah has not reviewed all of the sites linked to its website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply endorsement 
              by Global carnival Jeddah of the site.
            </p>

            <h2>Modifications</h2>
            <p>
              Global carnival Jeddah may revise these terms of service for its website at any time without notice. 
              By using this website you are agreeing to be bound by the then current version of these Terms 
              of Service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you 
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at{' '}
              <a href="mailto:legal@cityscape-oasis.com" className="text-primary hover:underline">
                legal@cityscape-oasis.com
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
