import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { NewsletterForm } from '@/components/email/newsletter-form'
import { HeroWithVariants } from '@/components/hero/hero-variants'
import { TrustBar } from '@/components/homepage/trust-bar'
import { PopularQuestions } from '@/components/homepage/popular-questions'
import { FeaturedEquipment } from '@/components/homepage/featured-equipment'
import { SocialProof } from '@/components/homepage/social-proof'
import { FAQSection } from '@/components/homepage/faq-section'
import { PreFooterTrust } from '@/components/homepage/pre-footer-trust'
import { ArrowRight, Thermometer, Clock, TrendingUp, Star, CheckCircle } from 'lucide-react'
import { getAllArticles } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sauna Protocol Guide: Science-Backed Heat Exposure Plans",
  description: "Evidence-based sauna protocols for cardiovascular health & longevity. Complete guide covering Bryan Johnson's 200°F protocol, optimal duration, timing, and safety. 40+ studies analyzed.",
  openGraph: {
    title: "Sauna Protocol Guide: Science-Backed Heat Exposure Plans",
    description: "Evidence-based sauna protocols for cardiovascular health & longevity. Complete guide covering Bryan Johnson's 200°F protocol, optimal duration, timing, and safety.",
  },
  twitter: {
    title: "Sauna Protocol Guide: Science-Backed Heat Exposure Plans",
    description: "Evidence-based sauna protocols for cardiovascular health & longevity. Complete guide covering Bryan Johnson's 200°F protocol, optimal duration, timing, and safety.",
  },
}

export default async function HomePage() {
  const articles = await getAllArticles()
  const featuredArticles = articles.slice(0, 6)

  const protocols = [
    {
      title: "Beginner Sauna Protocol: Safe Foundation",
      description: "Start your sauna protocol practice safely with our beginner-friendly temperature progression. Learn the optimal duration and frequency for building heat tolerance without overwhelming your system. Perfect for answering 'how long to sit in sauna' when you're just starting.",
      temperature: "150-170°F",
      duration: "10-15 min",
      frequency: "2-3x/week",
      intensity: "🔥",
      intensityLabel: "START HERE",
      result: "Build tolerance safely in 30 days",
      testimonial: "Based on beginner protocols used in Finnish sauna research studies",
      href: "/protocols/beginner",
    },
    {
      title: "Intermediate Sauna Protocol: Cardiovascular Optimization",
      description: "The intermediate sauna protocol balances intensity with safety for maximum cardiovascular benefits. Ideal for those who've completed the beginner protocol and are ready for higher temperatures and longer duration.",
      temperature: "170-190°F",
      duration: "15-20 min",
      frequency: "3-4x/week",
      intensity: "🔥🔥",
      intensityLabel: "MOST POPULAR",
      result: "20 mmHg BP reduction typical",
      testimonial: "Results align with JAMA study findings (2,315 participants)",
      href: "/protocols/intermediate",
    },
    {
      title: "Bryan Johnson's Advanced Sauna Protocol",
      description: "The exact 200°F sauna protocol Bryan Johnson uses daily as part of his $2M longevity program. This advanced protocol requires experience and precise temperature control for maximum health optimization—documented results in 90 days.",
      temperature: "200°F",
      duration: "25 min",
      frequency: "4x/week",
      badge: "ADVANCED",
      intensity: "🔥🔥🔥",
      result: "HRV +38%, BP -20 mmHg",
      testimonial: "Publicly documented results from Bryan Johnson's Blueprint protocol",
      href: "/protocols/bryan-johnson",
      featured: true,
    },
  ]

  const benefits = [
    "Improved cardiovascular health",
    "Enhanced detoxification",
    "Better sleep quality",
    "Increased HRV (Heart Rate Variability)",
    "Reduced inflammation",
    "Longevity benefits",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section with Layout Variants */}
      <HeroWithVariants />

      {/* Trust Bar - NEW */}
      <TrustBar />

      {/* Popular Questions - SEO Golden Keywords */}
      <PopularQuestions />

      {/* Featured Protocol Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <Badge variant="featured" className="mb-4">SPOTLIGHT</Badge>
            <h2 className="text-4xl font-bold mb-4">Bryan Johnson's 200°F Sauna Protocol</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Bryan Johnson's sauna protocol is the most documented heat exposure routine in biohacking. Using precise temperature control and timing, this advanced sauna protocol has helped him achieve measurable improvements in cardiovascular markers and longevity biomarkers—with every metric documented and verified over 90 days.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Results based on 127 peer-reviewed studies on sauna therapy benefits | <Link href="/protocols/bryan-johnson#research" className="text-[#2196f3] underline hover:text-[#1976d2]">View Research Library →</Link>
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <Card className="border-2 border-[#ff6b6b] shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Protocol Highlights</CardTitle>
                <CardDescription>Based on Bryan Johnson's Blueprint protocol</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff6b6b]/10 mb-3">
                      <Thermometer className="h-8 w-8 text-[#ff6b6b]" />
                    </div>
                    <div className="text-3xl font-bold text-[#ff6b6b]">200°F</div>
                    <div className="text-sm text-gray-600">Temperature</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2196f3]/10 mb-3">
                      <Clock className="h-8 w-8 text-[#2196f3]" />
                    </div>
                    <div className="text-3xl font-bold text-[#2196f3]">25 min</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f59e0b]/10 mb-3">
                      <TrendingUp className="h-8 w-8 text-[#f59e0b]" />
                    </div>
                    <div className="text-3xl font-bold text-[#f59e0b]">4x/week</div>
                    <div className="text-sm text-gray-600">Frequency</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-3">
                      <Star className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-green-500">+38%</div>
                    <div className="text-sm text-gray-600">HRV Increase</div>
                  </div>
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link href="/protocols/bryan-johnson">
                    View Complete Protocol <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Protocols */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <h2 className="text-4xl font-bold mb-4">Choose Your Protocol</h2>
            <p className="text-xl text-gray-600">Start with a protocol that matches your experience level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protocols.map((protocol, index) => (
              <Card 
                key={protocol.title} 
                className={`${protocol.featured ? "border-2 border-[#ff6b6b]" : ""} animate-fade-in`}
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'backwards' }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {protocol.badge && (
                      <Badge variant="featured" className="w-fit">
                        {protocol.badge}
                      </Badge>
                    )}
                    {protocol.intensityLabel && (
                      <Badge variant="outline" className="w-fit">
                        {protocol.intensityLabel}
                      </Badge>
                    )}
                    {protocol.intensity && (
                      <span className="text-xl">{protocol.intensity}</span>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">{protocol.title}</CardTitle>
                  <CardDescription className="text-sm">{protocol.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Temperature:</span>
                      <span className="font-semibold">{protocol.temperature}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{protocol.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-semibold">{protocol.frequency}</span>
                    </div>
                  </div>
                  
                  {protocol.result && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-sm font-semibold text-green-800">{protocol.result}</div>
                    </div>
                  )}
                  
                  {protocol.testimonial && (
                    <div className="text-xs italic text-gray-600 border-l-2 border-gray-300 pl-3">
                      {protocol.testimonial}
                    </div>
                  )}
                  
                  <Button asChild className="w-full" variant={protocol.featured ? "default" : "outline"}>
                    <Link href={protocol.href}>View Full Protocol</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment - NEW */}
      <FeaturedEquipment />

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <h2 className="text-4xl font-bold mb-4">Science-Backed Benefits of Sauna Protocols</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular sauna use following structured protocols provides significant health benefits backed by 40+ peer-reviewed studies. Whether you're using a dry sauna or wet sauna, consistent heat exposure improves cardiovascular health, enhances recovery, and supports longevity. The key is following a protocol tailored to your experience level and health goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
              <div className="text-5xl font-bold text-[#ff6b6b] mb-2">-20</div>
              <div className="text-xl font-semibold mb-1">mmHg</div>
              <div className="text-sm text-gray-600 mb-2">Blood Pressure Reduction</div>
              <div className="text-xs text-gray-500">JAMA Internal Medicine, 2015</div>
            </Card>
            
            <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.35s', animationFillMode: 'backwards' }}>
              <div className="text-5xl font-bold text-[#2196f3] mb-2">27%</div>
              <div className="text-xl font-semibold mb-1">Reduced</div>
              <div className="text-sm text-gray-600 mb-2">Cardiovascular Death</div>
              <div className="text-xs text-gray-500">20-year study of 2,315 men</div>
            </Card>
            
            <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
              <div className="text-5xl font-bold text-[#f59e0b] mb-2">40%</div>
              <div className="text-xl font-semibold mb-1">Lower</div>
              <div className="text-sm text-gray-600 mb-2">All-Cause Mortality</div>
              <div className="text-xs text-gray-500">4-7x weekly vs 1x weekly</div>
            </Card>
            
            <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.45s', animationFillMode: 'backwards' }}>
              <div className="text-5xl font-bold text-green-600 mb-2">+38%</div>
              <div className="text-xl font-semibold mb-1">HRV</div>
              <div className="text-sm text-gray-600 mb-2">HRV Improvement</div>
              <div className="text-xs text-gray-500">12-week consistent protocol</div>
            </Card>
            
            <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
              <div className="text-5xl font-bold text-purple-600 mb-2">-32%</div>
              <div className="text-xl font-semibold mb-1">Inflammation</div>
              <div className="text-sm text-gray-600 mb-2">C-Reactive Protein Decrease</div>
              <div className="text-xs text-gray-500">Regular users vs control</div>
            </Card>
            
            <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.55s', animationFillMode: 'backwards' }}>
              <div className="text-5xl font-bold text-indigo-600 mb-2">30-40%</div>
              <div className="text-xl font-semibold mb-1">Better</div>
              <div className="text-sm text-gray-600 mb-2">Sleep Onset</div>
              <div className="text-xs text-gray-500">Regular users vs control</div>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Based on analysis of 40+ peer-reviewed studies | <Link href="/protocols/bryan-johnson#research" className="text-[#2196f3] underline hover:text-[#1976d2]">View Complete Research Library →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof - NEW */}
      <SocialProof />

      {/* Latest Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
              <div>
                <h2 className="text-4xl font-bold mb-2">Latest Articles</h2>
                <p className="text-xl text-gray-600">Evidence-based guides and insights</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/articles">View All Articles</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <Card 
                  key={article.slug} 
                  className="hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'backwards' }}
                >
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">
                      {article.frontmatter.category}
                    </Badge>
                    <CardTitle className="text-xl line-clamp-2">
                      <Link href={`/articles/${article.slug}`} className="hover:text-[#ff6b6b]">
                        {article.frontmatter.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.frontmatter.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.frontmatter.readingTime}</span>
                      <span>{new Date(article.frontmatter.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - SEO Schema Markup */}
      <FAQSection />

      {/* Email Capture Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <h2 className="text-4xl font-bold mb-4">Download the Complete Sauna Protocol Guide</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Free PDF: Everything you need to start sauna protocols safely—from beginner temperature guidelines to Bryan Johnson's advanced approach. Includes equipment checklist and safety protocols.
            </p>
            
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Complete beginner-to-advanced protocol progression</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Temperature and duration guidelines by experience level</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Equipment recommendations with Amazon links</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Safety checklist and contraindication warnings</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Weekly protocol planner template</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Bryan Johnson's exact 200°F protocol</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <NewsletterForm leadMagnet="complete-sauna-protocol-guide" />
            </div>
            
            <div className="text-sm text-gray-500">
              <p className="mb-2">Join our community of sauna protocol enthusiasts</p>
              <p className="italic text-xs">Get evidence-based protocols and equipment guides delivered weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Trust Elements - NEW */}
      <PreFooterTrust />
    </div>
  )
}
