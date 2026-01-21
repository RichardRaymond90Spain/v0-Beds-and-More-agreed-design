"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  getAllBrands,
  getFeaturedProducts,
  getBrandLowestPrice,
  brandHasInStoreProducts,
  getBrandDeliveryRange,
} from "@/data/mattresses"
import {
  Truck,
  Shield,
  Store,
  BadgeCheck,
  ChevronRight,
  Sparkles,
  Layers,
  Zap,
  ThumbsUp,
  Crown,
  ArrowRight,
} from "lucide-react"

export default function MattressesPage() {
  const brands = getAllBrands()
  const featuredProducts = getFeaturedProducts()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const sizes = [
    { label: "90x190", dimensions: "90 x 190 cm" },
    { label: "90x200", dimensions: "90 x 200 cm" },
    { label: "135x190", dimensions: "135 x 190 cm" },
    { label: "135x200", dimensions: "135 x 200 cm" },
    { label: "150x200", dimensions: "150 x 200 cm" },
    { label: "160x200", dimensions: "160 x 200 cm" },
    { label: "180x200", dimensions: "180 x 200 cm" },
  ]

  const quickBrowseTiles = [
    { label: "Pocket Sprung", icon: Layers, description: "Traditional support" },
    { label: "Memory Foam", icon: Sparkles, description: "Pressure relief" },
    { label: "Hybrid", icon: Zap, description: "Best of both" },
    { label: "Firm Support", icon: Shield, description: "Extra support" },
    { label: "Best Value", icon: ThumbsUp, description: "Quality & price" },
    { label: "Premium Range", icon: Crown, description: "Luxury sleep" },
  ]

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary by product and brand. Most mattresses are delivered within 1-4 weeks. In-stock items can often be delivered within a few days. We'll confirm the exact delivery timeframe when you contact us.",
    },
    {
      question: "Can I try mattresses in store?",
      answer: "Yes! We have two showrooms on the Costa del Sol - one in Marbella and one in Mijas Costa. You can try our full range of mattresses in person. Our sleep experts will help you find the perfect mattress for your needs.",
    },
    {
      question: "Do you take away old mattresses?",
      answer: "Yes, we offer an old mattress removal service. Just let us know when you place your order and we'll arrange to take your old mattress away when we deliver your new one.",
    },
    {
      question: "What guarantee do I get?",
      answer: "All our mattresses come with manufacturer guarantees ranging from 2 to 10 years depending on the brand. We also offer a no-quibble exchange policy - if you're not happy within 14 days, we'll exchange your mattress.",
    },
    {
      question: "What if I don't know the right firmness?",
      answer: "That's what we're here for! Visit our showroom and our sleep experts will assess your sleeping position, body type, and preferences to recommend the ideal firmness. You can also try different mattresses to feel the difference.",
    },
    {
      question: "Do you deliver to my area?",
      answer: "We deliver across the Costa del Sol and surrounding areas, including Marbella, Mijas, Fuengirola, Benalmádena, Estepona, and more. Contact us to confirm delivery to your specific location.",
    },
    {
      question: "Can I get a mattress in a custom size?",
      answer: "Yes, many of our brands offer custom sizing options. This is particularly useful for boats, caravans, or unusually shaped bed frames. Contact us with your requirements for a quote.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        {/* A) Hero / Intro */}
        <section className="relative py-12 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Mattresses
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6">
                Discover your perfect night&apos;s sleep with our premium mattress collection. 
                From pocket sprung to memory foam, we stock only the finest brands. 
                Try before you buy at our Costa del Sol showrooms, with delivery available across the region.
              </p>
              {/* Compact Trust Row */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <Store className="h-5 w-5 text-accent" />
                  <span className="text-sm">Try in store</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-accent" />
                  <span className="text-sm">Free local delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                  <span className="text-sm">Expert advice since 2008</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B) Quick Browse Tiles */}
        <section className="py-10 md:py-14 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Browse by Type
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {quickBrowseTiles.map((tile) => (
                <Link
                  key={tile.label}
                  href="#brands"
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg hover:border-accent transition-all duration-200">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                        <tile.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{tile.label}</h3>
                      <p className="text-xs text-muted-foreground">{tile.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* C) Shop by Size Row */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">
              Shop by Size
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size.label}
                  onClick={() => setSelectedSize(selectedSize === size.label ? null : size.label)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    selectedSize === size.label
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-background hover:border-accent hover:text-accent"
                  }`}
                >
                  {size.label}
                </button>
              ))}
              {selectedSize && (
                <button
                  onClick={() => setSelectedSize(null)}
                  className="flex-shrink-0 px-4 py-2 rounded-full border border-destructive text-destructive text-sm font-medium hover:bg-destructive hover:text-destructive-foreground transition-all"
                >
                  Clear
                </button>
              )}
            </div>
            {selectedSize && (
              <p className="mt-3 text-sm text-muted-foreground">
                Showing mattresses available in {selectedSize} cm. Contact us for availability.
              </p>
            )}
          </div>
        </section>

        {/* D) Brand Section */}
        <section id="brands" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Shop by Brand
              </h2>
              <p className="text-muted-foreground">
                We partner with the world&apos;s finest mattress makers. Each brand is selected for 
                quality, comfort, and durability. Click a brand to explore their full range.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {brands.map((brand) => {
                const lowestPrice = getBrandLowestPrice(brand)
                const hasInStore = brandHasInStoreProducts(brand)
                const deliveryTime = getBrandDeliveryRange(brand)

                return (
                  <Link key={brand.slug} href={`/mattresses/${brand.slug}`}>
                    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative h-48 md:h-56">
                        <Image
                          src={brand.heroImage || "/placeholder.svg"}
                          alt={brand.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {hasInStore && (
                            <Badge variant="secondary" className="bg-white/90 text-foreground text-xs">
                              <Store className="h-3 w-3 mr-1" /> In Store
                            </Badge>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            {brand.name}
                          </h3>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                          {brand.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            {lowestPrice > 0 && (
                              <p className="text-sm font-semibold text-accent">
                                From €{lowestPrice.toLocaleString()}
                              </p>
                            )}
                            {deliveryTime && (
                              <p className="text-xs text-muted-foreground">
                                Delivery: {deliveryTime}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                            View <ChevronRight className="h-4 w-4 ml-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* E) Featured Products Carousel */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Popular Mattresses
              </h2>
              <Link
                href="#brands"
                className="hidden md:flex items-center text-accent hover:underline text-sm font-medium"
              >
                View all brands <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4">
              {featuredProducts.slice(0, 4).map((product) => {
                const lowestPrice = Math.min(
                  ...product.sizes.map((s) => s.specialPrice ?? s.price)
                )
                return (
                  <Link
                    key={product.sku}
                    href={`/mattresses/${product.brandName.toLowerCase()}/${product.slug}`}
                    className="flex-shrink-0 w-72 md:w-auto"
                  >
                    <Card className="overflow-hidden group hover:shadow-lg transition-all h-full">
                      <div className="relative h-40 md:h-48">
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.modelName}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.inStoreToTest && (
                          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs">
                            Try in store
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {product.brandName}
                        </p>
                        <h3 className="font-semibold mb-1 line-clamp-1">
                          {product.modelName}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {product.comfort}
                        </p>
                        <p className="text-sm font-semibold text-accent">
                          From €{lowestPrice.toLocaleString()}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
            <Link
              href="#brands"
              className="md:hidden flex items-center justify-center text-accent hover:underline text-sm font-medium mt-4"
            >
              View all brands <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </section>

        {/* F) Helpful Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* How to Choose */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  How to Choose a Mattress
                </h2>
                <p className="text-muted-foreground mb-4">
                  Finding the right mattress depends on several key factors:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Firmness Level</p>
                      <p className="text-sm text-muted-foreground">
                        Side sleepers often prefer softer mattresses, while back and stomach sleepers may need firmer support.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Sleeping Position</p>
                      <p className="text-sm text-muted-foreground">
                        Your preferred sleeping position affects which mattress type will keep your spine aligned.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Temperature</p>
                      <p className="text-sm text-muted-foreground">
                        If you sleep hot, look for mattresses with cooling technology or natural breathable materials.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Budget</p>
                      <p className="text-sm text-muted-foreground">
                        We have quality options at every price point. A good mattress is an investment in your health.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild className="mt-6">
                  <Link href="/advice">Read Our Full Buying Guide</Link>
                </Button>
              </div>

              {/* Size Guide */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Mattress Sizes Guide
                </h2>
                <p className="text-muted-foreground mb-4">
                  European mattress sizes differ from UK sizes. Here are the most common dimensions we stock:
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Single</span>
                      <span className="text-muted-foreground">90 x 190 cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Single Long</span>
                      <span className="text-muted-foreground">90 x 200 cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Double</span>
                      <span className="text-muted-foreground">135 x 190 cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Double Long</span>
                      <span className="text-muted-foreground">135 x 200 cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">King</span>
                      <span className="text-muted-foreground">150 x 200 cm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Euro King</span>
                      <span className="text-muted-foreground">160 x 200 cm</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Super King</span>
                      <span className="text-muted-foreground">180 x 200 cm</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Need a custom size? Many of our brands offer bespoke sizing for unusual bed frames, boats, and caravans.
                  <Link href="/contact" className="text-accent hover:underline ml-1">
                    Contact us for details.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* G) FAQ Accordion */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Have another question? We&apos;re here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://wa.me/34952667095" target="_blank">
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>
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
