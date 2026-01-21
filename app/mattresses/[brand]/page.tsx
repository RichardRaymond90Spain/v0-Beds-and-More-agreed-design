"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import { ProductCard } from "@/components/mattresses/product-card"
import { Filters, type FilterState } from "@/components/mattresses/filters"
import { CTAButtons } from "@/components/mattresses/cta-buttons"
import { getBrandBySlug } from "@/data/mattresses"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

export default function BrandPage() {
  const params = useParams()
  const brandSlug = params.brand as string
  const brand = getBrandBySlug(brandSlug)

  const [filters, setFilters] = useState<FilterState>({
    size: "All Sizes",
    comfort: "All Comfort Levels",
    inStoreOnly: false,
    sort: "featured",
  })

  if (!brand) {
    notFound()
  }

  const filteredProducts = useMemo(() => {
    let products = [...brand.products]

    // Filter by comfort
    if (filters.comfort !== "All Comfort Levels") {
      products = products.filter((p) => p.comfort === filters.comfort)
    }

    // Filter by in-store availability
    if (filters.inStoreOnly) {
      products = products.filter((p) => p.inStoreToTest)
    }

    // Sort products
    switch (filters.sort) {
      case "price-low":
        products.sort((a, b) => {
          const aPrice = Math.min(...a.sizes.map((s) => s.specialPrice || s.price))
          const bPrice = Math.min(...b.sizes.map((s) => s.specialPrice || s.price))
          return aPrice - bPrice
        })
        break
      case "price-high":
        products.sort((a, b) => {
          const aPrice = Math.min(...a.sizes.map((s) => s.specialPrice || s.price))
          const bPrice = Math.min(...b.sizes.map((s) => s.specialPrice || s.price))
          return bPrice - aPrice
        })
        break
      case "name":
        products.sort((a, b) => a.modelName.localeCompare(b.modelName))
        break
    }

    return products
  }, [brand.products, filters])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <Link 
              href="/mattresses" 
              className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              All Mattress Brands
            </Link>
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{brand.name}</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                {brand.description}
              </p>
              <CTAButtons variant="compact" productName={`${brand.name} mattresses`} />
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-72 flex-shrink-0">
                <Filters onFilterChange={setFilters} initialFilters={filters} />
              </div>

              {/* Product Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.sku} product={product} brandSlug={brandSlug} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground mb-4">No products match your filters.</p>
                    <button 
                      onClick={() => setFilters({
                        size: "All Sizes",
                        comfort: "All Comfort Levels",
                        inStoreOnly: false,
                        sort: "featured",
                      })}
                      className="text-accent hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
