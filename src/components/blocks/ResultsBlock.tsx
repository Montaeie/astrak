import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ResultsBlock, Media } from '@/payload-types'

interface ResultsBlockRendererProps {
  block: ResultsBlock
}

export function ResultsBlockRenderer({ block }: ResultsBlockRendererProps) {
  const heading = block.heading || "Nos réussites parlent d'elles-mêmes"
  const results = block.results || []

  if (results.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark">
            {heading}
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => {
            const icon = result.icon as Media | undefined

            return (
              <div
                key={result.id || index}
                className="bg-white text-center p-8 md:p-10 rounded-3xl shadow-sm"
              >
                {/* Icon from CMS */}
                {icon?.url && (
                  <div className="flex justify-center mb-6">
                    <Image
                      src={icon.url}
                      alt={result.client}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                )}

                <p className="text-astrak-dark font-medium mb-6">{result.client}</p>

                <p className="text-3xl md:text-4xl font-bold text-astrak-dark mb-2">
                  {result.stat}
                </p>

                <p className="text-gray-500 text-sm mb-8">{result.label}</p>

                {result.href && (
                  <Link
                    href={result.href}
                    className="text-astrak-dark font-medium text-sm underline underline-offset-4 hover:text-cyan-dark transition-colors"
                  >
                    Découvrir l'étude de cas
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
