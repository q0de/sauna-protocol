import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { HoverCard } from '@/components/effects/hover-card'
import { HeroContent } from '@/components/sections/hero-content'
import { TrustBar } from '@/components/sections/trust-bar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { NewsletterForm } from '@/components/email/newsletter-form'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { StructuredData } from '@/components/seo/structured-data'
import { getAllArticles } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sauna Protocol Guide: Science-Backed Plans",
  description: "Evidence-based sauna protocols for health & longevity. Bryan Johnson's 200°F protocol, optimal duration, timing, safety. 40+ studies analyzed.",
  openGraph: {
    title: "Sauna Protocol Guide: Science-Backed Plans",
    description: "Evidence-based sauna protocols for health & longevity. Bryan Johnson's 200°F protocol, optimal duration, timing, and safety.",
  },
  twitter: {
    title: "Sauna Protocol Guide: Science-Backed Plans",
    description: "Evidence-based sauna protocols for health & longevity. Bryan Johnson's 200°F protocol, optimal duration, timing, and safety.",
  },
}

const popularQuestions = [
  {
    question: "How long should I stay in sauna?",
    answer: "15-25 minutes at 170-200°F for optimal benefits",
    icon: "schedule",
    href: "/articles/sauna-duration",
  },
  {
    question: "What temperature is best?",
    answer: "170-200°F (77-93°C) for traditional saunas",
    icon: "device_thermostat",
    href: "/articles/sauna-temperature",
  },
  {
    question: "How often should I sauna?",
    answer: "3-4x per week shows maximum cardiovascular benefits",
    icon: "event_repeat",
    href: "/articles/sauna-frequency",
  },
  {
    question: "Infrared vs traditional?",
    answer: "Both work—infrared at lower temps, traditional for intensity",
    icon: "compare",
    href: "/reviews/best-infrared-saunas",
  },
]

const protocols = [
  {
    title: "Beginner Protocol",
    description: "Start safely with progressive heat exposure",
    temperature: "150-170°F",
    duration: "10-15 min",
    frequency: "2-3x/week",
    level: "Start Here",
    href: "/protocols/beginner",
    cta: "Start Beginner Protocol",
  },
  {
    title: "Intermediate Protocol",
    description: "Optimize cardiovascular benefits",
    temperature: "170-190°F",
    duration: "15-20 min",
    frequency: "3-4x/week",
    level: "Most Popular",
    href: "/protocols/intermediate",
    cta: "Try Intermediate",
  },
  {
    title: "Bryan Johnson Protocol",
    description: "Advanced longevity optimization",
    temperature: "200°F",
    duration: "25 min",
    frequency: "4x/week",
    level: "Advanced",
    href: "/protocols/bryan-johnson",
    featured: true,
    cta: "Go Advanced",
  },
]

const faqs = [
  {
    question: "Is sauna safe for everyone?",
    answer: "Sauna is safe for most healthy adults. However, those with cardiovascular conditions, pregnant women, and people on certain medications should consult a doctor first. Always start with shorter sessions at lower temperatures.",
  },
  {
    question: "Should I sauna before or after workout?",
    answer: "Post-workout sauna is most common and helps with recovery. Pre-workout can enhance warm-up but may reduce performance. Allow 10-15 minutes to cool down before exercising after sauna.",
  },
  {
    question: "How much water should I drink?",
    answer: "Drink 16-32 oz of water before your session and rehydrate with electrolytes after. You can lose 1-2 lbs of water weight per session through sweating.",
  },
  {
    question: "What's the difference between dry and wet sauna?",
    answer: "Dry saunas (Finnish style) use hot air at 170-200°F with low humidity. Wet saunas (steam rooms) use moist heat at lower temperatures. Both provide similar benefits.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SaunaProtocol',
  url: 'https://saunaprotocol.com',
  description: 'Evidence-based sauna protocols for health and longevity',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://saunaprotocol.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default async function HomePage() {
  const articles = await getAllArticles()
  const featuredArticles = articles.slice(0, 3)

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={websiteSchema} />
      <div className="flex flex-col bg-background-dark">
        {/* Hero Section with Trust Bar */}
      <section className="relative h-screen flex flex-col">
        {/* Background Video with Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-background-dark/80 to-background-dark z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/sign/vid/sauna-protocol-vid.webm?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZjYwM2EwMS00ZmEwLTQ0M2YtODJhNi03ZmU4MDBmZjJiOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWQvc2F1bmEtcHJvdG9jb2wtdmlkLndlYm0iLCJpYXQiOjE3NjI3MjI2MTAsImV4cCI6MTc5NDI1ODYxMH0.JS-u_DL9wmxYMvqJADkrdNZa3QBdZfrFZZ4MYc-9CO8" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/30 via-orange-900/20 to-transparent mix-blend-overlay z-10" />
          
          {/* Noise Overlay */}
          <NoiseTexture 
            opacity={0.07}
            speed={18}
            contrast={2.5}
            brightness={1.5}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex-1 flex items-center justify-center pt-20">
          <HeroContent />
        </div>

        {/* Trust Bar - At bottom of hero */}
        <TrustBar />
      </section>

      {/* Popular Questions */}
      <section className="py-20 relative overflow-hidden">
        {/* Orange gradient glow background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark to-background-dark" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(242, 108, 13, 0.3) 0%, transparent 60%)'
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold italic text-white mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-text-muted">
              Quick answers to get you started
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularQuestions.map((item) => (
              <StaggerItem key={item.question}>
                <Link href={item.href}>
                  <HoverCard className="h-full">
                    <Card className="h-full hover:border-primary transition-all group cursor-pointer">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                          <span className="material-symbols-outlined text-primary text-2xl">
                            {item.icon}
                          </span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {item.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-text-muted text-sm">{item.answer}</p>
                      </CardContent>
                    </Card>
                  </HoverCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Protocol - The Blueprint */}
      <section className="py-24 bg-wood-dark border-y border-wood-light relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left: Content */}
            <FadeIn direction="left" className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-wood-light border border-wood-medium text-primary text-xs font-bold uppercase tracking-wider">
                Featured Protocol
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
                The Blueprint Protocol
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Bryan Johnson's specific high-heat routine designed to mimic the cardiovascular 
                intensity of moderate exercise while promoting autophagy and skin rejuvenation.
              </p>
              
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-4">
                <StaggerItem>
                  <div className="p-6 bg-wood-medium rounded-xl border border-wood-light">
                    <div className="text-primary mb-2">
                      <span className="material-symbols-outlined">thermometer</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-display mb-1">200°F</div>
                    <div className="text-sm text-gray-400">Target Temperature</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-6 bg-wood-medium rounded-xl border border-wood-light">
                    <div className="text-primary mb-2">
                      <span className="material-symbols-outlined">timer</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-display mb-1">20 Min</div>
                    <div className="text-sm text-gray-400">Duration Per Session</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-6 bg-wood-medium rounded-xl border border-wood-light">
                    <div className="text-primary mb-2">
                      <span className="material-symbols-outlined">water_drop</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-display mb-1">57%</div>
                    <div className="text-sm text-gray-400">Humidity Level</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-6 bg-wood-medium rounded-xl border border-wood-light">
                    <div className="text-primary mb-2">
                      <span className="material-symbols-outlined">monitor_heart</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-display mb-1">140 BPM</div>
                    <div className="text-sm text-gray-400">Target Heart Rate</div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <Link 
                href="/protocols/bryan-johnson"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 inline-flex"
              >
                View Full Blueprint
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </FadeIn>

            {/* Right: Image with quote overlay */}
            <FadeIn direction="right" delay={0.2} className="flex-1 w-full relative">
              <HoverCard scale={1.01} lift={8}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-wood-light shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <blockquote className="text-xl font-display italic text-white mb-4">
                      "The single most powerful longevity intervention you can do at home."
                    </blockquote>
                    <cite className="text-primary font-bold not-italic">— Bryan Johnson</cite>
                  </div>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCeF0Vzrq6Q00cK44ztiAsG73i1k8o8XERulbXyX8AHtQDPSEsb9DPauwOJZG9MwqspCIH-eSXlkztRU3ML3kKcNNjt42EogIod_XRA8UR5UjcjBNRx6sb86P8YAZYcWX1maP8mCbpvK_wuNYwukhVxf5LQbrNAZXCZyRUVHzLo-epE7nuDk8pCytjeSh1dWNnfJsPin8Lf7IWJhPebqABhECv4qisFNX1Ed7Mqa1q5hqycch9M7KndaiAZx_B80FxyDUpcdawv7I"
                    alt="Person relaxing in sauna with moody lighting"
                    fill
                    className="object-cover"
                  />
                </div>
              </HoverCard>
              <div className="absolute top-8 right-8 z-20 bg-white text-black px-4 py-2 rounded-lg font-bold shadow-xl transform rotate-3 text-sm">
                Verified 2024
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Choose Your Protocol */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold italic text-white mb-4">
              Choose Your Protocol
            </h2>
            <p className="text-xl text-text-muted">
              Start with a protocol that matches your experience level
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protocols.map((protocol) => (
              <StaggerItem key={protocol.title}>
                <HoverCard className="h-full">
                  <Card
                    className={`h-full ${protocol.featured ? 'border-primary ring-2 ring-primary/20' : ''}`}
                  >
                    <CardHeader>
                      <Badge 
                        variant={protocol.featured ? "featured" : "secondary"} 
                        className="mb-2 w-fit"
                      >
                        {protocol.level}
                      </Badge>
                      <CardTitle className="text-2xl">{protocol.title}</CardTitle>
                      <CardDescription>{protocol.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-text-muted">Temperature</span>
                          <span className="font-semibold text-white">{protocol.temperature}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-muted">Duration</span>
                          <span className="font-semibold text-white">{protocol.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-muted">Frequency</span>
                          <span className="font-semibold text-white">{protocol.frequency}</span>
                        </div>
                      </div>
                      
                      <Button 
                        asChild 
                        className="w-full" 
                        variant={protocol.featured ? "default" : "secondary"}
                      >
                        <Link href={protocol.href}>{protocol.cta}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recommended Gear CTA */}
      <section className="py-20 bg-wood-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold italic text-white mb-4">
              Recommended Gear
            </h2>
            <p className="text-xl text-text-muted">
              Expert-reviewed equipment for your sauna practice
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Link href="/reviews/best-infrared-saunas">
                <HoverCard className="h-full">
                  <Card className="h-full hover:border-primary transition-all group cursor-pointer">
                    <CardHeader>
                      <span className="material-symbols-outlined text-primary text-4xl mb-4">spa</span>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        Infrared Saunas
                      </CardTitle>
                      <CardDescription>
                        Our top picks for home infrared saunas. Full spectrum technology, EMF tested.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary text-sm font-semibold flex items-center">
                        Shop Infrared Saunas
                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                      </span>
                    </CardContent>
                  </Card>
                </HoverCard>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/reviews/clearlight">
                <HoverCard className="h-full">
                  <Card className="h-full hover:border-primary transition-all group cursor-pointer">
                    <CardHeader>
                      <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        Clearlight Review
                      </CardTitle>
                      <CardDescription>
                        Premium infrared saunas with lifetime warranty. In-depth analysis.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary text-sm font-semibold flex items-center">
                        Buy Clearlight
                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                      </span>
                    </CardContent>
                  </Card>
                </HoverCard>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/equipment">
                <HoverCard className="h-full">
                  <Card className="h-full hover:border-primary transition-all group cursor-pointer">
                    <CardHeader>
                      <span className="material-symbols-outlined text-primary text-4xl mb-4">inventory_2</span>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        All Equipment
                      </CardTitle>
                      <CardDescription>
                        Thermometers, timers, accessories—everything you need for your practice.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary text-sm font-semibold flex items-center">
                        Browse Equipment
                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                      </span>
                    </CardContent>
                  </Card>
                </HoverCard>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Latest Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-display text-4xl font-bold italic text-white mb-2">
                  Latest Research
                </h2>
                <p className="text-xl text-text-muted">
                  Evidence-based guides and insights
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/articles">View All</Link>
              </Button>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <StaggerItem key={article.slug}>
                  <HoverCard className="h-full">
                    <Card className="h-full">
                      <CardHeader>
                        <Badge variant="secondary" className="mb-2 w-fit">
                          {article.frontmatter.category}
                        </Badge>
                        <CardTitle className="text-xl line-clamp-2">
                          <Link 
                            href={`/articles/${article.slug}`} 
                            className="hover:text-primary transition-colors"
                          >
                            {article.frontmatter.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {article.frontmatter.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-text-muted">
                          <span>{article.frontmatter.readingTime}</span>
                          <span>{new Date(article.frontmatter.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-wood-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold italic text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-muted">
              Everything you need to know about sauna protocols
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
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
          </FadeIn>
        </div>
      </section>

      {/* Email Capture - Heat Guide PDF */}
      <section className="py-20 relative overflow-hidden">
        {/* Orange gradient glow background */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(242, 108, 13, 0.25) 0%, transparent 60%)'
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn>
            <HoverCard scale={1.005} lift={4}>
              <div className="bg-card-dark border border-wood-light rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                  {/* Left: Content */}
                  <div className="flex-1 text-left">
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                      Get the "<span className="text-primary">Heat Guide</span>" PDF
                    </h2>
                    <p className="text-text-muted text-lg mb-8 max-w-md">
                      Join 15,000+ others. Receive our cheat sheet for temperature timing, hydration formulas, and post-sauna protocols.
                    </p>
                    
                    <form className="flex flex-col sm:flex-row gap-3 mb-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-5 py-3.5 bg-wood-medium border border-wood-light rounded-full text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-full transition-colors shadow-lg shadow-orange-900/30 whitespace-nowrap"
                      >
                        Download Free
                      </button>
                    </form>
                    
                    <p className="text-sm text-text-muted/70">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                  
                  {/* Right: PDF Mockup */}
                  <FadeIn direction="right" delay={0.2} className="flex-shrink-0">
                    <div className="relative">
                      {/* PDF Document Visual */}
                      <div className="w-48 lg:w-56 bg-white rounded-xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                        {/* Dashed border inner */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center min-h-[200px]">
                          {/* Document icon */}
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-white text-2xl">description</span>
                          </div>
                          {/* Title */}
                          <h3 className="font-display text-lg font-bold text-gray-800 text-center italic">
                            The Heat Guide
                          </h3>
                        </div>
                      </div>
                      {/* Decorative shadow/glow */}
                      <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl -z-10" />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </HoverCard>
          </FadeIn>
        </div>
      </section>
      </div>
    </>
  )
}
