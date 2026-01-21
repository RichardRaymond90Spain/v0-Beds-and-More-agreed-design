"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

interface CTAButtonsProps {
  productName?: string
  variant?: "default" | "compact"
  className?: string
}

export function CTAButtons({ productName, variant = "default", className = "" }: CTAButtonsProps) {
  const whatsappMessage = productName
    ? `Hi, I'm interested in the ${productName}. Can you provide more information?`
    : "Hi, I'd like to enquire about your mattresses."
  
  const whatsappUrl = `https://wa.me/34952667095?text=${encodeURIComponent(whatsappMessage)}`

  if (variant === "compact") {
    return (
      <div className={`flex gap-2 ${className}`}>
        <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1 bg-transparent">
          <a href="tel:+34952667095">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </a>
        </Button>
      </div>
    )
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <Button asChild size="lg" className="w-full">
        <Link href="/contact">
          <Mail className="h-5 w-5 mr-2" />
          Contact For Details
        </Link>
      </Button>
      <div className="grid grid-cols-2 gap-3">
        <Button asChild variant="outline" size="lg" className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="tel:+34952667095">
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  )
}

// Sticky mobile CTA bar
export function MobileCTABar({ productName }: { productName?: string }) {
  const whatsappMessage = productName
    ? `Hi, I'm interested in the ${productName}. Can you provide more information?`
    : "Hi, I'd like to enquire about your mattresses."
  
  const whatsappUrl = `https://wa.me/34952667095?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-3 lg:hidden z-40">
      <div className="flex gap-2 max-w-lg mx-auto">
        <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp Us
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1 bg-transparent">
          <a href="tel:+34952667095">
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  )
}
