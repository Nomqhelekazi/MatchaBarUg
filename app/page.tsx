import { Hero } from "@/components/hero"
import { InteractiveMenu } from "@/components/interactive-menu"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InteractiveMenu />
      <About />
      <Footer />
    </main>
  )
}
