import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">BEDS & MORE</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Providing quality sleep solutions to the Costa del Sol since 2008. Visit our showrooms in Marbella and
              Mijas Costa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mattresses" className="hover:text-accent transition-colors">
                  Mattresses
                </Link>
              </li>
              <li>
                <Link href="/bed-bases" className="hover:text-accent transition-colors">
                  Bed Bases
                </Link>
              </li>
              <li>
                <Link href="/headboards" className="hover:text-accent transition-colors">
                  Headboards
                </Link>
              </li>
              <li>
                <Link href="/furniture" className="hover:text-accent transition-colors">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/rugs" className="hover:text-accent transition-colors">
                  Rugs
                </Link>
              </li>
              <li>
                <Link href="/complete-beds" className="hover:text-accent transition-colors">
                  Complete Beds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+34952667095" className="hover:text-accent transition-colors">
                  +34 952 667 095
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@bedsandmore.es" className="hover:text-accent transition-colors">
                  info@bedsandmore.es
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Marbella & Mijas Costa, Spain</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 10:00 - 18:00</p>
                  <p>Saturday: 10:00 - 14:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Beds & More. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
