import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'

export const metadata: Metadata = {
  title: 'Intermediate Sauna Protocol - Coming Soon',
  description: 'Intermediate sauna protocol page coming soon. Bridge between beginner and advanced protocols.',
}

export default function IntermediateProtocolPage() {
  return (
    <div className="bg-background-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <FadeIn className="mb-8">
          <Badge variant="secondary" className="mb-4">COMING SOON</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold italic text-white mb-4">Intermediate Protocol</h1>
          <p className="text-xl text-text-muted mb-8">We're working on a comprehensive intermediate protocol guide. Check back soon!</p>
        </FadeIn>

        <FadeIn>
          <StaggerContainer className="flex gap-4 justify-center flex-wrap">
            <StaggerItem>
              <Button asChild size="lg">
                <Link href="/protocols/beginner">Beginner Protocol</Link>
              </Button>
            </StaggerItem>
            <StaggerItem>
              <Button asChild size="lg" variant="secondary">
                <Link href="/protocols/advanced">Advanced Protocol</Link>
              </Button>
            </StaggerItem>
          </StaggerContainer>
        </FadeIn>
      </div>
    </div>
  )
}

