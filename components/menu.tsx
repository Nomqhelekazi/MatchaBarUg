import { Card } from "@/components/ui/card"

const drinks = [
  {
    name: "Japanese Pure Matcha",
    description: "Iced Latte",
    prices: {
      regular: "UGX 18,000",
      almond: "UGX 20,000",
      oat: "UGX 20,500",
    },
    color: "bg-matcha-deep/10 border-matcha-deep border-2",
    gradient: "from-matcha-deep/5 to-matcha-vibrant/5",
  },
  {
    name: "Strawberry Matcha Latte",
    description: "Iced (extra fruit + prep time)",
    prices: {
      regular: "UGX 20,000",
      almond: "UGX 22,000",
      oat: "UGX 22,500",
    },
    badge: "🍓",
    color: "bg-accent-strawberry/15 border-accent-strawberry border-2",
    gradient: "from-accent-strawberry/10 to-matcha-vibrant/10",
  },
  {
    name: "Coffee Matcha",
    description: "Iced (matcha + espresso = premium)",
    prices: {
      regular: "UGX 21,000",
      almond: "UGX 23,000",
      oat: "UGX 23,500",
    },
    badge: "☕",
    color: "bg-accent-coffee/15 border-accent-coffee border-2",
    gradient: "from-accent-coffee/10 to-matcha-deep/10",
  },
]

const addOns = [
  {
    name: "Blueberry Fruit Boba",
    price: "+ UGX 3,000",
    icon: "🫐",
  },
]

const sizes = [
  {
    name: "Regular (16oz)",
    price: "included",
  },
  {
    name: "Large (20oz)",
    price: "+ UGX 2,000",
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-gradient-to-b from-matcha-vibrant/10 via-bg-cream to-matcha-deep/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-matcha-deep via-matcha-vibrant to-matcha-deep bg-clip-text text-transparent">
              {"Our Menu"}
            </h2>
            <p className="text-lg text-muted-foreground font-medium">{"Premium matcha beverages crafted with care"}</p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-matcha-deep">{"Signature Drinks"}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {drinks.map((drink, i) => (
                  <Card
                    key={i}
                    className={`p-6 hover:shadow-2xl hover:shadow-matcha-deep/20 transition-all hover:scale-105 ${drink.color} bg-gradient-to-br ${drink.gradient}`}
                  >
                    <div className="space-y-4">
                      <div>
                        {drink.badge && <span className="text-3xl mb-2 block">{drink.badge}</span>}
                        <h4 className="font-serif text-2xl font-medium mb-1 text-balance">{drink.name}</h4>
                        <p className="text-base text-muted-foreground">{drink.description}</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-border">
                        <div className="flex justify-between text-base">
                          <span className="text-muted-foreground">{"Regular milk"}</span>
                          <span className="font-medium text-primary">{drink.prices.regular}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-muted-foreground">{"Almond milk"}</span>
                          <span className="font-medium text-primary">{drink.prices.almond}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-muted-foreground">{"Oat milk"}</span>
                          <span className="font-medium text-primary">{drink.prices.oat}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-matcha-vibrant">{"Add-Ons"}</h3>
                <div className="space-y-4">
                  {addOns.map((addon, i) => (
                    <Card
                      key={i}
                      className="p-4 bg-gradient-to-r from-accent-blueberry/20 to-matcha-vibrant/15 border-2 border-accent-blueberry hover:shadow-xl hover:shadow-accent-blueberry/20 transition-all hover:scale-105"
                    >
                      <div className="flex items-center justify-between text-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{addon.icon}</span>
                          <span className="font-medium">{addon.name}</span>
                        </div>
                        <span className="font-medium text-accent-blueberry">{addon.price}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-matcha-deep">{"Size Options"}</h3>
                <div className="space-y-4">
                  {sizes.map((size, i) => (
                    <Card
                      key={i}
                      className="p-4 bg-gradient-to-r from-matcha-deep/20 to-matcha-vibrant/15 border-2 border-matcha-deep hover:shadow-xl hover:shadow-matcha-deep/20 transition-all hover:scale-105"
                    >
                      <div className="flex items-center justify-between text-lg">
                        <span className="font-medium">📏 {size.name}</span>
                        <span className="font-medium text-primary">{size.price}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
