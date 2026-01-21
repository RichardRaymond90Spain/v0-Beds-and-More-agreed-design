import type { Product, ProductBrand } from "@/types/product"

export const headboardBrands: ProductBrand[] = [
  {
    slug: "hypnos",
    name: "Hypnos",
    description: "Handcrafted headboards to complement your Hypnos bed, available in a wide range of fabrics and styles.",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
    products: [
      {
        sku: "HYP-HD-001",
        slug: "grace-headboard",
        type: "Headboard",
        brandName: "Hypnos",
        modelName: "Grace Headboard",
        description: "The elegant Grace headboard features deep buttoning and a curved top for a classic look. Available in a wide range of premium fabrics to match your Hypnos divan.",
        shortDescription: "Classic buttoned headboard with curved top design.",
        images: [
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 cm", price: 399, specialPrice: 299 },
          { name: "Double", dimensions: "135 cm", price: 499, specialPrice: 374 },
          { name: "King", dimensions: "150 cm", price: 599, specialPrice: 449 },
          { name: "Super King", dimensions: "180 cm", price: 699, specialPrice: 524 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "2-3 weeks",
        guarantee: "10 years",
        features: [
          "Deep buttoned design",
          "Curved top profile",
          "Wide fabric selection",
          "Wall mounted or floor standing",
          "Handcrafted in the UK",
          "Made to match divan",
        ],
        materials: [
          { name: "Frame", value: "Solid wood frame" },
          { name: "Padding", value: "High-density foam" },
          { name: "Cover", value: "Premium upholstery fabric" },
          { name: "Buttons", value: "Fabric covered" },
        ],
        faqs: [
          { question: "Can I choose any fabric?", answer: "Yes, you can choose from the full Hypnos fabric range to match or complement your divan base." },
          { question: "How is it attached?", answer: "The Grace can be wall mounted or attached to struts that slot into your divan base." },
        ],
      },
      {
        sku: "HYP-HD-002",
        slug: "harriet-headboard",
        type: "Headboard",
        brandName: "Hypnos",
        modelName: "Harriet Headboard",
        description: "A contemporary winged headboard that creates a stunning focal point. The Harriet features vertical fluting and a generous height for comfort when sitting up in bed.",
        shortDescription: "Contemporary winged headboard with vertical fluting.",
        images: [
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
        ],
        sizes: [
          { name: "Double", dimensions: "135 cm", price: 699, specialPrice: 524 },
          { name: "King", dimensions: "150 cm", price: 799, specialPrice: 599 },
          { name: "Super King", dimensions: "180 cm", price: 899, specialPrice: 674 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "3-4 weeks",
        guarantee: "10 years",
        features: [
          "Winged design",
          "Vertical fluting detail",
          "Extra tall for comfort",
          "Wide fabric selection",
          "Handcrafted in the UK",
          "Statement piece",
        ],
        materials: [
          { name: "Frame", value: "Solid wood frame" },
          { name: "Padding", value: "High-density foam" },
          { name: "Cover", value: "Premium upholstery fabric" },
        ],
        faqs: [
          { question: "What is the height?", answer: "The Harriet stands approximately 130cm tall, making it a stunning focal point in any bedroom." },
        ],
      },
    ],
  },
  {
    slug: "premiere",
    name: "Premiere Collection",
    description: "Our exclusive range of stylish headboards at exceptional value, available in various designs and fabrics.",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
    products: [
      {
        sku: "PRE-HD-001",
        slug: "victoria-headboard",
        type: "Headboard",
        brandName: "Premiere",
        modelName: "Victoria Headboard",
        description: "A classic panel headboard with elegant border stitching. The Victoria offers timeless style at an accessible price point.",
        shortDescription: "Classic panel headboard with elegant stitching.",
        images: [
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 cm", price: 149, specialPrice: 118 },
          { name: "Double", dimensions: "135 cm", price: 199, specialPrice: 157 },
          { name: "King", dimensions: "150 cm", price: 249, specialPrice: 197 },
          { name: "Super King", dimensions: "180 cm", price: 299, specialPrice: 236 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        guarantee: "5 years",
        features: [
          "Panel design",
          "Border stitching",
          "Multiple colours",
          "Floor standing",
          "Easy assembly",
          "Great value",
        ],
        materials: [
          { name: "Frame", value: "Engineered wood" },
          { name: "Padding", value: "Foam padding" },
          { name: "Cover", value: "Fabric upholstery" },
        ],
        faqs: [
          { question: "What colours are available?", answer: "The Victoria is available in grey, cream, charcoal, and silver fabric options." },
        ],
      },
      {
        sku: "PRE-HD-002",
        slug: "diamante-headboard",
        type: "Headboard",
        brandName: "Premiere",
        modelName: "Diamante Headboard",
        description: "Add a touch of glamour with our Diamante headboard featuring crystal-effect buttons. Available in crushed velvet for maximum impact.",
        shortDescription: "Glamorous headboard with crystal-effect buttons.",
        images: [
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
        ],
        sizes: [
          { name: "Double", dimensions: "135 cm", price: 249, specialPrice: 197 },
          { name: "King", dimensions: "150 cm", price: 299, specialPrice: 236 },
          { name: "Super King", dimensions: "180 cm", price: 349, specialPrice: 276 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        guarantee: "3 years",
        features: [
          "Crystal-effect buttons",
          "Crushed velvet finish",
          "Statement piece",
          "Floor standing",
          "Glamorous design",
          "Exclusive to Beds & More",
        ],
        materials: [
          { name: "Frame", value: "Engineered wood" },
          { name: "Padding", value: "Foam padding" },
          { name: "Cover", value: "Crushed velvet" },
          { name: "Buttons", value: "Crystal-effect acrylic" },
        ],
        faqs: [
          { question: "Is the crushed velvet easy to clean?", answer: "Yes, simply brush the velvet gently with a soft brush. For marks, use a slightly damp cloth." },
        ],
      },
    ],
  },
]

// Helper functions
export function getAllHeadboardBrands(): ProductBrand[] {
  return headboardBrands
}

export function getHeadboardBrandBySlug(slug: string): ProductBrand | undefined {
  return headboardBrands.find((brand) => brand.slug === slug)
}

export function getHeadboardProductBySlug(brandSlug: string, productSlug: string): Product | undefined {
  const brand = getHeadboardBrandBySlug(brandSlug)
  return brand?.products.find((product) => product.slug === productSlug)
}

export function getAllHeadboardProducts(): Product[] {
  return headboardBrands.flatMap((brand) => brand.products)
}
