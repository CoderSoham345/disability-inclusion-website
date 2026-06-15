'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Trophy, Zap, Sparkles, Flame, Target, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const stats = [
  { label: 'Active Athletes', value: '500+', icon: Trophy },
  { label: 'Partner NGOs', value: '50+', icon: Users },
  { label: 'States Covered', value: '15+', icon: Target },
  { label: 'Lives Transformed', value: '30K+', icon: Heart },
]

const features = [
  {
    icon: Users,
    title: 'Athlete Empowerment',
    description: 'Connect with elite Paralympians and access world-class training programs across India',
    color: 'from-purple-500 to-purple-600',
    glow: 'purple',
  },
  {
    icon: Trophy,
    title: 'Competitive Excellence',
    description: 'Participate in competitions from local to international para-sports events',
    color: 'from-cyan-500 to-blue-600',
    glow: 'cyan',
  },
  {
    icon: Zap,
    title: 'Community Strength',
    description: 'Join a thriving community of athletes, coaches, and disability sports advocates',
    color: 'from-emerald-500 to-teal-600',
    glow: 'emerald',
  },
]

const programs = [
  { icon: '🏀', title: 'Adaptive Sports', description: 'Sports training for all disability types' },
  { icon: '🏊', title: 'Rehabilitation', description: 'Sports-based rehabilitation programs' },
  { icon: '🏕', title: 'Outdoor Recreation', description: 'Adventure in nature for all abilities' },
  { icon: '🧗', title: 'Adventure Activities', description: 'Extreme sports and outdoor challenges' },
  { icon: '🏅', title: 'Athlete Development', description: 'Elite training and coaching' },
  { icon: '🤝', title: 'Community Programs', description: 'Grassroots sports initiatives' },
]

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="relative overflow-hidden bg-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Mouse follow glow */}
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-0 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="mx-auto max-w-7xl w-full">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Left Content */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full">
                      <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                        🚀 National Impact Platform
                      </p>
                    </div>
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl font-black leading-tight">
                    <span className="text-gradient">Empowering</span>
                    <br />
                    <span>Every</span>
                    <br />
                    <span className="text-gradient-gold">Ability</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-300 max-w-lg">
                    Connecting Paralympians, NGOs, Communities, and Partners Across India Through Sports
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/athletes">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-xl hover:shadow-purple-500/50">
                        <Trophy className="mr-2 h-5 w-5" />
                        Meet Champions
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/ngos">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                        <Users className="mr-2 h-5 w-5" />
                        Explore NGOs
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/programs">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
                        <Zap className="mr-2 h-5 w-5" />
                        View Programs
                      </Button>
                    </motion.div>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>Verified Partners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>30K+ Lives Transformed</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div variants={itemVariants} className="relative h-96 md:h-full min-h-96 lg:min-h-[500px]">
                <motion.div
                  animate="animate"
                  variants={floatVariants}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-blue-600/20 rounded-3xl border border-purple-500/30 glass-effect neon-glow-lg flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-32 h-32 mx-auto mb-4"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-6xl">
                        🏅
                      </div>
                    </motion.div>
                    <p className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                      India&apos;s Premier Platform
                    </p>
                  </div>
                </motion.div>

                {/* Floating Cards */}
                {[
                  { icon: '🎯', label: 'Precision', delay: 0 },
                  { icon: '⚡', label: 'Impact', delay: 0.2 },
                  { icon: '🌟', label: 'Excellence', delay: 0.4 },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, delay: card.delay, repeat: Infinity }}
                    className="absolute w-24 h-24 bg-slate-800/50 border border-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur"
                    style={{
                      left: `${(i + 1) * 25}%`,
                      top: `${(i % 2) * 60}%`,
                    }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-1">{card.icon}</div>
                      <p className="text-xs font-semibold text-slate-300">{card.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                    whileHover={{ y: -10 }}
                  >
                    <div className="glass-effect p-6 rounded-2xl text-center group-hover:border-purple-500/50 transition-all duration-300">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                      <div className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text">
                  Why DisabilityWorks?
                </span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-3xl mx-auto">
                Creating India&apos;s most inclusive, athlete-focused platform for competitive and developmental sports
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -15, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="glass-effect p-8 rounded-3xl border border-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:shadow-lg transition-all`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text">
                  Our Programs
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group"
                >
                  <div className="glass-effect p-6 rounded-2xl text-center group-hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                    <div className="text-4xl mb-3">{program.icon}</div>
                    <h3 className="font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{program.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-blue-600/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                  Ready to Join the Movement?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Be part of India&apos;s most powerful platform transforming disability sports
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-xl hover:shadow-purple-500/50">
                      Volunteer Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/partnerships">
                    <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                      Become a Partner
                      <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
