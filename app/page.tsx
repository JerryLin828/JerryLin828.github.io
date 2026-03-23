'use client'

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import ExperienceSection from '@/components/ExperienceSection'
import AwardsSection from '@/components/AwardsSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with elegant gradient background */}
      <section className="relative min-h-[auto] sm:min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 dark:from-[#050510] dark:via-[#0a0a1a] dark:to-[#080818] pt-24 pb-8 sm:pt-20 sm:pb-0">
        {/* Animated gradient orbs for subtle effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300/30 dark:bg-primary-800/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300/30 dark:bg-secondary-800/15 rounded-full blur-3xl animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl animate-float animation-delay-4000" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-neutral-50/80 dark:bg-[#0a0a12]">
        <AboutSection />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-12 sm:py-20 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 dark:from-[#050510] dark:via-[#0a0a1a] dark:to-[#080818] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300/30 dark:bg-primary-800/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300/30 dark:bg-secondary-800/15 rounded-full blur-3xl animate-float animation-delay-2000" />
        </div>
        <div className="relative z-10">
          <PortfolioSection />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 bg-neutral-50/80 dark:bg-[#0a0a12]">
        <ExperienceSection />
      </section>

      {/* Awards Section */}
      <section id="awards" className="relative py-12 sm:py-20 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 dark:from-[#050510] dark:via-[#0a0a1a] dark:to-[#080818] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary-300/30 dark:bg-secondary-800/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary-300/30 dark:bg-primary-800/15 rounded-full blur-3xl animate-float animation-delay-2000" />
        </div>
        <div className="relative z-10">
          <AwardsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-neutral-50/80 dark:bg-[#0a0a12]">
        <ContactSection />
      </section>

    </div>
  )
}