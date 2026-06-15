'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Users, Building2, Trophy, TrendingUp, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const monthlyData = [
  { month: 'Jan', applications: 45, approvals: 35 },
  { month: 'Feb', applications: 52, approvals: 42 },
  { month: 'Mar', applications: 48, approvals: 40 },
  { month: 'Apr', applications: 61, approvals: 55 },
  { month: 'May', applications: 73, approvals: 65 },
  { month: 'Jun', applications: 82, approvals: 75 },
]

const recentActivities = [
  { id: 1, type: 'athlete_signup', name: 'Rahul Sharma', action: 'New athlete signup', time: '2 hours ago' },
  { id: 2, type: 'ngo_verified', name: 'Samarthanam Trust', action: 'Organization verified', time: '5 hours ago' },
  { id: 3, type: 'program_created', name: 'Swimming Excellence', action: 'New program created', time: '1 day ago' },
  { id: 4, type: 'athlete_signup', name: 'Priya Kumari', action: 'New athlete signup', time: '2 days ago' },
]

const stats = [
  { label: 'Total Athletes', value: 523, change: '+12%', icon: Users },
  { label: 'Organizations', value: 52, change: '+3%', icon: Building2 },
  { label: 'Active Programs', value: 42, change: '+8%', icon: Trophy },
  { label: 'Total Registrations', value: 1847, change: '+25%', icon: TrendingUp },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-foreground text-background sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">DisabilityWorks Admin</h1>
            <p className="text-sm opacity-70">Platform Management & Analytics</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-background/20 rounded-lg transition-all">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-background/20 rounded-lg transition-all">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                    <p className="text-xs text-success">{stat.change} this month</p>
                  </div>
                  <Icon className="h-8 w-8 text-primary/50" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {['overview', 'users', 'organizations', 'programs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-border hover:bg-primary/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Applications Chart */}
              <div className="rounded-lg border border-border bg-background p-6">
                <h2 className="text-lg font-bold mb-6">Applications & Approvals</h2>
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
                      dataKey="applications"
                      stroke="var(--primary)"
                      strokeWidth={2}
                      dot={{ fill: 'var(--primary)' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="approvals"
                      stroke="var(--accent)"
                      strokeWidth={2}
                      dot={{ fill: 'var(--accent)' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Growth Chart */}
              <div className="rounded-lg border border-border bg-background p-6">
                <h2 className="text-lg font-bold mb-6">Monthly Growth</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="month" stroke="var(--foreground)" opacity={0.5} />
                    <YAxis stroke="var(--foreground)" opacity={0.5} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                      labelStyle={{ color: 'var(--foreground)' }}
                    />
                    <Bar dataKey="approvals" fill="var(--primary)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="rounded-lg border border-border bg-background p-6">
              <h2 className="text-lg font-bold mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all">
                    <div>
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-sm text-foreground/60">{activity.action}</p>
                    </div>
                    <p className="text-xs text-foreground/50">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div
            className="rounded-lg border border-border bg-background p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-bold mb-6">User Management</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-foreground/70">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/70">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/70">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/70">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/70">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Avani Lekhara', email: 'avani@disabilityworks.com', type: 'Athlete', status: 'Active' },
                  { name: 'Samarthanam Trust', email: 'contact@samarthanam.org', type: 'Organization', status: 'Verified' },
                  { name: 'Rahul Sharma', email: 'rahul@example.com', type: 'Athlete', status: 'Pending' },
                ].map((user, index) => (
                  <tr key={index} className="border-b border-border hover:bg-primary/5 transition-all">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4 text-sm text-foreground/70">{user.email}</td>
                    <td className="py-3 px-4 text-sm">{user.type}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.status === 'Active' ? 'bg-success/10 text-success' :
                        user.status === 'Verified' ? 'bg-primary/10 text-primary' :
                        'bg-yellow-500/10 text-yellow-600'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary text-sm hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Organizations Tab */}
        {activeTab === 'organizations' && (
          <motion.div
            className="rounded-lg border border-border bg-background p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-bold mb-6">Organization Management</h2>
            <div className="space-y-4">
              {[
                { name: 'Samarthanam Trust', state: 'Karnataka', verified: true, programs: 4 },
                { name: 'Adventures Beyond Barriers', state: 'National', verified: true, programs: 3 },
                { name: 'SIVUS India', state: 'Maharashtra', verified: false, programs: 2 },
              ].map((org, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{org.name}</h3>
                      <p className="text-sm text-foreground/60">{org.state} • {org.programs} active programs</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {org.verified && (
                        <span className="px-2 py-1 bg-success/10 text-success rounded text-xs font-medium">Verified</span>
                      )}
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <motion.div
            className="rounded-lg border border-border bg-background p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-bold mb-6">Program Management</h2>
            <div className="space-y-4">
              {[
                { name: 'Adaptive Swimming Excellence', org: 'Samarthanam', status: 'Active', enrolled: 24, capacity: 30 },
                { name: 'Competitive Badminton', org: 'Pushpa Jaipuria', status: 'Active', enrolled: 20, capacity: 25 },
                { name: 'Para Athletics Academy', org: 'ICRS', status: 'Pending', enrolled: 12, capacity: 35 },
              ].map((program, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{program.name}</h3>
                      <p className="text-sm text-foreground/60">{program.org}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      program.status === 'Active' ? 'bg-success/10 text-success' : 'bg-yellow-500/10 text-yellow-600'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-foreground/60">Enrollment</span>
                        <span className="text-xs font-bold">{program.enrolled}/{program.capacity}</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(program.enrolled / program.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
