'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, MapPin, Zap } from 'lucide-react'

const ngos = [
  {
    id: 1,
    name: 'Samarthanam Trust',
    state: 'Karnataka',
    athletes: 500,
    programs: 12,
    icon: '🏋️',
    description: 'Leading rehabilitation and adaptive sports',
  },
  {
    id: 2,
    name: 'Beyond Barriers',
    state: 'Maharashtra',
    athletes: 300,
    programs: 8,
    icon: '🧗',
    description: 'Adventure sports and outdoor recreation',
  },
  {
    id: 3,
    name: 'Wheelchair Sports India',
    state: 'Delhi',
    athletes: 450,
    programs: 15,
    icon: '🚴',
    description: 'Competitive wheelchair sports',
  },
  {
    id: 4,
    name: 'Para Badminton Academy',
    state: 'Telangana',
    athletes: 200,
    programs: 6,
    icon: '🏸',
    description: 'Badminton coaching and training',
  },
  {
    id: 5,
    name: 'Swimming for All',
    state: 'Tamil Nadu',
    athletes: 350,
    programs: 10,
    icon: '🏊',
    description: 'Swimming programs and rehabilitation',
  },
  {
    id: 6,
    name: 'Archery Excellence',
    state: 'Rajasthan',
    athletes: 150,
    programs: 5,
    icon: '🏹',
    description: 'Competitive archery training',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function NGOsPage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 pt-20 pb-20">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-gradient">Explore NGOs</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover partner organizations making real impact across India&apos;s disability sports ecosystem
          </p>
        </motion.div>

        {/* NGOs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {ngos.map((ngo) => (
            <motion.div
              key={ngo.id}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-3xl border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500 h-full flex flex-col">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{ngo.icon}</div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{ngo.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <p className="text-emerald-400 font-semibold">{ngo.state}</p>
                </div>

                <p className="text-slate-300 mb-6 flex-grow">{ngo.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-purple-500/20">
                  <div>
                    <div className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                      {ngo.athletes}+
                    </div>
                    <p className="text-xs text-slate-400">Athletes</p>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
                      {ngo.programs}
                    </div>
                    <p className="text-xs text-slate-400">Programs</p>
                  </div>
                </div>

                <Button size="sm" className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 hover:shadow-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { icon: '🌍', label: 'States Covered', value: '15+' },
            { icon: '👥', label: 'Total Beneficiaries', value: '30K+' },
            { icon: '⚡', label: 'Programs Delivered', value: '100+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-effect p-8 rounded-2xl text-center border border-purple-500/20"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                {stat.value}
              </div>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 px-8 glass-effect rounded-3xl border border-emerald-500/20"
        >
          <h2 className="text-4xl font-black mb-6">
            <span className="text-gradient">Partner With Us</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Your NGO can make a difference. Join DisabilityWorks to reach more athletes and expand your impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partnerships">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:shadow-xl">
                Register Your NGO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400">
                Get More Info
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
