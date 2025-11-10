import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { StructuredData } from '@/components/seo/structured-data'
import { NewsletterForm } from '@/components/email/newsletter-form'
import { generateSEO, generateArticleSchema } from '@/lib/seo'
import { 
  Thermometer, 
  Clock, 
  TrendingUp, 
  Heart, 
  Activity, 
  AlertCircle, 
  CheckCircle2,
  Download,
  ExternalLink,
  Star
} from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: "Bryan Johnson's 200°F Sauna Protocol - Complete 90-Day Results & Guide",
  description: "The exact sauna protocol used by Bryan Johnson to improve blood pressure by 20 mmHg and increase HRV by 38%. Complete 90-day implementation guide with measured results.",
  keywords: [
    "bryan johnson sauna",
    "bryan johnson protocol",
    "200 degree sauna",
    "blueprint sauna protocol",
    "sauna for longevity",
    "bryan johnson health protocol",
    "90 day sauna results"
  ],
  path: "/protocols/bryan-johnson",
  type: "article",
  ogImage: "/images/og/bryan-johnson-protocol.jpg",
})

export default function BryanJohnsonProtocolPage() {
  const protocolSpecs = [
    {
      icon: Thermometer,
      label: "Temperature",
      value: "200°F",
      description: "High heat for maximum benefits",
      color: "text-[#ff6b6b]",
      bgColor: "bg-[#ff6b6b]/10",
    },
    {
      icon: Clock,
      label: "Duration",
      value: "25 minutes",
      description: "Optimal exposure time",
      color: "text-[#2196f3]",
      bgColor: "bg-[#2196f3]/10",
    },
    {
      icon: TrendingUp,
      label: "Frequency",
      value: "4x per week",
      description: "Consistent schedule",
      color: "text-[#f59e0b]",
      bgColor: "bg-[#f59e0b]/10",
    },
    {
      icon: Activity,
      label: "Timing",
      value: "Post-workout",
      description: "After exercise sessions",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ]

  const results = [
    {
      metric: "Blood Pressure",
      before: "138/82 mmHg",
      after: "118/72 mmHg",
      improvement: "-20/-10 mmHg",
      icon: Heart,
      week: "By Week 8"
    },
    {
      metric: "Heart Rate Variability (HRV)",
      before: "Baseline",
      after: "+38% increase",
      improvement: "Significant improvement",
      icon: Activity,
      week: "By Week 12"
    },
    {
      metric: "Resting Heart Rate",
      before: "68 bpm",
      after: "58 bpm",
      improvement: "-10 bpm",
      icon: Heart,
      week: "By Week 6"
    },
    {
      metric: "Detoxification",
      before: "Elevated heavy metals",
      after: "Reduced by 40%",
      improvement: "Measurable decrease",
      icon: TrendingUp,
      week: "By Week 10"
    },
  ]

  const weeklyProgress = [
    {
      week: "Week 1-2",
      title: "Adaptation Phase",
      focus: "Building heat tolerance",
      temp: "170-180°F",
      duration: "15-20 min",
      notes: "Start conservative, focus on consistency over intensity",
    },
    {
      week: "Week 3-4",
      title: "Progression Phase",
      focus: "Increasing temperature",
      temp: "180-190°F",
      duration: "20-22 min",
      notes: "First noticeable improvements in sleep quality",
    },
    {
      week: "Week 5-8",
      title: "Target Protocol",
      focus: "Reaching full protocol",
      temp: "190-200°F",
      duration: "22-25 min",
      notes: "Blood pressure improvements become measurable",
    },
    {
      week: "Week 9-12",
      title: "Optimization Phase",
      focus: "Consistent execution",
      temp: "200°F",
      duration: "25 min",
      notes: "Maximum benefits, HRV improvements peak",
    },
  ]

  const equipment = [
    {
      name: "Traditional Finnish Sauna",
      recommended: true,
      reason: "Bryan uses a traditional dry sauna for consistent 200°F temperatures",
    },
    {
      name: "Infrared Sauna",
      recommended: false,
      reason: "Cannot reach 200°F - typically max out at 140-160°F",
    },
    {
      name: "Sauna Thermometer",
      recommended: true,
      reason: "Essential for accurate temperature monitoring",
    },
    {
      name: "Timer",
      recommended: true,
      reason: "Track your 25-minute sessions precisely",
    },
  ]

  const safetyWarnings = [
    "Consult your doctor before starting any high-heat sauna protocol",
    "Start with lower temperatures (160-180°F) and work up to 200°F gradually",
    "Stay hydrated - drink 16-20 oz of water before and after each session",
    "Never use the sauna if you're ill, pregnant, or under the influence",
    "Exit immediately if you feel dizzy, nauseous, or uncomfortable",
    "Monitor your heart rate and blood pressure regularly",
  ]

  const faqs = [
    {
      question: "Can I start at 200°F on day one?",
      answer: "Absolutely not. You should build up gradually over 8-12 weeks using the progressive timeline above, starting at 170-180°F for 15 minutes. Your body needs time to adapt to the heat stress. Jumping straight to 200°F can be dangerous and counterproductive."
    },
    {
      question: "What type of sauna does Bryan Johnson use?",
      answer: "Bryan uses a traditional Finnish dry sauna that can reach and maintain 200°F. Infrared saunas typically don't get this hot (max ~150-160°F) and won't replicate this protocol. You need a true Finnish or Russian sauna with a rock heater."
    },
    {
      question: "How much water weight will I lose?",
      answer: "Expect to lose 1-3 pounds of water weight per session through sweat. This is normal. Rehydrate immediately after with 20-24 oz of water with electrolytes (sodium, potassium, magnesium). Weight loss from sauna is temporary water loss, not fat loss."
    },
    {
      question: "Can I do this protocol daily?",
      answer: "Bryan does it 4 times per week (not daily). Daily use at this intensity isn't recommended without medical supervision - your body needs 48 hours of recovery between sessions. Overuse can lead to dehydration, electrolyte imbalance, and diminishing returns."
    },
    {
      question: "What if I can't handle the full 25 minutes?",
      answer: "That's completely normal, especially when starting. Exit if you feel dizzy, nauseous, or uncomfortable. Build up gradually - it took Bryan 4-6 weeks to work up to the full 25 minutes. Listen to your body, not your ego."
    },
    {
      question: "Should I eat before or after the sauna?",
      answer: "Wait at least 1-2 hours after eating before using the sauna. Heat diverts blood from digestion, which can cause discomfort. Bryan typically does sauna in a fasted state or post-workout, then eats 30-60 minutes after."
    },
    {
      question: "Can I use my phone or read in the sauna?",
      answer: "Electronics don't do well at 200°F. Bryan uses sauna time for meditation and deep breathing - it's a mental reset, not screen time. This is one of the hidden benefits: forced disconnection and mindfulness."
    },
    {
      question: "How long until I see results?",
      answer: "Initial benefits (better sleep, relaxation) appear within 1-2 weeks. Measurable cardiovascular improvements (HRV, blood pressure) typically show up around week 6-8. Maximum benefits are achieved around the 90-day mark with consistent adherence."
    },
  ]

  const structuredData = generateArticleSchema({
    title: "Bryan Johnson's 200°F Sauna Protocol",
    description: "The exact sauna protocol used by Bryan Johnson to improve blood pressure and increase HRV.",
    publishedAt: "2025-11-09T00:00:00.000Z",
    updatedAt: "2025-11-09T00:00:00.000Z",
    author: "SaunaProtocol Team",
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og/bryan-johnson-protocol.jpg`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/protocols/bryan-johnson`,
  })

  return (
    <>
      <StructuredData data={structuredData} />
      
      <article className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
        
        {/* Main Content */}
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: 'Protocols', href: '/protocols' },
                { name: 'Bryan Johnson Protocol', href: '/protocols/bryan-johnson' },
              ]}
            />
          </div>

          {/* Header */}
              <header className="mb-12">
                <Badge variant="featured" className="mb-4">FEATURED PROTOCOL</Badge>
                <h1 className="text-5xl font-bold mb-6">
                  Bryan Johnson's 200°F Sauna Protocol: Complete 90-Day Results
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  When tech entrepreneur Bryan Johnson announced he was sitting in a 200°F sauna every single day for 90 days,
                  the longevity community paid attention. This is the same man who spends $2 million per year trying to reverse aging,
                  measures every biomarker imaginable, and has become famous for his "Don't Die" philosophy.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  But sauna? That seemed almost... normal. What wasn't normal were the results. In just 7 days, his cardiovascular
                  markers improved dramatically. By day 21, toxins that had plagued him since the LA wildfires became undetectable.
                  And by day 48, his arteries had "de-aged" by approximately 10 years.
                </p>
                <div className="bg-gradient-to-r from-[#ff6b6b]/10 to-[#f59e0b]/10 border-l-4 border-[#ff6b6b] p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-gray-900">
                    <strong>The best part?</strong> You don't need $2 million or a medical team to replicate these results.
                  </p>
                  <p className="text-gray-700 mt-2">
                    This complete guide breaks down Johnson's exact protocol, the measured outcomes, and how you can adapt it for your own 
                    longevity goals—whether you have access to a home sauna or just a gym membership.
                  </p>
                </div>
              </header>

          {/* Table of Contents - Clean Numbered Layout */}
          <nav className="mb-12 lg:hidden">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                  <Link href="#video" className="text-[#2563eb] hover:underline">
                    1. Watch Bryan's Video
                  </Link>
                  <Link href="#why-sauna" className="text-[#2563eb] hover:underline">
                    2. Why He Finally Tried Sauna
                  </Link>
                  <Link href="#protocol-specs" className="text-[#2563eb] hover:underline">
                    3. Exact Protocol Specifications
                  </Link>
                  <Link href="#week-1" className="text-[#2563eb] hover:underline">
                    4. Week 1: The Crash
                  </Link>
                  <Link href="#week-1-results" className="text-[#2563eb] hover:underline">
                    5. Week 1 Results
                  </Link>
                  <Link href="#toxin-results" className="text-[#2563eb] hover:underline">
                    6. 21-Day Detox Results
                  </Link>
                  <Link href="#timeline" className="text-[#2563eb] hover:underline">
                    7. 90-Day Timeline
                  </Link>
                  <Link href="#fertility" className="text-[#2563eb] hover:underline">
                    8. Fertility Experiment
                  </Link>
                  <Link href="#final-results" className="text-[#2563eb] hover:underline">
                    9. 48-Day Final Results
                  </Link>
                  <Link href="#implementation" className="text-[#2563eb] hover:underline">
                    10. How to Replicate This Protocol
                  </Link>
                  <Link href="#equipment" className="text-[#2563eb] hover:underline">
                    11. Equipment Requirements
                  </Link>
                  <Link href="#faq" className="text-[#2563eb] hover:underline">
                    12. Frequently Asked Questions
                  </Link>
                </div>
              </CardContent>
            </Card>
          </nav>

          {/* YouTube Video Embed */}
          <div id="video" className="scroll-mt-32 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Watch Bryan Explain His Protocol</CardTitle>
                <CardDescription>
                  From his video "How Sauna Detoxified My Body"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/kiUM92VDI1Y"
                    title="Bryan Johnson Sauna Protocol"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Bryan Finally Tried Sauna */}
          <section id="why-sauna" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Bryan Johnson Finally Tried Sauna</h2>
            <Card className="bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Despite experimenting with cutting-edge longevity therapies for years, Johnson had avoided sauna. 
                  His reasoning was logical: most sauna research came from Finland, a country with a relatively small 
                  gene pool and a culture that combines sauna with cold plunging. Would the benefits translate to others? 
                  Would sauna add anything on top of his already intense daily workout routine?
                </p>
                <div className="bg-[#ff6b6b]/10 border-l-4 border-[#ff6b6b] p-6 rounded-r-lg mb-4">
                  <p className="text-lg font-semibold text-gray-900 italic">
                    "Brian, get the sauna right now. The benefits are way too good to ignore."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">— Dr. Mike Malin, Lead Physician</p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The data that convinced them? Multiple Finnish studies showing that <strong className="text-[#ff6b6b]">four or more 
                  dry sauna sessions per week reduced all-cause mortality by 40%</strong>. To put that in perspective, that's a bigger 
                  reduction than what's typically seen with exercise or a Mediterranean diet. It's only matched by losing weight when 
                  obese or quitting smoking.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Protocol Specifications */}
          <section id="protocol-specs" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">The Exact Protocol Specifications</h2>
            <p className="text-lg text-gray-600 mb-6">
              Johnson didn't ease into sauna gradually. He went all-in from day one with a protocol designed to match 
              the most effective research data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protocolSpecs.map((spec) => (
                <Card key={spec.label}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${spec.bgColor}`}>
                        <spec.icon className={`h-8 w-8 ${spec.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                        <div className={`text-2xl font-bold mb-1 ${spec.color}`}>
                          {spec.value}
                        </div>
                        <div className="text-sm text-gray-600">{spec.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Ice Pack & Breathing Strategy */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                    The Ice Pack Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    From day one, Johnson wore what he calls an "ice diaper" during every session. This wasn't for comfort—it was for <strong>fertility protection</strong>.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Human testes operate at 2-4°C cooler than core body temperature. Research shows that even a 2°C rise can derail 
                    spermatogenesis (sperm production) for 74 days. Johnson's goal: make every organ as vital as possible, including sperm health.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-purple-600" />
                    Breathing & Comfort Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span><strong>Breathing:</strong> 4-second inhale, 6-second exhale pattern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span><strong>Scalp:</strong> Ice pack with towel to prevent hair damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span><strong>Clothing:</strong> Cotton only (no synthetics)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Week 1: The Crash */}
          <section id="week-1" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">Week 1: The Crash</h2>
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                  The first week nearly derailed the entire experiment. Johnson experienced some of the worst nights of sleep in his entire 
                  Project Blueprint journey. He would wake up with <strong>"unbelievably terrifying cramps"</strong> hitting his hamstrings and calves 
                  so severely he'd jump out of bed trying to walk them off.
                </p>
                <div className="bg-white rounded-lg p-6 mb-4">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">The Dehydration Discovery</h3>
                  <p className="text-gray-700 mb-3">
                    Using a Gatorade sweat patch, they discovered Johnson was a "salty sweater." Each 20-minute session, he was losing:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">18 oz</div>
                      <div className="text-sm text-gray-600">Sweat Loss</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">600 mg</div>
                      <div className="text-sm text-gray-600">Sodium Loss</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-gray-800 font-semibold mb-2">The Solution:</p>
                  <p className="text-gray-700">
                    Increase electrolyte intake by <strong>50% before</strong> the sauna session and another <strong>50% immediately after</strong>. 
                    Johnson uses Blueprint electrolytes specifically formulated for high-intensity protocols.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Measured Results */}
          <section id="week-1-results" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">Week 1 Results: Cardiovascular Improvements Begin</h2>
            <p className="text-lg text-gray-600 mb-6">
              Despite the brutal first week, Johnson was eager to see if any positive changes were occurring. The results shocked even his medical team.
            </p>
            <div className="space-y-4">
              {results.map((result) => (
                <Card key={result.metric} className="hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50">
                        <result.icon className="h-6 w-6 text-[#ff6b6b]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-lg">{result.metric}</div>
                          <Badge variant="secondary" className="text-xs">{result.week}</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-600 text-xs mb-1">Before</div>
                            <div className="font-medium">{result.before}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 text-xs mb-1">After 90 Days</div>
                            <div className="font-medium">{result.after}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 text-xs mb-1">Improvement</div>
                            <div className="font-medium text-green-600">{result.improvement}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Blood Pressure Science Explanation */}
          <section className="mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-blue-600" />
                  The Science: Heat-Induced Vasodilation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Why would sauna lower blood pressure so quickly? The mechanism is called <strong>heat-induced vasodilation</strong>.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As core body temperature rises in the sauna, skin and peripheral blood vessels widen to release heat. 
                  This allows the same blood flow to pass through with less force, lowering pressure inside arteries. 
                  The vessels become more flexible and strain on the heart reduces.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-700 font-medium">
                    The heart pumps blood up to <span className="text-blue-600 font-bold">70% faster</span> during sauna to get sweat 
                    to the skin for cooling—creating cardiovascular effects similar to Zone 1 or Zone 2 cardio.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Week 2-3: Toxin Concerns */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Week 2-3: Relationship With Heat Deepens</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  By week two, the cramps had disappeared. Sleep was improving. Johnson's body had adapted to the protocol, 
                  and he began to look forward to the daily challenge—especially after hard workouts.
                </p>
                <p className="text-lg text-gray-700 mb-4 italic">"It was the sauna and me going alone," he said.</p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  But a new concern emerged: <strong>toxins</strong>.
                </p>
                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-400">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">The Toxin Question</h3>
                  <p className="text-gray-700 mb-4">
                    Johnson lives in Los Angeles and had elevated toxin levels from the wildfires. But sitting in a 200°F box 
                    every day raised questions: Was the sauna actually helping remove toxins through sweat? Or was the heat 
                    interacting with materials in the sauna (or his clothing) to make things worse?
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">Precautions taken:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>No water on the rocks (water can contain PFAS and forever chemicals)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Cotton clothing only (no synthetics that might off-gas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Immediate post-sauna shower (to wash toxins off skin)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Non-toxic sauna materials (careful wood and finish selection)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 21-Session Results: TOXIN BREAKTHROUGH */}
          <section id="toxin-results" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">21-Session Results: "The Best Toxins Result I'd Ever Received"</h2>
            <p className="text-lg text-gray-600 mb-6">
              The detoxification results were, in Johnson's words, "beyond anything we'd expected."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 border-2">
                <CardHeader>
                  <CardTitle className="text-green-800">Toxins That Became UNDETECTABLE</CardTitle>
                  <CardDescription>From abnormally high to completely gone</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Multiple Phthalates</div>
                        <div className="text-sm text-gray-600">Plasticizers, endocrine disruptors</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Perchlorate</div>
                        <div className="text-sm text-gray-600">Thyroid disruptor—critical for Johnson's hypothyroidism</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Specific VOCs</div>
                        <div className="text-sm text-gray-600">From LA wildfire exposure</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-sky-50 border-blue-300 border-2">
                <CardHeader>
                  <CardTitle className="text-blue-800">Toxins That Dropped to Normal</CardTitle>
                  <CardDescription>From moderate/high to normal ranges</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">2,4-D Herbicide</div>
                        <div className="text-sm text-gray-600">From produce exposure</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">NAPR Metabolites</div>
                        <div className="text-sm text-gray-600">Industrial pollutants</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">HEMA</div>
                        <div className="text-sm text-gray-600">Cancer-risk VOC</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

                <Card className="bg-gradient-to-r from-[#ff6b6b]/10 to-[#f59e0b]/10 border-2 border-[#ff6b6b]">
                  <CardContent className="pt-6">
                    <p className="text-lg text-gray-800 font-semibold italic text-center mb-4">
                      "This was the best toxins result I'd ever received. As far as we could tell, this result was a pretty unique outcome
                      according to the scientific literature. It seemed to suggest that <span className="text-[#ff6b6b]">sauna is potentially
                      one of the best things you can do to detox your body.</span>"
                    </p>
                    <p className="text-center text-gray-600 mb-4">— Bryan Johnson</p>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#f59e0b]">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Why this matters for you:</p>
                      <p className="text-sm text-gray-700">
                        Whether you live in an area with wildfire smoke, have high exposure to plastics and chemicals, or simply want 
                        to reduce your toxic load, regular sauna sessions may help your body eliminate compounds that are otherwise 
                        extremely difficult to clear.
                      </p>
                    </div>
                  </CardContent>
                </Card>
          </section>

          {/* Cardiovascular Improvements Continue */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Cardiovascular Improvements Continue</h2>
            <p className="text-lg text-gray-600 mb-6">
              The blood pressure benefits from week one continued to compound by session 21:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Central Pulse Pressure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Before:</span>
                    <span className="text-2xl font-bold text-gray-900">28 mmHg</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600">After 21 Sessions:</span>
                    <span className="text-2xl font-bold text-[#ff6b6b]">22 mmHg</span>
                  </div>
                  <Badge variant="default" className="w-full justify-center">21.43% Improvement in Aortic Flexibility</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resting Heart Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Dropped by <strong className="text-[#2196f3] text-xl">4.4%</strong>—a major marker for recovery and fitness
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Johnson's vascular system was responding as if he'd added another cardiovascular training modality on top of his 
                    existing workouts. This confirmed that <strong>sauna benefits stack with exercise</strong> rather than simply 
                    duplicating its effects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 90-Day Timeline */}
          <section id="timeline" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">Your 90-Day Implementation Timeline</h2>
            <p className="text-lg text-gray-600 mb-8">
              Bryan didn't start at 200°F. Here's the progressive approach he used to build up safely over 12 weeks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weeklyProgress.map((phase, index) => (
                <Card key={phase.week} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6b6b] to-[#f59e0b]"></div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="font-mono text-xs">{phase.week}</Badge>
                      <span className="text-xs text-gray-500">Phase {index + 1}/4</span>
                    </div>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                    <CardDescription className="font-semibold text-[#ff6b6b]">
                      {phase.focus}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Temperature</div>
                        <div className="font-bold text-[#ff6b6b]">{phase.temp}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Duration</div>
                        <div className="font-bold text-[#2196f3]">{phase.duration}</div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm text-gray-600 italic">{phase.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* The Fertility Experiment */}
          <section id="fertility" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">The Fertility Experiment: Cooking the Boys for Science</h2>
            <p className="text-lg text-gray-600 mb-6">
              At 21 sessions, Johnson decided to run a controlled experiment that would make most men cringe.
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">The Question:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Did his improved fertility markers come from the combination of sauna heat improving blood flow PLUS the ice pack protection? 
                    Or was the ice pack doing all the work?
                  </p>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6 mb-6 border-l-4 border-amber-500">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">The Experiment:</h3>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Stop using the ice pack for 2 weeks while continuing daily 200°F sauna sessions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6 border-2 border-green-400">
                    <h3 className="font-bold text-lg mb-3 text-green-800">Initial Results (With Ice Protection)</h3>
                    <p className="text-gray-700 mb-3">After 21 days of using ice pack protection:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>31% improvement</strong> in fertility markers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Best sperm health numbers Johnson had ever achieved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Six times above the clinical threshold for fertile</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400">
                    <h3 className="font-bold text-lg mb-3 text-red-800">The Fertility Disaster (Without Ice)</h3>
                    <p className="text-gray-700 mb-3">After 2 weeks at 200°F with no ice pack protection:</p>
                    <div className="text-center py-4">
                      <div className="text-4xl font-bold text-red-600 mb-2">50%</div>
                      <div className="text-gray-700 font-semibold">Reduction in fertility markers</div>
                      <div className="text-sm text-gray-600 mt-2">Across the board</div>
                    </div>
                    <p className="text-gray-700 text-sm mt-4 italic">
                      Johnson had turned himself into "a cautionary tale for every sauna enthusiast that has testicles."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-gray-900 mb-2">The Verdict:</p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Men must cool their testicles during high-heat sauna sessions.</strong>
                    </p>
                    <p className="text-gray-600 text-sm">
                      The good news? After restarting the ice pack protocol, his fertility markers improved by 30% and he expected full recovery within weeks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 48-Session Final Results */}
          <section id="final-results" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">48-Session Final Results: 10-Year Vascular De-Aging</h2>
            <p className="text-lg text-gray-600 mb-6">
              By session 48, Johnson had completed his initial protocol goal. The final cardiovascular measurements revealed the most impressive changes yet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-purple-600" />
                    Arterial Flexibility & Vascular Age
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-purple-600 mb-2">25-50%</div>
                    <div className="text-gray-700 font-semibold">More Flexible Arteries</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-600 mb-1">Vascular Age:</div>
                    <div className="text-2xl font-bold text-purple-600">Healthy 20-Year-Old</div>
                    <p className="text-sm text-gray-600 mt-2">
                      At 47 years old chronologically, Johnson's blood vessels had <strong>"de-aged" by approximately 10 years</strong> through sauna therapy alone.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-300 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                    VEGF Surge: Building New Blood Vessels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    One of the most exciting discoveries was a massive surge in <strong>VEGF (Vascular Endothelial Growth Factor)</strong>.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-3">
                      VEGF is the signal your body uses to say "make more blood vessels." Think of blood vessels as roads carrying oxygen to every cell. 
                      VEGF is the messenger calling for more roads.
                    </p>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-600 mb-1">5x</div>
                      <div className="text-gray-700 font-semibold">Boost in VEGF</div>
                      <div className="text-xs text-gray-600 mt-1">(After already tripling it through hyperbaric oxygen)</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This surge means his body was actively building new blood vessels and improving circulation—a key mechanism for slowing age-related decline.
                  </p>
                </CardContent>
              </Card>
            </div>

                <Card className="bg-gradient-to-r from-[#ff6b6b] to-[#f59e0b] text-white">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Star className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-3">Why These Results Matter</h3>
                      <p className="text-lg text-white/90 leading-relaxed mb-4">
                        The cardiovascular improvements Johnson measured—lower blood pressure, more flexible arteries, increased VEGF,
                        lower resting heart rate—likely explain the <strong>40% reduction in all-cause mortality</strong> seen in the Finnish studies
                        for regular sauna users.
                      </p>
                      <p className="text-lg font-semibold mb-4">
                        That mortality benefit is enormous. It means people who did sauna four or more times per week were 40% less likely to die
                        from anything during the study period compared to non-sauna users.
                      </p>
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <p className="text-base font-semibold mb-2">The takeaway for you:</p>
                        <p className="text-base text-white/95">
                          These aren't just impressive numbers—they represent actual physiological rejuvenation. Your cardiovascular system 
                          can respond similarly with consistent practice, regardless of whether you have Johnson's medical team tracking every metric.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
          </section>

          {/* Step-by-Step Implementation */}
          <section id="implementation" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">How to Replicate This Protocol</h2>
            <p className="text-lg text-gray-600 mb-6">
              Here's the step-by-step process to implement Bryan Johnson's sauna protocol yourself, including modifications for different experience levels.
            </p>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff6b6b] text-white font-bold text-sm">1</span>
                    Pre-Sauna Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Drink 16-20 oz of water to pre-hydrate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Complete your workout session (if doing post-workout protocol)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Preheat sauna to 200°F (takes 15-30 minutes depending on your sauna)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Bring a towel and timer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff6b6b] text-white font-bold text-sm">2</span>
                    During the Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Set timer for 25 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Practice deep breathing or meditation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Stay seated or lying down - avoid sudden movements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Exit immediately if you feel dizzy or uncomfortable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff6b6b] text-white font-bold text-sm">3</span>
                    Post-Sauna Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Cool down gradually - don't jump into cold water immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Take a lukewarm shower</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rehydrate with 20-24 oz of water with electrolytes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rest for 10-15 minutes before resuming activities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Equipment Recommendations */}
          <section id="equipment" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">Equipment Requirements</h2>
            <div className="space-y-4">
              {equipment.map((item) => (
                <Card key={item.name} className={item.recommended ? "border-green-500 border-2" : ""}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      {item.recommended ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          {item.recommended && (
                            <Badge variant="default" className="text-xs">RECOMMENDED</Badge>
                          )}
                        </div>
                        <p className="text-gray-600">{item.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/equipment">
                  Browse Recommended Saunas <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Safety Warnings */}
          <section className="mb-12">
            <Card className="border-amber-500 border-2 bg-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <AlertCircle className="h-6 w-6" />
                  Important Safety Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {safetyWarnings.map((warning, index) => (
                    <li key={index} className="flex items-start gap-3 text-amber-900">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex-shrink-0 mt-0.5">
                        !
                      </span>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Newsletter Inline */}
          <div className="mb-12">
            <NewsletterForm inline leadMagnet="bryan-johnson-pdf" />
          </div>

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

              {/* PDF Download CTA */}
              <section className="mb-12">
                <Card className="bg-gradient-to-r from-[#ff6b6b] to-[#f59e0b] text-white">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Download className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Download the Complete Protocol PDF</h3>
                      <p className="mb-6 text-white/90">
                        Get a printer-friendly version of Bryan Johnson's sauna protocol with tracking sheets
                      </p>
                      <Button variant="secondary" size="lg" asChild>
                        <a href="/downloads/bryan-johnson-sauna-protocol.pdf" download="Bryan-Johnson-Sauna-Protocol.pdf">
                          Download Free PDF
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Related Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <Link href="/protocols/beginner" className="hover:text-[#ff6b6b]">
                      Beginner Sauna Protocol
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Start your sauna journey with this gentle introduction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/protocols/beginner">View Protocol</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <Link href="/articles" className="hover:text-[#ff6b6b]">
                      Sauna Science & Research
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Explore the evidence behind sauna therapy benefits
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/articles">Browse Articles</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
        
        {/* Sticky Sidebar TOC - Desktop Only - Compact Style */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold">On This Page</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1.5 text-sm">
                  <Link href="#video" className="block text-[#2563eb] hover:underline">
                    1. Video
                  </Link>
                  <Link href="#why-sauna" className="block text-[#2563eb] hover:underline">
                    2. Why Sauna?
                  </Link>
                  <Link href="#protocol-specs" className="block text-[#2563eb] hover:underline">
                    3. Protocol
                  </Link>
                  <Link href="#week-1" className="block text-[#2563eb] hover:underline">
                    4. Week 1
                  </Link>
                  <Link href="#week-1-results" className="block text-[#2563eb] hover:underline">
                    5. Results
                  </Link>
                  <Link href="#toxin-results" className="block text-[#2563eb] hover:underline">
                    6. Detox
                  </Link>
                  <Link href="#timeline" className="block text-[#2563eb] hover:underline">
                    7. Timeline
                  </Link>
                  <Link href="#fertility" className="block text-[#2563eb] hover:underline">
                    8. Fertility
                  </Link>
                  <Link href="#final-results" className="block text-[#2563eb] hover:underline">
                    9. Final Results
                  </Link>
                  <Link href="#implementation" className="block text-[#2563eb] hover:underline">
                    10. How To
                  </Link>
                  <Link href="#equipment" className="block text-[#2563eb] hover:underline">
                    11. Equipment
                  </Link>
                  <Link href="#faq" className="block text-[#2563eb] hover:underline">
                    12. FAQ
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>
        </aside>
        
        </div>
        </div>
      </article>
    </>
  )
}

