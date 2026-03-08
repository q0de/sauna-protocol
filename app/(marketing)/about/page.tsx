import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'About SaunaProtocol',
  description: 'Learn about our mission to provide evidence-based sauna protocols and equipment reviews to help you optimize your health.',
  path: '/about',
})

export default function AboutPage() {
  const values = [
    {
      icon: 'science',
      title: 'Evidence-Based',
      description: 'Every protocol and recommendation is backed by scientific research and real-world data.',
    },
    {
      icon: 'favorite',
      title: 'Health-Focused',
      description: 'Your safety and results are our top priority. We prioritize protocols that deliver measurable benefits.',
    },
    {
      icon: 'lightbulb',
      title: 'Practical',
      description: 'Clear, actionable guidance you can implement immediately, regardless of your experience level.',
    },
    {
      icon: 'groups',
      title: 'Community-Driven',
      description: 'We listen to feedback and continuously improve based on real user experiences.',
    },
  ]

  return (
    <div className="pt-32 pb-20 bg-background-dark">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="font-display text-5xl font-bold italic text-white mb-6">About SaunaProtocol</h1>
          <p className="text-xl text-text-muted leading-relaxed">
            Your trusted source for evidence-based sauna protocols and equipment reviews
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Our Mission</h2>
            <p className="text-lg text-text-muted">
              SaunaProtocol exists to cut through the noise and provide clear, science-backed guidance on sauna use. 
              We believe everyone should have access to the health benefits of proper sauna protocols, 
              whether you're a complete beginner or an experienced biohacker like Bryan Johnson.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/20">
                        <span className="material-symbols-outlined text-2xl text-primary">{value.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white mb-2">{value.title}</h3>
                        <p className="text-text-muted">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Why We Started</h2>
            <p className="text-lg text-text-muted mb-4">
              After seeing conflicting information about sauna use online, we decided to create a definitive resource 
              that combines scientific research with practical protocols. We were inspired by biohackers like Bryan Johnson 
              who measure everything and share their results openly.
            </p>
            <p className="text-lg text-text-muted">
              Our team researches studies, tests protocols, and reviews equipment to provide you with trustworthy, 
              actionable information that gets results.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">What We Cover</h2>
            <ul className="space-y-3 text-lg text-text-muted">
              <li><strong className="text-white">Protocols:</strong> Step-by-step sauna routines for all experience levels</li>
              <li><strong className="text-white">Science:</strong> Breaking down research into practical insights</li>
              <li><strong className="text-white">Equipment:</strong> Honest reviews of saunas and accessories</li>
              <li><strong className="text-white">Safety:</strong> Guidelines to maximize benefits while minimizing risks</li>
            </ul>
          </section>

          <section className="bg-wood-dark border border-wood-light rounded-lg p-8">
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Disclaimer</h2>
            <p className="text-text-muted">
              The information on SaunaProtocol is for educational purposes only. We are not medical professionals. 
              Always consult with your healthcare provider before starting any new health protocol, especially if you 
              have pre-existing conditions or are pregnant.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold italic text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-text-muted">
              Have questions, suggestions, or feedback? We'd love to hear from you. Visit our{' '}
              <a href="/contact" className="text-primary hover:underline">contact page</a> to get in touch.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

