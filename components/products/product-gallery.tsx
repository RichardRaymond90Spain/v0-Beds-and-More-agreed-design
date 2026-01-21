"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  productName: string
  isValidImage?: boolean
}

const PLACEHOLDER_IMAGE = "/placeholder.svg"

export function ProductGallery({ images, productName, isValidImage = true }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Use placeholder if no valid images
  const displayImages = !isValidImage || !images || images.length === 0 
    ? [PLACEHOLDER_IMAGE] 
    : images

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
        <Image
          src={displayImages[selectedImage] || PLACEHOLDER_IMAGE}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = PLACEHOLDER_IMAGE
          }}
        />
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors",
                selectedImage === index ? "border-accent" : "border-transparent hover:border-muted-foreground/30"
              )}
            >
              <Image
                src={image || PLACEHOLDER_IMAGE}
                alt={`${productName} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = PLACEHOLDER_IMAGE
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
