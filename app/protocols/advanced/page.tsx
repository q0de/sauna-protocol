import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Thermometer, Clock, TrendingUp, AlertCircle, CheckCircle, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advanced Sauna Protocol - Maximum Benefits',
  description: 'Advanced sauna protocol for experienced users. 190-200°F for 20-25 minutes, 4-5x/week. Maximize cardiovascular and longevity benefits.',
  keywords: ['advanced sauna protocol', 'high intensity sauna', '200 degree sauna', 'sauna longevity'],
}

export default function AdvancedProtocolPage() {
  return (
    <div className="container mx-auto px-4 pt-44 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="default" className="mb-4">ADVANCED PROTOCOL</Badge>
          <h1 className="text-4xl font-bold mb-4">Advanced Sauna Protocol</h1>
          <p className="text-xl text-gray-600">
            High-intensity protocol for maximum cardiovascular and longevity benefits. For experienced users only.
          </p>
        </div>

        {/* Protocol Specifications */}
        <Card className="mb-8 border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Flame className="h-6 w-6 text-red-600" />
              Advanced Protocol Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-3">
                  <Thermometer className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600">190-200°F</div>
                <div className="text-sm text-gray-600">Temperature Range</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-3">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600">20-25 min</div>
                <div className="text-sm text-gray-600">Session Duration</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-3">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600">4-5x/week</div>
                <div className="text-sm text-gray-600">Frequency</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prerequisites */}
        <Card className="mb-8 border-2 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-orange-600" />
              Prerequisites - READ BEFORE STARTING
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-gray-800">
              <p className="font-semibold">You should have:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span><strong>6+ months</strong> of regular sauna experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Successfully completed</strong> intermediate protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Good cardiovascular health</strong> (consult doctor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span><strong>No medical contraindications</strong></span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Advanced Protocol Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg">Cardiovascular</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 20-40% reduction in cardiovascular disease risk</li>
                  <li>• Significant blood pressure improvements</li>
                  <li>• Enhanced arterial flexibility</li>
                  <li>• Increased HRV (Heart Rate Variability)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Longevity & Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Up to 40% reduction in all-cause mortality</li>
                  <li>• Enhanced heat shock protein production</li>
                  <li>• Improved mitochondrial function</li>
                  <li>• Growth hormone optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Sample Weekly Schedule</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Monday</span>
                  <span className="text-green-600 font-bold">✓ 200°F × 25 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Tuesday</span>
                  <span className="text-gray-400">Rest</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Wednesday</span>
                  <span className="text-green-600 font-bold">✓ 195°F × 22 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Thursday</span>
                  <span className="text-gray-400">Rest</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Friday</span>
                  <span className="text-green-600 font-bold">✓ 200°F × 25 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-green-600 font-bold">✓ 190°F × 20 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-gray-400">Rest</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety */}
        <Card className="mb-8 border-2 border-red-300 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertCircle className="h-6 w-6" />
              Critical Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-red-900">
              <li><strong>EXIT IMMEDIATELY if you experience:</strong> Chest pain, extreme dizziness, shortness of breath, or nausea</li>
              <li><strong>Hydration:</strong> 32+ oz water before session, electrolytes recommended</li>
              <li><strong>Heart rate monitoring:</strong> Recommended for advanced protocols</li>
              <li><strong>Never exceed 200°F or 30 minutes</strong></li>
              <li><strong>Medical clearance required</strong> if you have any health conditions</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for the Ultimate Protocol?</h3>
          <p className="text-gray-600 mb-6">
            See how Bryan Johnson uses advanced sauna protocols for longevity optimization
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/protocols/bryan-johnson">Bryan Johnson's Protocol</Link>
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

