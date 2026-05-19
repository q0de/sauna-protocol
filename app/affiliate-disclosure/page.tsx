import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Affiliate Disclosure',
  description: 'How SaunaProtocol uses affiliate links and maintains editorial independence.',
  path: '/affiliate-disclosure',
})

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-32 pb-20 bg-background-dark">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold italic text-white mb-4">Affiliate Disclosure</h1>
          <p className="text-text-muted">Last updated: May 2026</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">How We Earn Money</h2>
            <p className="text-text-muted">
              SaunaProtocol may earn commissions from qualifying purchases made through links on this site, including Amazon Associates links and direct manufacturer or retailer affiliate programs. This does not increase the price you pay.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Editorial Independence</h2>
            <p className="text-text-muted">
              Affiliate compensation may influence which products we can sustainably cover, but it does not guarantee a positive review or ranking. We aim to separate product analysis from commission potential and to call out known commission limitations where relevant.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">No Public Figure Endorsement</h2>
            <p className="text-text-muted">
              Affiliate links on SaunaProtocol do not mean Bryan Johnson, Blueprint, Kernel, or any other public figure or company endorses, sponsors, or is affiliated with this website. References to public protocols are for independent commentary and educational analysis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Questions</h2>
            <p className="text-text-muted">
              For questions about affiliate relationships or corrections, contact us at{' '}
              <a href="mailto:hello@saunaprotocol.com" className="text-primary hover:underline">hello@saunaprotocol.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
