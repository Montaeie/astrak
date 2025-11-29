import type { Payload } from 'payload'
import type { MediaIds } from './media'

interface TestimonialData {
  content: string
  authorName: string
  authorRole?: string
  company: string
  sector?: string
  authorPhotoId: number | null
  order: number
}

const testimonialData: Omit<TestimonialData, 'authorPhotoId'>[] = [
  {
    content: "Nous avons travaillé avec Astrak pour les premiers investissements en référencement naturel de notre site Assistant Rénov. Astrak a bien compris les spécificités de notre activité et a su proposer une stratégie SEO pertinente, qui a montré des résultats prometteurs en termes de ranking et de volume de leads. Au-delà de la stratégie globale, Léo et son équipe nous ont aussi accompagnés sur des petits détails techniques liés au site, toujours avec réactivité.",
    authorName: 'Hugo ELIKI ROMAN',
    company: 'Assistant Rénov',
    order: 1,
  },
  {
    content: "Je recommande à 100% ! Après avoir fait appel à plusieurs free-lance pour du conseil en référencement, en web développement ou autres prestations liés à mon e-commerce administré via WordPress j'ai enfin trouvé une personne à la fois fiable et compétente mais aussi professionnelle et sympathique. Du bon boulot, des idées et du suivi ! N'hésitez pas à lui faire confiance !",
    authorName: 'Mathilde Corbin',
    authorRole: 'Fondatrice',
    company: 'YOGOM',
    sector: 'Sport & Fitness',
    order: 2,
  },
  {
    content: "Travailler avec Léo est une véritable chance. Non seulement il excelle dans le domaine du SEO, mais il apporte également une vision business aiguisée qui fait toute la différence. Léo est sans conteste l'un des meilleurs experts SEO que j'ai eu l'occasion de rencontrer, reconnu dans la sphère francophone pour son approche avant-gardiste et ses trouvailles toujours innovantes. Collaborer avec lui depuis un an a été un réel plaisir.",
    authorName: 'Romain Pirotte',
    authorRole: 'Automation, R&D, SEO Hacks & Tips',
    company: 'Black Hat SEO',
    sector: 'Marketing & Publicité',
    order: 3,
  },
  {
    content: "Léo m'a aidé pendant 4 mois sur le SEO de mon site thématique concurrentielle sur le \"Gambling\" et j'ai été très satisfait. Il maitrise parfaitement le netlinking et m'a trouvé les meilleurs spots aux prix les plus attractifs pour booker tous les mois mes backlinks. Au dela du netlinking il m'a apporté de vrais conseils sur la stratégie à mettre en place sur le long terme pour obtenir des résultats concrets.",
    authorName: 'Alain ABULAFYA',
    authorRole: 'Indépendant',
    company: 'Editeur de site independant',
    sector: 'Media',
    order: 4,
  },
  {
    content: "Nous avons fait appel à Astrak pour notre stratégie SEO et nous en sommes très satisfaits. En moins de 6 mois, nous sommes passés premiers sur Google sur des requêtes clés, ce qui a eu un impact direct et positif sur notre visibilité et notre activité. Leur approche sur-mesure, leur réactivité et leur expertise nous ont permis d'atteindre rapidement nos objectifs. Nous recommandons vivement Astrak pour toute entreprise souhaitant booster son référencement.",
    authorName: 'Manon Gras',
    authorRole: 'International Senior Sales',
    company: 'Kowee',
    order: 5,
  },
]

export async function seedTestimonials(payload: Payload, mediaIds: MediaIds): Promise<number[]> {
  console.log('💬 Creating testimonials...')

  // Map testimonials to their photos
  const testimonialsWithPhotos: TestimonialData[] = [
    { ...testimonialData[0], authorPhotoId: mediaIds.hugoElikiRoman },
    { ...testimonialData[1], authorPhotoId: mediaIds.mathildeCorbin },
    { ...testimonialData[2], authorPhotoId: mediaIds.romainPirotte },
    { ...testimonialData[3], authorPhotoId: mediaIds.alainAbulafya },
    { ...testimonialData[4], authorPhotoId: mediaIds.manonGras },
  ]

  const createdIds: number[] = []

  for (const testimonial of testimonialsWithPhotos) {
    // Check if testimonial already exists
    const existing = await payload.find({
      collection: 'testimonials',
      where: {
        authorName: { equals: testimonial.authorName },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`  ⏭️  Testimonial from "${testimonial.authorName}" already exists, skipping`)
      createdIds.push(existing.docs[0].id as number)
      continue
    }

    try {
      const created = await payload.create({
        collection: 'testimonials',
        data: {
          content: testimonial.content,
          authorName: testimonial.authorName,
          authorRole: testimonial.authorRole,
          company: testimonial.company,
          sector: testimonial.sector,
          authorPhoto: testimonial.authorPhotoId,
          order: testimonial.order,
        },
      })

      console.log(`  ✅ Created testimonial from: ${testimonial.authorName}`)
      createdIds.push(created.id as number)
    } catch (error) {
      console.error(`  ❌ Failed to create testimonial from ${testimonial.authorName}:`, error)
    }
  }

  console.log('💬 Testimonials seeding complete!')
  return createdIds
}
