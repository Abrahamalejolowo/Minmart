import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Zero initial listing fees",
  "Nationwide delivery network",
  "Weekly payouts and secure escrow",
]

export function SellerCtaSection() {
  return (
    <section className="bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-secondary">
          <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:gap-12 md:p-12">
            {/* Text */}
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Grow Your Business with Minmart
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                Join the fastest-growing community of Nigerian entrepreneurs.
                Reach customers across the nation and manage your sales with our
                intuitive digital tools.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 rounded-full">
                Create Seller Account
              </Button>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/images/seller-laptop.jpg"
                alt="Laptop showing Minmart seller dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
