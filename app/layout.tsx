import type { Metadata } from "next"
import { Newsreader, Noto_Sans } from 'next/font/google'
import Script from 'next/script'
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Analytics } from "@vercel/analytics/react"
import { StructuredData } from "@/components/seo/structured-data"

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: 'swap',
  style: ['normal', 'italic'],
})

const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "SaunaProtocol - Evidence-Based Sauna Protocols & Equipment Reviews",
    template: "%s | SaunaProtocol",
  },
  description: "Discover science-backed sauna protocols, including Bryan Johnson's 200°F protocol. Expert equipment reviews and guides to optimize your sauna experience.",
  keywords: ["sauna protocol", "bryan johnson sauna", "sauna benefits", "sauna equipment", "infrared sauna", "dry sauna"],
  authors: [{ name: "SaunaProtocol Team" }],
  verification: {
    google: 'MGGQ4BczJSuzQaaZ-AAgWts1peu5Eup3P4P4YWjLZnY',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com',
    siteName: "SaunaProtocol",
    title: "SaunaProtocol - Evidence-Based Sauna Protocols",
    description: "Discover science-backed sauna protocols, including Bryan Johnson's 200°F protocol.",
    images: [
      {
        url: "/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "SaunaProtocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaunaProtocol - Evidence-Based Sauna Protocols",
    description: "Discover science-backed sauna protocols, including Bryan Johnson's 200°F protocol.",
    images: ["/images/og/default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/images/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  // Organization Schema for entire site
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SaunaProtocol',
    url: siteUrl,
    logo: `${siteUrl}/images/logo-512.png`,
    description: 'Evidence-based sauna protocols and equipment reviews for optimal health and longevity',
    sameAs: [
      // Add social media profiles here when available
    ]
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${newsreader.variable} ${notoSans.variable} font-body antialiased bg-background-dark text-white`} suppressHydrationWarning>
        <StructuredData data={organizationSchema} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
        <Analytics />
        
        {/* Privacy-friendly analytics by Plausible */}
        <Script
          src="https://plausible.io/js/pa-2-WGIOmu4gHTzs_q5qyUX.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>
        
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="BLrodkYEXoModhOOFKdeEg"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  )
}
