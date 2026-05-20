import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Advanced Sauna Protocol - Maximum Benefits',
  description: 'Advanced sauna protocol for experienced users. 190-200°F for 20-25 minutes, 4-5x/week. Maximize cardiovascular and longevity benefits.',
  path: '/protocols/advanced',
  keywords: ['advanced sauna protocol', 'high intensity sauna', '200 degree sauna', 'sauna longevity'],
})

export default function AdvancedProtocolPage() {
  return (
    <div className="bg-background-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <FadeIn className="mb-8">
          <Badge variant="featured" className="mb-4">ADVANCED PROTOCOL</Badge>
          <h1 className="font-display text-4xl font-bold italic text-white mb-4">Advanced Sauna Protocol</h1>
          <p className="text-xl text-text-muted">
            High-intensity protocol for maximum cardiovascular and longevity benefits. For experienced users only.
          </p>
        </FadeIn>

        {/* Protocol Specifications */}
        <FadeIn>
        <Card className="mb-8 border-2 border-primary/50 bg-gradient-to-br from-primary/20 to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">local_fire_department</span>
              Advanced Protocol Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-3">
                  <span className="material-symbols-outlined text-3xl text-red-400">device_thermostat</span>
                </div>
                <div className="text-3xl font-bold text-red-400">190-200°F</div>
                <div className="text-sm text-text-muted">Temperature Range</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-3">
                  <span className="material-symbols-outlined text-3xl text-primary">schedule</span>
                </div>
                <div className="text-3xl font-bold text-primary">20-25 min</div>
                <div className="text-sm text-text-muted">Session Duration</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-3">
                  <span className="material-symbols-outlined text-3xl text-purple-400">trending_up</span>
                </div>
                <div className="text-3xl font-bold text-purple-400">4-5x/week</div>
                <div className="text-sm text-text-muted">Frequency</div>
              </div>
            </div>
          </CardContent>
        </Card>
        </FadeIn>

        {/* Prerequisites */}
        <FadeIn>
        <Card className="mb-8 border-2 border-amber-500/50 bg-amber-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400">warning</span>
              Prerequisites - READ BEFORE STARTING
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-text-muted">
              <p className="font-semibold text-white">You should have:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                  <span><strong className="text-white">6+ months</strong> of regular sauna experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                  <span><strong className="text-white">Successfully completed</strong> intermediate protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                  <span><strong className="text-white">Good cardiovascular health</strong> (consult doctor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                  <span><strong className="text-white">No medical contraindications</strong></span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        </FadeIn>

        {/* Benefits */}
        <div className="mb-8">
          <FadeIn>
          <h2 className="font-display text-3xl font-bold italic text-white mb-6">Advanced Protocol Benefits</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem>
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-400">cardiology</span>
                  Cardiovascular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>• 20-40% reduction in cardiovascular disease risk</li>
                  <li>• Significant blood pressure improvements</li>
                  <li>• Enhanced arterial flexibility</li>
                  <li>• Increased HRV (Heart Rate Variability)</li>
                </ul>
              </CardContent>
            </Card>
            </StaggerItem>
            <StaggerItem>
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400">timeline</span>
                  Longevity & Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>• Up to 40% reduction in all-cause mortality</li>
                  <li>• Enhanced heat shock protein production</li>
                  <li>• Improved mitochondrial function</li>
                  <li>• Growth hormone optimization</li>
                </ul>
              </CardContent>
            </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-8">
          <FadeIn>
          <h2 className="font-display text-3xl font-bold italic text-white mb-6">Sample Weekly Schedule</h2>
          </FadeIn>
          <Card>
            <CardContent className="pt-6">
              <StaggerContainer className="space-y-3">
                <StaggerItem>
                <div className="flex justify-between items-center p-3 bg-wood-medium rounded-lg">
                  <span className="font-semibold text-white">Monday</span>
                  <span className="text-green-400 font-bold">✓ 200°F × 25 min</span>
                </div>
                </StaggerItem>
                <StaggerItem>
                <div className="flex justify-between items-center p-3 bg-wood-medium rounded-lg">
                  <span className="font-semibold text-white">Tuesday</span>
                  <span className="text-text-muted">Rest</span>
                </div>
                </StaggerItem>
                <StaggerItem>
                <div className="flex justify-between items-center p-3 bg-wood-medium rounded-lg">
                  <span className="font-semibold text-white">Wednesday</span>
                  <span className="text-green-400 font-bold">✓ 195°F × 22 min</span>
                </div>
                </StaggerItem>
                <StaggerItem>
                <div className="flex justify-between items-center p-3 bg-wood-medium rounded-lg">
                  <span className="font-semibold text-white">Thursday</span>
                  <span className="text-text-muted">Rest</span>
                </div>
                </StaggerItem>
                <StaggerItem>
                <div className="flex justify-between items-center p-3 bg-wood-medium rounded-lg">
                  <span className="font-semibold text-white">Friday</span>
                  <span className="text-green-400 font-bold">✓ 200°F × 25 min</span>
                </div>
                </StaggerItem>
                <StaggerItem>
                <div className="flex justify-between items-center p-3 bg-wood-medium rounded-lg">
                  <span className="font-semibold text-white">Saturday</span>
                  <span className="text-green-400 font-bold">✓ 190°F × 20 min</span>
                </div>
                </StaggerItem>
                <StaggerItem>
                <div className="flex justify-between items-center p-3 bg-wood-medium rounded-lg">
                  <span className="font-semibold text-white">Sunday</span>
                  <span className="text-text-muted">Rest</span>
                </div>
                </StaggerItem>
              </StaggerContainer>
            </CardContent>
          </Card>
        </div>

        {/* Safety */}
        <FadeIn>
        <Card className="mb-8 border-2 border-red-500/50 bg-red-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-400">
              <span className="material-symbols-outlined">emergency</span>
              Critical Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-text-muted">
              <li><strong className="text-white">EXIT IMMEDIATELY if you experience:</strong> Chest pain, extreme dizziness, shortness of breath, or nausea</li>
              <li><strong className="text-white">Hydration:</strong> 32+ oz water before session, electrolytes recommended</li>
              <li><strong className="text-white">Heart rate monitoring:</strong> Recommended for advanced protocols</li>
              <li><strong className="text-white">Never exceed 200°F or 30 minutes</strong></li>
              <li><strong className="text-white">Medical clearance required</strong> if you have any health conditions</li>
            </ul>
          </CardContent>
        </Card>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="text-center">
          <h3 className="font-display text-2xl font-bold italic text-white mb-4">Ready for the Ultimate Protocol?</h3>
          <p className="text-text-muted mb-6">
            See our independent analysis of Bryan Johnson's publicly discussed advanced sauna protocol
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/protocols/bryan-johnson">Bryan Johnson's Protocol</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/protocols">All Protocols</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
