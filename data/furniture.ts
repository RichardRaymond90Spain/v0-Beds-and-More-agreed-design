import type { Product, ProductBrand } from "@/types/product"

export const furnitureBrands: ProductBrand[] = [
  {
    slug: "bedroom-furniture",
    name: "Bedroom Furniture",
    description: "Quality bedroom furniture including bedside tables, chests of drawers, and wardrobes.",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    products: [
      {
        sku: "FUR-BS-001",
        slug: "classic-bedside-table",
        type: "Furniture",
        brandName: "Bedroom Furniture",
        modelName: "Classic Bedside Table",
        description: "A timeless bedside table with two drawers, perfect for keeping your essentials within reach. Crafted from solid wood with a choice of finishes.",
        shortDescription: "Classic two-drawer bedside table in solid wood.",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        ],
        sizes: [
          { name: "Standard", dimensions: "45 x 40 x 55 cm" },
        ],
        color: "Oak, Walnut, White",
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        guarantee: "2 years",
        features: [
          "Two soft-close drawers",
          "Solid wood construction",
          "Multiple finish options",
          "Classic design",
          "Easy assembly",
          "Matching furniture available",
        ],
        materials: [
          { name: "Frame", value: "Solid wood" },
          { name: "Drawers", value: "Dovetail joints, soft-close runners" },
          { name: "Finish", value: "Lacquered wood" },
        ],
        faqs: [
          { question: "Is assembly required?", answer: "Minimal assembly required - just attach the legs. Full instructions included." },
          { question: "Can I order matching furniture?", answer: "Yes, we have a matching chest of drawers and wardrobe available." },
        ],
      },
      {
        sku: "FUR-CD-001",
        slug: "wide-chest-drawers",
        type: "Furniture",
        brandName: "Bedroom Furniture",
        modelName: "Wide Chest of Drawers",
        description: "A spacious chest of drawers with six drawers for ample storage. Features solid wood construction and soft-close drawer runners.",
        shortDescription: "Spacious six-drawer chest with soft-close runners.",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        ],
        sizes: [
          { name: "Standard", dimensions: "120 x 45 x 80 cm" },
        ],
        color: "Oak, Walnut, White",
        inStoreToTest: true,
        deliveryTimeToShop: "2-3 weeks",
        guarantee: "2 years",
        features: [
          "Six spacious drawers",
          "Soft-close runners",
          "Solid wood construction",
          "Multiple finish options",
          "Sturdy design",
          "Matching range available",
        ],
        materials: [
          { name: "Frame", value: "Solid wood" },
          { name: "Drawers", value: "Dovetail joints, soft-close runners" },
          { name: "Top", value: "Solid wood" },
          { name: "Finish", value: "Lacquered" },
        ],
        faqs: [
          { question: "How heavy is this piece?", answer: "The chest weighs approximately 45kg. We recommend two people for assembly and positioning." },
        ],
      },
      {
        sku: "FUR-WD-001",
        slug: "double-wardrobe",
        type: "Furniture",
        brandName: "Bedroom Furniture",
        modelName: "Double Wardrobe",
        description: "A classic double wardrobe with hanging space and internal shelving. Features solid wood doors with soft-close hinges.",
        shortDescription: "Classic double wardrobe with hanging and shelf space.",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        ],
        sizes: [
          { name: "Standard", dimensions: "110 x 60 x 200 cm" },
        ],
        color: "Oak, Walnut, White",
        inStoreToTest: false,
        deliveryTimeToShop: "3-4 weeks",
        guarantee: "2 years",
        features: [
          "Double hanging space",
          "Internal shelving",
          "Soft-close doors",
          "Solid wood construction",
          "Multiple finishes",
          "Matching range",
        ],
        materials: [
          { name: "Frame", value: "Solid wood and MDF" },
          { name: "Doors", value: "Solid wood with soft-close hinges" },
          { name: "Interior", value: "Adjustable shelves" },
          { name: "Finish", value: "Lacquered" },
        ],
        faqs: [
          { question: "Is professional assembly available?", answer: "Yes, we offer professional assembly and installation. Please ask for details." },
          { question: "Can it be wall mounted?", answer: "We recommend securing tall furniture to the wall for safety. Fixings are included." },
        ],
      },
    ],
  },
  {
    slug: "occasional",
    name: "Occasional Furniture",
    description: "Accent pieces and occasional furniture to complete your bedroom.",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    products: [
      {
        sku: "FUR-BN-001",
        slug: "blanket-box",
        type: "Furniture",
        brandName: "Occasional",
        modelName: "Ottoman Blanket Box",
        description: "A versatile ottoman blanket box that doubles as extra seating. Perfect for storing spare bedding, cushions, or seasonal items.",
        shortDescription: "Versatile blanket box with upholstered top.",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        ],
        sizes: [
          { name: "Standard", dimensions: "90 x 45 x 45 cm" },
        ],
        color: "Grey, Cream, Charcoal",
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        guarantee: "2 years",
        features: [
          "Upholstered lid",
          "Ample storage",
          "Can be used as seating",
          "Multiple fabrics",
          "Soft-close hinge",
          "Sturdy construction",
        ],
        materials: [
          { name: "Frame", value: "Engineered wood" },
          { name: "Lid", value: "Foam padded, upholstered" },
          { name: "Hinge", value: "Soft-close safety hinge" },
        ],
        faqs: [
          { question: "Can this be used as a seat?", answer: "Yes, the padded top is designed to support sitting. Maximum weight capacity is 120kg." },
        ],
      },
    ],
  },
]

// Helper functions
export function getAllFurnitureBrands(): ProductBrand[] {
  return furnitureBrands
}

export function getFurnitureBrandBySlug(slug: string): ProductBrand | undefined {
  return furnitureBrands.find((brand) => brand.slug === slug)
}

export function getFurnitureProductBySlug(brandSlug: string, productSlug: string): Product | undefined {
  const brand = getFurnitureBrandBySlug(brandSlug)
  return brand?.products.find((product) => product.slug === productSlug)
}

export function getAllFurnitureProducts(): Product[] {
  return furnitureBrands.flatMap((brand) => brand.products)
}
