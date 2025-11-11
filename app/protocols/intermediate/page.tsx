import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Intermediate Sauna Protocol - Coming Soon',
  description: 'Intermediate sauna protocol page coming soon. Bridge between beginner and advanced protocols.',
}

export default function IntermediateProtocolPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Intermediate Protocol</h1>
      <p className="text-xl text-gray-600 mb-8">Coming Soon</p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/protocols/beginner">Beginner Protocol</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/protocols/advanced">Advanced Protocol</Link>
        </Button>
      </div>
    </div>
  )
}

