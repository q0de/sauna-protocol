"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  scale?: number
  lift?: number
}

export function HoverCard({ 
  children, 
  className = '',
  scale = 1.02,
  lift = 4
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale, 
        y: -lift,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 17 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
