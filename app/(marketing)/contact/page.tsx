"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    setTimeout(() => {
      setStatus('success')
      setMessage('Thanks for reaching out! We\'ll get back to you within 24 hours.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <div className="pt-32 pb-20 bg-background-dark">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="font-display text-5xl font-bold italic text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-text-muted">
            Have questions, feedback, or suggestions? We'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2 bg-wood-medium border border-wood-light text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2 bg-wood-medium border border-wood-light text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-2 bg-wood-medium border border-wood-light text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                      placeholder="Question about sauna protocols"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-2 bg-wood-medium border border-wood-light text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <span className="material-symbols-outlined mr-2 text-lg">send</span>
                        Send Message
                      </>
                    )}
                  </Button>

                  {message && (
                    <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <span className="material-symbols-outlined text-2xl text-primary">mail</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Email Us</h3>
                    <p className="text-sm text-text-muted">
                      For general inquiries and support
                    </p>
                    <a href="mailto:hello@saunaprotocol.com" className="text-primary hover:underline text-sm">
                      hello@saunaprotocol.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-wood-dark border-wood-light">
              <CardContent className="pt-6">
                <h3 className="font-bold text-white mb-3">Response Time</h3>
                <p className="text-sm text-text-muted">
                  We typically respond within 24 hours during business days. For urgent safety concerns, 
                  please consult with a healthcare professional immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

