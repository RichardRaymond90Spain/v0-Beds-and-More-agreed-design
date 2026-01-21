import { Check } from "lucide-react"

const guarantees = [
  {
    title: "Price Promise",
    description: "Find the same mattress locally and at a cheaper price - We will beat the price!",
  },
  {
    title: "No Quibble Exchange!",
    description: "Exchange a new mattress up to 14 days after purchase.",
  },
  {
    title: "Quality Assured!",
    description: "All of our new mattresses carry a MINIMUM 2 year warranty.",
  },
]

export function SatisfactionGuarantee() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2 tracking-wider uppercase">Our Promise</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Satisfaction Guarantee</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Buy your new mattress with confidence from Beds & More and take advantage of our unique satisfaction
              guarantee...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 bg-background rounded-lg">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
