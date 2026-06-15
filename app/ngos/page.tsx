'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, MapPin, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

// Sample NGO data - in production, this would come from the database
const ngos = [
  {
    id: '1',
    name: 'Samarthanam Trust for the Disabled',
    state: 'Karnataka',
    description: 'Leading NGO providing rehabilitation and adaptive sports programs',
    sports: ['Basketball', 'Archery', 'Swimming'],
    beneficiaries: 5000,
    verified: true,
  },
  {
    id: '2',
    name: 'Adventures Beyond Barriers Foundation',
    state: 'National',
    description: 'Outdoor recreation and adventure sports for athletes with disabilities',
    sports: ['Rock Climbing', 'Skiing', 'Hiking'],
    beneficiaries: 2000,
    verified: true,
  },
  {
    id: '3',
    name: 'Wheelchair Basketball Federation of India',
    state: 'Delhi',
    description: 'Competitive wheelchair basketball development and training',
    sports: ['Wheelchair Basketball'],
    beneficiaries: 1500,
    verified: true,
  },
  {
    id: '4',
    name: 'Pushpa Jaipuria Foundation',
    state: 'Rajasthan',
    description: 'Community outreach and youth development programs',
    sports: ['Para Athletics', 'Badminton'],
    beneficiaries: 3000,
    verified: true,
  },
  {
    id: '5',
    name: 'SIVUS India',
    state: 'Maharashtra',
    description: 'Inclusive sports and athlete development programs',
    sports: ['Multiple Sports'],
    beneficiaries: 4000,
    verified: false,
  },
  {
    id: '6',
    name: 'Tamana',
    state: 'Delhi',
    description: 'Disability inclusion through sports and community engagement',
    sports: ['Cricket', 'Table Tennis', 'Badminton'],
    beneficiaries: 2500,
    verified: true,
  },
]

const states = ['All States', 'National', 'Karnataka', 'Delhi', 'Rajasthan', 'Maharashtra', 'Tamil Nadu']

export default function NGODirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('All States')

  const filtered = ngos.filter((ngo) => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === 'All States' || ngo.state === selectedState
    return matchesSearch && matchesState
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">NGO Directory</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover organizations working to include athletes with disabilities through sports programs and community initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Search organizations by name or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* State Filter */}
            <div className="flex flex-wrap gap-2">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedState === state
                      ? 'bg-primary text-white'
                      : 'bg-border hover:bg-primary/10'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            <p className="text-sm text-foreground/60">
              Showing {filtered.length} organization{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* NGO Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filtered.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((ngo) => (
                <motion.div
                  key={ngo.id}
                  variants={itemVariants}
                  className="group rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold line-clamp-2">{ngo.name}</h3>
                        <div className="flex items-center gap-1 mt-2 text-sm text-foreground/60">
                          <MapPin className="h-4 w-4" />
                          {ngo.state}
                        </div>
                      </div>
                      {ngo.verified && (
                        <div className="px-2 py-1 bg-success/10 text-success rounded text-xs font-medium">
                          Verified
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 line-clamp-2">{ngo.description}</p>

                    {/* Sports */}
                    <div className="flex flex-wrap gap-2">
                      {ngo.sports.slice(0, 2).map((sport) => (
                        <span
                          key={sport}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {sport}
                        </span>
                      ))}
                      {ngo.sports.length > 2 && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                          +{ngo.sports.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-sm text-foreground/60">
                        <Users className="h-4 w-4" />
                        <span>{ngo.beneficiaries.toLocaleString()}+ beneficiaries</span>
                      </div>
                    </div>

                    {/* Button */}
                    <Button className="w-full mt-4">Learn More</Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No organizations found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedState('All States')
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
