import React from 'react'
import type { ContentBlock } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface ContentBlockRendererProps {
  block: ContentBlock
}

export function ContentBlockRenderer({ block }: ContentBlockRendererProps) {
  if (!block.content) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-astrak max-w-none">
          <RichText data={block.content} />
        </div>
      </div>
    </section>
  )
}
