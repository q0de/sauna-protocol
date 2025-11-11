import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Post-Workout Sauna Protocol - Coming Soon',
  description: 'Post-workout sauna protocol for optimal recovery. Coming soon.',
}

export default function PostWorkoutProtocolPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Post-Workout Sauna Protocol</h1>
      <p className="text-xl text-gray-600 mb-8">Coming Soon</p>
      <p className="text-gray-600 mb-8">
        Check out our detailed article on sauna timing for workouts:
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Button asChild size="lg">
          <Link href="/articles/sauna-before-or-after-workout">Read Article</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/protocols">All Protocols</Link>
        </Button>
      </div>
    </div>
  )
}

