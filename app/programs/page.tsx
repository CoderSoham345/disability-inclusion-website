'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, TrendingUp, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const programs = [
  {
    id: '1',
    name: 'Adaptive Swimming Excellence Program',
    category: 'Adaptive Sports',
    organization: 'Samarthanam Trust',
    location: 'Bangalore, Karnataka',
    startDate: '2024-07-01',
    capacity: 30,
    enrolled: 24,
    fee: 5000,
    description: 'Intensive swimming training for athletes with visual and mobility disabilities',
    image: '🏊',
  },
  {
    id: '2',
    name: 'Competitive Badminton Development',
    category: 'Competitive Sports',
    organization: 'Pushpa Jaipuria Foundation',
    location: 'Jaipur, Rajasthan',
    startDate: '2024-06-15',
    capacity: 25,
    enrolled: 20,
    fee: 3000,
    description: 'Para-badminton training with national coaches',
    image: '🏸',
  },
  {
    id: '3',
    name: 'Outdoor Adventure Expedition',
    category: 'Outdoor Recreation',
    organization: 'Adventures Beyond Barriers',
    location: 'Himachal Pradesh',
    startDate: '2024-08-01',
    capacity: 15,
    enrolled: 12,
    fee: 8000,
    description: 'Rock climbing and trekking for experienced adventurers',
    image: '⛰️',
  },
  {
    id: '4',
    name: 'Community Sports Outreach',
    category: 'Community Outreach',
    organization: 'Tamana',
    location: 'Delhi',
    startDate: '2024-07-10',
    capacity: 50,
    enrolled: 38,
    fee: 2000,
    description: 'Cricket and athletics programs for all disability categories',
    image: '🏏',
  },
  {
    id: '5',
    name: 'Wheelchair Basketball League',
    category: 'Competitive Sports',
    organization: 'WBFI',
    location: 'Mumbai, Maharashtra',
    startDate: '2024-09-01',
    capacity: 40,
    enrolled: 35,
    fee: 6000,
    description: 'National wheelchair basketball tournament preparation',
    image: '🏀',
  },
  {
    id: '6',
    name: 'Para Athletics Academy',
    category: 'Athlete Development',
    organization: 'ICRS',
    location: 'Chennai, Tamil Nadu',
    startDate: '2024-07-20',
    capacity: 35,
    enrolled: 28,
    fee: 7000,
    description: 'Professional track and field training program',
    image: '🏃',
  },
]

const categories = ['All Programs', 'Adaptive Sports', 'Competitive Sports', 'Outdoor Recreation', 'Athlete Development', 'Community Outreach']

export default function ProgramsDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Programs')
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  const filtered = programs.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All Programs' || program.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sports Programs</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore and register for adaptive sports, competitive training, and community programs across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Search programs or organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category ? 'bg-primary text-white' : 'bg-border hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <p className="text-sm text-foreground/60">Found {filtered.length} program{filtered.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filtered.length > 0 ? (
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((program) => {
                const spotsLeft = program.capacity - program.enrolled
                const isFull = spotsLeft === 0
                const percentFull = (program.enrolled / program.capacity) * 100

                return (
                  <motion.div
                    key={program.id}
                    variants={itemVariants}
                    className="border border-border rounded-lg bg-background hover:border-primary/50 overflow-hidden transition-all"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left: Program Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{program.image}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold">{program.name}</h3>
                                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                                  {program.category}
                                </span>
                              </div>
                              <p className="text-sm text-foreground/60 mb-4">{program.description}</p>
                              <p className="text-sm font-medium mb-4">{program.organization}</p>

                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-foreground/50" />
                                  {new Date(program.startDate).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-foreground/50" />
                                  {program.location}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4 text-foreground/50" />
                                  {program.enrolled}/{program.capacity} enrolled
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right: Enrollment and Action */}
                        <div className="lg:col-span-1">
                          <div className="space-y-4">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Enrollment</span>
                                <span className="text-sm font-bold text-primary">{percentFull.toFixed(0)}%</span>
                              </div>
                              <div className="w-full bg-border rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full transition-all"
                                  style={{ width: `${percentFull}%` }}
                                ></div>
                              </div>
                            </div>

                            <div className="bg-background border border-border rounded-lg p-3">
                              <p className="text-xs text-foreground/60 mb-1">Fee:</p>
                              <p className="text-2xl font-bold text-primary">₹{program.fee.toLocaleString()}</p>
                            </div>

                            <div>
                              {isFull ? (
                                <Button disabled className="w-full">
                                  Program Full
                                </Button>
                              ) : (
                                <Button
                                  className="w-full"
                                  onClick={() => setSelectedProgram(program.id)}
                                >
                                  {spotsLeft} Spots Left - Register
                                </Button>
                              )}
                            </div>

                            <p className="text-xs text-foreground/50 text-center">
                              {spotsLeft} spot{spotsLeft !== 1 ? 's' : ''} available
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No programs found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All Programs')
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
