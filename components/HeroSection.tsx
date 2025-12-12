'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/3"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Decorative ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full animate-pulse opacity-20 blur-xl" />

            {/* Profile image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl">
              {/* Placeholder for profile image - replace with your actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                <span className="text-6xl md:text-7xl text-white font-bold">LM</span>
              </div>
              {/*
                To add your photo, uncomment this and add your image to public/images/
                <Image
                  src="/images/profile.jpg"
                  alt="Linrui Ma"
                  fill
                  className="object-cover"
                  priority
                />
              */}
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-4">
            Linrui Ma
          </h1>

          {/* Title/Role */}
          <p className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-medium mb-6">
            MIT Student • AI Researcher • Chemistry Olympiad Champion
          </p>

          {/* Short Bio */}
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Double majoring in AI & Decision Making and Chemistry at MIT with a perfect GPA.
            Conducting cutting-edge research at MIT CSAIL under Prof. Regina Barzilay on deep learning
            models for cellular perturbations. International Chemistry Olympiad gold medalist (12th globally)
            and passionate educator with 100+ hours teaching advanced chemistry.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5.0</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">MIT GPA</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">12th</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">IChO Global</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">4+</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">AI Projects</div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#portfolio"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neutral-500 dark:text-neutral-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}