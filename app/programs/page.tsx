'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, BarChart3, Users } from 'lucide-react'

const programs = [
  {
    icon: '🏀',
    title: 'Adaptive Sports',
    description: 'Training programs tailored to all disability types with world-class coaching',
    stats: { athletes: '2000+', locations: '25+' },
    color: 'from-purple-500 to-purple-600',
    glow: 'purple',
  },
  {
    icon: '🏊',
    title: 'Rehabilitation Through Sports',
    description: 'Evidence-based rehabilitation using sports as a therapeutic tool',
    stats: { athletes: '1500+', locations: '20+' },
    color: 'from-cyan-500 to-blue-600',
    glow: 'cyan',
  },
  {
    icon: '🏕',
    title: 'Outdoor Recreation',
    description: 'Adventure activities and outdoor experiences for all abilities',
    stats: { athletes: '1000+', locations: '15+' },
    color: 'from-emerald-500 to-teal-600',
    glow: 'emerald',
  },
  {
    icon: '🧗',
    title: 'Adventure Activities',
    description: 'Extreme sports and challenging adventures that push boundaries',
    stats: { athletes: '800+', locations: '10+' },
    color: 'from-amber-500 to-orange-600',
    glow: 'amber',
  },
  {
    icon: '🏅',
    title: 'Athlete Development',
    description: 'Elite coaching and structured pathways to competitive sports excellence',
    stats: { athletes: '500+', locations: '12+' },
    color: 'from-pink-500 to-rose-600',
    glow: 'pink',
  },
  {
    icon: '🤝',
    title: 'Community Outreach',
    description: 'Grassroots programs bringing sports access to underserved communities',
    stats: { athletes: '5000+', locations: '30+' },
    color: 'from-blue-500 to-indigo-600',
    glow: 'blue',
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

export default function ProgramsPage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 pt-20 pb-20">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-600/5" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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
            <span className="text-gradient">Our Programs</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive sports programs designed to empower athletes with disabilities at every level
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-3xl border border-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${program.color} mb-6 group-hover:shadow-lg transition-all`}>
                  <span className="text-4xl">{program.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-slate-300 mb-6 flex-grow leading-relaxed">{program.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-purple-500/20">
                  <div>
                    <div className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                      {program.stats.athletes}
                    </div>
                    <p className="text-xs text-slate-400">Athletes Served</p>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
                      {program.stats.locations}
                    </div>
                    <p className="text-xs text-slate-400">Locations</p>
                  </div>
                </div>

                <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-lg">
                  Explore Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-8 glass-effect rounded-3xl border border-purple-500/20 mb-20"
        >
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="text-gradient">Program Impact</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '👥', label: 'Total Participants', value: '10,000+' },
              { icon: '🏆', label: 'Competitions Won', value: '500+' },
              { icon: '📚', label: 'Sessions Delivered', value: '5,000+' },
              { icon: '🌍', label: 'States Reached', value: '25' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                  {item.value}
                </div>
                <p className="text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Program */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 glass-effect p-10 rounded-3xl border border-cyan-500/30 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-black mb-6">
                <span className="text-gradient">Athlete Development Program</span>
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                Our flagship program identifies promising athletes and provides elite-level coaching, nutritional support, and mental health services to prepare them for international competition.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'World-class coaching staff',
                  'State-of-the-art facilities',
                  'Personalized training plans',
                  'Competition opportunities',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-xl">
                  Join Elite Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-7xl text-center opacity-20 group-hover:opacity-30 transition-opacity">
              🏅
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 px-8 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-blue-600/20 rounded-3xl border border-purple-500/20"
        >
          <h2 className="text-4xl font-black mb-6">
            <span className="text-gradient">Find Your Perfect Program</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re just starting or aiming for the Paralympics, we have the right program for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ngos">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-xl">
                Find Programs Near You
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
