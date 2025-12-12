import { Metadata } from 'next'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog - Jerry Lin',
  description: 'Thoughts, tutorials, and insights on software development and technology',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogList />
    </div>
  )
}