import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { StructuredData } from '@/components/seo/structured-data'
import { NewsletterForm } from '@/components/email/newsletter-form'
import { generateSEO, generateArticleSchema } from '@/lib/seo'
import { 
  Thermometer, 
  Clock, 
  TrendingUp, 
  Heart, 
  Activity, 
  AlertCircle, 
  CheckCircle2,
  Download,
  ExternalLink
} from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: "Bryan Johnson's 200°F Sauna Protocol - Complete Guide",
  description: "The exact sauna protocol used by Bryan Johnson to improve blood pressure by 20 mmHg and increase HRV by 38%. Includes temperatures, timing, and measured results.",
  keywords: [
    "bryan johnson sauna",
    "bryan johnson protocol",
    "200 degree sauna",
    "blueprint sauna protocol",
    "sauna for longevity",
    "bryan johnson health protocol"
  ],
  path: "/protocols/bryan-johnson",
  type: "article",
  ogImage: "/images/og/bryan-johnson-protocol.jpg",
})

export default function BryanJohnsonProtocolPage() {
  const protocolSpecs = [
    {
      icon: Thermometer,
      label: "Temperature",
      value: "200°F",
      description: "High heat for maximum benefits",
      color: "text-[#ff6b6b]",
      bgColor: "bg-[#ff6b6b]/10",
    },
    {
      icon: Clock,
      label: "Duration",
      value: "25 minutes",
      description: "Optimal exposure time",
      color: "text-[#2196f3]",
      bgColor: "bg-[#2196f3]/10",
    },
    {
      icon: TrendingUp,
      label: "Frequency",
      value: "4x per week",
      description: "Consistent schedule",
      color: "text-[#f59e0b]",
      bgColor: "bg-[#f59e0b]/10",
    },
    {
      icon: Activity,
      label: "Timing",
      value: "Post-workout",
      description: "After exercise sessions",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ]

  const results = [
    {
      metric: "Blood Pressure",
      before: "138/82 mmHg",
      after: "118/72 mmHg",
      improvement: "-20/-10 mmHg",
      icon: Heart,
    },
    {
      metric: "Heart Rate Variability (HRV)",
      before: "Baseline",
      after: "+38% increase",
      improvement: "Significant improvement",
      icon: Activity,
    },
    {
      metric: "Detoxification",
      before: "Elevated heavy metals",
      after: "Reduced levels",
      improvement: "Measurable decrease",
      icon: TrendingUp,
    },
  ]

  const equipment = [
    {
      name: "Traditional Finnish Sauna",
      recommended: true,
      reason: "Bryan uses a traditional dry sauna for consistent 200°F temperatures",
    },
    {
      name: "Infrared Sauna",
      recommended: false,
      reason: "Cannot reach 200°F - typically max out at 140-160°F",
    },
    {
      name: "Sauna Thermometer",
      recommended: true,
      reason: "Essential for accurate temperature monitoring",
    },
    {
      name: "Timer",
      recommended: true,
      reason: "Track your 25-minute sessions precisely",
    },
  ]

  const safetyWarnings = [
    "Consult your doctor before starting any high-heat sauna protocol",
    "Start with lower temperatures (160-180°F) and work up to 200°F gradually",
    "Stay hydrated - drink 16-20 oz of water before and after each session",
    "Never use the sauna if you're ill, pregnant, or under the influence",
    "Exit immediately if you feel dizzy, nauseous, or uncomfortable",
    "Monitor your heart rate and blood pressure regularly",
  ]

  const faqs = [
    {
      question: "Why 200°F specifically?",
      answer: "Bryan Johnson chose 200°F based on research showing that higher temperatures (within safe limits) provide greater cardiovascular benefits and enhanced detoxification. This temperature triggers heat shock proteins and maximizes the therapeutic effects."
    },
    {
      question: "Can beginners start with this protocol?",
      answer: "No. This is an advanced protocol. Beginners should start with 150-170°F for 10-15 minutes and gradually work up over several months. Bryan himself built up to this protocol over time."
    },
    {
      question: "Why post-workout timing?",
      answer: "Post-workout sauna use may enhance recovery, reduce muscle soreness, and improve cardiovascular adaptation. The elevated heart rate from exercise combined with sauna heat provides synergistic benefits."
    },
    {
      question: "What type of sauna does Bryan Johnson use?",
      answer: "Bryan uses a traditional dry sauna (Finnish-style) that can consistently maintain 200°F. Infrared saunas typically cannot reach these temperatures and are not suitable for this specific protocol."
    },
    {
      question: "How long did it take to see results?",
      answer: "Bryan saw measurable improvements in blood pressure and HRV within 8-12 weeks of consistent protocol adherence. However, some benefits like improved sleep quality may appear sooner."
    },
    {
      question: "What should I do during the 25 minutes?",
      answer: "Bryan recommends meditation, breathing exercises, or simply relaxing. Avoid using your phone or other electronics. Focus on mindfulness and letting your body adapt to the heat."
    },
  ]

  const structuredData = generateArticleSchema({
    title: "Bryan Johnson's 200°F Sauna Protocol",
    description: "The exact sauna protocol used by Bryan Johnson to improve blood pressure and increase HRV.",
    publishedAt: "2025-11-09T00:00:00.000Z",
    updatedAt: "2025-11-09T00:00:00.000Z",
    author: "SaunaProtocol Team",
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og/bryan-johnson-protocol.jpg`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/protocols/bryan-johnson`,
  })

  return (
    <>
      <StructuredData data={structuredData} />
      
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: 'Protocols', href: '/protocols' },
                { name: 'Bryan Johnson Protocol', href: '/protocols/bryan-johnson' },
              ]}
            />
          </div>

          {/* Header */}
          <header className="mb-12">
            <Badge variant="featured" className="mb-4">FEATURED PROTOCOL</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Bryan Johnson's 200°F Sauna Protocol
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The exact sauna protocol used by biohacker Bryan Johnson to dramatically improve his health markers, 
              including a 20 mmHg reduction in blood pressure and a 38% increase in heart rate variability.
            </p>
          </header>

          {/* YouTube Video Embed */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Watch Bryan Explain His Protocol</CardTitle>
                <CardDescription>
                  From his video "How Sauna Detoxified My Body"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/kiUM92VDI1Y"
                    title="Bryan Johnson Sauna Protocol"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Protocol Specifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Protocol</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protocolSpecs.map((spec) => (
                <Card key={spec.label}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${spec.bgColor}`}>
                        <spec.icon className={`h-8 w-8 ${spec.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                        <div className={`text-2xl font-bold mb-1 ${spec.color}`}>
                          {spec.value}
                        </div>
                        <div className="text-sm text-gray-600">{spec.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Measured Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Measured Results</h2>
            <p className="text-lg text-gray-600 mb-6">
              Bryan Johnson tracks everything. Here are his documented improvements after following this protocol consistently:
            </p>
            <div className="space-y-4">
              {results.map((result) => (
                <Card key={result.metric}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gray-100">
                        <result.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-2">{result.metric}</div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-600">Before</div>
                            <div className="font-medium">{result.before}</div>
                          </div>
                          <div>
                            <div className="text-gray-600">After</div>
                            <div className="font-medium">{result.after}</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Change</div>
                            <div className="font-medium text-green-600">{result.improvement}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Step-by-Step Implementation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Implementation</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff6b6b] text-white font-bold text-sm">1</span>
                    Pre-Sauna Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Drink 16-20 oz of water to pre-hydrate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Complete your workout session (if doing post-workout protocol)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Preheat sauna to 200°F (takes 15-30 minutes depending on your sauna)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Bring a towel and timer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff6b6b] text-white font-bold text-sm">2</span>
                    During the Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Set timer for 25 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Practice deep breathing or meditation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Stay seated or lying down - avoid sudden movements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Exit immediately if you feel dizzy or uncomfortable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff6b6b] text-white font-bold text-sm">3</span>
                    Post-Sauna Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Cool down gradually - don't jump into cold water immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Take a lukewarm shower</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rehydrate with 20-24 oz of water with electrolytes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rest for 10-15 minutes before resuming activities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Equipment Recommendations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Equipment Requirements</h2>
            <div className="space-y-4">
              {equipment.map((item) => (
                <Card key={item.name} className={item.recommended ? "border-green-500 border-2" : ""}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      {item.recommended ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          {item.recommended && (
                            <Badge variant="default" className="text-xs">RECOMMENDED</Badge>
                          )}
                        </div>
                        <p className="text-gray-600">{item.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/equipment">
                  Browse Recommended Saunas <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Safety Warnings */}
          <section className="mb-12">
            <Card className="border-amber-500 border-2 bg-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <AlertCircle className="h-6 w-6" />
                  Important Safety Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {safetyWarnings.map((warning, index) => (
                    <li key={index} className="flex items-start gap-3 text-amber-900">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex-shrink-0 mt-0.5">
                        !
                      </span>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Newsletter Inline */}
          <div className="mb-12">
            <NewsletterForm inline leadMagnet="bryan-johnson-pdf" />
          </div>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* PDF Download CTA */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-[#ff6b6b] to-[#f59e0b] text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Download className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Download the Complete Protocol PDF</h3>
                  <p className="mb-6 text-white/90">
                    Get a printer-friendly version of Bryan Johnson's sauna protocol with tracking sheets
                  </p>
                  <Button variant="secondary" size="lg">
                    Download Free PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Related Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <Link href="/protocols/beginner" className="hover:text-[#ff6b6b]">
                      Beginner Sauna Protocol
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Start your sauna journey with this gentle introduction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/protocols/beginner">View Protocol</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <Link href="/articles" className="hover:text-[#ff6b6b]">
                      Sauna Science & Research
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Explore the evidence behind sauna therapy benefits
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/articles">Browse Articles</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}

