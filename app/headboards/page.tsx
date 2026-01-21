import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const headboards = [
  {
    name: "Buttoned Chesterfield",
    brand: "Premiere",
    description: "Classic deep-buttoned Chesterfield style headboard in luxurious velvet fabrics.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
  },
  {
    name: "Contemporary Panel",
    brand: "Hypnos",
    description: "Clean-lined contemporary headboard with vertical panel detailing.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
  },
  {
    name: "Winged Scroll",
    brand: "Premiere",
    description: "Elegant winged headboard with classic scroll design. Made to order in any fabric.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
  },
  {
    name: "Padded Luxury",
    brand: "Hypnos",
    description: "Extra-deep padded headboard for ultimate comfort when sitting up in bed.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
  },
  {
    name: "Modern Geometric",
    brand: "FLEX",
    description: "Contemporary geometric design with clean lines and modern appeal.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
  },
  {
    name: "Studded Border",
    brand: "Premiere",
    description: "Classic headboard with decorative studded border detailing.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
  },
]

export default function HeadboardsPage() {
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Headboards</h1>
              <p className="text-lg text-primary-foreground/90">
                Complete your bed with a beautiful headboard that adds style and comfort. Choose from our wide range of
                designs and fabrics.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {headboards.map((product, index) => (
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
