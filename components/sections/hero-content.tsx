"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export function HeroContent() {
  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Badge */}
      <motion.div 
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wood-medium/50 border border-wood-light backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">New: The Blueprint Protocol</span>
      </motion.div>
      
      {/* Headline */}
      <motion.h1 
        variants={itemVariants}
        className="font-display font-bold text-5xl md:text-7xl leading-[1.1] text-white text-glow"
      >
        Science-Backed Sauna Protocols to{' '}
        <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
          Extend Healthspan
        </span>
      </motion.h1>
      
      {/* Description */}
      <motion.p 
        variants={itemVariants}
        className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
      >
        Discover evidence-based heat therapy routines, including Bryan Johnson's Blueprint, 
        designed for longevity, recovery, and HGH optimization.
      </motion.p>
      
      {/* Buttons */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4"
      >
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            href="/protocols/bryan-johnson"
            className="px-8 h-14 bg-primary hover:bg-orange-600 text-white text-lg font-bold rounded-xl transition-colors shadow-lg shadow-orange-900/30 flex items-center justify-center gap-2"
          >
            Start Bryan Johnson Protocol
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </Link>
        </motion.div>
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            href="/protocols"
            className="min-w-[220px] h-14 px-6 bg-white/5 hover:bg-white/10 text-white text-lg font-medium rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">grid_view</span>
            Browse All Protocols
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
