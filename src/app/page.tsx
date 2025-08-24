"use client"

import ContactSection from "@/components/ui/web/Contact"
import CTASection from "@/components/ui/web/CTASection"
import Header from "@/components/ui/web/header"
import HeroSection from "@/components/ui/web/HeroSection"
import PortfolioSection from "@/components/ui/web/PortfolioSection"
import ServicesSection from "@/components/ui/web/ServicesSection"
import TestimonialSection from "@/components/ui/web/TestimonialSection"
import { useRef } from "react"


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const refs = {
      hero: heroRef,
      services: servicesRef,
      results: resultsRef,
      about: aboutRef,
      contact: contactRef,
    }

    const targetRef = refs[sectionId as keyof typeof refs]
    if (targetRef?.current) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = targetRef.current.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="bg-black min-h-screen">
      <Header onNavigate={scrollToSection} />

      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <div ref={resultsRef}>
        <PortfolioSection />
      </div>

      <div ref={aboutRef}>
        <CTASection />
      </div>
      <TestimonialSection />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  )
}
