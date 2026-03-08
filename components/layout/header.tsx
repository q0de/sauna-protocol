"use client"

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Protocols', href: '/protocols' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Science', href: '/articles' },
    { name: 'About', href: '/about' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-wood-light glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
<Link href="/" className="flex items-center gap-3 group">
                          <span className="material-symbols-outlined text-primary text-4xl">spa</span>
                          <span className="font-display font-bold text-2xl tracking-tight text-white">SaunaProtocol</span>
                        </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* CTA Button */}
            <Link
              href="/protocols/bryan-johnson"
              className="bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-lg shadow-orange-900/20"
            >
              Start Protocol
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-dark border-t border-wood-light">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-wood-medium text-primary'
                      : 'text-gray-300 hover:bg-wood-medium hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <Link
              href="/protocols/bryan-johnson"
              className="block w-full bg-primary hover:bg-orange-600 text-white text-center px-5 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-orange-900/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Protocol
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
