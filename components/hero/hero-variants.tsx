"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { ArrowRight } from 'lucide-react'

export function HeroWithVariants() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Canvas-Based Film Grain - Locked at 10% (Only on Hero) */}
      <NoiseTexture opacity={0.10} />
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/sign/vid/sauna-protocol-vid.webm?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZjYwM2EwMS00ZmEwLTQ0M2YtODJhNi03ZmU4MDBmZjJiOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWQvc2F1bmEtcHJvdG9jb2wtdmlkLndlYm0iLCJpYXQiOjE3NjI3MjI2MTAsImV4cCI6MTc5NDI1ODYxMH0.JS-u_DL9wmxYMvqJADkrdNZa3QBdZfrFZZ4MYc-9CO8" type="video/webm" />
        </video>
        
        {/* Responsive Gradient Overlay */}
        {/* Mobile/Tablet: Full gradient */}
        <div 
          className="absolute inset-0 lg:hidden bg-gradient-to-br from-[#ff6b6b] via-[#ff5252] to-[#f59e0b]"
          style={{ opacity: 0.82 }}
        ></div>
        {/* Desktop: Extended left quarter gradient */}
        <div 
          className="hidden lg:block absolute inset-0"
          style={{ 
            background: 'linear-gradient(to right, rgba(255, 107, 107, 0.95) 0%, rgba(255, 82, 82, 0.92) 20%, rgba(245, 158, 11, 0.90) 35%, rgba(245, 158, 11, 0.70) 45%, rgba(245, 158, 11, 0.30) 55%, transparent 65%)'
          }}
        ></div>
      </div>
      
      {/* Content - Responsive Layout */}
      {/* Mobile/Tablet: Centered */}
      {/* Desktop: Left-aligned */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto lg:mx-0 max-w-3xl lg:max-w-2xl text-center lg:text-left">
          <Badge variant="featured" className="mb-4 text-sm px-4 py-2">
            Featured: Bryan Johnson's 200°F Protocol
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 drop-shadow-lg">
            Master Your Sauna Protocol
          </h1>
          <p className="text-xl leading-8 mb-8 text-white/95 drop-shadow-md">
            Evidence-based sauna protocols and equipment reviews to optimize your health, backed by science and real results.
          </p>
          
          {/* Main CTA Button - Centered on mobile, Left-aligned on desktop */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl shadow-blue-900/40 hover:shadow-blue-900/60 transition-all duration-200 bg-gradient-to-br from-[#2196f3] via-[#1976d2] to-[#1565c0] border-b-4 border-[#0d47a1] hover:border-b-2 hover:translate-y-1"
              >
                <Link href="/protocols/bryan-johnson" className="flex items-center gap-3">
                  <span className="font-bold">Explore Bryan Johnson's Protocol</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            {/* Browse Articles - Text Link Below */}
            <Link 
              href="/articles" 
              className="text-white/90 hover:text-white text-base font-medium underline underline-offset-4 decoration-white/50 hover:decoration-white transition-all"
            >
              Browse Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

