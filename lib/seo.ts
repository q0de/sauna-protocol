import { Metadata } from 'next'

type SEOProps = {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

const siteConfig = {
  name: 'SaunaProtocol',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com',
  description: 'Evidence-based sauna protocols and equipment reviews',
  ogImage: '/images/og/default.jpg',
}

export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage,
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`
  const image = ogImage ? `${siteConfig.url}${ogImage}` : `${siteConfig.url}${siteConfig.ogImage}`

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'SaunaProtocol Team' }],
    openGraph: {
      type,
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.name,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
}

// Structured data schemas
export function generateArticleSchema(article: {
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  author: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  brand: string
  price: number
  rating: number
  reviewCount: number
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

