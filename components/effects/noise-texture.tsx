"use client"

import { useEffect, useRef } from 'react'

interface NoiseTextureProps {
  opacity?: number
  contrast?: number
  brightness?: number
  speed?: number
  className?: string
}

export const NoiseTexture = ({
  opacity = 0.04,
  contrast = 2.5,
  brightness = 1.5,
  speed = 18,
  className = ''
}: NoiseTextureProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let lastTime = 0
    const frameInterval = 1000 / speed

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const generateNoise = (timestamp: number) => {
      if (timestamp - lastTime < frameInterval) {
        animationId = requestAnimationFrame(generateNoise)
        return
      }
      lastTime = timestamp

      const imageData = ctx.createImageData(canvas.width, canvas.height)
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random() * 255
        const adjusted = Math.min(255, Math.max(0, ((noise - 128) * contrast + 128) * brightness))
        imageData.data[i] = adjusted
        imageData.data[i + 1] = adjusted
        imageData.data[i + 2] = adjusted
        imageData.data[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)

      animationId = requestAnimationFrame(generateNoise)
    }

    animationId = requestAnimationFrame(generateNoise)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [contrast, brightness, speed])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full mix-blend-overlay"
        style={{ opacity }}
      />
    </div>
  )
}
