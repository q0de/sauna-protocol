import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'SaunaProtocol privacy policy and how we handle your data.',
  path: '/privacy',
})

export default function PrivacyPage() {
  const lastUpdated = 'November 9, 2025'

  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p>
              SaunaProtocol ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact form</li>
              <li>Leave a comment on an article</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-6">Automatically Collected Information</h3>
            <p>When you visit our site, we automatically collect certain information:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Send you our newsletter and updates (if you've subscribed)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our website and content</li>
              <li>Analyze website usage and trends</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our site. 
              You can control cookies through your browser settings. However, disabling cookies may affect 
              your ability to use certain features of our site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Third-Party Services</h2>
            <p>We use the following third-party services that may collect information:</p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Email Marketing (ConvertKit)</h3>
            <p>
              We use ConvertKit to manage our email newsletter. When you subscribe, your email address 
              is stored on ConvertKit's servers. View{' '}
              <a href="https://convertkit.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2196f3]">
                ConvertKit's Privacy Policy
              </a>.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6">Analytics (Vercel Analytics)</h3>
            <p>
              We use Vercel Analytics to understand how visitors use our site. This service collects 
              anonymized data. View{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2196f3]">
                Vercel's Privacy Policy
              </a>.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6">Hosting (Vercel)</h3>
            <p>
              Our site is hosted on Vercel. View{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2196f3]">
                Vercel's Privacy Policy
              </a>.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6">Database (Supabase)</h3>
            <p>
              We use Supabase to store subscriber information. View{' '}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2196f3]">
                Supabase's Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Affiliate Links</h2>
            <p>
              Some of our content contains affiliate links. If you click on these links and make a purchase, 
              we may earn a commission at no extra cost to you. These links help support our site and allow 
              us to continue providing valuable content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal 
              information. However, no method of transmission over the internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from our newsletter at any time</li>
            </ul>
            <p>To exercise these rights, please contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
            <p>
              Our site is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Email: hello@saunaprotocol.com</li>
              <li>Contact form: <a href="/contact" className="text-[#2196f3]">/contact</a></li>
            </ul>
          </section>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-3xl font-bold mb-4">Medical Disclaimer</h2>
            <p>
              The information on this website is for educational and informational purposes only and is not 
              intended as health or medical advice. Always consult a physician or other qualified healthcare 
              provider regarding any questions you may have about a medical condition or health objectives.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

