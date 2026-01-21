import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const completeBeds = [
  {
    name: "Hypnos Luxury Complete Bed",
    brand: "Hypnos",
    description: "Complete bed set including mattress, divan base and matching headboard from Hypnos.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    name: "Sealy Posturepedic Package",
    brand: "Sealy",
    description: "Full bed package with Sealy mattress, sturdy base and coordinating headboard.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    name: "Premiere Collection Set",
    brand: "Premiere",
    description: "Our exclusive complete bed set with handcrafted mattress, base and bespoke headboard.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    name: "Ottoman Storage Bed Set",
    brand: "Various",
    description: "Complete bed with gas-lift ottoman storage base, mattress and upholstered headboard.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    name: "Zip & Link Complete Set",
    brand: "Premiere",
    description: "Versatile zip and link complete bed - perfect for holiday homes and guest rooms.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    name: "Adjustable Bed Package",
    brand: "FLEX",
    description: "Electric adjustable bed with compatible mattress and wall-mounted headboard.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
]

export default function CompleteBedsPage() {
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Complete Beds</h1>
              <p className="text-lg text-primary-foreground/90">
                Get everything you need in one package. Our complete bed sets include mattress, base and headboard,
                perfectly matched for the ultimate sleep experience.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completeBeds.map((product, index) => (
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
