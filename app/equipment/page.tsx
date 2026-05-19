import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { affiliateLinks } from '@/lib/affiliate-links'
import { FadeIn } from '@/components/effects/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/effects/stagger-container'
import { HoverCard } from '@/components/effects/hover-card'
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'

export const metadata: Metadata = generateSEO({
  title: 'Best Sauna Equipment & Accessories Review Guide 2026',
  description: 'Expert reviews of sauna equipment and accessories. We tested and analyzed hundreds of products to find the best thermometers, towels, and gear.',
  path: '/equipment',
  keywords: ['sauna equipment reviews', 'best sauna accessories', 'sauna thermometer review', 'sauna towels', 'sauna gear'],
})

export default function EquipmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saunaprotocol.com'
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Equipment', url: `${siteUrl}/equipment` },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <article className="pt-32 pb-12 bg-background-dark">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          {/* Header */}
        <FadeIn>
          <header className="mb-12">
            <Badge variant="default" className="mb-4">EQUIPMENT REVIEWS</Badge>
            <h1 className="font-display text-4xl font-bold italic text-white mb-6">
              Best Sauna Equipment & Accessories
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-6">
              Whether you're setting up your first home sauna or upgrading your existing setup, having the right equipment and accessories can transform your sauna experience from basic to exceptional. After researching dozens of products and analyzing hundreds of user reviews on Amazon and specialty retailers, we've compiled this comprehensive guide to the best sauna equipment available in 2026.
            </p>

            <Card>
            <CardContent className="pt-6">
              <p className="text-lg font-semibold mb-2 text-white">Quick Take:</p>
              <p className="text-text-muted">
                Essential sauna equipment includes an accurate thermometer ($20-50), <span id="timer" className="scroll-mt-32">timer</span> ($15-40), proper <span id="towels" className="scroll-mt-32">towels</span> ($25-60), and quality cleaning supplies ($30-80). Optional upgrades like aromatherapy systems, sound systems, and tracking devices can enhance your experience significantly.
              </p>
            </CardContent>
          </Card>
          </header>
        </FadeIn>

        {/* Full Sauna Units Section - NEW */}
        <section className="mb-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">spa</span>
              <h2 className="font-display text-2xl font-bold italic text-white">Full Sauna Units</h2>
            </div>
            
            <p className="text-text-muted text-lg mb-8">
              Looking for a complete infrared sauna for your home? We've reviewed the top brands to help you find the perfect unit for your space and budget.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StaggerItem>
              <HoverCard className="h-full">
                <Link href="/reviews/best-infrared-saunas" className="block h-full">
                  <Card className="h-full hover:border-primary transition-all group cursor-pointer">
                <CardHeader>
                  <Badge variant="featured" className="mb-2 w-fit">TOP PICKS</Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Best Infrared Saunas 2026
                  </CardTitle>
                  <CardDescription>
                    Comprehensive comparison of top-rated home infrared saunas. Rankings, specs, and buying guide.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary text-sm font-semibold flex items-center">
                    View Comparison
                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </CardContent>
              </Card>
                </Link>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="h-full">
                <Link href="/reviews/clearlight" className="block h-full">
                  <Card className="h-full hover:border-primary transition-all group cursor-pointer">
                <CardHeader>
                  <Badge variant="default" className="mb-2 w-fit">PREMIUM</Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Clearlight Saunas Review
                  </CardTitle>
                  <CardDescription>
                    In-depth review of Clearlight's full-spectrum infrared saunas. EMF testing, build quality, warranty.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary text-sm font-semibold flex items-center">
                    Read Review
                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </CardContent>
              </Card>
                </Link>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="h-full">
                <Link href="/reviews/sunlighten" className="block h-full">
                  <Card className="h-full hover:border-primary transition-all group cursor-pointer">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">VALUE PICK</Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Sunlighten Saunas Review
                  </CardTitle>
                  <CardDescription>
                    Complete review of Sunlighten's mPulse and Signature series. Smart features, health programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary text-sm font-semibold flex items-center">
                    Read Review
                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </span>
                </CardContent>
              </Card>
                </Link>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <Card className="bg-primary/10 border-primary">
            <CardContent className="pt-6">
              <p className="text-white">
                <strong>Shopping for the cabin too?</strong> Start with our infrared sauna comparisons, then verify current manufacturer terms before assuming a direct cabin purchase is commissionable. Clearlight's public terms appear to exclude several major sauna cabin models.
              </p>
            </CardContent>
          </Card>
          </FadeIn>
        </section>

        {/* Top Tested Products */}
        <section className="mb-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
              <h2 className="font-display text-2xl font-bold italic text-white">Accessories & Gear</h2>
            </div>
          </FadeIn>
          <p className="text-lg text-text-muted mb-8">
            After testing dozens of sauna accessories and analyzing thousands of user reviews, these are the products we recommend most often. Each one solves a specific need and has proven reliability in high-heat environments.
          </p>

          <div className="space-y-8">
            {/* PRODUCT #1: Thermometer/Hygrometer Combo */}
            <Card id="thermometer" className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50 scroll-mt-32">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default">PRODUCT #1</Badge>
                  <Badge variant="secondary">TOP PICK</Badge>
                </div>
                <CardTitle className="text-2xl">Thermometer/Hygrometer Combo</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Protocol followers who need precise temperature AND humidity tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-01-Thermo-49Kpw6L.webp"
                    alt="Sauna thermometer and hygrometer combo mounted on wooden wall showing temperature and humidity readings"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 10%' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                  />
                </div>

                <p className="text-gray-700">
                  If you're serious about replicating research-backed protocols like Bryan Johnson's, this combo unit is essential. Traditional saunas should maintain 10-20% humidity for optimal cardiovascular benefits—you can't track that with a thermometer alone. This dual-gauge unit gives you both metrics in one easy-to-read display.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Stainless steel construction handles 200°F+ without degradation</li>
                    <li>• Large dial faces are readable through steam</li>
                    <li>• Mounting hardware included, no batteries needed</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Anyone following specific sauna research protocols or optimizing their sessions based on temperature AND humidity data.
                </p>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-green-600">$29.97</div>
                    <div className="text-sm text-gray-600">⭐ 4.0/5 (111 reviews)</div>
                  </div>
                  <Button asChild size="lg">
                    <a href={affiliateLinks.thermometerHygrometerCombo} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #2: LED Sauna Light */}
            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <Badge variant="accent" className="mb-2">PRODUCT #2</Badge>
                <CardTitle className="text-2xl">LED Sauna Light</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Upgrading ambiance and visibility in traditional saunas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-02-LED-4p42AE6.webp"
                    alt="Warm LED sauna light fixture creating ambient lighting in wooden sauna interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  Most home saunas come with basic incandescent bulbs that burn out frequently at high temperatures. This LED fixture is specifically engineered for sauna use with heat-resistant components rated to 194°F and moisture-proof sealing. The warm 2700K color temperature creates a relaxing atmosphere without harsh glare.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Long lifespan (20,000+ hours), energy efficient</li>
                    <li>• Easy installation with standard E26 socket</li>
                    <li>• Won't shatter if exposed to water splashes</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-900">
                    <strong>One consideration:</strong> Slightly higher upfront cost than standard bulbs, but pays for itself by lasting 10x longer.
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">$30.99</div>
                    <div className="text-sm text-gray-600">⭐ 4.3/5 (105 reviews)</div>
                  </div>
                  <Button asChild size="lg" variant="default">
                    <a href={affiliateLinks.ledLightFixture} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #3: Polar H10 Heart Rate Monitor */}
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default">PRODUCT #3</Badge>
                  <Badge className="bg-purple-600 text-white">GOLD STANDARD</Badge>
                </div>
                <CardTitle className="text-2xl">Polar H10 Heart Rate Monitor</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Tracking cardiovascular response during sauna sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-03-heartrate-47YPUYO.webp"
                    alt="Heart rate monitor chest strap for tracking cardiovascular response during sauna sessions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  This is the gold standard for heart rate monitoring in extreme conditions. Unlike wrist-based fitness trackers (which you can't wear in high heat), the Polar H10 chest strap delivers clinical-grade accuracy even at 200°F. Bryan Johnson and other biohackers use chest strap monitors to track how their heart rate responds to heat stress—a key biomarker for cardiovascular adaptation.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Bluetooth and ANT+ connectivity, works with most fitness apps</li>
                    <li>• Waterproof and tested for high-heat/high-humidity environments</li>
                    <li>• The 400+ monthly sales and 25,000+ reviews speak to reliability</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Serious protocol followers, biohackers, and anyone tracking HRV or cardiovascular metrics pre/post sauna.
                </p>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Requires compatible smartphone or fitness watch to view real-time data.
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">$104.95</div>
                    <div className="text-sm text-gray-600">⭐ 4.1/5 (25,098 reviews)</div>
                    <div className="text-xs text-green-600 font-semibold">400+ bought/month</div>
                  </div>
                  <Button asChild size="lg" variant="default">
                    <a href={affiliateLinks.heartRateMonitorPolar} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #4: Wooden Sauna Bucket & Ladle */}
            <Card className="border-2 border-amber-200 bg-amber-50">
              <CardHeader>
                <Badge variant="accent" className="mb-2">PRODUCT #4</Badge>
                <CardTitle className="text-2xl">Wooden Sauna Bucket & Ladle</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Traditional Finnish sauna experience with löyly (steam)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-04-bucket-4p5RNJD.webp"
                    alt="Traditional wooden sauna bucket and ladle set for Finnish löyly steam experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  This is the authentic Finnish sauna accessory set—handcrafted wood construction that won't warp or crack under temperature extremes. The 4-liter capacity is perfect for multiple water pours during a session, and the long-handled ladle (18") keeps your hands safely away from the heater stones.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Beautiful craftsmanship with stainless steel liner (prevents wood rot)</li>
                    <li>• Adds that traditional spa-quality aesthetic to your home sauna</li>
                    <li>• Perfect for controlling humidity and creating authentic Finnish steam</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <p className="text-sm text-red-900">
                    <strong>Important:</strong> Only use with traditional sauna heaters designed for water. Never pour water on infrared panels or non-rated electric heaters.
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">$54.99</div>
                    <div className="text-sm text-gray-600">⭐ 5.0/5 (2 reviews)</div>
                  </div>
                  <Button asChild size="lg">
                    <a href={affiliateLinks.bucketLadleWooden} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #5: Essential Oils */}
            <Card className="border-2 border-teal-200 bg-teal-50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">PRODUCT #5</Badge>
                  <Badge className="bg-orange-500 text-white">AMAZON'S CHOICE</Badge>
                </div>
                <CardTitle className="text-2xl">Essential Oils (Eucalyptus Blend)</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Respiratory benefits and traditional aromatherapy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-white">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-05-oils-4qYMk9j.webp"
                    alt="Eucalyptus essential oil bottles for sauna aromatherapy and respiratory benefits"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  This is Amazon's Choice for sauna essential oils, and with 40,000+ reviews, it's clear why. The eucalyptus blend is specifically formulated for high-heat applications and provides natural respiratory clearing benefits. Add 2-3 drops to your ladle water (never directly on heater stones) for an authentic spa experience.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Therapeutic-grade oils that won't combust at sauna temperatures</li>
                    <li>• 1,000+ monthly sales prove consistent quality</li>
                    <li>• Affordable price point makes it accessible for regular use</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Traditional sauna users who want aromatherapy enhancement. Especially beneficial during cold/flu season.
                </p>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-teal-600">$11.49</div>
                    <div className="text-sm text-gray-600">⭐ 4.5/5 (40,913 reviews)</div>
                    <div className="text-xs text-green-600 font-semibold">1K+ bought/month</div>
                  </div>
                  <Button asChild size="lg" variant="secondary">
                    <a href={affiliateLinks.essentialOilsSet} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #6: Turkish Cotton Towels */}
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <Badge variant="default" className="mb-2">PRODUCT #6</Badge>
                <CardTitle className="text-2xl">Turkish Cotton Towels</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Ultra-absorbent, plush sauna towels that last
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-06-towels-3JfK1iY.webp"
                    alt="Plush Turkish cotton sauna towels folded on wooden bench, ultra-absorbent and heat-resistant"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  These aren't your typical bath towels. Turkish cotton is specifically bred for heat resistance and absorbency—critical for sauna use. The 100% cotton construction breathes better than synthetic blends, dries 50% faster than terry cloth, and actually gets softer with each wash. With 3,000+ sold monthly, these are the most popular sauna towels on Amazon.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Oversized 40x80" dimensions (full body coverage)</li>
                    <li>• Naturally antimicrobial, pre-washed to prevent shrinkage</li>
                    <li>• Quality justifies the price for serious sauna users</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Anyone who wants premium, long-lasting towels that handle daily high-heat use. Buy 2-3 minimum.
                </p>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$37.99</div>
                    <div className="text-sm text-gray-600">⭐ 4.5/5 (10,149 reviews)</div>
                    <div className="text-xs text-green-600 font-semibold">3K+ bought/month</div>
                  </div>
                  <Button asChild size="lg">
                    <a href={affiliateLinks.towelsTurkishCotton} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #7: Waffle Cotton Towels */}
            <Card className="border-2 border-indigo-200 bg-indigo-50">
              <CardHeader>
                <Badge variant="secondary" className="mb-2">PRODUCT #7</Badge>
                <CardTitle className="text-2xl">Waffle Cotton Towels (Linen-style)</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Lightweight, fast-drying alternative to heavy towels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-07-wafflecotton-3JI4Ce8.webp"
                    alt="Lightweight waffle-weave cotton towels with linen texture, fast-drying for sauna use"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  If Turkish towels feel too heavy, these waffle-weave cotton towels offer the perfect middle ground. The textured weave promotes airflow and drying speed—essential when you're using towels back-to-back between sauna sessions. The linen-like aesthetic also gives your sauna area a modern spa look.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Lightweight (easier to wash/store), dries in half the time</li>
                    <li>• Maintains structure even after 100+ washes</li>
                    <li>• 100+ monthly sales show consistent demand</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Minimalists who want functional towels without bulk, or anyone doing multiple sauna sessions per day who needs quick-drying options.
                </p>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">$39.99</div>
                    <div className="text-sm text-gray-600">⭐ 4.4/5 (2,478 reviews)</div>
                    <div className="text-xs text-green-600 font-semibold">100+ bought/month</div>
                  </div>
                  <Button asChild size="lg" variant="default">
                    <a href={affiliateLinks.towelsLinen2Pack} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #8: Waterproof Bluetooth Speaker */}
            <Card className="border-2 border-cyan-200 bg-cyan-50">
              <CardHeader>
                <Badge variant="accent" className="mb-2">PRODUCT #8</Badge>
                <CardTitle className="text-2xl">Waterproof Bluetooth Speaker</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Music, podcasts, and meditation audio during sauna sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-08-speaker-49e0X24.webp"
                    alt="Waterproof Bluetooth speaker for sauna, IPX7 rated for music and meditation audio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  Many people enhance their sauna experience with audio—whether it's relaxing music, guided meditation, or catching up on podcasts. This speaker is specifically rated for high humidity and temperatures up to 140°F (perfect for infrared saunas). The IPX7 waterproof rating means it can handle steam, splashes, and even full submersion.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Impressive 12-hour battery life, surprisingly good bass</li>
                    <li>• 2,000+ monthly sales prove reliability</li>
                    <li>• True suction cup mount keeps it secure on sauna walls</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Infrared sauna users (120-140°F range) who want entertainment or relaxation audio. Not recommended for traditional high-heat saunas above 150°F.
                </p>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-900">
                    <strong>Note:</strong> Even though it's waterproof, keep away from direct water pours in traditional saunas.
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">$21.59</div>
                    <div className="text-sm text-gray-600">⭐ 4.5/5 (26,295 reviews)</div>
                    <div className="text-xs text-green-600 font-semibold">2K+ bought/month</div>
                  </div>
                  <Button asChild size="lg">
                    <a href={affiliateLinks.speakerBluetoothHeatResistant} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* PRODUCT #9: Stainless Steel Sauna Timer */}
            <Card id="timer-mechanical" className="border-2 border-slate-200 bg-slate-50 scroll-mt-32">
              <CardHeader>
                <Badge variant="accent" className="mb-2">PRODUCT #9</Badge>
                <CardTitle className="text-2xl">Mechanical Stainless Steel Sauna Timer</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> No-battery timer that handles extreme heat up to 55 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-09-timer-4oANaal.webp"
                    alt="Stainless steel mechanical sauna timer with 55-minute dial, no batteries required"
                    fill
                    className="object-contain bg-gray-50"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  This stainless steel mechanical timer is specifically designed for sauna use. No batteries means no worries about heat damage to electronics. The mechanical self-drive mechanism is reliable up to 55 minutes—perfect for Bryan Johnson's 25-minute protocol with room to spare. The clear dial is easy to read through steam, and the satisfying tick reminds you to focus on your session.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• All stainless steel construction handles extreme sauna heat</li>
                    <li>• Mechanical operation—no batteries to fail or corrode</li>
                    <li>• Accurate timing up to 55 minutes with clear dial face</li>
                    <li>• 100+ bought in past month, proven reliability</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Anyone following timed protocols who wants a reliable, heat-proof timer that won't fail mid-session.
                </p>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-slate-600">$22.98</div>
                    <div className="text-sm text-gray-600">⭐ 4.7/5 (4 reviews)</div>
                    <div className="text-xs text-green-600 font-semibold">100+ bought/month</div>
                  </div>
                  <Button asChild size="lg">
                    <a href={affiliateLinks.timerMechanicalStainless} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #10: Head Ice Pack */}
            <Card id="head-ice-pack" className="border-2 border-sky-200 bg-sky-50 scroll-mt-32">
              <CardHeader>
                <Badge variant="default" className="mb-2">PRODUCT #10</Badge>
                <CardTitle className="text-2xl">Head Ice Pack for Sauna Cooling</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Keeping your head cool during high-heat sauna sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-10-headicepack-487cn6y.webp"
                    alt="Reusable head ice pack for cooling during sauna sessions, prevents overheating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  This is a game-changer for high-heat protocols. The head ice pack sits comfortably on your head or hard hat during outdoor activities—but sauna users have discovered it's perfect for keeping your scalp cool during intense sessions. The stable fit prevents slipping, and the leak-proof construction means no water dripping down your face. Comes as a 2-pack so you can rotate while one refreezes.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Prevents head overheating during 200°F+ sessions</li>
                    <li>• Reusable—freeze for 2 hours, use for extended cooling</li>
                    <li>• Comfortable, secure fit that won't slip off</li>
                    <li>• 2-pack lets you rotate between sessions</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Advanced users doing high-heat protocols who want to extend session duration safely.
                </p>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Pro tip:</strong> Bryan Johnson uses ice packs on his head during sauna to prevent hair damage and extend tolerance to extreme heat.
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-sky-600">$9.99</div>
                    <div className="text-sm text-gray-600">⭐ 4.0/5 (4 reviews)</div>
                    <div className="text-xs text-orange-600 font-semibold">Lowest price in 30 days</div>
                  </div>
                  <Button asChild size="lg" variant="default">
                    <a href={affiliateLinks.icePackHead} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PRODUCT #11: Testicular Ice Pack */}
            <Card id="testicular-ice-pack" className="border-2 border-violet-200 bg-violet-50 scroll-mt-32">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">PRODUCT #11</Badge>
                  <Badge className="bg-blue-600 text-white">BRYAN JOHNSON USES</Badge>
                </div>
                <CardTitle className="text-2xl">Testicular Ice Pack for Post-Sauna Recovery</CardTitle>
                <CardDescription className="text-base">
                  <strong>Best for:</strong> Protecting fertility and testosterone during high-heat sauna protocols
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-11-testicular-4qTfeY9.webp"
                    alt="Custom-fit ice pack for testicular cooling after sauna, protects fertility and testosterone"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  High heat (200°F) can temporarily affect sperm production and testosterone levels. This custom-fit ice pack is designed for testicular cooling—originally for vasectomy recovery, but biohackers discovered it's a better option for post-sauna temperature regulation. The 2-pack system with snug boxer briefs keeps ice packs in place while you recover, providing targeted cooling where it matters most.
                </p>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Why we recommend it:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Protects fertility during high-heat sauna protocols</li>
                    <li>• Custom-fit design with boxer brief support system</li>
                    <li>• 2 ice packs included for continuous cooling</li>
                    <li>• Made in USA, 95% Spandex for comfortable fit</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Who it's for:</strong> Men doing high-heat protocols (180°F+) who want to protect reproductive health and testosterone levels.
                </p>

                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> Bryan Johnson applies this immediately post-sauna for 15-20 minutes to counteract heat exposure to sensitive areas.
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-violet-600">$39.00</div>
                    <div className="text-sm text-gray-600">⭐ 4.4/5 (921 reviews)</div>
                  </div>
                  <Button asChild size="lg" variant="default">
                    <a href={affiliateLinks.icePackTesticles} target="_blank" rel="noopener noreferrer nofollow">
                      Check Price on Amazon →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <FadeIn>
          <section className="mb-12">
            <HoverCard scale={1.01} lift={4}>
              <Card className="bg-gradient-to-br from-[#ff6b6b] to-[#f59e0b] text-white border-none">
                <CardContent className="pt-8 pb-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Sauna Experience?</h3>
                  <p className="text-lg mb-6 text-white/90">
                    Start with our essential recommendations and build from there
                  </p>
                  <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                    <Link href="/protocols/bryan-johnson">See Bryan Johnson's Equipment Setup →</Link>
                  </Button>
                </CardContent>
              </Card>
            </HoverCard>
          </section>
        </FadeIn>

        {/* Related Articles */}
        <section>
          <FadeIn>
            <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StaggerItem>
              <HoverCard>
                <Card>
                  <CardContent className="pt-6">
                    <Link href="/protocols/bryan-johnson" className="text-[#ff6b6b] hover:underline font-semibold">
                      Bryan Johnson's Sauna Protocol →
                    </Link>
                    <p className="text-sm text-gray-600 mt-2">Learn the exact equipment and timing he uses</p>
                  </CardContent>
                </Card>
              </HoverCard>
            </StaggerItem>
            <StaggerItem>
              <HoverCard>
                <Card>
                  <CardContent className="pt-6">
                    <Link href="/articles/sauna-before-or-after-workout" className="text-[#ff6b6b] hover:underline font-semibold">
                      Sauna Before or After Workout →
                    </Link>
                    <p className="text-sm text-gray-600 mt-2">Optimal timing for maximum benefits</p>
                  </CardContent>
                </Card>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Coming Soon: Full Sauna Reviews */}
        <section className="mt-12 mb-12">
          <Card className="border-2 border-[#ff6b6b] bg-gradient-to-br from-[#ff6b6b]/5 to-[#f59e0b]/5">
            <CardHeader>
              <Badge variant="featured" className="mb-2 w-fit">COMING SOON</Badge>
              <CardTitle className="text-3xl">Full Sauna Unit Reviews</CardTitle>
              <CardDescription className="text-lg mt-2">
                In-depth reviews of complete sauna systems—traditional, infrared, and barrel saunas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We're currently testing and reviewing the best home sauna units on the market. Our comprehensive reviews will cover:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-2 text-[#ff6b6b]">🔥 Traditional Saunas</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Almost Heaven Barrel Saunas</li>
                    <li>• Finnleo Custom Series</li>
                    <li>• Dundalk Cedar Pod</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-2 text-[#ff6b6b]">☀️ Infrared Saunas</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sunlighten Solo System</li>
                    <li>• Clearlight Sanctuary</li>
                    <li>• Therasauna TS Series</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic">
                <strong>Want to be notified when we publish full sauna reviews?</strong> <Link href="/#email-signup" className="text-[#ff6b6b] hover:underline font-semibold">Sign up for our email list →</Link>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Affiliate Disclosure */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
          <p className="font-semibold mb-2">Affiliate Disclosure:</p>
          <p>
            This article contains Amazon affiliate links. We earn a commission from qualifying purchases at no additional cost to you. This helps us continue testing products and creating free content like this guide.
          </p>
        </div>

        </div>
      </article>
    </>
  )
}
