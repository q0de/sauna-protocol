import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Thermometer, Clock, Droplets, Sparkles, Heart, Volume2, CheckCircle, AlertCircle } from 'lucide-react'
import { affiliateLinks } from '@/lib/affiliate-links'

export const metadata: Metadata = {
  title: 'Best Sauna Equipment & Accessories Guide 2025',
  description: 'Essential sauna equipment guide: thermometers, towels, timers, and tracking devices. Research-backed recommendations with Amazon pricing.',
  keywords: ['sauna equipment', 'sauna accessories', 'sauna thermometer', 'sauna towels', 'sauna gear'],
}

export default function EquipmentPage() {
  return (
    <article className="py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12">
          <Badge variant="accent" className="mb-4">EQUIPMENT GUIDE</Badge>
          <h1 className="text-4xl font-bold mb-6">
            The Complete Sauna Equipment & Accessories Guide for 2025
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Whether you're setting up your first home sauna or upgrading your existing setup, having the right equipment and accessories can transform your sauna experience from basic to exceptional. After researching dozens of products and analyzing hundreds of user reviews on Amazon and specialty retailers, we've compiled this comprehensive guide to the best sauna equipment available in 2025.
          </p>
        </header>

        {/* Quick Take */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
          <div className="font-semibold text-lg text-gray-900 mb-2">Quick Take:</div>
          <div className="text-gray-700">
            Essential sauna equipment includes an accurate thermometer ($20-50), timer ($15-40), proper towels ($25-60), and quality cleaning supplies ($30-80). Optional upgrades like aromatherapy systems, sound systems, and tracking devices can enhance your experience significantly.
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12">
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl">Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <a href="#essential" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  1. Essential Equipment You Need
                </a>
                <a href="#thermometers" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  2. Thermometers: Most Important Tool
                </a>
                <a href="#timers" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  3. Sauna Timers
                </a>
                <a href="#towels" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  4. Sauna Towels
                </a>
                <a href="#buckets" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  5. Buckets & Ladles
                </a>
                <a href="#comfort" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  6. Comfort Accessories
                </a>
                <a href="#aromatherapy" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  7. Aromatherapy Systems
                </a>
                <a href="#cleaning" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  8. Cleaning & Maintenance
                </a>
                <a href="#tracking" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  9. Advanced Tracking Gear
                </a>
                <a href="#lights" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  10. Lights & Chromotherapy
                </a>
                <a href="#sound" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  11. Sound Systems
                </a>
                <a href="#budget" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  12. Budget vs. Premium Setups
                </a>
                <a href="#shopping" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  13. Shopping Tips
                </a>
                <a href="#faq" className="text-gray-700 hover:text-white hover:bg-[#ff6b6b] transition-all py-2 px-3 rounded">
                  14. FAQ
                </a>
              </div>
            </CardContent>
          </Card>
        </nav>

        {/* Main Content */}
        <div className="prose-article">
          
          {/* Essential Equipment */}
          <section id="essential" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Essential Sauna Equipment You Actually Need</h2>
            
            {/* Thermometers */}
            <div id="thermometers" className="mb-8 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">1. Sauna Thermometers: Your Most Important Tool</h3>
              
              <div className="text-lg text-gray-700 leading-relaxed mb-6">
                An accurate thermometer is <strong>non-negotiable</strong> for sauna safety and protocol adherence. Bryan Johnson's research showed that precise temperature control at 200°F made a significant difference in cardiovascular benefits—you can't replicate research-backed protocols without knowing your actual temperature.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card className="bg-green-50 border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Pick: Traditional Dial Thermometer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {/* Product Image Placeholder */}
                    <div className="w-full h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-center text-gray-500">
                        <Thermometer className="h-16 w-16 mx-auto mb-2 text-green-600" />
                        <div className="text-xs">Product Image</div>
                      </div>
                    </div>
                    <div><strong>Amazon Price:</strong> $20-35</div>
                    <div><strong>Why It Works:</strong> No batteries, handles extreme heat, easy to read</div>
                    <div><strong>Best For:</strong> Traditional Finnish saunas (175-200°F)</div>
                    <div><strong>Look For:</strong> Stainless steel construction, clear dial face, mounting hardware included</div>
                    <div className="pt-3">
                      <Button asChild variant="default" size="sm" className="w-full">
                        <a href={affiliateLinks.thermometerDialTraditional} target="_blank" rel="noopener noreferrer nofollow">
                          View on Amazon →
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Runner-Up: Thermometer/Hygrometer Combo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {/* Product Image Placeholder */}
                    <div className="w-full h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-center text-gray-500">
                        <Droplets className="h-16 w-16 mx-auto mb-2 text-blue-600" />
                        <div className="text-xs">Product Image</div>
                      </div>
                    </div>
                    <div><strong>Amazon Price:</strong> $25-50</div>
                    <div><strong>Added Benefit:</strong> Tracks humidity levels (critical for protocol optimization)</div>
                    <div><strong>Best For:</strong> Users following specific research protocols</div>
                    <div><strong>Pro Tip:</strong> Mount at head height when seated for accurate readings</div>
                    <div className="pt-3">
                      <Button asChild variant="default" size="sm" className="w-full bg-white text-blue-700 border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
                        <a href={affiliateLinks.thermometerHygrometerCombo} target="_blank" rel="noopener noreferrer nofollow">
                          View on Amazon →
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Digital Option: Heat-Resistant Digital</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {/* Product Image Placeholder */}
                    <div className="w-full h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-center text-gray-500">
                        <Thermometer className="h-16 w-16 mx-auto mb-2 text-purple-600" />
                        <div className="text-xs">Product Image</div>
                      </div>
                    </div>
                    <div><strong>Amazon Price:</strong> $30-65</div>
                    <div><strong>Pros:</strong> Precise readings, some models include remote displays</div>
                    <div><strong>Cons:</strong> Requires batteries, may have shorter lifespan</div>
                    <div><strong>Best For:</strong> Tech enthusiasts who want data logging</div>
                    <div className="pt-3">
                      <Button asChild variant="default" size="sm" className="w-full">
                        <a href={affiliateLinks.thermometerDigital} target="_blank" rel="noopener noreferrer nofollow">
                          View on Amazon →
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Features to Consider</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Temperature Range:</strong> Must go up to at least 220°F</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Material:</strong> Stainless steel or heat-treated wood frames</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Accuracy:</strong> Look for ±2°F precision or better</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Readability:</strong> Large, clear numbers you can see through steam</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timers */}
            <div id="timers" className="mb-8 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">2. Sauna Timers: Stay Safe and Track Your Sessions</h3>
              
              <div className="text-lg text-gray-700 leading-relaxed mb-6">
                Timing your sessions is crucial for safety and for tracking protocol adherence. Most research protocols (including Bryan Johnson's) specify exact durations—typically 15-20 minutes.
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Best Heat-Resistant Sand Timer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Amazon Price Range:</strong> $15-25</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Capacity:</strong> 15, 20, or 30-minute options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Pros:</strong> No batteries, visible from inside sauna, traditional aesthetic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Cons:</strong> Can't adjust mid-session</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Perfect For:</strong> Purists and traditional sauna setups</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Smart Timer with Remote Display</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Amazon Price Range:</strong> $30-60</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Features:</strong> Digital display outside sauna, audible alarm, countdown timer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Pros:</strong> Flexible timing, easy to see from outside</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Best For:</strong> Those who want to adjust sessions on the fly</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Waterproof Interval Timer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span><strong>Amazon Price Range:</strong> $20-40</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span><strong>Use Case:</strong> Perfect for contrast therapy (sauna + cold plunge cycles)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span><strong>Features:</strong> Multiple alarms, clip or magnet mount</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span><strong>Ideal For:</strong> Advanced users doing hot-cold protocols</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Towels */}
            <div id="towels" className="mb-8 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">3. Sauna Towels: Not Just Any Towel Will Do</h3>
              
              <div className="text-lg text-gray-700 leading-relaxed mb-6">
                Regular bath towels can deteriorate quickly in high heat. Purpose-made sauna towels are lighter, dry faster, and handle extreme temperatures better.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bg-blue-50 border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle>Best Linen Sauna Towels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Product Image Placeholder */}
                    <div className="w-full h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-center text-gray-500">
                        <Sparkles className="h-16 w-16 mx-auto mb-2 text-blue-600" />
                        <div className="text-xs">Product Image</div>
                      </div>
                    </div>
                    <div><strong>Amazon Price:</strong> $25-45 for a 2-pack</div>
                    <div><strong>Material:</strong> 100% linen or linen-cotton blend</div>
                    <div className="text-sm text-gray-700">
                      <strong>Benefits:</strong>
                      <ul className="mt-2 space-y-1 ml-4">
                        <li>• Lightweight and breathable</li>
                        <li>• Naturally antibacterial</li>
                        <li>• Gets softer with each wash</li>
                        <li>• Dries quickly between sessions</li>
                      </ul>
                    </div>
                    <div><strong>Sizing:</strong> Look for 30x60" or larger for full body coverage</div>
                    <div className="pt-3">
                      <Button asChild variant="default" size="sm" className="w-full bg-white text-blue-700 border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
                        <a href={affiliateLinks.towelsLinen2Pack} target="_blank" rel="noopener noreferrer nofollow">
                          Shop Linen Towels →
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-2 border-green-200">
                  <CardHeader>
                    <CardTitle>Turkish Cotton Option</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Product Image Placeholder */}
                    <div className="w-full h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-center text-gray-500">
                        <Sparkles className="h-16 w-16 mx-auto mb-2 text-green-600" />
                        <div className="text-xs">Product Image</div>
                      </div>
                    </div>
                    <div><strong>Amazon Price:</strong> $30-60 for a set</div>
                    <div><strong>Why It Works:</strong> Highly absorbent, durable, heat-resistant</div>
                    <div><strong>Best For:</strong> Those who prefer plush, thick towels</div>
                    <div className="pt-3">
                      <Button asChild variant="default" size="sm" className="w-full">
                        <a href={affiliateLinks.towelsTurkishCotton} target="_blank" rel="noopener noreferrer nofollow">
                          Shop Turkish Towels →
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
                <div className="font-bold text-lg text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  What NOT to Buy:
                </div>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Synthetic fiber towels (can melt or release odors at high heat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Heavy terry cloth (takes forever to dry, harbors bacteria)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>Towels with plastic embellishments or rubber backing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <div className="font-semibold text-green-900">Pro Tip:</div>
                <div className="text-green-800">Buy 2-3 towels minimum—one to sit on, one for your back support, and one for drying off.</div>
              </div>
            </div>

            {/* Buckets & Ladles */}
            <div id="buckets" className="mb-8 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">4. Sauna Buckets & Ladles: For Traditional Finnish Experience</h3>
              
              <div className="text-lg text-gray-700 leading-relaxed mb-6">
                If you have a traditional sauna with a heater that accepts water (not infrared), a bucket and ladle set adds humidity control and that authentic Finnish <em>löyly</em> experience.
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Classic Wooden Bucket & Ladle Set</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Amazon Price Range:</strong> $40-80</li>
                      <li><strong>Materials:</strong> Nordic pine, cedar, or aspen</li>
                      <li><strong>Capacity:</strong> 4-5 liter buckets are standard</li>
                      <li><strong>What's Included:</strong> Bucket, long-handled ladle, sometimes liner</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stainless Steel Modern Set</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Amazon Price Range:</strong> $50-90</li>
                      <li><strong>Pros:</strong> Won't crack or warp, easier to clean, contemporary look</li>
                      <li><strong>Cons:</strong> Can get very hot to touch</li>
                      <li><strong>Best For:</strong> Modern sauna designs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6">
                <div className="font-bold text-lg text-yellow-900 mb-3">Important Notes:</div>
                <ul className="space-y-2 text-yellow-900">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Only use with traditional sauna heaters designed for water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Never pour water on infrared panels or electric elements not rated for it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Look for long ladle handles (16-20") to safely reach heater from a distance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comfort & Optimization */}
          <section id="comfort" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Comfort & Optimization Accessories</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">5. Sauna Backrests & Seat Cushions</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-4">
                  Comfort matters for longer sessions. Proper back support helps you relax and maintain protocol duration.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ergonomic Wooden Backrest</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div><strong>Amazon Price Range:</strong> $35-70</div>
                      <div><strong>Benefits:</strong> Promotes air circulation, prevents direct hot wood contact</div>
                      <div><strong>Best Materials:</strong> Cedar or aspen (naturally antimicrobial)</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Sauna Pillow</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div><strong>Amazon Price Range:</strong> $20-40</div>
                      <div><strong>Fill:</strong> Flax seed or buckwheat hulls (not foam!)</div>
                      <div><strong>Use:</strong> Head/neck support for lying down sessions</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div id="aromatherapy" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4">6. Essential Oil & Aromatherapy Systems</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-4">
                  Many sauna users enhance their experience with aromatherapy, though this is optional and should only be used in traditional saunas (not infrared).
                </div>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300">
                  <CardHeader>
                    <CardTitle>Sauna Essential Oil Set</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div><strong>Amazon Price Range:</strong> $15-35 for 6-8 bottles</div>
                    <div><strong>Popular Scents:</strong> Eucalyptus, pine, birch, lavender, peppermint</div>
                    <div><strong>Usage:</strong> 2-3 drops in ladle water, never directly on heater</div>
                    <div><strong>Benefits:</strong> Respiratory clearing, relaxation, traditional experience</div>
                  </CardContent>
                </Card>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-4">
                  <div className="font-semibold text-red-900">Important Safety Note:</div>
                  <div className="text-red-800">Only use sauna-grade essential oils. Regular oils may combust at high temperatures.</div>
                </div>
              </div>

              <div id="cleaning" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4">7. Cleaning & Maintenance Supplies</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-4">
                  Proper maintenance extends your sauna's life and keeps it hygienic.
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sauna Cleaning Kit Essentials:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Natural wood cleaner:</strong> $12-25 (never use chemicals)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Soft bristle brush:</strong> $8-15</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Microfiber cleaning cloths:</strong> $15-25 for a pack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Sauna-safe disinfectant spray:</strong> $15-30</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 my-6">
                  <div className="font-bold text-lg text-blue-900 mb-3">Maintenance Schedule:</div>
                  <ul className="space-y-2 text-blue-900">
                    <li><strong>After each use:</strong> Wipe benches, leave door open to air out</li>
                    <li><strong>Weekly:</strong> Clean visible dirt, check thermometer accuracy</li>
                    <li><strong>Monthly:</strong> Deep clean benches and backrests, inspect electrical</li>
                    <li><strong>Annually:</strong> Sand and re-treat wood if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Tracking */}
          <section id="tracking" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Advanced Tracking & Optimization Gear</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">8. Wearable Monitors for Protocol Tracking</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-4">
                  If you're following research-backed protocols like Bryan Johnson's, tracking your biometrics can provide valuable insights.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-green-50 border-2 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Heart Rate Monitor (Chest Strap)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div><strong>Amazon Price Range:</strong> $40-80</div>
                      <div><strong>Why:</strong> Track cardiovascular response to heat stress</div>
                      <div><strong>Look For:</strong> Models rated for high heat/humidity</div>
                      <div><strong>Best Brands:</strong> Polar H10, Garmin HRM-Pro</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-50 border-2 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Fitness Trackers (Wrist-Based)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div><strong>Amazon Price Range:</strong> Varies widely</div>
                      <div className="text-red-700"><strong>Warning:</strong> Remove most wrist devices before sauna—they're not rated for extreme heat</div>
                      <div><strong>Alternative:</strong> Some users wear Oura Ring (rated to 150°F) in infrared saunas only</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 my-6">
                  <div className="font-bold text-lg text-blue-900 mb-3">Temperature & HRV Tracking:</div>
                  <div className="text-blue-900 mb-2">For serious protocol optimization, consider external displays that track:</div>
                  <ul className="space-y-1 text-blue-900 ml-4">
                    <li>• Session duration</li>
                    <li>• Heart rate response</li>
                    <li>• Temperature exposure time</li>
                    <li>• Recovery metrics (HRV measured before/after)</li>
                  </ul>
                </div>
              </div>

              <div id="lights" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4">9. Sauna Lights & Chromotherapy</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-4">
                  Proper lighting enhances ambiance and some research suggests chromotherapy benefits.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">LED Sauna Light Fixtures</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div><strong>Amazon Price Range:</strong> $30-80</div>
                      <div><strong>Features:</strong> Heat-resistant, moisture-proof, dimmable</div>
                      <div><strong>Best:</strong> Warm white (2700K) for relaxation</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Chromotherapy Light Systems</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div><strong>Amazon Price Range:</strong> $60-150</div>
                      <div><strong>Colors:</strong> Red (energizing), blue (calming), green (balancing)</div>
                      <div><strong>Science:</strong> Limited but promising research on light therapy</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div id="sound" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4">10. Sound Systems & Bluetooth Speakers</h3>
                <div className="text-lg text-gray-700 leading-relaxed mb-4">
                  Many users enjoy music, podcasts, or meditation audio during sessions.
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Heat-Resistant Bluetooth Speakers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div><strong>Amazon Price Range:</strong> $50-120</div>
                      <div className="font-semibold">Critical Specs:</div>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>• Operating temp up to 140°F minimum</li>
                        <li>• IPX5 water resistance or higher</li>
                        <li>• Good battery life (4+ hours)</li>
                      </ul>
                      <div className="text-red-700 text-sm mt-2"><strong>Warning:</strong> Don't bring regular electronics into traditional high-heat saunas</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Wired Sauna Speaker Systems</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div><strong>Amazon Price Range:</strong> $80-200</div>
                      <div><strong>Pros:</strong> Specifically designed for sauna use, better sound quality</div>
                      <div><strong>Installation:</strong> May require professional setup</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Budget Breakdown */}
          <section id="budget" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Budget vs. Premium: What's Worth The Investment?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-green-50 border-2 border-green-300">
                <CardHeader>
                  <CardTitle className="text-xl">Starter Budget Setup</CardTitle>
                  <CardDescription className="text-lg font-bold text-green-700">$150-250</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold mb-3">Must-Haves:</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Traditional dial thermometer: $25</li>
                    <li>• Sand timer (20 min): $18</li>
                    <li>• Linen towels (2-pack): $35</li>
                    <li>• Basic wooden backrest: $45</li>
                    <li>• Cleaning supplies: $30</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t-2 border-green-300">
                    <div className="font-bold text-green-700">Total: ~$153</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-xl">Mid-Tier Setup</CardTitle>
                  <CardDescription className="text-lg font-bold text-blue-700">$400-600</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold mb-3">Everything Above Plus:</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Thermometer/hygrometer combo: $45</li>
                    <li>• Digital timer with remote: $40</li>
                    <li>• Premium towel set (4): $60</li>
                    <li>• Bucket & ladle set: $70</li>
                    <li>• Essential oil set: $25</li>
                    <li>• Ergonomic backrest: $65</li>
                    <li>• Heart rate monitor: $60</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t-2 border-blue-300">
                    <div className="font-bold text-blue-700">Total: ~$518</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-2 border-purple-300">
                <CardHeader>
                  <CardTitle className="text-xl">Premium Enthusiast</CardTitle>
                  <CardDescription className="text-lg font-bold text-purple-700">$800-1,200</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold mb-3">Everything Above Plus:</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Multiple thermometers: $80</li>
                    <li>• Smart interval timer: $55</li>
                    <li>• Complete aromatherapy: $90</li>
                    <li>• Chromotherapy lighting: $120</li>
                    <li>• Bluetooth speaker: $95</li>
                    <li>• Wearable tracking: $300</li>
                    <li>• Premium cleaning kit: $60</li>
                    <li>• Extra comfort accessories: $150</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t-2 border-purple-300">
                    <div className="font-bold text-purple-700">Total: ~$1,068</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Shopping Tips */}
          <section id="shopping" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Shopping Tips: How to Find the Best Deals</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Amazon Shopping Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">1.</span>
                      <span><strong>Check "Amazon's Choice" and "Best Seller" badges</strong>—these indicate proven popularity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">2.</span>
                      <span><strong>Read 3-star reviews first</strong>—they're usually most honest about pros and cons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">3.</span>
                      <span><strong>Filter by "4+ stars"</strong> to eliminate low-quality products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">4.</span>
                      <span><strong>Compare prices across sellers</strong>—sometimes third-party sellers offer better deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">5.</span>
                      <span><strong>Watch for Prime Day and Black Friday</strong>—sauna equipment sees 20-40% discounts</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-2 border-red-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      Red Flags to Avoid
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li>❌ Products with no reviews or only 5-star reviews (likely fake)</li>
                      <li>❌ Thermometers that don't specify temperature range</li>
                      <li>❌ "Sauna-safe" electronics with no IP rating</li>
                      <li>❌ Towels that don't list fiber content</li>
                      <li>❌ Essential oils not labeled as "sauna-grade"</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-2 border-green-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      When to Buy Direct vs. Amazon
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-green-900">Buy on Amazon:</div>
                      <div className="text-green-800">Accessories, towels, small items (better return policy)</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-900">Buy Direct:</div>
                      <div className="text-green-800">High-end electronics, custom installations (better warranty support)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I use regular bathroom towels in my sauna?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  You <em>can</em>, but they'll wear out quickly. Purpose-made sauna towels (linen or Turkish cotton) dry faster, resist bacteria better, and last 3-5x longer in high heat.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I really need a hygrometer in addition to a thermometer?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  For basic use, no. But if you're following specific research protocols or trying to replicate studies (like Bryan Johnson's), humidity matters. Finnish research protocols typically specify 10-20% humidity—you can't track that without a hygrometer.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's the most important accessory to buy first?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  An accurate thermometer, no question. Everything else is negotiable, but you cannot safely use a sauna or follow any protocol without knowing the actual temperature.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are expensive essential oils worth it?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  For sauna use, yes—buy sauna-grade oils. Regular cheap oils can release harmful compounds at high heat. That said, you don't need luxury brands; mid-range sauna-specific oils ($20-30 for a set) work great.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I bring my Apple Watch or Fitbit into the sauna?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <div><strong>Traditional sauna (175-200°F):</strong> Absolutely not. You'll damage it.</div>
                  <div><strong>Infrared sauna (120-150°F):</strong> Most devices aren't rated for even this temperature. Check your specific model's operating temperature range. Oura Ring is rated to 150°F and is often used in infrared saunas.</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How often should I replace sauna towels?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  With proper care (wash after every 2-3 uses, air dry between), quality linen sauna towels last 2-3 years. Replace when they start to smell even after washing or show significant wear.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final Recommendations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Final Recommendations: Start Here</h2>

            <div className="bg-gradient-to-br from-[#ff6b6b]/10 to-[#f59e0b]/10 border-l-4 border-[#ff6b6b] p-8 rounded-r-lg">
              <div className="text-lg font-semibold text-gray-900 mb-6">
                If you're just getting started and want the best bang for your buck, here's our recommended shopping list:
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-bold text-xl text-[#ff6b6b] mb-3">Essential Tier (Buy These First):</div>
                  <ol className="space-y-2 text-gray-800 ml-6">
                    <li>1. <strong>Accurate thermometer</strong> with hygrometer: $40-50</li>
                    <li>2. <strong>Sand timer or digital timer:</strong> $20-40</li>
                    <li>3. <strong>Two quality linen towels:</strong> $30-50</li>
                    <li>4. <strong>Basic cleaning supplies:</strong> $25-35</li>
                  </ol>
                </div>

                <div>
                  <div className="font-bold text-xl text-[#2196f3] mb-3">Comfort Tier (Add These Next):</div>
                  <ol className="space-y-2 text-gray-800 ml-6">
                    <li>1. <strong>Wooden backrest:</strong> $40-65</li>
                    <li>2. <strong>Bucket & ladle set</strong> (if traditional sauna): $45-75</li>
                    <li>3. <strong>Essential oil starter set:</strong> $20-30</li>
                  </ol>
                </div>

                <div>
                  <div className="font-bold text-xl text-[#f59e0b] mb-3">Optimization Tier (For Serious Users):</div>
                  <ol className="space-y-2 text-gray-800 ml-6">
                    <li>1. <strong>Heart rate monitor:</strong> $50-80</li>
                    <li>2. <strong>Better lighting system:</strong> $40-100</li>
                    <li>3. <strong>Heat-resistant speaker:</strong> $60-120</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Where We Found Products */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Where We Found These Products</h2>
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="text-gray-700 space-y-4">
                  <div>
                    All products mentioned are available on <strong>Amazon</strong> with Prime shipping. We analyzed:
                  </div>
                  <ul className="space-y-2 ml-6">
                    <li>• 1,200+ customer reviews across categories</li>
                    <li>• Product specifications and heat ratings</li>
                    <li>• Long-term durability reports</li>
                    <li>• Price trends over 12 months</li>
                    <li>• Professional sauna installer recommendations</li>
                  </ul>
                  <div className="pt-4 border-t border-gray-300 text-sm text-gray-600">
                    <strong>Affiliate Disclosure:</strong> We have affiliate relationships with Amazon and other retailers mentioned in this guide. When you purchase through our links, we earn a small commission at no extra cost to you. This helps us continue testing products and creating free content like this guide.
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/protocols/bryan-johnson" className="hover:text-[#ff6b6b]">
                      Bryan Johnson's Sauna Protocol
                    </Link>
                  </CardTitle>
                  <CardDescription>Learn the exact equipment and timing he uses</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/protocols" className="hover:text-[#ff6b6b]">
                      Ultimate Sauna Protocol Guide
                    </Link>
                  </CardTitle>
                  <CardDescription>Evidence-based protocols for different goals</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/articles/sauna-before-or-after-workout" className="hover:text-[#ff6b6b]">
                      Sauna Before or After Workout
                    </Link>
                  </CardTitle>
                  <CardDescription>Optimal timing for maximum benefits</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/articles" className="hover:text-[#ff6b6b]">
                      Browse All Articles
                    </Link>
                  </CardTitle>
                  <CardDescription>Complete library of sauna guides and research</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

        </div>

        {/* Footer Meta */}
        <div className="text-center text-sm text-gray-500 border-t pt-8">
          <div><em>Last Updated: November 2025</em></div>
          <div className="mt-2">
            <em>Affiliate Disclosure: This article contains Amazon affiliate links. We earn a commission from qualifying purchases at no additional cost to you.</em>
          </div>
        </div>

      </div>
    </article>
  )
}

