import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { FounderBlock, Media } from '@/payload-types'

interface FounderBlockRendererProps {
  block: FounderBlock
}

export function FounderBlockRenderer({ block }: FounderBlockRendererProps) {
  const badges = block.badges || [
    { text: '+10k abonnés Linkedin' },
    { text: '3,6 k abonnés Youtube' },
  ]
  const title = block.title || 'Léo Poitevin — Fondateur & Passionné de SEO'
  const paragraphs = block.paragraphs || [
    { text: "À la tête d'Astrak, Léo Poitevin incarne une nouvelle génération d'experts SEO : passionné, curieux et toujours en exploration." },
    { text: "Avec plus de cinq ans d'expérience à l'international, Léo a accompagné des dizaines de marques ambitieuses dans leur stratégie de visibilité." },
  ]
  const ctaLabel = block.cta?.label || "Découvrir l'agence"
  const ctaLink = block.cta?.link || '/a-propos'
  const image = block.image as Media | undefined

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile layout: Image on top, then blue card below overlapping */}
        <div className="lg:hidden">
          {/* Image - Full width on mobile */}
          <div className="relative z-10 mb-[-60px]">
            <div className="relative h-[400px] sm:h-[500px] w-full">
              {image?.url ? (
                <Image
                  src={image.url}
                  alt={image.alt || title}
                  fill
                  className="object-cover object-center grayscale rounded-t-3xl shadow-2xl"
                  priority
                />
              ) : (
                <Image
                  src="/images/leo-founder.jpg"
                  alt="Léo Poitevin - Fondateur d'Astrak"
                  fill
                  className="object-cover object-center grayscale rounded-t-3xl shadow-2xl"
                  priority
                />
              )}
            </div>
          </div>

          {/* Blue card - overlaps image */}
          <div className="relative bg-astrak-dark rounded-3xl overflow-hidden pt-20 pb-10 px-6">
            <div
              className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-40 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
              }}
            />

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6 relative z-10">
              {badges.map((badge, i) => (
                <span key={i} className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  {badge.text}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight relative z-10">
              {title}
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-300 mb-10 text-base leading-relaxed relative z-10">
              {paragraphs.map((p, i) => (
                <p key={i}>{p.text}</p>
              ))}
            </div>

            {/* Button */}
            <div className="relative z-10">
              <Link
                href={ctaLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-astrak-dark font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop layout: Side by side with image overlapping */}
        <div className="relative hidden lg:block">
          {/* Blue background */}
          <div className="absolute inset-x-0 top-8 bottom-8 bg-astrak-dark rounded-3xl overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
              }}
            />
          </div>

          {/* Content grid */}
          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-0">
            {/* Image - Left side */}
            <div className="relative z-10 px-4 lg:px-0 lg:pl-24 flex items-center">
              <div className="relative h-[650px] w-full max-w-[480px] mx-auto lg:mx-0 lg:-my-12">
                {image?.url ? (
                  <Image
                    src={image.url}
                    alt={image.alt || title}
                    fill
                    className="object-cover object-top grayscale rounded-3xl shadow-2xl"
                    priority
                  />
                ) : (
                  <Image
                    src="/images/leo-founder.jpg"
                    alt="Léo Poitevin - Fondateur d'Astrak"
                    fill
                    className="object-cover object-top grayscale rounded-3xl shadow-2xl"
                    priority
                  />
                )}
              </div>
            </div>

            {/* Content - Right side */}
            <div className="relative py-8 lg:py-16 px-6 lg:pl-8 lg:pr-12 xl:pr-16 flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                {badges.map((badge, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium">
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-6 leading-tight relative z-10">
                {title}
              </h2>

              {/* Description */}
              <div className="space-y-4 text-gray-300 mb-10 text-base lg:text-lg leading-relaxed relative z-10">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p.text}</p>
                ))}
              </div>

              {/* Button */}
              <div className="relative z-10">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-astrak-dark font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
