import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Taste of Home",
    description: "Authentic spices, grains, and snacks",
    image: "/images/category-food.jpg",
    href: "/shop?category=food",
    cta: "Explore Food",
  },
  {
    title: "Cultural Elegance",
    description: "Premium textiles and modern designs",
    image: "/images/category-fashion.jpg",
    href: "/shop?category=fashion",
    cta: "Explore Fashion",
  },
  {
    title: "Natural Glow",
    description: "Organic skincare and beauty secrets",
    image: "/images/category-beauty.jpg",
    href: "/shop?category=beauty",
    cta: "Explore Beauty",
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Shop by Category
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Handpicked selections from our best artisans
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-semibold text-primary hover:underline md:inline"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-lg font-bold text-background">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-background/80">
                  {cat.description}
                </p>
                <span className="mt-3 inline-block rounded-md bg-background/20 px-3 py-1.5 text-xs font-medium text-background backdrop-blur-sm transition-colors group-hover:bg-background/30">
                  {cat.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/shop"
          className="mt-6 block text-center text-sm font-semibold text-primary hover:underline md:hidden"
        >
          View All &rarr;
        </Link>
      </div>
    </section>
  )
}
