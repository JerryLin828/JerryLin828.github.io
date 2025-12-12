'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement microservices architecture that can handle millions of requests while maintaining high availability.',
    category: 'Backend',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    slug: 'building-scalable-microservices',
  },
  {
    id: 2,
    title: 'The Future of Web Development: AI Integration',
    excerpt: 'Exploring how artificial intelligence is transforming web development and what developers need to know to stay ahead.',
    category: 'AI/ML',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    slug: 'future-of-web-development-ai',
  },
  {
    id: 3,
    title: 'Optimizing React Performance: Best Practices',
    excerpt: 'Deep dive into React optimization techniques including memoization, code splitting, and virtual DOM optimization.',
    category: 'Frontend',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    slug: 'optimizing-react-performance',
  },
]

const categoryColors: Record<string, string> = {
  Backend: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  'AI/ML': 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
  Frontend: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
  DevOps: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
}

export default function BlogPreview() {
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
          Latest Blog Posts
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on software development and technology
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Blog Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                    <span>{post.date}</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
        >
          View All Posts
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}