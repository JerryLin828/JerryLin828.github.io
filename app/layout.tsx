import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jerry Lin - Personal Portfolio',
  description: 'Professional portfolio showcasing projects, experience, and blog posts',
  keywords: ['portfolio', 'web developer', 'software engineer', 'Jerry Lin'],
  authors: [{ name: 'Jerry Lin' }],
  creator: 'Jerry Lin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jerrylin828.github.io',
    title: 'Jerry Lin - Personal Portfolio',
    description: 'Professional portfolio showcasing projects, experience, and blog posts',
    siteName: 'Jerry Lin Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerry Lin - Personal Portfolio',
    description: 'Professional portfolio showcasing projects, experience, and blog posts',
    creator: '@jerrylin', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}