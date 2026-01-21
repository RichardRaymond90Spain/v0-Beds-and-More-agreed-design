"use client"

import { cn } from "@/lib/utils"
import type { ProductSize } from "@/types/product"

interface SizeSelectorProps {
  sizes: ProductSize[]
  selectedSize: ProductSize | null
  onSizeChange: (size: ProductSize) => void
}

export function SizeSelector({ sizes, selectedSize, onSizeChange }: SizeSelectorProps) {
  // Don't render if only one size with no dimensions
  if (sizes.length <= 1 && !sizes[0]?.dimensions && !sizes[0]?.name) {
    return null
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">Select Size</label>
      <div className="grid grid-cols-2 gap-3">
        {sizes.map((size, index) => {
          const isSelected = selectedSize?.name === size.name || (selectedSize === null && index === 0)
          const hasSpecialPrice = !!size.specialPrice
          const hasPrice = !!(size.price || size.specialPrice)

          return (
            <button
              key={size.name || index}
              onClick={() => onSizeChange(size)}
              className={cn(
                "relative p-4 rounded-lg border-2 text-left transition-all",
                isSelected
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50"
              )}
            >
              {size.name && <div className="font-medium">{size.name}</div>}
              {size.dimensions && <div className="text-sm text-muted-foreground">{size.dimensions}</div>}
              <div className="mt-2">
                {hasPrice ? (
                  hasSpecialPrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-red-600">€{size.specialPrice}</span>
                      {size.price && (
                        <span className="text-sm text-muted-foreground line-through">€{size.price}</span>
                      )}
                    </div>
                  ) : (
                    <span className="font-bold">€{size.price}</span>
                  )
                ) : (
                  <span className="text-sm text-muted-foreground">Price on request</span>
                )}
              </div>
              {hasSpecialPrice && (
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                  SALE
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
