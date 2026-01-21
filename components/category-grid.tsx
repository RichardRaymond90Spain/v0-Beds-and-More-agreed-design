import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Mattresses",
    href: "/mattresses",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
  },
  {
    name: "Bed Bases",
    href: "/bed-bases",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80",
  },
  {
    name: "Headboards",
    href: "/headboards",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=400&q=80",
  },
  {
    name: "Furniture",
    href: "/furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  },
  {
    name: "Rugs",
    href: "/rugs",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&q=80",
  },
  {
    name: "Complete Beds",
    href: "/complete-beds",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wider uppercase">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect sleep solution from our carefully curated range of premium beds, mattresses, and
            bedroom furniture.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-accent transition-all duration-300">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm md:text-base group-hover:text-accent transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
