'use client'

import React from 'react'
import Image from 'next/image'
import type { TestimonialsBlock, Testimonial, Media } from '@/payload-types'

interface TestimonialsBlockRendererProps {
  block: TestimonialsBlock
}

export function TestimonialsBlockRenderer({ block }: TestimonialsBlockRendererProps) {
  const heading = block.heading || 'Ils nous ont fait confiance'

  // Determine which testimonials to show
  let testimonials: Array<{
    content: string
    authorName: string
    authorRole?: string | null
    company: string
    sector?: string | null
    authorPhoto?: Media | string | null
  }> = []

  if (block.useCollection) {
    // Use selected testimonials from collection
    const selected = block.selectedTestimonials as Testimonial[] | undefined
    if (selected && selected.length > 0) {
      testimonials = selected.map((t) => ({
        content: t.content,
        authorName: t.authorName,
        authorRole: t.authorRole,
        company: t.company || '',
        sector: t.sector,
        authorPhoto: t.authorPhoto as Media | undefined,
      }))
    }
  } else {
    // Use manual testimonials
    testimonials = (block.manualTestimonials || []).map((t) => ({
      content: t.content,
      authorName: t.authorName,
      authorRole: t.authorRole,
      company: t.company || '',
      sector: t.sector,
      authorPhoto: t.authorPhoto as Media | undefined,
    }))
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark">
          {heading}
        </h2>
      </div>

      {/* Testimonials Carousel */}
      <div
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide px-4 md:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => {
          const photo = typeof testimonial.authorPhoto === 'object' ? testimonial.authorPhoto : null

          return (
            <div
              key={index}
              className="flex-shrink-0 w-[420px] md:w-[500px]"
            >
              <div className="h-full min-h-[380px] p-8 bg-white rounded-t-2xl rounded-b-[40px] shadow-sm flex flex-col">
                {/* Company info */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 font-medium text-sm">
                      {testimonial.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-astrak-dark text-sm">
                      {testimonial.company}
                    </p>
                    {testimonial.sector && (
                      <p className="text-xs text-gray-500">{testimonial.sector}</p>
                    )}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative flex-grow mb-6">
                  <span className="text-4xl text-gray-300 font-serif leading-none absolute -top-2 -left-1">"</span>
                  <p className="text-gray-600 leading-relaxed text-sm pl-5">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                    {photo?.url ? (
                      <Image
                        src={photo.url}
                        alt={testimonial.authorName}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-astrak-dark font-semibold">
                          {testimonial.authorName.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-astrak-dark">
                      {testimonial.authorName}
                    </p>
                    {testimonial.authorRole && (
                      <p className="text-sm text-gray-500">{testimonial.authorRole}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
