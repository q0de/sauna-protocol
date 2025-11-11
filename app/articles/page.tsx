import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllArticles } from '@/lib/mdx'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Sauna Articles & Guides',
  description: 'Browse our collection of evidence-based sauna articles, protocols, and guides to optimize your health.',
  path: '/articles',
})

export default async function ArticlesPage() {
  const articles = await getAllArticles()
  
  const categories = ['All', 'Protocol', 'Equipment', 'Science', 'How-To']
  
  // Manual entries for pages (not MDX articles)
  const staticPages = [
    {
      slug: 'bryan-johnson',
      href: '/protocols/bryan-johnson',
      frontmatter: {
        title: "Bryan Johnson's 200°F Sauna Protocol: Complete 90-Day Results",
        excerpt: "The exact sauna protocol used by Bryan Johnson to improve blood pressure by 20 mmHg and increase HRV by 38%. Complete 90-day implementation guide with measured results.",
        category: 'Protocol',
        featured: true,
        publishedAt: '2025-11-09',
        readingTime: '15 min read'
      }
    },
    {
      slug: 'equipment-guide',
      href: '/equipment',
      frontmatter: {
        title: "Best Sauna Equipment & Accessories Review Guide [2025]",
        excerpt: "Expert reviews of the top 8 sauna accessories. We tested and analyzed hundreds of products to find the best thermometers, towels, and gear.",
        category: 'Equipment',
        featured: false,
        publishedAt: '2025-11-11',
        readingTime: '12 min read'
      }
    },
    {
      slug: 'beginner-protocol',
      href: '/protocols/beginner',
      frontmatter: {
        title: "Beginner Sauna Protocol - Safe Start Guide",
        excerpt: "Start your sauna journey safely with our 4-week beginner protocol. Gradual adaptation from 150°F for 10 minutes.",
        category: 'Protocol',
        featured: false,
        publishedAt: '2025-11-11',
        readingTime: '8 min read'
      }
    },
    {
      slug: 'advanced-protocol',
      href: '/protocols/advanced',
      frontmatter: {
        title: "Advanced Sauna Protocol - Maximum Benefits",
        excerpt: "Advanced sauna protocol for experienced users. 190-200°F for 20-25 minutes, 4-5x/week. Maximize cardiovascular and longevity benefits.",
        category: 'Protocol',
        featured: false,
        publishedAt: '2025-11-11',
        readingTime: '10 min read'
      }
    },
  ]
  
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6">Sauna Articles & Guides</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Evidence-based guides to help you optimize your sauna practice
          </p>
        </header>

        {/* Category Filter (client-side filtering would be better, but this is MVP) */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className="text-sm px-4 py-2 cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Protocol (Bryan Johnson) - Fully Clickable Card */}
        <div className="mb-12">
          <Link href={staticPages[0].href} className="block">
            <Card className="border-2 border-[#ff6b6b] bg-gradient-to-br from-[#ff6b6b]/5 to-[#f59e0b]/5 hover:shadow-xl transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="featured">FEATURED PROTOCOL</Badge>
                  <Badge variant="secondary">{staticPages[0].frontmatter.category}</Badge>
                </div>
                <CardTitle className="text-2xl hover:text-[#ff6b6b] transition-colors">
                  {staticPages[0].frontmatter.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {staticPages[0].frontmatter.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{staticPages[0].frontmatter.readingTime}</span>
                  <span className="text-gray-500">{new Date(staticPages[0].frontmatter.publishedAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Other Protocols & Guides */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">All Protocols & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {staticPages.slice(1).map((page) => (
              <Link key={page.slug} href={page.href} className="block">
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">
                        {page.frontmatter.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl hover:text-[#ff6b6b] transition-colors">
                      {page.frontmatter.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {page.frontmatter.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{page.frontmatter.readingTime}</span>
                      <span>{new Date(page.frontmatter.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* MDX Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Articles</h2>
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="block">
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">
                        {article.frontmatter.category}
                      </Badge>
                      {article.frontmatter.featured && (
                        <Badge variant="featured">FEATURED</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl hover:text-[#ff6b6b] transition-colors">
                      {article.frontmatter.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.frontmatter.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.frontmatter.readingTime}</span>
                      <span>{new Date(article.frontmatter.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

