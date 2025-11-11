"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, TrendingUp, Heart, Zap } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SocialProofVariant = 'testimonials' | 'stats' | 'case-studies'

export function SocialProof() {
  const [variant, setVariant] = useState<SocialProofVariant>('testimonials')

  const testimonials = [
    {
      quote: "I lowered my resting heart rate by 8 bpm in 6 weeks using the intermediate protocol. The specific temperature and timing guidelines made all the difference.",
      name: "Mike Chen",
      age: 42,
      occupation: "Software Engineer",
      protocol: "Intermediate Protocol",
      timeframe: "6 weeks",
      result: "8 bpm RHR reduction",
    },
    {
      quote: "After 3 months following the advanced protocol, my HRV increased by 35% and I'm sleeping better than I have in years. The equipment recommendations were spot-on.",
      name: "Sarah Martinez",
      age: 38,
      occupation: "Fitness Coach",
      protocol: "Advanced Protocol",
      timeframe: "3 months",
      result: "+35% HRV increase",
    },
    {
      quote: "The beginner protocol helped me build heat tolerance safely. Started at 150°F for 10 minutes, now comfortably doing 180°F for 20 minutes. Game changer for recovery.",
      name: "James Wilson",
      age: 45,
      occupation: "Marathon Runner",
      protocol: "Beginner Protocol",
      timeframe: "8 weeks",
      result: "30°F temp increase",
    },
  ]

  const stats = [
    { icon: TrendingUp, number: "10,000+", label: "Protocols Followed" },
    { icon: Star, number: "4.8/5", label: "Average Rating" },
    { icon: Heart, number: "92%", label: "Report Improved Sleep" },
    { icon: Zap, number: "87%", label: "See Results in 30 Days" },
  ]

  const caseStudies = [
    {
      title: "Blood Pressure Optimization",
      before: "145/92 mmHg",
      after: "125/78 mmHg",
      protocol: "Bryan Johnson Protocol",
      duration: "90 days",
      sessions: "4x per week, 25 min",
    },
    {
      title: "Athletic Recovery",
      before: "48-hour recovery time",
      after: "24-hour recovery time",
      protocol: "Advanced Protocol",
      duration: "60 days",
      sessions: "5x per week, 20 min",
    },
    {
      title: "Sleep Quality",
      before: "5.2 hours deep sleep",
      after: "7.8 hours deep sleep",
      protocol: "Intermediate Protocol",
      duration: "45 days",
      sessions: "3x per week, 18 min",
    },
  ]

  return (
    <section className="relative py-16 bg-white">
      {/* Variant Selector */}
      <div className="absolute top-4 right-4 z-10">
        <Select value={variant} onValueChange={(value) => setVariant(value as SocialProofVariant)}>
          <SelectTrigger className="w-[180px] bg-white shadow-sm text-xs">
            <SelectValue placeholder="Social Proof Variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="testimonials">Testimonials</SelectItem>
            <SelectItem value="stats">Stats Only</SelectItem>
            <SelectItem value="case-studies">Case Studies</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Real Results from Real People</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {variant === 'testimonials' && "See how others are optimizing their health with evidence-based sauna protocols"}
            {variant === 'stats' && "Join thousands who are already seeing measurable improvements"}
            {variant === 'case-studies' && "Documented results from protocol followers"}
          </p>
        </div>

        {/* Testimonials Variant */}
        {variant === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age}</p>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.occupation}</p>
                    <Badge variant="secondary" className="mb-2">Using: {testimonial.protocol}</Badge>
                    <div className="text-sm text-gray-600">
                      <p><strong>Timeframe:</strong> {testimonial.timeframe}</p>
                      <p><strong>Result:</strong> {testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Stats Only Variant */}
        {variant === 'stats' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff6b6b]/10 mb-4">
                    <Icon className="h-8 w-8 text-[#ff6b6b]" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Case Studies Variant */}
        {variant === 'case-studies' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-2 border-[#ff6b6b]/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{study.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">BEFORE</p>
                      <p className="text-lg font-bold text-gray-900">{study.before}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 bg-[#ff6b6b] text-white text-xs font-semibold rounded-full">
                        {study.duration}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">AFTER</p>
                      <p className="text-lg font-bold text-gray-900">{study.after}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t text-sm text-gray-600">
                    <p><strong>Protocol:</strong> {study.protocol}</p>
                    <p><strong>Sessions:</strong> {study.sessions}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

