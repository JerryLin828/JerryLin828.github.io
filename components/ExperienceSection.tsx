'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  type: 'work' | 'education'
}

const experiences: Experience[] = [
  {
    id: 0,
    title: 'Undergraduate Researcher',
    company: 'MIT — Prof. Kaiming He\'s Group',
    location: 'Cambridge, MA',
    period: 'Feb 2026 - Present',
    description: [
      'Adapting the "Just Image Transformers" (JiT) framework for text-guided image editing in raw pixel space',
      'Integrating a pre-trained T5 encoder with cross-attention applied directly to pixel-space tokens',
      'Bypassing latent bottlenecks (VAEs) to achieve high-fidelity editing that preserves fine-grained image details',
      'Collaboratively designing experiments, fine-tuning the model, and evaluating outputs against relevant baselines',
    ],
    technologies: ['PyTorch', 'Transformers', 'Diffusion Models', 'Computer Vision', 'T5'],
    type: 'work',
  },
  {
    id: 1,
    title: 'Undergraduate Researcher',
    company: 'MIT Computer Science and Artificial Intelligence Lab (CSAIL)',
    location: 'Cambridge, MA',
    period: 'Sep 2025 - Present',
    description: [
      'Collaborating with Ph.D. candidates under Prof. Regina Barzilay\'s supervision',
      'Designing deep learning models to predict cell state changes in response to cellular perturbations',
      'Developing probabilistic models for selective protein binder design',
      'Applying AI techniques to advance medical and biological understanding',
    ],
    technologies: ['PyTorch', 'Deep Learning', 'Bioinformatics', 'Single-cell Analysis', 'Python'],
    type: 'work',
  },
  {
    id: 2,
    title: 'B.E. in AI & Decision Making + B.S. in Chemistry (Double Major)',
    company: 'Massachusetts Institute of Technology (MIT)',
    location: 'Cambridge, MA',
    period: 'Aug 2025 - Present',
    description: [
      'GPA: 5.0/5.0',
      'Core Courses: Deep Learning; Algorithms; AI & Decision Making in Medicine; Biological Chemistry',
      'Pursuing interdisciplinary education at the intersection of AI and chemistry',
    ],
    technologies: ['Deep Learning', 'Algorithms', 'AI in Medicine', 'Biological Chemistry'],
    type: 'education',
  },
  {
    id: 3,
    title: 'Undergraduate Student - Yao Class',
    company: 'Tsinghua University',
    location: 'Beijing, China',
    period: 'Aug 2024 - Jun 2025',
    description: [
      'GPA: 3.87/4.00',
      'Majoring in Computer Science and Artificial Intelligence in prestigious Yao Class',
      'Core Courses: Linear Algebra, C/C++ Programming, AI Principles & Techniques, Mathematics for CS & AI, Computer Systems, Introduction to LLM Applications',
    ],
    technologies: ['C/C++', 'AI/ML', 'Computer Systems', 'LLM Applications', 'Mathematics'],
    type: 'education',
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Experience & Education
        </h2>
      </motion.div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div
          className="absolute left-[2.125rem] md:left-1/2 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 top-0 bottom-0 -translate-x-1/2"
        />

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center mb-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div
              className="absolute left-[2.125rem] md:left-1/2 -translate-x-1/2 z-10"
            >
              <div className="w-4 h-4 bg-white dark:bg-[#0a0a12] border-4 border-primary-500 rounded-full" />
            </div>

            {/* Content Card */}
            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-[#111118] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {exp.location} • {exp.period}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'work'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                        : 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                    }`}
                  >
                    {exp.type === 'work' ? 'Work' : 'Education'}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-neutral-600 dark:text-neutral-400 text-sm flex items-start"
                    >
                      <span className="text-primary-500 mr-2 mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Full Resume
        </a>
      </motion.div>
    </div>
  )
}