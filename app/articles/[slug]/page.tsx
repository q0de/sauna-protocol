import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { StructuredData } from '@/components/seo/structured-data'
import { MDXContent } from '@/components/article/mdx-content'
import { TableOfContents } from '@/components/article/table-of-contents'
import { NewsletterForm } from '@/components/email/newsletter-form'
import { getArticleBySlug, getAllArticles } from '@/lib/mdx'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { formatDate } from '@/lib/utils'
import { Clock, Calendar, Share2 } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return generateSEO({
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    keywords: article.frontmatter.keywords,
    ogImage: article.frontmatter.ogImage,
    path: `/articles/${slug}`,
    type: 'article',
    publishedTime: article.frontmatter.publishedAt,
    modifiedTime: article.frontmatter.updatedAt,
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const { frontmatter, content } = article

  // Get related articles (same category)
  const allArticles = await getAllArticles()
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug && a.frontmatter.category === frontmatter.category)
    .slice(0, 3)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  const articleUrl = `${siteUrl}/articles/${slug}`

  const articleSchema = generateArticleSchema({
    title: frontmatter.title,
    description: frontmatter.excerpt,
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    author: frontmatter.author,
    image: `${siteUrl}${frontmatter.ogImage}`,
    url: articleUrl,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Articles', url: `${siteUrl}/articles` },
    { name: frontmatter.title, url: articleUrl },
  ])

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <article className="pt-44 pb-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div>
            {/* Main Content */}
            <div>
              {/* Breadcrumbs */}
              <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
                <Breadcrumbs
                  items={[
                    { name: 'Articles', href: '/articles' },
                    { name: frontmatter.title, href: `/articles/${slug}` },
                  ]}
                />
              </div>

              {/* Header */}
              <header className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                <Badge variant="secondary" className="mb-4">
                  {frontmatter.category}
                </Badge>
                {frontmatter.featured && (
                  <Badge variant="featured" className="mb-4 ml-2">
                    FEATURED
                  </Badge>
                )}
                <h1 className="text-5xl font-bold mb-4">{frontmatter.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{frontmatter.excerpt}</p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={frontmatter.publishedAt}>
                      {formatDate(frontmatter.publishedAt)}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{frontmatter.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </div>
                </div>

                <Separator className="mt-8" />
              </header>

              {/* TL;DR */}
              {frontmatter.tldr && frontmatter.tldr.length > 0 && (
                <Card className="mb-8 bg-blue-50 border-blue-200 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                  <CardHeader>
                    <CardTitle className="text-lg">TL;DR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {frontmatter.tldr.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Article Content */}
              <div className="prose-article animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                <MDXContent source={content} />
              </div>

              {/* Newsletter Inline (after 2nd H2) */}
              <div className="my-12">
                <NewsletterForm inline leadMagnet={`article-${slug}`} />
              </div>

              {/* Author Bio */}
              <Separator className="my-12" />
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ff6b6b] flex items-center justify-center text-white text-2xl font-bold">
                      S
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{frontmatter.author}</h3>
                      <p className="text-gray-600 mb-4">
                        Our team researches and writes evidence-based guides to help you optimize your sauna practice safely and effectively.
                      </p>
                      <Link href="/about" className="text-[#2196f3] hover:text-[#1976d2] font-medium">
                        Learn more about us →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((related) => (
                      <Card key={related.slug} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <Badge variant="secondary" className="mb-2 w-fit">
                            {related.frontmatter.category}
                          </Badge>
                          <CardTitle className="text-lg">
                            <Link href={`/articles/${related.slug}`} className="hover:text-[#ff6b6b]">
                              {related.frontmatter.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {related.frontmatter.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-gray-500">
                            {related.frontmatter.readingTime}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

