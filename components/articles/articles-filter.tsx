'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { HoverCard } from '@/components/effects/hover-card'

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
      <FadeIn>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === selectedCategory ? 'default' : 'outline'}
              className="text-sm px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category.toUpperCase()}
            </Badge>
          ))}
        </div>
      </FadeIn>

      {/* Featured Protocol (Bryan Johnson) - Always show if "All" or "Protocol" selected */}
      {featuredItem && (selectedCategory === 'All' || selectedCategory === 'Protocol') && (
        <FadeIn className="mb-12">
          <HoverCard scale={1.01} lift={6}>
            <Link href={featuredItem.href || `/articles/${featuredItem.slug}`} className="block">
              <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="featured">FEATURED PROTOCOL</Badge>
                  <Badge variant="secondary">{featuredItem.frontmatter.category}</Badge>
                </div>
                <CardTitle className="text-2xl hover:text-primary transition-colors">
                  {featuredItem.frontmatter.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {featuredItem.frontmatter.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-white">{featuredItem.frontmatter.readingTime}</span>
                  <span className="text-text-muted">{new Date(featuredItem.frontmatter.publishedAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
            </Link>
          </HoverCard>
        </FadeIn>
      )}

      {/* Filtered Content Grid */}
      {otherContent.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-text-muted">No {selectedCategory.toLowerCase()} content yet. Check back soon!</p>
        </div>
      ) : (
        <div className="mb-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              {selectedCategory === 'All' ? 'All Guides & Articles' : `${selectedCategory} Content`}
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherContent.map((item) => (
              <StaggerItem key={item.slug}>
                <HoverCard className="h-full">
                  <Link 
                    href={item.href || `/articles/${item.slug}`} 
                    className="block h-full"
                  >
                    <Card className="hover:shadow-lg hover:border-primary transition-all cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">
                        {item.frontmatter.category}
                      </Badge>
                      {item.frontmatter.featured && (
                        <Badge variant="featured">FEATURED</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {item.frontmatter.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {item.frontmatter.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-text-muted">
                      <span>{item.frontmatter.readingTime}</span>
                      <span>{new Date(item.frontmatter.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      )}
    </>
  )
}

