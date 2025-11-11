"use client"

import { useState } from 'react'
import { Microscope, CheckCircle, BarChart3, Users } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type TrustVariant = 'conservative' | 'aspirational' | 'ai-generated'

export function TrustBar() {
  const [variant, setVariant] = useState<TrustVariant>('conservative')

  const trustMetrics = {
    conservative: [
      { icon: CheckCircle, number: "11", label: "Products Tested" },
      { icon: Microscope, number: "40+", label: "Studies Cited" },
      { icon: BarChart3, number: "3", label: "Protocols Documented" },
      { icon: Users, number: "1,000+", label: "Monthly Readers" },
    ],
    aspirational: [
      { icon: CheckCircle, number: "50+", label: "Products Tested" },
      { icon: Microscope, number: "127", label: "Studies Cited" },
      { icon: Users, number: "10,000+", label: "Protocol Followers" },
      { icon: BarChart3, number: "Featured", label: "by Biohackers" },
    ],
    'ai-generated': [
      { icon: CheckCircle, number: "23", label: "Products Reviewed" },
      { icon: Microscope, number: "67", label: "Studies Referenced" },
      { icon: BarChart3, number: "5", label: "Evidence-Based Protocols" },
      { icon: Users, number: "5,000+", label: "Active Users" },
    ],
  }

  const metrics = trustMetrics[variant]

  return (
    <section className="relative py-8 bg-white border-y border-gray-200">
      {/* Variant Selector */}
      <div className="absolute top-4 right-4 z-10">
        <Select value={variant} onValueChange={(value) => setVariant(value as TrustVariant)}>
          <SelectTrigger className="w-[180px] bg-white shadow-sm text-xs">
            <SelectValue placeholder="Trust Bar Variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="conservative">Conservative</SelectItem>
            <SelectItem value="aspirational">Aspirational</SelectItem>
            <SelectItem value="ai-generated">AI-Generated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff6b6b]/10 mb-3">
                  <Icon className="h-6 w-6 text-[#ff6b6b]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {metric.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

