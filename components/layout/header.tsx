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
  
  // Detect scroll to shrink logo
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Use X-Large (index 3) when scrolled, otherwise use 3X-Large (index 5)
  const currentSize = logoSizes[isScrolled ? 3 : 5]

  const navigation = [
    { name: 'Protocols', href: '/protocols/bryan-johnson' },
    { name: 'Articles', href: '/articles' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header 
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-6xl"
      style={{ top: '3rem' }}
    >
      <div className={`relative rounded-full border transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-2xl border-white/30 shadow-2xl' 
          : 'bg-transparent border-transparent shadow-none'
      }`}>
        {/* Gradient Background Behind Logo - Centered with Left & Right Fade */}
        <div className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[600px] pointer-events-none transition-opacity duration-500 ${
          isScrolled ? 'opacity-40' : 'opacity-0'
        }`}>
          <Image
            src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/IMG-GRADIENT.png"
            alt=""
            fill
            className="object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
        
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 transition-all duration-300" aria-label="Global">
        {/* Left Navigation - Aligned with hero content */}
        <div className="hidden lg:flex lg:gap-x-8 lg:-ml-8">
          <Link
            href="/protocols/bryan-johnson"
            className="text-base font-bold leading-6 text-gray-900 hover:text-[#ff6b6b] transition-colors"
          >
            Protocols
          </Link>
          <Link
            href="/articles"
            className="text-base font-bold leading-6 text-gray-900 hover:text-[#ff6b6b] transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/equipment"
            className="text-base font-bold leading-6 text-gray-900 hover:text-[#ff6b6b] transition-colors"
          >
            Equipment
          </Link>
          <Link
            href="/about"
            className="text-base font-bold leading-6 text-gray-900 hover:text-[#ff6b6b] transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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

            {/* Centered Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <Link href="/" className="relative flex items-center group">
                {/* Logo Text */}
                <div 
                  className="relative w-auto object-contain"
                  style={{ 
                    height: `${currentSize.height}px`,
                    marginTop: `-${currentSize.marginY * 4}px`,
                    marginBottom: `-${currentSize.marginY * 4}px`,
                    transition: 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    willChange: 'height, margin'
                  }}
                >
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/IMG-LOGO.png"
                    alt="SaunaProtocol Logo"
                    width={currentSize.width}
                    height={currentSize.height}
                    className="h-full w-auto object-contain"
                    style={{
                      transition: 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      willChange: 'transform'
                    }}
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right - Get Started Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  )
}

