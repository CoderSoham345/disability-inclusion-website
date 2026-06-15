'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: '1',
    title: 'Avani Lekhara: Breaking Records and Barriers',
    category: 'Success Stories',
    author: 'Admin',
    date: '2024-06-15',
    excerpt: 'How India\'s youngest Paralympic gold medalist is inspiring a generation of athletes with disabilities',
    image: '🎯',
  },
  {
    id: '2',
    title: 'The Rise of Para-Badminton in India',
    category: 'Sports News',
    author: 'Sports Correspondent',
    date: '2024-06-10',
    excerpt: 'Inside the para-badminton revolution: From grassroots to international championships',
    image: '🏸',
  },
  {
    id: '3',
    title: 'Inclusive Sports: Building Communities Beyond Competition',
    category: 'Community',
    author: 'Editor',
    date: '2024-06-05',
    excerpt: 'How adaptive sports programs are creating lasting social change and breaking stereotypes',
    image: '🤝',
  },
  {
    id: '4',
    title: 'Corporate Partnerships: Funding the Future of Para-Sports',
    category: 'Partnerships',
    author: 'Admin',
    date: '2024-05-30',
    excerpt: 'How corporations are stepping up to support disability sports initiatives across India',
    image: '💼',
  },
  {
    id: '5',
    title: 'Training Tips from Paralympic Athletes',
    category: 'Training',
    author: 'Coach Sarah',
    date: '2024-05-25',
    excerpt: 'Expert advice on strength training, mental resilience, and competition preparation',
    image: '💪',
  },
  {
    id: '6',
    title: 'International Opportunities for Indian Para-Athletes',
    category: 'Opportunities',
    author: 'Admin',
    date: '2024-05-20',
    excerpt: 'A comprehensive guide to global competitions and scholarship opportunities',
    image: '🌍',
  },
]

const categories = ['All', 'Success Stories', 'Sports News', 'Community', 'Training']

export default function Blog() {
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
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog & News</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Stories, insights, and updates from the world of disability sports in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border bg-background sticky top-16 z-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-border hover:bg-primary hover:text-white transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group rounded-lg border border-border bg-background overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col h-full">
                  {/* Image */}
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                    {post.image}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category */}
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium mb-3 w-fit">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>

                    {/* Excerpt */}
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                    </div>

                    {/* Read More */}
                    <Link href={`/blog/${post.id}`} className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-foreground/70 mb-6">Subscribe to our newsletter for the latest updates in disability sports</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
