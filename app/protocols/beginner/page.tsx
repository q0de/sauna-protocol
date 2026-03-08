import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Beginner Sauna Protocol - Safe Start Guide',
  description: 'Start your sauna journey safely with our beginner protocol. Gradual adaptation from 150°F for 10 minutes. Perfect for first-timers.',
  path: '/protocols/beginner',
  keywords: ['beginner sauna protocol', 'first time sauna', 'sauna for beginners', 'how to start sauna'],
})

export default function BeginnerProtocolPage() {
  return (
    <div className="bg-background-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <FadeIn className="mb-8">
          <Badge variant="secondary" className="mb-4">BEGINNER PROTOCOL</Badge>
          <h1 className="font-display text-4xl font-bold italic text-white mb-4">Beginner Sauna Protocol</h1>
          <p className="text-xl text-text-muted">
            A gentle introduction to sauna therapy. Perfect for first-timers building heat tolerance safely.
          </p>
        </FadeIn>

        {/* Protocol Specifications */}
        <FadeIn>
          <Card className="mb-8 border-2 border-primary/50 bg-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Protocol at a Glance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-3">
                  <span className="material-symbols-outlined text-3xl text-primary">device_thermostat</span>
                </div>
                <div className="text-3xl font-bold text-primary">150-170°F</div>
                <div className="text-sm text-text-muted">Temperature Range</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-3">
                  <span className="material-symbols-outlined text-3xl text-green-400">schedule</span>
                </div>
                <div className="text-3xl font-bold text-green-400">10-15 min</div>
                <div className="text-sm text-text-muted">Session Duration</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-3">
                  <span className="material-symbols-outlined text-3xl text-blue-400">trending_up</span>
                </div>
                <div className="text-3xl font-bold text-blue-400">2-3x/week</div>
                <div className="text-sm text-text-muted">Frequency</div>
              </div>
            </div>
          </CardContent>
        </Card>
        </FadeIn>

        {/* Week-by-Week Progression */}
        <div className="mb-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold italic text-white mb-6">4-Week Adaptation Plan</h2>
          </FadeIn>
          
          <StaggerContainer className="space-y-6">
            {/* Week 1 */}
            <StaggerItem>
              <Card>
              <CardHeader>
                <CardTitle>Week 1: Introduction</CardTitle>
                <CardDescription>Get comfortable with the heat</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                    <span><strong className="text-white">Temperature:</strong> 150°F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                    <span><strong className="text-white">Duration:</strong> 10 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                    <span><strong className="text-white">Frequency:</strong> 2 sessions this week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                    <span><strong className="text-white">Goal:</strong> Get used to the environment, focus on relaxation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            </StaggerItem>

            {/* Week 2 */}
            <StaggerItem>
              <Card>
              <CardHeader>
                <CardTitle>Week 2: Building Tolerance</CardTitle>
                <CardDescription>Slightly longer sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                    <span><strong className="text-white">Temperature:</strong> 155-160°F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                    <span><strong className="text-white">Duration:</strong> 12 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                    <span><strong className="text-white">Frequency:</strong> 2-3 sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            </StaggerItem>

            {/* Week 3 */}
            <StaggerItem>
              <Card>
                <CardHeader>
                  <CardTitle>Week 3: Increasing Intensity</CardTitle>
                  <CardDescription>Approaching standard protocol</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-text-muted">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                      <span><strong className="text-white">Temperature:</strong> 165°F</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                      <span><strong className="text-white">Duration:</strong> 15 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                      <span><strong className="text-white">Frequency:</strong> 3 sessions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Week 4 */}
            <StaggerItem>
              <Card>
                <CardHeader>
                  <CardTitle>Week 4: Full Beginner Protocol</CardTitle>
                  <CardDescription>You're adapted!</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-text-muted">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                      <span><strong className="text-white">Temperature:</strong> 170°F</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                      <span><strong className="text-white">Duration:</strong> 15 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                      <span><strong className="text-white">Frequency:</strong> 3 sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-xl mt-0.5 flex-shrink-0">check_circle</span>
                      <span><strong className="text-white">Next:</strong> Ready for intermediate protocol!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Safety Guidelines */}
        <FadeIn>
          <Card className="mb-8 border-2 border-red-500/50 bg-red-500/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="material-symbols-outlined text-red-400">warning</span>
                Safety First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-text-muted">
                <li><strong className="text-white">Exit immediately if you feel:</strong> Dizzy, nauseous, or uncomfortable</li>
                <li><strong className="text-white">Hydrate:</strong> Drink 16-24 oz water before and after each session</li>
                <li><strong className="text-white">Don't eat:</strong> Wait 1-2 hours after large meals</li>
                <li><strong className="text-white">Avoid alcohol:</strong> Never sauna while intoxicated</li>
                <li><strong className="text-white">Consult your doctor</strong> if you have heart conditions, are pregnant, or take medications</li>
              </ul>
            </CardContent>
          </Card>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="text-center">
          <h3 className="font-display text-2xl font-bold italic text-white mb-4">Ready for More?</h3>
          <p className="text-text-muted mb-6">
            Once you've completed the 4-week beginner protocol, you're ready to advance!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/protocols/advanced">View Advanced Protocol</Link>
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

