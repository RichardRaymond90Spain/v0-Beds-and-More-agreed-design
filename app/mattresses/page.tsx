import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const mattresses = [
  {
    name: "Hypnos Orthos Support",
    brand: "Hypnos",
    description: "Superior orthopaedic support with natural fillings for the perfect night's sleep.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    name: "Sealy Posturepedic Elite",
    brand: "Sealy",
    description: "Advanced PostureTech coil system provides targeted support where you need it most.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    name: "FLEX Nube Visco",
    brand: "FLEX",
    description: "Premium memory foam mattress with advanced temperature regulation technology.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    name: "Pikolin Normablock",
    brand: "Pikolin",
    description: "Traditional pocket spring construction with modern comfort layers.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    name: "Premiere Collection Luxury",
    brand: "Premiere",
    description: "Our exclusive handcrafted mattress with premium natural materials.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    name: "Hypnos Wool Origins",
    brand: "Hypnos",
    description: "Sustainable mattress crafted with British wool and organic cotton.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
]

export default function MattressesPage() {
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Mattresses</h1>
              <p className="text-lg text-primary-foreground/90">
                Experience the perfect balance of comfort and support with our premium mattress collection. From pocket
                sprung to memory foam, we have the perfect mattress for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mattresses.map((product, index) => (
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
