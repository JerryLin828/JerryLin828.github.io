'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Publication {
  id: number
  title: string
  venue: string
  authors: ReactNode
  footnote?: string
  acceptance?: string
  linkLabel: string
  linkUrl: string
  description: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'ProtQueSt: Query-Conditioned Retrieval-Augmented Generation for Protein Function Annotation',
    venue: 'ICML 2026',
    authors: (
      <>
        Linrui Ma<sup>*</sup>, Yiwei Liang<sup>*</sup>, Yishu Yu<sup>**</sup>, Chuhan Joyce Qi<sup>**</sup>
      </>
    ),
    footnote: '(* /** equal contrib.)',
    acceptance: 'ICML 2026 GenBio Workshop (Spotlight); ICML 2026 FM4LS Workshop (Poster).',
    linkLabel: 'Link to paper',
    linkUrl: 'https://openreview.net/forum?id=zUqknDsV1t',
    description:
      'First-authored RAG framework that pairs structure-aware retrieval with a query-conditioned contrastive retriever (FiLM + query-pooled negatives), reframing protein function annotation as query-dependent sequence understanding; Entity-BLEU 48.79 (+37% vs RAPM) on Prot-Inst-OOD.',
  },
  {
    id: 2,
    title: 'MiniT2I: A Minimalist Baseline for Text-to-Image Generation',
    venue: 'Technical Blog, 2026',
    authors: (
      <>
        Xianbang Wang<sup>†</sup>, Hanhong Zhao<sup>‡</sup>, Yiyang Lu<sup>‡</sup>, Kangyang Zhou, Linrui Ma, and Kaiming He<sup>§</sup>
      </>
    ),
    footnote: '(† project lead; ‡ core contributor; § supervisor)',
    linkLabel: 'Link to blog',
    linkUrl: 'https://peppaking8.github.io/#/post/minit2i',
    description:
      'Academic-scale pixel-space T2I baseline (MM-JiT). Contributed the LoRA downstream-adaptation extension—fine-tuning on small style datasets (e.g., Naruto/Pokémon) and producing the adaptation artifacts—and contributed code/notebooks to the public PyTorch release.',
  },
]

export default function PublicationsSection() {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Publications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#111118] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
              {pub.title}
            </h3>
            <p className="text-sm italic text-neutral-500 dark:text-neutral-500 mb-3">
              {pub.venue}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
              {pub.authors}
            </p>
            {pub.footnote && (
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">
                {pub.footnote}
              </p>
            )}
            {pub.acceptance && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {pub.acceptance}
              </p>
            )}
            <a
              href={pub.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm mb-3 transition-colors"
            >
              {pub.linkLabel}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm flex-grow">
              {pub.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
