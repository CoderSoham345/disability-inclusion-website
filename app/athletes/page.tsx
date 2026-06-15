'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, Medal, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const athletes = [
  {
    id: '1',
    name: 'Avani Lekhara',
    sport: 'Shooting',
    state: 'Madhya Pradesh',
    medals: { gold: 2, silver: 1, bronze: 0 },
    achievement: 'Youngest Paralympic gold medalist from India',
    ambassadorPotential: 'Very High',
    image: '🎯',
  },
  {
    id: '2',
    name: 'Sumit Antil',
    sport: 'Javelin',
    state: 'Haryana',
    medals: { gold: 2, silver: 0, bronze: 0 },
    achievement: '7x World Record holder',
    ambassadorPotential: 'Very High',
    image: '🎪',
  },
  {
    id: '3',
    name: 'Devendra Jhajharia',
    sport: 'Javelin',
    state: 'Rajasthan',
    medals: { gold: 3, silver: 1, bronze: 0 },
    achievement: 'Most decorated Indian Paralympian, PCI President',
    ambassadorPotential: 'Very High',
    image: '🎪',
  },
  {
    id: '4',
    name: 'Mariyappan Thangavelu',
    sport: 'High Jump',
    state: 'Tamil Nadu',
    medals: { gold: 1, silver: 2, bronze: 0 },
    achievement: 'Young para-athlete with massive social media following',
    ambassadorPotential: 'Very High',
    image: '⛹️',
  },
  {
    id: '5',
    name: 'Pramod Bhagat',
    sport: 'Badminton',
    state: 'Odisha',
    medals: { gold: 4, silver: 0, bronze: 1 },
    achievement: 'Para-badminton pioneer and World Champion',
    ambassadorPotential: 'Very High',
    image: '🏸',
  },
  {
    id: '6',
    name: 'Manasi Joshi',
    sport: 'Badminton',
    state: 'Telangana',
    medals: { gold: 2, silver: 1, bronze: 1 },
    achievement: 'Women\'s sports champion and role model',
    ambassadorPotential: 'High',
    image: '🏸',
  },
]

const sports = ['All Sports', 'Shooting', 'Javelin', 'High Jump', 'Badminton', 'Archery', 'Swimming']
const potentials = ['All Athletes', 'Very High', 'High', 'Medium']

export default function AthletesDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSport, setSelectedSport] = useState('All Sports')
  const [selectedPotential, setSelectedPotential] = useState('All Athletes')

  const filtered = athletes.filter((athlete) => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSport = selectedSport === 'All Sports' || athlete.sport === selectedSport
    const matchesPotential = selectedPotential === 'All Athletes' || athlete.ambassadorPotential === selectedPotential
    return matchesSearch && matchesSport && matchesPotential
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const totalMedals = athletes.reduce((acc, a) => acc + a.medals.gold + a.medals.silver + a.medals.bronze, 0)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Elite Para-Athletes</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet India&apos;s Paralympic champions and rising stars. Athletes breaking barriers and inspiring millions
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{athletes.length}+</div>
                <div className="text-sm text-foreground/60">Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{totalMedals}+</div>
                <div className="text-sm text-foreground/60">Medals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-foreground/60">Sports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-foreground/60">States</div>
              </div>
            </div>
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
                placeholder="Search athletes by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Sport Filter */}
            <div>
              <p className="text-sm font-medium mb-2">Sport</p>
              <div className="flex flex-wrap gap-2">
                {sports.map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedSport === sport ? 'bg-primary text-white' : 'bg-border hover:bg-primary/10'
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>

            {/* Ambassador Potential Filter */}
            <div>
              <p className="text-sm font-medium mb-2">Ambassador Potential</p>
              <div className="flex flex-wrap gap-2">
                {potentials.map((potential) => (
                  <button
                    key={potential}
                    onClick={() => setSelectedPotential(potential)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedPotential === potential ? 'bg-accent text-white' : 'bg-border hover:bg-accent/10'
                    }`}
                  >
                    {potential}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-foreground/60">Showing {filtered.length} athlete{filtered.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filtered.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((athlete) => (
                <motion.div
                  key={athlete.id}
                  variants={itemVariants}
                  className="group rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    {/* Header with Avatar */}
                    <div className="flex items-start justify-between">
                      <div className="text-5xl mb-2">{athlete.image}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        athlete.ambassadorPotential === 'Very High'
                          ? 'bg-success/10 text-success'
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {athlete.ambassadorPotential}
                      </div>
                    </div>

                    {/* Name and Sport */}
                    <div>
                      <h3 className="text-xl font-bold">{athlete.name}</h3>
                      <p className="text-sm text-foreground/60">{athlete.sport}</p>
                      <p className="text-xs text-foreground/50 mt-1">📍 {athlete.state}</p>
                    </div>

                    {/* Achievement */}
                    <p className="text-sm text-foreground/70 italic">&quot;{athlete.achievement}&quot;</p>

                    {/* Medals */}
                    <div className="flex items-center gap-6 pt-4 border-t border-border">
                      {athlete.medals.gold > 0 && (
                        <div className="flex items-center gap-2">
                          <Medal className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-bold">{athlete.medals.gold} Gold</span>
                        </div>
                      )}
                      {athlete.medals.silver > 0 && (
                        <div className="flex items-center gap-2">
                          <Medal className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-bold">{athlete.medals.silver}</span>
                        </div>
                      )}
                      {athlete.medals.bronze > 0 && (
                        <div className="flex items-center gap-2">
                          <Medal className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-bold">{athlete.medals.bronze}</span>
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <Button className="w-full mt-4">View Profile</Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No athletes found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedSport('All Sports')
                  setSelectedPotential('All Athletes')
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
