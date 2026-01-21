import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import type { MattressProduct } from "@/data/mattresses"

interface ProductCardProps {
  product: MattressProduct
  brandSlug: string
}

export function ProductCard({ product, brandSlug }: ProductCardProps) {
  const hasSpecialPrice = product.sizes.some((size) => size.specialPrice)
  const lowestPrice = Math.min(...product.sizes.map((s) => s.specialPrice || s.price))
  const lowestOriginalPrice = Math.min(...product.sizes.map((s) => s.price))

  return (
    <Link href={`/mattresses/${brandSlug}/${product.slug}`}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 md:h-56">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.modelName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {hasSpecialPrice && (
            <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600">
              Special Offer
            </Badge>
          )}
          {product.inStoreToTest && (
            <Badge variant="secondary" className="absolute top-3 right-3">
              <Check className="h-3 w-3 mr-1" /> In Store
            </Badge>
          )}
        </div>
        <CardContent className="p-5 flex-1 flex flex-col">
          <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">{product.brandName}</p>
          <h3 className="font-semibold text-lg mb-2">{product.modelName}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">{product.shortDescription}</p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">Comfort:</span> {product.comfort}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">From</span>
              {hasSpecialPrice ? (
                <>
                  <span className="font-bold text-lg text-red-600">€{lowestPrice}</span>
                  <span className="text-sm text-muted-foreground line-through">€{lowestOriginalPrice}</span>
                </>
              ) : (
                <span className="font-bold text-lg">€{lowestPrice}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
