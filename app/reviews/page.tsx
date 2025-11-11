import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Star, TrendingUp, Bell } from 'lucide-react'
import { NewsletterForm } from '@/components/email/newsletter-form'

export const metadata: Metadata = {
  title: 'Best Sauna Reviews 2025 - Home Sauna Buying Guide',
  description: 'Expert reviews of the best home saunas 2025. Compare infrared saunas, traditional Finnish saunas, and barrel saunas. In-depth testing and analysis coming soon.',
  keywords: ['best sauna 2025', 'home sauna reviews', 'infrared sauna reviews', 'traditional sauna reviews', 'barrel sauna reviews', 'sauna buying guide', 'best home sauna'],
}

export default function ReviewsPage() {
  const upcomingReviews = [
    {
      category: 'Infrared Saunas',
      icon: '🔴',
      description: 'Full-spectrum, far-infrared, and near-infrared sauna reviews',
      keywords: ['Sunlighten', 'Clearlight', 'Jacuzzi', 'Dynamic'],
      status: 'Testing in progress'
    },
    {
      category: 'Traditional Finnish Saunas',
      icon: '🔥',
      description: 'Electric and wood-fired traditional sauna reviews',
      keywords: ['Finnleo', 'Harvia', 'Helo', 'Tylo'],
      status: 'Research phase'
    },
    {
      category: 'Barrel Saunas',
      icon: '🛢️',
      description: 'Outdoor barrel sauna reviews for home use',
      keywords: ['Almost Heaven', 'Dundalk', 'Aleko'],
      status: 'Research phase'
    },
    {
      category: 'Portable Saunas',
      icon: '📦',
      description: 'Budget-friendly portable and tent sauna reviews',
      keywords: ['SereneLife', 'Radiant Saunas', 'Durherm'],
      status: 'Testing in progress'
    },
    {
      category: 'Steam Rooms',
      icon: '💨',
      description: 'Home steam room and generator reviews',
      keywords: ['Mr. Steam', 'Steamist', 'Amerec'],
      status: 'Research phase'
    },
    {
      category: 'Sauna Heaters',
      icon: '⚡',
      description: 'Electric and wood-burning sauna heater reviews',
      keywords: ['Harvia', 'Helo', 'Tylo', 'Finnleo'],
      status: 'Research phase'
    }
  ]

  return (
    <div className="pt-40 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12 text-center animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
          <Badge variant="featured" className="mb-4">COMING SOON</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Best Sauna Reviews 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're currently testing and reviewing the top home saunas on the market. Expert reviews of infrared saunas, traditional Finnish saunas, barrel saunas, and more coming soon.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-[#ff6b6b]" />
              <span>Hands-On Testing</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#ff6b6b]" />
              <span>Data-Driven Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#ff6b6b]" />
              <span>Long-Term Testing</span>
            </div>
          </div>
        </header>

        {/* Why We're Taking Our Time */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl">Why We're Taking Our Time</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Unlike other review sites that rush to publish, we're conducting <strong>real, long-term testing</strong> of each sauna unit. Here's our process:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>90-day minimum testing period</strong> for each sauna to assess durability and performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Temperature accuracy testing</strong> with calibrated instruments (not just trusting built-in gauges)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Energy consumption analysis</strong> to calculate real operating costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Build quality assessment</strong> including wood quality, hardware, and construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Customer service evaluation</strong> including warranty claims and support responsiveness</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Reviews */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
          <h2 className="text-3xl font-bold mb-8 text-center">What We're Testing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{review.icon}</span>
                    <Badge variant="secondary" className="text-xs">
                      {review.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{review.category}</CardTitle>
                  <CardDescription>{review.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Brands we're testing:</p>
                    <div className="flex flex-wrap gap-2">
                      {review.keywords.map((keyword, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What's Available Now */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          <h2 className="text-3xl font-bold mb-8 text-center">What's Available Now</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl">Sauna Accessories Reviews</CardTitle>
                <CardDescription>Complete reviews of thermometers, timers, towels, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We've already tested and reviewed 11 essential sauna accessories to help you optimize your existing sauna setup.
                </p>
                <Button asChild>
                  <Link href="/equipment">
                    View Equipment Reviews →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-xl">Sauna Protocols</CardTitle>
                <CardDescription>Evidence-based protocols for any sauna type</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Learn how to use your sauna effectively with our research-backed protocols, including Bryan Johnson's 200°F protocol.
                </p>
                <Button asChild variant="secondary">
                  <Link href="/protocols/bryan-johnson">
                    View Protocols →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Get Notified */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
          <Card className="bg-gradient-to-br from-[#ff6b6b]/10 to-[#f59e0b]/10 border-2 border-[#ff6b6b]/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Bell className="h-12 w-12 text-[#ff6b6b]" />
              </div>
              <CardTitle className="text-3xl mb-4">Get Notified When Reviews Launch</CardTitle>
              <CardDescription className="text-base">
                Be the first to know when we publish our comprehensive sauna reviews. We'll send you detailed comparisons, test results, and buying recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto">
                <NewsletterForm leadMagnet="sauna-reviews-launch" />
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Join 1,000+ sauna enthusiasts getting our evidence-based guides
              </p>
            </CardContent>
          </Card>
        </section>

        {/* SEO Content - What to Look For */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
          <h2 className="text-3xl font-bold mb-8">How to Choose the Best Home Sauna</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              While our full reviews are in progress, here are the key factors we're evaluating for each sauna type:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Infrared Saunas vs Traditional Saunas</h3>
            <p className="text-gray-700 mb-4">
              <strong>Infrared saunas</strong> operate at lower temperatures (120-150°F) and use infrared light to heat your body directly. They're more energy-efficient and easier to install, making them popular for home use.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Traditional Finnish saunas</strong> reach higher temperatures (170-200°F) with lower humidity. Most sauna research uses traditional saunas, including the Finnish studies showing cardiovascular benefits.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Key Factors We're Testing</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Temperature accuracy and consistency</strong> - Does it actually reach and maintain the stated temperature?</li>
              <li><strong>Heat-up time</strong> - How long until it's ready to use?</li>
              <li><strong>Energy efficiency</strong> - Real-world operating costs</li>
              <li><strong>Build quality</strong> - Wood type, construction, hardware quality</li>
              <li><strong>EMF levels</strong> (for infrared saunas) - Safety considerations</li>
              <li><strong>Warranty and customer service</strong> - What happens when something goes wrong?</li>
              <li><strong>Installation difficulty</strong> - DIY-friendly or professional required?</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Price Ranges to Expect</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Portable saunas:</strong> $150-$500</li>
              <li><strong>1-2 person infrared:</strong> $1,000-$3,000</li>
              <li><strong>3-4 person infrared:</strong> $2,500-$6,000</li>
              <li><strong>Traditional home saunas:</strong> $3,000-$10,000+</li>
              <li><strong>Outdoor barrel saunas:</strong> $4,000-$12,000+</li>
              <li><strong>Custom-built saunas:</strong> $10,000-$30,000+</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
}

