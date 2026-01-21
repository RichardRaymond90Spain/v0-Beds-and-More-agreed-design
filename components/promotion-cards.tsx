import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const promotions = [
  {
    title: "10% Cashback In-Store Credit on ALL Purchases!",
    description:
      "Wow!! On top of the already amazing prices, we're now offering a further 10% Store Credit CASHBACK!! Applies to everything bought in-store in Mijas Costa or Marbella. In-store only, terms & conditions apply.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    badge: "10% Cashback",
  },
  {
    title: "21% OFF All Premiere Collection",
    description:
      "21% OFF Everything in our exclusive 'Premiere Collection' of Beds, Mattresses & Headboards!! Our own, amazing range of super quality bed bases, mattresses and a HUGE variety of made-to-order options.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    badge: "21% OFF",
  },
  {
    title: "25% OFF Hypnos Beds, Headboards & Mattresses",
    description:
      "A premium range of beds and mattresses – 25% OFF Hypnos Beds, Headboards & Mattresses. Experience the most comfortable beds in the world.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    badge: "25% OFF",
  },
  {
    title: "40% OFF Sealy Mattresses!",
    description:
      "A name you know and trust, Sealy mattresses with giant discounts from Beds and More SL, in Mijas Costa and Marbella. Save 40% on your next premium quality Sealy mattress and sleep well with Beds and More!",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    badge: "40% OFF",
  },
  {
    title: "Shallow Divan Combo with Ava Pocket Sprung Mattress",
    description:
      "An amazing divan bed and mattress offer, designed with style and comfort in mind! Our Combo packages have been designed to give flexibility and value.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
    badge: "DEAL!",
  },
  {
    title: "Zip and Link Beds - Eco Package",
    description:
      "One King Size Bed or Two Single Beds – Flexibility for the holiday home renter. Perfect for rental properties and guest rooms.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
    badge: "Eco Package",
  },
]

export function PromotionCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wider uppercase">Special Offers</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Current Promotions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our exclusive offers and discounts. Contact us for more details on any of these amazing
            deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded font-semibold text-sm">
                  {promo.badge}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 line-clamp-2">{promo.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{promo.description}</p>
                <Button asChild className="w-full">
                  <Link href="/contact">Contact For Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
