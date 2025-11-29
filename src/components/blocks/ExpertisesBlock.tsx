import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/Button'
import type { ExpertisesBlock, Media } from '@/payload-types'

interface ExpertisesBlockRendererProps {
  block: ExpertisesBlock
}

export function ExpertisesBlockRenderer({ block }: ExpertisesBlockRendererProps) {
  const heading = block.heading || 'Nos Expertises'
  const description = block.description || 'Nos leviers et outils pour booster ta visibilité et ton acquisition'
  const ctaLabel = block.cta?.label || 'Prendre Rendez-vous'
  const ctaLink = block.cta?.link || '/contact'
  const expertises = block.expertises || []

  if (expertises.length === 0) {
    return null
  }

  const firstTwo = expertises.slice(0, 2)
  const rest = expertises.slice(2)

  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top row: Header + 2 cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Header card */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark mb-4">
              {heading}
            </h2>
            <p className="text-gray-600 max-w-sm text-lg mb-8">
              {description}
            </p>
            <div>
              <Button href={ctaLink} variant="primary">
                {ctaLabel}
              </Button>
            </div>
          </div>

          {/* First 2 expertise cards */}
          {firstTwo.map((expertise) => {
            const iconMedia = expertise.icon as Media | undefined
            return (
              <div
                key={expertise.id}
                className="group relative p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  {iconMedia?.url && (
                    <div className="flex-shrink-0">
                      <Image src={iconMedia.url} alt={expertise.title} width={48} height={48} />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-astrak-dark">
                    {expertise.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {expertise.description}
                </p>

                <Link
                  href={expertise.href}
                  className="inline-flex items-center gap-2 text-astrak-dark font-semibold text-sm underline underline-offset-4 hover:text-cyan-dark transition-colors"
                >
                  Découvrir ce service
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom row: remaining cards */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((expertise) => {
              const iconMedia = expertise.icon as Media | undefined
              return (
                <div
                  key={expertise.id}
                  className="group relative p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {iconMedia?.url && (
                      <div className="flex-shrink-0">
                        <Image src={iconMedia.url} alt={expertise.title} width={48} height={48} />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-astrak-dark">
                      {expertise.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {expertise.description}
                  </p>

                  <Link
                    href={expertise.href}
                    className="inline-flex items-center gap-2 text-astrak-dark font-semibold text-sm underline underline-offset-4 hover:text-cyan-dark transition-colors"
                  >
                    Découvrir ce service
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
