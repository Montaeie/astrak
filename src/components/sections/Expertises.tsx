import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/Button'

function IconStar() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6l5.18 10.5 11.59 1.69-8.39 8.17 1.98 11.54L24 32.25l-10.36 5.45 1.98-11.54-8.39-8.17 11.59-1.69L24 6z" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

function IconAudit() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="20" height="26" rx="2" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M12 14h12M12 20h12M12 26h8" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="8" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M38 38l4 4" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function IconNetlinking() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="18" width="12" height="12" rx="2" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <rect x="30" y="18" width="12" height="12" rx="2" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <rect x="18" y="6" width="12" height="12" rx="2" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <rect x="18" y="30" width="12" height="12" rx="2" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M18 24h-6M30 24h6M24 18v-6M24 30v6" stroke="#0F0F3D" strokeWidth="2"/>
    </svg>
  )
}

function IconBlackHat() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24l8-8 8 8 8-8 8 8" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 32l8-8 8 8 8-8 8 8" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="38" cy="10" r="4" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M38 14v4M34 10h-4" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

const expertises = [
  {
    title: 'Référencement ChatGPT',
    description:
      'Notre agence GEO transforme votre visibilité digitale sur ChatGPT, Google SGE, Perplexity, Claude, Gemini et Bing Chat. On vous positionne directement dans les réponses des intelligences artificielles.',
    href: '/expertises/referencement-chatgpt',
    icon: <Image src="/images/icons/icon-chatgpt.svg" alt="ChatGPT" width={48} height={48} />,
  },
  {
    title: 'Agence E-reputation',
    description:
      'Grâce à un mix de SEO, netlinking et stratégie de contenu, nous aidons les entreprises et particuliers à maîtriser leur image sur Google et les plateformes d\'avis.',
    href: '/expertises/e-reputation',
    icon: <IconStar />,
  },
  {
    title: 'Audit SEO Approfondi',
    description:
      'Boostez votre visibilité en ligne grâce à un audit SEO personnalisé. Découvrez les points d\'amélioration clés de votre site et repartez avec une feuille de route claire pour optimiser votre positionnement sur Google.',
    href: '/expertises/audit-seo',
    icon: <IconAudit />,
  },
  {
    title: 'Netlinking Premium',
    description:
      'Discutons de votre stratégie de netlinking personnalisée et découvrez comment nous pouvons multiplier votre autorité de domaine avec nos campagnes sur-mesure à partir de 1000€/mois.',
    href: '/expertises/netlinking',
    icon: <IconNetlinking />,
  },
  {
    title: 'SEO Black Hat',
    description:
      'Vous avez déjà optimisé tous les fondamentaux du SEO ? Votre site respecte toutes les bonnes pratiques White Hat, mais vous stagnez face à une concurrence féroce ? Le Black Hat SEO est la solution.',
    href: '/expertises/black-hat-seo',
    icon: <IconBlackHat />,
  },
]

export function Expertises() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top row: Header + 2 cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Header card */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark mb-4">
              Nos Expertises
            </h2>
            <p className="text-gray-600 max-w-sm text-lg mb-8">
              Nos leviers et outils pour booster ta visibilité et ton acquisition
            </p>
            <div>
              <Button href="/contact" variant="primary">
                Prendre Rendez-vous
              </Button>
            </div>
          </div>

          {/* First 2 expertise cards */}
          {expertises.slice(0, 2).map((expertise) => (
            <div
              key={expertise.title}
              className="group relative p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  {expertise.icon}
                </div>
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
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertises.slice(2).map((expertise) => (
            <div
              key={expertise.title}
              className="group relative p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  {expertise.icon}
                </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
