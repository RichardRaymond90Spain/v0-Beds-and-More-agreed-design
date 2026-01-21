"use client"

import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBanner } from "@/components/trust-banner"
import { getFurnitureBrandBySlug } from "@/data/furniture"
import { isValidImage } from "@/types/product"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Store, Truck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

export default function FurnitureBrandPage() {
  const params = useParams()
  const brandSlug = params.brand as string
  const brand = getFurnitureBrandBySlug(brandSlug)

  if (!brand) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link href="/furniture" className="hover:text-foreground transition-colors">
                Furniture
              </Link>
              <ChevronLeft className="h-4 w-4 mx-2 rotate-180" />
              <span className="text-foreground font-medium">{brand.name}</span>
            </nav>
          </div>
        </div>

        {/* Brand Header */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold">{brand.name}</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">{brand.description}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brand.products.map((product) => {
                const hasValidImage = isValidImage(product)
                const hasPricing = product.sizes.some(s => s.price || s.specialPrice)
                const hasSpecialPrice = product.sizes.some(s => s.specialPrice)
                const lowestPrice = hasPricing 
                  ? Math.min(...product.sizes.filter(s => s.price || s.specialPrice).map(s => s.specialPrice || s.price || Infinity))
                  : null

                return (
                  <Link 
                    key={product.sku} 
                    href={`/furniture/${brandSlug}/${product.slug}`}
                    className="group bg-background rounded-lg border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[4/3] bg-muted">
                      <Image
                        src={hasValidImage ? (product.images[0] || "/placeholder.svg") : "/placeholder.svg"}
                        alt={`${product.brandName} ${product.modelName}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {hasSpecialPrice && (
                        <Badge className="absolute top-3 right-3 bg-red-600">
                          Special Offer
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-accent font-medium uppercase tracking-wider">{product.brandName}</p>
                      <h3 className="font-serif text-lg font-semibold mt-1">{product.modelName}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.shortDescription}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {product.inStoreToTest && (
                          <Badge variant="outline" className="text-xs gap-1">
                            <Store className="h-3 w-3" /> In Store
                          </Badge>
                        )}
                        {product.deliveryTimeToShop && (
                          <Badge variant="outline" className="text-xs gap-1">
                            <Truck className="h-3 w-3" /> {product.deliveryTimeToShop}
                          </Badge>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        {hasPricing ? (
                          <p className="font-semibold">
                            From <span className={hasSpecialPrice ? "text-red-600" : ""}>€{lowestPrice}</span>
                          </p>
                        ) : (
                          <p className="text-muted-foreground">Price on request</p>
                        )}
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
