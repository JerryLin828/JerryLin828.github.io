'use client'

import { motion } from 'framer-motion'

const awards = [
  {
    id: 4,
    icon: '🏅',
    title: '1st Place — MITIT 2025 Winter Contest (Beginner\'s Round)',
    description: 'First place in the MIT Informatics Tournament 2025-26 Winter Contest (Beginner\'s Round).',
    date: 'Dec 2025',
  },
  {
    id: 3,
    icon: '🎓',
    title: 'Tsinghua University Leading Talents Scholarship',
    description: 'Top 1%, First Class Scholarship for Freshmen.',
    date: 'Sep 2024',
  },
  {
    id: 1,
    icon: '🥇',
    title: '56th International Chemistry Olympiad (IChO) Gold Medal',
    description: '12th place globally, 2nd in theory. Captain of China\'s team.',
    date: 'Jul 2024',
  },
  {
    id: 2,
    icon: '🏆',
    title: '37th Chinese Chemistry Olympiad (CChO) Gold Medal',
    description: '2nd place nationally. Student representative speaker at closing ceremony.',
    date: 'Nov 2023',
  },
]

export default function AwardsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
          Key Awards & Achievements
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-baseline gap-4 bg-white dark:bg-[#111118] rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-lg">{award.icon}</span>
            <span className="text-sm text-neutral-400 dark:text-neutral-500 whitespace-nowrap">{award.date}</span>
            <div className="min-w-0">
              <span className="font-medium text-neutral-900 dark:text-white text-sm">{award.title}</span>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm"> — {award.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
