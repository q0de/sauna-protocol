"use client"

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, BookOpen, User, TrendingUp } from 'lucide-react'

export function SocialProof() {
  const researchResults = [
    {
      title: "Finnish Sauna Studies",
      participants: "2,315 men",
      duration: "20-year follow-up",
      findings: [
        "27% reduced cardiovascular mortality",
        "40% lower all-cause mortality (4-7x weekly)",
        "Average 20 mmHg blood pressure reduction"
      ],
      source: "JAMA Internal Medicine, 2015",
      studyLink: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2130724",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Bryan Johnson Case Study",
      participants: "Documented case study",
      duration: "90-day protocol",
      findings: [
        "HRV increased by 38%",
        "Blood pressure reduced by 20 mmHg",
        "Reported in public Blueprint material"
      ],
      source: "Publicly available Blueprint data",
      icon: User,
      color: "text-[#ff6b6b]",
      bgColor: "bg-red-50",
      link: "/protocols/bryan-johnson",
      studyLink: "https://blueprint.bryanjohnson.com/",
    },
    {
      title: "Sauna Evidence Review",
      participants: "Evidence review",
      duration: "Various timeframes",
      findings: [
        "32% reduction in inflammation markers",
        "30-40% improvement in sleep onset",
        "Significant HRV improvements in 12 weeks"
      ],
      source: "Mayo Clinic Proceedings, 2018",
      studyLink: "https://pubmed.ncbi.nlm.nih.gov/30077204/",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Research-Backed Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence from published sauna studies, review papers, and publicly documented protocols showing measurable associations with consistent sauna use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchResults.map((result, index) => {
            const Icon = result.icon
            
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-all h-full">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${result.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${result.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{result.title}</h3>
                  
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {result.participants}
                    </Badge>
                    <span className="text-sm text-gray-500 ml-2">• {result.duration}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {result.findings.map((finding, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{finding}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    <p className="text-xs text-gray-500 flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {result.source}
                    </p>
                    {result.studyLink && (
                      <a 
                        href={result.studyLink} 
                        target="_blank" 
                        rel="noopener noreferrer nofollow"
                        className="text-xs text-[#2196f3] flex items-center font-medium hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View research study <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                    {result.link && (
                      <Link 
                        href={result.link} 
                        className="text-xs text-[#ff6b6b] flex items-center font-medium hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View full protocol <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Many long-term sauna findings are observational associations, not proof of causation. Individual results may vary.
            <Link href="/#research-sources" className="text-[#2196f3] underline hover:text-[#1976d2] ml-1">
              View source library →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
