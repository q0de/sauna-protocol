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

        {/* Articles Grid */}
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">
                      {article.frontmatter.category}
                    </Badge>
                    {article.frontmatter.featured && (
                      <Badge variant="featured">FEATURED</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={`/articles/${article.slug}`} className="hover:text-[#ff6b6b]">
                      {article.frontmatter.title}
                    </Link>
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
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

