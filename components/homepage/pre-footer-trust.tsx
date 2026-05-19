import Link from 'next/link'
import { Shield, FileText, DollarSign } from 'lucide-react'

export function PreFooterTrust() {
  // Locked to Methodology variant (stronger credibility)
  const content = {
    about: "Protocol claims link to published research where available, with safety limits and observational-study caveats called out.",
    aboutLink: "View Sources",
  }

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About/Credentials */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2196f3]/10 mb-4">
              <Shield className="h-6 w-6 text-[#2196f3]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Evidence-Based Approach</h3>
            <p className="text-sm text-gray-600 mb-3">
              {content.about}
            </p>
            <Link 
              href="/#research-sources" 
              className="text-sm text-[#2196f3] hover:text-[#1976d2] font-medium underline underline-offset-2"
            >
              {content.aboutLink} →
            </Link>
          </div>

          {/* Medical Disclaimer */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f59e0b]/10 mb-4">
              <FileText className="h-6 w-6 text-[#f59e0b]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-gray-600 mb-3">
              Educational content only. Consult healthcare provider before starting any sauna protocol.
            </p>
            <Link 
              href="/disclaimer" 
              className="text-sm text-[#2196f3] hover:text-[#1976d2] font-medium underline underline-offset-2"
            >
              Read Full Disclaimer →
            </Link>
          </div>

          {/* Affiliate Transparency */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff6b6b]/10 mb-4">
              <DollarSign className="h-6 w-6 text-[#ff6b6b]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Affiliate Transparency</h3>
            <p className="text-sm text-gray-600 mb-3">
              We earn commissions on some products. This helps us keep testing. Full disclosure.
            </p>
            <Link 
              href="/affiliate-disclosure" 
              className="text-sm text-[#2196f3] hover:text-[#1976d2] font-medium underline underline-offset-2"
            >
              Affiliate Policy →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
