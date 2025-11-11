'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function HeroWithVariants() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Locked to Authority variant (best for SEO + E-E-A-T)
  const content = {
    badge: "11 Equipment Reviews • 40+ Studies Cited",
    headline: "Science-Backed Sauna Protocols to Extend Your Healthspan",
    subheadline: "Complete sauna protocol guide covering dry sauna vs wet sauna benefits, optimal duration by experience level, and advanced protocols used by top biohackers. Backed by 40+ peer-reviewed studies.",
    cta: "Explore All Protocols"
  }

  return (
    <>

      <section className="relative overflow-hidden text-white min-h-screen flex items-center">
        {/* Canvas-Based Film Grain - Locked at 10% (Only on Hero) */}
        <NoiseTexture opacity={0.10} />
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          {/* Video Placeholder - Animated Gradient (behind video) */}
          <div 
            className={`absolute inset-0 z-0 bg-gradient-to-br from-[#ff6b6b] via-[#ff5252] to-[#f59e0b] transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              animation: videoLoaded ? 'none' : 'pulse 2s ease-in-out infinite'
            }}
          />
          
          {/* Video Layer */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => {
              console.log('Video failed to load, showing gradient fallback')
              setVideoLoaded(false)
            }}
            className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/sign/vid/sauna-protocol-vid.webm?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZjYwM2EwMS00ZmEwLTQ0M2YtODJhNi03ZmU4MDBmZjJiOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWQvc2F1bmEtcHJvdG9jb2wtdmlkLndlYm0iLCJpYXQiOjE3NjI3MjI2MTAsImV4cCI6MTc5NDI1ODYxMH0.JS-u_DL9wmxYMvqJADkrdNZa3QBdZfrFZZ4MYc-9CO8" type="video/webm" />
          </video>
          
          {/* Gradient Overlays (on top of video) */}
          {/* Mobile/Tablet: Full gradient */}
          <div 
            className="absolute inset-0 z-20 lg:hidden bg-gradient-to-br from-[#ff6b6b] via-[#ff5252] to-[#f59e0b]"
            style={{ opacity: 0.82 }}
          ></div>
          {/* Desktop: Extended left quarter gradient */}
          <div 
            className="hidden lg:block absolute inset-0 z-20"
            style={{ 
              background: 'linear-gradient(to right, rgba(255, 107, 107, 0.95) 0%, rgba(255, 82, 82, 0.92) 20%, rgba(245, 158, 11, 0.90) 35%, rgba(245, 158, 11, 0.70) 45%, rgba(245, 158, 11, 0.30) 55%, transparent 65%)'
            }}
          ></div>
        </div>
        
        {/* Content - Responsive Layout */}
        {/* Mobile/Tablet: Centered */}
        {/* Desktop: Left-aligned */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 w-full">
          <div className="mx-auto lg:mx-0 max-w-3xl lg:max-w-2xl text-center lg:text-left">
            <Badge 
              variant="featured" 
              className="mb-4 text-sm px-4 py-2 animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
            >
              {content.badge}
            </Badge>
            <h1 
              className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 drop-shadow-lg animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
            >
              {content.headline}
            </h1>
            <p 
              className="text-xl leading-8 mb-8 text-white/95 drop-shadow-md animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
            >
              {content.subheadline}
            </p>
            
            {/* Trust Signals - Authority Variant */}
            <div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Peer-Reviewed Research</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Hands-On Testing</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Transparent Reviews</span>
              </div>
            </div>
            
            {/* Main CTA Button - Centered on mobile, Left-aligned on desktop */}
            <div 
              className="flex flex-col items-center lg:items-start gap-6 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
            >
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl shadow-blue-900/40 hover:shadow-blue-900/60 transition-all duration-200 bg-gradient-to-br from-[#2196f3] via-[#1976d2] to-[#1565c0] border-b-4 border-[#0d47a1] hover:translate-y-[2px] active:translate-y-1"
              >
                <Link href="/protocols/bryan-johnson" className="flex items-center gap-3">
                  <span className="font-bold">{content.cta}</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              
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
    </>
  )
}

