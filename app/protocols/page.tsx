import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { HoverCard } from '@/components/effects/hover-card'
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = generateSEO({
  title: 'Evidence-Based Sauna Protocols',
  description: 'Comprehensive guide to sauna protocols backed by research. From beginner to advanced, including Bryan Johnson\'s 200°F protocol.',
  path: '/protocols',
  keywords: ['sauna protocols', 'sauna guide', 'bryan johnson sauna', 'beginner sauna', 'advanced sauna protocol'],
})

export default function ProtocolsPage() {
  const protocols = [
    {
      title: "Bryan Johnson's 200°F Protocol",
      slug: "bryan-johnson",
      description: "The exact protocol used by biohacker Bryan Johnson to achieve +38% HRV improvement and measurable health gains",
      temperature: "200°F",
      duration: "20-25 min",
      frequency: "4-7x/week",
      difficulty: "Advanced",
      featured: true,
      badge: "FEATURED",
      results: [
        "5.83% blood pressure reduction in 7 days",
        "25-50% arterial flexibility improvement",
        "+38% HRV increase by week 12",
        "Multiple toxins became undetectable"
      ]
    },
    {
      title: "Beginner Protocol",
      slug: "beginner",
      description: "Start your sauna journey safely with this gentle introduction designed for first-time users",
      temperature: "150-170°F",
      duration: "10-15 min",
      frequency: "2-3x/week",
      difficulty: "Beginner",
      featured: false,
      results: [
        "Build heat tolerance gradually",
        "Improve cardiovascular adaptation",
        "Experience initial detox benefits",
        "Develop sustainable habits"
      ]
    },
    {
      title: "Intermediate Protocol",
      slug: "intermediate",
      description: "Step up your sauna game with longer sessions and higher temperatures for enhanced benefits",
      temperature: "170-190°F",
      duration: "15-20 min",
      frequency: "3-4x/week",
      difficulty: "Intermediate",
      featured: false,
      results: [
        "Enhanced cardiovascular fitness",
        "Improved heat shock protein activation",
        "Better recovery between workouts",
        "Increased growth hormone release"
      ]
    },
    {
      title: "Advanced Performance Protocol",
      slug: "advanced",
      description: "Maximize benefits with this high-intensity protocol for experienced sauna users",
      temperature: "190-200°F",
      duration: "20-30 min",
      frequency: "4-6x/week",
      difficulty: "Advanced",
      featured: false,
      results: [
        "Maximum cardiovascular adaptation",
        "Peak detoxification effects",
        "Optimal hormonal response",
        "Elite athletic recovery"
      ]
    },
    {
      title: "Post-Workout Recovery Protocol",
      slug: "post-workout",
      description: "Optimize muscle recovery and reduce soreness with strategic post-exercise heat exposure",
      temperature: "160-180°F",
      duration: "15-20 min",
      frequency: "After workouts",
      difficulty: "Intermediate",
      featured: false,
      results: [
        "Up to 47% reduction in DOMS",
        "Faster muscle repair",
        "Enhanced blood flow to muscles",
        "Reduced inflammation"
      ]
    },
    {
      title: "Contrast Therapy Protocol",
      slug: "contrast-therapy",
      description: "Combine sauna with cold plunge for maximum cardiovascular and recovery benefits",
      temperature: "180-200°F + Cold",
      duration: "3-4 cycles",
      frequency: "2-3x/week",
      difficulty: "Advanced",
      featured: false,
      results: [
        "Superior cardiovascular training",
        "Enhanced immune function",
        "Improved mental resilience",
        "Maximum norepinephrine release"
      ]
    }
  ]

  const featuredProtocol = protocols.find(p => p.featured)
  const otherProtocols = protocols.filter(p => !p.featured)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Protocols', url: `${siteUrl}/protocols` },
  ])

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sauna Protocols',
    description: 'Evidence-based sauna protocols for health and longevity',
    numberOfItems: protocols.length,
    itemListElement: protocols.map((protocol, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: protocol.title,
      url: `${siteUrl}/protocols/${protocol.slug}`,
    })),
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={itemListSchema} />
      <div className="pt-32 pb-20 bg-background-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Library</p>
          <h1 className="font-display text-5xl font-bold italic text-white mb-4">
            Sauna Protocols
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Choose the right protocol for your experience level and health goals. 
            All protocols are backed by research and optimized for measurable results.
          </p>
        </FadeIn>

        {/* Featured Protocol - Bryan Johnson */}
        {featuredProtocol && (
          <FadeIn className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">local_fire_department</span>
              <h2 className="font-display text-2xl font-bold italic text-white">Featured Protocol</h2>
            </div>
            
            <HoverCard scale={1.01} lift={6}>
              <Card className="border-primary bg-gradient-to-br from-primary/10 to-card-dark overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="featured">FEATURED</Badge>
                    <Badge variant="default">{featuredProtocol.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-display italic mb-4">
                    {featuredProtocol.title}
                  </CardTitle>
                  <CardDescription className="text-base text-text-muted mb-6">
                    {featuredProtocol.description}
                  </CardDescription>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-wood-medium rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{featuredProtocol.temperature}</div>
                      <div className="text-sm text-text-muted">Temperature</div>
                    </div>
                    <div className="bg-wood-medium rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">{featuredProtocol.duration}</div>
                      <div className="text-sm text-text-muted">Duration</div>
                    </div>
                    <div className="bg-wood-medium rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-amber-400">{featuredProtocol.frequency}</div>
                      <div className="text-sm text-text-muted">Frequency</div>
                    </div>
                    <div className="bg-wood-medium rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">+38%</div>
                      <div className="text-sm text-text-muted">HRV Increase</div>
                    </div>
                  </div>

                  <div className="bg-wood-dark rounded-xl p-5 mb-6">
                    <h3 className="font-semibold text-white mb-3">Key Results:</h3>
                    <ul className="space-y-2">
                      {featuredProtocol.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-muted">
                          <span className="material-symbols-outlined text-green-400 text-lg mt-0.5">check_circle</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild size="lg" className="w-full">
                    <Link href={`/protocols/${featuredProtocol.slug}`}>
                      View Complete Protocol
                      <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </Link>
                  </Button>
                </div>

                <div className="relative hidden lg:block">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Bryan Johnson sauna protocol"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card-dark/80 to-transparent" />
                </div>
              </div>
            </Card>
            </HoverCard>
          </FadeIn>
        )}

        {/* All Other Protocols */}
        <div className="mb-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold italic text-white mb-8">All Protocols</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProtocols.map((protocol) => (
              <StaggerItem key={protocol.slug}>
                <HoverCard className="h-full">
                  <Card className="h-full hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant={
                        protocol.difficulty === 'Beginner' ? 'secondary' : 
                        protocol.difficulty === 'Advanced' ? 'default' : 'accent'
                      }
                    >
                      {protocol.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{protocol.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {protocol.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Temperature:</span>
                      <span className="font-bold text-white">{protocol.temperature}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Duration:</span>
                      <span className="font-bold text-white">{protocol.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Frequency:</span>
                      <span className="font-bold text-white">{protocol.frequency}</span>
                    </div>
                  </div>

                  <Button asChild variant="secondary" className="w-full">
                    <Link href={`/protocols/${protocol.slug}`}>
                      Learn More
                      <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Getting Started Guide */}
        <FadeIn>
          <Card className="bg-wood-dark border-wood-light">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold italic text-white mb-8 text-center">
                Not Sure Where to Start?
              </h2>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StaggerItem>
                  <div className="bg-card-dark border border-wood-light rounded-xl p-6 text-center h-full">
                    <span className="material-symbols-outlined text-blue-400 text-4xl mb-3">spa</span>
                    <div className="text-xl font-bold text-white mb-2">New to Sauna?</div>
                    <p className="text-text-muted text-sm mb-4">
                      Start with the Beginner Protocol and work your way up gradually over 4-6 weeks.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/protocols/beginner">Start Here</Link>
                    </Button>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-card-dark border border-wood-light rounded-xl p-6 text-center h-full">
                    <span className="material-symbols-outlined text-amber-400 text-4xl mb-3">trending_up</span>
                    <div className="text-xl font-bold text-white mb-2">Regular User?</div>
                    <p className="text-text-muted text-sm mb-4">
                      The Intermediate Protocol offers a great balance of benefits and sustainability.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/protocols/intermediate">View Protocol</Link>
                    </Button>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-card-dark border border-wood-light rounded-xl p-6 text-center h-full">
                    <span className="material-symbols-outlined text-primary text-4xl mb-3">local_fire_department</span>
                    <div className="text-xl font-bold text-white mb-2">Optimize Everything?</div>
                    <p className="text-text-muted text-sm mb-4">
                      Bryan Johnson's data-driven protocol offers the most documented results.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/protocols/bryan-johnson">See Results</Link>
                    </Button>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
    </>
  )
}
