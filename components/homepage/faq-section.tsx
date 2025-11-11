"use client"

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is a sauna protocol?",
      answer: "A sauna protocol is a structured approach to heat exposure that specifies temperature, duration, frequency, and safety guidelines. Protocols range from beginner-friendly 10-minute sessions at 150°F to advanced programs like Bryan Johnson's 200°F protocol.",
    },
    {
      question: "Should I use sauna before or after workout?",
      answer: (
        <>
          For most people, sauna after workout is optimal for recovery and muscle growth. However, timing depends on your goals—performance vs recovery.{' '}
          <Link href="/articles/sauna-before-or-after-workout" className="text-[#2196f3] underline hover:text-[#1976d2]">
            Learn more about sauna before or after workout →
          </Link>
        </>
      ),
    },
    {
      question: "How long should I sit in sauna?",
      answer: (
        <>
          Beginners: 10-15 minutes at 150-170°F. Intermediate: 15-20 minutes at 170-190°F. Advanced: 20-30 minutes at 190-200°F. Always listen to your body and start conservatively.{' '}
          <Link href="/articles/how-long-to-sit-in-sauna" className="text-[#2196f3] underline hover:text-[#1976d2]">
            See complete duration guidelines →
          </Link>
        </>
      ),
    },
    {
      question: "Dry sauna vs wet sauna - which is better?",
      answer: (
        <>
          Both provide cardiovascular benefits. Dry saunas (traditional Finnish) reach higher temperatures (170-200°F) and are used in most research studies. Wet saunas (steam rooms) operate at lower temps (110-120°F) with high humidity.{' '}
          <Link href="/articles/dry-sauna-vs-wet-sauna" className="text-[#2196f3] underline hover:text-[#1976d2]">
            Compare dry vs wet sauna →
          </Link>
        </>
      ),
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Sauna Protocol Questions Answered
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a sauna protocol?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A sauna protocol is a structured approach to heat exposure that specifies temperature, duration, frequency, and safety guidelines. Protocols range from beginner-friendly 10-minute sessions at 150°F to advanced programs like Bryan Johnson's 200°F protocol."
                }
              },
              {
                "@type": "Question",
                "name": "Should I use sauna before or after workout?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most people, sauna after workout is optimal for recovery and muscle growth. However, timing depends on your goals—performance vs recovery."
                }
              },
              {
                "@type": "Question",
                "name": "How long should I sit in sauna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beginners: 10-15 minutes at 150-170°F. Intermediate: 15-20 minutes at 170-190°F. Advanced: 20-30 minutes at 190-200°F. Always listen to your body and start conservatively."
                }
              },
              {
                "@type": "Question",
                "name": "Dry sauna vs wet sauna - which is better?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both provide cardiovascular benefits. Dry saunas (traditional Finnish) reach higher temperatures (170-200°F) and are used in most research studies. Wet saunas (steam rooms) operate at lower temps (110-120°F) with high humidity."
                }
              }
            ]
          })
        }}
      />
    </section>
  )
}

