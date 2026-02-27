import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:py-20 lg:px-8">
        {/* Text Content */}
        <div className="flex-1">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            Nigerian Digital Marketplace
          </span>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Local excellence{" "}
            <span className="text-primary">Global</span>
            <br />
            Standard
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Empowering local creators, delivering authentic quality to your
            doorstep. Join thousands of Nigerians trading quality products every
            day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full gap-2">
              Start Shopping <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              Become a Seller
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/store2.avif"
              alt="Colorful Nigerian textiles and fabrics"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Authentic Badge */}
          <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-xl bg-background px-4 py-3 shadow-lg md:right-8">
            <CheckCircle className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">100% Authentic</p>
              <p className="text-xs text-muted-foreground">Verified Local Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}