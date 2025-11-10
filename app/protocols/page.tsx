import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Thermometer, Clock, TrendingUp, Star, ArrowRight, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Evidence-Based Sauna Protocols',
  description: 'Comprehensive guide to sauna protocols backed by research. From beginner to advanced, including Bryan Johnson\'s 200°F protocol.',
}

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
      slug: "contrast",
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

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">PROTOCOLS</Badge>
          <h1 className="text-4xl font-bold mb-4">Evidence-Based Sauna Protocols</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right protocol for your experience level and health goals. All protocols are backed by research and optimized for measurable results.
          </p>
        </div>

        {/* Featured Protocol - Bryan Johnson */}
        {featuredProtocol && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-[#ff6b6b]" />
              <h2 className="text-2xl font-bold">Featured Protocol</h2>
            </div>
            
            <Card className="border-2 border-[#ff6b6b] bg-gradient-to-br from-[#ff6b6b]/5 to-[#f59e0b]/5 hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="featured">FEATURED</Badge>
                  <Badge variant="default">{featuredProtocol.difficulty}</Badge>
                </div>
                <CardTitle className="text-3xl">{featuredProtocol.title}</CardTitle>
                <CardDescription className="text-base">
                  {featuredProtocol.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff6b6b]/10 mb-3">
                      <Thermometer className="h-8 w-8 text-[#ff6b6b]" />
                    </div>
                    <div className="text-2xl font-bold text-[#ff6b6b]">{featuredProtocol.temperature}</div>
                    <div className="text-sm text-gray-600">Temperature</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2196f3]/10 mb-3">
                      <Clock className="h-8 w-8 text-[#2196f3]" />
                    </div>
                    <div className="text-2xl font-bold text-[#2196f3]">{featuredProtocol.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f59e0b]/10 mb-3">
                      <TrendingUp className="h-8 w-8 text-[#f59e0b]" />
                    </div>
                    <div className="text-2xl font-bold text-[#f59e0b]">{featuredProtocol.frequency}</div>
                    <div className="text-sm text-gray-600">Frequency</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-3">
                      <Star className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-green-500">+38%</div>
                    <div className="text-sm text-gray-600">HRV Increase</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4">Key Results:</h3>
                  <ul className="space-y-2">
                    {featuredProtocol.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild size="lg" className="w-full">
                  <Link href={`/protocols/${featuredProtocol.slug}`}>
                    View Complete Protocol <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* All Other Protocols */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">All Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProtocols.map((protocol) => (
              <Card key={protocol.slug} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={protocol.difficulty === 'Beginner' ? 'secondary' : protocol.difficulty === 'Advanced' ? 'default' : 'accent'}>
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
                      <span className="text-gray-600">Temperature:</span>
                      <span className="font-bold">{protocol.temperature}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-bold">{protocol.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-bold">{protocol.frequency}</span>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/protocols/${protocol.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Not Sure Which Protocol to Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">New to Sauna?</div>
              <p className="text-gray-700 mb-4">Start with the Beginner Protocol and work your way up gradually over 4-6 weeks.</p>
              <Button asChild variant="secondary" size="sm">
                <Link href="/protocols/beginner">Start Here</Link>
              </Button>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">Regular User?</div>
              <p className="text-gray-700 mb-4">The Intermediate Protocol offers a great balance of benefits and sustainability.</p>
              <Button asChild variant="secondary" size="sm">
                <Link href="/protocols/intermediate">View Protocol</Link>
              </Button>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">Optimize Everything?</div>
              <p className="text-gray-700 mb-4">Bryan Johnson's data-driven protocol offers the most documented results.</p>
              <Button asChild variant="secondary" size="sm">
                <Link href="/protocols/bryan-johnson">See Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

