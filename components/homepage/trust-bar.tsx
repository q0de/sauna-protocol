import { Microscope, CheckCircle, BarChart3, Users } from 'lucide-react'

export function TrustBar() {
  // Locked to Conservative variant (real, verifiable numbers)
  const metrics = [
    { icon: Microscope, number: "40+", label: "Studies Analyzed" },
    { icon: CheckCircle, number: "11", label: "Products Tested" },
    { icon: BarChart3, number: "Complete", label: "Protocol Guide" },
    { icon: Users, number: "1,000+", label: "Following" },
  ]

  return (
    <section className="py-8 bg-white border-y border-gray-200">

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

