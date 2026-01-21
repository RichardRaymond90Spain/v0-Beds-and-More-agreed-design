"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Mattresses", href: "/mattresses" },
  { name: "Bed Bases", href: "/bed-bases" },
  { name: "Headboards", href: "/headboards" },
  { name: "Furniture", href: "/furniture" },
  { name: "Rugs", href: "/rugs" },
  { name: "Complete Beds", href: "/complete-beds" },
  { name: "Offers", href: "/offers", highlight: true },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <a href="tel:+34952667095" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call us on</span> +34 952 667 095
            </a>
            <div className="flex items-center gap-4">
              <Link href="/advice" className="hover:text-accent transition-colors hidden sm:inline">
                Sleep Advice
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-accent ${
                        item.highlight ? "text-red-600" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-4" />
                  <Link href="/advice" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Sleep Advice
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">BEDS & MORE</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    item.highlight ? "bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 hover:text-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button asChild className="hidden sm:flex">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
