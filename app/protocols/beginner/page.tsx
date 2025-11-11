import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Thermometer, Clock, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beginner Sauna Protocol - Safe Start Guide',
  description: 'Start your sauna journey safely with our beginner protocol. Gradual adaptation from 150°F for 10 minutes. Perfect for first-timers.',
  keywords: ['beginner sauna protocol', 'first time sauna', 'sauna for beginners', 'how to start sauna'],
}

export default function BeginnerProtocolPage() {
  return (
    <div className="container mx-auto px-4 pt-44 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">BEGINNER PROTOCOL</Badge>
          <h1 className="text-4xl font-bold mb-4">Beginner Sauna Protocol</h1>
          <p className="text-xl text-gray-600">
            A gentle introduction to sauna therapy. Perfect for first-timers building heat tolerance safely.
          </p>
        </div>

        {/* Protocol Specifications */}
        <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl">Protocol at a Glance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-3">
                  <Thermometer className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">150-170°F</div>
                <div className="text-sm text-gray-600">Temperature Range</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-3">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600">10-15 min</div>
                <div className="text-sm text-gray-600">Session Duration</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-3">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600">2-3x/week</div>
                <div className="text-sm text-gray-600">Frequency</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Week-by-Week Progression */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">4-Week Adaptation Plan</h2>
          
          <div className="space-y-6">
            {/* Week 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Week 1: Introduction</CardTitle>
                <CardDescription>Get comfortable with the heat</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Temperature:</strong> 150°F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Duration:</strong> 10 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Frequency:</strong> 2 sessions this week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Goal:</strong> Get used to the environment, focus on relaxation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Week 2: Building Tolerance</CardTitle>
                <CardDescription>Slightly longer sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Temperature:</strong> 155-160°F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Duration:</strong> 12 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Frequency:</strong> 2-3 sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Week 3: Increasing Intensity</CardTitle>
                <CardDescription>Approaching standard protocol</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Temperature:</strong> 165°F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Duration:</strong> 15 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Frequency:</strong> 3 sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 4 */}
            <Card>
              <CardHeader>
                <CardTitle>Week 4: Full Beginner Protocol</CardTitle>
                <CardDescription>You're adapted!</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Temperature:</strong> 170°F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Duration:</strong> 15 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Frequency:</strong> 3 sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Next:</strong> Ready for intermediate protocol!</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety Guidelines */}
        <Card className="mb-8 border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-red-600" />
              Safety First
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Exit immediately if you feel:</strong> Dizzy, nauseous, or uncomfortable</li>
              <li><strong>Hydrate:</strong> Drink 16-24 oz water before and after each session</li>
              <li><strong>Don't eat:</strong> Wait 1-2 hours after large meals</li>
              <li><strong>Avoid alcohol:</strong> Never sauna while intoxicated</li>
              <li><strong>Consult your doctor</strong> if you have heart conditions, are pregnant, or take medications</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for More?</h3>
          <p className="text-gray-600 mb-6">
            Once you've completed the 4-week beginner protocol, you're ready to advance!
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/protocols/advanced">View Advanced Protocol</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/protocols">All Protocols</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

