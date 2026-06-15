'use client'

export default function Partnerships() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Partnerships</h1>
        <p className="text-lg text-foreground/70 mb-12">
          Building strategic partnerships to advance disability sports inclusion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Corporate Partners', count: '15+' },
            { name: 'Government Agencies', count: '8+' },
            { name: 'International Partners', count: '5+' },
          ].map((partner, index) => (
            <div key={index} className="p-8 border border-border rounded-lg">
              <p className="text-3xl font-bold text-primary mb-2">{partner.count}</p>
              <p className="font-medium">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Interested in Partnering?</h2>
          <p className="text-foreground/70 mb-6">
            We welcome partnerships from corporations, NGOs, government agencies, and individuals committed to disability sports inclusion.
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
