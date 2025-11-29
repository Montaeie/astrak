import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from '@/lib/payload'
import { Header, Footer } from '@/components/layout'
import { RenderBlocks } from '@/components/blocks'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const payload = await getPayload()
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    })

    const page = pages.docs[0]
    if (!page) {
      return {
        title: 'Page non trouvée - Astrak',
      }
    }

    return {
      title: page.meta?.title || page.title || 'Astrak',
      description: page.meta?.description || undefined,
    }
  } catch {
    return {
      title: 'Astrak - Agence SEO Expert',
    }
  }
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload()
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: { not_equals: 'home' },
        _status: { equals: 'published' },
      },
      limit: 100,
    })

    return pages.docs.map((page) => ({
      slug: page.slug,
    }))
  } catch {
    return []
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params

  // Redirect home slug to root
  if (slug === 'home') {
    notFound()
  }

  try {
    const payload = await getPayload()
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
      depth: 2,
    })

    const page = pages.docs[0]

    if (!page) {
      notFound()
    }

    return (
      <>
        <Header />
        <main>
          {page.layout && page.layout.length > 0 ? (
            <RenderBlocks blocks={page.layout} />
          ) : (
            <div className="max-w-7xl mx-auto px-4 py-24">
              <h1 className="text-4xl font-bold text-astrak-dark mb-8">
                {page.title}
              </h1>
              <p className="text-gray-600">
                Cette page n'a pas encore de contenu. Ajoutez des blocs dans Payload CMS.
              </p>
            </div>
          )}
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    console.error('Error fetching page:', error)
    notFound()
  }
}
