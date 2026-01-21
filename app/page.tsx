import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustBanner } from "@/components/trust-banner"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { BrandShowcase } from "@/components/brand-showcase"
import { PromotionCards } from "@/components/promotion-cards"
import { SatisfactionGuarantee } from "@/components/satisfaction-guarantee"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TrustBanner />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <AboutSection />
        <BrandShowcase />
        <PromotionCards />
        <SatisfactionGuarantee />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
