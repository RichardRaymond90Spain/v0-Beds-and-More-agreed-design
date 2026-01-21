import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium mb-2 tracking-wider uppercase">About Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              At Beds & More We Believe Sleep Is The Ultimate Luxury
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Beds & More, we&apos;ve been providing quality sleep solutions to the Costa del Sol since 2008. Our
                showrooms in Marbella and Mijas Costa showcase the finest selection of beds, mattresses, and furniture.
              </p>
              <p>
                We pride ourselves on offering personalized service and expert advice to help you find the perfect
                products for your home. Our team of sleep experts are always on hand to guide you through our extensive
                range.
              </p>
              <p>
                We exclusively partner with the world&apos;s leading manufacturers including Hypnos, Sealy, FLEX, and
                Pikolin to bring you the highest levels of quality and comfort.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Visit Our Showroom</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/advice">Sleep Advice</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
                    alt="Premium mattress display"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80"
                    alt="Bed base"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=400&q=80"
                    alt="Headboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
                    alt="Bedroom furniture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
