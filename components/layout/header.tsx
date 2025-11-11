"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navigation = [
    { name: 'Protocols', href: '/protocols/bryan-johnson' },
    { name: 'Articles', href: '/articles' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header 
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 top-6 w-[95%] max-w-6xl"
    >
      <div className="relative bg-white/70 backdrop-blur-2xl rounded-full shadow-2xl border border-white/30 overflow-hidden">
        {/* Gradient Background Behind Logo - Centered with Left & Right Fade */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[600px] pointer-events-none">
          <Image
            src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/IMG-GRADIENT.png"
            alt=""
            fill
            className="object-cover object-center opacity-40"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
        
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Left Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
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
            {/* Flame Emoji Behind Text */}
            <div className="absolute left-1/2 -translate-x-1/2 text-[100px] opacity-20 pointer-events-none select-none">
              🔥
            </div>
            {/* Logo Text */}
            <div className="relative h-20 w-auto -my-4">
              <Image
                src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/IMG-LOGO.png"
                alt="SaunaProtocol Logo"
                width={480}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
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

        {/* Get Started Button */}
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

