import React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Beds & More | Premium Beds, Mattresses & Furniture in Costa del Sol",
  description:
    "Discover Marbella and Mijas Costa's finest selection of beds, mattresses, headboards, furniture and rugs. Quality sleep solutions since 2008.",
  keywords: "beds, mattresses, headboards, furniture, rugs, Marbella, Mijas Costa, Costa del Sol, Hypnos, Sealy, FLEX, Pikolin",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
