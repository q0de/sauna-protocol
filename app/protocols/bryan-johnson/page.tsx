import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { StructuredData } from '@/components/seo/structured-data'
import { generateSEO, generateArticleSchema } from '@/lib/seo'
import { affiliateLinks } from '@/lib/affiliate-links'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { HoverCard } from '@/components/effects/hover-card'

export const metadata: Metadata = generateSEO({
  title: "Bryan Johnson's 200°F Sauna Protocol",
  description: "The exact sauna protocol Bryan Johnson uses to improve blood pressure 20 mmHg and increase HRV 38%. Complete 90-day guide with measured results.",
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
      label: "Temperature",
      value: "200°F (93°C)",
      icon: "thermostat",
      description: "Dry Finnish-style sauna, not infrared",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      label: "Duration",
      value: "20 minutes",
      icon: "timer",
      description: "Consistent timing, no extensions",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      label: "Frequency",
      value: "Daily",
      icon: "calendar_month",
      description: "7 days per week, post-workout",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      label: "Timing",
      value: "Post-workout",
      icon: "fitness_center",
      description: "Immediately after daily exercise",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    }
  ]

  const results = [
    {
      metric: "Systolic Blood Pressure",
      before: "120 mmHg",
      after: "100 mmHg",
      improvement: "-20 mmHg (16.7%)",
      week: "Week 1",
      icon: "favorite"
    },
    {
      metric: "Heart Rate Variability (HRV)",
      before: "50 ms",
      after: "69 ms",
      improvement: "+38%",
      week: "Week 1",
      icon: "monitoring"
    },
    {
      metric: "Resting Heart Rate",
      before: "46 bpm",
      after: "42 bpm",
      improvement: "-4 bpm (8.7%)",
      week: "Week 3",
      icon: "ecg_heart"
    }
  ]

  const weeklyProgress = [
    {
      week: "Week 1-2",
      title: "Acclimatization",
      description: "Focus on staying in, not the heat level.",
      temp: "170°F",
      duration: "15 Min",
      frequency: "3x/Week",
      difficulty: "Easy",
      notes: "Your body needs time to adapt. Expect discomfort but push through safely."
    },
    {
      week: "Week 3-4",
      title: "The Ramp Up",
      description: "Increasing thermal load to trigger HSP release.",
      temp: "185°F",
      duration: "20 Min",
      frequency: "4x/Week",
      difficulty: "Medium",
      notes: "Heat shock proteins begin activating. You'll notice improved recovery."
    },
    {
      week: "Week 5-8",
      title: "Building Endurance",
      description: "Establishing consistent daily practice.",
      temp: "195°F",
      duration: "20-25 Min",
      frequency: "5-6x/Week",
      difficulty: "Medium",
      notes: "Cardiovascular adaptations accelerate. Blood pressure improvements visible."
    },
    {
      week: "Week 9-12",
      title: "The Blueprint Standard",
      description: "Full protocol. Extreme heat caution advised.",
      temp: "200°F+",
      duration: "25-30 Min",
      frequency: "Daily",
      difficulty: "Hard",
      featured: true,
      notes: "Maximum benefits achieved. Maintain this level for ongoing longevity gains."
    },
  ]

  const equipment = [
    { 
      name: "High-Temperature Dry Sauna (Traditional Finnish)", 
      reason: "Must reach 200°F - most infrared saunas max out at 140-150°F", 
      recommended: true,
      link: affiliateLinks.clearlight.main,
      external: true
    },
    { 
      name: "Testicular Ice Pack", 
      reason: "Critical for fertility protection at extreme temperatures", 
      recommended: true,
      link: affiliateLinks.icePackTesticles,
      external: true
    },
    { 
      name: "Head/Scalp Ice Pack", 
      reason: "Protects hair from heat damage, improves comfort", 
      recommended: true,
      link: affiliateLinks.icePackHead,
      external: true
    },
    { 
      name: "Electrolyte Supplements", 
      reason: "Replace sodium and minerals lost through heavy sweating", 
      recommended: true,
      link: "https://amazon.com/s?k=electrolyte+powder&tag=saunaprotocol-20",
      external: true
    },
    { 
      name: "Cotton Clothing Only", 
      reason: "Avoid synthetics that may off-gas at high temperatures", 
      recommended: true 
    },
    { 
      name: "Mechanical Timer", 
      reason: "Electronic devices can malfunction at 200°F", 
      recommended: true,
      link: affiliateLinks.timerMechanicalStainless,
      external: true
    },
  ]

  const safetyWarnings = [
    "Consult your doctor before starting any high-heat protocol, especially if you have cardiovascular conditions",
    "Never sauna alone—always have someone aware you're in the sauna",
    "Exit immediately if you feel dizzy, nauseous, or confused",
    "Avoid alcohol before or after sauna sessions",
    "Stay hydrated with electrolytes before AND after each session",
    "Men should use testicular cooling to protect fertility at temperatures above 175°F",
  ]

  const faqs = [
    {
      question: "How long until I see results?",
      answer: "Bryan Johnson saw blood pressure improvements within the first week. HRV improvements were also visible by week 1. Toxin reduction results came after 21 sessions (approximately 3 weeks of daily use). Full cardiovascular de-aging markers were measured at 48 sessions."
    },
    {
      question: "Can I use an infrared sauna instead?",
      answer: "Infrared saunas typically max out at 140-150°F, which may not trigger the same level of Heat Shock Proteins as 200°F dry heat. If you only have access to infrared, extend your sessions and understand results may differ. The Finnish studies showing 40% mortality reduction used traditional dry saunas."
    },
    {
      question: "What about the fertility concerns?",
      answer: "This is critical: Johnson's experiment showed a 50% drop in fertility markers after just 2 weeks without testicular cooling. However, with ice pack protection, he achieved his BEST fertility numbers ever—31% improvement. Always use testicular cooling at high temperatures."
    },
    {
      question: "How does sauna compare to exercise for cardiovascular health?",
      answer: "Sauna benefits STACK with exercise—they don't replace it. Johnson's results show that adding sauna to an already intense exercise routine provided additional cardiovascular improvements. The heart pumps up to 70% faster during sauna to cool the body, similar to Zone 1-2 cardio."
    },
    {
      question: "Is daily sauna too much?",
      answer: "The Finnish studies that showed 40% reduction in all-cause mortality were based on 4+ sessions per week. Bryan Johnson does daily sessions and saw continued improvements. Start with 3x/week and build up based on how your body responds."
    },
    {
      question: "What should I eat before/after sauna?",
      answer: "Wait at least 1-2 hours after a heavy meal before sauna. Blood flow diverts to the skin for cooling, which can interfere with digestion. After sauna, focus on rehydration with electrolytes before eating."
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Pre-Hydration",
      description: "Drink 16-20oz of water with electrolytes 30 minutes before your session.",
    },
    {
      number: 2,
      title: "Prepare Equipment",
      description: "Set up ice packs (testicular and scalp), towel, and mechanical timer. No electronics.",
    },
    {
      number: 3,
      title: "The Session",
      description: "Enter sauna at 200°F. Practice 4-second inhale, 6-second exhale breathing. Stay seated.",
    },
    {
      number: 4,
      title: "Cool Down",
      description: "Exit and air cool for 2-3 minutes. Take a lukewarm shower—don't shock your system.",
    },
    {
      number: 5,
      title: "Post-Hydration",
      description: "Immediately replenish with 20-24oz of water with electrolytes. Rest 10-15 minutes.",
    },
  ]

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  const structuredData = generateArticleSchema({
    title: "Bryan Johnson's 200°F Sauna Protocol",
    description: "The exact sauna protocol used by Bryan Johnson to improve blood pressure and increase HRV.",
    publishedAt: "2025-11-09T00:00:00.000Z",
    updatedAt: "2026-03-08T00:00:00.000Z",
    author: "SaunaProtocol Team",
    image: `${siteUrl}/images/og/bryan-johnson-protocol.jpg`,
    url: `${siteUrl}/protocols/bryan-johnson`,
  })

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "How to Follow Bryan Johnson's 200°F Sauna Protocol",
    description: "Step-by-step guide to implementing Bryan Johnson's advanced sauna protocol for cardiovascular health and longevity",
    totalTime: 'PT25M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
      position: index + 1
    }))
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={howToSchema} />
      
      <div className="bg-background-dark min-h-screen">
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16 xl:px-24">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 py-4 pt-24 items-center">
            <Link href="/" className="text-white/45 text-sm font-medium hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-white/45 text-xs">chevron_right</span>
            <Link href="/protocols" className="text-white/45 text-sm font-medium hover:text-white transition-colors">Protocols</Link>
            <span className="material-symbols-outlined text-white/45 text-xs">chevron_right</span>
            <span className="text-white text-sm font-medium">Bryan Johnson Protocol</span>
          </div>

          {/* Hero Section */}
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden mb-10 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmFG9ncb8hwES-ijAkxUHrwMdAmRTu8u4jQLT6TkxxasugWqG3SKVhR_XMoKyKRa-1YvIoHFMhV18XGOuCcXgs8Ep6EU0qE_G14LuLM7ZPEy2Uxx0rWTCmUuc0VrnoBgvar4dF-iQBJQgWsZ4xuT8mJmcbW8cN4slzNEV4CejxaV03OuQf1EsxK6yqD5khWablw0fcAKIOl2FLEjm01JPfEg69GhSRyOGPwIAdBvjKPNjre7OecuNtLlJje0Z8Aq3CaGADmz9kVmM')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent" />
              <div className="relative z-10 p-8 lg:p-16 flex flex-col justify-end min-h-[500px] max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Longevity</span>
                  <span className="text-white/60 text-xs uppercase tracking-widest">Updated Oct 2023</span>
                </div>
                <h1 className="text-white text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 font-display italic">
                  The Blueprint: <span className="text-primary">200°F</span> Sauna Protocol
                </h1>
                <p className="text-white/50 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-8">
                  A deep dive into the extreme heat regimen used by Bryan Johnson to reverse aging markers, increase HRV by <span className="font-mono text-[#F59E0B]">38%</span>, and achieve a <span className="font-mono text-[#F59E0B]">57%</span> reduction in all-cause mortality risk.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/45 text-sm border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-lg">person</span>
                    </div>
                    <span>By SaunaProtocol Team</span>
                  </div>
                  <span className="hidden sm:block">•</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span>15 Min Read</span>
                  </div>
                  <span className="hidden sm:block">•</span>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Evidence-Based</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 relative">
            {/* Main Content */}
            <main className="lg:col-span-8 flex flex-col gap-12">
              
              {/* Introduction */}
              <section className="scroll-mt-24" id="introduction">
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 font-light font-display italic">
                  "The single most powerful thing you can do for your cardiovascular health outside of exercise is heat therapy. The data is undeniable."
                </p>
                
                {/* Video Embed */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/10 border border-wood-light bg-card-dark mb-8">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/kiUM92VDI1Y"
                      title="Bryan Johnson Sauna Protocol"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-white/45 leading-loose space-y-4">
                  <p>
                    Bryan Johnson's "Blueprint" project isn't just about diet—it's about environmental stressors. The 200°F sauna protocol is designed to mimic the effects of moderate aerobic exercise, inducing heat shock proteins (HSPs) that repair damaged cells.
                  </p>
                  <p>
                    This complete guide breaks down Johnson's exact protocol, the measured outcomes, and how you can adapt it for your own longevity goals—whether you have access to a home sauna or just a gym membership.
                  </p>
                </div>

                {/* Internal Links to Reviews */}
                <div className="mt-8 bg-card-dark border border-wood-light rounded-xl p-6">
                  <p className="text-white font-semibold mb-3">Looking for the right sauna for this protocol?</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/reviews/best-infrared-saunas" className="text-primary hover:underline text-sm">
                      → Best Infrared Saunas (for home use)
                    </Link>
                    <Link href="/reviews/clearlight" className="text-primary hover:underline text-sm">
                      → Clearlight Review (premium option)
                    </Link>
                    <Link href="/reviews/sunlighten" className="text-primary hover:underline text-sm">
                      → Sunlighten Review (great value)
                    </Link>
                  </div>
                </div>
              </section>

              {/* Why Bryan Finally Tried Sauna */}
              <section className="scroll-mt-24" id="why-sauna">
                <h2 className="text-3xl font-bold text-white mb-6 font-display italic">Why Bryan Johnson Finally Tried Sauna</h2>
                
                <div className="bg-card-dark border border-wood-light rounded-xl p-6 mb-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Despite experimenting with cutting-edge longevity therapies for years, Johnson had avoided sauna. His reasoning was logical: most sauna research came from Finland, a country with a relatively small gene pool and a culture that combines sauna with cold plunging. Would the benefits translate to others? Would sauna add anything on top of his already intense daily workout routine?
                  </p>
                  
                  <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-4">
                    <p className="text-lg font-semibold text-white italic">
                      "Brian, get the sauna right now. The benefits are way too good to ignore."
                    </p>
                    <p className="text-sm text-white/45 mt-2">— Dr. Mike Malin, Lead Physician</p>
                  </div>
                  
                  <p className="text-white/45 leading-relaxed">
                    The data that convinced them? Multiple Finnish studies showing that <strong className="text-white/70 font-medium">four or more dry sauna sessions per week reduced all-cause mortality by <span className="text-[#F59E0B] font-mono">40%</span></strong>. To put that in perspective, that's a bigger reduction than what's typically seen with exercise or a Mediterranean diet. It's only matched by losing weight when obese or quitting smoking.
                  </p>
                </div>
              </section>

              {/* Protocol Specifications */}
              <section className="scroll-mt-24" id="protocol-specs">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-white mb-6 font-display italic">The Exact Protocol Specifications</h2>
                  <p className="text-white/45 mb-6">
                    Johnson didn't ease into sauna gradually. He went all-in from day one with a protocol designed to match the most effective research data.
                  </p>
                </FadeIn>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {protocolSpecs.map((spec) => (
                    <StaggerItem key={spec.label}>
                      <div className="bg-card-dark border border-wood-light rounded-xl p-5 h-full">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${spec.bgColor}`}>
                            <span className={`material-symbols-outlined text-2xl ${spec.color}`}>{spec.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-white/25 mb-1 font-mono uppercase tracking-wider">{spec.label}</div>
                            <div className={`text-xl font-extrabold mb-1 font-mono ${spec.color}`}>{spec.value}</div>
                            <div className="text-sm text-white/45">{spec.description}</div>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Ice Pack & Breathing Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                    <h3 className="flex items-center gap-2 text-white font-bold mb-3">
                      <span className="material-symbols-outlined text-blue-400">ac_unit</span>
                      The Ice Pack Strategy
                    </h3>
                    <p className="text-white/45 mb-3 text-sm">
                      From day one, Johnson wore what he calls an <a href="https://amzn.to/4qTfeY9" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 font-medium transition-colors">"ice diaper"</a> during every session. This wasn't for comfort—it was for <strong className="text-white">fertility protection</strong>.
                    </p>
                    <p className="text-sm text-white/45 leading-relaxed">
                      Human testes operate at 2-4°C cooler than core body temperature. Research shows that even a 2°C rise can derail spermatogenesis for 74 days.
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="flex items-center gap-2 text-white font-bold mb-3">
                      <span className="material-symbols-outlined text-purple-400">self_improvement</span>
                      Breathing & Comfort
                    </h3>
                    <ul className="space-y-2 text-white/45 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-purple-400 text-lg mt-0.5">check</span>
                        <span><strong className="text-white">Breathing:</strong> 4-second inhale, 6-second exhale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-purple-400 text-lg mt-0.5">check</span>
                        <span><strong className="text-white">Scalp:</strong> Ice pack with towel to prevent hair damage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-purple-400 text-lg mt-0.5">check</span>
                        <span><strong className="text-white">Clothing:</strong> Cotton only (no synthetics)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Week 1: The Crash */}
              <section className="scroll-mt-24" id="week-1">
                <h2 className="text-3xl font-bold text-white mb-6 font-display italic">Week 1: The Crash</h2>
                
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <p className="text-white mb-4 leading-relaxed">
                    The first week nearly derailed the entire experiment. Johnson experienced some of the worst nights of sleep in his entire Project Blueprint journey. He would wake up with <strong>"unbelievably terrifying cramps"</strong> hitting his hamstrings and calves so severely he'd jump out of bed trying to walk them off.
                  </p>
                  
                  <div className="bg-wood-medium rounded-lg p-6 mb-4">
                    <h3 className="font-bold text-lg mb-3 text-white">The Dehydration Discovery</h3>
                    <p className="text-white/45 mb-3">
                      Using a Gatorade sweat patch, they discovered Johnson was a "salty sweater." Each 20-minute session, he was losing:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-extrabold text-[#F59E0B] font-mono">18 oz</div>
                        <div className="text-xs text-white/25 font-mono uppercase tracking-wider">Sweat Loss</div>
                      </div>
                      <div className="bg-red-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-extrabold text-[#F59E0B] font-mono">600 mg</div>
                        <div className="text-xs text-white/25 font-mono uppercase tracking-wider">Sodium Loss</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-white font-semibold mb-2">The Solution:</p>
                    <p className="text-white/45">
                      Increase electrolyte intake by <strong className="text-white">50% before</strong> the sauna session and another <strong className="text-white">50% immediately after</strong>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Measured Results - Week 1 */}
              <section className="scroll-mt-24" id="results">
                <h2 className="text-3xl font-bold text-white mb-6 font-display italic">Week 1 Results: Cardiovascular Improvements Begin</h2>
                <p className="text-white/45 mb-6">
                  Despite the brutal first week, Johnson was eager to see if any positive changes were occurring. The results shocked even his medical team.
                </p>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {results.map((result) => (
                    <StaggerItem key={result.metric}>
                      <HoverCard>
                        <div className="bg-card-dark p-6 rounded-2xl border border-wood-light flex flex-col items-center text-center h-full">
                          <span className="text-white/25 text-xs uppercase tracking-wider mb-2 font-mono">{result.metric}</span>
                          <div className="text-4xl font-extrabold text-[#F59E0B] mb-1 font-mono">{result.after.split(' ')[0]}</div>
                          <div className="text-sm text-white/35 mb-2 font-mono">from {result.before}</div>
                          <div className="inline-flex items-center gap-1 text-green-400 text-sm font-bold bg-green-900/20 px-2 py-1 rounded font-mono">
                            <span className="material-symbols-outlined text-sm">trending_up</span> {result.improvement}
                          </div>
                        </div>
                      </HoverCard>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Blood Pressure Science */}
                <FadeIn>
                  <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-xl p-6">
                    <h3 className="flex items-center gap-2 text-white font-bold mb-4">
                      <span className="material-symbols-outlined text-blue-400 text-2xl">favorite</span>
                      The Science: Heat-Induced Vasodilation
                    </h3>
                    <p className="text-white/45 mb-4 leading-relaxed">
                      Why would sauna lower blood pressure so quickly? The mechanism is called <strong className="text-white/70 font-medium">heat-induced vasodilation</strong>.
                    </p>
                    <p className="text-white/45 mb-4 leading-relaxed">
                      As core body temperature rises, skin and peripheral blood vessels widen to release heat. This allows the same blood flow to pass through with less force, lowering pressure inside arteries. The vessels become more flexible and strain on the heart reduces.
                    </p>
                    <div className="bg-blue-500/10 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-white/50 font-medium">
                        The heart pumps blood up to <span className="text-[#F59E0B] font-mono font-bold">70% faster</span> during sauna to get sweat to the skin for cooling—creating cardiovascular effects similar to Zone 1 or Zone 2 cardio.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* 21-Session Toxin Results */}
              <section className="scroll-mt-24" id="toxin-results">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-white mb-6 font-display italic">21-Session Results: "The Best Toxins Result I'd Ever Received"</h2>
                  <p className="text-white/45 mb-6">
                    The detoxification results were, in Johnson's words, "beyond anything we'd expected."
                  </p>
                </FadeIn>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <StaggerItem>
                    <div className="bg-green-500/10 border-2 border-green-500/30 rounded-xl p-6 h-full">
                      <h3 className="text-green-400 font-bold mb-4">Toxins That Became UNDETECTABLE</h3>
                      <p className="text-sm text-white/35 mb-3">From abnormally high to completely gone:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0">1</div>
                        <div>
                          <div className="font-semibold text-white text-sm">Multiple Phthalates</div>
                          <div className="text-xs text-white/45">Plasticizers, endocrine disruptors</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0">2</div>
                        <div>
                          <div className="font-semibold text-white text-sm">Perchlorate</div>
                          <div className="text-xs text-white/45">Thyroid disruptor</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0">3</div>
                        <div>
                          <div className="font-semibold text-white text-sm">Specific VOCs</div>
                          <div className="text-xs text-white/45">From LA wildfire exposure</div>
                        </div>
                      </li>
                    </ul>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6 h-full">
                      <h3 className="text-blue-400 font-bold mb-4">Toxins That Dropped to Normal</h3>
                      <p className="text-sm text-white/35 mb-3">From moderate/high to normal ranges:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex-shrink-0">1</div>
                          <div>
                            <div className="font-semibold text-white text-sm">2,4-D Herbicide</div>
                            <div className="text-xs text-white/25">From produce exposure</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex-shrink-0">2</div>
                          <div>
                            <div className="font-semibold text-white text-sm">NAPR Metabolites</div>
                            <div className="text-xs text-white/25">Industrial pollutants</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex-shrink-0">3</div>
                          <div>
                            <div className="font-semibold text-white text-sm">HEMA</div>
                            <div className="text-xs text-white/25">Cancer-risk VOC</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                <div className="bg-gradient-to-r from-primary/10 to-amber-500/10 border-2 border-primary rounded-xl p-6">
                  <p className="text-lg text-white font-semibold italic text-center mb-4">
                    "This was the best toxins result I'd ever received. It seemed to suggest that <span className="text-primary">sauna is potentially one of the best things you can do to detox your body.</span>"
                  </p>
                  <p className="text-center text-white/45">— Bryan Johnson</p>
                </div>
              </section>

              {/* Timeline */}
              <section className="scroll-mt-24" id="timeline">
                <FadeIn>
                  <h3 className="text-3xl font-bold text-white mb-4 font-display italic flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">timeline</span>
                    Your 90-Day Implementation Timeline
                  </h3>
                  <p className="text-white/45 mb-8">
                    Bryan didn't start at 200°F. Here's the progressive approach he used to build up safely over 12 weeks:
                  </p>
                </FadeIn>
                
                <StaggerContainer className="flex flex-col gap-6 relative">
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-wood-light hidden sm:block" />
                  
                  {weeklyProgress.map((phase, index) => (
                    <StaggerItem key={phase.week}>
                      <div className="relative pl-0 sm:pl-16">
                        <div className={`absolute left-3 top-6 size-6 rounded-full border-4 border-background-dark hidden sm:block z-10 ${
                          phase.featured ? 'bg-white' : index === 0 ? 'bg-primary' : 'bg-card-dark border-primary'
                        }`} />
                        <div className={`p-6 rounded-xl border transition-colors ${
                          phase.featured 
                            ? 'bg-gradient-to-br from-primary/20 to-card-dark border-primary/40 shadow-lg shadow-orange-900/10' 
                            : 'bg-card-dark border-wood-light hover:border-primary/50'
                        }`}>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-white">{phase.week}: {phase.title}</h4>
                            <span className={`text-xs font-bold px-2 py-1 rounded uppercase font-mono ${
                              phase.featured ? 'bg-primary text-white' : 'bg-wood-light text-white/45'
                            }`}>{phase.difficulty}</span>
                          </div>
                          <p className="text-white/45 mb-4 text-sm">{phase.description}</p>
                          <div className={`flex flex-wrap gap-4 text-sm mb-4 font-mono ${phase.featured ? 'font-bold text-white' : 'text-white/70'}`}>
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-primary text-base">thermostat</span> {phase.temp}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-primary text-base">timer</span> {phase.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-primary text-base">repeat</span> {phase.frequency}
                            </div>
                          </div>
                          <p className="text-sm text-white/35 italic border-t border-wood-light pt-3">{phase.notes}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>

              {/* Fertility Experiment */}
              <section className="scroll-mt-24" id="fertility">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-white mb-6 font-display italic">The Fertility Experiment: Cooking the Boys for Science</h2>
                  <p className="text-white/45 mb-6">
                    At 21 sessions, Johnson decided to run a controlled experiment that would make most men cringe.
                  </p>
                </FadeIn>
                
                <div className="bg-wood-dark border border-wood-light rounded-2xl overflow-hidden mb-6">
                  <div className="p-6 border-b border-wood-light">
                    <div className="bg-blue-500/10 rounded-lg p-4 mb-4">
                      <h3 className="font-bold text-white mb-2">The Question:</h3>
                      <p className="text-white/45">
                        Did his improved fertility markers come from the combination of sauna heat improving blood flow PLUS the ice pack protection? Or was the ice pack doing all the work?
                      </p>
                    </div>
                    <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg p-4">
                      <h3 className="font-bold text-white mb-2">The Experiment:</h3>
                      <p className="text-white/45 font-semibold">
                        Stop using the ice pack for 2 weeks while continuing daily 200°F sauna sessions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-wood-light">
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500" /> Initial Results (With Ice)
                      </h4>
                      <ul className="space-y-2 text-white/45 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                          <span><strong className="text-[#F59E0B] font-mono font-bold">31% improvement</strong> in fertility markers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                          <span>Best sperm health numbers ever achieved</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                          <span>Six times above clinical threshold</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-red-500/10">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-red-500" /> The Disaster (Without Ice)
                      </h4>
                      <div className="text-center py-2">
                        <div className="text-4xl font-extrabold text-red-400 mb-1 font-mono">50%</div>
                        <div className="text-red-300/60 font-semibold text-sm">Reduction in fertility markers</div>
                      </div>
                      <p className="text-red-300/50 text-sm mt-3 italic">
                        "A cautionary tale for every sauna enthusiast that has testicles."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-green-400 text-3xl flex-shrink-0">check_circle</span>
                    <div>
                      <p className="font-bold text-lg text-white mb-2">The Verdict:</p>
                      <p className="text-white/45 leading-relaxed mb-3">
                        <strong className="text-white">Men must cool their testicles during high-heat sauna sessions.</strong> The good news? After restarting the <a href="https://amzn.to/4qTfeY9" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 font-medium transition-colors">ice pack protocol</a>, his fertility markers improved by 30% and he expected full recovery within weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 48-Session Final Results */}
              <section className="scroll-mt-24" id="final-results">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-white mb-6 font-display italic">48-Session Final Results: 10-Year Vascular De-Aging</h2>
                  <p className="text-white/45 mb-6">
                    By session 48, Johnson had completed his initial protocol goal. The final cardiovascular measurements revealed the most impressive changes yet.
                  </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <StaggerItem>
                    <HoverCard>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 h-full">
                        <h3 className="flex items-center gap-2 text-white font-bold mb-4">
                          <span className="material-symbols-outlined text-purple-400 text-2xl">favorite</span>
                          Arterial Flexibility
                        </h3>
                        <div className="text-center mb-4">
                          <div className="text-5xl font-extrabold text-purple-400 mb-2 font-mono">25-50%</div>
                          <div className="text-purple-300/60 font-semibold">More Flexible Arteries</div>
                        </div>
                        <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                          <div className="text-xs text-purple-300/60 mb-1 font-mono uppercase tracking-wider">Vascular Age:</div>
                          <div className="text-xl font-bold text-purple-400">Healthy 20-Year-Old</div>
                          <p className="text-xs text-purple-300/50 mt-2">
                            At 47, his blood vessels had "de-aged" by ~10 years
                          </p>
                        </div>
                      </div>
                    </HoverCard>
                  </StaggerItem>

                  <StaggerItem>
                    <HoverCard>
                      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 h-full">
                        <h3 className="flex items-center gap-2 text-white font-bold mb-4">
                          <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
                          VEGF Surge
                        </h3>
                        <p className="text-white/45 mb-4 text-sm leading-relaxed">
                          Massive surge in <strong className="text-white/70 font-medium">VEGF (Vascular Endothelial Growth Factor)</strong>—the signal for building new blood vessels.
                        </p>
                        <div className="bg-primary/20 rounded-lg p-4 text-center">
                          <div className="text-4xl font-bold text-primary mb-1 font-mono">5x</div>
                          <div className="text-white/50 font-semibold">Boost in VEGF</div>
                          <div className="text-xs text-white/30 mt-1">(After already tripling it through hyperbaric oxygen)</div>
                        </div>
                      </div>
                    </HoverCard>
                  </StaggerItem>
                </StaggerContainer>

                <div className="bg-gradient-to-r from-primary to-amber-500 text-white rounded-xl p-6">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-4xl mb-4 block">star</span>
                    <h3 className="text-2xl font-bold mb-3">Why These Results Matter</h3>
                    <p className="text-white/90 leading-relaxed mb-4">
                      The cardiovascular improvements Johnson measured—lower blood pressure, more flexible arteries, increased VEGF, lower resting heart rate—likely explain the <strong>40% reduction in all-cause mortality</strong> seen in Finnish studies for regular sauna users.
                    </p>
                    <p className="font-semibold">
                      That mortality benefit is enormous. People who did sauna 4+ times per week were 40% less likely to die from anything during the study period.
                    </p>
                  </div>
                </div>
              </section>

              {/* Safety Warning */}
              <section className="scroll-mt-24" id="safety">
                <FadeIn>
                  <div className="rounded-xl border-l-4 border-amber-500 bg-amber-900/10 p-6">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-amber-500 text-3xl flex-shrink-0">warning</span>
                      <div>
                        <h4 className="text-lg font-bold text-amber-500 mb-3">Important Safety Information</h4>
                        <ul className="space-y-2">
                          {safetyWarnings.map((warning, index) => (
                            <li key={index} className="flex items-start gap-2 text-amber-200/80 text-sm">
                              <span className="text-amber-500">•</span>
                              <span>{warning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* Step-by-Step Guide */}
              <section className="scroll-mt-24" id="guide">
                <FadeIn>
                  <h3 className="text-3xl font-bold text-white mb-6 font-display italic">How to Replicate This Protocol</h3>
                  <p className="text-white/45 mb-6">
                    Here's the step-by-step process to implement Bryan Johnson's sauna protocol yourself:
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  {steps.map((step) => (
                    <StaggerItem key={step.number}>
                      <HoverCard>
                        <div className="flex gap-4 p-4 bg-card-dark border border-wood-light rounded-xl hover:border-primary/50 transition-colors group">
                          <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold flex-shrink-0 font-mono">
                            {step.number}
                          </div>
                          <div>
                            <h5 className="text-white font-bold text-lg mb-1">{step.title}</h5>
                            <p className="text-white/45 text-sm">{step.description}</p>
                          </div>
                        </div>
                      </HoverCard>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>

              {/* Equipment */}
              <section className="scroll-mt-24" id="equipment">
                <FadeIn>
                  <h3 className="text-3xl font-bold text-white mb-6 font-display italic">Equipment Requirements</h3>
                </FadeIn>
                <StaggerContainer className="space-y-3">
                  {equipment.map((item) => (
                    <StaggerItem key={item.name}>
                      <HoverCard>
                        <div className={`flex items-start gap-4 p-4 rounded-xl border ${item.recommended ? 'bg-green-500/5 border-green-500/30' : 'bg-card-dark border-wood-light'}`}>
                          <span className={`material-symbols-outlined text-2xl flex-shrink-0 mt-0.5 ${item.recommended ? 'text-green-400' : 'text-gray-400'}`}>
                            {item.recommended ? 'check_circle' : 'cancel'}
                          </span>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              {item.link ? (
                                item.external ? (
                                  <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                                  >
                                    {item.name}
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                  </a>
                                ) : (
                                  <Link href={item.link} className="font-semibold text-primary hover:underline">
                                    {item.name} →
                                  </Link>
                                )
                              ) : (
                                <h4 className="font-semibold text-white">{item.name}</h4>
                              )}
                              {item.recommended && (
                                <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-mono">RECOMMENDED</span>
                              )}
                            </div>
                            <p className="text-white/45 text-sm">{item.reason}</p>
                          </div>
                        </div>
                      </HoverCard>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <FadeIn delay={0.3}>
                  <div className="mt-6">
                    <HoverCard>
                      <Link href="/equipment" className="inline-flex items-center justify-center gap-2 bg-wood-light text-white font-bold px-6 py-3 rounded-xl hover:bg-wood-medium transition-colors w-full">
                        Browse All Recommended Equipment
                        <span className="material-symbols-outlined text-xl">open_in_new</span>
                      </Link>
                    </HoverCard>
                  </div>
                </FadeIn>
              </section>

              {/* PDF Download CTA */}
              <section className="scroll-mt-24">
                <FadeIn>
                  <HoverCard>
                    <div className="bg-gradient-to-r from-primary to-amber-500 text-white rounded-xl p-8">
                      <div className="text-center">
                        <span className="material-symbols-outlined text-4xl mb-4 block">download</span>
                        <h3 className="text-2xl font-bold mb-2">Download the Complete Protocol PDF</h3>
                        <p className="mb-6 text-white/90">
                          Get a printer-friendly version with tracking sheets and weekly checklists
                        </p>
                        <button className="bg-white text-background-dark font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                          Download Free PDF
                        </button>
                      </div>
                    </div>
                  </HoverCard>
                </FadeIn>
              </section>

              {/* FAQ */}
              <section className="scroll-mt-24 mb-12" id="faq">
                <FadeIn>
                  <h3 className="text-3xl font-bold text-white mb-8 font-display italic">Frequently Asked Questions</h3>
                </FadeIn>
                <StaggerContainer className="space-y-2">
                  {faqs.map((faq, index) => (
                    <StaggerItem key={index}>
                      <details className="group bg-card-dark rounded-xl border border-wood-light open:border-primary/50 transition-colors">
                        <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-bold select-none">
                          <span>{faq.question}</span>
                          <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 text-white/45 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            </main>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-6">
                {/* TOC */}
                <div className="bg-card-dark border border-wood-light rounded-xl p-6">
                  <h4 className="text-white font-bold text-lg mb-4 border-b border-wood-light pb-2 font-display italic">Table of Contents</h4>
                  <nav className="flex flex-col gap-1 text-sm">
                    <Link href="#introduction" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Introduction</Link>
                    <Link href="#why-sauna" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Why Bryan Tried Sauna</Link>
                    <Link href="#protocol-specs" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Protocol Specifications</Link>
                    <Link href="#week-1" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Week 1: The Crash</Link>
                    <Link href="#results" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Week 1 Results</Link>
                    <Link href="#toxin-results" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">21-Day Detox Results</Link>
                    <Link href="#timeline" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">90-Day Timeline</Link>
                    <Link href="#fertility" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Fertility Experiment</Link>
                    <Link href="#final-results" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">48-Day Final Results</Link>
                    <Link href="#safety" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Safety Warnings</Link>
                    <Link href="#guide" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Implementation</Link>
                    <Link href="#equipment" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">Equipment</Link>
                    <Link href="#faq" className="text-white/45 hover:text-white hover:bg-background-dark px-3 py-2 rounded-lg transition-colors">FAQ</Link>
                  </nav>
                </div>

                {/* PDF Download */}
                <div className="bg-gradient-to-b from-card-dark to-background-dark border border-wood-light rounded-xl p-6 text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">picture_as_pdf</span>
                  <h4 className="text-white font-bold mb-2">Offline Guide</h4>
                  <p className="text-white/45 text-xs mb-4">Get the full printable checklist and tracking sheet.</p>
                  <button className="w-full bg-white text-black font-bold text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors">Download PDF</button>
                </div>

                {/* Sauna Reviews CTA */}
                <div className="bg-card-dark border border-wood-light rounded-xl p-6">
                  <h4 className="text-white font-bold mb-3">Need a Sauna?</h4>
                  <div className="space-y-2 text-sm">
                    <Link href="/reviews/best-infrared-saunas" className="text-primary hover:underline block">→ Best Infrared Saunas</Link>
                    <Link href="/reviews/clearlight" className="text-primary hover:underline block">→ Clearlight Review</Link>
                    <Link href="/reviews/sunlighten" className="text-primary hover:underline block">→ Sunlighten Review</Link>
                  </div>
                </div>

                {/* Related Protocols */}
                <div className="bg-card-dark border border-wood-light rounded-xl p-6">
                  <h4 className="text-white font-bold mb-3">Related Protocols</h4>
                  <div className="space-y-2 text-sm">
                    <Link href="/protocols/beginner" className="text-white/45 hover:text-primary block">Beginner Protocol (150-170°F)</Link>
                    <Link href="/protocols/intermediate" className="text-white/45 hover:text-primary block">Intermediate Protocol (170-190°F)</Link>
                    <Link href="/protocols" className="text-white/45 hover:text-primary block">View All Protocols</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 mb-20 relative rounded-3xl overflow-hidden text-center p-10 lg:p-20 border border-wood-light">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-black text-white font-display italic mb-6">Ready to start the protocol?</h2>
              <p className="text-lg text-white/50 mb-8">Join <span className="font-mono text-white/70">15,000+</span> others tracking their longevity metrics. Download the free starter pack.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 bg-primary text-white text-lg font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/40">
                  <span className="material-symbols-outlined">download</span>
                  Download PDF
                </button>
                <Link href="/protocols" className="flex items-center justify-center gap-2 bg-wood-light text-white text-lg font-bold px-8 py-3 rounded-xl hover:bg-wood-medium transition-colors">
                  View All Protocols
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
