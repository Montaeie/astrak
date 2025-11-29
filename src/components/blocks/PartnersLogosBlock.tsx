import React from 'react'
import Image from 'next/image'
import type { PartnersLogosBlock, Media } from '@/payload-types'

interface PartnersLogosBlockRendererProps {
  block: PartnersLogosBlock
}

export function PartnersLogosBlockRenderer({ block }: PartnersLogosBlockRendererProps) {
  const partners = block.partners || []

  if (partners.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => {
            const logo = partner.logo as Media | undefined
            if (!logo?.url) return null

            return (
              <div key={partner.id || index} className="opacity-40 hover:opacity-70 transition-opacity grayscale invert">
                <Image
                  src={logo.url}
                  alt={partner.name || logo.alt || 'Partner logo'}
                  width={120}
                  height={40}
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
