"use client"

import { useEffect, useRef } from 'react'

interface NoiseTextureProps {
  opacity?: number
}

export function NoiseTexture({ opacity = 0.5 }: NoiseTextureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match parent element (hero section)
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Generate noise function
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Random grayscale value (0-255)
        const gray = Math.floor(Math.random() * 256)
        
        // Random alpha (0-120) for varied visibility
        const alpha = Math.floor(Math.random() * 120)

        data[i] = gray       // Red
        data[i + 1] = gray   // Green
        data[i + 2] = gray   // Blue
        data[i + 3] = alpha  // Alpha
      }

      ctx.putImageData(imageData, 0, 0)
    }

    // Animate noise with 100ms throttle (10fps instead of 33fps - less GPU strain)
    let lastTime = 0
    const animate = (time: number) => {
      if (time - lastTime > 100) {
        generateNoise()
        lastTime = time
      }
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
      style={{
        filter: 'contrast(2.5) brightness(1.5)',
        opacity,
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden' as const,
      }}
    />
  )
}

