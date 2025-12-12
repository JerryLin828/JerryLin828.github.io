'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary-600 dark:text-primary-400 font-medium text-lg"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white"
        >
          Linrui Ma
        </motion.h1>

        {/* Animated Role */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
          <TypeAnimation
            sequence={[
              'MIT Student',
              2000,
              'AI Researcher',
              2000,
              'Chemistry Olympiad Gold Medalist',
              2000,
              'Deep Learning Engineer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400"
        >
          Double majoring in AI & Decision Making and Chemistry at MIT. Passionate about leveraging
          deep learning for scientific discovery, with research experience at MIT CSAIL under Prof. Regina Barzilay.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Link
            href="#portfolio"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </motion.div>

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
      </motion.div>
    </div>
  )
}