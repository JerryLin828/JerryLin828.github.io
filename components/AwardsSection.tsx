'use client'

import { motion } from 'framer-motion'

interface Award {
  id: number
  title: string
  description: string
  date: string
  icon: string
  highlight: boolean
}

const awards: Award[] = [
  {
    id: 1,
    title: '56th International Chemistry Olympiad (IChO) Gold Medal',
    description: '12th place globally, 2nd place in theoretical part. Captain of the Chinese Team.',
    date: 'July 2024',
    icon: '🥇',
    highlight: true,
  },
  {
    id: 2,
    title: '37th Chinese Chemistry Olympiad (CChO) Gold Medal',
    description: '2nd place nationally. Delivered a speech as student representative at the closing ceremony.',
    date: 'November 2023',
    icon: '🏆',
    highlight: true,
  },
  {
    id: 3,
    title: 'Tsinghua University Leading Talents Scholarship',
    description: 'Top 1%, First Class Scholarship for Freshmen.',
    date: 'September 2024',
    icon: '🎓',
    highlight: true,
  },
]

export default function AwardsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
          Key Awards & Achievements
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Recognition for excellence in chemistry and academics
        </p>
      </motion.div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group ${award.highlight ? 'md:col-span-1' : ''}`}
          >
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              {/* Icon */}
              <div className="text-5xl mb-4">{award.icon}</div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  {award.description}
                </p>
              </div>

              {/* Date */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {award.date}
                </span>
                {award.highlight && (
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-semibold rounded-full">
                    Top Achievement
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">5.0</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">MIT GPA</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">12th</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">IChO Global Rank</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">100+</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Hours Teaching</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">Top 1%</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Tsinghua Scholar</div>
        </div>
      </motion.div>
    </div>
  )
}