"use client"

import { cn } from "@/lib/utils"
import type { MattressSize } from "@/data/mattresses"

interface SizeSelectorProps {
  sizes: MattressSize[]
  selectedSize: MattressSize | null
  onSizeChange: (size: MattressSize) => void
}

export function SizeSelector({ sizes, selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">Select Size</label>
      <div className="grid grid-cols-2 gap-3">
        {sizes.map((size) => {
          const isSelected = selectedSize?.name === size.name
          const hasSpecialPrice = !!size.specialPrice

          return (
            <button
              key={size.name}
              onClick={() => onSizeChange(size)}
              className={cn(
                "relative p-4 rounded-lg border-2 text-left transition-all",
                isSelected
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50"
              )}
            >
              <div className="font-medium">{size.name}</div>
              <div className="text-sm text-muted-foreground">{size.dimensions}</div>
              <div className="mt-2">
                {hasSpecialPrice ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-red-600">€{size.specialPrice}</span>
                    <span className="text-sm text-muted-foreground line-through">€{size.price}</span>
                  </div>
                ) : (
                  <span className="font-bold">€{size.price}</span>
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
