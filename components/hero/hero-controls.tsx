"use client"

import { useState } from 'react'
import { Settings } from 'lucide-react'

export function HeroControls() {
  const [isOpen, setIsOpen] = useState(false)
  const [gradientOpacity, setGradientOpacity] = useState(75)
  const [noiseOpacity, setNoiseOpacity] = useState(35)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Control Panel */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-xl shadow-2xl p-6 w-72 border-2 border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Hero Controls
          </h3>
          
          {/* Gradient Opacity */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gradient Opacity: {gradientOpacity}%
            </label>
            <input
              type="range"
              min="50"
              max="95"
              value={gradientOpacity}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                setGradientOpacity(val)
                document.documentElement.style.setProperty('--hero-gradient-opacity', `${val / 100}`)
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff6b6b]"
            />
            <div className="text-xs text-gray-500 mt-1">Lower = more video visible</div>
          </div>

          {/* Noise Opacity */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Film Grain: {noiseOpacity}%
            </label>
            <input
              type="range"
              min="0"
              max="70"
              value={noiseOpacity}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                setNoiseOpacity(val)
                const canvas = document.querySelector('canvas[class*="mix-blend-overlay"]')
                if (canvas) {
                  (canvas as HTMLElement).style.opacity = `${val / 100}`
                }
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff6b6b]"
            />
            <div className="text-xs text-gray-500 mt-1">Real-time animated grain (0-70%)</div>
          </div>

          <button
            onClick={() => {
              setGradientOpacity(75)
              setNoiseOpacity(35)
              document.documentElement.style.setProperty('--hero-gradient-opacity', '0.75')
              const canvas = document.querySelector('canvas[class*="mix-blend-overlay"]')
              if (canvas) {
                (canvas as HTMLElement).style.opacity = '0.35'
              }
            }}
            className="w-full text-sm py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Reset to Default
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white hover:bg-gray-50 text-gray-900 rounded-full p-4 shadow-2xl border-2 border-gray-200 transition-all hover:scale-110"
        title="Hero Controls"
      >
        <Settings className="h-5 w-5" />
      </button>
    </div>
  )
}

