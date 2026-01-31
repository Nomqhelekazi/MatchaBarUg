export function Footer() {
  return (
    <footer className="border-t-2 border-matcha-deep/30 bg-gradient-to-b from-matcha-vibrant/10 to-matcha-deep/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-matcha-deep to-matcha-vibrant bg-clip-text text-transparent">
                MATCHA BAR
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Your daily matcha ritual, crafted with premium Japanese ceremonial-grade matcha."}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-matcha-deep">{"Contact"}</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{"Kampala, Uganda"}</p>
                <p>{"Orders: Coming Soon"}</p>
                <p>{"Instagram: @matchabar"}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-matcha-vibrant">{"Hours"}</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{"Monday - Friday: 8am - 6pm"}</p>
                <p>{"Saturday: 9am - 5pm"}</p>
                <p>{"Sunday: 10am - 4pm"}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-matcha-deep/20 text-center text-sm text-muted-foreground">
            <p>{"© 2026 MATCHA BAR. All rights reserved."}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
