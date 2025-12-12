import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Linrui Ma - Personal Portfolio',
  description: 'MIT student double majoring in AI & Chemistry, IChO Gold Medalist, AI Researcher at MIT CSAIL',
  keywords: ['portfolio', 'MIT', 'AI research', 'deep learning', 'chemistry', 'Linrui Ma', 'CSAIL', 'IChO', 'Tsinghua'],
  authors: [{ name: 'Linrui Ma' }],
  creator: 'Linrui Ma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jerrylin828.github.io',
    title: 'Linrui Ma - Personal Portfolio',
    description: 'MIT student double majoring in AI & Chemistry, IChO Gold Medalist, AI Researcher at MIT CSAIL',
    siteName: 'Linrui Ma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linrui Ma - Personal Portfolio',
    description: 'MIT student double majoring in AI & Chemistry, IChO Gold Medalist, AI Researcher at MIT CSAIL',
    creator: '@linruima', // Replace with your Twitter handle
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