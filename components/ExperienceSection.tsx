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
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: [
      'Led development of microservices architecture serving 5M+ users',
      'Reduced API response time by 60% through optimization and caching strategies',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    type: 'work',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 - 2022',
    description: [
      'Built and maintained RESTful APIs and GraphQL endpoints',
      'Developed responsive web applications using modern frameworks',
      'Collaborated with cross-functional teams in Agile environment',
      'Improved application performance by 45% through code optimization',
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis'],
    type: 'work',
  },
  {
    id: 3,
    title: 'Master of Science in Computer Science',
    company: 'Stanford University',
    location: 'Stanford, CA',
    period: '2018 - 2020',
    description: [
      'Specialized in Machine Learning and Distributed Systems',
      'Research on scalable deep learning architectures',
      'Teaching Assistant for Advanced Algorithms course',
      'GPA: 3.9/4.0',
    ],
    technologies: ['Machine Learning', 'Distributed Systems', 'Algorithms', 'Research'],
    type: 'education',
  },
  {
    id: 4,
    title: 'Software Engineering Intern',
    company: 'Big Tech Company',
    location: 'Seattle, WA',
    period: 'Summer 2019',
    description: [
      'Developed features for cloud storage service used by millions',
      'Optimized database queries improving performance by 30%',
      'Participated in design reviews and sprint planning',
      'Received return offer for full-time position',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Kubernetes'],
    type: 'work',
  },
  {
    id: 5,
    title: 'Bachelor of Science in Computer Science',
    company: 'UC Berkeley',
    location: 'Berkeley, CA',
    period: '2014 - 2018',
    description: [
      'Dean\'s List all semesters',
      'President of Computer Science Student Association',
      'Completed honors thesis on blockchain technology',
      'GPA: 3.8/4.0',
    ],
    technologies: ['Computer Science', 'Software Engineering', 'Data Structures', 'Algorithms'],
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
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
          Experience & Education
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          My professional journey and academic background
        </p>
      </motion.div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : { height: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"
          style={{ top: 0 }}
        />

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center mb-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-white dark:bg-neutral-900 border-4 border-primary-500 rounded-full" />
              <div className="absolute w-8 h-8 bg-primary-500/20 rounded-full animate-ping" />
            </motion.div>

            {/* Content Card */}
            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
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