import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { StructuredData } from '@/components/seo/structured-data'
import { MDXContent } from '@/components/article/mdx-content'
import { getEquipmentBySlug } from '@/lib/mdx'
import { generateSEO, generateProductSchema } from '@/lib/seo'
import { Star, CheckCircle2, XCircle, ExternalLink, DollarSign } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const equipment = await getEquipmentBySlug(slug)

  if (!equipment) {
    return {
      title: 'Equipment Not Found',
    }
  }

  return generateSEO({
    title: equipment.frontmatter.title,
    description: equipment.frontmatter.quickVerdict,
    keywords: [
      equipment.frontmatter.productName,
      equipment.frontmatter.brand,
      equipment.frontmatter.category,
      'review',
      'sauna'
    ],
    path: `/equipment/${slug}`,
    type: 'article',
  })
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params
  const equipment = await getEquipmentBySlug(slug)

  if (!equipment) {
    notFound()
  }

  const { frontmatter, content } = equipment

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  const productUrl = `${siteUrl}/equipment/${slug}`

  const productSchema = generateProductSchema({
    name: frontmatter.productName,
    description: frontmatter.quickVerdict,
    image: `${siteUrl}/images/equipment/${slug}.jpg`,
    brand: frontmatter.brand,
    price: frontmatter.price,
    rating: frontmatter.rating,
    reviewCount: frontmatter.reviewCount,
    url: productUrl,
  })

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating)
            ? 'fill-[#f59e0b] text-[#f59e0b]'
            : i < rating
            ? 'fill-[#f59e0b]/50 text-[#f59e0b]'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <>
      <StructuredData data={productSchema} />

      <article className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Breadcrumbs */}
              <div className="mb-8">
                <Breadcrumbs
                  items={[
                    { name: 'Equipment', href: '/equipment' },
                    { name: frontmatter.title, href: `/equipment/${slug}` },
                  ]}
                />
              </div>

              {/* Header */}
              <header className="mb-8">
                {frontmatter.badge && (
                  <Badge variant="featured" className="mb-4">
                    {frontmatter.badge}
                  </Badge>
                )}
                <h1 className="text-5xl font-bold mb-4">{frontmatter.title}</h1>
                
                {/* Rating and Price */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(frontmatter.rating)}</div>
                    <span className="text-gray-600">
                      {frontmatter.rating} ({frontmatter.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-2xl font-bold text-[#ff6b6b]">
                    <DollarSign className="h-6 w-6" />
                    {frontmatter.price.toLocaleString()}
                  </div>
                </div>

                {/* Quick Verdict */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Quick Verdict</h3>
                    <p className="text-gray-700">{frontmatter.quickVerdict}</p>
                  </CardContent>
                </Card>
              </header>

              {/* Pros and Cons */}
              <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Pros
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {frontmatter.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-green-900">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                        <XCircle className="h-5 w-5" />
                        Cons
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {frontmatter.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-red-900">
                            <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-600" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator className="my-12" />

              {/* Detailed Review Content */}
              <div className="prose-article">
                <MDXContent source={content} />
              </div>

              <Separator className="my-12" />

              {/* Where to Buy CTA */}
              <Card className="bg-gradient-to-r from-[#ff6b6b] to-[#f59e0b] text-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Ready to Buy?</h3>
                    <p className="mb-6 text-white/90">
                      Click below to check current pricing and availability
                    </p>
                    <Button asChild variant="secondary" size="lg">
                      <a href={frontmatter.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Check Price on Retailer
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <p className="mt-4 text-sm text-white/75">
                      We may earn a commission if you make a purchase (at no extra cost to you)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Quick Specs */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Specs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand</span>
                      <span className="font-semibold">{frontmatter.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold">{frontmatter.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price</span>
                      <span className="font-semibold">${frontmatter.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-semibold">{frontmatter.rating}/5</span>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-[#ff6b6b] border-2">
                  <CardContent className="pt-6">
                    <Button asChild className="w-full" size="lg">
                      <a href={frontmatter.affiliateLink} target="_blank" rel="noopener noreferrer">
                        View on Retailer
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Protocols */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recommended Protocols</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link
                        href="/protocols/bryan-johnson"
                        className="block text-[#2196f3] hover:text-[#1976d2]"
                      >
                        Bryan Johnson Protocol →
                      </Link>
                      <Link
                        href="/protocols/beginner"
                        className="block text-[#2196f3] hover:text-[#1976d2]"
                      >
                        Beginner Protocol →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}

