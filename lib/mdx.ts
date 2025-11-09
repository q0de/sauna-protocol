import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from './utils'

const contentDirectory = path.join(process.cwd(), 'content')

export type ArticleFrontmatter = {
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  updatedAt: string
  category: string
  keywords: string[]
  heroImage: string
  ogImage: string
  readingTime?: string
  author: string
  featured: boolean
  tldr?: string[]
}

export type ProductFrontmatter = {
  title: string
  slug: string
  productName: string
  brand: string
  category: string
  price: number
  rating: number
  reviewCount: number
  affiliateLink: string
  badge?: string
  quickVerdict: string
  pros: string[]
  cons: string[]
}

export async function getArticleBySlug(slug: string) {
  const filePath = path.join(contentDirectory, 'articles', `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const readingTime = data.readingTime || calculateReadingTime(content)

  return {
    frontmatter: { ...data, readingTime } as ArticleFrontmatter,
    content,
  }
}

export async function getAllArticles() {
  const articlesDirectory = path.join(contentDirectory, 'articles')
  
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const files = fs.readdirSync(articlesDirectory)
  
  const articles = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '')
      const filePath = path.join(articlesDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const readingTime = data.readingTime || calculateReadingTime(content)

      return {
        slug,
        frontmatter: { ...data, readingTime } as ArticleFrontmatter,
      }
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime()
    })

  return articles
}

export async function getArticlesByCategory(category: string) {
  const articles = await getAllArticles()
  return articles.filter((article) => article.frontmatter.category === category)
}

export async function getProtocolBySlug(slug: string) {
  const filePath = path.join(contentDirectory, 'protocols', `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as ArticleFrontmatter,
    content,
  }
}

export async function getEquipmentBySlug(slug: string) {
  const filePath = path.join(contentDirectory, 'equipment', `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as ProductFrontmatter,
    content,
  }
}

