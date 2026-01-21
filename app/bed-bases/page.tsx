import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const bedBases = [
  {
    name: "Divan Base with Storage",
    brand: "Premiere",
    description: "Practical divan base with built-in drawer storage. Available in multiple fabric options.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
  },
  {
    name: "Adjustable Bed Base",
    brand: "FLEX",
    description: "Electric adjustable base with massage function and wireless remote control.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
  },
  {
    name: "Ottoman Storage Base",
    brand: "Hypnos",
    description: "Gas-lift ottoman base providing maximum storage space beneath your mattress.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
  },
  {
    name: "Platform Bed Frame",
    brand: "Premiere",
    description: "Modern slatted platform base for optimal mattress ventilation and support.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
  },
  {
    name: "Zip & Link Base",
    brand: "Premiere",
    description: "Versatile zip and link base - convert from super king to twin singles instantly.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
  },
  {
    name: "Upholstered Bed Frame",
    brand: "Hypnos",
    description: "Elegant upholstered frame available in a wide range of premium fabrics.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
  },
]

export default function BedBasesPage() {
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Bed Bases</h1>
              <p className="text-lg text-primary-foreground/90">
                Transform your bedroom with our stylish and durable bed bases. From storage divans to adjustable bases,
                find the perfect foundation for your mattress.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bedBases.map((product, index) => (
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
