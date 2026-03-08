import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/effects/fade-in'

export const metadata: Metadata = {
  title: 'Post-Workout Sauna Protocol - Coming Soon',
  description: 'Post-workout sauna protocol for optimal recovery. Coming soon.',
}

export default function PostWorkoutProtocolPage() {
  return (
    <div className="bg-background-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <FadeIn className="mb-8">
          <Badge variant="secondary" className="mb-4">COMING SOON</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold italic text-white mb-4">Post-Workout Sauna Protocol</h1>
          <p className="text-xl text-text-muted mb-8">We're working on a comprehensive post-workout protocol guide. Check back soon!</p>
        </FadeIn>

        <FadeIn>
          <p className="text-text-muted mb-8">
            Check out our detailed article on sauna timing for workouts:
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/articles/sauna-before-or-after-workout">Read Article</Link>
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

