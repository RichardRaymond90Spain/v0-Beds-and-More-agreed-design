import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const furniture = [
  {
    name: "Bedside Tables",
    brand: "Various",
    description: "Stylish bedside tables in a variety of finishes to complement your bedroom.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Chest of Drawers",
    brand: "Various",
    description: "Practical storage solutions with elegant design for any bedroom style.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Wardrobes",
    brand: "Various",
    description: "Spacious wardrobes with various configurations to suit your storage needs.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Dressing Tables",
    brand: "Various",
    description: "Elegant dressing tables with mirrors and storage compartments.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Blanket Boxes",
    brand: "Various",
    description: "Traditional blanket boxes perfect for storing bedding and linens.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Bedroom Benches",
    brand: "Various",
    description: "Upholstered bedroom benches for the end of bed or dressing area.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
]

export default function FurniturePage() {
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Furniture</h1>
              <p className="text-lg text-primary-foreground/90">
                Complete your bedroom with our carefully selected range of bedroom furniture. From bedside tables to
                wardrobes, find pieces that match your style.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {furniture.map((product, index) => (
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
