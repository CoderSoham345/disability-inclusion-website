'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-foreground/70">
              Have questions about DisabilityWorks? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: MapPin,
                title: 'Address',
                details: ['India', 'Nationwide Operations'],
              },
              {
                icon: Phone,
                title: 'Phone',
                details: ['+91 (800) 123-4567', 'Mon-Fri 9AM-6PM IST'],
              },
              {
                icon: Mail,
                title: 'Email',
                details: ['info@disabilityworks.com', 'partner@disabilityworks.com'],
              },
            ].map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">{contact.title}</h3>
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-sm text-foreground/70">{detail}</p>
                  ))}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="border border-border rounded-lg p-8 bg-primary/5">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">
              Common questions about DisabilityWorks
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'How do I register as an athlete?',
                a: 'Click "Get Involved" and select the athlete option. Fill in your details and sports preferences. Our team will review your application within 5 business days.',
              },
              {
                q: 'Can my NGO join the platform?',
                a: 'Yes! Organizations working in disability sports can register. Submit your details, organization documents, and we&apos;ll verify your credentials.',
              },
              {
                q: 'How do I find programs in my area?',
                a: 'Visit the Programs page, use the search bar, and filter by location or sport type. You can see available spots and register instantly.',
              },
              {
                q: 'Is there a fee to use DisabilityWorks?',
                a: 'The platform itself is free. Individual programs may have participation fees set by the organizing organizations.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 border border-border rounded-lg bg-background hover:border-primary/50 transition-all"
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
