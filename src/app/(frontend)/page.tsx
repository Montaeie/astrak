import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from '@/lib/payload'
import { Header, Footer } from '@/components/layout'
import { RenderBlocks } from '@/components/blocks'
import type { Metadata } from 'next'

// Fallback components for static content (when no CMS data)
import {
  Hero,
  PartnersLogos,
  Expertises,
  Founder,
  Results,
  StarterPack,
  Testimonials,
  CTASection,
} from '@/components/sections'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayload()
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: 'home' },
      },
      limit: 1,
    })

    const page = pages.docs[0]
    if (!page) {
      return {
        title: 'Astrak - Agence SEO Expert',
        description: 'On va accélérer ton SEO.',
      }
    }

    return {
      title: page.meta?.title || page.title || 'Astrak - Agence SEO Expert',
      description: page.meta?.description || 'On va accélérer ton SEO.',
    }
  } catch {
    return {
      title: 'Astrak - Agence SEO Expert',
      description: 'On va accélérer ton SEO.',
    }
  }
}

export default async function HomePage() {
  try {
    const payload = await getPayload()
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: 'home' },
      },
      limit: 1,
      depth: 2,
    })

    const page = pages.docs[0]

    // If page exists and has layout blocks, render dynamically
    if (page && page.layout && page.layout.length > 0) {
      return (
        <>
          <Header />
          <main>
            <RenderBlocks blocks={page.layout} />
          </main>
          <Footer />
        </>
      )
    }

    // Fallback to static components if no CMS page found
    return (
      <>
        <Header />
        <main>
          <Hero />
          <PartnersLogos />
          <Expertises />
          <Founder />
          <Results />
          <StarterPack />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    console.error('Error fetching home page:', error)

    // Fallback to static components on error
    return (
      <>
        <Header />
        <main>
          <Hero />
          <PartnersLogos />
          <Expertises />
          <Founder />
          <Results />
          <StarterPack />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
      </>
    )
  }
}
