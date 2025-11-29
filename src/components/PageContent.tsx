'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { RenderBlocks } from '@/components/blocks'
import type { Page } from '@/payload-types'

interface PageContentProps {
  initialData: Page
}

// Get server URL - fallback to localhost for dev
const getServerURL = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

export function PageContent({ initialData }: PageContentProps) {
  const serverURL = getServerURL()

  const { data } = useLivePreview<Page>({
    initialData,
    serverURL,
    depth: 2,
  })

  const page = data || initialData

  if (!page.layout || page.layout.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-astrak-dark mb-8">
          {page.title}
        </h1>
        <p className="text-gray-600">
          Cette page n'a pas encore de contenu. Ajoutez des blocs dans Payload CMS.
        </p>
      </div>
    )
  }

  return <RenderBlocks blocks={page.layout} />
}
