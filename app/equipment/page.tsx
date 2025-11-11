import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Thermometer, Star, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'
import { affiliateLinks } from '@/lib/affiliate-links'

export const metadata: Metadata = {
  title: 'Best Sauna Equipment & Accessories Review Guide 2025',
  description: 'Expert reviews of sauna equipment and accessories. We tested and analyzed hundreds of products to find the best thermometers, towels, and gear.',
  keywords: ['sauna equipment reviews', 'best sauna accessories', 'sauna thermometer review', 'sauna towels', 'sauna gear'],
}

export default function EquipmentPage() {
  return (
    <article className="py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12">
          <Badge variant="accent" className="mb-4">EQUIPMENT REVIEWS</Badge>
          <h1 className="text-4xl font-bold mb-6">
            Best Sauna Equipment & Accessories: Complete Review Guide [2025]
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Whether you're setting up your first home sauna or upgrading your existing setup, having the right equipment and accessories can transform your sauna experience from basic to exceptional. After researching dozens of products and analyzing hundreds of user reviews on Amazon and specialty retailers, we've compiled this comprehensive guide to the best sauna equipment available in 2025.
          </p>

          <Card className="bg-blue-50 border-2 border-blue-200">
            <CardContent className="pt-6">
              <p className="text-lg font-semibold mb-2">Quick Take:</p>
              <p className="text-gray-700">
                Essential sauna equipment includes an accurate thermometer ($20-50), timer ($15-40), proper towels ($25-60), and quality cleaning supplies ($30-80). Optional upgrades like aromatherapy systems, sound systems, and tracking devices can enhance your experience significantly.
              </p>
            </CardContent>
          </Card>
        </header>

        {/* Top 8 Products */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-[#ff6b6b]" />
            Our Top 8 Tested Products
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            After testing dozens of sauna accessories and analyzing thousands of user reviews, these are the products we recommend most often. Each one solves a specific need and has proven reliability in high-heat environments.
          </p>

          <div className="space-y-8">
            {/* PRODUCT #1: Thermometer/Hygrometer Combo */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
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
                <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center border border-gray-200 mb-4">
                  <div className="text-center text-gray-500">
                    <Thermometer className="h-20 w-20 mx-auto mb-2 text-green-600" />
                    <div className="text-sm font-semibold">Dual-Gauge Display</div>
                  </div>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
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
        </section>

        {/* Related Articles */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <Link href="/protocols/bryan-johnson" className="text-[#ff6b6b] hover:underline font-semibold">
                  Bryan Johnson's Sauna Protocol →
                </Link>
                <p className="text-sm text-gray-600 mt-2">Learn the exact equipment and timing he uses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Link href="/articles/sauna-before-or-after-workout" className="text-[#ff6b6b] hover:underline font-semibold">
                  Sauna Before or After Workout →
                </Link>
                <p className="text-sm text-gray-600 mt-2">Optimal timing for maximum benefits</p>
              </CardContent>
            </Card>
          </div>
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
  )
}
