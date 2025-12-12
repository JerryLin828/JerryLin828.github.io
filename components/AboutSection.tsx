'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
          About Me
        </h2>

        {/* Autobiography */}
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              My journey in science began with a fascination for the molecular world. Growing up in Beijing,
              I immersed myself in chemistry, eventually leading the RDFZ Chemistry Club and dedicating countless
              hours to mastering the intricacies of organic chemistry, thermodynamics, and biochemistry. This passion
              culminated in representing China at the 56th International Chemistry Olympiad, where I earned a gold
              medal, placing 12th globally and 2nd in the theoretical portion as team captain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              My academic path has taken me from Tsinghua University's prestigious Yao Class, where I began
              exploring the intersection of computer science and artificial intelligence, to MIT, where I'm now
              pursuing a unique double major in AI & Decision Making and Chemistry. This interdisciplinary approach
              reflects my belief that the future of scientific discovery lies at the convergence of computational
              methods and traditional sciences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              At MIT CSAIL, I work under Prof. Regina Barzilay, developing deep learning models to predict
              cellular responses to perturbations—research that bridges my interests in chemistry and AI. My projects,
              from SAPER's protein function annotation framework to investigations in multilingual mathematical reasoning,
              demonstrate my commitment to pushing the boundaries of what's possible when we combine domain expertise
              with cutting-edge machine learning techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              Beyond research, I'm passionate about education and mentorship. Having delivered over 100 hours of
              lectures to Beijing's Chemistry Olympiad training team, I understand the transformative power of
              knowledge sharing. Whether I'm explaining complex chemical mechanisms or debugging neural networks,
              I find joy in helping others discover the elegance and power of scientific thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Looking forward, I'm excited about the potential of AI to revolutionize drug discovery, materials
              science, and our understanding of biological systems. My goal is to be at the forefront of this
              revolution, developing tools and methodologies that accelerate scientific discovery and ultimately
              improve human lives.
            </p>
          </motion.div>
        </div>

        {/* Skills and Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-3">
              Technical Skills
            </h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• Python, PyTorch, C/C++</li>
              <li>• Deep Learning & AI</li>
              <li>• Bioinformatics</li>
              <li>• Data Analysis</li>
            </ul>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-3">
              Research Interests
            </h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• AI for Drug Discovery</li>
              <li>• Computational Biology</li>
              <li>• Protein Structure Prediction</li>
              <li>• Materials Informatics</li>
            </ul>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-3">
              Languages
            </h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• Chinese (Native)</li>
              <li>• English (Fluent)</li>
              <li>• Scientific Writing</li>
              <li>• Technical Documentation</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}