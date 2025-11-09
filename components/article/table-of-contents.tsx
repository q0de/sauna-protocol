"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type TOCItem = {
  id: string
  title: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const elements = article.querySelectorAll('h2, h3')
    const items: TOCItem[] = Array.from(elements).map((elem) => ({
      id: elem.id,
      title: elem.textContent || '',
      level: parseInt(elem.tagName.charAt(1)),
    }))
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    elements.forEach((elem) => observer.observe(elem))

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? 'ml-4' : ''}
              >
                <a
                  href={`#${heading.id}`}
                  className={`text-sm hover:text-[#ff6b6b] transition-colors block ${
                    activeId === heading.id
                      ? 'text-[#ff6b6b] font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  {heading.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  )
}

