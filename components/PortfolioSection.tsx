'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SAPER: Structure-Aware Protein Function Framework',
    description: 'Novel protein function annotation framework combining 3D structural information with sequence-based methods, achieving 114% performance improvement on Meta-BLEU-2. Uses multi-modal fusion of ProstT5 and ESM-2 embeddings.',
    category: 'AI/ML',
    technologies: ['Python', 'PyTorch', 'FAISS', 'Transformers', 'ProstT5', 'ESM-2'],
    image: '/images/project1.jpg',
    githubUrl: 'https://github.com/winstonqian/SAPER',
    featured: true,
  },
  {
    id: 2,
    title: 'Multilingual Mathematical Reasoning in Neural Networks',
    description: 'Research on how representation choice affects neural reasoning efficiency in Transformers. Built evaluation framework testing SOTA models across GSM8K and MMATH in multiple languages, achieving 5-10% token efficiency gains.',
    category: 'AI/ML',
    technologies: ['Python', 'Transformers', 'LoRA', 'NumPy', 'Multi-tokenizer Analysis'],
    image: '/images/project2.jpg',
    githubUrl: 'https://github.com/bowenyu066/language-shapes-reasoning',
    featured: true,
  },
  {
    id: 3,
    title: 'Labotex: AI-Powered Lab Report Generator',
    description: 'Intelligent agent that streamlines LaTeX lab report generation from raw data. Integrates VLMs and chat models to convert experiment PDFs and CSV datasets into structured scientific reports.',
    category: 'Full Stack',
    technologies: ['Python', 'LaTeX', 'VLMs', 'NumPy', 'Web UI', 'PDF Processing'],
    image: '/images/project3.jpg',
    githubUrl: 'https://github.com/Kehan-Liu/LABOTEX',
    featured: true,
  },
  {
    id: 4,
    title: 'High-Performance Matrix Multiplication System',
    description: 'Designed and implemented high-speed matrix multiplication in C with cache optimization, vectorization, and multi-threading. Added distributed RPC support for cross-machine computation.',
    category: 'Systems',
    technologies: ['C/C++', 'SIMD', 'Multithreading', 'RPC', 'Cache Optimization'],
    image: '/images/project4.jpg',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Deep Learning for Cellular Perturbations',
    description: 'Research at MIT CSAIL designing deep learning models to predict cell state changes in response to various cellular perturbations, working under Prof. Regina Barzilay.',
    category: 'Research',
    technologies: ['PyTorch', 'Deep Learning', 'Bioinformatics', 'Single-cell Analysis'],
    image: '/images/project5.jpg',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 6,
    title: 'Chemistry Olympiad Training Platform',
    description: 'Educational platform and resources developed for Beijing CChO Training Team, including lecture materials on advanced chemistry topics, problem sets, and interactive demonstrations.',
    category: 'Education',
    technologies: ['Chemistry', 'Teaching', 'Problem Design', 'Educational Content'],
    image: '/images/project6.jpg',
    githubUrl: 'https://github.com',
    featured: false,
  },
]

const categories = ['All', 'AI/ML', 'Full Stack', 'Systems', 'Research', 'Education']

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  )

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
          Featured Projects
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Explore my portfolio of work spanning web development, mobile apps, and cloud solutions
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
                {/* Placeholder for image - in production, use actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-20">
                    {project.category === 'AI/ML' && '🤖'}
                    {project.category === 'Full Stack' && '💻'}
                    {project.category === 'Systems' && '⚙️'}
                    {project.category === 'Research' && '🔬'}
                    {project.category === 'Education' && '📚'}
                  </div>
                </div>

                {/* Overlay on hover */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    >
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
                        >
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}