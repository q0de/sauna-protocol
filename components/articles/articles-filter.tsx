'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Article = {
  slug: string
  href?: string
  frontmatter: {
    title: string
    excerpt: string
    category: string
    featured?: boolean
    publishedAt: string
    readingTime: string
  }
}

type ArticlesFilterProps = {
  staticPages: Article[]
  mdxArticles: Article[]
}

export function ArticlesFilter({ staticPages, mdxArticles }: ArticlesFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const categories = ['All', 'Protocol', 'Equipment', 'Science', 'How-To']
  
  // Combine all content
  const allContent = [...staticPages, ...mdxArticles]
  
  // Filter content based on selected category
  const filteredContent = selectedCategory === 'All' 
    ? allContent 
    : allContent.filter(item => item.frontmatter.category === selectedCategory)
  
  // Separate featured item (Bryan Johnson)
  const featuredItem = staticPages.find(page => page.frontmatter.featured)
  const otherContent = filteredContent.filter(item => !item.frontmatter.featured)
  
  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === selectedCategory ? 'default' : 'outline'}
            className="text-sm px-4 py-2 cursor-pointer hover:bg-[#ff6b6b] hover:text-white transition-colors"
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </Badge>
        ))}
      </div>

      {/* Featured Protocol (Bryan Johnson) - Always show if "All" or "Protocol" selected */}
      {featuredItem && (selectedCategory === 'All' || selectedCategory === 'Protocol') && (
        <div className="mb-12">
          <Link href={featuredItem.href || `/articles/${featuredItem.slug}`} className="block">
            <Card className="border-2 border-[#ff6b6b] bg-gradient-to-br from-[#ff6b6b]/5 to-[#f59e0b]/5 hover:shadow-xl transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="featured">FEATURED PROTOCOL</Badge>
                  <Badge variant="secondary">{featuredItem.frontmatter.category}</Badge>
                </div>
                <CardTitle className="text-2xl hover:text-[#ff6b6b] transition-colors">
                  {featuredItem.frontmatter.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {featuredItem.frontmatter.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{featuredItem.frontmatter.readingTime}</span>
                  <span className="text-gray-500">{new Date(featuredItem.frontmatter.publishedAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      )}

      {/* Filtered Content Grid */}
      {otherContent.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No {selectedCategory.toLowerCase()} content yet. Check back soon!</p>
        </div>
      ) : (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === 'All' ? 'All Guides & Articles' : `${selectedCategory} Content`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherContent.map((item) => (
              <Link 
                key={item.slug} 
                href={item.href || `/articles/${item.slug}`} 
                className="block"
              >
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">
                        {item.frontmatter.category}
                      </Badge>
                      {item.frontmatter.featured && (
                        <Badge variant="featured">FEATURED</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl hover:text-[#ff6b6b] transition-colors">
                      {item.frontmatter.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {item.frontmatter.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.frontmatter.readingTime}</span>
                      <span>{new Date(item.frontmatter.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

