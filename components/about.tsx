import Image from "next/image"

export function About() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-bg-cream to-matcha-vibrant/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-matcha-deep/40 shadow-2xl shadow-matcha-deep/20">
              <Image
                src="/traditional-japanese-matcha-ceremony-bowl-whisk-ba.jpg"
                alt="Matcha ritual"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-matcha-vibrant to-matcha-deep bg-clip-text text-transparent">
                {"The Art of Matcha"}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  {
                    "At MATCHA BAR, we believe in honoring the centuries-old tradition of Japanese matcha while bringing it into your modern daily ritual."
                  }
                </p>
                <p>
                  {
                    "Each drink is crafted with premium ceremonial-grade matcha, whisked to perfection and combined with your choice of milk. Whether you prefer the pure, earthy notes of our classic matcha latte or the innovative fusion of our coffee matcha, every sip is an experience."
                  }
                </p>
                <p className="text-matcha-deep font-medium">{"Make matcha your daily ritual. 💚"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
