"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function PopularQuestions() {
  const questions = [
    {
      emoji: "💪",
      question: "Sauna Before or After Workout?",
      preview: "Timing matters for performance and recovery",
      href: "/articles/sauna-before-or-after-workout",
    },
    {
      emoji: "⏱️",
      question: "How Long to Sit in Sauna?",
      preview: "Optimal duration by experience level",
      href: "/articles/how-long-to-sit-in-sauna",
    },
    {
      emoji: "💧",
      question: "Dry Sauna vs Wet Sauna?",
      preview: "Which type for your health goals?",
      href: "/articles/dry-sauna-vs-wet-sauna",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Most Asked Questions About Sauna Protocols
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {questions.map((q, index) => (
            <Link key={index} href={q.href}>
              <Card className="hover:shadow-lg transition-all cursor-pointer h-full hover:border-[#ff6b6b]">
                <CardHeader>
                  <div className="text-4xl mb-2">{q.emoji}</div>
                  <h3 className="text-xl font-bold">
                    {q.question}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    {q.preview}
                  </p>
                  <span className="text-[#2196f3] font-medium hover:underline">
                    Learn More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

