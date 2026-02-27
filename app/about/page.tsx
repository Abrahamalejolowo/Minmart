import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Globe,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Zap,
  Heart,
  Shield,
} from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description:
        'We verify every seller and product to ensure quality and authenticity.',
    },
    {
      icon: Zap,
      title: 'Speed',
      description:
        'Fast shipping and checkout processes mean your products arrive quickly.',
    },
    {
      icon: Shield,
      title: 'Security',
      description:
        'Your data is protected with enterprise-grade security and encryption.',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description:
        'We connect people across Nigeria, breaking geographical barriers.',
    },
  ]

  const team = [
    {
      name: 'Ada Okafor',
      role: 'Co-founder & CEO',
      image: '/images/product-shea-butter.jpg',
      bio: 'Marketing expert with 10+ years in e-commerce.',
    },
    {
      name: 'Emeka Nwosu',
      role: 'Co-founder & CTO',
      image: '/images/product-aso-oke.jpg',
      bio: 'Full-stack engineer passionate about African tech.',
    },
    {
      name: 'Zainab Adeyemi',
      role: 'Head of Operations',
      image: '/images/category-beauty.jpg',
      bio: 'Logistics specialist ensuring seamless deliveries.',
    },
    {
      name: 'Tunde Okonkwo',
      role: 'Head of Seller Relations',
      image: '/images/category-fashion.jpg',
      bio: 'Community builder connecting entrepreneurs globally.',
    },
  ]

  const milestones = [
    { year: '2021', achievement: 'Minmart founded with a mission' },
    { year: '2022', achievement: 'Reached 1,000+ sellers on platform' },
    { year: '2023', achievement: '500,000+ customers served' },
    { year: '2024', achievement: '₦100M+ in transactions' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-gray-200 bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-5xl font-bold text-foreground">
                About Minmart
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Empowering Nigerian creators and connecting authentic products to the world
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Content */}
              <div>
                <h2 className="font-heading text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Minmart was born from a simple idea: African artisans and creators deserve a platform
                  that celebrates their craft and connects them to millions of customers worldwide.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  In 2021, our team saw the incredible potential in Nigerian-made products—from
                  traditional fabrics to innovative beauty solutions. But there was a gap: these
                  products lacked visibility and reach. That's when Minmart was created.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Today, we're proud to have helped over 1,000 sellers reach 500,000+ customers,
                  generating millions in transactions and creating real economic opportunities for
                  Nigerian entrepreneurs.
                </p>
              </div>

              {/* Image */}
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src="/images/hero-textiles.jpg"
                  alt="Minmart community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-y border-gray-200 bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-8">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                  Our Mission
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  To empower verified Nigerian brands and artisans by providing a curated digital
                  marketplace that ensures quality, authenticity, and fair access to global markets.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  To become Africa's leading platform for authentic, quality products; a movement
                  that celebrates local creation, empowers entrepreneurs, and reframes the narrative
                  around African goods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="rounded-lg border border-gray-200 bg-white p-6">
                    <Icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Minmart */}
        <section className="border-y border-gray-200 bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-4xl font-bold text-foreground">
              Why Choose Minmart?
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Verified sellers and authentic products',
                'Secure, encrypted transactions',
                'Fast, reliable shipping nationwide',
                'Transparent pricing with no hidden fees',
                '24/7 customer support',
                'Community-first approach',
              ].map((reason, index) => (
                <div key={index} className="flex gap-4 rounded-lg bg-white p-6">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <p className="font-semibold text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/Milestones */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-4xl font-bold text-foreground">
              Our Journey
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="rounded-lg border-2 border-primary bg-primary/5 p-6 text-center"
                >
                  <p className="font-heading text-3xl font-bold text-primary">
                    {milestone.year}
                  </p>
                  <p className="mt-3 font-semibold text-foreground">
                    {milestone.achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-y border-gray-200 bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="rounded-lg bg-white overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary">{member.role}</p>
                    <p className="mt-2 text-xs text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              {[
                { number: '1,200+', label: 'Active Sellers' },
                { number: '500K+', label: 'Happy Customers' },
                { number: '100M+', label: 'Naira in Sales' },
                { number: '48hrs', label: 'Avg Delivery' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-primary/5 p-8">
                  <p className="font-heading text-4xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="mt-2 font-semibold text-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-200 bg-primary/5 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-foreground">
              Join the Minmart Community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you're a customer looking for authentic products or a seller ready to reach
              millions, we'd love to have you on board.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button className="gap-2 bg-primary text-white hover:bg-primary/90 py-3">
                Start Shopping
              </Button>
              <Button
                variant="outline"
                className="py-3"
              >
                Become a Seller
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-4xl font-bold text-foreground">
              Get in Touch
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Email</h3>
                <p className="mt-2 text-gray-600">hello@minmart.com</p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Support</h3>
                <p className="mt-2 text-gray-600">support@minmart.com</p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Address</h3>
                <p className="mt-2 text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
