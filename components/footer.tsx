'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm opacity-80">Empowering athletes with disabilities through sports, community, and inclusion.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ngos" className="hover:underline opacity-80 hover:opacity-100">NGO Directory</Link></li>
              <li><Link href="/athletes" className="hover:underline opacity-80 hover:opacity-100">Athletes</Link></li>
              <li><Link href="/programs" className="hover:underline opacity-80 hover:opacity-100">Programs</Link></li>
              <li><Link href="/blog" className="hover:underline opacity-80 hover:opacity-100">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline opacity-80 hover:opacity-100">About</Link></li>
              <li><Link href="/contact" className="hover:underline opacity-80 hover:opacity-100">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline opacity-80 hover:opacity-100">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:underline opacity-80 hover:opacity-100">Privacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 <a href="mailto:info@disabilityworks.com" className="hover:underline opacity-80">info@disabilityworks.com</a></li>
              <li>📱 +91 (800) 123-4567</li>
              <li>📍 India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex items-center justify-between">
          <p className="text-sm opacity-60">© 2026 DisabilityWorks. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100 opacity-60">Twitter</a>
            <a href="#" className="hover:opacity-100 opacity-60">LinkedIn</a>
            <a href="#" className="hover:opacity-100 opacity-60">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
