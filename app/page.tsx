'use client'

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import ExperienceSection from '@/components/ExperienceSection'
import AwardsSection from '@/components/AwardsSection'
import ContactSection from '@/components/ContactSection'
import BlogPreview from '@/components/BlogPreview'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with elegant gradient background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 dark:from-neutral-950 dark:via-primary-950/20 dark:to-secondary-950/20">
        {/* Animated gradient orbs for subtle effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300/30 rounded-full blur-3xl animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float animation-delay-4000" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-neutral-900">
        <AboutSection />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <PortfolioSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-neutral-900">
        <ExperienceSection />
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <AwardsSection />
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 bg-white dark:bg-neutral-900">
        <BlogPreview />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <ContactSection />
      </section>
    </div>
  )
}