import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Disclaimer',
  description: 'SaunaProtocol legal, medical, affiliate, and third-party affiliation disclaimers.',
  path: '/disclaimer',
})

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-20 bg-background-dark">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold italic text-white mb-4">Disclaimer</h1>
          <p className="text-text-muted">Last updated: May 2026</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Independent Educational Site</h2>
            <p className="text-text-muted">
              SaunaProtocol is an independent educational website. We are not affiliated with, endorsed by, sponsored by, or officially connected to Bryan Johnson, Blueprint, Kernel, or any related companies. References to Bryan Johnson, Blueprint, or related names are used only for commentary, analysis, and identification of publicly discussed protocols.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Medical Disclaimer</h2>
            <p className="text-text-muted">
              The information on this website is for educational and informational purposes only. It is not medical advice, diagnosis, or treatment. Sauna use can involve dehydration, heat illness, cardiovascular strain, fertility considerations, and other risks. Always consult a qualified healthcare professional before starting a sauna protocol, especially if you have a medical condition, are pregnant, take medication, or are new to high-heat exposure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Results Disclaimer</h2>
            <p className="text-text-muted">
              Any health outcomes, biomarkers, or case-study results discussed on this site are not guarantees. Individual results vary based on health status, age, fitness level, hydration, heat tolerance, equipment, and protocol adherence.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Affiliate Disclosure</h2>
            <p className="text-text-muted">
              Some links on SaunaProtocol are affiliate links. If you click a link and make a purchase, we may earn a commission at no extra cost to you. Affiliate relationships do not make a brand, public figure, or company a sponsor or endorser of SaunaProtocol unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Trademarks</h2>
            <p className="text-text-muted">
              Product names, company names, personal names, trademarks, and service marks belong to their respective owners. Their appearance on SaunaProtocol does not imply affiliation, endorsement, or sponsorship.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
