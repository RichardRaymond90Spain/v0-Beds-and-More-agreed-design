import type { Product, ProductBrand } from "@/types/product"

export const rugBrands: ProductBrand[] = [
  {
    slug: "modern-rugs",
    name: "Modern Rugs",
    description: "Contemporary rug designs to add style and comfort to your bedroom.",
    heroImage: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=1200&q=80",
    products: [
      {
        sku: "RUG-GEO-001",
        slug: "geometric-pattern",
        type: "Rug",
        brandName: "Modern Rugs",
        modelName: "Geometric Pattern Rug",
        description: "A contemporary geometric rug that adds visual interest to any bedroom. Made from soft polypropylene for easy care and durability.",
        shortDescription: "Contemporary geometric design in soft polypropylene.",
        images: [
          "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
        ],
        sizes: [
          { name: "Small", dimensions: "120 x 170 cm", price: 89 },
          { name: "Medium", dimensions: "160 x 230 cm", price: 149 },
          { name: "Large", dimensions: "200 x 290 cm", price: 229 },
        ],
        color: "Grey/Cream, Blue/Grey, Ochre/Grey",
        inStoreToTest: true,
        deliveryTimeToShop: "1 week",
        guarantee: "1 year",
        features: [
          "Contemporary design",
          "Soft underfoot",
          "Easy to clean",
          "Non-shedding",
          "Multiple sizes",
          "Stain resistant",
        ],
        materials: [
          { name: "Pile", value: "100% Polypropylene" },
          { name: "Backing", value: "Jute" },
          { name: "Pile Height", value: "10mm" },
        ],
        faqs: [
          { question: "How do I clean this rug?", answer: "Regular vacuuming is recommended. For spills, blot immediately and clean with a mild detergent solution." },
          { question: "Is an underlay needed?", answer: "We recommend a non-slip underlay for hard floors. Not essential for carpeted rooms." },
        ],
      },
      {
        sku: "RUG-SHG-001",
        slug: "shaggy-comfort",
        type: "Rug",
        brandName: "Modern Rugs",
        modelName: "Shaggy Comfort Rug",
        description: "Sink your feet into luxury with this deep pile shaggy rug. Perfect beside the bed for that cozy morning feel.",
        shortDescription: "Deep pile shaggy rug for ultimate comfort.",
        images: [
          "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
        ],
        sizes: [
          { name: "Bedside", dimensions: "60 x 120 cm", price: 49 },
          { name: "Small", dimensions: "120 x 170 cm", price: 129 },
          { name: "Medium", dimensions: "160 x 230 cm", price: 199 },
          { name: "Large", dimensions: "200 x 290 cm", price: 299 },
        ],
        color: "Silver, Cream, Charcoal, Blush Pink",
        inStoreToTest: true,
        deliveryTimeToShop: "1 week",
        guarantee: "1 year",
        features: [
          "Deep shaggy pile",
          "Super soft",
          "Luxurious feel",
          "Multiple colours",
          "Various sizes",
          "Perfect for bedrooms",
        ],
        materials: [
          { name: "Pile", value: "100% Polyester microfibre" },
          { name: "Backing", value: "Anti-slip dots" },
          { name: "Pile Height", value: "40mm" },
        ],
        faqs: [
          { question: "Can I machine wash this?", answer: "The bedside size can be machine washed on a gentle cycle. Larger sizes should be professionally cleaned." },
          { question: "Does it shed?", answer: "Some initial shedding is normal for shaggy rugs. This will reduce significantly after a few weeks of vacuuming." },
        ],
      },
    ],
  },
  {
    slug: "natural-rugs",
    name: "Natural Rugs",
    description: "Eco-friendly rugs made from natural materials for a sustainable home.",
    heroImage: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=1200&q=80",
    products: [
      {
        sku: "RUG-JUT-001",
        slug: "natural-jute",
        type: "Rug",
        brandName: "Natural Rugs",
        modelName: "Natural Jute Rug",
        description: "A beautiful hand-woven jute rug that brings natural texture and warmth to your bedroom. Eco-friendly and sustainably sourced.",
        shortDescription: "Hand-woven jute rug with natural texture.",
        images: [
          "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
        ],
        sizes: [
          { name: "Small", dimensions: "120 x 170 cm", price: 119 },
          { name: "Medium", dimensions: "160 x 230 cm", price: 189 },
          { name: "Large", dimensions: "200 x 290 cm", price: 279 },
        ],
        color: "Natural",
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        guarantee: "1 year",
        features: [
          "100% natural jute",
          "Hand-woven",
          "Eco-friendly",
          "Sustainable",
          "Natural texture",
          "Biodegradable",
        ],
        materials: [
          { name: "Fibre", value: "100% Jute" },
          { name: "Construction", value: "Hand-woven" },
          { name: "Backing", value: "Cotton canvas" },
        ],
        faqs: [
          { question: "Is jute suitable for bedrooms?", answer: "Yes, jute rugs add wonderful natural texture to bedrooms. They work best in low-traffic areas." },
          { question: "Can it get wet?", answer: "Jute should be kept dry. Clean spills immediately by blotting. Not suitable for bathrooms." },
        ],
      },
      {
        sku: "RUG-WOL-001",
        slug: "pure-wool",
        type: "Rug",
        brandName: "Natural Rugs",
        modelName: "Pure Wool Rug",
        description: "A luxurious hand-tufted wool rug that brings warmth and elegance to your bedroom. Naturally stain-resistant and incredibly durable.",
        shortDescription: "Hand-tufted pure wool rug in classic design.",
        images: [
          "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
        ],
        sizes: [
          { name: "Small", dimensions: "120 x 170 cm", price: 299 },
          { name: "Medium", dimensions: "160 x 230 cm", price: 449 },
          { name: "Large", dimensions: "200 x 290 cm", price: 649 },
        ],
        color: "Cream, Grey, Blue",
        inStoreToTest: true,
        deliveryTimeToShop: "2-3 weeks",
        guarantee: "5 years",
        features: [
          "100% pure wool",
          "Hand-tufted",
          "Naturally stain-resistant",
          "Temperature regulating",
          "Long lasting",
          "Luxurious feel",
        ],
        materials: [
          { name: "Pile", value: "100% New Zealand wool" },
          { name: "Construction", value: "Hand-tufted" },
          { name: "Backing", value: "Cotton with latex" },
          { name: "Pile Height", value: "15mm" },
        ],
        faqs: [
          { question: "How do I care for a wool rug?", answer: "Vacuum regularly with a beater bar turned off. Professional cleaning recommended annually." },
          { question: "Will wool shed?", answer: "Yes, wool rugs shed initially. This is normal and will reduce over time with regular vacuuming." },
        ],
      },
    ],
  },
]

// Helper functions
export function getAllRugBrands(): ProductBrand[] {
  return rugBrands
}

export function getRugBrandBySlug(slug: string): ProductBrand | undefined {
  return rugBrands.find((brand) => brand.slug === slug)
}

export function getRugProductBySlug(brandSlug: string, productSlug: string): Product | undefined {
  const brand = getRugBrandBySlug(brandSlug)
  return brand?.products.find((product) => product.slug === productSlug)
}

export function getAllRugProducts(): Product[] {
  return rugBrands.flatMap((brand) => brand.products)
}
