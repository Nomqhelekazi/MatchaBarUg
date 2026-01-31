"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Minus, Plus, ShoppingCart, Trash2, MessageCircle } from "lucide-react"

const drinks = [
  {
    id: "pure-matcha",
    name: "Japanese Pure Matcha",
    description: "Iced Latte",
    prices: {
      regular: 18000,
      almond: 20000,
      oat: 20500,
    },
    color: "bg-matcha-deep/10 border-matcha-deep border-2",
    gradient: "from-matcha-deep/5 to-matcha-vibrant/5",
  },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha Latte",
    description: "Iced (extra fruit + prep time)",
    prices: {
      regular: 20000,
      almond: 22000,
      oat: 22500,
    },
    badge: "🍓",
    color: "bg-accent-strawberry/15 border-accent-strawberry border-2",
    gradient: "from-accent-strawberry/10 to-matcha-vibrant/10",
  },
  {
    id: "coffee-matcha",
    name: "Coffee Matcha",
    description: "Iced (matcha + espresso = premium)",
    prices: {
      regular: 21000,
      almond: 23000,
      oat: 23500,
    },
    badge: "☕",
    color: "bg-accent-coffee/15 border-accent-coffee border-2",
    gradient: "from-accent-coffee/10 to-matcha-deep/10",
  },
]

type MilkType = "regular" | "almond" | "oat"
type SizeType = "regular" | "large"

interface CartItem {
  id: string
  drinkId: string
  drinkName: string
  quantity: number
  milk: MilkType
  size: SizeType
  price: number
}

export function InteractiveMenu() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null)
  const [selectedMilk, setSelectedMilk] = useState<MilkType>("regular")
  const [selectedSize, setSelectedSize] = useState<SizeType>("regular")

  const calculatePrice = (drinkId: string, milk: MilkType, size: SizeType) => {
    const drink = drinks.find((d) => d.id === drinkId)
    if (!drink) return 0

    let price = drink.prices[milk]
    if (size === "large") price += 2000

    return price
  }

  const addToCart = (drinkId: string) => {
    const drink = drinks.find((d) => d.id === drinkId)
    if (!drink) return

    const price = calculatePrice(drinkId, selectedMilk, selectedSize)

    const newItem: CartItem = {
      id: Date.now().toString(),
      drinkId,
      drinkName: drink.name,
      quantity: 1,
      milk: selectedMilk,
      size: selectedSize,
      price,
    }

    setCart([...cart, newItem])
    // Reset selections
    setSelectedDrink(null)
    setSelectedMilk("regular")
    setSelectedSize("regular")
  }

  const updateQuantity = (id: string, delta: number) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null),
    )
  }

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const formatPrice = (price: number) => {
    return `UGX ${price.toLocaleString()}`
  }

  const getMilkLabel = (milk: MilkType) => {
    const labels = { regular: "Regular Milk", almond: "Almond Milk", oat: "Oat Milk" }
    return labels[milk]
  }

  const getSizeLabel = (size: SizeType) => {
    return size === "regular" ? "Regular (16oz)" : "Large (20oz)"
  }

  const generateWhatsAppMessage = () => {
    let message = "Hi! I'd like to place an order from MATCHA BAR 💚\n\n"
    message += "ORDER DETAILS:\n"
    message += "═══════════════\n\n"

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.drinkName} x${item.quantity}\n`
      message += `   Milk: ${getMilkLabel(item.milk)}\n`
      message += `   Size: ${getSizeLabel(item.size)}\n`
      message += `   Price: ${formatPrice(item.price * item.quantity)}\n\n`
    })

    message += "═══════════════\n"
    message += `TOTAL: ${formatPrice(getTotalPrice())}\n\n`
    message += "Please confirm my order. Thank you!"

    return encodeURIComponent(message)
  }

  const sendToWhatsApp = (number: string) => {
    if (cart.length === 0) return
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${number.replace(/\s/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const whatsappNumbers = [
    { number: "+256701283898", display: "+256 701 283898", country: "Uganda", flag: "🇺🇬" },
    { number: "+31645396333", display: "+31 645 396333", country: "Netherlands", flag: "🇳🇱" },
  ]

  return (
    <section id="menu" className="py-24 md:py-32 bg-gradient-to-b from-bg-cream via-matcha-vibrant/5 to-matcha-deep/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-matcha-deep via-matcha-vibrant to-matcha-deep bg-clip-text text-transparent">
              Build Your Order
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Customize your matcha experience and send directly to WhatsApp
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Menu Selection */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-matcha-deep">Select Your Drink</h3>

              {drinks.map((drink) => (
                <Card
                  key={drink.id}
                  className={`p-6 transition-all hover:shadow-xl ${drink.color} bg-gradient-to-br ${drink.gradient} ${
                    selectedDrink === drink.id ? "ring-4 ring-matcha-deep" : ""
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        {drink.badge && <span className="text-4xl mb-2 block">{drink.badge}</span>}
                        <h4 className="font-serif text-3xl font-medium mb-2 text-balance">{drink.name}</h4>
                        <p className="text-lg text-muted-foreground">{drink.description}</p>
                      </div>
                      <Button
                        variant={selectedDrink === drink.id ? "default" : "outline"}
                        size="lg"
                        onClick={() => setSelectedDrink(selectedDrink === drink.id ? null : drink.id)}
                        className="text-lg font-semibold"
                      >
                        {selectedDrink === drink.id ? "Selected" : "Select"}
                      </Button>
                    </div>

                    {selectedDrink === drink.id && (
                      <div className="space-y-6 pt-6 border-t-2 border-matcha-deep/20">
                        {/* Milk Selection */}
                        <div className="space-y-3">
                          <Label className="text-xl font-semibold text-matcha-deep">Choose Milk Type *</Label>
                          <RadioGroup
                            value={selectedMilk}
                            onValueChange={(value) => setSelectedMilk(value as MilkType)}
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border-2 border-matcha-deep/20 hover:border-matcha-deep transition-all">
                                <div className="flex items-center space-x-3">
                                  <RadioGroupItem value="regular" id={`${drink.id}-regular`} className="w-5 h-5" />
                                  <Label htmlFor={`${drink.id}-regular`} className="text-lg font-medium cursor-pointer">
                                    Regular Milk
                                  </Label>
                                </div>
                                <span className="text-lg font-semibold text-matcha-deep">
                                  {formatPrice(drink.prices.regular)}
                                </span>
                              </div>

                              <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border-2 border-matcha-deep/20 hover:border-matcha-deep transition-all">
                                <div className="flex items-center space-x-3">
                                  <RadioGroupItem value="almond" id={`${drink.id}-almond`} className="w-5 h-5" />
                                  <Label htmlFor={`${drink.id}-almond`} className="text-lg font-medium cursor-pointer">
                                    Almond Milk
                                  </Label>
                                </div>
                                <span className="text-lg font-semibold text-matcha-deep">
                                  {formatPrice(drink.prices.almond)}
                                </span>
                              </div>

                              <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border-2 border-matcha-deep/20 hover:border-matcha-deep transition-all">
                                <div className="flex items-center space-x-3">
                                  <RadioGroupItem value="oat" id={`${drink.id}-oat`} className="w-5 h-5" />
                                  <Label htmlFor={`${drink.id}-oat`} className="text-lg font-medium cursor-pointer">
                                    Oat Milk
                                  </Label>
                                </div>
                                <span className="text-lg font-semibold text-matcha-deep">
                                  {formatPrice(drink.prices.oat)}
                                </span>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Size Selection */}
                        <div className="space-y-3">
                          <Label className="text-xl font-semibold text-matcha-deep">Choose Size *</Label>
                          <RadioGroup
                            value={selectedSize}
                            onValueChange={(value) => setSelectedSize(value as SizeType)}
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border-2 border-matcha-deep/20 hover:border-matcha-deep transition-all">
                                <div className="flex items-center space-x-3">
                                  <RadioGroupItem value="regular" id={`${drink.id}-size-regular`} className="w-5 h-5" />
                                  <Label
                                    htmlFor={`${drink.id}-size-regular`}
                                    className="text-lg font-medium cursor-pointer"
                                  >
                                    Regular (16oz)
                                  </Label>
                                </div>
                                <span className="text-lg font-semibold text-matcha-vibrant">Included</span>
                              </div>

                              <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border-2 border-matcha-deep/20 hover:border-matcha-deep transition-all">
                                <div className="flex items-center space-x-3">
                                  <RadioGroupItem value="large" id={`${drink.id}-size-large`} className="w-5 h-5" />
                                  <Label
                                    htmlFor={`${drink.id}-size-large`}
                                    className="text-lg font-medium cursor-pointer"
                                  >
                                    Large (20oz)
                                  </Label>
                                </div>
                                <span className="text-lg font-semibold text-matcha-deep">+ UGX 2,000</span>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Add to Cart Button */}
                        <Button
                          onClick={() => addToCart(drink.id)}
                          size="lg"
                          className="w-full text-xl font-bold py-7 bg-matcha-deep hover:bg-matcha-vibrant transition-all hover:scale-105"
                        >
                          <Plus className="w-6 h-6 mr-2" />
                          Add to Cart - {formatPrice(calculatePrice(drink.id, selectedMilk, selectedSize))}
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Cart */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <Card className="p-6 bg-gradient-to-br from-matcha-deep/5 to-matcha-vibrant/10 border-2 border-matcha-deep">
                  <div className="flex items-center gap-3 mb-6">
                    <ShoppingCart className="w-7 h-7 text-matcha-deep" />
                    <h3 className="text-3xl font-serif font-bold text-matcha-deep">Your Cart</h3>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {cart.length}
                    </Badge>
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
                      <p className="text-lg text-muted-foreground">Your cart is empty</p>
                      <p className="text-base text-muted-foreground mt-2">Start adding drinks to build your order</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {cart.map((item) => (
                          <Card key={item.id} className="p-4 bg-white border-2 border-matcha-vibrant/30">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg text-balance leading-tight">{item.drinkName}</h4>
                                  <div className="mt-2 space-y-1 text-base text-muted-foreground">
                                    <p>{getMilkLabel(item.milk)}</p>
                                    <p>{getSizeLabel(item.size)}</p>
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </Button>
                              </div>

                              <div className="flex items-center justify-between pt-3 border-t">
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="h-9 w-9"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </Button>
                                  <span className="text-xl font-semibold w-12 text-center">{item.quantity}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="h-9 w-9"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </Button>
                                </div>
                                <span className="text-lg font-bold text-matcha-deep">
                                  {formatPrice(item.price * item.quantity)}
                                </span>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>

                      <div className="pt-6 border-t-2 border-matcha-deep/30">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-2xl font-serif font-bold text-matcha-deep">Total:</span>
                          <span className="text-3xl font-bold text-matcha-deep">{formatPrice(getTotalPrice())}</span>
                        </div>

                        <div className="space-y-3">
                          <p className="text-base font-semibold text-center text-matcha-deep mb-3">
                            Send Order to WhatsApp:
                          </p>
                          {whatsappNumbers.map((contact) => (
                            <Button
                              key={contact.number}
                              onClick={() => sendToWhatsApp(contact.number)}
                              size="lg"
                              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg py-6 transition-all hover:scale-105"
                            >
                              <MessageCircle className="w-5 h-5 mr-2" />
                              {contact.flag} {contact.country}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
