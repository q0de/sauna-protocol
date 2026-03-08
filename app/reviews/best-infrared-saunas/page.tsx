import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { affiliateLinks } from '@/lib/affiliate-links'
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = generateSEO({
  title: 'Best Infrared Saunas 2026 - Expert Comparison & Buying Guide',
  description: 'Compare the top infrared saunas for home use. Rankings of Clearlight, Sunlighten, and more based on EMF levels, heating performance, build quality, and value.',
  path: '/reviews/best-infrared-saunas',
  type: 'article',
  keywords: ['best infrared sauna', 'infrared sauna comparison', 'home sauna reviews', 'clearlight vs sunlighten', 'low emf sauna'],
})

export default function BestInfraredSaunasPage() {
  const topPicks = [
    {
      rank: 1,
      name: 'Clearlight Sanctuary',
      badge: 'BEST OVERALL',
      badgeColor: 'bg-primary',
      rating: '9.2/10',
      price: '$4,999 - $7,999',
      pros: ['Lowest EMF levels', 'Full spectrum IR', 'Lifetime warranty'],
      cons: ['Premium pricing', 'Longer lead times'],
      bestFor: 'Health optimization enthusiasts who prioritize EMF safety',
      link: '/reviews/clearlight',
    },
    {
      rank: 2,
      name: 'Sunlighten mPulse',
      badge: 'BEST SMART FEATURES',
      badgeColor: 'bg-blue-500',
      rating: '8.8/10',
      price: '$7,999 - $12,000+',
      pros: ['Smart health programs', 'Clinical research', 'ART sound therapy'],
      cons: ['Expensive', 'Mixed customer service'],
      bestFor: 'Tech-savvy users who want guided health protocols',
      link: '/reviews/sunlighten',
    },
    {
      rank: 3,
      name: 'Sunlighten Signature',
      badge: 'BEST VALUE',
      badgeColor: 'bg-green-500',
      rating: '8.5/10',
      price: '$4,999 - $6,999',
      pros: ['Proven SoloCarbon tech', 'Great value', 'Multiple sizes'],
      cons: ['Far IR only', 'No smart features'],
      bestFor: 'Budget-conscious buyers who still want quality',
      link: '/reviews/sunlighten',
    },
  ]

  const comparisonData = [
    {
      feature: 'EMF Levels',
      clearlight: '<0.3 mG (Best)',
      sunlightenMpulse: '<3 mG (Good)',
      sunlightenSig: '<3 mG (Good)',
    },
    {
      feature: 'Infrared Type',
      clearlight: 'Full Spectrum',
      sunlightenMpulse: 'Full Spectrum',
      sunlightenSig: 'Far IR Only',
    },
    {
      feature: 'Warranty',
      clearlight: 'Lifetime',
      sunlightenMpulse: '7 Years',
      sunlightenSig: '5 Years',
    },
    {
      feature: 'Smart Controls',
      clearlight: 'Basic Digital',
      sunlightenMpulse: 'Android Tablet',
      sunlightenSig: 'Basic Digital',
    },
    {
      feature: 'Health Programs',
      clearlight: 'None',
      sunlightenMpulse: '6 Preset Programs',
      sunlightenSig: 'None',
    },
    {
      feature: 'Sound System',
      clearlight: 'Bluetooth Audio',
      sunlightenMpulse: 'ART Resonance',
      sunlightenSig: 'Basic Speakers',
    },
    {
      feature: 'Starting Price',
      clearlight: '$4,999',
      sunlightenMpulse: '$7,999',
      sunlightenSig: '$4,999',
    },
  ]

  const buyingGuide = [
    {
      title: 'EMF & ELF Levels',
      icon: 'shield',
      description: 'EMF (electromagnetic field) exposure is a major concern for health-conscious buyers. Look for saunas with independently tested EMF levels under 3 mG. Clearlight leads with virtually zero EMF, while Sunlighten is acceptably low.',
    },
    {
      title: 'Infrared Spectrum',
      icon: 'waves',
      description: 'Full-spectrum saunas (near, mid, far infrared) offer more versatility than far-infrared only. Near IR benefits skin and cells, mid IR helps with inflammation, and far IR penetrates deepest for detox. Premium models offer all three.',
    },
    {
      title: 'Size & Capacity',
      icon: 'square_foot',
      description: 'Measure your space carefully. 1-person saunas need about 4x4 feet, while 2-person models need 5x5 feet or more. Consider ceiling height too—most saunas are 75-77" tall. Corner models save space.',
    },
    {
      title: 'Build Quality',
      icon: 'forest',
      description: 'Cedar, basswood, and eucalyptus are the premium wood choices. Avoid particle board or low-quality imports. Look for eco-certified, sustainably harvested wood with antimicrobial properties.',
    },
    {
      title: 'Warranty',
      icon: 'verified_user',
      description: 'A longer warranty indicates manufacturer confidence. Clearlight\'s lifetime warranty is industry-leading. Most quality brands offer 5-7 years. Avoid anything under 3 years.',
    },
    {
      title: 'Assembly & Electrical',
      icon: 'construction',
      description: 'Most infrared saunas use standard 120V outlets. Larger models may need 240V or a dedicated circuit. Assembly typically takes 1-2 hours with buckle or snap-together panels.',
    },
  ]

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Reviews', url: `${siteUrl}/reviews` },
    { name: 'Best Infrared Saunas', url: `${siteUrl}/reviews/best-infrared-saunas` },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <article className="pt-32 pb-20 bg-background-dark">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: 'Reviews', href: '/reviews' },
                { name: 'Best Infrared Saunas', href: '/reviews/best-infrared-saunas' },
              ]}
            />
          </div>

        {/* Header */}
        <header className="mb-12">
          <Badge variant="featured" className="mb-4">COMPARISON GUIDE</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold italic text-white mb-6">
            Best Infrared Saunas 2025
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-6">
            We've tested and researched the top infrared sauna brands to help you find the perfect 
            unit for your home. Our rankings prioritize EMF safety, heating performance, build quality, 
            and long-term value.
          </p>
          
          {/* Quick Summary */}
          <Card className="bg-wood-dark border-wood-light">
            <CardContent className="pt-6">
              <p className="text-lg font-semibold text-white mb-4">Quick Summary</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">emoji_events</span>
                  <div>
                    <strong className="text-white">Best Overall:</strong>
                    <p className="text-text-muted">Clearlight Sanctuary</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-blue-400 text-lg">smart_display</span>
                  <div>
                    <strong className="text-white">Best Smart Features:</strong>
                    <p className="text-text-muted">Sunlighten mPulse</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-400 text-lg">savings</span>
                  <div>
                    <strong className="text-white">Best Value:</strong>
                    <p className="text-text-muted">Sunlighten Signature</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Top Picks */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold italic text-white mb-8">Our Top Picks</h2>
          <div className="space-y-6">
            {topPicks.map((pick) => (
              <Card key={pick.rank} className={pick.rank === 1 ? 'border-primary' : ''}>
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary font-bold text-2xl flex-shrink-0">
                      #{pick.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white">{pick.name}</h3>
                        <Badge className={`${pick.badgeColor} text-white`}>{pick.badge}</Badge>
                        <span className="text-primary font-bold">{pick.rating}</span>
                      </div>
                      <p className="text-2xl font-bold text-primary mb-4">{pick.price}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-green-400 mb-2">Pros:</p>
                          <ul className="space-y-1">
                            {pick.pros.map((pro, idx) => (
                              <li key={idx} className="text-text-muted text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-400 text-sm">check</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-red-400 mb-2">Cons:</p>
                          <ul className="space-y-1">
                            {pick.cons.map((con, idx) => (
                              <li key={idx} className="text-text-muted text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-400 text-sm">close</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <p className="text-sm text-text-muted mb-4">
                        <strong className="text-white">Best for:</strong> {pick.bestFor}
                      </p>
                      
                      <Button asChild variant={pick.rank === 1 ? 'default' : 'secondary'}>
                        <Link href={pick.link}>
                          Read Full Review
                          <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold italic text-white mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-wood-light">
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    <span className="text-primary">Clearlight</span>
                    <br />
                    <span className="text-xs text-text-muted">Sanctuary</span>
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    <span className="text-blue-400">Sunlighten</span>
                    <br />
                    <span className="text-xs text-text-muted">mPulse</span>
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    <span className="text-green-400">Sunlighten</span>
                    <br />
                    <span className="text-xs text-text-muted">Signature</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-wood-light/50">
                    <td className="py-4 px-4 text-text-muted font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-white">{row.clearlight}</td>
                    <td className="py-4 px-4 text-center text-white">{row.sunlightenMpulse}</td>
                    <td className="py-4 px-4 text-center text-white">{row.sunlightenSig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold italic text-white mb-8">Buying Guide: What to Look For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {buyingGuide.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-text-muted text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Infrared vs Traditional */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Infrared vs Traditional Saunas</h2>
          <Card className="bg-wood-dark border-wood-light">
            <CardContent className="pt-6">
              <p className="text-text-muted mb-6">
                Many people wonder whether they should choose an infrared sauna or a traditional 
                Finnish sauna. Here's the key difference:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">waves</span>
                    Infrared Saunas
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    <li>• Operate at 100-150°F (lower temps)</li>
                    <li>• Direct infrared heat penetrates 1.5" into body</li>
                    <li>• More efficient sweating at lower temps</li>
                    <li>• Easier to install (120V outlet)</li>
                    <li>• Lower operating costs</li>
                    <li>• Better for those who can't tolerate high heat</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-400">local_fire_department</span>
                    Traditional Finnish
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    <li>• Operate at 170-200°F (high heat)</li>
                    <li>• Heat the air which heats your body</li>
                    <li>• Authentic Finnish experience with löyly (steam)</li>
                    <li>• May require 240V electrical</li>
                    <li>• Higher operating costs</li>
                    <li>• Used in most research studies</li>
                  </ul>
                </div>
              </div>
              <p className="text-text-muted mt-6 text-sm">
                <strong className="text-white">Our take:</strong> For home use, infrared saunas offer 
                the best combination of convenience, safety, and health benefits. Traditional saunas 
                are great if you want the authentic experience and have the space/electrical capacity.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final Recommendations */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Final Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary">
              <CardHeader>
                <Badge variant="featured" className="mb-2 w-fit">BEST OVERALL</Badge>
                <CardTitle>Clearlight Sanctuary</CardTitle>
                <CardDescription>For health optimization enthusiasts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted text-sm mb-4">
                  If EMF levels and build quality are your top priorities, Clearlight is the clear winner.
                </p>
                <Button asChild className="w-full">
                  <a 
                    href={affiliateLinks.clearlight?.sanctuary2 || 'https://www.clearlight.com'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Shop Clearlight
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-500/50">
              <CardHeader>
                <Badge className="bg-blue-500 text-white mb-2 w-fit">BEST TECH</Badge>
                <CardTitle>Sunlighten mPulse</CardTitle>
                <CardDescription>For guided health protocols</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted text-sm mb-4">
                  If you want smart health programs and cutting-edge technology, mPulse delivers.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <a 
                    href={affiliateLinks.sunlighten?.mPulse || 'https://www.sunlighten.com'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Shop Sunlighten
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-500/50">
              <CardHeader>
                <Badge className="bg-green-500 text-white mb-2 w-fit">BEST VALUE</Badge>
                <CardTitle>Sunlighten Signature</CardTitle>
                <CardDescription>For quality on a budget</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted text-sm mb-4">
                  Proven SoloCarbon technology at a more accessible price point.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <a 
                    href={affiliateLinks.sunlighten?.signature || 'https://www.sunlighten.com'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Shop Sunlighten
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-text-muted text-center mt-4">
            Affiliate links – we may earn a commission at no extra cost to you
          </p>
        </section>

        {/* Related Content */}
        <section>
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/protocols/bryan-johnson">
              <Card className="hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <Badge variant="featured" className="mb-2">PROTOCOL</Badge>
                  <h3 className="text-lg font-bold text-white mb-2">Bryan Johnson's Sauna Protocol</h3>
                  <p className="text-text-muted text-sm">Learn the exact protocol Bryan uses with his sauna setup.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment">
              <Card className="hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-2">GEAR</Badge>
                  <h3 className="text-lg font-bold text-white mb-2">Sauna Accessories</h3>
                  <p className="text-text-muted text-sm">Thermometers, timers, towels, and more essential gear.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
        </div>
      </article>
    </>
  )
}
