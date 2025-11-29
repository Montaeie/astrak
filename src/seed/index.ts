import type { Payload } from 'payload'
import { seedMedia, type MediaIds } from './media'
import { seedTestimonials } from './testimonials'

export async function seed(payload: Payload) {
  console.log('🌱 Starting full seed...')

  try {
    // 1. Upload all media files
    const mediaIds = await seedMedia(payload)

    // 2. Create testimonials with photos
    const testimonialIds = await seedTestimonials(payload, mediaIds)

    // 3. Update or create home page with all references
    await seedHomePage(payload, mediaIds, testimonialIds)

    console.log('✅ Full seed completed!')
    return { mediaIds, testimonialIds }
  } catch (error) {
    console.error('❌ Seed failed:', error)
    throw error
  }
}

async function seedHomePage(
  payload: Payload,
  mediaIds: MediaIds,
  testimonialIds: number[]
) {
  console.log('🏠 Updating home page...')

  // Check if home page exists
  const existingPages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
    limit: 1,
  })

  const allPartners = [
    { name: 'Bonustyme', logo: mediaIds.logoBonustyme },
    { name: 'MyBrocante', logo: mediaIds.logoMybrocante },
    { name: 'Trustup', logo: mediaIds.logoTrustup },
    { name: 'Interflora', logo: mediaIds.logoInterflora },
    { name: 'Kowee', logo: mediaIds.logoKowee },
    { name: 'Sixty8', logo: mediaIds.logoSixty8 },
    { name: 'Findymail', logo: mediaIds.logoFindymail },
    { name: 'Place du Jour', logo: mediaIds.logoPlacedujour },
  ]

  const partnersLogosBlock = {
    blockType: 'partnersLogos' as const,
    partners: allPartners
      .filter((p): p is { name: string; logo: number } => p.logo !== null)
      .map(p => ({ name: p.name, logo: p.logo })),
  }

  const testimonialsBlock = {
    blockType: 'testimonials',
    heading: 'Ils nous ont fait confiance',
    useCollection: true,
    selectedTestimonials: testimonialIds.length > 0 ? testimonialIds : undefined,
  }

  const pageData = {
    title: 'Accueil',
    slug: 'home',
    _status: 'published' as const,
    layout: [
      // Hero Block
      {
        blockType: 'hero',
        title: "On va accélérer ton SEO",
        highlightedWord: 'SEO',
        description: "On t'aide a ranker plus vite et au mieux: audit technique, stratégie de contenu, netlinkling premium et stratégie. Moins de process et plus de traffic de qualité et de leads.",
        badges: [
          { text: '+30 clients satisfaits' },
          { text: '+20k abonnés sur le RS' },
        ],
        cta: {
          label: 'Audit SEO Gratuit',
          link: '/contact',
        },
        stats: {
          visitors: '304 k',
          impressions: '7,57 M',
          ctr: '7%',
          position: '3,9',
        },
        floatingBadges: {
          upBadge: {
            title: '+345 Nouveau Visiteurs',
            subtitle: 'dans les dernières 24h',
          },
          downBadge: {
            title: "-47% Coût d'acquisition",
            subtitle: 'depuis la mise a jour',
          },
        },
      },
      // Partners Logos Block - now with logos!
      partnersLogosBlock,
      // Expertises Block
      {
        blockType: 'expertises',
        heading: 'Nos Expertises',
        description: 'Nos leviers et outils pour booster ta visibilité et ton acquisition',
        cta: {
          label: 'Prendre Rendez-vous',
          link: '/contact',
        },
        expertises: [
          {
            title: 'Référencement ChatGPT',
            description: "Notre agence GEO transforme votre visibilité digitale sur ChatGPT, Google SGE, Perplexity, Claude, Gemini et Bing Chat. On vous positionne directement dans les réponses des intelligences artificielles.",
            href: '/expertises/referencement-chatgpt',
            icon: mediaIds.iconChatgpt,
          },
          {
            title: 'Agence E-reputation',
            description: "Grâce à un mix de SEO, netlinking et stratégie de contenu, nous aidons les entreprises et particuliers à maîtriser leur image sur Google et les plateformes d'avis.",
            href: '/expertises/e-reputation',
            iconType: 'star',
          },
          {
            title: 'Audit SEO Approfondi',
            description: "Boostez votre visibilité en ligne grâce à un audit SEO personnalisé. Découvrez les points d'amélioration clés de votre site et repartez avec une feuille de route claire pour optimiser votre positionnement sur Google.",
            href: '/expertises/audit-seo',
            iconType: 'audit',
          },
          {
            title: 'Netlinking Premium',
            description: "Discutons de votre stratégie de netlinking personnalisée et découvrez comment nous pouvons multiplier votre autorité de domaine avec nos campagnes sur-mesure à partir de 1000€/mois.",
            href: '/expertises/netlinking',
            iconType: 'netlinking',
          },
          {
            title: 'SEO Black Hat',
            description: "Vous avez déjà optimisé tous les fondamentaux du SEO ? Votre site respecte toutes les bonnes pratiques White Hat, mais vous stagnez face à une concurrence féroce ? Le Black Hat SEO est la solution.",
            href: '/expertises/black-hat-seo',
            iconType: 'blackhat',
          },
        ],
      },
      // Founder Block
      {
        blockType: 'founder',
        badges: [
          { text: '+10k abonnés Linkedin' },
          { text: '3,6 k abonnés Youtube' },
        ],
        title: 'Léo Poitevin — Fondateur & Passionné de SEO',
        paragraphs: [
          { text: "À la tête d'Astrak, Léo Poitevin incarne une nouvelle génération d'experts SEO : passionné, curieux et toujours en exploration." },
          { text: "Avec plus de cinq ans d'expérience à l'international, Léo a accompagné des dizaines de marques ambitieuses dans leur stratégie de visibilité. Il met aujourd'hui cette expertise au service d'Astrak pour créer des stratégies SEO agiles, basées sur la donnée, l'expérimentation et une compréhension fine des algorithmes." },
        ],
        cta: {
          label: "Découvrir l'agence",
          link: '/a-propos',
        },
        founderImage: mediaIds.leoFounder,
      },
      // Results Block
      {
        blockType: 'results',
        heading: "Nos réussites parlent d'elles-mêmes",
        results: [
          {
            client: 'MyBrocante',
            stat: '+140%',
            label: 'de traffic organique en 6 mois',
            href: '/etudes-de-cas/mybrocante',
            icon: mediaIds.iconMybrocante,
          },
          {
            client: 'Nativus CBD',
            stat: 'Top 3 Google',
            label: 'sur 10 mots-clés stratégiques',
            href: '/etudes-de-cas/nativus-cbd',
            icon: mediaIds.iconNativusCBD,
          },
          {
            client: 'Assistant Rénov',
            stat: '+60%',
            label: 'de leads qualifiés après refonte',
            href: '/etudes-de-cas/assistant-renov',
            icon: mediaIds.iconAssistantRenov,
          },
        ],
      },
      // Starter Pack Block
      {
        blockType: 'starterPack',
        title: 'Starter Pack SEO',
        priceLabel: 'À partir de',
        price: '500€',
        description: "Le plan d'action complet pour faire décoller votre SEO en 3-4 mois, sans complexité ni accompagnement chronophage",
        featuresLabel: 'Dans cette offre',
        features: [
          { text: 'Stratégie Contenu' },
          { text: 'Plan Netlinking' },
          { text: 'Plugins essentiels à installer' },
          { text: 'Optimisations prioritaires' },
          { text: '1 heure de support incluse' },
        ],
        primaryCta: {
          label: 'Audit SEO Gratuit',
          link: '/contact',
        },
        secondaryCta: {
          label: 'Découvrir le Starter Pack',
          link: '/starter-pack',
        },
        footnote: "Prix adapté selon la complexité de votre projet\n(jusqu'à 2000€ pour les projets premium avec intervention de Léo)",
      },
      // Testimonials Block - using collection now!
      testimonialsBlock,
      // CTA Block
      {
        blockType: 'cta',
        title: 'Prêt à propulser ta visibilité sur Google?',
        subtitle: 'Commence par un audit SEO gratuit et découvre ton potentiel de croissance',
        buttonText: 'Prendre Rendez-vous',
        buttonLink: '/contact',
      },
    ],
    meta: {
      title: 'Astrak | Agence SEO & IA Générative',
      description: "On va accélérer ton SEO. Audit technique, stratégie de contenu, netlinking premium et plus de trafic de qualité.",
    },
  }

  if (existingPages.docs.length > 0) {
    // Update existing page
    await payload.update({
      collection: 'pages',
      id: existingPages.docs[0].id,
      data: pageData as any,
    })
    console.log('  ✅ Home page updated!')
  } else {
    // Create new page
    await payload.create({
      collection: 'pages',
      data: pageData as any,
    })
    console.log('  ✅ Home page created!')
  }
}

export { seedMedia } from './media'
export { seedTestimonials } from './testimonials'
