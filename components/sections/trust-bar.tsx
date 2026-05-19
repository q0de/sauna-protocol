"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
}

const stats = [
  { icon: "science", value: "5", label: "Core Sources", href: "/#research-sources", hasBorder: true },
  { icon: "article", value: "4", label: "Evidence Guides", href: "/articles", hasBorder: true },
  { icon: "verified", value: "12", label: "Protocol Pages", href: "/protocols", hasBorder: true },
  { icon: "medical_services", value: "Safety", label: "Medical Cautions", href: "/disclaimer", hasBorder: false },
]

export function TrustBar() {
  return (
    <motion.div 
      className="relative z-20 border-y border-wood-light bg-wood-dark/90 backdrop-blur-sm py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`flex items-center justify-center gap-3 ${stat.hasBorder ? 'md:border-r border-wood-light/30' : ''}`}
            >
              <Link href={stat.href} className="flex items-center justify-center gap-3 group">
                <span className="material-symbols-outlined text-primary text-3xl">{stat.icon}</span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-display text-white group-hover:text-primary transition-colors">{stat.value}</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
