'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Globe } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Inclusion First',
    description: 'We believe every athlete with disabilities deserves access to world-class sports opportunities and community support.',
  },
  {
    icon: Users,
    title: 'Community Power',
    description: 'By connecting athletes, organizations, and supporters, we create a movement that transforms lives through sports.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We support athletes in pursuing competitive excellence, from grassroots to international paralympic levels.',
  },
  {
    icon: Globe,
    title: 'Nationwide Impact',
    description: 'Our mission is to create opportunities across India, reaching underserved communities and building sustainable programs.',
  },
]

const timeline = [
  { year: '2020', event: 'DisabilityWorks founded with mission to unite disability sports community' },
  { year: '2021', event: 'Launched athlete database and NGO directory with 50+ organizations' },
  { year: '2022', event: 'Expanded to 15 states, reached 20,000+ beneficiaries' },
  { year: '2023', event: 'Added admin dashboard and advanced program management tools' },
  { year: '2024', event: 'Reached 500+ athletes and 50+ partner organizations' },
  { year: '2025', event: 'Launched full platform with analytics, blog, and impact dashboard' },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About DisabilityWorks</h1>
            <p className="text-xl text-foreground/70">
              Empowering athletes with disabilities through sports, community, and boundless possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              DisabilityWorks exists to connect athletes with disabilities across India to quality training programs, expert coaching, and a supportive community. We believe that disability should never limit athletic potential. By building inclusive platforms and fostering partnerships between athletes, organizations, and supporters, we're creating unprecedented opportunities for Para-sports excellence and community empowerment.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-foreground/70">
              From vision to transforming disability sports in India
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timeline.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-20 bg-primary/30 mt-2"></div>
                  )}
                </div>
                <div className="pb-6">
                  <p className="font-bold text-primary">{item.year}</p>
                  <p className="text-foreground/70">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '500+', label: 'Athletes' },
              { number: '50+', label: 'Organizations' },
              { number: '15+', label: 'States' },
              { number: '30K+', label: 'Beneficiaries' },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-foreground/70">
              Dedicated professionals committed to disability sports inclusion
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: 'Asha Sharma', role: 'Founder & Executive Director', expertise: 'Disability Sports Advocate' },
              { name: 'Rajesh Kumar', role: 'Head of Programs', expertise: 'Sports Management' },
              { name: 'Priya Singh', role: 'Community Lead', expertise: 'NGO Partnerships' },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border border-border text-center hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center text-2xl">
                  👤
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-foreground/70 mb-2">{member.role}</p>
                <p className="text-xs text-primary">{member.expertise}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
