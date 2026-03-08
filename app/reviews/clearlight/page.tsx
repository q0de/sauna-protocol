import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { affiliateLinks } from '@/lib/affiliate-links'
import { generateSEO, generateBreadcrumbSchema, generateFAQSchema, generateProductSchema } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = generateSEO({
  title: 'Clearlight Infrared Sauna Review 2026 - Is It Worth the Price?',
  description: 'Complete Clearlight infrared sauna review. We analyze the Sanctuary and Premier series for EMF levels, heating performance, build quality, and whether the premium price is justified.',
  path: '/reviews/clearlight',
  type: 'article',
  keywords: ['clearlight sauna review', 'clearlight infrared sauna', 'clearlight sanctuary review', 'best infrared sauna', 'low emf sauna'],
})

export default function ClearlightReviewPage() {
  const pros = [
    'Industry-leading low EMF/ELF levels (virtually zero)',
    'Full-spectrum infrared with near, mid, and far wavelengths',
    'Lifetime warranty on heaters, structure, and electronics',
    'Medical-grade chromotherapy lighting included',
    'Premium Canadian Western Red Cedar construction',
    'Bluetooth audio with premium speakers',
    'Easy assembly (typically under 1 hour)',
  ]

  const cons = [
    'Premium pricing ($4,500-$8,000+ depending on model)',
    'Longer lead times (4-6 weeks for delivery)',
    'No smart home integration',
    'Some models require dedicated electrical circuit',
  ]

  const models = [
    {
      name: 'Sanctuary 1',
      capacity: '1 person',
      dimensions: '36" x 36" x 72"',
      price: '$4,999',
      heaters: 'True Wave II Full Spectrum',
      features: ['Compact design', 'Low EMF', 'Chromotherapy'],
    },
    {
      name: 'Sanctuary 2',
      capacity: '2 person',
      dimensions: '47" x 47" x 75"',
      price: '$5,999',
      heaters: 'True Wave II Full Spectrum',
      features: ['Bench seating', 'Low EMF', 'Chromotherapy', 'Bluetooth'],
    },
    {
      name: 'Sanctuary C',
      capacity: '2-3 person (corner)',
      dimensions: '54" x 54" x 75"',
      price: '$6,499',
      heaters: 'True Wave II Full Spectrum',
      features: ['Corner design', 'L-shaped bench', 'Premium speakers'],
    },
    {
      name: 'Premier IS-5',
      capacity: '5+ person',
      dimensions: '72" x 72" x 77"',
      price: '$7,999+',
      heaters: 'True Wave II Full Spectrum',
      features: ['Commercial grade', 'Dual control panels', 'Extended warranty'],
    },
  ]

  const faqs = [
    {
      question: 'What makes Clearlight different from other infrared saunas?',
      answer: 'Clearlight is known for their True Wave II heaters which produce virtually zero EMF/ELF radiation—a key concern for health-conscious buyers. They also offer full-spectrum infrared (near, mid, and far wavelengths) while most competitors only offer far infrared. Their lifetime warranty is the most comprehensive in the industry.',
    },
    {
      question: 'Is the premium price worth it?',
      answer: 'If EMF levels and build quality are priorities, yes. Clearlight\'s EMF levels are 10-100x lower than most competitors. The lifetime warranty also means you\'re not paying for repairs or replacements down the road. For health optimization enthusiasts and biohackers, the extra investment pays off in peace of mind.',
    },
    {
      question: 'How hot does a Clearlight sauna get?',
      answer: 'Clearlight infrared saunas reach temperatures of 100-150°F (38-65°C). This is lower than traditional Finnish saunas (170-200°F) but the infrared wavelengths penetrate 1.5" into your body, creating a more efficient heating experience that feels like a higher temperature.',
    },
    {
      question: 'Do I need special electrical requirements?',
      answer: 'Most Clearlight models plug into a standard 120V outlet. Larger models (Premier series) may require a dedicated 20-amp circuit. Check the specific model specifications before purchasing.',
    },
    {
      question: 'How long does assembly take?',
      answer: 'Clearlight saunas use a buckle system that allows most models to be assembled in under 1 hour without tools. The panels simply click together. Two people are recommended for easier handling.',
    },
  ]

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Reviews', url: `${siteUrl}/reviews` },
    { name: 'Clearlight', url: `${siteUrl}/reviews/clearlight` },
  ])

  const faqSchema = generateFAQSchema(faqs)

  const productSchema = generateProductSchema({
    name: 'Clearlight Infrared Sauna',
    description: 'Premium full-spectrum infrared sauna with industry-leading low EMF/ELF levels, Canadian Western Red Cedar construction, and lifetime warranty.',
    image: `${siteUrl}/images/products/clearlight-sauna.jpg`,
    brand: 'Clearlight',
    price: 4999,
    rating: 9.2,
    reviewCount: 1,
    url: `${siteUrl}/reviews/clearlight`,
  })

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={productSchema} />
      <article className="pt-32 pb-20 bg-background-dark">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { name: 'Reviews', href: '/reviews' },
              { name: 'Clearlight', href: '/reviews/clearlight' },
            ]}
          />
        </div>

        {/* Header */}
        <header className="mb-12">
          <Badge variant="default" className="mb-4">PREMIUM PICK</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold italic text-white mb-6">
            Clearlight Infrared Sauna Review
          </h1>
          <p className="text-xl text-white/45 leading-relaxed mb-6">
            Clearlight has built a reputation as the <strong className="text-white/70 font-medium">gold standard</strong> in infrared saunas, 
            particularly among biohackers and health optimization enthusiasts. Their True Wave II 
            heaters deliver <strong className="text-white/70 font-medium">virtually zero EMF radiation</strong>—a critical factor for anyone concerned about 
            electromagnetic exposure during extended sauna sessions.
          </p>
          
          {/* Quick Verdict */}
          <Card className="bg-primary/10 border-primary">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                <div>
                  <p className="text-lg font-semibold text-white mb-2">Our Verdict</p>
                  <p className="text-white/45">
                    Clearlight delivers the best-in-class EMF performance and build quality in the infrared sauna market. 
                    The premium price is justified for health-conscious buyers who prioritize low EMF exposure and want 
                    a sauna that will last a lifetime. <span className="text-[#F59E0B] font-mono font-bold">Rating: 9.2/10</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Key Specs */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Key Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">waves</span>
                <div className="text-xl font-bold text-white font-mono">Full Spectrum</div>
                <div className="text-sm text-white/25 font-mono uppercase tracking-wider">Near, Mid, Far IR</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <span className="material-symbols-outlined text-green-400 text-3xl mb-2">shield</span>
                <div className="text-xl font-bold text-[#F59E0B] font-mono">&lt;0.3 mG</div>
                <div className="text-sm text-white/25 font-mono uppercase tracking-wider">EMF Levels</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <span className="material-symbols-outlined text-blue-400 text-3xl mb-2">all_inclusive</span>
                <div className="text-xl font-bold text-white font-mono">Lifetime</div>
                <div className="text-sm text-white/25 font-mono uppercase tracking-wider">Warranty</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <span className="material-symbols-outlined text-amber-400 text-3xl mb-2">thermostat</span>
                <div className="text-xl font-bold text-[#F59E0B] font-mono">100-150°F</div>
                <div className="text-sm text-white/25 font-mono uppercase tracking-wider">Temperature Range</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Clearlight */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Why Choose Clearlight?</h2>
          <div className="prose prose-lg">
            <p className="text-white/45 mb-4 leading-[1.7]">
              When <strong className="text-white/70 font-medium">Bryan Johnson</strong> and other prominent biohackers recommend infrared saunas for home use, 
              Clearlight consistently tops the list. The reason comes down to three factors that matter 
              most for serious health optimization:
            </p>
            
            <h3 className="font-display text-xl font-bold text-white mt-8 mb-4">1. Industry-Leading EMF Performance</h3>
            <p className="text-white/45 mb-4 leading-[1.7]">
              Clearlight's True Wave II heaters produce less than <span className="text-[#F59E0B] font-mono font-medium">0.3 milligauss</span> of EMF—essentially background levels. 
              This is <span className="text-[#F59E0B] font-mono font-medium">10-100x lower</span> than most competitor infrared saunas. For comparison, sitting 1 foot from your 
              laptop exposes you to <span className="text-white/70 font-mono">20-50 mG</span>. Clearlight saunas are virtually EMF-free.
            </p>
            <p className="text-white/45 mb-4 leading-[1.7]">
              ELF (extremely low frequency) radiation is also virtually eliminated, with levels below <span className="text-[#F59E0B] font-mono font-medium">3 V/m</span>. 
              This matters because you're spending <strong className="text-white/70 font-medium">20-45 minutes</strong> in close proximity to the heating elements 
              during every session.
            </p>

            <h3 className="font-display text-xl font-bold text-white mt-8 mb-4">2. Full-Spectrum Infrared Technology</h3>
            <p className="text-white/45 mb-4 leading-[1.7]">
              Unlike most infrared saunas that only produce far infrared (FIR), Clearlight's True Wave II 
              heaters deliver near, mid, and far infrared wavelengths:
            </p>
            <ul className="text-white/45 mb-4 list-disc pl-6 space-y-2">
              <li><strong className="text-white/70 font-medium">Near Infrared (NIR):</strong> Penetrates skin cells, supports wound healing and skin health</li>
              <li><strong className="text-white/70 font-medium">Mid Infrared (MIR):</strong> Targets soft tissue, increases circulation, reduces inflammation</li>
              <li><strong className="text-white/70 font-medium">Far Infrared (FIR):</strong> Deepest penetration, activates sweat glands, supports detoxification</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-white mt-8 mb-4">3. Premium Build Quality</h3>
            <p className="text-white/45 mb-4 leading-[1.7]">
              Clearlight uses eco-certified <strong className="text-white/70 font-medium">Canadian Western Red Cedar</strong> or sustainably harvested mahogany—not 
              particle board or cheap imports. The wood is naturally antimicrobial, resistant to warping, 
              and looks beautiful for decades. Every sauna comes with a <strong className="text-white/70 font-medium">lifetime warranty</strong> covering the 
              heaters, controls, wood, and electrical components.
            </p>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <span className="material-symbols-outlined">thumb_up</span>
                  Pros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/50">
                      <span className="material-symbols-outlined text-green-400 text-lg mt-0.5 flex-shrink-0">check_circle</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-500/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-400">
                  <span className="material-symbols-outlined">thumb_down</span>
                  Cons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/50">
                      <span className="material-symbols-outlined text-red-400 text-lg mt-0.5 flex-shrink-0">cancel</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Model Comparison */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Model Comparison</h2>
          <div className="space-y-4">
            {models.map((model) => (
              <Card key={model.name}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
                      <p className="text-white/45 text-sm"><span className="text-white/70">{model.capacity}</span> • <span className="font-mono text-white/45">{model.dimensions}</span></p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {model.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold text-[#F59E0B] font-mono">{model.price}</div>
                      <div className="text-sm text-white/25 font-mono uppercase tracking-wider">Starting price</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Who Should Buy Clearlight?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-400">check_circle</span>
                  Great For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/50">
                  <li>• Health optimization enthusiasts and biohackers</li>
                  <li>• Anyone concerned about EMF exposure</li>
                  <li>• Users who want a "buy once, buy right" premium product</li>
                  <li>• Those who value lifetime warranty protection</li>
                  <li>• People with space for a dedicated sauna area</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400">warning</span>
                  Consider Alternatives If
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/50">
                  <li>• Budget is under <span className="font-mono text-[#F59E0B]">$4,000</span></li>
                  <li>• You want a portable or tent-style sauna</li>
                  <li>• You need smart home integration (Alexa, Google Home)</li>
                  <li>• You prefer traditional high-heat Finnish saunas (<span className="font-mono text-white/70">170-200°F</span>)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/20 to-card-dark border-primary">
            <CardContent className="pt-8 pb-8 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">spa</span>
              <h3 className="font-display text-2xl font-bold italic text-white mb-4">
                Ready to Experience Clearlight?
              </h3>
              <p className="text-white/45 mb-6 max-w-2xl mx-auto leading-relaxed">
                Visit Clearlight directly for current pricing, financing options, and exclusive promotions. 
                Most models ship within <span className="font-mono text-white/70">4-6 weeks</span>.
              </p>
              <Button asChild size="lg">
                <a 
                  href={affiliateLinks.clearlight?.sanctuary2 || 'https://www.clearlight.com'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Shop Clearlight Saunas
                  <span className="material-symbols-outlined ml-2">open_in_new</span>
                </a>
              </Button>
              <p className="text-xs text-white/25 mt-4">
                Affiliate link – we may earn a commission at no extra cost to you
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related */}
        <section>
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/reviews/sunlighten">
              <Card className="hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-2">VALUE PICK</Badge>
                  <h3 className="text-lg font-bold text-white mb-2">Sunlighten Review</h3>
                  <p className="text-white/45 text-sm">Smart features and health programs at a more accessible price point.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/reviews/best-infrared-saunas">
              <Card className="hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <Badge variant="featured" className="mb-2">COMPARISON</Badge>
                  <h3 className="text-lg font-bold text-white mb-2">Best Infrared Saunas 2026</h3>
                  <p className="text-white/45 text-sm">See how Clearlight compares to other top brands.</p>
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
