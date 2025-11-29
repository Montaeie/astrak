import React from 'react'
import Link from 'next/link'

const features = [
  'Stratégie Contenu',
  'Plan Netlinking',
  'Plugins essentiels à installer',
  'Optimisations prioritaires',
  '1 heure de support incluse',
]

export function StarterPack() {
  return (
    <section className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      {/* Decorative chevrons - 4 thick chevrons with sharp angles, aligned in a row */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 flex items-center"
          style={{ transform: 'translate(-50%, -50%) rotate(-8.188deg)', gap: '30px' }}
        >
          {/* Chevron 1 */}
          <svg
            className="flex-shrink-0"
            style={{ width: '334px', height: '486px' }}
            viewBox="0 0 100 150"
            fill="#79F2EC"
            opacity="0.25"
          >
            <path d="M0 0 L50 0 L100 75 L50 150 L0 150 L50 75 Z" />
          </svg>

          {/* Chevron 2 */}
          <svg
            className="flex-shrink-0"
            style={{ width: '334px', height: '486px' }}
            viewBox="0 0 100 150"
            fill="#79F2EC"
            opacity="0.2"
          >
            <path d="M0 0 L50 0 L100 75 L50 150 L0 150 L50 75 Z" />
          </svg>

          {/* Chevron 3 */}
          <svg
            className="flex-shrink-0"
            style={{ width: '334px', height: '486px' }}
            viewBox="0 0 100 150"
            fill="#79F2EC"
            opacity="0.2"
          >
            <path d="M0 0 L50 0 L100 75 L50 150 L0 150 L50 75 Z" />
          </svg>

          {/* Chevron 4 */}
          <svg
            className="flex-shrink-0"
            style={{ width: '334px', height: '486px' }}
            viewBox="0 0 100 150"
            fill="#79F2EC"
            opacity="0.25"
          >
            <path d="M0 0 L50 0 L100 75 L50 150 L0 150 L50 75 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-astrak-dark rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Starter Pack SEO
          </h2>

          <div className="mb-6">
            <span className="text-astrak-yellow text-lg">À partir de</span>
            <p className="text-6xl md:text-7xl font-bold text-astrak-yellow">
              500€
            </p>
          </div>

          <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            Le plan d'action complet pour faire décoller votre SEO en 3-4 mois, sans complexité ni accompagnement chronophage
          </p>

          <div className="mb-8">
            <p className="text-sm font-semibold text-white mb-6">
              Dans cette offre
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center justify-center gap-3">
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
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-astrak-yellow text-astrak-dark font-semibold rounded-xl hover:opacity-90 transition-colors text-sm"
            >
              Audit SEO Gratuit
            </Link>
            <Link
              href="/starter-pack"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-astrak-dark font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Découvrir le Starter Pack
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Prix adapté selon la complexité de votre projet<br />
            (jusqu'à 2000€ pour les projets premium avec intervention de Léo)
          </p>
        </div>
      </div>
    </section>
  )
}
