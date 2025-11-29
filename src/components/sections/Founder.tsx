import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Founder() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container */}
        <div className="relative">
          {/* Blue background - full width, shorter height so image overflows */}
          <div className="absolute inset-x-0 top-8 bottom-8 bg-astrak-dark rounded-3xl overflow-hidden">
            {/* Ellipse radial gradient in top right */}
            <div
              className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
              }}
            />
          </div>

          {/* Content grid */}
          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-0">
            {/* Image - Left side, overflows top and bottom, centered vertically */}
            <div className="relative z-10 px-4 lg:px-0 lg:pl-24 flex items-center">
              <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full max-w-[480px] mx-auto lg:mx-0 lg:-my-12">
                <Image
                  src="/images/leo-founder.jpg"
                  alt="Léo Poitevin - Fondateur d'Astrak"
                  fill
                  className="object-cover object-top grayscale rounded-2xl lg:rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Content - Right side */}
            <div className="relative py-8 lg:py-16 px-6 lg:pl-8 lg:pr-12 xl:pr-16 flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  +10k abonnés Linkedin
                </span>
                <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  3,6 k abonnés Youtube
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-6 leading-tight relative z-10">
                Léo Poitevin — Fondateur & Passionné de SEO
              </h2>

              {/* Description */}
              <div className="space-y-4 text-gray-300 mb-10 text-base lg:text-lg leading-relaxed relative z-10">
                <p>
                  À la tête d'Astrak, Léo Poitevin incarne une nouvelle génération d'experts SEO : passionné, curieux et toujours en exploration.
                </p>
                <p>
                  Avec plus de cinq ans d'expérience à l'international, Léo a accompagné des dizaines de marques ambitieuses dans leur stratégie de visibilité.
                  Il met aujourd'hui cette expertise au service d'Astrak pour créer des stratégies SEO agiles, basées sur la donnée, l'expérimentation et une compréhension fine des algorithmes.
                </p>
              </div>

              {/* Button */}
              <div className="relative z-10">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-astrak-dark font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Découvrir l'agence
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
