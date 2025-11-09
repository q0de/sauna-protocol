import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { NewsletterForm } from '@/components/email/newsletter-form'
import { HeroWithVariants } from '@/components/hero/hero-variants'
import { ArrowRight, Thermometer, Clock, TrendingUp, Star, CheckCircle } from 'lucide-react'
import { getAllArticles } from '@/lib/mdx'

export default async function HomePage() {
  const articles = await getAllArticles()
  const featuredArticles = articles.slice(0, 6)

  const protocols = [
    {
      title: "Bryan Johnson's Protocol",
      description: "The exact protocol used by Bryan Johnson to improve his health markers",
      temperature: "200°F",
      duration: "25 min",
      frequency: "4x/week",
      badge: "FEATURED",
      href: "/protocols/bryan-johnson",
      featured: true,
    },
    {
      title: "Beginner Protocol",
      description: "Start your sauna journey with this gentle introduction",
      temperature: "150-170°F",
      duration: "10-15 min",
      frequency: "2-3x/week",
      href: "/protocols/beginner",
    },
    {
      title: "Advanced Protocol",
      description: "Maximize benefits with this high-intensity approach",
      temperature: "190-200°F",
      duration: "20-25 min",
      frequency: "4-5x/week",
      href: "/protocols/advanced",
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

      {/* Featured Protocol Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="featured" className="mb-4">SPOTLIGHT</Badge>
            <h2 className="text-4xl font-bold mb-4">Bryan Johnson's 200°F Sauna Protocol</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The biohacker's approach to sauna therapy with measured results and proven benefits
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Protocol</h2>
            <p className="text-xl text-gray-600">Start with a protocol that matches your experience level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protocols.map((protocol) => (
              <Card key={protocol.title} className={protocol.featured ? "border-2 border-[#ff6b6b]" : ""}>
                <CardHeader>
                  {protocol.badge && (
                    <Badge variant="featured" className="mb-2 w-fit">
                      {protocol.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{protocol.title}</CardTitle>
                  <CardDescription>{protocol.description}</CardDescription>
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
                  <Button asChild className="w-full" variant={protocol.featured ? "default" : "outline"}>
                    <Link href={protocol.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Science-Backed Benefits</h2>
              <p className="text-xl text-gray-600 mb-8">
                Regular sauna use has been shown in numerous studies to provide significant health benefits when done correctly.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-[#ff6b6b] mb-2">-20 mmHg</div>
                  <div className="text-gray-600">Average blood pressure reduction (systolic)</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2196f3] mb-2">40%</div>
                  <div className="text-gray-600">Lower risk of cardiovascular disease</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#f59e0b] mb-2">4-7x</div>
                  <div className="text-gray-600">Weekly sessions for optimal benefits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">Latest Articles</h2>
                <p className="text-xl text-gray-600">Evidence-based guides and insights</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/articles">View All Articles</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.slug} className="hover:shadow-lg transition-shadow">
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

      {/* Email Capture Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Get Your Free Sauna Protocol Cheatsheet</h2>
            <p className="text-xl text-gray-600 mb-8">
              Download our comprehensive guide with optimal temperatures, durations, and safety tips for every experience level.
            </p>
            <div className="flex justify-center">
              <NewsletterForm leadMagnet="sauna-protocol-cheatsheet" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
