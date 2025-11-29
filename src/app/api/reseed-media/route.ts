import { NextResponse } from 'next/server'
import { getPayload } from '@/lib/payload'
import { seedMedia } from '@/seed/media'

export async function GET() {
  try {
    const payload = await getPayload()

    // Delete all existing media
    console.log('🗑️ Deleting existing media...')
    const existingMedia = await payload.find({
      collection: 'media',
      limit: 100,
    })

    for (const media of existingMedia.docs) {
      await payload.delete({
        collection: 'media',
        id: media.id,
      })
      console.log(`  Deleted: ${media.alt}`)
    }

    // Re-upload all media
    console.log('📸 Re-uploading media...')
    const mediaIds = await seedMedia(payload)

    // Update testimonials with new media IDs
    console.log('🔗 Updating testimonials with new photos...')
    const testimonials = await payload.find({
      collection: 'testimonials',
      limit: 10,
    })

    const photoMapping: Record<string, number | null> = {
      'Hugo ELIKI ROMAN': mediaIds.hugoElikiRoman,
      'Mathilde Corbin': mediaIds.mathildeCorbin,
      'Romain Pirotte': mediaIds.romainPirotte,
      'Alain ABULAFYA': mediaIds.alainAbulafya,
      'Manon Gras': mediaIds.manonGras,
    }

    for (const testimonial of testimonials.docs) {
      const photoId = photoMapping[testimonial.authorName]
      if (photoId) {
        await payload.update({
          collection: 'testimonials',
          id: testimonial.id,
          data: {
            authorPhoto: photoId,
          },
        })
        console.log(`  Updated photo for: ${testimonial.authorName}`)
      }
    }

    // Update home page with new partner logos
    console.log('🏠 Updating home page with new logos...')
    const homePage = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
      limit: 1,
    })

    if (homePage.docs.length > 0) {
      const page = homePage.docs[0]
      const layout = page.layout || []

      // Find and update partnersLogos block
      const updatedLayout = layout.map((block: any) => {
        if (block.blockType === 'partnersLogos') {
          return {
            ...block,
            partners: [
              { name: 'Bonustyme', logo: mediaIds.logoBonustyme },
              { name: 'MyBrocante', logo: mediaIds.logoMybrocante },
              { name: 'Trustup', logo: mediaIds.logoTrustup },
              { name: 'Interflora', logo: mediaIds.logoInterflora },
              { name: 'Kowee', logo: mediaIds.logoKowee },
              { name: 'Sixty8', logo: mediaIds.logoSixty8 },
              { name: 'Findymail', logo: mediaIds.logoFindymail },
              { name: 'Place du Jour', logo: mediaIds.logoPlacedujour },
            ].filter(p => p.logo !== null),
          }
        }
        if (block.blockType === 'founder') {
          return {
            ...block,
            founderImage: mediaIds.leoFounder,
          }
        }
        return block
      })

      await payload.update({
        collection: 'pages',
        id: page.id,
        data: {
          layout: updatedLayout,
        } as any,
      })
      console.log('  ✅ Home page updated!')
    }

    return NextResponse.json({
      message: 'Media reseed completed!',
      mediaIds,
    })
  } catch (error) {
    console.error('Reseed error:', error)
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    )
  }
}
