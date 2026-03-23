'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
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
              I&apos;m Linrui Ma, an undergraduate at MIT pursuing a double major in
              Artificial Intelligence &amp; Decision Making and Chemistry (GPA: 5.0/5.0).
              My interests sit at the intersection of AI and the sciences: From cutting-edge deep learning models and the mechanisms and principles behind them, to the applications of machine learning algorithms and architectures in chemical and biological sciences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              With a genuine passion for machine learning research, I have been conducting research on a variety of topics, including computer vision and AI for science. I am currently working under the supervision of Prof. Kaiming He on adapting the Just Image Transformers (JiT) framework
              for text-guided image editing directly in pixel space.
              
              I have also worked with Prof. Regina Barzilay at MIT CSAIL on salience-regularized optimal transport cell state change prediction, and recently on probabilistic models for selective protein binder design. 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Before MIT, I completed my freshman year at Tsinghua University&apos;s Institute for
              Interdisciplinary Information Sciences (IIIS, Yao Class), studying computer science
              and AI. I was the captain of China&apos;s team and gold medalist (12th globally, 2nd in theory)
              at the 56th International Chemistry Olympiad, and a national gold medalist (2nd place)
              at the 37th Chinese Chemistry Olympiad.
            </p>
          </motion.div>
        </div>

        {/* Research Interests & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">
            Research Interests & Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 dark:bg-[#111118] rounded-lg px-5 py-4">
              <h4 className="font-medium text-neutral-900 dark:text-white text-sm mb-2">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Computer Vision', 'Generative Models', 'Diffusion & Transformers', 'AI for Drug Discovery', 'Protein Engineering', 'Computational Biology'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-neutral-50 dark:bg-[#111118] rounded-lg px-5 py-4">
              <h4 className="font-medium text-neutral-900 dark:text-white text-sm mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'C/C++', 'Transformers', 'JAX', 'LaTeX', 'Linux', 'Git'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
