import type { MattressSize } from "@/data/mattresses"

interface PriceBlockProps {
  size: MattressSize
  showLabel?: boolean
}

export function PriceBlock({ size, showLabel = true }: PriceBlockProps) {
  const hasSpecialPrice = !!size.specialPrice

  return (
    <div className="space-y-1">
      {showLabel && (
        <p className="text-sm text-muted-foreground">
          {size.name} ({size.dimensions})
        </p>
      )}
      <div className="flex items-baseline gap-3">
        {hasSpecialPrice ? (
          <>
            <span className="text-2xl font-bold text-red-600">€{size.specialPrice}</span>
            <span className="text-lg text-muted-foreground line-through">€{size.price}</span>
            <span className="text-sm font-medium text-red-600">
              Save €{size.price - (size.specialPrice || 0)}
            </span>
          </>
        ) : (
          <span className="text-2xl font-bold">€{size.price}</span>
        )}
      </div>
    </div>
  )
}

interface PriceSummaryProps {
  sizes: MattressSize[]
}

export function PriceSummary({ sizes }: PriceSummaryProps) {
  const hasSpecialPrice = sizes.some((size) => size.specialPrice)
  const lowestPrice = Math.min(...sizes.map((s) => s.specialPrice || s.price))
  const lowestOriginalPrice = Math.min(...sizes.map((s) => s.price))

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
