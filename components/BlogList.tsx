'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  category: string
  date: string
  readTime: string
  slug: string
  tags: string[]
  author: string
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
    tags: ['Node.js', 'Microservices', 'Docker', 'Kubernetes'],
    author: 'Jerry Lin',
  },
  {
    id: 2,
    title: 'The Future of Web Development: AI Integration',
    excerpt: 'Exploring how artificial intelligence is transforming web development and what developers need to know to stay ahead.',
    category: 'AI/ML',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    slug: 'future-of-web-development-ai',
    tags: ['AI', 'Web Development', 'Machine Learning', 'Future Tech'],
    author: 'Jerry Lin',
  },
  {
    id: 3,
    title: 'Optimizing React Performance: Best Practices',
    excerpt: 'Deep dive into React optimization techniques including memoization, code splitting, and virtual DOM optimization.',
    category: 'Frontend',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    slug: 'optimizing-react-performance',
    tags: ['React', 'Performance', 'JavaScript', 'Frontend'],
    author: 'Jerry Lin',
  },
  {
    id: 4,
    title: 'DevOps Best Practices for Modern Applications',
    excerpt: 'Essential DevOps strategies for continuous integration, deployment, and monitoring in cloud environments.',
    category: 'DevOps',
    date: 'Nov 20, 2024',
    readTime: '12 min read',
    slug: 'devops-best-practices',
    tags: ['DevOps', 'CI/CD', 'Cloud', 'Automation'],
    author: 'Jerry Lin',
  },
  {
    id: 5,
    title: 'Understanding TypeScript Advanced Types',
    excerpt: 'Master TypeScript\'s advanced type system including generics, conditional types, and mapped types.',
    category: 'Frontend',
    date: 'Nov 15, 2024',
    readTime: '15 min read',
    slug: 'typescript-advanced-types',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Types'],
    author: 'Jerry Lin',
  },
  {
    id: 6,
    title: 'Building Real-time Applications with WebSockets',
    excerpt: 'Learn how to implement real-time features using WebSockets for chat applications, live updates, and more.',
    category: 'Full Stack',
    date: 'Nov 10, 2024',
    readTime: '9 min read',
    slug: 'realtime-websockets',
    tags: ['WebSockets', 'Real-time', 'Node.js', 'Socket.io'],
    author: 'Jerry Lin',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps', 'AI/ML']

const categoryColors: Record<string, string> = {
  Backend: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  'AI/ML': 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
  Frontend: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
  DevOps: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
  'Full Stack': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300',
}

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on software development, technology trends, and best practices
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-12 py-4 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
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

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Article Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400 relative">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-neutral-600 dark:text-neutral-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

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
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            No articles found matching your criteria.
          </p>
        </motion.div>
      )}
    </div>
  )
}