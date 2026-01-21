export interface ProductSize {
  name: string
  dimensions?: string
  price?: number
  specialPrice?: number
}

export interface Product {
  sku: string
  slug: string
  type: string
  brandName: string
  modelName: string
  description: string
  shortDescription: string
  images: string[]
  sizes: ProductSize[]
  color?: string
  inStoreToTest: boolean
  deliveryTimeToShop: string
  comfort?: string
  guarantee: string
  quantity?: number
  features: string[]
  materials: { name: string; value: string }[]
  faqs: { question: string; answer: string }[]
  notes?: string
}

export interface ProductBrand {
  slug: string
  name: string
  description: string
  heroImage: string
  products: Product[]
}

// Helper to normalize brand/model names for grouping
export function normalizeForGrouping(str: string): string {
  return str.trim().toLowerCase().replace(/\s+/g, ' ')
}

// Check if price exists
export function hasPricing(size: ProductSize): boolean {
  return !!(size.price || size.specialPrice)
}

// Check if any size has pricing
export function productHasPricing(product: Product): boolean {
  return product.sizes.some(hasPricing)
}

// Check if image is valid (not marked as wrong in notes)
export function isValidImage(product: Product): boolean {
  if (!product.images || product.images.length === 0) return false
  if (product.notes?.toLowerCase().includes('wrong image')) return false
  return true
}
