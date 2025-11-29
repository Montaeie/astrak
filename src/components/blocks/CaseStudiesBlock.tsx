import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { CaseStudiesBlock, CaseStudy, Media } from '@/payload-types'

interface CaseStudiesBlockRendererProps {
  block: CaseStudiesBlock
}

export function CaseStudiesBlockRenderer({ block }: CaseStudiesBlockRendererProps) {
  const { heading, selectedCases } = block

  if (!selectedCases || selectedCases.length === 0) {
    return null
  }

  // Resolve case studies (could be IDs or full objects)
  const caseStudies = selectedCases.filter(
    (c): c is CaseStudy => typeof c !== 'number' && c !== null
  )

  if (caseStudies.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {heading && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark">
              {heading}
            </h2>
          </div>
        )}

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((caseStudy) => {
            const featuredImage = caseStudy.featuredImage as Media | undefined
            const logo = caseStudy.clientLogo as Media | undefined

            return (
              <Link
                key={caseStudy.id}
                href={`/etudes-de-cas/${caseStudy.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                {featuredImage?.url && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={featuredImage.url}
                      alt={caseStudy.clientName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Client logo overlay */}
                    {logo?.url && (
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow">
                        <Image
                          src={logo.url}
                          alt={caseStudy.clientName || ''}
                          width={80}
                          height={32}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-cyan-dark font-medium mb-2">
                    {caseStudy.clientName}
                  </p>
                  {caseStudy.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {caseStudy.excerpt}
                    </p>
                  )}

                  {/* Main stat */}
                  {caseStudy.mainStat && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-astrak-dark">
                        {caseStudy.mainStat.value}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {caseStudy.mainStat.label}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
