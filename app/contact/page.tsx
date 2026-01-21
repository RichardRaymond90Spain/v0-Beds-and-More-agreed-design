"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-accent font-medium mb-2 tracking-wider uppercase">Get In Touch</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-primary-foreground/90">
                Have a question or want to learn more about our products? We&apos;d love to hear from you. Visit our
                showrooms or get in touch today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Visit Our Showrooms</h2>
                <div className="space-y-8">
                  {/* Mijas Costa */}
                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">Mijas Costa Showroom</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-muted-foreground">
                          Centro Comercial La Cala, Mijas Costa, Malaga, Spain
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-accent mt-0.5" />
                        <a href="tel:+34952667095" className="hover:text-accent transition-colors">
                          +34 952 667 095
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-accent mt-0.5" />
                        <div className="text-muted-foreground">
                          <p>Mon - Fri: 10:00 - 18:00</p>
                          <p>Saturday: 10:00 - 14:00</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Marbella */}
                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">Marbella Showroom</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-muted-foreground">Poligono Industrial San Pedro, Marbella, Spain</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-accent mt-0.5" />
                        <a href="tel:+34952667095" className="hover:text-accent transition-colors">
                          +34 952 667 095
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-accent mt-0.5" />
                        <div className="text-muted-foreground">
                          <p>Mon - Fri: 10:00 - 18:00</p>
                          <p>Saturday: 10:00 - 14:00</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 p-6 bg-secondary rounded-lg">
                    <Mail className="h-5 w-5 text-accent" />
                    <a href="mailto:info@bedsandmore.es" className="hover:text-accent transition-colors">
                      info@bedsandmore.es
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
