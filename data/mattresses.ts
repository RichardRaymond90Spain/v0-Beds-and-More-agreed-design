export interface MattressSize {
  name: string
  dimensions: string
  price: number
  specialPrice?: number
}

export interface MattressProduct {
  sku: string
  slug: string
  brandName: string
  modelName: string
  description: string
  shortDescription: string
  images: string[]
  sizes: MattressSize[]
  inStoreToTest: boolean
  deliveryTimeToShop: string
  comfort: string
  guarantee: string
  features: string[]
  materials: { name: string; value: string }[]
  faqs: { question: string; answer: string }[]
}

export interface MattressBrand {
  slug: string
  name: string
  description: string
  heroImage: string
  products: MattressProduct[]
}

export const mattressBrands: MattressBrand[] = [
  {
    slug: "hypnos",
    name: "Hypnos",
    description: "The most comfortable beds in the world. Hypnos is the exclusive bed maker to Her Majesty The Queen, crafting luxury mattresses with sustainable, natural materials for over 100 years.",
    heroImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    products: [
      {
        sku: "HYP-ORTHOS-001",
        slug: "orthos-support",
        brandName: "Hypnos",
        modelName: "Orthos Support",
        description: "The Hypnos Orthos Support mattress offers superior orthopaedic support combined with luxurious natural fillings. Designed for those who need extra support without compromising on comfort, this mattress features a unique pocket spring system that responds to your body's contours while maintaining perfect spinal alignment throughout the night.",
        shortDescription: "Superior orthopaedic support with natural fillings for the perfect night's sleep.",
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
          "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 1299, specialPrice: 1039 },
          { name: "Double", dimensions: "135 x 190 cm", price: 1699, specialPrice: 1359 },
          { name: "King", dimensions: "150 x 200 cm", price: 1999, specialPrice: 1599 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 2299, specialPrice: 1839 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "2-3 weeks",
        comfort: "Firm",
        guarantee: "10 years",
        features: [
          "ReActive™ pocket springs for targeted support",
          "Hand-teased British wool and cotton",
          "Temperature regulating properties",
          "Hypoallergenic materials",
          "Hand-tufted for durability",
          "Chemical-free fire retardant",
        ],
        materials: [
          { name: "Springs", value: "ReActive™ 6-turn pocket springs" },
          { name: "Comfort Layer", value: "British wool, cotton, and cashmere blend" },
          { name: "Cover", value: "Belgian damask ticking" },
          { name: "Fire Retardant", value: "Natural wool" },
        ],
        faqs: [
          { question: "How firm is this mattress?", answer: "The Orthos Support is rated as firm, ideal for those who need extra support or prefer sleeping on their back. However, the natural fillings provide a comfortable sleeping surface." },
          { question: "Is this mattress suitable for back pain?", answer: "Yes, the Orthos Support is specifically designed for orthopaedic support and is often recommended for those with back issues. The firm support helps maintain proper spinal alignment." },
          { question: "What's the weight capacity?", answer: "This mattress is suitable for combined weights up to 25 stone (158kg) for double sizes and above." },
          { question: "Does it need to be turned?", answer: "This is a single-sided mattress that should be rotated head-to-toe every few weeks for even wear." },
        ],
      },
      {
        sku: "HYP-WOOL-002",
        slug: "wool-origins",
        brandName: "Hypnos",
        modelName: "Wool Origins",
        description: "The Hypnos Wool Origins is a sustainable masterpiece, crafted with 100% British wool and organic cotton. This eco-conscious mattress delivers exceptional comfort while minimizing environmental impact. The natural temperature-regulating properties of wool ensure you stay comfortable all year round.",
        shortDescription: "Sustainable mattress crafted with British wool and organic cotton.",
        images: [
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
          "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 1499 },
          { name: "Double", dimensions: "135 x 190 cm", price: 1899 },
          { name: "King", dimensions: "150 x 200 cm", price: 2199 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 2499 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "3-4 weeks",
        comfort: "Medium",
        guarantee: "10 years",
        features: [
          "100% British wool filling",
          "Organic cotton cover",
          "Carbon neutral production",
          "Naturally fire retardant",
          "Biodegradable materials",
          "Hand-made in the UK",
        ],
        materials: [
          { name: "Springs", value: "Pocket springs from recycled steel" },
          { name: "Comfort Layer", value: "100% British wool" },
          { name: "Cover", value: "Organic cotton" },
          { name: "Fire Retardant", value: "Natural wool (no chemicals)" },
        ],
        faqs: [
          { question: "Is this mattress eco-friendly?", answer: "Yes, the Wool Origins is one of the most sustainable mattresses available. It's carbon neutral, made from renewable materials, and fully biodegradable at end of life." },
          { question: "Will wool make me hot?", answer: "No, wool is naturally temperature regulating. It wicks moisture away and keeps you cool in summer and warm in winter." },
          { question: "Is it suitable for allergy sufferers?", answer: "Yes, wool is naturally hypoallergenic and resistant to dust mites." },
        ],
      },
    ],
  },
  {
    slug: "sealy",
    name: "Sealy",
    description: "Backed by science, loved by millions. Sealy has been perfecting the science of sleep for over 140 years, developing innovative technologies like Posturepedic support to ensure you wake up feeling refreshed.",
    heroImage: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=1200&q=80",
    products: [
      {
        sku: "SEA-POST-001",
        slug: "posturepedic-elite",
        brandName: "Sealy",
        modelName: "Posturepedic Elite",
        description: "The Sealy Posturepedic Elite features the advanced PostureTech™ coil system, engineered to provide targeted support exactly where your body needs it most. The reinforced center third ensures proper spinal alignment while the comfort layers provide pressure relief for a truly restorative sleep.",
        shortDescription: "Advanced PostureTech coil system provides targeted support where you need it most.",
        images: [
          "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 899, specialPrice: 539 },
          { name: "Double", dimensions: "135 x 190 cm", price: 1199, specialPrice: 719 },
          { name: "King", dimensions: "150 x 200 cm", price: 1399, specialPrice: 839 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 1599, specialPrice: 959 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        comfort: "Medium-Firm",
        guarantee: "5 years",
        features: [
          "PostureTech™ coil technology",
          "Reinforced center support",
          "Gel-infused memory foam",
          "Moisture-wicking cover",
          "Edge support system",
          "Low motion transfer",
        ],
        materials: [
          { name: "Springs", value: "PostureTech™ innerspring system" },
          { name: "Comfort Layer", value: "Gel-infused memory foam" },
          { name: "Support", value: "High-density foam encasement" },
          { name: "Cover", value: "Moisture-wicking knit fabric" },
        ],
        faqs: [
          { question: "What is PostureTech technology?", answer: "PostureTech is Sealy's proprietary coil system that provides extra support in the center third of the mattress where your body needs it most, promoting proper spinal alignment." },
          { question: "Does this mattress sleep hot?", answer: "No, the gel-infused memory foam and moisture-wicking cover help regulate temperature throughout the night." },
          { question: "Is this good for couples?", answer: "Yes, the low motion transfer means you won't disturb your partner when moving during the night." },
        ],
      },
      {
        sku: "SEA-HYBRID-002",
        slug: "hybrid-performance",
        brandName: "Sealy",
        modelName: "Hybrid Performance",
        description: "The Sealy Hybrid Performance combines the best of both worlds: responsive innerspring support with pressure-relieving memory foam. This versatile mattress suits all sleeping positions and provides the perfect balance of comfort and support.",
        shortDescription: "The perfect combination of innerspring support and memory foam comfort.",
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
          "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 799, specialPrice: 479 },
          { name: "Double", dimensions: "135 x 190 cm", price: 1099, specialPrice: 659 },
          { name: "King", dimensions: "150 x 200 cm", price: 1299, specialPrice: 779 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 1499, specialPrice: 899 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        comfort: "Medium",
        guarantee: "5 years",
        features: [
          "Hybrid spring and foam design",
          "Adaptive memory foam",
          "Reinforced edge support",
          "Breathable quilted cover",
          "All sleeping positions",
          "Excellent value",
        ],
        materials: [
          { name: "Springs", value: "Encased coil system" },
          { name: "Comfort Layer", value: "Adaptive memory foam" },
          { name: "Support", value: "High-density base foam" },
          { name: "Cover", value: "Breathable quilted fabric" },
        ],
        faqs: [
          { question: "What sleeping position is this best for?", answer: "The Hybrid Performance suits all sleeping positions - back, side, and front sleepers will all find it comfortable." },
          { question: "How does it compare to a pure memory foam mattress?", answer: "The hybrid design gives you the contouring comfort of memory foam with the responsive support of springs, preventing the 'stuck' feeling some people experience with all-foam mattresses." },
        ],
      },
    ],
  },
  {
    slug: "flex",
    name: "FLEX",
    description: "Spanish innovation meets superior comfort. FLEX has been Spain's leading mattress manufacturer for over 100 years, combining traditional craftsmanship with cutting-edge sleep technology.",
    heroImage: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=1200&q=80",
    products: [
      {
        sku: "FLX-NUBE-001",
        slug: "nube-visco",
        brandName: "FLEX",
        modelName: "Nube Visco",
        description: "The FLEX Nube Visco offers cloud-like comfort with its premium viscoelastic foam layers. Advanced temperature regulation technology ensures optimal sleep temperature while the adaptive foam contours perfectly to your body shape for personalized support.",
        shortDescription: "Premium memory foam mattress with advanced temperature regulation technology.",
        images: [
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
          "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 699 },
          { name: "Double", dimensions: "135 x 190 cm", price: 899 },
          { name: "King", dimensions: "150 x 200 cm", price: 1099 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 1299 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1-2 weeks",
        comfort: "Medium-Soft",
        guarantee: "5 years",
        features: [
          "Viscoelastic foam technology",
          "Temperature regulation",
          "Pressure point relief",
          "Anti-dust mite treatment",
          "Removable washable cover",
          "Made in Spain",
        ],
        materials: [
          { name: "Core", value: "High-resilience foam" },
          { name: "Comfort Layer", value: "Viscoelastic memory foam" },
          { name: "Cover", value: "Stretch fabric with Sanitized treatment" },
          { name: "Base", value: "Firm support foam" },
        ],
        faqs: [
          { question: "Is viscoelastic the same as memory foam?", answer: "Yes, viscoelastic foam is another name for memory foam. FLEX uses premium viscoelastic that responds to your body heat and weight." },
          { question: "Will this mattress make me hot?", answer: "The Nube Visco features advanced temperature regulation technology to prevent overheating, a common concern with memory foam mattresses." },
        ],
      },
    ],
  },
  {
    slug: "pikolin",
    name: "Pikolin",
    description: "Quality rest for everyone. Pikolin is one of Europe's largest mattress manufacturers, offering exceptional quality and comfort at accessible price points. Every mattress is designed and manufactured in Spain.",
    heroImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    products: [
      {
        sku: "PIK-NORM-001",
        slug: "normablock",
        brandName: "Pikolin",
        modelName: "Normablock",
        description: "The Pikolin Normablock combines traditional pocket spring construction with modern comfort layers for a tried-and-tested sleep solution. This reliable mattress offers excellent support and durability at an exceptional value.",
        shortDescription: "Traditional pocket spring construction with modern comfort layers.",
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
          "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 449 },
          { name: "Double", dimensions: "135 x 190 cm", price: 599 },
          { name: "King", dimensions: "150 x 200 cm", price: 749 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 899 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "1 week",
        comfort: "Medium-Firm",
        guarantee: "3 years",
        features: [
          "Normablock spring system",
          "Reinforced edges",
          "Breathable construction",
          "Hypoallergenic treatment",
          "Excellent durability",
          "Great value",
        ],
        materials: [
          { name: "Springs", value: "Normablock bonnel spring unit" },
          { name: "Comfort Layer", value: "Polyester fiber padding" },
          { name: "Cover", value: "Damask fabric" },
          { name: "Support", value: "Foam perimeter" },
        ],
        faqs: [
          { question: "What is Normablock?", answer: "Normablock is Pikolin's classic spring system that provides reliable, even support across the mattress surface. It's a proven technology used for decades." },
          { question: "Is this suitable for heavier people?", answer: "Yes, the Normablock system provides firm, durable support suitable for all body types." },
        ],
      },
    ],
  },
  {
    slug: "premiere",
    name: "Premiere Collection",
    description: "Our exclusive in-house collection. The Premiere Collection represents the very best of Beds & More, featuring handcrafted mattresses made to our exact specifications using premium materials sourced from across Europe.",
    heroImage: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=1200&q=80",
    products: [
      {
        sku: "PRE-LUX-001",
        slug: "luxury-pillowtop",
        brandName: "Premiere",
        modelName: "Luxury Pillowtop",
        description: "The Premiere Luxury Pillowtop is our flagship mattress, featuring an extra-deep pillowtop layer for ultimate comfort. Hand-tufted with premium natural fillings, this mattress offers hotel-quality sleep in your own home.",
        shortDescription: "Our exclusive handcrafted mattress with premium natural materials.",
        images: [
          "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
          "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
        ],
        sizes: [
          { name: "Single", dimensions: "90 x 190 cm", price: 799, specialPrice: 631 },
          { name: "Double", dimensions: "135 x 190 cm", price: 999, specialPrice: 789 },
          { name: "King", dimensions: "150 x 200 cm", price: 1199, specialPrice: 947 },
          { name: "Super King", dimensions: "180 x 200 cm", price: 1399, specialPrice: 1105 },
        ],
        inStoreToTest: true,
        deliveryTimeToShop: "2-3 weeks",
        comfort: "Medium",
        guarantee: "7 years",
        features: [
          "Extra-deep pillowtop",
          "Hand-tufted finish",
          "Natural wool and cotton",
          "Pocket spring system",
          "Exclusive to Beds & More",
          "Made to order",
        ],
        materials: [
          { name: "Springs", value: "1000 pocket springs (king size)" },
          { name: "Pillowtop", value: "Wool, cotton, and foam blend" },
          { name: "Comfort Layer", value: "Natural fiber mix" },
          { name: "Cover", value: "Belgian damask" },
        ],
        faqs: [
          { question: "Why is this exclusive to Beds & More?", answer: "We work directly with manufacturers to create mattresses to our exact specifications, cutting out the middleman to offer premium quality at better prices." },
          { question: "How does the 21% discount work?", answer: "The Premiere Collection is currently 21% off as part of our ongoing promotion. The discount is already applied to the special price shown." },
        ],
      },
    ],
  },
]

// Helper functions
export function getAllBrands(): MattressBrand[] {
  return mattressBrands
}

export function getBrandBySlug(slug: string): MattressBrand | undefined {
  return mattressBrands.find((brand) => brand.slug === slug)
}

export function getProductBySlug(brandSlug: string, productSlug: string): MattressProduct | undefined {
  const brand = getBrandBySlug(brandSlug)
  return brand?.products.find((product) => product.slug === productSlug)
}

export function getAllProducts(): MattressProduct[] {
  return mattressBrands.flatMap((brand) => brand.products)
}

export function getProductsByComfort(comfort: string): MattressProduct[] {
  return getAllProducts().filter((product) => product.comfort.toLowerCase() === comfort.toLowerCase())
}

export function getInStoreProducts(): MattressProduct[] {
  return getAllProducts().filter((product) => product.inStoreToTest)
}

export function getBrandLowestPrice(brand: MattressBrand): number {
  let lowest = Infinity
  for (const product of brand.products) {
    for (const size of product.sizes) {
      const price = size.specialPrice ?? size.price
      if (price < lowest) lowest = price
    }
  }
  return lowest === Infinity ? 0 : lowest
}

export function brandHasInStoreProducts(brand: MattressBrand): boolean {
  return brand.products.some((p) => p.inStoreToTest)
}

export function getBrandDeliveryRange(brand: MattressBrand): string {
  const times = brand.products.map((p) => p.deliveryTimeToShop)
  if (times.length === 0) return ""
  return times[0]
}

export function getFeaturedProducts(): MattressProduct[] {
  // Return a mix of popular products from different brands
  const all = getAllProducts()
  return all.slice(0, 6)
}
