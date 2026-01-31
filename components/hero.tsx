"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-matcha-vibrant/20 via-bg-cream to-matcha-deep/10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/serene-matcha-latte-overhead-view-with-whisk-and-b.jpg"
          alt="Matcha preparation"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="absolute top-20 left-10 w-40 h-40 bg-matcha-vibrant/30 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-32 right-16 w-48 h-48 bg-matcha-deep/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent-strawberry/30 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-accent-coffee/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-8 py-3 bg-matcha-deep text-white rounded-full shadow-xl">
            <span className="text-2xl md:text-3xl font-bold tracking-wider">NOW OPEN · KAMPALA, UGANDA</span>
          </div>

          <div className="flex justify-center">
            <Logo className="w-full max-w-3xl h-auto" />
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 font-medium tracking-wide">
            {"Your Daily Matcha Ritual 💚"}
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-full bg-gradient-to-r from-matcha-deep to-matcha-vibrant hover:from-matcha-vibrant hover:to-matcha-deep shadow-2xl hover:shadow-matcha-vibrant/50 transition-all hover:scale-105 font-semibold text-white"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              {"Explore Menu"}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
