import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import type { MattressBrand } from "@/data/mattresses"

interface BrandCardProps {
  brand: MattressBrand
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link href={`/mattresses/${brand.slug}`}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative h-48 md:h-56">
          <Image
            src={brand.heroImage || "/placeholder.svg"}
            alt={brand.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">{brand.name}</h3>
          </div>
        </div>
        <CardContent className="p-5">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{brand.description}</p>
          <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
            View Collection <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
