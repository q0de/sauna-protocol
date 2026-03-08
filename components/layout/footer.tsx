import Link from 'next/link'

const footerLinks = {
  protocols: [
    { name: 'All Protocols', href: '/protocols' },
    { name: 'Bryan Johnson Protocol', href: '/protocols/bryan-johnson' },
    { name: 'Beginner Protocol', href: '/protocols/beginner' },
    { name: 'Advanced Protocol', href: '/protocols/advanced' },
    { name: 'Contrast Therapy', href: '/protocols/contrast' },
  ],
  reviews: [
    { name: 'Best Infrared Saunas', href: '/reviews/best-infrared-saunas' },
    { name: 'Clearlight Review', href: '/reviews/clearlight' },
    { name: 'Sunlighten Review', href: '/reviews/sunlighten' },
    { name: 'Equipment', href: '/equipment' },
  ],
  science: [
    { name: 'Latest Research', href: '/articles' },
    { name: 'Red Light Therapy Guide', href: '/articles/red-light-therapy-guide' },
    { name: 'Dry vs Wet Sauna', href: '/articles/dry-sauna-vs-wet-sauna' },
    { name: 'Sauna Duration Guide', href: '/articles/how-long-to-sit-in-sauna' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-wood-dark border-t border-wood-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
<Link href="/" className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">spa</span>
              <span className="font-display font-bold text-2xl tracking-tight text-white">SaunaProtocol</span>
            </Link>
            <p className="text-text-muted text-sm max-w-xs mb-6">
              Evidence-based sauna protocols backed by research. Optimize your heat therapy for health and longevity.
            </p>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-text-muted">System Operational</span>
            </div>
          </div>

          {/* Protocols */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Protocols</h3>
            <ul className="space-y-3">
              {footerLinks.protocols.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-muted text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Reviews</h3>
            <ul className="space-y-3">
              {footerLinks.reviews.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-muted text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Science */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Science</h3>
            <ul className="space-y-3">
              {footerLinks.science.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-muted text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-muted text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://twitter.com/saunaprotocol" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com/saunaprotocol" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@saunaprotocol" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-wood-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} SaunaProtocol. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Affiliate Disclosure: We earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
