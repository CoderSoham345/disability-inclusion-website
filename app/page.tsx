'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Moon, Type, Accessibility } from 'lucide-react'

export default function Home() {
  const [accessibilityMode, setAccessibilityMode] = useState('normal')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const statCards = [
    { icon: '👥', number: '50+', label: 'NGOs', sublabel: 'Across India', color: 'from-purple-600 to-purple-400' },
    { icon: '🏅', number: '30+', label: 'Paralympians', sublabel: 'Featured', color: 'from-blue-600 to-blue-400' },
    { icon: '🤝', number: '20+', label: 'Partnerships', sublabel: 'Opportunities', color: 'from-green-600 to-green-400' },
    { icon: '📋', number: '100+', label: 'Programs', sublabel: 'Running', color: 'from-orange-600 to-orange-400' },
    { icon: '❤️', number: '1M+', label: 'Lives', sublabel: 'Impacted', color: 'from-pink-600 to-pink-400' },
  ]

  const aboutCards = [
    { icon: '✨', title: 'Inclusion First', desc: 'We promote equal opportunities for everyone in sports.' },
    { icon: '🎯', title: 'Empower Athletes', desc: 'We support athletes in achieving their dreams and breaking barriers.' },
    { icon: '🤲', title: 'Stronger Together', desc: 'We collaborate with communities, NGOs, and partners for greater impact.' },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Accessibility Toolbar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 glass-effect p-4 rounded-2xl border border-purple-500/30"
      >
        <div className="flex flex-col gap-3">
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-3 rounded-lg hover:bg-purple-500/20 transition-all"
            title="Toggle Dark/Light"
          >
            <Moon className="w-5 h-5 text-purple-300" />
          </button>
          <button
            onClick={() => setAccessibilityMode(accessibilityMode === 'highContrast' ? 'normal' : 'highContrast')}
            className="p-3 rounded-lg hover:bg-blue-500/20 transition-all"
            title="Toggle High Contrast"
          >
            <Accessibility className="w-5 h-5 text-blue-300" />
          </button>
          <button
            onClick={() => {
              const root = document.documentElement
              root.style.fontSize = root.style.fontSize === '18px' ? '16px' : '18px'
            }}
            className="p-3 rounded-lg hover:bg-cyan-500/20 transition-all"
            title="Increase Text Size"
          >
            <Type className="w-5 h-5 text-cyan-300" />
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full">
                <span className="text-purple-300 text-sm font-semibold">💜 BUILDING AN INCLUSIVE INDIA</span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-white">Empowering</span>{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Every Ability
                  </span>{' '}
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text italic">
                    Through Sports
                  </span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-md leading-relaxed">
                Connecting NGOs, Paralympians, Communities, and Partners across India to create equal sporting opportunities for all.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                {/* Get Started Button */}
                <Link href="/ngos" className="flex-1">
                  <div className="group relative glass-effect p-6 rounded-2xl border border-purple-500/40 hover:border-purple-400/70 cursor-pointer overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-white flex items-center gap-2">
                          Get Started Now
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-sm text-slate-400 mt-1">Explore our initiatives</p>
                      </div>
                      <div className="text-4xl">🚀</div>
                    </div>
                  </div>
                </Link>

                {/* Contact Button */}
                <Link href="/contact" className="flex-1">
                  <div className="group relative glass-effect p-6 rounded-2xl border border-cyan-500/40 hover:border-cyan-400/70 cursor-pointer overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-white flex items-center gap-2">
                          Contact Us
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-sm text-slate-400 mt-1">We&apos;d love to hear from you</p>
                      </div>
                      <div className="text-4xl">💬</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual - Sports Montage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-96 md:h-full min-h-96 rounded-3xl overflow-hidden"
            >
              {/* Neon Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-cyan-900/20 rounded-3xl" />
              
              {/* Glowing Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-96 h-96 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute w-72 h-72 border-2 border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute w-48 h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-full blur-3xl" />
              </div>

              {/* Sports Athletes Emoji Grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 text-8xl drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="flex items-center justify-center">
                    🏹
                  </motion.div>
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity }} className="flex items-center justify-center">
                    🚴
                  </motion.div>
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, delay: 1, repeat: Infinity }} className="flex items-center justify-center">
                    🏃
                  </motion.div>
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} className="flex items-center justify-center">
                    🏀
                  </motion.div>
                </div>
              </div>

              {/* Radial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-20 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {statCards.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="glass-effect p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all cursor-pointer overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                  
                  <div className="relative z-10 text-center space-y-4">
                    <div className="text-6xl">{stat.icon}</div>
                    <div>
                      <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      <div className="text-white font-bold mt-2">{stat.label}</div>
                      <div className="text-sm text-slate-400">{stat.sublabel}</div>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl -z-10 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-20 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Main Message */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="text-sm text-purple-300 font-semibold uppercase tracking-wide">ABOUT US</div>
              <h2 className="text-5xl md:text-6xl font-black">
                <span className="text-white">Building an</span>{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Inclusive
                </span>{' '}
                <span className="text-white">and</span>{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Accessible India
                </span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                We believe in a world where every individual, regardless of ability, has the opportunity to participate, compete, and excel through sports.
              </p>
            </motion.div>

            {/* Right - Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Three Icon Cards */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                {aboutCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="glass-effect p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 group cursor-pointer transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{card.icon}</div>
                      <div>
                        <h3 className="text-white font-bold mb-1">{card.title}</h3>
                        <p className="text-sm text-slate-400">{card.desc}</p>
                        <Link href="/about" className="text-purple-400 text-sm font-semibold hover:text-purple-300 mt-2 inline-block">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Video Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 overflow-hidden group cursor-pointer transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
              >
                <div className="relative aspect-video bg-gradient-to-br from-cyan-600/30 to-blue-600/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-blue-900/30 to-purple-900/20" />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 p-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all"
                  >
                    <Play className="w-8 h-8 text-white fill-white" />
                  </motion.button>
                  <div className="absolute top-4 right-4 text-white font-bold text-sm bg-black/40 px-3 py-1 rounded-full">
                    Watch Our Impact
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-20 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={itemVariants}
            className="glass-effect p-12 rounded-3xl border border-purple-500/40 text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="text-white">Ready to Make a</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Difference?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Join us in our mission to empower every athlete with a disability. Whether you&apos;re an athlete, organization, or supporter, there&apos;s a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-300 hover:border-cyan-400">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
