'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-purple-900/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-cyan-600/5 pointer-events-none" />
      
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-gradient">DisabilityWorks</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/ngos" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
              NGOs
            </Link>
            <Link href="/athletes" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
              Athletes
            </Link>
            <Link href="/programs" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
              Programs
            </Link>
            <Link href="/partnerships" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300">
              Partnerships
            </Link>
            <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300">
              Blog
            </Link>
            <Link href="/impact" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
              Impact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-400 hover:border-purple-400 hover:bg-purple-500/10">
                Volunteer
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-lg hover:shadow-purple-500/50">
                Become a Partner
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-down">
            <Link href="/ngos" className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all">
              NGOs
            </Link>
            <Link href="/athletes" className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all">
              Athletes
            </Link>
            <Link href="/programs" className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
              Programs
            </Link>
            <Link href="/partnerships" className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all">
              Partnerships
            </Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all">
              Blog
            </Link>
            <Link href="/impact" className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
              Impact
            </Link>
            <div className="pt-2 space-y-2">
              <Link href="/contact" className="block">
                <Button variant="outline" size="sm" className="w-full border-purple-500/50 text-purple-400">
                  Volunteer
                </Button>
              </Link>
              <Link href="/partnerships" className="block">
                <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
