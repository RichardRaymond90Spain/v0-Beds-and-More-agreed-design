import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const articles = [
  {
    title: "How to Choose the Right Mattress",
    description: "A comprehensive guide to finding the perfect mattress for your sleep style and preferences.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    title: "Understanding Mattress Types",
    description: "From pocket sprung to memory foam - learn about different mattress technologies.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    title: "Bed Size Guide",
    description: "Find the right bed size for your room and sleeping habits with our complete guide.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    title: "Caring for Your Mattress",
    description: "Tips and tricks to extend the life of your mattress and keep it in perfect condition.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
]

const faqs = [
  {
    question: "How often should I replace my mattress?",
    answer:
      "We recommend replacing your mattress every 7-10 years, depending on the quality and how well it has been maintained. Signs that you need a new mattress include visible sagging, lumps, or if you're waking up with aches and pains.",
  },
  {
    question: "What mattress firmness is best for me?",
    answer:
      "The best firmness depends on your sleeping position and personal preference. Side sleepers typically prefer softer mattresses, back sleepers medium-firm, and stomach sleepers firmer options. Visit our showroom to try different options.",
  },
  {
    question: "Do you offer delivery and installation?",
    answer:
      "Yes, we offer delivery across the Costa del Sol area. Our team will deliver your new bed and can also remove your old mattress. Contact us for delivery details and pricing.",
  },
  {
    question: "Can I try mattresses before buying?",
    answer:
      "Absolutely! We encourage you to visit our showrooms in Marbella or Mijas Costa to try our full range of mattresses. Our sleep experts will help you find the perfect match.",
  },
  {
    question: "What warranty do your mattresses come with?",
    answer:
      "All our new mattresses carry a minimum 2-year warranty. Many of our premium brands offer extended warranties of up to 10 years. Ask in-store for specific warranty details.",
  },
  {
    question: "Do you offer finance options?",
    answer:
      "Please contact us to discuss payment options. We aim to make quality sleep accessible to everyone and may be able to offer flexible payment arrangements.",
  },
]

export default function AdvicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-accent font-medium mb-2 tracking-wider uppercase">Expert Guidance</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sleep Advice</h1>
              <p className="text-lg text-primary-foreground/90">
                Get expert advice on choosing the right bed and mattress for your needs. Our guides and FAQs will help
                you make an informed decision.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">Helpful Guides</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our collection of expert guides to help you choose the perfect sleep solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{article.description}</p>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href="/contact">Ask Us More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about beds, mattresses, and our services.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our sleep experts are here to help. Visit our showroom or get in touch for personalized advice.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
