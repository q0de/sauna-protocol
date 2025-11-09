import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    protocols: [
      { name: 'Bryan Johnson Protocol', href: '/protocols/bryan-johnson' },
      { name: 'Beginner Protocol', href: '/protocols/beginner' },
      { name: 'Advanced Protocol', href: '/protocols/advanced' },
    ],
    resources: [
      { name: 'All Articles', href: '/articles' },
      { name: 'Equipment Reviews', href: '/equipment' },
      { name: 'About Us', href: '/about' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-[#ff6b6b]">
              SaunaProtocol
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Evidence-based sauna protocols and equipment reviews to optimize your health.
            </p>
          </div>

          {/* Protocols */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Protocols</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.protocols.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#ff6b6b] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#ff6b6b] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#ff6b6b] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} SaunaProtocol. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Disclaimer: Consult with a healthcare professional before starting any sauna protocol.
          </p>
        </div>
      </div>
    </footer>
  )
}

