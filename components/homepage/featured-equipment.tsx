import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, ArrowRight } from 'lucide-react'

export function FeaturedEquipment() {
  // Locked to 4-product variant (shows more products = more affiliate opportunities)

  const products4 = [
    {
      id: 'thermometer',
      name: 'Sauna Thermometer',
      benefit: 'Monitor exact temperature to follow protocols precisely—essential for Bryan Johnson\'s 200°F standard',
      price: '$29.97',
      rating: 5,
      image: 'https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-01-Thermo-49Kpw6L.webp',
    },
    {
      id: 'towels',
      name: 'Turkish Cotton Towel',
      benefit: 'Absorbs 2x more than regular towels—prevents slipping and enhances heat exposure safety',
      price: '$37.99',
      rating: 5,
      image: 'https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-06-towels-3JfK1iY.webp',
    },
    {
      id: 'head-ice-pack',
      name: 'Head Ice Pack',
      benefit: 'Post-sauna recovery essential—activates cold shock proteins shown to reduce inflammation',
      price: '$38.99',
      rating: 5,
      image: 'https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-10-headicepack-487cn6y.webp',
    },
    {
      id: 'heartrate',
      name: 'Heart Rate Monitor',
      benefit: 'Track HRV and cardiovascular response in real-time—measure your protocol\'s effectiveness',
      price: '$104.95',
      rating: 5,
      image: 'https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-03-heartrate-47YPUYO.webp',
    },
  ]

  const products3 = [
    {
      id: 'thermometer',
      name: 'Sauna Thermometer',
      benefit: 'Monitor exact temperature to follow protocols precisely—essential for Bryan Johnson\'s 200°F standard',
      price: '$29.97',
      rating: 5,
      image: 'https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-01-Thermo-49Kpw6L.webp',
    },
    {
      id: 'timer-mechanical',
      name: 'Mechanical Timer',
      benefit: 'Track session duration precisely—no batteries needed, works reliably at 200°F+',
      price: '$22.98',
      rating: 5,
      image: 'https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-09-timer-4oANaal.webp',
    },
    {
      id: 'towels',
      name: 'Turkish Cotton Towel',
      benefit: 'Absorbs 2x more than regular towels—prevents slipping and enhances heat exposure safety',
      price: '$37.99',
      rating: 5,
      image: 'https://sztikcqmpilwflrbbqhl.supabase.co/storage/v1/object/public/img/product-06-towels-3JfK1iY.webp',
    },
  ]

  const products = products4

  return (
    <section className="py-16 bg-gray-50">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Essential Equipment for Any Sauna Protocol</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Following a sauna protocol safely requires accurate temperature monitoring and proper equipment. Whether you're implementing Bryan Johnson's advanced protocol or starting with beginner sessions, these tested products ensure safety and effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 rounded-t-lg overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm mb-3">
                  {product.benefit}
                </CardDescription>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating}.0)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#ff6b6b]">{product.price}</span>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/equipment#${product.id}`}>
                      Read Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/equipment">
              View All Equipment Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

