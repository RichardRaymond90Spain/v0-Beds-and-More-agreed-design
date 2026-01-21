import type { Product, ProductBrand } from "@/types/product"

export const bedBaseBrands: ProductBrand[] = [
  {
    slug: "hypnos",
    name: "Hypnos",
    description: "Luxury divan bases handcrafted in the UK with premium storage options and matching fabrics.",
    heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    products: [
      {
        sku: "HYP-DIV-001",
        slug: "orthos-divan",
        type: "Bed Base",
        brandName: "Hypnos",
        modelName: "Orthos Divan Base",
        description: "The Hypnos Orthos Divan Base is expertly crafted to complement the Orthos mattress range. Features solid hardwood construction with optional storage drawers and a choice of premium fabric finishes.",
        shortDescription: "Luxury divan base with optional storage, handcrafted in the UK.",
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 599, specialPrice: 449 },
          { name: "Double", dimensions: "135 x 190 cm", price: 799, specialPrice: 599 },
          { name: "King", dimensions: "150 x 200 cm", price: 999, specialPrice: 749 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 1199, specialPrice: 899 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "2-3 weeks",
        guarantee: "10 years",
        features: [
          "Solid hardwood frame",
          "Optional 2 or 4 drawer storage",
          "Premium fabric finishes",
          "Matching headboard available",
          "Easy assembly",
          "Handmade in the UK",
        ],
        materials: [
          { name: "Frame", value: "Solid hardwood construction" },
          { name: "Base", value: "Sprung edge or platform top" },
          { name: "Cover", value: "Choice of premium fabrics" },
          { name: "Castors", value: "Heavy-duty chrome castors" },
        ],
        faqs: [
          { question: "What storage options are available?", answer: "The Orthos Divan is available with no drawers, 2 drawers (continental), or 4 drawers for maximum storage." },
          { question: "Can I choose the fabric?", answer: "Yes, you can choose from a range of premium fabrics to match your bedroom décor." },
        ],
      },
    ],
  },
  {
    slug: "sealy",
    name: "Sealy",
    description: "Durable bed bases designed to maximize mattress performance with practical storage solutions.",
    heroImage: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=1200&q=80",
    products: [
      {
        sku: "SEA-DIV-001",
        slug: "posturepedic-divan",
        type: "Bed Base",
        brandName: "Sealy",
        modelName: "Posturepedic Divan Base",
        description: "Engineered to work perfectly with Sealy Posturepedic mattresses. Features a reinforced platform top for optimal support and practical drawer storage options.",
        shortDescription: "Durable divan base designed for optimal mattress support.",
        images: [
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 399, specialPrice: 239 },
          { name: "Double", dimensions: "135 x 190 cm", price: 549, specialPrice: 329 },
          { name: "King", dimensions: "150 x 200 cm", price: 699, specialPrice: 419 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 849, specialPrice: 509 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        guarantee: "5 years",
        features: [
          "Reinforced platform top",
          "2 or 4 drawer options",
          "Easy-glide drawer runners",
          "Fabric wrapped finish",
          "Robust construction",
          "Designed for Sealy mattresses",
        ],
        materials: [
          { name: "Frame", value: "Engineered wood construction" },
          { name: "Base", value: "Platform top" },
          { name: "Cover", value: "Durable fabric wrap" },
          { name: "Drawers", value: "Metal runner system" },
        ],
        faqs: [
          { question: "Do I need a Sealy mattress with this base?", answer: "While designed for Sealy mattresses, this base works well with any mattress of the same size." },
        ],
      },
    ],
  },
  {
    slug: "premiere",
    name: "Premiere Collection",
    description: "Our exclusive range of storage beds and ottoman bases at exceptional value.",
    heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    products: [
      {
        sku: "PRE-OTT-001",
        slug: "ottoman-storage-base",
        type: "Storage Bed",
        brandName: "Premiere",
        modelName: "Ottoman Storage Base",
        description: "Maximize your bedroom storage with our popular ottoman base. The gas-lift mechanism provides easy access to a huge storage space, perfect for bedding, seasonal items, and more.",
        shortDescription: "Gas-lift ottoman base with massive storage capacity.",
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 349, specialPrice: 276 },
          { name: "Double", dimensions: "135 x 190 cm", price: 449, specialPrice: 355 },
          { name: "King", dimensions: "150 x 200 cm", price: 549, specialPrice: 434 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 649, specialPrice: 513 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        guarantee: "5 years",
        features: [
          "Gas-lift mechanism",
          "Full bed storage access",
          "Fabric upholstered finish",
          "Strong base board",
          "Easy assembly",
          "Exclusive to Beds & More",
        ],
        materials: [
          { name: "Frame", value: "Engineered wood" },
          { name: "Mechanism", value: "Heavy-duty gas struts" },
          { name: "Cover", value: "Upholstered fabric" },
          { name: "Base", value: "Solid platform" },
        ],
        faqs: [
          { question: "How much can the ottoman hold?", answer: "The ottoman can support significant weight. The king size offers approximately 1.2 cubic meters of storage space." },
          { question: "Is assembly required?", answer: "Yes, some assembly is required but full instructions are provided. We can also arrange assembly for an additional fee." },
        ],
      },
      {
        sku: "PRE-SHW-001",
        slug: "shallow-divan",
        type: "Bed Base",
        brandName: "Premiere",
        modelName: "Shallow Divan Base",
        description: "A lower profile divan base ideal for use with deeper mattresses or for those who prefer a lower bed height. Available with optional drawers.",
        shortDescription: "Lower profile divan for deeper mattresses.",
        images: [
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 249 },
          { name: "Double", dimensions: "135 x 190 cm", price: 349 },
          { name: "King", dimensions: "150 x 200 cm", price: 449 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 549 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1 week",
        guarantee: "3 years",
        features: [
          "Low profile design",
          "Optional drawers",
          "Platform top",
          "Fabric wrapped",
          "Good value",
          "Quick delivery",
        ],
        materials: [
          { name: "Frame", value: "Engineered wood" },
          { name: "Base", value: "Platform top" },
          { name: "Cover", value: "Fabric wrap" },
        ],
        faqs: [
          { question: "What is the height of this base?", answer: "The shallow divan is approximately 20cm high, compared to 35-40cm for standard divans." },
        ],
      },
    ],
  },
]

// Helper functions
export function getAllBedBaseBrands(): ProductBrand[] {
  return bedBaseBrands
}

export function getBedBaseBrandBySlug(slug: string): ProductBrand | undefined {
  return bedBaseBrands.find((brand) => brand.slug === slug)
}

export function getBedBaseProductBySlug(brandSlug: string, productSlug: string): Product | undefined {
  const brand = getBedBaseBrandBySlug(brandSlug)
  return brand?.products.find((product) => product.slug === productSlug)
}

export function getAllBedBaseProducts(): Product[] {
  return bedBaseBrands.flatMap((brand) => brand.products)
}
