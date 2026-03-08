import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { HoverCard } from '@/components/effects/hover-card'
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = generateSEO({
  title: 'Infrared Sauna Reviews - Expert Analysis & Comparisons',
  description: 'In-depth reviews of the best infrared saunas for home use. Clearlight, Sunlighten, and more. Compare specs, prices, and features.',
  path: '/reviews',
  keywords: ['infrared sauna reviews', 'best infrared sauna', 'clearlight review', 'sunlighten review', 'home sauna comparison'],
})

const reviews = [
  {
    title: 'Best Infrared Saunas 2026',
    slug: 'best-infrared-saunas',
    description: 'Complete comparison of top-rated home infrared saunas. Rankings, specs, and buying guide to help you choose.',
    badge: 'TOP PICKS',
    badgeVariant: 'featured' as const,
    featured: true,
  },
  {
    title: 'Clearlight Saunas Review',
    slug: 'clearlight',
    description: 'In-depth review of Clearlight\'s Sanctuary and Premier series. Full-spectrum infrared, low EMF, lifetime warranty.',
    badge: 'PREMIUM',
    badgeVariant: 'default' as const,
    featured: false,
  },
  {
    title: 'Sunlighten Saunas Review',
    slug: 'sunlighten',
    description: 'Complete review of Sunlighten\'s mPulse and Signature series. Smart features, health programs, SoloCarbon technology.',
    badge: 'VALUE PICK',
    badgeVariant: 'secondary' as const,
    featured: false,
  },
]

export default function ReviewsPage() {
  const featuredReview = reviews.find(r => r.featured)
  const otherReviews = reviews.filter(r => !r.featured)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Reviews', url: `${siteUrl}/reviews` },
  ])

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Infrared Sauna Reviews',
    description: 'Expert reviews and comparisons of the best infrared saunas for home use',
    numberOfItems: reviews.length,
    itemListElement: reviews.map((review, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: review.title,
      url: `${siteUrl}/reviews/${review.slug}`,
    })),
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={itemListSchema} />
      <div className="pt-32 pb-20 bg-background-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <FadeIn className="text-center mb-16">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Reviews</p>
            <h1 className="font-display text-5xl font-bold italic text-white mb-4">
              Infrared Sauna Reviews
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Expert reviews and comparisons of the best infrared saunas for home use.
              We analyze EMF levels, heating performance, build quality, and value to help you choose.
          </p>
        </FadeIn>

        {/* Featured Review */}
        {featuredReview && (
          <FadeIn className="mb-16">
            <HoverCard scale={1.01} lift={6}>
              <Link href={`/reviews/${featuredReview.slug}`}>
                <Card className="border-primary bg-gradient-to-br from-primary/10 to-card-dark hover:border-primary/80 transition-all cursor-pointer">
                <CardHeader className="p-8">
                  <Badge variant={featuredReview.badgeVariant} className="mb-4 w-fit">
                    {featuredReview.badge}
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl font-display italic">
                    {featuredReview.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-text-muted mt-4">
                    {featuredReview.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <Button size="lg">
                    Read Full Comparison
                    <span className="material-symbols-outlined ml-2">arrow_forward</span>
                  </Button>
                </CardContent>
              </Card>
              </Link>
            </HoverCard>
          </FadeIn>
        )}

        {/* Other Reviews */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherReviews.map((review) => (
            <StaggerItem key={review.slug}>
              <HoverCard className="h-full">
                <Link href={`/reviews/${review.slug}`} className="block h-full">
                  <Card className="h-full hover:border-primary transition-all cursor-pointer">
                <CardHeader>
                  <Badge variant={review.badgeVariant} className="mb-2 w-fit">
                    {review.badge}
                  </Badge>
                  <CardTitle className="text-2xl">{review.title}</CardTitle>
                  <CardDescription className="text-text-muted">
                    {review.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary font-semibold flex items-center">
                    Read Review
                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </CardContent>
              </Card>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="mt-16 text-center">
          <HoverCard className="inline-block">
            <Card className="bg-wood-dark border-wood-light">
              <CardContent className="p-8">
                <p className="text-text-muted mb-4">
                  Need help choosing the right sauna for your space?
                </p>
                <Button asChild variant="secondary">
                  <Link href="/equipment">
                    Browse All Equipment
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </HoverCard>
        </FadeIn>
        </div>
      </div>
    </>
  )
}
