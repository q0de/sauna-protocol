"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

type NewsletterFormProps = {
  inline?: boolean
  leadMagnet?: string
}

export function NewsletterForm({ inline = false, leadMagnet = 'general' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          leadMagnet,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing! Check your email for the download link.')
        setEmail('')
        setFirstName('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }

    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  if (inline) {
    return (
      <div className="bg-gradient-to-r from-[#ff6b6b] to-[#f59e0b] rounded-lg p-8 my-12">
        <div className="max-w-2xl mx-auto text-center text-white">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Want More Sauna Insights?</h3>
          <p className="mb-6">
            Get our free Sauna Protocol Cheatsheet with evidence-based tips to optimize your sessions.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button type="submit" variant="secondary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Subscribing...' : 'Get Free PDF'}
            </Button>
          </form>
          {message && (
            <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-100' : 'text-red-100'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
            placeholder="john@example.com"
          />
        </div>
        <Button type="submit" className="w-full" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </Button>
        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  )
}

