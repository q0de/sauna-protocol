"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

type NewsletterFormProps = {
  inline?: boolean
  leadMagnet?: string
}

export function NewsletterForm({ inline = false, leadMagnet = 'general' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
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
          leadMagnet,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks! Check your email for the download link.')
        setEmail('')
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
          <span className="material-symbols-outlined text-5xl mb-4">download</span>
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
              {status === 'loading' ? 'Sending...' : 'Get Free PDF'}
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 bg-wood-medium border border-wood-light rounded-lg text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Button type="submit" className="px-8" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Get Free PDF'}
      </Button>
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  )
}

