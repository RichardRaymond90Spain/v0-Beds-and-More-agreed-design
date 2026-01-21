import Image from "next/image"

const brands = [
  {
    name: "Sealy",
    logo: "/images/image.png",
    description: "Innovative sleep technology for ultimate comfort",
  },
  {
    name: "Hypnos",
    logo: "/images/image.png",
    description: "The most comfortable beds in the world",
  },
  {
    name: "FLEX",
    logo: "/images/image.png",
    description: "Spanish craftsmanship and innovation",
  },
  {
    name: "Pikolin",
    logo: "/images/image.png",
    description: "Premium quality sleep solutions",
  },
]

export function BrandShowcase() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wider uppercase">Trusted Brands</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Premium Quality Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with the world&apos;s leading bed and mattress manufacturers to bring you exceptional quality and
            comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center text-center p-6 bg-background rounded-lg">
              <div className="h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-primary">{brand.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
