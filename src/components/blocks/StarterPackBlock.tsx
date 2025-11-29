import React from 'react'
import Link from 'next/link'
import type { StarterPackBlock } from '@/payload-types'

interface StarterPackBlockRendererProps {
  block: StarterPackBlock
}

export function StarterPackBlockRenderer({ block }: StarterPackBlockRendererProps) {
  const title = block.title || 'Starter Pack SEO'
  const priceLabel = block.priceLabel || 'À partir de'
  const price = block.price || '500€'
  const description = block.description || "Le plan d'action complet pour faire décoller votre SEO en 3-4 mois, sans complexité ni accompagnement chronophage"
  const featuresLabel = block.featuresLabel || 'Dans cette offre'
  const features = block.features || [
    { text: 'Stratégie Contenu' },
    { text: 'Plan Netlinking' },
    { text: 'Plugins essentiels à installer' },
    { text: 'Optimisations prioritaires' },
    { text: '1 heure de support incluse' },
  ]
  const primaryCtaLabel = block.primaryCta?.label || 'Audit SEO Gratuit'
  const primaryCtaLink = block.primaryCta?.link || '/contact'
  const secondaryCtaLabel = block.secondaryCta?.label || 'Découvrir le Starter Pack'
  const secondaryCtaLink = block.secondaryCta?.link || '/starter-pack'
  const footnote = block.footnote || "Prix adapté selon la complexité de votre projet\n(jusqu'à 2000€ pour les projets premium avec intervention de Léo)"

  return (
    <section className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      {/* Decorative chevrons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 flex items-center"
          style={{ transform: 'translate(-50%, -50%) rotate(-8.188deg)', gap: '30px' }}
        >
          {[0.25, 0.2, 0.2, 0.25].map((opacity, i) => (
            <svg
              key={i}
              className="flex-shrink-0"
              style={{ width: '334px', height: '486px' }}
              viewBox="0 0 100 150"
              fill="#79F2EC"
              opacity={opacity}
            >
              <path d="M0 0 L50 0 L100 75 L50 150 L0 150 L50 75 Z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-astrak-dark rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {title}
          </h2>

          <div className="mb-6">
            <span className="text-astrak-yellow text-lg">{priceLabel}</span>
            <p className="text-6xl md:text-7xl font-bold text-astrak-yellow">
              {price}
            </p>
          </div>

          <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            {description}
          </p>

          <div className="mb-8">
            <p className="text-sm font-semibold text-white mb-6">
              {featuresLabel}
            </p>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-3">
                  <svg
                    className="w-5 h-5 text-astrak-yellow flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row gap-3 justify-center">
            <Link
              href={primaryCtaLink}
              className="inline-flex items-center justify-center px-6 py-3 bg-astrak-yellow text-astrak-dark font-semibold rounded-xl hover:opacity-90 transition-colors text-sm"
            >
              {primaryCtaLabel}
            </Link>
            <Link
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-astrak-dark font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              {secondaryCtaLabel}
            </Link>
          </div>

          {footnote && (
            <p className="mt-8 text-sm text-gray-400 whitespace-pre-line">
              {footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
