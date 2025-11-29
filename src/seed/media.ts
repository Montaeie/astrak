import type { Payload } from 'payload'
import path from 'path'
import fs from 'fs'

// Base URL for fetching images - uses GitHub raw content as reliable source
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/Montaeie/astrak/main/public'

// Helper to upload an image to Payload media collection
async function uploadMedia(
  payload: Payload,
  filePath: string,
  alt: string
): Promise<number | null> {
  try {
    // Check if media with this alt already exists
    const existing = await payload.find({
      collection: 'media',
      where: {
        alt: { equals: alt },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`  ⏭️  Media "${alt}" already exists, skipping`)
      return existing.docs[0].id as number
    }

    const fileName = path.basename(filePath)
    const mimeType = fileName.endsWith('.png') ? 'image/png' :
                     fileName.endsWith('.svg') ? 'image/svg+xml' :
                     fileName.endsWith('.webp') ? 'image/webp' : 'image/jpeg'

    let fileBuffer: Buffer

    // First try local file system (works in development)
    const absolutePath = path.resolve(process.cwd(), filePath)
    if (fs.existsSync(absolutePath)) {
      console.log(`  📁 Loading from local: ${fileName}`)
      fileBuffer = fs.readFileSync(absolutePath)
    } else {
      // Fallback: fetch from GitHub (works in production/Vercel)
      const relativePath = filePath.replace('public/', '')
      const imageUrl = `${GITHUB_RAW_BASE}/${relativePath}`
      console.log(`  🌐 Fetching from GitHub: ${fileName}`)

      const response = await fetch(imageUrl)
      if (!response.ok) {
        console.error(`  ❌ Failed to fetch ${imageUrl}: ${response.status}`)
        return null
      }

      const arrayBuffer = await response.arrayBuffer()
      fileBuffer = Buffer.from(arrayBuffer)
    }

    const media = await payload.create({
      collection: 'media',
      data: {
        alt,
      },
      file: {
        data: fileBuffer,
        name: fileName,
        mimetype: mimeType,
        size: fileBuffer.length,
      },
    })

    console.log(`  ✅ Uploaded: ${alt}`)
    return media.id as number
  } catch (error) {
    console.error(`  ❌ Failed to upload ${alt}:`, error)
    return null
  }
}

export interface MediaIds {
  // Client photos for testimonials
  hugoElikiRoman: number | null
  mathildeCorbin: number | null
  romainPirotte: number | null
  alainAbulafya: number | null
  manonGras: number | null
  // Partner logos
  logoBonustyme: number | null
  logoMybrocante: number | null
  logoTrustup: number | null
  logoInterflora: number | null
  logoKowee: number | null
  logoSixty8: number | null
  logoFindymail: number | null
  logoPlacedujour: number | null
  // Founder image
  leoFounder: number | null
}

export async function seedMedia(payload: Payload): Promise<MediaIds> {
  console.log('📸 Uploading media files...')

  const mediaIds: MediaIds = {
    // Client photos
    hugoElikiRoman: await uploadMedia(
      payload,
      'public/images/clients/hugo-eliki-roman.jpg',
      'Hugo Eliki Roman - Assistant Rénov'
    ),
    mathildeCorbin: await uploadMedia(
      payload,
      'public/images/clients/mathilde-corbin.jpg',
      'Mathilde Corbin - YOGOM'
    ),
    romainPirotte: await uploadMedia(
      payload,
      'public/images/clients/romain-pirotte.jpg',
      'Romain Pirotte - Black Hat SEO'
    ),
    alainAbulafya: await uploadMedia(
      payload,
      'public/images/clients/alain-abulafya.jpg',
      'Alain Abulafya - Editeur de site'
    ),
    manonGras: await uploadMedia(
      payload,
      'public/images/clients/manon-gras.jpg',
      'Manon Gras - Kowee'
    ),
    // Partner logos
    logoBonustyme: await uploadMedia(
      payload,
      'public/images/clients/logoclient-bonustyme.png',
      'Logo Bonustyme'
    ),
    logoMybrocante: await uploadMedia(
      payload,
      'public/images/clients/logoclient-mybrocante.png',
      'Logo MyBrocante'
    ),
    logoTrustup: await uploadMedia(
      payload,
      'public/images/clients/logoclient-trustup.png',
      'Logo Trustup'
    ),
    logoInterflora: await uploadMedia(
      payload,
      'public/images/clients/logoclient-interflora.png',
      'Logo Interflora'
    ),
    logoKowee: await uploadMedia(
      payload,
      'public/images/clients/logoclient-kowee.png',
      'Logo Kowee'
    ),
    logoSixty8: await uploadMedia(
      payload,
      'public/images/clients/logoclient-sixty8.png',
      'Logo Sixty8'
    ),
    logoFindymail: await uploadMedia(
      payload,
      'public/images/clients/logoclient-findymail.png',
      'Logo Findymail'
    ),
    logoPlacedujour: await uploadMedia(
      payload,
      'public/images/clients/logo-placedujour.png',
      'Logo Place du Jour'
    ),
    // Founder
    leoFounder: await uploadMedia(
      payload,
      'public/images/leo-founder.jpg',
      'Léo Poitevin - Fondateur Astrak'
    ),
  }

  console.log('📸 Media upload complete!')
  return mediaIds
}
