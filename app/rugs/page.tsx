import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const rugs = [
  {
    name: "Traditional Persian",
    brand: "Premium",
    description: "Classic Persian-style rugs with intricate patterns and rich colours.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
  },
  {
    name: "Modern Abstract",
    brand: "Contemporary",
    description: "Bold abstract designs perfect for modern bedrooms and living spaces.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
  },
  {
    name: "Natural Fibres",
    brand: "Eco",
    description: "Sustainable rugs made from natural materials like jute and sisal.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
  },
  {
    name: "Shaggy Comfort",
    brand: "Luxury",
    description: "Deep pile shaggy rugs for ultimate comfort underfoot.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
  },
  {
    name: "Geometric Patterns",
    brand: "Modern",
    description: "Contemporary geometric designs in neutral and bold colour palettes.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
  },
  {
    name: "Vintage Distressed",
    brand: "Heritage",
    description: "Vintage-style distressed rugs with timeless appeal.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
  },
]

export default function RugsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-accent font-medium mb-2 tracking-wider uppercase">Our Collection</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Rugs</h1>
              <p className="text-lg text-primary-foreground/90">
                Add warmth and style to your bedroom with our beautiful selection of rugs. From traditional to modern,
                find the perfect rug to complement your decor.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rugs.map((product, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                      {product.brand}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact For Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
