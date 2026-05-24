import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { affiliateLinks } from '@/lib/affiliate-links'
import { generateSEO, generateBreadcrumbSchema, generateProductSchema } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = generateSEO({
  title: 'Sunlighten Infrared Sauna Review 2026 - Smart Features & Value',
  description: 'Complete Sunlighten infrared sauna review. We analyze the mPulse and Signature series for smart features, SoloCarbon technology, and overall value.',
  path: '/reviews/sunlighten',
  type: 'article',
  keywords: ['sunlighten sauna review', 'sunlighten infrared sauna', 'mpulse sauna', 'solocarbon heater', 'best infrared sauna'],
})

export default function SunlightenReviewPage() {
  const pros = [
    'Patented SoloCarbon heaters with clinically-tested wavelengths',
    'Smart touchscreen controls with pre-set health programs',
    'Acoustic Resonance Therapy (ART) sound system',
    'Low EMF levels (under 3 mG in most areas)',
    'Premium basswood or eucalyptus construction',
    'Variety of size options including Solo portable unit',
    'Strong research backing with published studies',
  ]

  const cons = [
    'mPulse series is expensive ($7,000-$12,000+)',
    'Signature series lacks full-spectrum capability',
    'Some assembly required (1-2 hours)',
    'Customer service mixed reviews',
  ]

  const models = [
    {
      name: 'Solo System',
      capacity: '1 person (portable)',
      dimensions: 'Dome style - portable',
      price: '$3,499',
      heaters: 'SoloCarbon Far Infrared',
      features: ['Portable', 'No assembly', 'Travel-friendly'],
    },
    {
      name: 'Signature I',
      capacity: '1 person',
      dimensions: '36" x 42" x 72"',
      price: '$4,999',
      heaters: 'SoloCarbon Far Infrared',
      features: ['Compact', 'Digital controls', 'Low EMF'],
    },
    {
      name: 'Signature II',
      capacity: '2 person',
      dimensions: '47" x 47" x 75"',
      price: '$5,999',
      heaters: 'SoloCarbon Far Infrared',
      features: ['Bench seating', 'Chromotherapy', 'Sound system'],
    },
    {
      name: 'mPulse Believe',
      capacity: '2-3 person',
      dimensions: '55" x 47" x 77"',
      price: '$7,999',
      heaters: '3-in-1 SoloCarbon Full Spectrum',
      features: ['Smart touchscreen', '6 preset programs', 'ART sound'],
    },
    {
      name: 'mPulse Aspire',
      capacity: '4+ person',
      dimensions: '67" x 47" x 77"',
      price: '$9,999+',
      heaters: '3-in-1 SoloCarbon Full Spectrum',
      features: ['Largest cabin', 'Premium audio', 'Tablet controls'],
    },
  ]

  const healthPrograms = [
    {
      name: 'Detoxification',
      description: 'Optimized wavelengths and timing for maximum sweat and toxin release',
      duration: '37 minutes',
    },
    {
      name: 'Pain Relief',
      description: 'Near-infrared focused for inflammation and joint pain',
      duration: '30 minutes',
    },
    {
      name: 'Relaxation',
      description: 'Far-infrared with lower temps for stress relief and calm',
      duration: '40 minutes',
    },
    {
      name: 'Weight Loss',
      description: 'Elevated heart rate and calorie burn optimization',
      duration: '45 minutes',
    },
    {
      name: 'Anti-Aging',
      description: 'Near-infrared for collagen production and skin health',
      duration: '30 minutes',
    },
    {
      name: 'Cardio',
      description: 'Heart rate optimization for cardiovascular conditioning',
      duration: '45 minutes',
    },
  ]

  const faqs = [
    {
      question: 'What is SoloCarbon technology?',
      answer: 'SoloCarbon is Sunlighten\'s patented heater technology. Unlike ceramic rod heaters used by many competitors, SoloCarbon heaters are flat carbon fiber panels that produce a specific 9.4-micron wavelength—the optimal frequency for absorption by the human body. This wavelength has been clinically tested and shown to be most effective for raising core body temperature.',
    },
    {
      question: 'How does Sunlighten compare to Clearlight?',
      answer: 'Both are premium brands with low EMF. Clearlight edges out Sunlighten on EMF levels (virtually zero vs under 3 mG). Sunlighten offers more tech features like smart programs and ART sound therapy. Clearlight has a lifetime warranty while Sunlighten offers 5-7 years depending on model. Price is similar at the premium tier.',
    },
    {
      question: 'What\'s the difference between Signature and mPulse?',
      answer: 'The Signature series uses far-infrared only at a lower price point ($4,999-$6,999). The mPulse series includes full-spectrum infrared (near, mid, far), smart touchscreen controls, preset health programs, and ART sound system ($7,999-$12,000+). For serious health optimization, the mPulse is worth the upgrade.',
    },
    {
      question: 'Is the Solo portable sauna worth it?',
      answer: 'The Solo System ($3,499) is excellent for apartment dwellers or frequent travelers who can\'t install a full cabin sauna. It uses the same SoloCarbon technology and delivers real results. However, the full cabin models provide a more immersive experience and better heat distribution.',
    },
    {
      question: 'How long is the warranty?',
      answer: 'Sunlighten offers 5-year limited warranty on Signature models and 7-year limited warranty on mPulse models. The warranty covers heaters, electrical, and structural components. This is less comprehensive than Clearlight\'s lifetime warranty.',
    },
  ]

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Reviews', url: `${siteUrl}/reviews` },
    { name: 'Sunlighten', url: `${siteUrl}/reviews/sunlighten` },
  ])

  const productSchema = generateProductSchema({
    name: 'Sunlighten Infrared Sauna',
    description: 'Premium infrared sauna with patented SoloCarbon heaters, smart touchscreen controls, and preset health programs.',
    image: `${siteUrl}/images/products/sunlighten-sauna.jpg`,
    brand: 'Sunlighten',
    price: 4999,
    rating: 8.8,
    reviewCount: 1,
    url: `${siteUrl}/reviews/sunlighten`,
  })

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={productSchema} />
      <article className="pt-32 pb-20 bg-background-dark">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: 'Reviews', href: '/reviews' },
                { name: 'Sunlighten', href: '/reviews/sunlighten' },
              ]}
            />
          </div>

        {/* Header */}
        <header className="mb-12">
          <Badge variant="secondary" className="mb-4">VALUE PICK</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold italic text-white mb-6">
            Sunlighten Infrared Sauna Review
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-6">
            Sunlighten has earned its reputation as a leader in infrared sauna technology through 
            clinical research and innovation. Their patented SoloCarbon heaters produce the optimal 
            9.4-micron wavelength for absorption by the human body—backed by peer-reviewed studies 
            published in scientific journals.
          </p>
          
          {/* Quick Verdict */}
          <Card className="bg-amber-500/10 border-amber-500/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-400 text-3xl">stars</span>
                <div>
                  <p className="text-lg font-semibold text-white mb-2">Our Verdict</p>
                  <p className="text-text-muted">
                    Sunlighten offers the best combination of clinical validation and smart technology 
                    in the infrared sauna market. The mPulse series is ideal for users who want 
                    guided health programs, while the Signature series provides solid value at a 
                    lower price point. <strong className="text-amber-400">Rating: 8.8/10</strong>
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
                <span className="material-symbols-outlined text-primary text-3xl mb-2">science</span>
                <div className="text-xl font-bold text-white">SoloCarbon</div>
                <div className="text-sm text-text-muted">Patented Heaters</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <span className="material-symbols-outlined text-green-400 text-3xl mb-2">shield</span>
                <div className="text-xl font-bold text-white">&lt;3 mG</div>
                <div className="text-sm text-text-muted">EMF Levels</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <span className="material-symbols-outlined text-blue-400 text-3xl mb-2">smart_display</span>
                <div className="text-xl font-bold text-white">6 Programs</div>
                <div className="text-sm text-text-muted">Health Presets</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <span className="material-symbols-outlined text-amber-400 text-3xl mb-2">schedule</span>
                <div className="text-xl font-bold text-white">5-7 Years</div>
                <div className="text-sm text-text-muted">Warranty</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Health Programs */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Smart Health Programs (mPulse)</h2>
          <p className="text-text-muted mb-6">
            The mPulse series features an Android-powered touchscreen with six pre-programmed health 
            protocols. Each program adjusts infrared wavelengths, temperature, and duration automatically 
            based on your health goal:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {healthPrograms.map((program) => (
              <Card key={program.name}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white">{program.name}</h3>
                    <Badge variant="outline">{program.duration}</Badge>
                  </div>
                  <p className="text-text-muted text-sm">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Sunlighten */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold italic text-white mb-6">Why Choose Sunlighten?</h2>
          <div className="prose prose-lg text-text-muted">
            <h3 className="font-display text-xl font-bold text-white mt-8 mb-4">1. Clinically-Validated Technology</h3>
            <p className="text-text-muted mb-4">
              Sunlighten is one of the few infrared sauna manufacturers with peer-reviewed research 
              supporting their specific heater technology. Studies published in journals like the 
              Journal of the American College of Cardiology have used Sunlighten saunas to demonstrate 
              cardiovascular benefits.
            </p>

            <h3 className="font-display text-xl font-bold text-white mt-8 mb-4">2. Acoustic Resonance Therapy (ART)</h3>
            <p className="text-text-muted mb-4">
              The mPulse series includes speakers built directly into the wood that create a 
              resonance effect—you feel the sound vibrations throughout your body. This combines 
              music therapy with infrared for a deeply immersive relaxation experience. It's not 
              just audio—it's vibrational therapy.
            </p>

            <h3 className="font-display text-xl font-bold text-white mt-8 mb-4">3. Flexibility in Models & Price</h3>
            <p className="text-text-muted mb-4">
              Sunlighten offers everything from the portable Solo System ($3,499) to full-size 
              cabin saunas. The Signature series provides excellent value for users who don't need 
              smart features, while the mPulse series delivers cutting-edge technology for serious 
              health optimizers.
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
                    <li key={idx} className="flex items-start gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-green-400 text-lg mt-0.5">check_circle</span>
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
                    <li key={idx} className="flex items-start gap-2 text-text-muted">
                      <span className="material-symbols-outlined text-red-400 text-lg mt-0.5">cancel</span>
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
                      <p className="text-text-muted text-sm">{model.capacity} • {model.dimensions}</p>
                      <p className="text-xs text-text-muted mt-1">{model.heaters}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {model.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{model.price}</div>
                      <div className="text-sm text-text-muted">Starting price</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-amber-500/20 to-card-dark border-amber-500/30">
            <CardContent className="pt-8 pb-8 text-center">
              <span className="material-symbols-outlined text-amber-400 text-5xl mb-4">spa</span>
              <h3 className="font-display text-2xl font-bold italic text-white mb-4">
                Ready to Experience Sunlighten?
              </h3>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                Visit Sunlighten directly for current pricing, financing options, and to explore 
                the full range of models.
              </p>
              <Button asChild size="lg">
                <a 
                  href={affiliateLinks.sunlighten?.mPulse || 'https://www.sunlighten.com'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Shop Sunlighten Saunas
                  <span className="material-symbols-outlined ml-2">open_in_new</span>
                </a>
              </Button>
              <p className="text-xs text-text-muted mt-4">
                Referral/source link; commission status is not confirmed in this repo
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
            <Link href="/reviews/clearlight">
              <Card className="hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <Badge variant="default" className="mb-2">PREMIUM</Badge>
                  <h3 className="text-lg font-bold text-white mb-2">Clearlight Review</h3>
                  <p className="text-text-muted text-sm">The gold standard for low EMF infrared saunas.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/reviews/best-infrared-saunas">
              <Card className="hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <Badge variant="featured" className="mb-2">COMPARISON</Badge>
                  <h3 className="text-lg font-bold text-white mb-2">Best Infrared Saunas 2026</h3>
                  <p className="text-text-muted text-sm">See how Sunlighten compares to other top brands.</p>
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
