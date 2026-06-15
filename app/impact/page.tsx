'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const athleteData = [
  { sport: 'Shooting', count: 45 },
  { sport: 'Javelin', count: 38 },
  { sport: 'Badminton', count: 52 },
  { sport: 'Swimming', count: 29 },
  { sport: 'Archery', count: 35 },
]

const monthlyData = [
  { month: 'Jan', athletes: 120, programs: 15, ngos: 12 },
  { month: 'Feb', athletes: 150, programs: 18, ngos: 14 },
  { month: 'Mar', athletes: 180, programs: 22, ngos: 16 },
  { month: 'Apr', athletes: 220, programs: 28, ngos: 19 },
  { month: 'May', athletes: 270, programs: 35, ngos: 22 },
  { month: 'Jun', athletes: 320, programs: 42, ngos: 25 },
]

const disabilityData = [
  { name: 'Mobility', value: 35, color: '#2563eb' },
  { name: 'Visual', value: 28, color: '#dc2626' },
  { name: 'Hearing', value: 18, color: '#16a34a' },
  { name: 'Multiple', value: 19, color: '#ea580c' },
]

const stats = [
  { label: 'Total Athletes', value: '500+', change: '+25% this year' },
  { label: 'Active Programs', value: '42', change: '+15 this quarter' },
  { label: 'Partner Organizations', value: '50+', change: '+8 partnerships' },
  { label: 'States Covered', value: '15+', change: 'Nationwide reach' },
]

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">Impact Dashboard</h1>
          <p className="text-lg text-foreground/70">
            Real-time insights into disability sports inclusion across India
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 transition-all"
            >
              <p className="text-sm text-foreground/60 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-xs text-foreground/50">{stat.change}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Monthly Growth Chart */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-border bg-background p-6"
          >
            <h2 className="text-lg font-bold mb-6">Monthly Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--foreground)" opacity={0.5} />
                <YAxis stroke="var(--foreground)" opacity={0.5} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="athletes"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--primary)' }}
                />
                <Line
                  type="monotone"
                  dataKey="programs"
                  stroke="var(--accent)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--accent)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Sports Distribution Chart */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-border bg-background p-6"
          >
            <h2 className="text-lg font-bold mb-6">Athletes by Sport</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={athleteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="sport" stroke="var(--foreground)" opacity={0.5} />
                <YAxis stroke="var(--foreground)" opacity={0.5} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Bar dataKey="count" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Disability Categories Chart */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-border bg-background p-6"
          >
            <h2 className="text-lg font-bold mb-6">Disability Categories Served</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={disabilityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {disabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Program Categories */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-border bg-background p-6"
          >
            <h2 className="text-lg font-bold mb-6">Program Categories</h2>
            <div className="space-y-4">
              {[
                { name: 'Adaptive Sports', count: 12, color: 'bg-primary' },
                { name: 'Competitive Training', count: 15, color: 'bg-accent' },
                { name: 'Community Outreach', count: 10, color: 'bg-success' },
                { name: 'Rehabilitation', count: 5, color: 'bg-orange-500' },
              ].map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm font-bold">{category.count}</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className={`${category.color} h-2 rounded-full`}
                      style={{ width: `${(category.count / 15) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
