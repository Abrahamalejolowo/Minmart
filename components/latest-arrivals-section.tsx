"use client"

import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

const products = [
  {
    name: "Organic Pure Shea Butter",
    category: "BEAUTY",
    price: 4500,
    image: "/images/product-shea-butter.jpg",
  },
  {
    name: "Hand-woven Aso Oke",
    category: "FASHION",
    price: 25000,
    image: "/images/product-aso-oke.jpg",
  },
  {
    name: "Premium Spiced Kilishi",
    category: "FOOD",
    price: 3200,
    image: "/images/product-kilishi.jpg",
  },
  {
    name: "Classic Coral Bead Set",
    category: "FASHION",
    price: 18500,
    image: "/images/product-coral-beads.jpg",
  },
]

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG").format(amount)
}

export function LatestArrivalsSection() {
  return (
    <section className="bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Latest Arrivals
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Discover the newest additions to our marketplace, sourced directly
            from local producers across Nigeria
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-background shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:text-primary"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              {/* Details */}
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  {product.category}
                </span>
                <h3 className="mt-1 truncate text-sm font-medium text-foreground">
                  {product.name}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-heading text-base font-bold text-foreground">
                    {"₦"}{formatNaira(product.price)}
                  </span>
                  <button
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
