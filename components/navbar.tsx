"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">M</span>
          </span> */}
          <span className="font-sens-serif text-xl font-bold text-foreground">
            Min<span className="text-primary">mart</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-primary underline underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/sell"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Sell
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="text-foreground transition-colors hover:text-primary"
          >
            <Search className="h-5 w-5" />
          </button>
          <Button size="sm" className="hidden rounded-full md:inline-flex">
            Login
          </Button>
          <button
            aria-label="Toggle mobile menu"
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <Link href="/" className="text-sm font-medium text-primary" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/sell" className="text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                Sell
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </li>
          </ul>
          <Button size="sm" className="mt-4 w-full rounded-full">
            Login
          </Button>
        </div>
      )}
    </header>
  )
}
