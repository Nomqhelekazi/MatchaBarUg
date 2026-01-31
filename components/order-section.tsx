"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Phone } from "lucide-react"

const whatsappNumbers = [
  {
    number: "+256701283898",
    displayNumber: "+256 701 283898",
    country: "Uganda",
    flag: "🇺🇬",
  },
  {
    number: "+31645396333",
    displayNumber: "+31 645 396333",
    country: "Netherlands",
    flag: "🇳🇱",
  },
]

export function OrderSection() {
  const handleWhatsAppOrder = (number: string) => {
    const message = encodeURIComponent("Hi! I'd like to place an order from MATCHA BAR 💚")
    const whatsappUrl = `https://wa.me/${number.replace(/\s/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-matcha-deep/5 via-matcha-vibrant/10 to-bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-matcha-vibrant/20 border-2 border-matcha-vibrant rounded-full">
              <span className="text-sm font-semibold text-matcha-deep tracking-wide">COMING SOON</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-matcha-deep via-matcha-vibrant to-matcha-deep bg-clip-text text-transparent">
              Order Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While our online ordering system is in development, you can place your order directly via WhatsApp for
              quick and easy service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whatsappNumbers.map((contact, i) => (
              <Card
                key={i}
                className="p-8 bg-gradient-to-br from-matcha-vibrant/10 to-matcha-deep/5 border-2 border-matcha-vibrant hover:shadow-2xl hover:shadow-matcha-vibrant/30 transition-all hover:scale-105"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{contact.flag}</span>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-matcha-deep">{contact.country}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium">{contact.displayNumber}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleWhatsAppOrder(contact.number)}
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-to-r from-accent-strawberry/10 via-accent-coffee/10 to-accent-blueberry/10 border-2 border-matcha-deep/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-matcha-deep">Pro tip:</span> Save time by sharing your order details
                including drink choice, milk preference, add-ons, and size when you message us!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
