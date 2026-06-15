'use client'

export default function FAQ() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-center text-foreground/70 mb-12">Find answers to common questions about DisabilityWorks</p>

        <div className="space-y-6">
          {[
            {
              q: 'Who can join DisabilityWorks?',
              a: 'Athletes with disabilities, sports organizations, NGOs working in disability inclusion, coaches, and supporters are all welcome to join our platform.',
            },
            {
              q: 'How do I register?',
              a: 'Click "Get Involved" on the homepage and select your user type. Fill in the required information and your account will be created.',
            },
            {
              q: 'What programs are available?',
              a: 'We offer adaptive sports, competitive training, community outreach, and rehabilitation programs. Visit the Programs page to explore options.',
            },
            {
              q: 'How can my organization list programs?',
              a: 'Register as an organization, complete the verification process, and then you can create and manage programs through your dashboard.',
            },
            {
              q: 'Is the platform accessible?',
              a: 'Yes, DisabilityWorks is designed with accessibility as a core principle, featuring keyboard navigation, screen reader support, and adaptive design.',
            },
            {
              q: 'How is my data protected?',
              a: 'We follow strict data protection policies and comply with privacy regulations. See our Privacy Policy for complete details.',
            },
          ].map((faq, index) => (
            <div key={index} className="p-6 border border-border rounded-lg hover:border-primary/50 transition-all">
              <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-foreground/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
