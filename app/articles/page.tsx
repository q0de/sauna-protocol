import { Metadata } from 'next'
import { getAllArticles } from '@/lib/mdx'
import { generateSEO } from '@/lib/seo'
import { ArticlesFilter } from '@/components/articles/articles-filter'

export const metadata: Metadata = generateSEO({
  title: 'Sauna Articles & Guides',
  description: 'Browse our collection of evidence-based sauna articles, protocols, and guides to optimize your health.',
  path: '/articles',
})

export default async function ArticlesPage() {
  const articles = await getAllArticles()
  
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
  
  // Format MDX articles to match staticPages structure
  const formattedArticles = articles.map(article => ({
    slug: article.slug,
    frontmatter: {
      ...article.frontmatter,
      readingTime: article.frontmatter.readingTime || '5 min read'
    }
  }))

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6">Sauna Articles & Guides</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Evidence-based guides to help you optimize your sauna practice
          </p>
        </header>

        <ArticlesFilter staticPages={staticPages} mdxArticles={formattedArticles} />
      </div>
    </div>
  )
}

