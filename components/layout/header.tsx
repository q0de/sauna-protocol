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
        {/* Gradient Background Behind Logo */}
        <div className="absolute left-0 top-0 bottom-0 w-[500px] pointer-events-none">
          <Image
            src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/IMG-GRADIENT.png"
            alt=""
            fill
            className="object-cover object-left opacity-40"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
        
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#f59e0b] rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-[#ff6b6b] to-[#f59e0b] p-2 rounded-lg">
                <Flame className="h-6 w-6 text-white" />
              </div>
            </div>
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-bold leading-6 text-gray-900 hover:text-[#ff6b6b] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
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

