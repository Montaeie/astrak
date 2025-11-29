'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Page } from '@/payload-types'

interface LivePreviewListenerProps {
  initialData: Page
  onDataChange: (data: Page) => void
}

export function LivePreviewListener({ initialData, onDataChange }: LivePreviewListenerProps) {
  const { data } = useLivePreview<Page>({
    initialData,
    serverURL: process.env.NEXT_PUBLIC_SITE_URL || '',
    depth: 2,
  })

  // When data changes, notify parent
  if (data && data !== initialData) {
    onDataChange(data)
  }

  return null
}
