'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              ♿
            </div>
            <span>DisabilityWorks</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/ngos" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light hover:text-primary transition-colors">
              NGOs
            </Link>
            <Link href="/athletes" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light hover:text-primary transition-colors">
              Athletes
            </Link>
            <Link href="/programs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/partnerships" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light hover:text-primary transition-colors">
              Partnerships
            </Link>
            <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light hover:text-primary transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/sign-in">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/ngos" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light">
              NGOs
            </Link>
            <Link href="/athletes" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light">
              Athletes
            </Link>
            <Link href="/programs" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light">
              Programs
            </Link>
            <Link href="/partnerships" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light">
              Partnerships
            </Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-light">
              Blog
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link href="/sign-in" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" className="w-full">
                <Button size="sm" className="w-full">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
