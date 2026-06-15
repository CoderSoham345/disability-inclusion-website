'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Medal, Trophy, Target } from 'lucide-react'

const athletes = [
  {
    name: 'Deepa Malik',
    sport: 'Shot Put',
    medals: 5,
    achievements: 'Paralympic Champion',
    state: 'Maharashtra',
    image: '🏅',
  },
  {
    name: 'Devendra Jhajharia',
    sport: 'Javelin Throw',
    medals: 3,
    achievements: 'World Record Holder',
    state: 'Rajasthan',
    image: '🎯',
  },
  {
    name: 'Mariyappan Thangavelu',
    sport: 'High Jump',
    medals: 2,
    achievements: 'Paralympic Gold',
    state: 'Tamil Nadu',
    image: '🏃',
  },
  {
    name: 'Sundar Singh Gurjar',
    sport: 'Shot Put',
    medals: 4,
    achievements: 'Asian Champion',
    state: 'Madhya Pradesh',
    image: '💪',
  },
  {
    name: 'Bhagyavati Sharma',
    sport: 'Badminton',
    medals: 3,
    achievements: 'Commonwealth Winner',
    state: 'Delhi',
    image: '🏸',
  },
  {
    name: 'Varun Singh Bhati',
    sport: 'Wheelchair Racing',
    medals: 4,
    achievements: 'National Record',
    state: 'Uttar Pradesh',
    image: '🚴',
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

export default function AthletesPage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 pt-20 pb-20">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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
            <span className="text-gradient">Meet Our Champions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            India&apos;s elite Paralympic athletes breaking barriers and inspiring millions
          </p>
        </motion.div>

        {/* Athletes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {athletes.map((athlete, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-effect p-6 rounded-3xl border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">{athlete.image}</div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{athlete.name}</h3>
                <p className="text-cyan-400 font-semibold mb-1">{athlete.sport}</p>
                <p className="text-slate-400 text-sm mb-4">{athlete.state}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Medal className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300">{athlete.medals} Olympic Medals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">{athlete.achievements}</span>
                  </div>
                </div>

                <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-lg">
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 px-8 glass-effect rounded-3xl border border-purple-500/20"
        >
          <h2 className="text-4xl font-black mb-6">
            <span className="text-gradient">Want to Support Our Athletes?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Every contribution helps us develop the next generation of champions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partnerships">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-xl">
                Become a Sponsor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
