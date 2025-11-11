import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contrast Therapy Protocol - Coming Soon',
  description: 'Sauna and cold plunge contrast therapy protocol. Coming soon.',
}

export default function ContrastProtocolPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Contrast Therapy Protocol</h1>
      <p className="text-xl text-gray-600 mb-4">Sauna + Cold Plunge</p>
      <p className="text-xl text-gray-600 mb-8">Coming Soon</p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/protocols/advanced">Advanced Protocol</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/protocols">All Protocols</Link>
        </Button>
      </div>
    </div>
  )
}

