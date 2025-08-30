"use client"

import { useRef, useCallback } from "react"
import ContactSection from "@/components/ui/web/Contact"
import CTASection from "@/components/ui/web/CTASection"
import Header from "@/components/ui/web/header"
import HeroSection from "@/components/ui/web/HeroSection"
import PortfolioSection from "@/components/ui/web/PortfolioSection"
import ServicesSection from "@/components/ui/web/ServicesSection"
import TestimonialSection from "@/components/ui/web/TestimonialSection"
import Software from "./Software"

export default function ScrollWrapper() {
  const heroRef = useRef<HTMLDivElement>(null)
  const softwareRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((sectionId: string) => {
    const refs = {
      hero: heroRef,
      software: softwareRef,
      services: servicesRef,
      results: resultsRef,
      about: aboutRef,
      contact: contactRef,
    }

    const targetRef = refs[sectionId as keyof typeof refs]
    if (targetRef?.current) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.getBoundingClientRect().height + 20 : 80 // Dynamic height + padding

      // Calculate scroll position
      const elementPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset - headerHeight

      // Detect mobile device for additional offset
      const isMobile = /Mobi|Android/i.test(navigator.userAgent)
      const mobileOffset = isMobile ? 10 : 0 // Extra offset for mobile address bars

      // Smooth scrolling with requestAnimationFrame
      const start = window.pageYOffset
      const distance = elementPosition - start - mobileOffset
      const duration = 800 // Animation duration in ms
      let startTime: number | null = null

      const smoothScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = (t: number) => t * (2 - t) // Ease-in-out function

        window.scrollTo(0, start + distance * ease(progress))

        if (timeElapsed < duration) {
          requestAnimationFrame(smoothScroll)
        } else {
          // Ensure final position is exact
          window.scrollTo(0, elementPosition - mobileOffset)
        }
      }

      requestAnimationFrame(smoothScroll)
    }
  }, [])

  return (
    <div className="scroll-smooth">
      <Header onNavigate={scrollToSection} />

      <div ref={heroRef} data-section="hero">
        <HeroSection />
      </div>

      <div ref={softwareRef} data-section="software">
        <Software />
      </div>

      <div ref={servicesRef} data-section="services">
        <ServicesSection />
      </div>

      <div ref={resultsRef} data-section="results">
        <PortfolioSection />
      </div>

      <div ref={aboutRef} data-section="about">
        <CTASection />
      </div>

      <div data-section="testimonials">
        <TestimonialSection />
      </div>

      <div ref={contactRef} data-section="contact">
        <ContactSection />
      </div>
    </div>
  )
}
