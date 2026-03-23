'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic'] })

export default function HeroSection() {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/3"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
            {/* Decorative ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full animate-pulse opacity-20 blur-xl" />

            {/* Profile image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Linrui Ma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-2/3 text-center lg:text-left"
        >
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-3">
            Linrui Ma
          </h1>

          {/* Title/Role */}
          <p className="text-lg sm:text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-medium mb-4 sm:mb-6">
            MIT Student • ML/AI Researcher • IChO Gold Medalist
          </p>

          {/* Tagline */}
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            <em className={`${playfair.className} text-base sm:text-xl`}>
              I&apos;m curious about the <span className="text-primary-600 dark:text-primary-400">chemistry of intelligence</span>, and the <span className="text-primary-600 dark:text-primary-400">intelligence behind chemistry</span>.
            </em>
          </p>

          {/* Short Bio */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 leading-relaxed">
            Undergraduate at MIT double majoring in AI &amp; Decision Making and Chemistry (GPA: 5.0/5.0).
            My work spans deep learning for biology, computer vision, and AI for science: from cellular
            perturbation modeling to pixel-space image editing. IChO gold medalist and captain of China&apos;s national team.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#portfolio"
              className="px-6 sm:px-8 py-3 bg-primary-500/20 hover:bg-primary-500/30 text-primary-700 dark:text-primary-300 font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl border border-primary-300/40 dark:border-primary-600/30 text-sm sm:text-base"
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-neutral-500/10 hover:bg-neutral-500/20 text-neutral-700 dark:text-neutral-300 border border-neutral-300/50 dark:border-neutral-600/30 font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            >
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-6 sm:px-8 py-3 bg-secondary-500/20 hover:bg-secondary-500/30 text-secondary-700 dark:text-secondary-300 font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl border border-secondary-300/40 dark:border-secondary-600/30 text-sm sm:text-base"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-8 text-center text-sm text-neutral-400 dark:text-neutral-500 font-mono">
        Last updated March 23, 2026
      </div>
    </div>
  )
}