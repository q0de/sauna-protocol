import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Script from 'next/script'
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'),
  title: {
    default: "SaunaProtocol - Evidence-Based Sauna Protocols & Equipment Reviews",
    template: "%s | SaunaProtocol",
  },
  description: "Discover science-backed sauna protocols, including Bryan Johnson's 200°F protocol. Expert equipment reviews and guides to optimize your sauna experience.",
  keywords: ["sauna protocol", "bryan johnson sauna", "sauna benefits", "sauna equipment", "infrared sauna", "dry sauna"],
  authors: [{ name: "SaunaProtocol Team" }],
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
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
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
      </body>
    </html>
  )
}
