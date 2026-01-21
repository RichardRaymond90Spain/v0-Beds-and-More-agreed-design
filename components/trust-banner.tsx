import { Truck, Star, Clock, Shield } from "lucide-react"

const trustItems = [
  {
    icon: Truck,
    title: "Delivery Available",
    description: "Across Costa del Sol",
  },
  {
    icon: Star,
    title: "Exceptionally Rated",
    description: "5-Star Customer Service",
  },
  {
    icon: Clock,
    title: "Since 2008",
    description: "Trusted for 17+ Years",
  },
  {
    icon: Shield,
    title: "Price Promise",
    description: "We Won't Be Beaten",
  },
]

export function TrustBanner() {
  return (
    <div className="bg-secondary py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3 justify-center">
              <item.icon className="h-6 w-6 text-accent flex-shrink-0" />
              <div className="text-center md:text-left">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground hidden sm:block">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
