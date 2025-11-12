"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const logoSizes = [
  { label: 'Small (Current)', height: 80, width: 480, marginY: 4 },
  { label: 'Medium', height: 96, width: 576, marginY: 6 },
  { label: 'Large', height: 112, width: 672, marginY: 8 },
  { label: 'X-Large', height: 128, width: 768, marginY: 10 },
  { label: '2X-Large', height: 144, width: 864, marginY: 14 },
  { label: '3X-Large', height: 160, width: 960, marginY: 16 },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Detect scroll to shrink logo with hysteresis to prevent flickering
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // Add 5px hysteresis to prevent flickering at threshold
          if (scrollY > 55 && !isScrolled) {
            setIsScrolled(true)
          } else if (scrollY < 45 && isScrolled) {
            setIsScrolled(false)
          }
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])
  
  // Use X-Large (index 3) when scrolled, otherwise use 3X-Large (index 5)
  // On mobile, use smaller sizes: Medium (index 1) when scrolled, Large (index 2) otherwise
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const currentSize = isMobile 
    ? logoSizes[isScrolled ? 1 : 2]  // Mobile: Medium when scrolled, Large otherwise
    : logoSizes[isScrolled ? 3 : 5]  // Desktop: X-Large when scrolled, 3X-Large otherwise

  const navigation = [
    { name: 'Protocols', href: '/protocols/bryan-johnson' },
    { name: 'Articles', href: '/articles' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header 
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[98%] max-w-7xl"
      style={{ 
        top: isMobile ? '1rem' : '4rem'
      }}
    >
      <div 
        className={`relative rounded-full border transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-xl border-white/30 shadow-2xl' 
            : 'bg-transparent border-transparent shadow-none'
        }`}
        style={{ 
          willChange: isScrolled ? 'auto' : 'background, backdrop-filter, border, box-shadow',
          transform: 'translateZ(0)'
        }}
      >
        {/* CSS Gradient Background Behind Logo - Centered with Left & Right Fade */}
        <div 
          className={`absolute top-0 bottom-0 w-[600px] pointer-events-none transition-opacity duration-300 ${
            isScrolled ? 'opacity-40' : 'opacity-0'
          }`}
          style={{ 
            left: '50%',
            transform: 'translateX(-50%) translateZ(0)',
            willChange: 'opacity',
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 50%, #f59e0b 100%)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
          }}
        />
        
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 transition-all duration-300" aria-label="Global">
        {/* Left Navigation - Aligned with hero content */}
        <div className="hidden lg:flex lg:gap-x-8 lg:-ml-1">
          <Link
            href="/protocols/bryan-johnson"
            className={`text-base font-bold leading-6 transition-colors ${
              isScrolled 
                ? 'text-gray-900 hover:text-[#ff6b6b]' 
                : 'text-white hover:text-white/80'
            }`}
          >
            Protocols
          </Link>
          <Link
            href="/articles"
            className={`text-base font-bold leading-6 transition-colors ${
              isScrolled 
                ? 'text-gray-900 hover:text-[#ff6b6b]' 
                : 'text-white hover:text-white/80'
            }`}
          >
            Articles
          </Link>
          <Link
            href="/equipment"
            className={`text-base font-bold leading-6 transition-colors ${
              isScrolled 
                ? 'text-gray-900 hover:text-[#ff6b6b]' 
                : 'text-white hover:text-white/80'
            }`}
          >
            Equipment
          </Link>
          <Link
            href="/about"
            className={`text-base font-bold leading-6 transition-colors ${
              isScrolled 
                ? 'text-gray-900 hover:text-[#ff6b6b]' 
                : 'text-white hover:text-white/80'
            }`}
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

            {/* Centered Logo - Hidden on mobile when menu is open */}
            <div className={`absolute left-1/2 -translate-x-1/2 flex items-center transition-opacity duration-300 ${
              mobileMenuOpen ? 'lg:opacity-100 opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <Link href="/" className="relative flex items-center group">
                {/* Logo Text */}
                <div 
                  className="relative w-auto object-contain"
                  style={{ 
                    height: `${currentSize.height}px`,
                    marginTop: `-${currentSize.marginY * 4}px`,
                    marginBottom: `-${currentSize.marginY * 4}px`,
                    transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    willChange: 'height, margin'
                  }}
                >
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/IMG-LOGO.webp"
                    alt="SaunaProtocol Logo"
                    width={currentSize.width}
                    height={currentSize.height}
                    className="h-full w-auto object-contain"
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      willChange: 'transform'
                    }}
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right - Get Started Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button 
            asChild 
            className={`transition-all duration-300 ${
              isScrolled 
                ? '' 
                : 'bg-white text-[#ff6b6b] hover:bg-white/90'
            }`}
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/IMG-LOGO.webp"
                  alt="SaunaProtocol Logo"
                  width={240}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto py-6 px-6">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Footer with CTA */}
            <div className="border-t p-6">
              <Button asChild className="w-full" size="lg">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  )
}

