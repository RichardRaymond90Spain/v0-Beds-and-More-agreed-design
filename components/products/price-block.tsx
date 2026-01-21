import type { ProductSize } from "@/types/product"

interface PriceBlockProps {
  size: ProductSize
  showLabel?: boolean
}

export function PriceBlock({ size, showLabel = true }: PriceBlockProps) {
  const hasSpecialPrice = !!size.specialPrice
  const hasPrice = !!(size.price || size.specialPrice)

  // If no price data, show "Price on request"
  if (!hasPrice) {
    return (
      <div className="space-y-1">
        {showLabel && size.name && (
          <p className="text-sm text-muted-foreground">
            {size.name}{size.dimensions ? ` (${size.dimensions})` : ''}
          </p>
        )}
        <p className="text-xl font-semibold text-muted-foreground">Price on request</p>
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {showLabel && size.name && (
        <p className="text-sm text-muted-foreground">
          {size.name}{size.dimensions ? ` (${size.dimensions})` : ''}
        </p>
      )}
      <div className="flex items-baseline gap-3">
        {hasSpecialPrice ? (
          <>
            <span className="text-2xl font-bold text-red-600">€{size.specialPrice}</span>
            {size.price && (
              <>
                <span className="text-lg text-muted-foreground line-through">€{size.price}</span>
                <span className="text-sm font-medium text-red-600">
                  Save €{size.price - (size.specialPrice || 0)}
                </span>
              </>
            )}
          </>
        ) : (
          <span className="text-2xl font-bold">€{size.price}</span>
        )}
      </div>
    </div>
  )
}

interface PriceSummaryProps {
  sizes: ProductSize[]
}

export function PriceSummary({ sizes }: PriceSummaryProps) {
  // Filter sizes that have prices
  const sizesWithPrices = sizes.filter(s => s.price || s.specialPrice)
  
  if (sizesWithPrices.length === 0) {
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-semibold text-muted-foreground">Price on request</span>
      </div>
    )
  }

  const hasSpecialPrice = sizesWithPrices.some((size) => size.specialPrice)
  const lowestPrice = Math.min(...sizesWithPrices.map((s) => s.specialPrice || s.price || Infinity))
  const lowestOriginalPrice = Math.min(...sizesWithPrices.map((s) => s.price || Infinity))

  return (
    <div className="flex items-baseline gap-2">
      <span className="text-sm text-muted-foreground">From</span>
      {hasSpecialPrice ? (
        <>
          <span className="text-3xl font-bold text-red-600">€{lowestPrice}</span>
          <span className="text-lg text-muted-foreground line-through">€{lowestOriginalPrice}</span>
        </>
      ) : (
        <span className="text-3xl font-bold">€{lowestPrice}</span>
      )}
    </div>
  )
}
