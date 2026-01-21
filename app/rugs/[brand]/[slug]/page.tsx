"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBanner } from "@/components/trust-banner"
import { ProductGallery } from "@/components/products/product-gallery"
import { SizeSelector } from "@/components/products/size-selector"
import { PriceBlock } from "@/components/products/price-block"
import { CTAButtons, MobileCTABar } from "@/components/products/cta-buttons"
import { getRugProductBySlug, getRugBrandBySlug } from "@/data/rugs"
import { isValidImage } from "@/types/product"
import Link from "next/link"
import { ChevronLeft, Truck, Shield, Store, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { notFound } from "next/navigation"
import type { ProductSize } from "@/types/product"

export default function RugProductPage() {
  const params = useParams()
  const brandSlug = params.brand as string
  const productSlug = params.slug as string
  
  const brand = getRugBrandBySlug(brandSlug)
  const product = getRugProductBySlug(brandSlug, productSlug)
  
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null)

  if (!brand || !product) {
    notFound()
  }

  const productFullName = `${product.brandName} ${product.modelName}`
  const hasValidImage = isValidImage(product)
  const hasMultipleSizes = product.sizes.length > 1 || (product.sizes[0]?.dimensions && product.sizes[0]?.name)

  return (
    <div className="flex min-h-screen flex-col pb-20 lg:pb-0">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link href="/rugs" className="hover:text-foreground transition-colors">
                Rugs
              </Link>
              <ChevronLeft className="h-4 w-4 mx-2 rotate-180" />
              <Link href={`/rugs/${brandSlug}`} className="hover:text-foreground transition-colors">
                {brand.name}
              </Link>
              <ChevronLeft className="h-4 w-4 mx-2 rotate-180" />
              <span className="text-foreground font-medium">{product.modelName}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Gallery */}
              <div>
                <ProductGallery images={product.images} productName={productFullName} isValidImage={hasValidImage} />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Title & Brand */}
                <div>
                  <Link 
                    href={`/rugs/${brandSlug}`}
                    className="text-accent hover:underline text-sm font-medium uppercase tracking-wider"
                  >
                    {product.brandName}
                  </Link>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">{product.modelName}</h1>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {product.inStoreToTest && (
                    <Badge variant="secondary" className="gap-1">
                      <Store className="h-3 w-3" /> Available In Store
                    </Badge>
                  )}
                  {product.deliveryTimeToShop && (
                    <Badge variant="secondary" className="gap-1">
                      <Truck className="h-3 w-3" /> {product.deliveryTimeToShop} Delivery
                    </Badge>
                  )}
                  {product.guarantee && (
                    <Badge variant="secondary" className="gap-1">
                      <Shield className="h-3 w-3" /> {product.guarantee} Guarantee
                    </Badge>
                  )}
                  {product.sizes.some(s => s.specialPrice) && (
                    <Badge className="bg-red-600 hover:bg-red-600 gap-1">
                      Special Offer
                    </Badge>
                  )}
                </div>

                {/* Description */}
                {product.shortDescription && (
                  <p className="text-muted-foreground leading-relaxed">{product.shortDescription}</p>
                )}

                {/* Color (if exists) */}
                {product.color && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Available Colours:</span>
                    <span className="text-muted-foreground">{product.color}</span>
                  </div>
                )}

                {/* Size Selector */}
                {hasMultipleSizes && (
                  <SizeSelector 
                    sizes={product.sizes} 
                    selectedSize={selectedSize} 
                    onSizeChange={setSelectedSize} 
                  />
                )}

                {/* Price Display */}
                {(selectedSize || product.sizes[0]) && (
                  <div className="pt-2">
                    <PriceBlock size={selectedSize || product.sizes[0]} showLabel={!hasMultipleSizes} />
                  </div>
                )}

                {/* CTA Buttons */}
                <CTAButtons productName={productFullName} productType="rug" />

                {/* Trust Points */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Price Promise</p>
                      <p className="text-xs text-muted-foreground">We&apos;ll beat any local price</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Quality Materials</p>
                      <p className="text-xs text-muted-foreground">Premium construction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">View In Store</p>
                      <p className="text-xs text-muted-foreground">See before you buy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-full bg-green-100">
                      <Truck className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Free Delivery</p>
                      <p className="text-xs text-muted-foreground">Costa del Sol</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Sections */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Full Description */}
              {product.description && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl font-bold mb-4">About This Rug</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl font-bold mb-4">Features</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-accent/10 mt-0.5">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Materials Table */}
              {product.materials && product.materials.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl font-bold mb-4">Materials & Construction</h2>
                  <div className="bg-background rounded-lg border overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {product.materials.map((material, index) => (
                          <tr key={index} className={index !== product.materials.length - 1 ? "border-b" : ""}>
                            <td className="px-4 py-3 font-medium bg-muted/50 w-1/3">{material.name}</td>
                            <td className="px-4 py-3 text-muted-foreground">{material.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Delivery Info */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-bold mb-4">Delivery & Care</h2>
                <div className="bg-background rounded-lg border p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Free delivery throughout the Costa del Sol. {product.deliveryTimeToShop && `Estimated delivery time: ${product.deliveryTimeToShop}.`}
                        We&apos;ll contact you to arrange a convenient delivery date.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Care Instructions</p>
                      <p className="text-sm text-muted-foreground">
                        Regular vacuuming recommended. For specific care instructions, please refer to the product FAQs 
                        or contact us for advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              {product.faqs && product.faqs.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="bg-background rounded-lg border">
                    {product.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="px-4 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar productName={productFullName} productType="rug" />
    </div>
  )
}
