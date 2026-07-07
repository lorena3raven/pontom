import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Categories } from '@/components/categories'
import { Reviews } from '@/components/reviews'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <TrustBar />
      <Categories />
      <Reviews />
      <FinalCta />
      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  )
}
