'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Trophy, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Active Athletes', value: '500+' },
  { label: 'Partner Organizations', value: '50+' },
  { label: 'States Covered', value: '15+' },
  { label: 'Beneficiaries Reached', value: '30K+' },
]

const features = [
  {
    icon: Users,
    title: 'Athlete Development',
    description: 'Connect with elite Paralympians and access world-class training programs',
  },
  {
    icon: Trophy,
    title: 'Competitive Sports',
    description: 'Participate in competitions from local to international para-sports events',
  },
  {
    icon: Zap,
    title: 'Community Support',
    description: 'Join a thriving community of athletes, coaches, and disability sports advocates',
  },
]

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-primary">Empower</span> Athletes with Disabilities
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 mb-8">
                Join India&apos;s largest platform connecting athletes with disabilities to sports programs, expert coaching, and a vibrant community of advocates. Adaptive sports. Competitive excellence. Inclusive opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/athletes">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Athletes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/ngos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Find Programs
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-96 sm:h-full min-h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center"
            >
              <div className="text-6xl">🏅</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Join DisabilityWorks?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We connect athletes, organizations, and supporters to create opportunities for excellence and inclusion
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you&apos;re an athlete, organization, or supporter, there&apos;s a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
