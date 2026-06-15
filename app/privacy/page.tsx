'use client'

export default function Privacy() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-foreground/70 mb-8">Last updated: June 2024</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-foreground/70">
              DisabilityWorks is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
            <p className="text-foreground/70 mb-3">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Personal Data: name, email address, phone number, location, and sports preferences</li>
              <li>Organization Data: for NGOs and partner organizations</li>
              <li>Usage Data: how you interact with our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Use of Your Information</h2>
            <p className="text-foreground/70 mb-3">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Create and manage your account</li>
              <li>Process your registrations</li>
              <li>Communicate with you about programs and updates</li>
              <li>Improve our platform and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Contact Us</h2>
            <p className="text-foreground/70">
              If you have questions or comments about this Privacy Policy, please contact us at privacy@disabilityworks.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
