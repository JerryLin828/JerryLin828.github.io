'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'
import BlogPreview from '@/components/BlogPreview'

// Dynamic import for 3D components to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/Hero3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-mesh" />
})

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-gradient-mesh" />}>
            <Hero3D />
          </Suspense>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white dark:bg-neutral-900">
        <PortfolioSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <ExperienceSection />
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