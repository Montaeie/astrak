import React from 'react'
import Image from 'next/image'
import type { TwoColumnBlock, Media } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface TwoColumnBlockRendererProps {
  block: TwoColumnBlock
}

export function TwoColumnBlockRenderer({ block }: TwoColumnBlockRendererProps) {
  const { leftColumn, rightColumn, image, imagePosition = 'right' } = block
  const imageMedia = image as Media | undefined

  const hasContent = leftColumn || rightColumn

  if (!hasContent) {
    return null
  }

  const ImageComponent = imageMedia?.url ? (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
      <Image
        src={imageMedia.url}
        alt={imageMedia.alt || ''}
        fill
        className="object-cover"
      />
    </div>
  ) : null

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
          {/* Left column or Image */}
          <div className={imagePosition === 'left' && ImageComponent ? 'order-2 md:order-1' : ''}>
            {imagePosition === 'left' && ImageComponent ? (
              ImageComponent
            ) : (
              <div className="prose prose-lg prose-astrak max-w-none">
                {leftColumn && <RichText data={leftColumn} />}
              </div>
            )}
          </div>

          {/* Right column or Image */}
          <div className={imagePosition === 'left' && ImageComponent ? 'order-1 md:order-2' : ''}>
            {imagePosition === 'right' && ImageComponent ? (
              ImageComponent
            ) : (
              <div className="prose prose-lg prose-astrak max-w-none">
                {rightColumn && <RichText data={rightColumn} />}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
